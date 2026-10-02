// Product page: gallery, colour choice, add to cart, details.
// Which product is shown comes from the URL, e.g. produkt.html?p=yogamatte-pure.
// To add another product page, add an entry here and a `slug` to its card data.

// ---------- Product data ----------
// Name, price, colours and ratings mirror the original shop. The texts are
// written for this student project (not copied from the original).
const productDetails = {
  "yogamatte-pure": {
    name: "Yogamatte PURE",
    subtitle: "Die Dynamische: Rutschfestigkeit und Stabilität in perfekter Balance.",
    price: 79.95,
    rating: 4.61,
    reviewCount: 866,
    ratingScales: [
      ["Rutschfestigkeit", 4.89],
      ["Dämpfung", 4.54],
      ["Qualität und Langlebigkeit", 4.47],
    ],
    // `matte` colours have a structured surface and an underside in the same
    // colour; the others are smooth with a black underside (as on the original).
    colors: [
      { name: "Dark Cranberry", hex: "#7a2a3a", matte: true },
      { name: "Balsam Green", hex: "#5d7366", matte: true },
      { name: "Light Taupe", hex: "#c4b6a6" },
      { name: "Aubergine", hex: "#8d5a6f" },
      { name: "Indigo Dust", hex: "#6b7c95" },
      { name: "Anthrazit", hex: "#3d3d3f" },
    ],
    accordion: [
      ["Beschreibung", `
        <p>Die PURE ist für dynamische Yogastile gemacht: Ihre Oberfläche aus PU (Polyurethan) gibt dir auch dann sicheren Halt, wenn du ins Schwitzen kommst – ideal für Vinyasa und Power Yoga.</p>
        <p>Die Unterseite aus Naturkautschuk liegt fest auf dem Boden und dämpft angenehm. Dark Cranberry und Balsam Green haben eine fein strukturierte, matte Oberfläche und eine Unterseite im gleichen Farbton. Alle anderen Farben sind glatt und haben eine schwarze Unterseite.</p>`],
      ["Details", `
        <dl class="facts">
          <dt>Material</dt><dd>PU-Oberfläche, Unterseite aus Naturkautschuk</dd>
          <dt>Maße (L × B)</dt><dd>183 × 66 cm</dd>
          <dt>Dicke</dt><dd>0,4 cm</dd>
          <dt>Hinweis</dt><dd>Nachbau für ein Studentenprojekt – kein echtes Produkt, daher keine Hersteller- oder Bestellangaben.</dd>
        </dl>`],
      ["Pflege", `
        <p>Am besten mit einem weichen Tuch und einer Mischung aus Wasser und Apfelessig (1:1) abwischen. Keine Seife verwenden und nicht in die Waschmaschine geben.</p>
        <p>Vor direkter Sonne und großer Hitze schützen und nach dem Reinigen trocknen lassen, bevor du die Matte aufrollst. Cremes und Öle auf der Haut hinterlassen Flecken und verringern den Grip.</p>`],
      ["Nachhaltigkeit", `
        <p><strong>Plastikfreie Verpackung</strong> – ohne PVC und ohne erdölbasierte Kunststoffe.</p>`],
    ],
    // Info rows below the details, alternating text and picture.
    features: [
      {
        title: "Griffig dank PU-Oberfläche",
        text: "Die Oberfläche aus PU wird nicht rutschig, wenn du ins Schwitzen kommst. So stehst du auch in fordernden Flows sicher – vom herabschauenden Hund bis zur Balance-Haltung. Die Unterseite aus Naturkautschuk hält die Matte dabei fest am Boden.",
        picture: "grip",
      },
      {
        title: "Viel Platz, sicherer Stand",
        text: "Mit 66 cm ist die PURE breiter als viele Standardmatten, die meist um die 60 cm messen. Das gibt dir Raum für weite Stände und seitliche Übergänge, ohne dass Hände oder Füße über den Rand rutschen. Mit 183 cm Länge passt sie auch für große Menschen.",
        picture: "size",
      },
      {
        title: "Angenehm auf der Haut",
        text: "Die samtige PU-Schicht fühlt sich weich an, der Naturkautschuk darunter federt Knie und Handgelenke ab. Mit 4 mm ist die Matte dick genug für Komfort und dünn genug, um stabil zu stehen.",
        picture: "layers",
      },
      {
        title: "Für viele Yogastile gemacht",
        text: "Ob ruhiges Hatha, kraftvolles Vinyasa oder Yin am Abend: Die Mischung aus Grip und Dämpfung macht die PURE zur Matte für jeden Tag – zu Hause wie im Studio.",
        picture: "styles",
      },
    ],
    // Invented sample reviews: the original lists real customers' names and
    // towns. `days` = how long ago, used for sorting by "newest".
    reviews: [
      { name: "Katrin", place: "Wien, AT", color: "Dark Cranberry", stars: 5, days: 1, text: "Schöne, satte Farbe und ein richtig guter Grip. Nach drei Wochen täglichem Üben sieht sie noch aus wie neu." },
      { name: "Mia", place: "München, DE", color: "Light Taupe", stars: 5, days: 2, text: "Ich schwitze beim Vinyasa ziemlich viel – auf der PURE kein Problem. Endlich brauche ich kein Handtuch mehr als Unterlage." },
      { name: "Paul", place: "Berlin, DE", color: "Anthrazit", stars: 4, days: 3, text: "Top Grip und angenehm breit. Einen Stern Abzug, weil sie zum Mitnehmen etwas schwer ist." },
      { name: "Elena", place: "Graz, AT", color: "Balsam Green", stars: 5, days: 5, text: "Die matte Oberfläche fühlt sich samtig an und ist trotzdem super griffig. Das Grün passt perfekt in mein Yogazimmer." },
      { name: "Anonym", place: "", color: "Indigo Dust", stars: 5, days: 6, text: "Gute Dämpfung für die Knie, trotzdem stabil in den Balance-Haltungen." },
      { name: "Sabine", place: "Hamburg, DE", color: "Aubergine", stars: 3, days: 8, text: "Schöne Matte, aber der Gummigeruch war die ersten Tage ziemlich stark. Nach einer Woche Lüften ist er kaum noch da." },
      { name: "Lukas", place: "Zürich, CH", color: "Anthrazit", stars: 5, days: 10, text: "Nutze sie täglich fürs Morgen-Yoga. Sie rollt sich flach aus und bleibt liegen, keine hochstehenden Ecken." },
      { name: "Nina", place: "Köln, DE", color: "Dark Cranberry", stars: 4, days: 12, text: "Sehr guter Halt. Auf der dunklen Farbe sieht man allerdings jeden Fussel – regelmäßiges Abwischen gehört dazu." },
      { name: "Thomas", place: "Leipzig, DE", color: "Light Taupe", stars: 5, days: 15, text: "Als großer Mensch freue ich mich über die Breite. Im herabschauenden Hund rutsche ich endlich nicht mehr nach hinten." },
      { name: "Julia", place: "Salzburg, AT", color: "Balsam Green", stars: 5, days: 18, text: "Schnelle Lieferung, plastikfreie Verpackung und eine Matte, die sich hochwertig anfühlt. Gerne wieder." },
      { name: "Martin", place: "Frankfurt, DE", color: "Indigo Dust", stars: 2, days: 21, text: "Für mich zu fest – für Yin hätte ich mehr Polsterung gebraucht. Für dynamisches Yoga ist sie sicher super." },
      { name: "Lea", place: "Innsbruck, AT", color: "Aubergine", stars: 5, days: 27, text: "Nach langer Suche die Matte, auf der ich mich wirklich sicher fühle. Und die Farbe ist wunderschön." },
    ],
    // "Verwandte Produkte", as on the original (prices from the shop).
    related: [
      { name: "Yogatasche PUNE", price: 29.95, shape: "bag", tint: "#c9bcae" },
      { name: "Yogamatten Tragegurt", price: 14.95, shape: "strap", tint: COTTON },
      { name: "„Almost Perfect“ Yogamatte PURE", price: 67.95, compareAt: 79.95, shape: "mat", tint: "#7a2a3a" },
      bestsellers.yoga[0], // Yogablock Kork 2er Set
    ],
  },
};

// ---------- Drawn product pictures ----------
// Stand-ins for the original's photos, drawn in the selected colour.
// All are 200×250 (the original's 4:5 format) on the photo-grey background.
const PHOTO_BG = "#f1f0ee";
let patternCount = 0; // keeps SVG pattern ids unique on the page

const underside = (color) => (color.matte ? color.hex : "#2b2a28");

function rolledPicture(color) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <ellipse cx="104" cy="176" rx="86" ry="9" fill="rgba(0,0,0,.07)"/>
      <g transform="rotate(-24 100 130)">
        <rect x="30" y="112" width="160" height="46" rx="3" fill="${color.hex}"/>
        <circle cx="128" cy="135" r="7" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="1.2"/>
        <ellipse cx="34" cy="135" rx="17" ry="26" fill="${underside(color)}"/>
        <ellipse cx="32" cy="135" rx="12" ry="19" fill="none" stroke="rgba(255,255,255,.14)"/>
        <ellipse cx="32" cy="135" rx="7" ry="11" fill="rgba(0,0,0,.35)"/>
      </g>
    </svg>`;
}

function topPicture(color) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <rect x="52" y="22" width="96" height="180" rx="3" fill="${color.hex}"/>
      <circle cx="100" cy="54" r="8" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="1.2"/>
      <rect x="48" y="196" width="104" height="30" rx="15" fill="${underside(color)}"/>
      <rect x="54" y="199" width="92" height="7" rx="3.5" fill="rgba(255,255,255,.1)"/>
    </svg>`;
}

function standingPicture(color) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <ellipse cx="100" cy="222" rx="40" ry="7" fill="rgba(0,0,0,.08)"/>
      <rect x="76" y="46" width="48" height="176" rx="4" fill="${underside(color)}"/>
      <rect x="80" y="50" width="8" height="168" rx="4" fill="rgba(255,255,255,.1)"/>
      <ellipse cx="100" cy="46" rx="24" ry="9" fill="${color.hex}"/>
      <ellipse cx="100" cy="46" rx="15" ry="5.5" fill="none" stroke="${underside(color)}" stroke-width="2"/>
      <ellipse cx="100" cy="46" rx="6" ry="2.2" fill="rgba(0,0,0,.4)"/>
    </svg>`;
}

function layersPicture(color) {
  const id = `grain-${++patternCount}`;
  const grain = color.matte
    ? `<defs><pattern id="${id}" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="rgba(255,255,255,.14)"/></pattern></defs>
       <path d="M28 92H172L192 160H8Z" fill="url(#${id})"/>`
    : "";
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <path d="M28 92H172L192 160H8Z" fill="${color.hex}"/>
      ${grain}
      <rect x="8" y="160" width="184" height="7" fill="${color.hex}"/>
      <rect x="8" y="160" width="184" height="7" fill="rgba(0,0,0,.2)"/>
      <rect x="8" y="167" width="184" height="9" fill="${underside(color)}"/>
      <path d="M196 160V176M193 160H199M193 176H199" stroke="#5f5c52"/>
      <text x="100" y="204" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">0,4 cm · PU + Naturkautschuk</text>
    </svg>`;
}

const scenePicture = (color, pose, wall, floor) => sceneSvg({ pose, wall, floor, mat: color.hex });

// Wide pictures for the info rows (840×515 on the original).
function sizeWidePicture(color) {
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <rect x="40" y="56" width="222" height="80" rx="3" fill="${color.hex}"/>
      <circle cx="66" cy="96" r="7" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="1.2"/>
      <g stroke="#5f5c52" fill="none">
        <path d="M276 56V136M272 56H280M272 136H280"/>
        <path d="M40 152H262M40 148V156M262 148V156"/>
      </g>
      <g font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">
        <text x="286" y="100">66 cm</text>
        <text x="151" y="172" text-anchor="middle">183 cm</text>
      </g>
    </svg>`;
}

function layersWidePicture(color) {
  const id = `grain-${++patternCount}`;
  const grain = color.matte
    ? `<defs><pattern id="${id}" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="rgba(255,255,255,.14)"/></pattern></defs>
       <path d="M50 56H250L286 128H14Z" fill="url(#${id})"/>`
    : "";
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <path d="M50 56H250L286 128H14Z" fill="${color.hex}"/>
      ${grain}
      <rect x="14" y="128" width="272" height="8" fill="${color.hex}"/>
      <rect x="14" y="128" width="272" height="8" fill="rgba(0,0,0,.2)"/>
      <rect x="14" y="136" width="272" height="12" fill="${underside(color)}"/>
      <path d="M296 128V148M292 128H300M292 148H300" stroke="#5f5c52"/>
      <text x="150" y="176" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">PU-Oberfläche · Naturkautschuk · 4 mm</text>
    </svg>`;
}

// A wide crop of a drawn scene (the scene backdrop reaches past its frame).
const wideScene = (color, pose, wall, floor) => sceneSvg({ pose, wall, floor, mat: color.hex }, "-40 -2 180 110");

const featurePictures = {
  grip: { label: "Figur im herabschauenden Hund auf der Matte", draw: (color) => wideScene(color, "dog", "#e4ded5", "#b49a7e") },
  size: { label: "Matte von oben, 183 × 66 cm", draw: sizeWidePicture },
  layers: { label: "Schichtaufbau: PU-Oberfläche und Naturkautschuk, 4 mm", draw: layersWidePicture },
  styles: { label: "Figur im Baum auf der Matte", draw: (color) => wideScene(color, "tree", "#dcdcd2", "#9c8a74") },
};

const pictures = [
  { label: "halb aufgerollt", draw: rolledPicture },
  { label: "von oben", draw: topPicture },
  { label: "aufgerollt", draw: standingPicture },
  { label: "Materialaufbau", draw: layersPicture },
  { label: "beim Üben im Ausfallschritt", draw: (color) => scenePicture(color, "lunge", "#e4ded5", "#b49a7e") },
  { label: "beim Üben im Krieger", draw: (color) => scenePicture(color, "warrior", "#dcdcd2", "#9c8a74") },
];

// ---------- Small line icons for the buy box ----------
const buyboxIcons = {
  truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  thumb: '<path d="M7 11v9H4v-9zM7 11l4-7c1.5 0 2.5 1 2 3l-1 3h6c1 0 2 1 1.7 2l-1.5 6c-.3 1-1 2-2.2 2H7"/>',
  star: '<path d="M12 3.5l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.4l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z"/>',
  invoice: '<path d="M6 3h9l3 3v15H6z"/><path d="M9 9h6M9 13h6M9 17h4"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
};

const buyboxUsps = [
  ["truck", "Kostenloser Versand ab 69€"],
  ["thumb", "Von Yogalehrer:innen empfohlen"],
  ["star", "+ 520.000 zufriedene Kund:innen"],
  ["invoice", "Kauf auf Rechnung"],
  ["heart", "Designed with love in Vienna"],
];

// ---------- Page markup ----------
function galleryItems(product, color) {
  return pictures.map((picture) => `
          <div class="gallery__item" role="img" aria-label="${product.name} in ${color.name}, ${picture.label}">${picture.draw(color)}</div>`).join("");
}

function galleryThumbs(color, current = 0) {
  return pictures.map((picture, i) => `
          <button class="gallery__thumb" data-index="${i}" aria-label="Bild ${i + 1} von ${pictures.length} zeigen"${i === current ? ' aria-current="true"' : ""}>${picture.draw(color)}</button>`).join("");
}

function productMarkup(product) {
  const color = product.colors[0];

  const swatches = product.colors.map((c, i) => `
              <label class="color-swatch">
                <input type="radio" name="color" value="${i}" class="visually-hidden"${i === 0 ? " checked" : ""}>
                <span class="color-swatch__thumb">${rolledPicture(c)}</span>
                <span class="visually-hidden">${c.name}</span>
              </label>`).join("");

  const usps = buyboxUsps.map(([icon, text]) => `
            <li><svg class="buybox__usp-icon" viewBox="0 0 24 24" aria-hidden="true">${buyboxIcons[icon]}</svg>${text}</li>`).join("");

  const accordion = product.accordion.map(([title, body]) => `
          <details class="accordion__item">
            <summary class="accordion__summary">${title}<svg class="accordion__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path class="accordion__icon-v" d="M12 5v14"/></svg></summary>
            <div class="accordion__content">${body}</div>
          </details>`).join("");

  const scales = product.ratingScales.map(([label, value]) => `
            <li class="rating-scale">
              <div class="rating-scale__row"><span>${label}</span><span>${value.toFixed(2)} / 5.00</span></div>
              <div class="rating-scale__bar"><span style="width: ${(value / 5) * 100}%"></span></div>
            </li>`).join("");

  return `
    <div class="container product__main">
      <div class="gallery">
        <span class="gallery__badge"${color.matte ? "" : " hidden"}>Matte Oberfläche</span>
        <div class="gallery__track" tabindex="0" aria-label="Produktbilder">${galleryItems(product, color)}
        </div>
        <div class="gallery__thumbs">${galleryThumbs(color)}
        </div>
      </div>

      <div class="buybox">
        <h1 class="buybox__title">${product.name}</h1>
        <p class="buybox__subtitle">${product.subtitle}</p>
        <a href="#bewertungen" class="buybox__rating">${starRating(product.rating)}<span>(${product.reviewCount})</span></a>
        <p class="buybox__price">
          <span class="buybox__amount">${formatPrice(product.price)}</span>
          <span class="buybox__tax">inkl. MwSt. zzgl. <a href="#">Versandkosten</a></span>
        </p>

        <fieldset class="color-picker">
          <legend class="color-picker__legend"><strong>Farbe:</strong> <span class="color-picker__value">${color.name}</span></legend>
          <div class="color-picker__options">${swatches}
          </div>
        </fieldset>

        <button class="btn btn--primary btn--block buybox__cart" type="button">In den Warenkorb</button>
        <p class="buybox__stock">Auf Lager: In 1-3 Tagen bei dir</p>
        <p class="buybox__added" role="status"></p>
        <div class="buybox__payments" role="img" aria-label="Zahlungsarten (neutrale Platzhalter-Icons)">${PAYMENT_ICONS}
        </div>
        <ul class="buybox__usps">${usps}
        </ul>
      </div>
    </div>

    <div class="container product__more">
      <div class="accordion">${accordion}
      </div>

      <div class="rating-summary">
        <p class="rating-summary__head">${starRating(product.rating)}<span>(${product.reviewCount})</span></p>
        <ul class="rating-scales">${scales}
        </ul>
        <a href="#bewertungen" class="btn btn--secondary btn--block">Bewertungen anschauen</a>
      </div>
    </div>

    <section class="container product-features" aria-label="Mehr über die ${product.name}">${featureRows(product, color)}
    </section>
${reviewsMarkup(product)}
    <section class="section related" aria-labelledby="related-title">
      <div class="container">
        <header class="section-header">
          <h2 class="section-header__title" id="related-title">Verwandte Produkte</h2>
        </header>
        <div class="product-grid">${product.related.map(productCard).join("")}
        </div>
      </div>
    </section>`;
}

function featureRows(product, color) {
  return product.features.map((feature, i) => {
    const picture = featurePictures[feature.picture];
    return `
      <div class="feature${i % 2 ? " feature--reverse" : ""}">
        <div class="feature__text">
          <h2 class="feature__title">${feature.title}</h2>
          <p>${feature.text}</p>
        </div>
        <div class="feature__media" role="img" aria-label="${picture.label}" data-picture="${feature.picture}">${picture.draw(color)}</div>
      </div>`;
  }).join("");
}

// ---------- Reviews ----------
const REVIEWS_PER_PAGE = 5;

const reviewSorters = {
  neueste: (a, b) => a.days - b.days,
  beste: (a, b) => b.stars - a.stars || a.days - b.days,
  schlechteste: (a, b) => a.stars - b.stars || a.days - b.days,
};

function ago(days) {
  if (days === 1) return "vor einem Tag";
  if (days < 7) return `vor ${days} Tagen`;
  if (days < 14) return "vor einer Woche";
  return `vor ${Math.floor(days / 7)} Wochen`;
}

function reviewItem(product, review) {
  return `
          <li class="review-item">
            <div class="review-item__meta">
              <p class="review-item__badge"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7"/><path d="M5 8.2l2 2 4-4.4"/></svg>Verifizierter Kauf</p>
              <p class="review-item__name">${review.name}</p>
              ${review.place ? `<p class="review-item__place">${review.place}</p>` : ""}
            </div>
            <div class="review-item__body">
              ${starRating(review.stars, `${review.stars} von 5 Sternen`)}
              <p class="review-item__product">${product.name} ${review.color}</p>
              <p class="review-item__text">${review.text}</p>
              <p class="review-item__date">${ago(review.days)}</p>
            </div>
          </li>`;
}

function reviewsMarkup(product) {
  return `
    <section class="reviews-section" id="bewertungen" aria-labelledby="reviews-title">
      <div class="container">
        <div class="reviews__summary">
          <h2 class="visually-hidden" id="reviews-title">Bewertungen</h2>
          <p class="reviews__score"><span class="reviews__average">${product.rating.toFixed(2)}</span>${starRating(product.rating)}</p>
          <p class="reviews__basis">Basierend auf ${product.reviewCount} Bewertungen</p>
          <p class="reviews__note">Beispielbewertungen für dieses Studentenprojekt – keine echten Kund:innen.</p>
        </div>
        <div class="reviews__bar">
          <label class="reviews__sort">
            <span>Sortieren</span>
            <select>
              <option value="neueste">Neueste zuerst</option>
              <option value="beste">Beste Bewertung</option>
              <option value="schlechteste">Niedrigste Bewertung</option>
            </select>
            <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>
          </label>
          <span class="reviews__tab">Produktbewertungen</span>
        </div>
        <ol class="reviews__list"></ol>
        <nav class="pagination" aria-label="Bewertungsseiten"></nav>
      </div>
    </section>`;
}

function setupReviews(product) {
  const section = productRoot.querySelector("#bewertungen");
  const list = section.querySelector(".reviews__list");
  const pager = section.querySelector(".pagination");
  const sortSelect = section.querySelector(".reviews__sort select");
  let page = 1;

  function render() {
    const sorted = [...product.reviews].sort(reviewSorters[sortSelect.value]);
    const pages = Math.ceil(sorted.length / REVIEWS_PER_PAGE);
    const start = (page - 1) * REVIEWS_PER_PAGE;
    list.innerHTML = sorted.slice(start, start + REVIEWS_PER_PAGE).map((review) => reviewItem(product, review)).join("");
    pager.innerHTML = Array.from({ length: pages }, (_, i) => `
          <button class="pagination__page" data-page="${i + 1}" aria-label="Seite ${i + 1}"${i + 1 === page ? ' aria-current="page"' : ""}>${i + 1}</button>`).join("");
  }

  sortSelect.addEventListener("change", () => {
    page = 1;
    render();
  });

  pager.addEventListener("click", (e) => {
    const button = e.target.closest("[data-page]");
    if (!button) return;
    page = Number(button.dataset.page);
    render();
    // Bring the new page into view and keep keyboard focus on the pager.
    section.scrollIntoView({ block: "start" });
    pager.querySelector('[aria-current="page"]').focus({ preventScroll: true });
  });

  render();
}

function missingMarkup() {
  return `
    <div class="container product-missing">
      <h1 class="buybox__title">Produkt nicht gefunden</h1>
      <p>Diese Produktseite gibt es in unserem Studentenprojekt (noch) nicht.</p>
      <a href="index.html" class="btn btn--primary">Zur Startseite</a>
    </div>`;
}

// ---------- Render + behaviour ----------
const slug = new URLSearchParams(location.search).get("p") || "yogamatte-pure";
const product = productDetails[slug];
const productRoot = document.getElementById("product");

if (!product) {
  productRoot.innerHTML = missingMarkup();
} else {
  document.title = `${product.name} – LotusCraft Student Rebuild`;
  productRoot.innerHTML = productMarkup(product);
  setupReviews(product);

  const track = productRoot.querySelector(".gallery__track");
  const thumbs = productRoot.querySelector(".gallery__thumbs");
  const badge = productRoot.querySelector(".gallery__badge");
  const colorValue = productRoot.querySelector(".color-picker__value");
  let color = product.colors[0];

  // On tablets and phones the gallery is a swipe slider; thumbnails jump to
  // a picture and follow along while swiping. One step = picture + gap.
  const step = () => track.firstElementChild.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
  const currentPicture = () => Math.round(track.scrollLeft / step());

  function markThumb(index) {
    thumbs.querySelectorAll(".gallery__thumb").forEach((thumb, i) => {
      if (i === index) thumb.setAttribute("aria-current", "true");
      else thumb.removeAttribute("aria-current");
    });
  }

  thumbs.addEventListener("click", (e) => {
    const thumb = e.target.closest(".gallery__thumb");
    if (!thumb) return;
    const index = Number(thumb.dataset.index);
    track.scrollTo({ left: index * step(), behavior: "smooth" });
    markThumb(index);
  });

  track.addEventListener("scroll", () => markThumb(currentPicture()), { passive: true });

  // Picking a colour redraws every picture in that colour.
  productRoot.querySelector(".color-picker").addEventListener("change", (e) => {
    color = product.colors[Number(e.target.value)];
    colorValue.textContent = color.name;
    badge.hidden = !color.matte;
    track.innerHTML = galleryItems(product, color);
    thumbs.innerHTML = galleryThumbs(color, currentPicture());
    productRoot.querySelectorAll(".feature__media").forEach((media) => {
      media.innerHTML = featurePictures[media.dataset.picture].draw(color);
    });
  });

  // A link can preselect a colour, e.g. from the category page (&farbe=Light Taupe).
  const wanted = product.colors.findIndex((c) => c.name === new URLSearchParams(location.search).get("farbe"));
  if (wanted > 0) productRoot.querySelectorAll(".color-picker input")[wanted].click();

  // Demo cart: counts up the badge in the header, nothing is ordered.
  const cartButton = productRoot.querySelector(".buybox__cart");
  const added = productRoot.querySelector(".buybox__added");

  cartButton.addEventListener("click", () => {
    addToCart(1);
    added.textContent = `${product.name} (${color.name}) liegt im Warenkorb – nur eine Demo, es wird nichts bestellt.`;
    cartButton.textContent = "Hinzugefügt ✓";
    setTimeout(() => (cartButton.textContent = "In den Warenkorb"), 2000);
  });
}
