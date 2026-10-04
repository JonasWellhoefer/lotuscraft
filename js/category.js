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
const materials = ["Bio-Baumwolle (kbA)", "Naturkautschuk", "Polyester", "Recyceltes Polyester", "PU (Polyurethan)", "PVC (Polyvinylchlorid)", "Naturkork", "Schurwolle", "Rotes Sandelholz", "Tulsi", "Rudraksha", "Polymere Klebefolie mit UV-Schutz", "Viskose"];
const fillings = ["Bio-Dinkelspelz (kbA)", "Kapokwolle"];
const forms = ["Rund", "Halbrund", "Zafu"];
const seatHeights = { 10: "10 cm (niedrig)", 15: "15 cm (standard)", 20: "20 cm (hoch)" };
const clothingSizes = ["XS", "S", "M", "L", "XL", "XXL"];
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
  "Meditationskissen Lotus KLEIN (H: 10 cm) / Anthrazit",
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
  // Clothing
  "Heya Culotte / Dark Cranberry", "Heya Culotte / Midnight Blue", "Heya Culotte / Almond Milk", "Naima Top / Almond Milk",
  "Naima Top / Dark Cranberry", "Naima Top / Midnight Blue", "Amina Wrap Top / Almond Milk", "Amina Wrap Top / Dark Cranberry",
  "Amina Wrap Top / Midnight Blue", "MIKO Bralette / Marshmallow", "QUINN Mens Pants / Stone Blue", "REID Mens Tank-Top / Anthrazit",
  "ELI Womens Tee (Short Sleeve) / Violetta", "REID Mens Tank-Top / Marshmallow", "MIKO Bralette / Anthrazit",
  "ELI Womens Tee (Short Sleeve) / Anthrazit", "BECCA Leggings / Anthrazit", "MIKO Bralette / Violetta", "REID Mens Tank-Top / Stone Blue",
  "FIONA Womens Pants / Stone Blue", "BECCA Leggings / Marshmallow", "QUINN Mens Pants / Anthrazit", "ALA Tank Tee / Marshmallow",
  "DANA Overall / Marshmallow", "ELI Womens Tee (Short Sleeve) / Marshmallow", "ALA Tank Tee / Anthrazit", "NIA Womens Sweater / Anthrazit",
  "ALA Tank Tee / Violetta", "FEND Mens Sweater / Anthrazit", "NIA Womens Sweater / Stone Blue", "QUINN Mens Pants / Deep Taupe",
  "BECCA Leggings / Violetta", "FEND Mens Sweater / Stone Blue", "FIONA Womens Pants / Anthrazit", "DANA Overall / Anthrazit",
  "NIA Womens Sweater / Marshmallow", "FEND Mens Sweater / Marshmallow",
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
      compareAt: "compareAt" in variant ? variant.compareAt : model.compareAt,
      material: variant.material ?? model.material,
      filling: variant.filling ?? model.filling,
      height: variant.height ?? model.height,
      stock: variant.stock,
      form: variant.form ?? model.form,
      shape: variant.shape || model.shape || "mat",
      variant: variant.color,
      tint: variant.hex,
      family: variant.family,
      soldOut: Boolean(variant.soldOut),
      badge: variant.badge ?? model.badge,
    })) : [{ ...model, soldOut: Boolean(model.soldOut) }]))
    .map((card, order) => ({ ...card, order }));

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
