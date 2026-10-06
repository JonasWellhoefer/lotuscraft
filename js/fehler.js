// The 404 page. produkt.html, kategorie.html and seite.html show it when the
// address names something this project doesn't have. Like the original's it
// offers the way home, the search, the bestsellers and the latest blog posts.

const NOT_FOUND_BESTSELLERS = ["Yogamatte MUDRA", "Yogagurt 100% Bio-Baumwolle", "Yogamatte PURE", "Yogatasche PUNE"];

// ---------- Pictures for the blog teasers ----------
// Drawn here instead of photos, from the same product shapes as the cards
// (180×180 each, placed on a 326×200 scene).
const blogPiece = (shape, color, x, y, scale) => `<g transform="translate(${x} ${y}) scale(${scale})">${shapes[shape](color)}</g>`;
const blogScene = (inner) => `<svg viewBox="0 0 326 200" aria-hidden="true">${inner}</svg>`;

const BLOG_PICTURES = {
  // Sunrise over a cushion
  atmen: () => blogScene(`
    <defs><linearGradient id="blog-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e9d8"/><stop offset="1" stop-color="#ecd2b0"/></linearGradient></defs>
    <rect width="326" height="200" fill="url(#blog-sky)"/>
    <circle cx="163" cy="112" r="74" fill="#f3c98a" opacity=".3"/>
    <circle cx="163" cy="112" r="50" fill="#f3c98a"/>
    <rect y="146" width="326" height="54" fill="#cfae85"/>
    <path d="M112 62q51-30 102 0M128 46q35-20 70 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".75"/>
    ${blogPiece("lotusCushion15", "#8b7d6b", 94, 76, .75)}`),

  // A rolled mat, the spray bottle and a few drops
  "matte-pflegen": () => blogScene(`
    <rect width="326" height="200" fill="#dde6df"/>
    <rect y="156" width="326" height="44" fill="#c3d0c7"/>
    ${blogPiece("mat", "#55695f", 16, 30, 1.05)}
    ${blogPiece("spray", "#f4f1ea", 176, 34, 1)}
    <g fill="#8fb1c4">
      <path d="M222 74c3 4 4 6 4 8a4 4 0 0 1-8 0c0-2 1-4 4-8z"/>
      <path d="M208 88c2.5 3.5 3.5 5 3.5 7a3.5 3.5 0 0 1-7 0c0-2 1-3.5 3.5-7z" opacity=".8"/>
      <path d="M220 102c2 3 3 4.5 3 6a3 3 0 0 1-6 0c0-1.5 1-3 3-6z" opacity=".65"/>
    </g>`),

  // The same cushion in 10, 15 and 20 cm
  sitzhoehe: () => blogScene(`
    <rect width="326" height="200" fill="#ece4d6"/>
    <rect y="150" width="326" height="50" fill="#dccfb9"/>
    ${blogPiece("lotusCushion10", "#a39a8c", -5, 62, .7)}
    ${blogPiece("lotusCushion15", "#8b7d6b", 100, 62, .7)}
    ${blogPiece("lotusCushion20", "#5d6b73", 205, 62, .7)}
    <g font-family="Hanken Grotesk, sans-serif" font-size="13" fill="#3d3b35" text-anchor="middle">
      <text x="58" y="180">10 cm</text><text x="163" y="180">15 cm</text><text x="268" y="180">20 cm</text>
    </g>`),
};

// The first 150 characters of a post, cut at a word, without the markup
function blogTeaser(html) {
  const text = html.replace(/<[^>]+>/g, "");
  return text.length > 150 ? `${text.slice(0, 150).replace(/\s+\S*$/, "")}…` : text;
}

// ---------- The page ----------
function notFoundMarkup() {
  const cards = NOT_FOUND_BESTSELLERS.map((name) => productCard(relatedCard(name))).join("");
  const posts = blogPosts.slice(0, 3).map((post) => `
          <li>
            <a class="blog-card" href="seite.html?s=blog#${post.id}">
              <div class="blog-card__image">${(BLOG_PICTURES[post.id] || BLOG_PICTURES.atmen)()}</div>
              <div class="blog-card__summary">
                <h3 class="blog-card__title">${post.title}</h3>
                <p class="blog-card__text">${blogTeaser(post.text)}</p>
                <span class="blog-card__more">Weiterlesen</span>
              </div>
            </a>
          </li>`).join("");

  return `
    <section class="not-found__section">
      <div class="container">
        <div class="not-found__empty">
          <p class="not-found__code">404</p>
          <h1 class="not-found__title">Leider finden wir nicht, wonach du suchst</h1>
          <p class="not-found__text">Vielleicht hilft das weiter?</p>
          <div class="not-found__actions">
            <a class="btn btn--primary" href="index.html">Zur Homepage</a>
            <button class="btn btn--outline" type="button" data-open-search aria-haspopup="dialog">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>
              Suche ausprobieren
            </button>
          </div>
          <p class="not-found__note">Im Studentenprojekt ist nicht jede Seite des Originals nachgebaut.</p>
        </div>
      </div>
    </section>

    <section class="not-found__section" aria-labelledby="not-found-bestsellers">
      <div class="container">
        <h2 class="not-found__heading" id="not-found-bestsellers">Unsere Bestseller</h2>
        <div class="product-grid">${cards}</div>
      </div>
    </section>

    <section class="not-found__section" aria-labelledby="not-found-blog">
      <div class="container">
        <h2 class="not-found__heading" id="not-found-blog">Neueste Blogartikel</h2>
        <ul class="blog-grid" role="list">${posts}
        </ul>
      </div>
    </section>`;
}

// Fills a page's <main> with the 404 page; the address stays as it is.
function showNotFound(root) {
  document.title = "404 Nicht gefunden – LotusCraft Student Rebuild";
  root.className = "not-found";
  root.innerHTML = notFoundMarkup();
  root.querySelector("[data-open-search]").addEventListener("click", () => document.querySelector(".search-toggle").click());
}
