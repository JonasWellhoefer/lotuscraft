// Search results page: every product that matches ?q=… (suche.html?q=kissen),
// one card per colour like the original's, and the pages and blog posts that
// match listed below. "Alle anzeigen" in the search dialog adds &typ=produkt,
// which leaves the pages out. The query is only looked up in this project's
// own data; nothing is sent anywhere.

const resultsRoot = document.getElementById("search-page");
const resultsParams = new URLSearchParams(location.search);
const resultsQuery = (resultsParams.get("q") || "").trim();
const resultsProductsOnly = resultsParams.get("typ") === "produkt";

// Shown when there is nothing to list: a few places to go on from.
const RESULTS_SHORTCUTS = [
  { label: "Yogamatten", key: "yogamatten" },
  { label: "Meditationskissen", key: "meditationskissen" },
  { label: "Yoga-Zubehör", key: "yoga-zubehor" },
  { label: "Bekleidung", key: "yoga-kleidung" },
  { label: "Sale", key: "sale" },
];

const countLabel = (count) => `${count} ${count === 1 ? "Suchergebnis" : "Suchergebnisse"}`;

function pagesMarkup(pages) {
  if (!pages.length) return "";
  return `
      <section class="search-page__pages" aria-labelledby="search-pages-title">
        <h2 class="search-page__label" id="search-pages-title">Seiten und Blog</h2>
        <ul role="list">${pages.map((page) => `
          <li><a href="${page.href}">${page.title}</a></li>`).join("")}
        </ul>
      </section>`;
}

function emptyMarkup(title, text) {
  return `
      <div class="search-page__empty">
        <h1 class="search-page__empty-title">${title}</h1>
        <p>${text}</p>
        <button class="btn btn--primary" type="button" data-open-search aria-haspopup="dialog">Neue Suche</button>
        <ul class="search-page__shortcuts" role="list" aria-label="Beliebte Bereiche">${RESULTS_SHORTCUTS.map((shortcut) => `
          <li><a href="kategorie.html?k=${shortcut.key}">${shortcut.label}</a></li>`).join("")}
        </ul>
      </div>`;
}

function showResults() {
  const safeQuery = escapeHtml(resultsQuery);
  let markup;

  if (!resultsQuery) {
    document.title = "Suche – LotusCraft Student Rebuild";
    markup = emptyMarkup("Wonach suchst du?", "Gib einen Begriff ein, zum Beispiel „Yogamatte“ oder „Meditationskissen“.");
  } else {
    const items = searchProducts(resultsQuery);
    const cards = items.flatMap((item) => searchCards(item, resultsQuery));
    const pages = resultsProductsOnly ? [] : searchPages(resultsQuery);
    document.title = `Suche: ${items.length} ${items.length === 1 ? "Ergebnis" : "Ergebnisse"} für „${resultsQuery}“ – LotusCraft Student Rebuild`;

    if (items.length) {
      markup = `
      <h1 class="visually-hidden">${countLabel(items.length)} für „${safeQuery}“</h1>
      <h2 class="visually-hidden">Produkte</h2>
      <div class="product-grid search-page__grid">${cards.map(productCard).join("")}</div>${pagesMarkup(pages)}`;
    } else {
      markup = emptyMarkup(`Keine Ergebnisse für „${safeQuery}“`, "Prüfe die Schreibweise oder suche nach etwas anderem, zum Beispiel nach einer Farbe oder einem Produktnamen.")
        + pagesMarkup(pages);
    }
  }

  resultsRoot.innerHTML = `<div class="container">${markup}
    </div>`;
  resultsRoot.querySelector("[data-open-search]")?.addEventListener("click", () => searchToggle.click());
}

showResults();
