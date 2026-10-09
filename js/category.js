// Category page: shortcut circles, filters (colour, seat height, form,
// material, filling, availability), sorting, the product grid and a short
// text below it. Which category is shown comes from the URL, e.g.
// kategorie.html?k=yogamatten or kategorie.html?k=reise-yogamatte. The
// category data itself is in shared.js (the search and the menus use it too).

// Filter options, in the original's order (swatch colours measured from its
// filter; "Bezug Meditationskissen" shows Braun before Gelb). "Align" is a
// cork print.
const colorFamilies = [
  { name: "Beige", swatch: "#fcfaf5" },
  { name: "Blau", swatch: "#44709c" },
  { name: "Rot", swatch: "#972626" },
  { name: "Grün", swatch: "#5f837e" },
  { name: "Terra", swatch: "#e17f43" },
  { name: "Schwarz", swatch: "#000" },
  { name: "Grau", swatch: "#b7abae" },
  { name: "Rosa", swatch: "#c69a98" },
  { name: "Braun", swatch: "#9b6e55" },
  { name: "Gelb", swatch: "#d1a128" },
  { name: "Align", swatch: "repeating-linear-gradient(135deg, #c9a77e 0 5px, #b48f63 5px 7px)" },
  // The original shows a photo of wood grain here; this is a drawn stand-in.
  { name: "Wood Grain", swatch: "repeating-linear-gradient(100deg, #ded6c9 0 3px, #cbc1b0 3px 5px, #d7cebf 5px 9px)" },
];
const materials = ["Bio-Baumwolle (kbA)", "Naturkautschuk", "Polyester", "Recyceltes Polyester", "PU (Polyurethan)", "PVC (Polyvinylchlorid)", "Naturkork",
  "Rotes Sandelholz", "Tulsi", "Rudraksha", "Polymere Klebefolie mit UV-Schutz", "Schurwolle", "Europäisches Buchenholz", "Viskose"];
const fillings = ["Bio-Dinkelspelz (kbA)", "Kapokwolle", "95% Leinsaat, 5% Lavendel", "Baumwollvlies"];
const forms = ["Rund", "Halbrund", "Zafu"];
const seatHeights = { 10: "10 cm (niedrig)", 15: "15 cm (standard)", 20: "20 cm (hoch)" };
const clothingSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const availabilities = ["Verfügbar", "Nicht verfügbar"];

// "Am relevantesten" keeps the page's own order, except for clothing: there
// the original ranks the models differently from its default order.
const relevanceRanking = ["Heya Culotte", "Naima Top", "Amina Wrap Top", "ELI Womens Tee (Short Sleeve)", "BECCA Leggings", "MIKO Bralette",
  "QUINN Mens Pants", "FIONA Womens Pants", "REID Mens Tank-Top", "ALA Tank Tee", "NIA Womens Sweater", "DANA Overall", "FEND Mens Sweater"];
const relevance = (card) => relevanceRanking.indexOf(card.name);

const sorters = {
  relevanz: { label: "Am relevantesten", compare: (a, b) => relevance(a) - relevance(b) || a.order - b.order },
  meistverkauft: { label: "meistverkauft", compare: (a, b) => rankOf(a) - rankOf(b) || a.order - b.order },
  "a-z": { label: "Alphabetisch, A-Z", compare: (a, b) => a.name.localeCompare(b.name, "de") || a.order - b.order },
  "z-a": { label: "Alphabetisch, Z-A", compare: (a, b) => b.name.localeCompare(a.name, "de") || a.order - b.order },
  "preis-auf": { label: "Preis, niedrig nach hoch", compare: (a, b) => a.price - b.price || a.order - b.order },
  "preis-ab": { label: "Preis, hoch nach niedrig", compare: (a, b) => b.price - a.price || a.order - b.order },
};

// ---------- Markup ----------
const chevronDown = `<svg class="filter__chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>`;
const sortIcon = `<svg class="filter__chevron filter__chevron--sort" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2v12M2 11l3 3 3-3M11 14V2M8 5l3-3 3 3"/></svg>`;
const slidersIcon = `<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M2.5 4.5h13M2.5 9h13M2.5 13.5h13"/><circle cx="11.5" cy="4.5" r="1.75"/><circle cx="6" cy="9" r="1.75"/><circle cx="12.5" cy="13.5" r="1.75"/></svg>`;

function filterPanel(key, label, options) {
  return `
        <details class="filter" name="filters" data-filter="${key}">
          <summary class="filter__toggle">${label}<span class="filter__count"></span>${chevronDown}</summary>
          <div class="filter__panel">
            ${options}
            <button class="btn btn--secondary btn--block filter__reset" type="button">Filter zurücksetzen</button>
          </div>
        </details>`;
}

function checkboxList(values, labels = {}) {
  return `<div class="filter__options">${values.map((value) => `
              <label class="filter__check"><input type="checkbox" value="${value}">${labels[value] || value}</label>`).join("")}
            </div>`;
}

function swatchList(families) {
  return `<div class="filter__swatches">${families.map((family) => `
              <label class="filter-swatch" title="${family.name}">
                <input type="checkbox" value="${family.name}" class="visually-hidden">
                <span class="filter-swatch__dot" style="background: ${family.swatch}"></span>
                <span class="visually-hidden">${family.name}</span>
              </label>`).join("")}
            </div>`;
}

// The number of ticked values, as a small gold badge (filled in by render()).
const countBadge = (key) => `<span class="filter-badge" data-count="${key}" hidden></span>`;

// Below 780px the original swaps the bar for a "Filter" button: a drawer
// lists the filters and each one opens its own panel. Ticking a value
// filters right away; "anwenden" just goes back (panel) or closes (drawer).
function filterDrawerMarkup(groups) {
  const rows = groups.map((group) => `
            <li><button class="filter-drawer__row" type="button" data-open="${group.key}">
              <span>${group.label}</span>${countBadge(group.key)}${chevron("right")}
            </button></li>`).join("");
  const panels = groups.map((group) => `
          <section class="filter-drawer__panel" data-filter="${group.key}" aria-label="${group.label}" hidden>
            <button class="filter-drawer__back" type="button">${chevron("left")}<span>${group.label}</span>${countBadge(group.key)}</button>
            ${group.options}
            <div class="filter-drawer__actions">
              <button class="btn btn--secondary btn--block filter__reset" type="button">Filter zurücksetzen</button>
              <button class="btn btn--primary btn--block filter-drawer__done" type="button">Filter anwenden</button>
            </div>
          </section>`).join("");
  return `
      <dialog class="filter-drawer" aria-labelledby="filter-drawer-title">
        <div class="filter-drawer__header">
          <h2 class="filter-drawer__title" id="filter-drawer-title">Filter</h2>
          <button class="icon-btn filter-drawer__close" type="button" aria-label="Filter schließen">
            <svg class="icon" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>
          </button>
        </div>
        <div class="filter-drawer__body">
          <ul class="filter-drawer__list">${rows}
          </ul>
        </div>
        <div class="filter-drawer__actions">
          <button class="btn btn--secondary btn--block category__reset-all" type="button">Alle Filter zurücksetzen</button>
          <button class="btn btn--primary btn--block filter-drawer__done" type="button">Alle Filter anwenden</button>
        </div>${panels}
      </dialog>`;
}

// Like the original, pages open sorted by "meistverkauft" unless they say
// otherwise. "standard" keeps the page's own order with no option ticked
// (the original's menu then says "Bitte wähle eine Sortieroption").
const defaultSort = (category) => category.sort || "meistverkauft";
const compareBy = (key) => sorters[key]?.compare || ((a, b) => a.order - b.order);

function categoryMarkup(category) {
  // Circles without a `key` lead to pages this rebuild doesn't have yet.
  const shortcuts = category.shortcuts.map((shortcut) => `
        <a href="${shortcut.key ? `kategorie.html?k=${shortcut.key}` : "#"}" class="shortcut"${shortcut.key === categoryKey ? ' aria-current="page"' : ""}>
          <span class="shortcut__icon">${menuIcon(shortcut.icon, "shortcut__svg")}</span>
          <span class="shortcut__label">${shortcut.label}</span>
        </a>`).join("");

  // Like the original, filters only offer values that occur in this category,
  // and a filter with a single value is left out. Availability always has
  // both. Where the original also counts hidden sold-out products, the
  // category lists its values in `filterValues`.
  const has = (field, value) => (Array.isArray(field) ? field.includes(value) : field === value);
  const offered = (key, value) => category.models.some((model) => has(model[key], value) || model.variants?.some((v) => has(v[key], value)));
  const options = (key, filterKey, values) => values.filter((value) => (category.filterValues?.[filterKey]
    ? category.filterValues[filterKey].includes(value)
    : offered(key, value)));
  const families = colorFamilies.filter((family) => options("family", "colors", [family.name]).length);
  const heightOptions = options("height", "heights", Object.keys(seatHeights));
  const formOptions = options("form", "forms", forms);
  const materialOptions = options("material", "materials", materials);
  const fillingOptions = options("filling", "fillings", fillings);
  const sizeOptions = options("sizes", "sizes", clothingSizes);
  // In the original's order (the gift pages show nearly all of them).
  const groups = [
    families.length > 1 && { key: "colors", label: "Farbe", options: swatchList(families) },
    materialOptions.length > 1 && { key: "materials", label: "Material", options: checkboxList(materialOptions) },
    sizeOptions.length > 1 && { key: "sizes", label: "Größe", options: checkboxList(sizeOptions) },
    heightOptions.length > 1 && { key: "heights", label: "Sitzhöhe", options: checkboxList(heightOptions, seatHeights) },
    formOptions.length > 1 && { key: "forms", label: "Form", options: checkboxList(formOptions) },
    fillingOptions.length > 1 && { key: "fillings", label: "Füllung", options: checkboxList(fillingOptions) },
    { key: "availability", label: "Verfügbarkeit", options: checkboxList(availabilities) },
  ].filter(Boolean);

  const sortRadios = Object.entries(sorters).map(([key, sorter]) => `
              <label class="filter__check"><input type="radio" name="sort" value="${key}"${key === defaultSort(category) ? " checked" : ""}>${sorter.label}</label>`).join("");
  // Phones sort with the browser's own picker, like the original.
  const sortSelect = (defaultSort(category) === "standard" ? `
            <option value="standard" disabled selected>Bitte wähle eine Sortieroption</option>` : "") + Object.entries(sorters).map(([key, sorter]) => `
            <option value="${key}"${key === defaultSort(category) ? " selected" : ""}>${sorter.label}</option>`).join("");

  return `
    <div class="container">${shortcuts ? `
      <nav class="shortcuts" aria-label="Unterkategorien">${shortcuts}
      </nav>
` : ""}
      <h1 class="category__title">${category.title}</h1>

      <div class="filters">
        <div class="filters__group">${groups.map((group) => filterPanel(group.key, group.label, group.options)).join("")}
        </div>
        <details class="filter filter--sort" name="filters">
          <summary class="filter__toggle">Sortierung${sortIcon}</summary>
          <div class="filter__panel filter__panel--right">
            <div class="filter__options">${sortRadios}
            </div>
          </div>
        </details>
      </div>

      <div class="filters-mobile">
        <button class="filter-button" type="button" aria-haspopup="dialog">Filter${countBadge("all")}${slidersIcon}</button>
        <label class="filter-button">
          Sortierung${sortIcon}
          <select class="filter-button__select" name="sort">${sortSelect}
          </select>
        </label>
      </div>${filterDrawerMarkup(groups)}

      <h2 class="visually-hidden">Produkte</h2>
      <p class="visually-hidden" role="status" id="result-count"></p>
      <div class="product-grid category__grid"></div>

      <div class="category__empty" hidden>
        <p class="category__empty-title">Keine passenden Produkte mit den aktuellen Filtern</p>
        <p>Filter zurücksetzen oder entfernen, um mehr Produkte zu sehen.</p>
        <button class="btn btn--primary category__reset-all" type="button">Alle Filter zurücksetzen</button>
      </div>

${category.description ? `
      <p class="category__description">${category.description}</p>` : ""}
    </div>`;
}

// ---------- Render + behaviour ----------
const categoryKey = new URLSearchParams(location.search).get("k") || "yogamatten";
const category = categories[categoryKey];
const categoryRoot = document.getElementById("category");

if (!category) {
  showNotFound(categoryRoot);
} else {
  document.title = `${category.title} – LotusCraft Student Rebuild`;
  categoryRoot.innerHTML = categoryMarkup(category);
  categoryRoot.classList.toggle("category--no-text", !category.description);

  // The header highlights the category's section(s), as on the original
  // (mats: "Yoga"; the sets also "Geschenke"; "Almost Perfect" none).
  document.querySelectorAll(".nav__link.is-current").forEach((link) => {
    link.classList.remove("is-current");
    link.removeAttribute("aria-current");
  });
  (category.nav || ["Yoga"]).forEach((section) => {
    const link = document.querySelector(`.nav__item:is([data-menu="${section}"], [data-section="${section}"]) .nav__link`);
    link?.classList.add("is-current");
    link?.setAttribute("aria-current", "true");
  });

  // One card per colour (or size); `order` keeps the original's order for
  // "Am relevantesten".
  const cards = category.models.flatMap(modelCards).map((card, order) => ({ ...card, order }));

  const filters = { colors: new Set(), heights: new Set(), forms: new Set(), materials: new Set(), fillings: new Set(), sizes: new Set(), availability: new Set() };
  let sortKey = defaultSort(category);

  const grid = categoryRoot.querySelector(".category__grid");
  const empty = categoryRoot.querySelector(".category__empty");
  const resultCount = categoryRoot.querySelector("#result-count");
  const filterBar = categoryRoot.querySelector(".filters");

  // Within one filter any ticked value matches; different filters must all
  // match. Clothing in no size at all drops out once anything is ticked.
  function matches(card) {
    const availability = card.soldOut ? "Nicht verfügbar" : "Verfügbar";
    const filtering = Object.values(filters).some((set) => set.size);
    if (filtering && card.stock?.length === 0) return false;
    return (!filters.colors.size || filters.colors.has(card.family))
      && (!filters.heights.size || filters.heights.has(card.height))
      && (!filters.forms.size || filters.forms.has(card.form))
      && (!filters.materials.size || filters.materials.has(card.material))
      && (!filters.fillings.size || filters.fillings.has(card.filling))
      && (!filters.sizes.size || Boolean(card.stock?.some((size) => filters.sizes.has(size))))
      && (!filters.availability.size || filters.availability.has(availability));
  }

  function render() {
    const visible = cards.filter(matches).sort(compareBy(sortKey));
    grid.innerHTML = visible.map(productCard).join("");
    grid.hidden = visible.length === 0;
    empty.hidden = visible.length > 0;
    resultCount.textContent = `${visible.length} Produkte`;

    // The bar and the phone drawer have their own inputs: keep both in step.
    categoryRoot.querySelectorAll("[data-filter] input").forEach((input) => {
      input.checked = filters[input.closest("[data-filter]").dataset.filter].has(input.value);
    });
    categoryRoot.querySelectorAll('[name="sort"]').forEach((control) => {
      if (control.type === "radio") control.checked = control.value === sortKey;
      else control.value = sortKey;
    });

    // Show how many values are ticked: "(1)" in the bar, a badge on phones.
    filterBar.querySelectorAll("[data-filter]").forEach((details) => {
      const count = filters[details.dataset.filter].size;
      details.querySelector(".filter__count").textContent = count ? ` (${count})` : "";
    });
    categoryRoot.querySelectorAll("[data-count]").forEach((badge) => {
      const key = badge.dataset.count;
      const count = key === "all"
        ? Object.values(filters).reduce((sum, set) => sum + set.size, 0)
        : filters[key].size;
      badge.hidden = count === 0;
      badge.innerHTML = `${count}<span class="visually-hidden"> ausgewählt</span>`;
    });
  }

  categoryRoot.addEventListener("change", (e) => {
    const input = e.target;
    if (input.name === "sort") {
      sortKey = input.value;
    } else {
      const set = filters[input.closest("[data-filter]").dataset.filter];
      if (input.checked) set.add(input.value);
      else set.delete(input.value);
    }
    render();
  });

  categoryRoot.addEventListener("click", (e) => {
    if (e.target.closest(".filter__reset")) {
      filters[e.target.closest("[data-filter]").dataset.filter].clear();
      render();
    } else if (e.target.closest(".category__reset-all")) {
      Object.values(filters).forEach((set) => set.clear());
      render();
    }
  });

  // Dropdowns close when clicking elsewhere or pressing Escape.
  document.addEventListener("click", (e) => {
    filterBar.querySelectorAll("details[open]").forEach((details) => {
      if (!details.contains(e.target)) details.open = false;
    });
  });
  document.addEventListener("keydown", (e) => {
    const open = filterBar.querySelector("details[open]");
    if (e.key !== "Escape" || !open) return;
    open.open = false;
    open.querySelector("summary").focus();
  });

  // ---------- Phone filter drawer ----------
  const filterDialog = categoryRoot.querySelector(".filter-drawer");
  const filterButton = categoryRoot.querySelector(".filter-button");

  filterButton.addEventListener("click", () => {
    filterDialog.querySelectorAll(".filter-drawer__panel").forEach((panel) => (panel.hidden = true));
    filterDialog.showModal();
    filterDialog.querySelector(".filter-drawer__row").focus();
  });

  // preventScroll: a panel still sliding in must not pull the drawer along.
  function closePanel(panel) {
    panel.hidden = true;
    filterDialog.querySelector(`[data-open="${panel.dataset.filter}"]`).focus({ preventScroll: true });
  }

  filterDialog.addEventListener("click", (e) => {
    const row = e.target.closest("[data-open]");
    if (row) {
      const panel = filterDialog.querySelector(`.filter-drawer__panel[data-filter="${row.dataset.open}"]`);
      panel.hidden = false;
      panel.querySelector(".filter-drawer__back").focus({ preventScroll: true });
    } else if (e.target.closest(".filter-drawer__back, .filter-drawer__panel .filter-drawer__done")) {
      closePanel(e.target.closest(".filter-drawer__panel"));
    } else if (e.target.closest(".filter-drawer__close, .filter-drawer__done") || e.target === filterDialog) {
      // The last case is a click on the dimmed backdrop.
      filterDialog.close();
    }
  });

  // Escape first leaves an open panel, then closes the drawer. (Handled on
  // keydown: the dialog's own "cancel" can't always be stopped.)
  filterDialog.addEventListener("keydown", (e) => {
    const panel = filterDialog.querySelector(".filter-drawer__panel:not([hidden])");
    if (e.key !== "Escape" || !panel) return;
    e.preventDefault();
    closePanel(panel);
  });
  filterDialog.addEventListener("close", () => filterButton.focus());

  // The bar takes over again from 780px.
  window.matchMedia("(min-width: 780px)").addEventListener("change", (e) => {
    if (e.matches && filterDialog.open) filterDialog.close();
  });

  render();
}
