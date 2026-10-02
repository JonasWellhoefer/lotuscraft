// Placeholder colours for materials that appear in several products.
const CORK = "#c7a27a";
const COTTON = "#ebe5d6";

// ---------- Bestseller data ----------
// Product names and prices mirror the original shop (as of Oct 2026).
// `shape` picks a placeholder illustration instead of the original photo.
const bestsellers = {
  yoga: [
    { name: "Yogablock Kork 2er Set", price: 29.95, shape: "block", tint: CORK },
    { name: "Yogamatte PURE", price: 79.95, shape: "mat", tint: "#7a2a3a", badge: "Matte Oberfläche" },
    { name: "Yogamatte ARISE", price: 89.95, shape: "mat", tint: "#3f5550" },
    { name: "Yogamatte MUDRA", price: 39.95, shape: "mat", tint: "#55695f" },
  ],
  meditation: [
    { name: "Meditationskissen Lotus (H: 15cm)", price: 39.95, shape: "cushion", tint: "#8b7d6b" },
    { name: "Meditationsmatte Zabuton", price: 59.95, shape: "zabuton", tint: "#6f6a62" },
    { name: "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", price: 34.95, shape: "cushion", tint: "#a39a8c" },
    { name: "Meditationskissen Lotus KLEIN (H: 10 cm)", price: 37.95, shape: "cushion", tint: "#5d6b73" },
  ],
  bekleidung: [
    { name: "BECCA Leggings", price: 55.95, compareAt: 69.95, shape: "leggings", tint: "#5f6062" },
    { name: "MIKO Bralette", price: 31.49, compareAt: 44.95, shape: "top", tint: "#ebe7e0" },
    { name: "NIA Womens Sweater", price: 62.99, compareAt: 89.95, shape: "sweater", tint: "#56595a" },
    { name: "FEND Mens Sweater", price: 44.99, compareAt: 89.95, shape: "sweater", tint: "#9aa6aa" },
  ],
};

// ---------- Set offer data ----------
// Every bundle is 10% off. `fromPrice` adds "ab" where the price depends on the
// chosen size. `swatches` are the available colours; the original bakes them
// into the product photo, here they are real elements.
const bundles = {
  "yoga-bundles": [
    { name: "Yogamatte ARISE Set", price: 107.91, compareAt: 119.9, bundle: true, shape: "matSet", tint: "#6d7d93", accent: "#8f8c84", swatches: ["#8a3d4f", "#6d7d93", "#4b4b4d"] },
    { name: "Yogamatte PURE Set", price: 98.91, compareAt: 109.9, bundle: true, shape: "matSet", tint: "#9a5a6a", accent: "#ddd3c4", swatches: ["#b3a596", "#7a2a3a", "#6b7c95"] },
    { name: "Yoga-Zubehör Set", price: 38.61, compareAt: 42.9, bundle: true, fromPrice: true, shape: "accessorySet", tint: COTTON, swatches: [COTTON, "#7a3445", "#6b7a52", "#4a4a4c", "#647892"] },
    { name: "Yoga Set Yin Yoga Restorative S", price: 83.57, compareAt: 92.85, bundle: true, fromPrice: true, shape: "yinSet", tint: "#7f93ad", swatches: [COTTON, "#7d2f3c", "#8a4253", "#2f3a5c", "#7f93ad", "#6d655c"] },
  ],
  "meditation-bundles": [
    { name: "Meditations-Set Lotus 15cm", price: 89.91, compareAt: 99.9, bundle: true, fromPrice: true, shape: "meditationSet", tint: "#5f6b78", swatches: ["#8a4253", "#7d2f3c", "#5b7290", "#7f93ad", "#5a5752"] },
    { name: "Meditations-Set Lotus 20cm", price: 94.41, compareAt: 104.9, bundle: true, fromPrice: true, shape: "meditationSet", tint: "#5f6b78", swatches: ["#8a4253", "#7d2f3c", "#5b7290", "#7f93ad", "#5a5752"] },
    { name: "Yogarolle Set Yin Yoga", price: 101.57, compareAt: 112.85, bundle: true, fromPrice: true, shape: "bolsterSet", tint: COTTON, swatches: [COTTON, "#7d2f3c", "#3f3f42", "#5b7290"] },
  ],
};

// Simple SVG silhouettes so each card reads as the right kind of product.
// `c` is the product's main colour, `a` an optional accent (e.g. the mat bag).
const shapes = {
  mat: (c) => `<rect x="20" y="70" width="140" height="38" rx="6" fill="${c}" transform="rotate(-18 90 89)"/>
               <ellipse cx="38" cy="112" rx="14" ry="19" fill="${c}" transform="rotate(-18 90 89)"/>
               <ellipse cx="38" cy="112" rx="6" ry="9" fill="rgba(0,0,0,.25)" transform="rotate(-18 90 89)"/>`,
  block: (c) => `<rect x="38" y="62" width="62" height="88" rx="4" fill="${c}"/>
                 <rect x="78" y="48" width="62" height="88" rx="4" fill="${c}" opacity=".85"/>
                 <rect x="78" y="80" width="62" height="26" fill="rgba(255,255,255,.55)"/>`,
  cushion: (c) => `<ellipse cx="90" cy="118" rx="62" ry="16" fill="rgba(0,0,0,.12)"/>
                   <path d="M28 82c0-14 28-22 62-22s62 8 62 22v26c0 10-28 18-62 18s-62-8-62-18z" fill="${c}"/>
                   <ellipse cx="90" cy="82" rx="62" ry="20" fill="${c}" opacity=".8"/>`,
  zabuton: (c) => `<rect x="22" y="88" width="136" height="30" rx="8" fill="${c}"/>
                   <rect x="22" y="80" width="136" height="16" rx="8" fill="${c}" opacity=".75"/>`,
  leggings: (c) => `<path d="M62 30h56l6 130h-22l-12-96-12 96H56z" fill="${c}"/>`,
  top: (c) => `<path d="M58 52l14-18h36l14 18v58H58z" fill="${c}" stroke="#d5d0c7"/>`,
  sweater: (c) => `<path d="M58 38l32-8 32 8 22 18 10 86-16 2-12-70v80H54V74l-12 70-16-2 10-86z" fill="${c}"/>`,

  // Bundles: several products in one picture.
  matSet: (c, a) => `<rect x="46" y="16" width="88" height="26" rx="13" fill="${a}"/>
                     <rect x="56" y="16" width="5" height="26" fill="rgba(0,0,0,.1)"/>
                     <rect x="36" y="54" width="108" height="76" rx="3" fill="${c}"/>
                     <rect x="33" y="124" width="114" height="16" rx="8" fill="#2b2a28"/>`,
  accessorySet: (c) => `<rect x="44" y="22" width="104" height="14" rx="7" fill="${c}" stroke="rgba(0,0,0,.08)" transform="rotate(-10 96 29)"/>
                        <circle cx="40" cy="40" r="8" fill="none" stroke="#8b8b8b" stroke-width="2.5"/>
                        <rect x="28" y="70" width="58" height="58" rx="3" fill="${CORK}"/>
                        <rect x="28" y="62" width="58" height="12" rx="3" fill="#d9b994"/>
                        <rect x="94" y="70" width="58" height="58" rx="3" fill="${CORK}"/>
                        <rect x="94" y="62" width="58" height="12" rx="3" fill="#d9b994"/>`,
  yinSet: (c) => `<rect x="34" y="14" width="44" height="58" rx="3" fill="${CORK}"/>
                  <rect x="34" y="14" width="44" height="10" rx="3" fill="#d9b994"/>
                  <rect x="22" y="84" width="136" height="42" rx="21" fill="${c}"/>
                  <ellipse cx="137" cy="105" rx="9" ry="21" fill="rgba(255,255,255,.18)"/>
                  <rect x="70" y="134" width="88" height="10" rx="5" fill="${COTTON}" stroke="rgba(0,0,0,.08)" transform="rotate(-6 114 139)"/>`,
  meditationSet: (c) => `<path d="M60 44c0-8 13-13 30-13s30 5 30 13v20c0 6-13 10-30 10s-30-4-30-10z" fill="${c}"/>
                         <ellipse cx="90" cy="44" rx="30" ry="11" fill="rgba(255,255,255,.14)"/>
                         <path d="M22 122l20-34h96l20 34c0 6-4 10-10 10H32c-6 0-10-4-10-10z" fill="${c}"/>
                         <path d="M22 122l20-34h96l20 34z" fill="rgba(255,255,255,.12)"/>`,
  bolsterSet: (c) => `<rect x="30" y="20" width="62" height="12" rx="6" fill="${COTTON}" stroke="rgba(0,0,0,.08)" transform="rotate(-14 61 26)"/>
                      <circle cx="30" cy="40" r="7" fill="none" stroke="#8b8b8b" stroke-width="2.5"/>
                      <rect x="102" y="16" width="52" height="42" rx="4" fill="${COTTON}" stroke="rgba(0,0,0,.08)"/>
                      <rect x="102" y="30" width="52" height="4" fill="#c9a96e"/>
                      <rect x="34" y="82" width="116" height="44" rx="22" fill="${c}" stroke="rgba(0,0,0,.08)" transform="rotate(14 92 104)"/>`,
};

const formatPrice = (value) => "€" + value.toFixed(2).replace(".", ",");

function productCard(product) {
  const discount = product.compareAt
    ? Math.round((1 - product.price / product.compareAt) * 100)
    : 0;

  const tag = discount
    ? `<span class="product-card__tag product-card__tag--sale">${product.bundle ? "Set " : ""}-${discount}%</span>`
    : product.badge
      ? `<span class="product-card__tag">${product.badge}</span>`
      : "";

  const salePrice = (product.fromPrice ? "ab " : "") + formatPrice(product.price);
  const price = product.compareAt
    ? `<span class="price price--compare">${formatPrice(product.compareAt)}</span>
       <span class="price price--sale">${salePrice}</span>`
    : `<span class="price">${salePrice}</span>`;

  const swatches = product.swatches
    ? `<span class="swatches" role="img" aria-label="In ${product.swatches.length} Farben erhältlich">
         ${product.swatches.map((color) => `<span class="swatch" style="background:${color}"></span>`).join("")}
       </span>`
    : "";

  return `
    <a href="#" class="product-card">
      <div class="product-card__media${swatches ? " product-card__media--swatches" : ""}">
        <svg viewBox="0 0 180 180" role="img" aria-label="Platzhalter: ${product.name}">
          ${shapes[product.shape](product.tint, product.accent)}
        </svg>
        ${swatches}
        ${tag}
      </div>
      <h3 class="product-card__title">${product.name}</h3>
      <p class="product-card__price">${price}</p>
    </a>`;
}

const collections = { ...bestsellers, ...bundles };

document.querySelectorAll(".product-grid").forEach((grid) => {
  grid.innerHTML = collections[grid.dataset.category].map(productCard).join("");
});

// ---------- Testimonials ----------
// Invented sample reviews: the original shows real customers' names and
// towns, which don't belong in a public student repo.
const reviews = [
  { name: "Lena", stars: 5, product: "Yogamatte ARISE", text: "Super rutschfest, auch wenn es mal schweißtreibend wird. Die Farbe ist in echt noch schöner.", meta: "vor 2 Stunden" },
  { name: "Markus", stars: 5, product: "Yogablock Kork 2er Set", text: "Stabil, angenehm griffig und riecht nicht. Genau das, was ich gesucht habe.", meta: "vor 5 Stunden" },
  { name: "Sophie", stars: 4, product: "Meditationskissen Lotus (H: 15cm)", text: "Sehr bequem und gut verarbeitet. Für mich hätte es einen Tick höher sein dürfen, sonst perfekt.", meta: "vor 9 Stunden" },
  { name: "Jana", stars: 5, product: "Yogamatte PURE", text: "Die matte Oberfläche fühlt sich toll an. Lieferung ging schnell und die Verpackung war plastikfrei.", meta: "vor einem Tag" },
  { name: "Anonym", stars: 5, product: "Meditationsmatte Zabuton", text: "Ergänzt mein Kissen perfekt, die Knie danken es mir. Klare Empfehlung.", meta: "vor einem Tag" },
  { name: "Tobias", stars: 4, product: "FEND Mens Sweater", text: "Weich und gemütlich, fällt etwas größer aus. Nach dem Waschen immer noch in Form.", meta: "vor 2 Tagen" },
  { name: "Clara", stars: 5, product: "Yogamatte MUDRA", text: "Für den Preis eine richtig gute Einsteigermatte. Leicht genug, um sie zum Kurs mitzunehmen.", meta: "vor 3 Tagen" },
];

const star = (filled) =>
  `<svg viewBox="0 0 20 20" class="${filled ? "is-filled" : ""}"><path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.7l6-.7z"/></svg>`;

function reviewCard(review) {
  const stars = Array.from({ length: 5 }, (_, i) => star(i < review.stars)).join("");
  return `
    <article class="review">
      <div class="review__head">
        <span class="review__name">${review.name}</span>
        <span class="review__stars" aria-label="${review.stars} von 5 Sternen">${stars}</span>
      </div>
      <p class="review__badge">
        <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7"/><path d="M5 8.2l2 2 4-4.4"/></svg>
        Verifizierter Kauf
      </p>
      <p class="review__product">${review.product}</p>
      <p class="review__text">${review.text}</p>
      <p class="review__meta">${review.meta}</p>
    </article>`;
}

const track = document.querySelector(".carousel__track");
track.innerHTML = reviews.map(reviewCard).join("");

function scrollByCard(direction) {
  const card = track.querySelector(".review");
  const step = card.offsetWidth + parseFloat(getComputedStyle(track).columnGap);
  const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  if (direction > 0 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
  else track.scrollBy({ left: direction * step, behavior: "smooth" });
}

document.querySelector(".carousel__arrow--prev").addEventListener("click", () => scrollByCard(-1));
document.querySelector(".carousel__arrow--next").addEventListener("click", () => scrollByCard(1));

// Autoplay like the original, with a pause button. Respects reduced motion.
const pauseButton = document.querySelector(".carousel__pause");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let autoplay = null;

function setPaused(paused) {
  clearInterval(autoplay);
  autoplay = paused ? null : setInterval(() => scrollByCard(1), 5000);
  pauseButton.setAttribute("aria-pressed", paused);
  pauseButton.querySelector("span").textContent = paused ? "Abspielen" : "Pause";
  pauseButton.querySelector("path").setAttribute("d", paused ? "M8 5l11 7-11 7z" : "M9 6v12M15 6v12");
}

pauseButton.addEventListener("click", () => setPaused(autoplay !== null));
setPaused(reducedMotion);

// ---------- Tabs ----------
// Each tab list only controls its own panels, so several tab groups
// (bestsellers, set offers) can live on the same page.
document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];

  function selectTab(tab) {
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active);
      t.tabIndex = active ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (e) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (!step) return;
      const next = tabs[(i + step + tabs.length) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });
});
