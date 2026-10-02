// Placeholder colours for materials that appear in several products.
const CORK = "#c7a27a";
const COTTON = "#ebe5d6";

// ---------- Trust bar ----------
// On phones only one hint shows at a time; the arrows step through them.
const trustItems = [...document.querySelectorAll(".trustbar__item")];
let trustIndex = 0;

function showTrustItem(step) {
  trustItems[trustIndex].classList.remove("is-current");
  trustIndex = (trustIndex + step + trustItems.length) % trustItems.length;
  trustItems[trustIndex].classList.add("is-current");
}

document.querySelector(".trustbar__arrow--prev").addEventListener("click", () => showTrustItem(-1));
document.querySelector(".trustbar__arrow--next").addEventListener("click", () => showTrustItem(1));

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

// ---------- Community inspiration ----------
// The original shows real Instagram posts. Here: invented "Musterfrau"-style
// accounts and small drawn yoga scenes instead of other people's photos.
const communityPosts = [
  { handle: "erika.musterfrau", pose: "lunge", wall: "#d9d2c7", floor: "#a88b6a", mat: "#4f5a4f" },
  { handle: "max.mustermann", pose: "legRaise", wall: "#8a8178", floor: "#5f554b", mat: "#2f3a35" },
  { handle: "yoga.beispiel", pose: "supported", wall: "#e4e0d9", floor: "#cbbfae", mat: "#b8ad9c" },
  { handle: "flow.demo", pose: "warrior", wall: "#b9c4b0", floor: "#7f8582", mat: "#2f3b3a" },
  { handle: "om.platzhalter", pose: "seated", wall: "#ece9e3", floor: "#c9b293", mat: "#8b7d6b" },
];

// Stick-figure poses in a 100×100 scene: `body` is drawn as one thick stroke.
const poses = {
  lunge: { head: [39, 36], body: "M20 84H34L44 66L62 64L64 84M44 66L40 44M40 44L33 24" },
  legRaise: { head: [22, 80], body: "M28 82H54M54 82L80 84M54 82L60 46M32 84L46 88" },
  supported: { head: [18, 79], body: "M24 81H46M46 81L58 70L72 84M26 81L40 86", prop: `<ellipse cx="58" cy="80" rx="11" ry="6" fill="${COTTON}"/>` },
  warrior: { head: [50, 30], body: "M30 84L50 60M50 60L66 66L70 84M50 60V38M28 40H72" },
  seated: { head: [50, 44], body: "M32 84Q50 74 68 84M50 78V52M50 56L38 70L34 80M50 56L62 70L66 80", prop: `<ellipse cx="50" cy="86" rx="18" ry="5" fill="#6f6355"/>` },
};

// A drawn yoga scene (wall, floor, mat, figure) used in place of photos.
// Wall and floor reach past the 100×100 frame, so a caller can pass a
// taller viewBox (e.g. for a portrait card) without showing empty edges.
function sceneSvg({ pose: poseName, wall, floor, mat, figure = "#3a3530" }, viewBox = "0 0 100 100", align = "xMidYMid") {
  const pose = poses[poseName];
  return `
      <svg viewBox="${viewBox}" preserveAspectRatio="${align} slice" aria-hidden="true">
        <rect y="-100" width="100" height="172" fill="${wall}"/>
        <rect y="72" width="100" height="128" fill="${floor}"/>
        <path d="M10 80H90L96 90H4Z" fill="${mat}"/>
        ${pose.prop || ""}
        <path d="${pose.body}" fill="none" stroke="${figure}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="${pose.head[0]}" cy="${pose.head[1]}" r="5" fill="${figure}"/>
      </svg>`;
}

function communityTile(post) {
  return `
    <a href="#" class="community-tile" aria-label="Beitrag von @${post.handle} (Platzhalter)">
      ${sceneSvg(post)}
      <span class="community-tile__handle">${post.handle}</span>
    </a>`;
}

document.querySelector(".community-row").innerHTML = communityPosts.map(communityTile).join("");

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

// ---------- Newsletter (demo) ----------
// This is a student project: the form never sends or stores the address.
const newsletterForm = document.querySelector(".newsletter__form");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  newsletterForm.querySelector(".newsletter__status").textContent =
    "Danke! Das ist nur eine Demo – in diesem Studentenprojekt wird nichts gesendet oder gespeichert.";
  newsletterForm.reset();
});

// ---------- Menu data (mobile drawer + desktop dropdowns) ----------
// Same three-level structure as the original. A string is a plain link,
// an object with `children` opens its own panel on mobile and becomes a
// column on desktop. `mobileOnly` entries are left out of the desktop
// dropdown (as on the original); `promo` adds a picture card there.
const menu = [
  { label: "Yoga", icon: "yoga", children: [
    { label: "Yogamatten", icon: "mat", children: ["Alle Yogamatten", "Rutschfeste Yogamatten", "Yogamatten für Zuhause", "Studio Yogamatten", "Reise Yogamatten", "Yogamatten-Set", "„Almost Perfect“ Yogamatten"] },
    { label: "Yoga-Zubehör", icon: "block", children: ["Alles in Yoga-Zubehör", "Yogablöcke", "Yogataschen", "Yogadecken", "Yogagurte", "Yogahandtuch"] },
    { label: "Yoga-Bolster", icon: "bolster", children: ["Alle Yoga-Bolster", "Yogabolster", "Yogarolle", "Yoga-Sets"] },
    { label: "Yogamatten Add-Ons", icon: "bottle", children: ["Alle Yogamatten Add-Ons", "Yogamatten Reiniger", "Yogamatten Sticker", "Bezüge Yogarolle"] },
    { label: "Yoga-Sets", icon: "set" },
    { label: "Gutscheine", icon: "voucher", mobileOnly: true },
  ] },
  { label: "Meditation", icon: "meditation", children: [
    { label: "Meditationskissen", icon: "cushion", children: ["Alle Meditationskissen", "Rundkissen", "Zafu-Kissen", "Halbmondkissen"] },
    { label: "Meditationsmatten", icon: "mat", children: ["Alle Meditationsmatten", "Meditations-Set"] },
    { label: "Meditation-Zubehör", icon: "block", children: ["Alles in Meditation-Zubehör", "Augenkissen", "Dinkelspelz Füllmaterial", "Bezüge Meditationskissen", "Bezüge Meditationsmatten"] },
    { label: "Meditations-Sets", icon: "set" },
    { label: "Meditationsbänke", icon: "bench" },
    { label: "Gutscheine", icon: "voucher", mobileOnly: true },
  ] },
  { label: "Bekleidung", icon: "clothing", promo: { kicker: "Trending", title: "Die Flow Styles sind zurück!", scene: { pose: "warrior", wall: "#e3dcd3", floor: "#b49a7e", mat: "#4f5a4f", figure: "#6b2d3a" } }, children: [
    { label: "Damen", icon: "clothing", children: ["Alles in Damen-Kleidung", "Hosen", "Leggings", "Bra-Tops", "Shirts", "Overalls", "Pullover"] },
    { label: "Herren", icon: "clothing", children: ["Alles in Herren-Kleidung", "Tanktops", "Trainingshosen", "Sweatshirts & Pullover"] },
  ] },
  { label: "Geschenke", icon: "gift", promo: { kicker: "Angebote", title: "Spare beim Set-Kauf", product: "accessorySet" }, children: [
    { label: "Geschenkideen", icon: "gift", children: ["Alle Geschenkideen", "Geschenkideen unter 50€", "Geschenkideen unter 100€", "Geschenkideen unter 120€"] },
    { label: "Yoga-Sets", icon: "set" },
    { label: "Meditations-Sets", icon: "set" },
    { label: "Gutscheine", icon: "voucher" },
  ] },
  { label: "Sale", icon: "gift" },
];

// Small line icons (24×24) in the style of the original's menu icons.
const menuIcons = {
  yoga: '<circle cx="12" cy="4.5" r="1.6"/><path d="M4 9h16M12 9v5M12 14l-4 5M12 14l5 2.5.5 2.5M3 21h18"/>',
  meditation: '<circle cx="12" cy="4.5" r="1.6"/><path d="M12 8v5M12 9.5l-4 4 3 1M12 9.5l4 4-3 1M5 18c2.5-2 11.5-2 14 0M4 21h16"/>',
  clothing: '<path d="M9 4l3 1.5L15 4l4 3-1.5 3-1.5-1v11H8V9l-1.5 1L5 7z"/>',
  gift: '<rect x="4" y="10" width="16" height="10" rx="1"/><path d="M3 10h18M12 10v10M12 10c-1.5-3-5.5-4-5.5-1.5S10.5 10 12 10zm0 0c1.5-3 5.5-4 5.5-1.5S13.5 10 12 10z"/>',
  mat: '<rect x="3" y="13" width="14" height="6" rx="1"/><circle cx="18.5" cy="16" r="3"/>',
  block: '<path d="M4 8.5l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8.5l8 4 8-4M12 12.5v8"/>',
  bolster: '<rect x="3" y="9" width="18" height="7" rx="3.5"/><path d="M7 9v7"/>',
  bottle: '<path d="M10 3h4v3h-4zM9 6h6l1 3v12H8V9z"/>',
  set: '<rect x="3" y="11" width="9" height="9" rx="1"/><rect x="13" y="6" width="8" height="14" rx="1"/>',
  voucher: '<rect x="3" y="7" width="18" height="11" rx="1"/><path d="M9 7v11M3 12.5h6"/>',
  cushion: '<path d="M4 12c0-2 3.6-3.5 8-3.5s8 1.5 8 3.5v3c0 2-3.6 3.5-8 3.5S4 17 4 15z"/><path d="M4 12c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5"/>',
  bench: '<path d="M4 10l1-2h14l1 2zM6 10v8M18 10v8"/>',
  house: '<path d="M4 11l8-6 8 6v9H4z"/><path d="M10 20v-5h4v5"/>',
  suitcase: '<rect x="4" y="8" width="16" height="11" rx="1.5"/><path d="M9 8V5.5h6V8M4 13h16"/>',
  bag: '<rect x="3" y="10" width="18" height="7" rx="3.5"/><path d="M6 10c2-4 10-4 12 0"/>',
  strap: '<path d="M7 17l12-9M9 19l12-9"/><rect x="2.5" y="15.5" width="5" height="5" rx="2.5"/>',
  eyemask: '<path d="M3 10c3-3 15-3 18 0v2c-2 3-6 4-9 2-3 2-7 1-9-2z"/>',
  pants: '<path d="M7 3h10l1 18h-4l-2-11-2 11H6z"/>',
  top: '<path d="M8 4c1 2 2.5 3 4 3s3-1 4-3l3 3-2 3v10H7V10L5 7z"/>',
};

// Desktop dropdown links that get a more specific icon than their column.
const linkIcons = {
  "Yogamatten für Zuhause": "house",
  "Reise Yogamatten": "suitcase",
  "Yogamatten-Set": "set",
  "Yogataschen": "bag",
  "Yogagurte": "strap",
  "Yoga-Sets": "set",
  "Augenkissen": "eyemask",
  "Meditations-Set": "set",
  "Hosen": "pants",
  "Leggings": "pants",
  "Overalls": "pants",
  "Trainingshosen": "pants",
  "Bra-Tops": "top",
  "Shirts": "top",
  "Tanktops": "top",
};

// ---------- Mobile menu ----------
const drawer = document.getElementById("menu-drawer");
const drawerNav = drawer.querySelector(".drawer__nav");
const menuToggle = document.querySelector(".menu-toggle");
const trail = []; // the panels opened so far, e.g. [Yoga, Yogamatten]

const menuIcon = (name, className = "drawer__icon") =>
  `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${menuIcons[name]}</svg>`;
const chevron = (direction) =>
  `<svg class="drawer__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="${direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}"/></svg>`;

function renderMenu(direction) {
  const parent = trail[trail.length - 1];
  const items = parent ? parent.children : menu;

  const back = parent
    ? `<button class="drawer__back" data-action="back">${chevron("left")}<span>${parent.label}</span></button>`
    : "";
  const list = items.map((item, i) => {
    if (typeof item === "string") {
      return `<li><a href="#" class="drawer__link drawer__link--plain">${item}</a></li>`;
    }
    return item.children
      ? `<li><button class="drawer__link" data-index="${i}">${menuIcon(item.icon)}<span>${item.label}</span>${chevron("right")}</button></li>`
      : `<li><a href="#" class="drawer__link">${menuIcon(item.icon)}<span>${item.label}</span></a></li>`;
  }).join("");

  drawerNav.innerHTML = `${back}<ul>${list}</ul>`;

  // Restart the slide-in animation in the direction we're moving.
  drawerNav.dataset.direction = direction;
  drawerNav.classList.remove("is-sliding");
  void drawerNav.offsetWidth;
  drawerNav.classList.add("is-sliding");

  if (drawer.open) drawerNav.querySelector("button, a").focus();
}

drawerNav.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  if (button.dataset.action === "back") {
    const closed = trail.pop();
    renderMenu("back");
    // Return focus to the item we came from, not just the top of the list.
    const items = trail.length ? trail[trail.length - 1].children : menu;
    drawerNav.querySelector(`[data-index="${items.indexOf(closed)}"]`).focus();
  } else {
    const items = trail.length ? trail[trail.length - 1].children : menu;
    trail.push(items[button.dataset.index]);
    renderMenu("forward");
  }
});

menuToggle.addEventListener("click", () => {
  trail.length = 0;
  renderMenu("none");
  drawer.showModal();
  menuToggle.setAttribute("aria-expanded", "true");
  drawerNav.querySelector("button, a").focus();
});

drawer.querySelector(".drawer__close").addEventListener("click", () => drawer.close());
// Safari doesn't focus buttons on click, so hand focus back explicitly.
drawer.addEventListener("close", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.focus();
});

// The desktop navigation takes over above 1100px, so close the drawer there.
window.matchMedia("(min-width: 1101px)").addEventListener("change", (e) => {
  if (e.matches && drawer.open) drawer.close();
});

// ---------- Desktop mega menu ----------
// Hovering a nav item (after a short pause, so sweeping across the nav
// doesn't flicker) or tabbing onto it opens its full-width dropdown.
// Escape closes it again.
const header = document.querySelector(".header");
const megaItems = [...document.querySelectorAll(".nav__item[data-menu]")];
let openMegaItem = null;
let megaTimer = null;
let suppressFocusOpen = false;

function megaColumn(category, column) {
  // An entry without children (e.g. "Yoga-Sets") becomes one "Alle …" link.
  const links = column.children || [`Alle ${column.label}`];
  const items = links.map((label, i) => {
    const icon = column.children && i === 0 ? category.icon : linkIcons[label] || column.icon;
    return `<li><a href="#" class="mega__link">${menuIcon(icon, "mega__icon")}<span>${label}</span></a></li>`;
  }).join("");
  return `
        <div class="mega__column">
          <p class="mega__heading">${column.label}</p>
          <ul class="mega__links">${items}</ul>
        </div>`;
}

function megaPromo({ kicker, title, scene, product }) {
  // Extra room below the figure keeps it clear of the label at the bottom.
  const art = scene
    ? sceneSvg(scene, "0 -20 100 160", "xMidYMax")
    : `<svg viewBox="0 0 180 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
         <rect width="180" height="225" fill="#f1f0ee"/>
         <g transform="translate(0 20)">${shapes[product](COTTON)}</g>
       </svg>`;
  return `
        <a href="#" class="mega__promo">
          ${art}
          <span class="mega__promo-details">
            <span class="mega__promo-kicker">${kicker}</span>
            <span class="mega__promo-title">${title}</span>
          </span>
        </a>`;
}

function setMegaOpen(item) {
  if (openMegaItem === item) return;
  if (openMegaItem) {
    openMegaItem.classList.remove("is-open");
    openMegaItem.querySelector(".nav__link").setAttribute("aria-expanded", "false");
  }
  openMegaItem = item;
  if (item) {
    item.classList.add("is-open");
    item.querySelector(".nav__link").setAttribute("aria-expanded", "true");
  }
  header.classList.toggle("has-open-menu", Boolean(item));
}

megaItems.forEach((item) => {
  const category = menu.find((entry) => entry.label === item.dataset.menu);
  const columns = category.children
    .filter((column) => !column.mobileOnly)
    .map((column) => megaColumn(category, column))
    .join("");
  const id = `mega-${category.label.toLowerCase()}`;

  item.insertAdjacentHTML("beforeend", `
    <div class="mega" id="${id}">
      <div class="mega__grid">${columns}${category.promo ? megaPromo(category.promo) : ""}
      </div>
    </div>`);

  const link = item.querySelector(".nav__link");
  link.setAttribute("aria-expanded", "false");
  link.setAttribute("aria-controls", id);

  item.addEventListener("mouseenter", () => {
    clearTimeout(megaTimer);
    // Switch at once when moving between items, wait a moment otherwise.
    megaTimer = setTimeout(() => setMegaOpen(item), openMegaItem ? 0 : 80);
  });
  item.addEventListener("mouseleave", () => {
    clearTimeout(megaTimer);
    megaTimer = setTimeout(() => setMegaOpen(null), 150);
  });
  item.addEventListener("focusin", () => {
    if (suppressFocusOpen) return;
    clearTimeout(megaTimer);
    setMegaOpen(item);
  });
  item.addEventListener("focusout", (e) => {
    if (!item.contains(e.relatedTarget) && openMegaItem === item) setMegaOpen(null);
  });
  item.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || openMegaItem !== item) return;
    setMegaOpen(null);
    // Put focus back on the nav link without the focus reopening the menu.
    suppressFocusOpen = true;
    link.focus();
    suppressFocusOpen = false;
  });
});

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
