// Category page: shortcut circles, filters (colour, material, availability),
// sorting and the product grid. Which category is shown comes from the URL,
// e.g. kategorie.html?k=yogamatten.

// ---------- Category data ----------
// Models, prices, colours, materials and which variant is sold out mirror the
// original "Yogamatten" category (Oct 2026). Every colour gets its own card,
// as on the original. `family` is the colour group used by the colour filter.
const categories = {
  yogamatten: {
    title: "Yogamatten",
    shortcuts: [
      { label: "Yogamatten für Zuhause", icon: "house" },
      { label: "Rutschfeste Yogamatte", icon: "mat" },
      { label: "Studio Yogamatte", icon: "studio" },
      { label: "Reise Yogamatte", icon: "suitcase" },
    ],
    models: [
      { name: "Yogamatte MUDRA", price: 39.95, material: "PVC (Polyvinylchlorid)", variants: [
        { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
        { color: "Lavender Fog", hex: "#b7a3b6", family: "Rosa" },
        { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
        { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
        { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
        { color: "Aubergine", hex: "#8d5a6f", family: "Rot", soldOut: true },
        { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot", badge: "New in" },
      ] },
      { name: "Yogamatte PURE", slug: "yogamatte-pure", price: 79.95, material: "PU (Polyurethan)", variants: [
        { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot", badge: "Matte Oberfläche" },
        { color: "Balsam Green", hex: "#5d7366", family: "Grün", badge: "Matte Oberfläche" },
        { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
        { color: "Aubergine", hex: "#8d5a6f", family: "Rot" },
        { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
        { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
      ] },
      // The original has no material set for this one, so material filters hide it.
      { name: "Yogamatte Mudra XL", price: 44.95, material: null, variants: [
        { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
        { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
        { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
      ] },
      { name: "Yogamatte ARISE", price: 89.95, material: "Naturkautschuk", variants: [
        { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
        { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
        { color: "Graphite", hex: "#4a4b4d", family: "Schwarz" },
        { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot" },
        { color: "Midnight Blue", hex: "#2f3a5c", family: "Blau" },
      ] },
      { name: "Yogamatte ARISE Travel", price: 59.95, material: "Naturkautschuk", variants: [
        { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
        { color: "Graphite", hex: "#4a4b4d", family: "Schwarz" },
        { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
        { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot" },
      ] },
      { name: "Yogamatte ARISE CORK", price: 99.95, material: "Naturkork", variants: [
        { color: "Align", hex: "#c9a77e", family: "Align" },
        { color: "Lotus", hex: "#b8916a", family: "Braun" },
      ] },
      { name: "Yogamatte MUDRA PRO", price: 99.95, material: "Polyester", variants: [
        { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
        { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
        { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
      ] },
      { name: "Yogamatte WOOL aus Schurwolle", price: 119.95, material: "Schurwolle", variants: [
        { color: null, hex: "#e7e1d6", family: null },
      ] },
    ],
  },
};

// Filter options, in the original's order. "Align" is a cork print.
const colorFamilies = [
  { name: "Beige", swatch: "#efe9df" },
  { name: "Blau", swatch: "#5a7da6" },
  { name: "Rot", swatch: "#8c2a26" },
  { name: "Grün", swatch: "#5d7a72" },
  { name: "Schwarz", swatch: "#111" },
  { name: "Rosa", swatch: "#c9a3a0" },
  { name: "Braun", swatch: "#9b6e55" },
  { name: "Align", swatch: "repeating-linear-gradient(135deg, #c9a77e 0 5px, #b48f63 5px 7px)" },
];
const materials = ["Naturkautschuk", "Polyester", "PU (Polyurethan)", "PVC (Polyvinylchlorid)", "Naturkork", "Schurwolle"];
const availabilities = ["Verfügbar", "Nicht verfügbar"];

// "Meistverkauft" is left out: this rebuild has no real sales numbers.
const sorters = {
  relevanz: { label: "Am relevantesten", compare: (a, b) => a.order - b.order },
  "a-z": { label: "Alphabetisch, A-Z", compare: (a, b) => a.name.localeCompare(b.name, "de") || a.order - b.order },
  "z-a": { label: "Alphabetisch, Z-A", compare: (a, b) => b.name.localeCompare(a.name, "de") || a.order - b.order },
  "preis-auf": { label: "Preis, niedrig nach hoch", compare: (a, b) => a.price - b.price || a.order - b.order },
  "preis-ab": { label: "Preis, hoch nach niedrig", compare: (a, b) => b.price - a.price || a.order - b.order },
};

// ---------- Markup ----------
const chevronDown = `<svg class="filter__chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>`;
const sortIcon = `<svg class="filter__chevron filter__chevron--sort" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2v12M2 11l3 3 3-3M11 14V2M8 5l3-3 3 3"/></svg>`;

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

function checkboxList(values) {
  return `<div class="filter__options">${values.map((value) => `
              <label class="filter__check"><input type="checkbox" value="${value}">${value}</label>`).join("")}
            </div>`;
}

function categoryMarkup(category) {
  const shortcuts = category.shortcuts.map((shortcut) => `
        <a href="#" class="shortcut">
          <span class="shortcut__icon">${menuIcon(shortcut.icon, "shortcut__svg")}</span>
          <span class="shortcut__label">${shortcut.label}</span>
        </a>`).join("");

  const swatches = `<div class="filter__swatches">${colorFamilies.map((family) => `
              <label class="filter-swatch" title="${family.name}">
                <input type="checkbox" value="${family.name}" class="visually-hidden">
                <span class="filter-swatch__dot" style="background: ${family.swatch}"></span>
                <span class="visually-hidden">${family.name}</span>
              </label>`).join("")}
            </div>`;

  const sortOptions = Object.entries(sorters).map(([key, sorter], i) => `
              <label class="filter__check"><input type="radio" name="sort" value="${key}"${i === 0 ? " checked" : ""}>${sorter.label}</label>`).join("");

  return `
    <div class="container">
      <nav class="shortcuts" aria-label="Unterkategorien">${shortcuts}
      </nav>

      <h1 class="category__title">${category.title}</h1>

      <div class="filters">
        <div class="filters__group">${filterPanel("colors", "Farbe", swatches)}${filterPanel("materials", "Material", checkboxList(materials))}${filterPanel("availability", "Verfügbarkeit", checkboxList(availabilities))}
        </div>
        <details class="filter filter--sort" name="filters">
          <summary class="filter__toggle">Sortierung${sortIcon}</summary>
          <div class="filter__panel filter__panel--right">
            <div class="filter__options">${sortOptions}
            </div>
          </div>
        </details>
      </div>

      <p class="visually-hidden" role="status" id="result-count"></p>
      <div class="product-grid category__grid"></div>

      <div class="category__empty" hidden>
        <p class="category__empty-title">Keine passenden Produkte mit den aktuellen Filtern</p>
        <p>Filter zurücksetzen oder entfernen, um mehr Produkte zu sehen.</p>
        <button class="btn btn--primary category__reset-all" type="button">Alle Filter zurücksetzen</button>
      </div>
    </div>`;
}

// ---------- Render + behaviour ----------
const categoryKey = new URLSearchParams(location.search).get("k") || "yogamatten";
const category = categories[categoryKey];
const categoryRoot = document.getElementById("category");

if (!category) {
  categoryRoot.innerHTML = `
    <div class="container product-missing">
      <h1 class="buybox__title">Kategorie nicht gefunden</h1>
      <p>Diese Kategorie gibt es in unserem Studentenprojekt (noch) nicht.</p>
      <a href="index.html" class="btn btn--primary">Zur Startseite</a>
    </div>`;
} else {
  document.title = `${category.title} – LotusCraft Student Rebuild`;
  categoryRoot.innerHTML = categoryMarkup(category);

  // One card per colour, keeping the original order for "Am relevantesten".
  const cards = category.models
    .flatMap((model) => model.variants.map((variant) => ({
      name: model.name,
      slug: model.slug,
      price: model.price,
      material: model.material,
      shape: "mat",
      variant: variant.color,
      tint: variant.hex,
      family: variant.family,
      soldOut: Boolean(variant.soldOut),
      badge: variant.soldOut ? "Ausverkauft" : variant.badge,
    })))
    .map((card, order) => ({ ...card, order }));

  const filters = { colors: new Set(), materials: new Set(), availability: new Set() };
  let sortKey = "relevanz";

  const grid = categoryRoot.querySelector(".category__grid");
  const empty = categoryRoot.querySelector(".category__empty");
  const resultCount = categoryRoot.querySelector("#result-count");
  const filterBar = categoryRoot.querySelector(".filters");

  // Within one filter any ticked value matches; different filters must all match.
  function matches(card) {
    const availability = card.soldOut ? "Nicht verfügbar" : "Verfügbar";
    return (!filters.colors.size || filters.colors.has(card.family))
      && (!filters.materials.size || filters.materials.has(card.material))
      && (!filters.availability.size || filters.availability.has(availability));
  }

  function render() {
    const visible = cards.filter(matches).sort(sorters[sortKey].compare);
    grid.innerHTML = visible.map(productCard).join("");
    grid.hidden = visible.length === 0;
    empty.hidden = visible.length > 0;
    resultCount.textContent = `${visible.length} Produkte`;

    // Show how many values are ticked next to each filter name.
    filterBar.querySelectorAll("[data-filter]").forEach((details) => {
      const count = filters[details.dataset.filter].size;
      details.querySelector(".filter__count").textContent = count ? ` (${count})` : "";
    });
  }

  filterBar.addEventListener("change", (e) => {
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

  function resetFilter(details) {
    filters[details.dataset.filter].clear();
    details.querySelectorAll("input").forEach((input) => (input.checked = false));
  }

  filterBar.addEventListener("click", (e) => {
    if (!e.target.closest(".filter__reset")) return;
    resetFilter(e.target.closest("[data-filter]"));
    render();
  });

  categoryRoot.querySelector(".category__reset-all").addEventListener("click", () => {
    filterBar.querySelectorAll("[data-filter]").forEach(resetFilter);
    render();
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

  render();
}
