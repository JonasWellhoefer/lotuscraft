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
const materials = ["Bio-Baumwolle (kbA)", "Naturkautschuk", "Polyester", "PU (Polyurethan)", "PVC (Polyvinylchlorid)", "Naturkork", "Schurwolle", "Rotes Sandelholz", "Tulsi", "Rudraksha", "Polymere Klebefolie mit UV-Schutz"];
const fillings = ["Bio-Dinkelspelz (kbA)", "Kapokwolle"];
const forms = ["Rund", "Halbrund", "Zafu"];
const seatHeights = { 10: "10 cm (niedrig)", 15: "15 cm (standard)", 20: "20 cm (hoch)" };
const availabilities = ["Verfügbar", "Nicht verfügbar"];

// The original sorts most pages by "meistverkauft". Its sales ranking (as
// shown on 2 Oct 2026) is one list across all pages, each page showing the
// cards it has in that order; cards missing from the list go last.
const bestSellingRanking = [
  // Mats
  "Yogamatte MUDRA / Balsam Green", "Yogamatte PURE / Light Taupe", "Yogamatte MUDRA / Light Taupe", "Yogamatte PURE / Aubergine",
  "Yogamatte MUDRA / Indigo Dust", "Yogamatte ARISE Travel / Balsam Green", "Yogamatte ARISE / Balsam Green", "Yogamatte PURE / Indigo Dust",
  "Yogamatte ARISE Travel / Indigo Dust", "Yogamatte MUDRA / Dark Cranberry", "Yogamatte MUDRA / Lavender Fog", "Yogamatte ARISE / Indigo Dust",
  "Yogamatte PURE / Anthrazit", "Yogamatte ARISE CORK / Align", "Yogamatte ARISE CORK / Lotus", "Yogamatte ARISE Travel / Graphite",
  "Yogamatte ARISE / Dark Cranberry", "Yogamatte MUDRA / Anthrazit", "Yogamatte ARISE Travel / Dark Cranberry", "Yogamatte MUDRA PRO / Light Taupe",
  "Yogamatte MUDRA / Aubergine", "Yogamatte PURE / Balsam Green", "Yogamatte ARISE / Graphite", "Yogamatte MUDRA PRO / Anthrazit",
  "Yogamatte MUDRA PRO / Balsam Green", "Yogamatte ARISE / Midnight Blue", "Yogamatte PURE / Dark Cranberry", "Yogamatte Mudra XL / Balsam Green",
  "Yogamatte Mudra XL / Anthrazit", "Yogamatte Mudra XL / Indigo Dust", "Yogamatte WOOL aus Schurwolle",
  // Accessories
  "Yogamatten Tragegurt / Light Taupe", "Yoga Handtuch / Balsam Green", "Yogatasche PUNE / Light Taupe", "Yogatasche PUNE / Balsam Green",
  "Yogagurt 100% Bio-Baumwolle / Balsam Green", "Yogatasche PUNE / Indigo Dust", "Yogadecke Savasana 100% Baumwolle (kbA) / Natur", "Yogagurt 100% Bio-Baumwolle / Indigo Dust",
  "Yogagurt 100% Bio-Baumwolle / Light Taupe", "Yogatasche PUNE / Aubergine", "Yoga Handtuch / Lavender Fog", "Yoga Handtuch / Light Taupe",
  "Yogagurt 100% Bio-Baumwolle / Natur", "Yogatasche PUNE / Anthrazit", "Yogagurt 100% Bio-Baumwolle / Aubergine", "Yogatasche NANDI / Anthrazit",
  "Yogadecke Savasana 100% Baumwolle (kbA) / Indigo Dust", "Augenkissen / Light Taupe", "Augenkissen / Lavender Fog", "Yoga Handtuch / Anthrazit",
  "Yogagurt 100% Bio-Baumwolle / Lavender Fog", "Yogagurt 100% Bio-Baumwolle / Anthrazit", "Yogatasche PUNE / Lavender Fog", "Yoga Handtuch / Indigo Dust",
  "Yogatasche NANDI / Natur", "Yogadecke Savasana 100% Baumwolle (kbA) / Anthrazit", "Augenkissen / Balsam Green", "Augenkissen / Natur",
  "Yogagurt 100% Bio-Baumwolle / Kurkuma", "Yogablock Kork 2er Set / Klein", "Yogablock Kork 2er Set / Groß", "Bio Yogamatten Spray / 60ml",
  "Bio Yogamatten Spray / 500ml", "Yogablock Kork Einzeln / Klein.", "Yogablock Kork Einzeln / Groß.", "Rosenholz Mala (Dunkles Rosenholz)",
  "Tulsi Mala", "Rudraksha Mala", "Yogamatten-Sticker I am enough", "Bio Dinkelspelzen - Dinkelspreu (kbA) 2kg",
  "Yogamatten-Sticker einatmen. ausatmen.", "Bio Dinkelspelzen -Dinkelspreu (kbA) 1kg", "Yogamatten-Sticker Ich bin dankbar",
  "Yogamatten-Sticker good vibes only", "Yogamatten Tragegurt / Balsam Green",
  // Bolsters and covers
  "Yogarolle RESTORATIVE Ø24 cm / Light Taupe", "Yoga Bolster RESTORATIVE L / Light Taupe", "Yoga Bolster RESTORATIVE L / Indigo Dust",
  "Yogarolle RESTORATIVE Ø24 cm / Indigo Dust", "Yoga Mini-Rolle (Nackenrolle) Ø12 cm / Light Taupe", "Yogarolle RESTORATIVE Ø24 cm / Natur",
  "Yoga Bolster RESTORATIVE S / Indigo Dust", "Yoga Bolster RESTORATIVE S / Light Taupe", "Yoga Bolster RESTORATIVE L / Natur",
  "Yoga Mini-Rolle (Nackenrolle) Ø12 cm / Balsam Green", "Yogarolle RESTORATIVE Ø24 cm / Aubergine", "Yoga Bolster RESTORATIVE S / Natur",
  "Yoga Bolster RESTORATIVE L / Anthrazit", "Yogarolle RESTORATIVE Ø24 cm / Anthrazit", "Yoga Bolster RESTORATIVE L / Aubergine",
  "Yoga Bolster RESTORATIVE S / Anthrazit", "Yogarolle RESTORATIVE Ø24 cm / Grassland", "Yogarolle RESTORATIVE Ø24 cm / Dark Cranberry",
  "Yoga Bolster RESTORATIVE L / Dark Cranberry", "Yoga Bolster RESTORATIVE S / Aubergine", "Yoga Bolster RESTORATIVE L / Grassland",
  "Yoga Bolster RESTORATIVE S / Dark Cranberry", "Yoga Bolster RESTORATIVE S / Grassland",
  "Bezug für Yogarolle COVER Ø24 cm / Light Taupe", "Bezug für Yogarolle COVER Ø24 cm / Natur", "Bezug für Yogarolle COVER Ø24 cm / Anthrazit",
  "Bezug für Yogarolle COVER Ø24 cm / Indigo Dust", "Bezug für Yogarolle COVER Ø24 cm / Dark Cranberry",
  // Meditation cushions
  "Meditationskissen Lotus (H: 15cm) / Balsam Green", "Meditationskissen Lotus (H: 15cm) / Natur", "Meditationskissen Lotus (H: 15cm) / Light Taupe",
  "Yogakissen Halbmond Shanti / Light Taupe", "Meditationskissen Lotus (H: 15cm) / Indigo Dust", "Yogakissen Halbmond Shanti / Balsam Green",
  "Meditationskissen Lotus HOCH (H: 20cm) / Balsam Green", "Yogakissen Halbmond Shanti / Indigo Dust", "Meditationskissen Lotus HOCH (H: 20cm) / Indigo Dust",
  "Yogakissen Halbmond Shanti / Natur", "Zafu-Meditationskissen Zen / Natur", "Meditationskissen Lotus HOCH (H: 20cm) / Light Taupe",
  "Zafu-Meditationskissen Zen / Indigo Dust", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Balsam Green",
  "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Light Taupe", "Zafu-Meditationskissen Zen / Light Taupe",
  "Meditationskissen Lotus KLEIN (H: 10 cm) / Natur", "Meditationskissen Lotus HOCH (H: 20cm) / Natur", "Meditationskissen Lotus KLEIN (H: 10 cm) / Balsam Green",
  "Meditationskissen Lotus HOCH (H: 20cm) / Bordeaux", "Meditationskissen Lotus HOCH (H: 20cm) / Anthrazit", "Meditationskissen Lotus (H: 15cm) / Anthrazit",
  "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Indigo Dust", "Yogakissen Halbmond Shanti / Aubergine",
  "Meditationskissen Lotus KLEIN (H: 10 cm) / Light Taupe", "Zafu-Meditationskissen Zen / Balsam Green", "Meditationskissen Lotus (H: 15cm) / Kurkuma",
  "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Natur", "Yogakissen Halbmond Shanti / Anthrazit", "Meditationskissen Lotus KLEIN (H: 10 cm) / Indigo Dust",
  "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Lavender Fog", "Meditationskissen Lotus (H: 15cm) / Schwarz", "Yogakissen Halbmond Shanti / Bordeaux",
  "Zafu-Meditationskissen Zen / Anthrazit", "Zafu-Meditationskissen Zen / Kurkuma", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Anthrazit",
  "Zafu-Meditationskissen Zen Kapok / Anthrazit", "Meditationskissen Lotus HOCH (H: 20cm) / Kurkuma", "Meditationskissen Lotus KLEIN (H: 10 cm) / Kurkuma",
  "Meditationskissen Lotus KLEIN (H: 10 cm) / Anthrazit", "Meditationskissen Lotus KLEIN (H: 10 cm) / Marine Blue",
  "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Aubergine", "Meditationskissen Lotus KLEIN (H: 10 cm) / Aubergine",
  "Meditationskissen Lotus HOCH (H: 20cm) / Aubergine", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Grassland",
  "Meditationskissen Lotus KLEIN (H: 10 cm) / Bordeaux",
  // Meditation mat (the original shows its sizes colour by colour)
  "Meditationsmatte Zabuton / Light Taupe / 4 cm", "Meditationsmatte Zabuton / Light Taupe / 7 cm", "Meditationsmatte Zabuton / Natur / 4 cm",
  "Meditationsmatte Zabuton / Natur / 7 cm", "Meditationsmatte Zabuton / Balsam Green / 4 cm", "Meditationsmatte Zabuton / Balsam Green / 7 cm",
  "Meditationsmatte Zabuton / Indigo Dust / 4 cm", "Meditationsmatte Zabuton / Indigo Dust / 7 cm", "Meditationsmatte Zabuton / Anthrazit / 4 cm",
  "Meditationsmatte Zabuton / Anthrazit / 7 cm", "Meditationsmatte Zabuton / Bordeaux / 4 cm", "Meditationsmatte Zabuton / Bordeaux / 7 cm",
  "Meditationsmatte Zabuton / Schwarz / 4 cm", "Meditationsmatte Zabuton / Schwarz / 7 cm", "Meditationsmatte Zabuton / Aubergine / 4 cm",
  "Meditationsmatte Zabuton / Aubergine / 7 cm",
  // Covers and the bench
  "Bezug für Meditationskissen Lotus (H: 15cm) / Light Taupe", "Bezug für Meditationskissen Lotus (H: 15cm) / Natur",
  "Bezug für Zafu-Meditationskissen Zen / Light Taupe", "Bezug für Meditationskissen Lotus (H: 15cm) / Balsam Green",
  "Bezug für Meditationskissen Lotus (H: 15cm) / Anthrazit", "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Indigo Dust",
  "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Lavender Fog", "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Balsam Green",
  "Bezug für Halbmond Kissen / Light Taupe", "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Light Taupe",
  "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm) / Light Taupe", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm) / Natur",
  "Bezug für Zafu-Meditationskissen Zen / Anthrazit", "Bezug für Zafu-Meditationskissen Zen / Natur", "Bezug für Halbmond Kissen / Natur",
  "Bezug für Meditationskissen Lotus (H: 15cm) / Indigo Dust", "Bezug für Meditationskissen Lotus (H: 15cm) / Kurkuma",
  "Bezug für Zafu-Meditationskissen Zen / Indigo Dust", "Bezug für Halbmond Kissen / Balsam Green", "Bezug für Meditationskissen Lotus (H: 15cm) / Schwarz",
  "Bezug für Meditationskissen Lotus HOCH (H: 20cm) / Indigo Dust", "Bezug für Meditationskissen Lotus HOCH (H: 20cm) / Kurkuma",
  "Bezug für Halbmond Kissen / Anthrazit", "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Anthrazit",
  "Bezug für Meditationskissen Lotus HOCH (H: 20cm) / Balsam Green", "Bezug für Meditationskissen Lotus HOCH (H: 20cm) / Natur",
  "Bezug für Meditationskissen Lotus HOCH (H: 20cm) / Anthrazit", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm) / Anthrazit",
  "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm) / Indigo Dust", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm) / Kurkuma",
  "Bezug für Halbmond Kissen / Midnight Blue", "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Aubergine",
  "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung / Natur", "Bezug für Meditationskissen Lotus HOCH (H: 20cm) / Aubergine",
  "Bezug für Meditationskissen Lotus HOCH (H: 20cm) / Light Taupe", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm) / Balsam Green",
  "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm) / Marine Blue", "Bezug für Zafu-Meditationskissen Zen / Balsam Green",
  "Bezug für Zafu-Meditationskissen Zen / Kurkuma", "Bezug für Halbmond Kissen / Aubergine", "Bezug für Halbmond Kissen / Indigo Dust",
  "Bezug für Meditationskissen Lotus (H: 15cm) / Aubergine", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm) / Aubergine",
  "Bezug für Zabuton / Light Taupe", "Bezug für Zabuton / Natur", "Bezug für Zabuton / Anthrazit", "Bezug für Zabuton / Indigo Dust",
  "Bezug für Zabuton / Aubergine", "Bezug für Zabuton / Bordeaux", "Bezug für Zabuton / Schwarz", "Bezug für Zabuton / Balsam Green",
  "Meditationsbank DHARMA Standard / Indigo Dust", "Meditationsbank DHARMA Standard / Natur", "Meditationsbank DHARMA Standard / Anthrazit",
  "Meditationsbank DHARMA Standard / Aubergine",
  // "Almost Perfect"
  "Almost Perfect Yogamatte MUDRA / Indigo Dust", "Almost Perfect Yogamatte MUDRA / Light Taupe", "Almost Perfect Yogamatte MUDRA / Balsam Green",
  "Almost Perfect Yogamatte MUDRA PRO / Anthrazit", "Almost Perfect Yogamatte PURE / Light Taupe", "Almost Perfect Yogamatte MUDRA PRO / Light Taupe",
  "Almost Perfect Yogamatte MUDRA PRO / Balsam Green", "Almost Perfect Yogamatte ARISE / Dark Cranberry", "Almost Perfect Yogamatte ARISE Cork / Align",
  "Almost Perfect Yogamatte MUDRA / Aubergine", "Almost Perfect Yogamatte PURE / Indigo Dust", "Almost Perfect Yogamatte ARISE Cork / Lotus",
  "Almost Perfect Yogamatte MUDRA PRO XL / Anthrazit", "Almost Perfect Yogamatte ARISE Travel / Wild Ginger", "Almost Perfect Yogamatte MUDRA / Bordeaux",
  "Almost Perfect Yogamatte MUDRA XL / Balsam Green", "Almost Perfect Yogamatte PURE / Balsam Green",
];
// Card names here use „…“ where the original uses straight quotes: compare without quotes.
const rankKey = (card) => `${card.name}${card.variant ? ` / ${card.variant}` : ""}`.replace(/[„“"]/g, "");
const salesRank = new Map(bestSellingRanking.map((key, i) => [key, i]));
const rankOf = (card) => salesRank.get(rankKey(card)) ?? bestSellingRanking.length;

const sorters = {
  relevanz: { label: "Am relevantesten", compare: (a, b) => a.order - b.order },
  meistverkauft: { label: "meistverkauft", compare: (a, b) => rankOf(a) - rankOf(b) || a.order - b.order },
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

function checkboxList(values, labels = {}) {
  return `<div class="filter__options">${values.map((value) => `
              <label class="filter__check"><input type="checkbox" value="${value}">${labels[value] || value}</label>`).join("")}
            </div>`;
}

// Like the original, pages open sorted by "meistverkauft" unless they say otherwise.
const defaultSort = (category) => category.sort || "meistverkauft";

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
  const offered = (key, value) => category.models.some((model) => model[key] === value || model.variants?.some((v) => v[key] === value));
  const options = (key, filterKey, values) => values.filter((value) => (category.filterValues?.[filterKey]
    ? category.filterValues[filterKey].includes(value)
    : offered(key, value)));
  const families = colorFamilies.filter((family) => options("family", "colors", [family.name]).length);
  const heightOptions = options("height", "heights", Object.keys(seatHeights));
  const formOptions = options("form", "forms", forms);
  const materialOptions = options("material", "materials", materials);
  const fillingOptions = options("filling", "fillings", fillings);

  const swatches = `<div class="filter__swatches">${families.map((family) => `
              <label class="filter-swatch" title="${family.name}">
                <input type="checkbox" value="${family.name}" class="visually-hidden">
                <span class="filter-swatch__dot" style="background: ${family.swatch}"></span>
                <span class="visually-hidden">${family.name}</span>
              </label>`).join("")}
            </div>`;

  const sortOptions = Object.entries(sorters).map(([key, sorter]) => `
              <label class="filter__check"><input type="radio" name="sort" value="${key}"${key === defaultSort(category) ? " checked" : ""}>${sorter.label}</label>`).join("");

  return `
    <div class="container">${shortcuts ? `
      <nav class="shortcuts" aria-label="Unterkategorien">${shortcuts}
      </nav>
` : ""}
      <h1 class="category__title">${category.title}</h1>

      <div class="filters">
        <div class="filters__group">${families.length > 1 ? filterPanel("colors", "Farbe", swatches) : ""}${heightOptions.length > 1 ? filterPanel("heights", "Sitzhöhe", checkboxList(heightOptions, seatHeights)) : ""}${formOptions.length > 1 ? filterPanel("forms", "Form", checkboxList(formOptions)) : ""}${materialOptions.length > 1 ? filterPanel("materials", "Material", checkboxList(materialOptions)) : ""}${fillingOptions.length > 1 ? filterPanel("fillings", "Füllung", checkboxList(fillingOptions)) : ""}${filterPanel("availability", "Verfügbarkeit", checkboxList(availabilities))}
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

${category.description ? `
      <p class="category__description">${category.description}</p>` : ""}
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
  categoryRoot.classList.toggle("category--no-text", !category.description);

  // The header highlights the category's section(s), as on the original
  // (mats: "Yoga"; the sets also "Geschenke"; "Almost Perfect" none).
  document.querySelectorAll(".nav__link.is-current").forEach((link) => link.classList.remove("is-current"));
  (category.nav || ["Yoga"]).forEach((section) => {
    document.querySelector(`.nav__item[data-menu="${section}"] .nav__link`)?.classList.add("is-current");
  });

  // One card per colour (or size), keeping the original order for "Am
  // relevantesten". A variant can bring its own price and material. Sets and
  // stickers have no variants and get one card each.
  const cards = category.models
    .flatMap((model) => (model.variants ? model.variants.map((variant) => ({
      name: model.name,
      slug: model.slug,
      price: variant.price ?? model.price,
      compareAt: model.compareAt,
      material: variant.material ?? model.material,
      filling: variant.filling ?? model.filling,
      height: variant.height ?? model.height,
      form: variant.form ?? model.form,
      shape: variant.shape || model.shape || "mat",
      variant: variant.color,
      tint: variant.hex,
      family: variant.family,
      soldOut: Boolean(variant.soldOut),
      badge: variant.badge ?? model.badge,
    })) : [{ ...model, soldOut: Boolean(model.soldOut) }]))
    .map((card, order) => ({ ...card, order }));

  const filters = { colors: new Set(), heights: new Set(), forms: new Set(), materials: new Set(), fillings: new Set(), availability: new Set() };
  let sortKey = defaultSort(category);

  const grid = categoryRoot.querySelector(".category__grid");
  const empty = categoryRoot.querySelector(".category__empty");
  const resultCount = categoryRoot.querySelector("#result-count");
  const filterBar = categoryRoot.querySelector(".filters");

  // Within one filter any ticked value matches; different filters must all match.
  function matches(card) {
    const availability = card.soldOut ? "Nicht verfügbar" : "Verfügbar";
    return (!filters.colors.size || filters.colors.has(card.family))
      && (!filters.heights.size || filters.heights.has(card.height))
      && (!filters.forms.size || filters.forms.has(card.form))
      && (!filters.materials.size || filters.materials.has(card.material))
      && (!filters.fillings.size || filters.fillings.has(card.filling))
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
