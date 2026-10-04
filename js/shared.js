// Shared data and helpers, used by every page.
// Loaded first; layout.js and the page scripts build on it.

// Placeholder colours for materials that appear in several products.
const CORK = "#c7a27a";
const COTTON = "#ebe5d6";
// The material most products are made of (also a value of the "Material" filter).
const ORGANIC_COTTON = "Bio-Baumwolle (kbA)";

// Star outline shared by ratings and reviews.
const STAR_PATH = "M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.7l6-.7z";

// Five stars filled up to `rating`, so 4.6 shows a partly filled last star.
function starRating(rating, label = `${String(rating).replace(".", ",")} von 5 Sternen`) {
  const row = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="${STAR_PATH}"/></svg>`.repeat(5);
  return `
    <span class="star-rating" role="img" aria-label="${label}">
      <span class="star-rating__row">${row}</span>
      <span class="star-rating__row star-rating__row--fill" style="width: ${(rating / 5) * 100}%">${row}</span>
    </span>`;
}

// Neutral payment icons (no brand logos), used in the footer and on product pages.
const PAYMENT_ICONS = `
  <svg viewBox="0 0 30 24" aria-hidden="true"><rect x=".5" y=".5" width="29" height="23" rx="3.5"/><path d="M7 9h16M7 15h6"/></svg>
  <svg viewBox="0 0 30 24" aria-hidden="true"><rect x=".5" y=".5" width="29" height="23" rx="3.5"/><path d="M8 10l7-4 7 4zM10 11v6M15 11v6M20 11v6M8 18h14"/></svg>
  <svg viewBox="0 0 30 24" aria-hidden="true"><rect x=".5" y=".5" width="29" height="23" rx="3.5"/><path d="M8 8h13a1 1 0 0 1 1 1v8H8zM8 8l10-2v2M18 12.5h4"/></svg>
  <svg viewBox="0 0 30 24" aria-hidden="true"><rect x=".5" y=".5" width="29" height="23" rx="3.5"/><rect x="11" y="5" width="8" height="14" rx="1.5"/><path d="M14 16.5h2"/></svg>
  <svg viewBox="0 0 30 24" aria-hidden="true"><rect x=".5" y=".5" width="29" height="23" rx="3.5"/><path d="M10 5h7l3 3v11H10zM13 11h4M13 14h4"/></svg>`;

// ---------- Bestseller data ----------
// Product names and prices mirror the original shop (as of Oct 2026).
// `shape` picks a placeholder illustration instead of the original photo.
const bestsellers = {
  yoga: [
    { name: "Yogablock Kork 2er Set", slug: "yogablock-aus-kork-alle", price: 29.95, shape: "block", tint: CORK },
    { name: "Yogamatte PURE", slug: "yogamatte-pure", price: 79.95, shape: "mat", tint: "#7a2a3a", badge: "Matte Oberfläche" },
    { name: "Yogamatte ARISE", slug: "yogamatte-arise", price: 89.95, shape: "mat", tint: "#3f5550" },
    { name: "Yogamatte MUDRA", slug: "yogamatte-mudra-studio", price: 39.95, shape: "mat", tint: "#55695f" },
  ],
  meditation: [
    { name: "Meditationskissen Lotus (H: 15cm)", slug: "meditationskissen-lotus-h-15cm", price: 39.95, shape: "lotusCushion15", tint: "#8b7d6b" },
    { name: "Meditationsmatte Zabuton", slug: "meditationsmatte-zabuton", price: 59.95, shape: "zabuton", tint: "#6f6a62" },
    { name: "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", slug: "meditationskissen-lotus-h-15cm-ohne-bestickung", price: 34.95, shape: "plainCushion", tint: "#a39a8c" },
    { name: "Meditationskissen Lotus KLEIN (H: 10 cm)", slug: "meditationskissen-lotus-klein-h-10-cm", price: 37.95, shape: "lotusCushion10", tint: "#5d6b73" },
  ],
  bekleidung: [
    { name: "BECCA Leggings", slug: "becca-leggings", price: 55.95, compareAt: 69.95, shape: "leggings", tint: "#5f6062" },
    { name: "MIKO Bralette", slug: "miko-bralette", price: 31.49, compareAt: 44.95, shape: "bralette", tint: "#ebe7e0" },
    { name: "NIA Womens Sweater", slug: "nia-womens-sweater", price: 62.99, compareAt: 89.95, shape: "sweater", tint: "#56595a" },
    { name: "FEND Mens Sweater", slug: "fend-mens-sweater", price: 44.99, compareAt: 89.95, shape: "sweater", tint: "#9aa6aa" },
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

// Round meditation cushions: `height` is the side in px (10 / 15 / 20 cm);
// embroidered ones get a small lotus on the front.
const roundCushion = (height, embroidered) => (c) => {
  const top = 112 - height;
  return `<ellipse cx="90" cy="122" rx="62" ry="14" fill="rgba(0,0,0,.12)"/>
          <path d="M28 ${top}v${height}c0 10 28 18 62 18s62-8 62-18v-${height}z" fill="${c}"/>
          <ellipse cx="90" cy="${top}" rx="62" ry="20" fill="${c}"/>
          <ellipse cx="90" cy="${top}" rx="62" ry="20" fill="rgba(255,255,255,.12)"/>${embroidered ? `
          <path d="M90 ${top + height + 10}c-3-3-3-7 0-10 3 3 3 7 0 10zm0 0c-4-1-7 1-8 3 3 1 6 0 8-3zm0 0c4-1 7 1 8 3-3 1-6 0-8-3z" fill="rgba(255,255,255,.6)"/>` : ""}`;
};

// Empty cushion covers lying flat: the side band grows with the cushion's
// height. Like on the original, the embroidered covers close with a
// drawstring, the others with a zip.
const roundCover = (band, embroidered) => (c) => {
  const top = 98 - band / 2;
  const bottom = top + band + 24;
  const knot = bottom - band / 2;
  const zipY = top + band / 2 + 16.5;
  const closure = embroidered
    ? `<path d="M90 ${knot}c-5-4-12-4-12 0s7 4 12 0zm0 0c5-4 12-4 12 0s-7 4-12 0zm0 0l-5 ${band / 2 + 7}m5-${band / 2 + 7}l4 ${band / 2 + 7}" fill="none" stroke="rgba(0,0,0,.32)" stroke-width="1.6" stroke-linecap="round"/>`
    : `<path d="M42 ${zipY}A66 24 0 0 0 138 ${zipY}" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="2" stroke-dasharray="3 2"/>
          <rect x="135" y="${zipY - 4}" width="6" height="9" rx="1.5" fill="#8b8b8b"/>`;
  return `<ellipse cx="90" cy="${bottom + 2}" rx="60" ry="7" fill="rgba(0,0,0,.08)"/>
          <path d="M24 ${top}v${band}a66 24 0 0 0 132 0v-${band}z" fill="${c}"/>
          <ellipse cx="90" cy="${top}" rx="66" ry="24" fill="${c}"/>
          <ellipse cx="90" cy="${top}" rx="66" ry="24" fill="rgba(255,255,255,.12)"/>${embroidered ? `
          <path d="M90 ${top + 6}c-3-3-3-7 0-10 3 3 3 7 0 10zm0 0c-4-1-7 1-8 3 3 1 6 0 8-3zm0 0c4-1 7 1 8 3-3 1-6 0-8-3z" fill="rgba(255,255,255,.6)"/>` : ""}
          ${closure}`;
};

// Pieces for the set pictures (180×180): a small item on top, the main one below.
const setPiece = {
  towelRoll: (c) => `<rect x="58" y="14" width="64" height="26" rx="13" fill="${c}"/>
                     <rect x="83" y="14" width="14" height="26" fill="#d9c7a7"/>`,
  beltRoll: (c) => `<rect x="62" y="20" width="52" height="16" rx="8" fill="${c}"/>
                    <path d="M74 20v16M86 20v16" stroke="rgba(0,0,0,.12)"/>
                    <circle cx="122" cy="28" r="7" fill="none" stroke="#8b8b8b" stroke-width="2.5"/>`,
  // The travel mat folded flat, its lighter underside showing at the fold.
  travelMat: (c) => `<rect x="36" y="54" width="108" height="76" rx="3" fill="${c}"/>
                     <rect x="33" y="124" width="114" height="16" rx="8" fill="${c}"/>
                     <rect x="33" y="124" width="114" height="16" rx="8" fill="rgba(255,255,255,.3)"/>`,
  neckRoll: (c) => `<rect x="34" y="72" width="112" height="48" rx="24" fill="${c}"/>
                    <path d="M60 72v48" stroke="rgba(0,0,0,.08)"/>
                    <ellipse cx="134" cy="96" rx="11" ry="24" fill="rgba(255,255,255,.2)"/>`,
};

// Outline of the flat clothing drawings, so light colours stay visible.
const GARMENT_LINE = "rgba(0, 0, 0, .12)";

// Simple SVG silhouettes so each card reads as the right kind of product.
// `c` is the product's main colour, `a` an optional accent (e.g. the mat bag).
const shapes = {
  mat: (c) => `<rect x="20" y="70" width="140" height="38" rx="6" fill="${c}" transform="rotate(-18 90 89)"/>
               <ellipse cx="38" cy="112" rx="14" ry="19" fill="${c}" transform="rotate(-18 90 89)"/>
               <ellipse cx="38" cy="112" rx="6" ry="9" fill="rgba(0,0,0,.25)" transform="rotate(-18 90 89)"/>`,
  block: (c) => `<rect x="38" y="62" width="62" height="88" rx="4" fill="${c}"/>
                 <rect x="78" y="48" width="62" height="88" rx="4" fill="${c}" opacity=".85"/>
                 <rect x="78" y="80" width="62" height="26" fill="rgba(255,255,255,.55)"/>`,
  lotusCushion10: roundCushion(18, true),
  lotusCushion15: roundCushion(26, true),
  lotusCushion20: roundCushion(34, true),
  plainCushion: roundCushion(26, false),
  zafu: (c) => `<ellipse cx="90" cy="124" rx="56" ry="12" fill="rgba(0,0,0,.12)"/>
                <path d="M34 72v40c0 10 25 16 56 16s56-6 56-16V72z" fill="${c}"/>
                <ellipse cx="90" cy="72" rx="56" ry="18" fill="${c}"/>
                <ellipse cx="90" cy="72" rx="56" ry="18" fill="rgba(255,255,255,.12)"/>
                <path d="M48 88v28M62 90v32M76 91v35M90 91v37M104 91v35M118 90v32M132 88v28" stroke="rgba(0,0,0,.12)"/>`,
  crescent: (c) => `<ellipse cx="90" cy="124" rx="64" ry="9" fill="rgba(0,0,0,.12)"/>
                    <path d="M24 116c2-40 30-66 66-66s64 26 66 66c-16-16-38-24-66-24s-50 8-66 24z" fill="${c}"/>
                    <path d="M40 98c14-10 30-14 50-14s36 4 50 14" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="2"/>`,
  zabuton: (c) => `<rect x="22" y="88" width="136" height="30" rx="8" fill="${c}"/>
                   <rect x="22" y="80" width="136" height="16" rx="8" fill="${c}" opacity=".75"/>`,
  zabutonThick: (c) => `<rect x="22" y="76" width="136" height="42" rx="10" fill="${c}"/>
                        <rect x="22" y="68" width="136" height="16" rx="8" fill="${c}" opacity=".75"/>`,
  // Covers on their own (see roundCover); the zafu's has pleats on top.
  lotusCover10: roundCover(8, true),
  lotusCover15: roundCover(11, true),
  lotusCover20: roundCover(14, true),
  plainCover: roundCover(11, false),
  zafuCover: (c) => `${roundCover(11, false)(c)}
                     <path d="${Array.from({ length: 12 }, (_, i) => {
                       const angle = (i / 12) * Math.PI * 2;
                       const point = (r) => `${(90 + 66 * r * Math.cos(angle)).toFixed(1)} ${(92.5 + 24 * r * Math.sin(angle)).toFixed(1)}`;
                       return `M${point(0.45)}L${point(0.85)}`;
                     }).join("")}" stroke="rgba(0,0,0,.12)" stroke-width="2"/>`,
  crescentCover: (c) => `<ellipse cx="90" cy="126" rx="62" ry="6" fill="rgba(0,0,0,.08)"/>
                         <path d="M22 122c2-28 30-46 68-46s66 18 68 46c-16-12-40-18-68-18s-52 6-68 18z" fill="${c}"/>
                         <path d="M38 106c12-10 30-15 52-15s40 5 52 15" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="2"/>
                         <path d="M34 110c15-8 36-12 56-12s41 4 56 12" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="2" stroke-dasharray="3 2"/>
                         <rect x="143" y="106" width="6" height="9" rx="1.5" fill="#8b8b8b" transform="rotate(-25 146 110)"/>`,
  zabutonCover: (c) => `<ellipse cx="90" cy="120" rx="70" ry="5" fill="rgba(0,0,0,.06)"/>
                        <path d="M34 70h112l16 34H18z" fill="${c}"/>
                        <path d="M34 70h112l16 34H18z" fill="rgba(255,255,255,.12)"/>
                        <path d="M18 104h144v8a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4z" fill="${c}"/>
                        <path d="M26 110h124" stroke="rgba(0,0,0,.28)" stroke-width="2" stroke-dasharray="3 2"/>
                        <rect x="150" y="105.5" width="6" height="9" rx="1.5" fill="#8b8b8b"/>`,
  // Kneeling bench: a sloping beech seat with a pad in the fabric colour.
  bench: (c) => `<ellipse cx="90" cy="138" rx="60" ry="5" fill="rgba(0,0,0,.08)"/>
                 <path d="M42 98h11l-1 38h-9zM128 90h11l-1 46h-9z" fill="#c9a77e"/>
                 <g transform="rotate(-5 90 96)">
                   <rect x="26" y="88" width="128" height="9" rx="2" fill="#dcc09a"/>
                   <rect x="24" y="72" width="132" height="17" rx="8" fill="${c}"/>
                   <rect x="24" y="72" width="132" height="6" rx="3" fill="rgba(255,255,255,.14)"/>
                 </g>`,
  // Clothing, laid out flat
  leggings: (c) => `<path d="M62 30h56l6 130h-22l-12-96-12 96H56z" fill="${c}" stroke="${GARMENT_LINE}"/>`,
  top: (c) => `<path d="M68 40c4-4 8-6 12-6 3 6 17 6 20 0 4 0 8 2 12 6l12 14-10 8v74H66V62l-10-8z" fill="${c}" stroke="${GARMENT_LINE}"/>`,
  sweater: (c) => `<path d="M58 38l32-8 32 8 22 18 10 86-16 2-12-70v80H54V74l-12 70-16-2 10-86z" fill="${c}" stroke="${GARMENT_LINE}"/>`,
  tee: (c) => `<path d="M66 40l14-6c3 6 17 6 20 0l14 6 22 20-11 13-11-8v73H66V65l-11 8-11-13z" fill="${c}" stroke="${GARMENT_LINE}"/>`,
  tankTop: (c) => `<path d="M70 36h9c2 13 20 13 22 0h9c0 12 4 20 10 26v78H60V62c6-6 10-14 10-26z" fill="${c}" stroke="${GARMENT_LINE}"/>`,
  tankTee: (c) => `<path d="M66 36h12c3 9 21 9 24 0h12l4 20c4 4 8 6 10 8v74H52V64c2-2 6-4 10-8z" fill="${c}" stroke="${GARMENT_LINE}"/>`,
  bralette: (c) => `<path d="M70 72l8-32M110 72l-8-32" stroke="${GARMENT_LINE}" stroke-width="6" stroke-linecap="round"/>
                    <path d="M70 72l8-32M110 72l-8-32" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
                    <path d="M58 74c10-8 22-8 32 2 10-10 22-10 32-2l-2 26c-20 6-40 6-60 0z" fill="${c}" stroke="${GARMENT_LINE}"/>`,
  wrapTop: (c) => `<path d="M66 40l14-6 10 16 10-16 14 6 26 66-12 6-14-40v70H66V72l-14 40-12-6z" fill="${c}" stroke="${GARMENT_LINE}"/>
                   <path d="M80 34l26 58 12 10" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="1.5"/>`,
  culotte: (c) => `<path d="M62 38h56l2 12 18 74H96l-6-52-6 52H44l18-74z" fill="${c}" stroke="${GARMENT_LINE}"/>
                   <path d="M62 46h56" stroke="rgba(0,0,0,.14)"/>`,
  pants: (c) => `<path d="M64 34h52l4 108H98l-8-76-8 76H60z" fill="${c}" stroke="${GARMENT_LINE}"/>
                 <path d="M64 42h52" stroke="rgba(0,0,0,.14)"/>`,
  overall: (c) => `<path d="M72 30v26M108 30v26" stroke="${GARMENT_LINE}" stroke-width="7" stroke-linecap="round"/>
                   <path d="M72 30v26M108 30v26" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
                   <path d="M70 52h40l4 16 6 76H98l-8-60-8 60H60l6-76z" fill="${c}" stroke="${GARMENT_LINE}"/>`,
  bag: (c) => `<path d="M42 84C58 38 122 38 138 84" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
               <rect x="22" y="80" width="136" height="38" rx="19" fill="${c}"/>
               <ellipse cx="141" cy="99" rx="9" ry="19" fill="rgba(0,0,0,.12)"/>
               <rect x="70" y="80" width="6" height="38" fill="rgba(0,0,0,.08)"/>`,
  // A slim drawstring sack (NANDI), gathered at one end, with its cord.
  sack: (c) => `<ellipse cx="90" cy="124" rx="62" ry="5" fill="rgba(0,0,0,.06)"/>
                <path d="M48 82h86l16 10v16l-16 10H48a18 18 0 0 1 0-36z" fill="${c}" stroke="rgba(0,0,0,.1)"/>
                <path d="M134 82v36M138 86l10 6M138 114l10-6" stroke="rgba(0,0,0,.12)" stroke-width="1.5"/>
                <path d="M150 100c14-4 10-46-40-46S44 62 38 86" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
                <path d="M150 100c14-4 10-46-40-46S44 62 38 86" fill="none" stroke="rgba(0,0,0,.15)"/>`,
  strap: (c) => `<path d="M44 124C40 52 140 52 136 124" fill="none" stroke="rgba(0,0,0,.08)" stroke-width="13" stroke-linecap="round"/>
                 <path d="M44 124C40 52 140 52 136 124" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>
                 <rect x="33" y="118" width="22" height="16" rx="3" fill="none" stroke="#8b8b8b" stroke-width="3"/>
                 <rect x="125" y="118" width="22" height="16" rx="3" fill="none" stroke="#8b8b8b" stroke-width="3"/>`,
  towel: (c) => `<rect x="32" y="56" width="116" height="78" rx="12" fill="${c}"/>
                 <path d="M32 82h116M32 108h116" stroke="rgba(0,0,0,.12)" stroke-width="2"/>
                 <path d="M46 134v7M60 134v7M74 134v7M88 134v7M102 134v7M116 134v7M130 134v7" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>`,
  // Bolsters and rolls, lying on their side
  roll: (c) => `<ellipse cx="90" cy="126" rx="62" ry="6" fill="rgba(0,0,0,.06)"/>
                <rect x="24" y="64" width="132" height="58" rx="29" fill="${c}"/>
                <path d="M54 64v58" stroke="rgba(0,0,0,.08)"/>
                <ellipse cx="141" cy="93" rx="15" ry="29" fill="rgba(255,255,255,.18)"/>`,
  bolster: (c) => `<ellipse cx="90" cy="124" rx="66" ry="6" fill="rgba(0,0,0,.06)"/>
                   <rect x="20" y="74" width="140" height="48" rx="18" fill="${c}"/>
                   <rect x="20" y="74" width="140" height="14" rx="7" fill="rgba(255,255,255,.16)"/>
                   <path d="M44 74v48M136 74v48" stroke="rgba(0,0,0,.08)"/>`,
  bolsterS: (c) => `<ellipse cx="90" cy="124" rx="54" ry="6" fill="rgba(0,0,0,.06)"/>
                    <rect x="34" y="80" width="112" height="42" rx="16" fill="${c}"/>
                    <rect x="34" y="80" width="112" height="12" rx="6" fill="rgba(255,255,255,.16)"/>
                    <path d="M54 80v42M126 80v42" stroke="rgba(0,0,0,.08)"/>`,
  neckRoll: (c) => `<ellipse cx="90" cy="120" rx="46" ry="5" fill="rgba(0,0,0,.06)"/>
                    <rect x="42" y="84" width="96" height="34" rx="17" fill="${c}"/>
                    <ellipse cx="129" cy="101" rx="9" ry="17" fill="rgba(255,255,255,.2)"/>`,
  // A cover, folded flat, with its zip
  rollCover: (c) => `<rect x="30" y="56" width="120" height="72" rx="6" fill="${c}"/>
                     <path d="M30 116h120" stroke="rgba(0,0,0,.25)" stroke-width="2" stroke-dasharray="3 2"/>
                     <rect x="138" y="111" width="8" height="10" rx="2" fill="#8b8b8b"/>
                     <path d="M30 80h120" stroke="rgba(0,0,0,.08)"/>`,
  mala: (c) => `${Array.from({ length: 27 }, (_, i) => {
                  const angle = (i / 27) * Math.PI * 2 - Math.PI / 2;
                  return `<circle cx="${(90 + 44 * Math.cos(angle)).toFixed(1)}" cy="${(78 + 44 * Math.sin(angle)).toFixed(1)}" r="5" fill="${c}"/>`;
                }).join("")}
                <circle cx="90" cy="128" r="7" fill="${c}"/>
                <path d="M84 134h12l5 26H79z" fill="${c}"/>`,
  husks: (c) => `<path d="M52 44h76l8 108H44z" fill="${c}"/>
                 <path d="M52 44h76v12H52z" fill="rgba(0,0,0,.08)"/>
                 <rect x="66" y="84" width="48" height="30" rx="3" fill="rgba(255,255,255,.6)"/>
                 <path d="M74 94h32M74 102h22" stroke="rgba(0,0,0,.25)" stroke-width="2.5" stroke-linecap="round"/>`,
  blanket: (c) => `<rect x="28" y="56" width="124" height="78" rx="5" fill="${c}"/>
                   <path d="M28 82h124M28 108h124" stroke="rgba(0,0,0,.14)" stroke-width="2"/>
                   <path d="M28 70h124M28 96h124M28 122h124" stroke="rgba(255,255,255,.3)" stroke-width="3"/>
                   <path d="M38 134v8M50 134v8M62 134v8M74 134v8M86 134v8M98 134v8M110 134v8M122 134v8M134 134v8M146 134v8" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>`,
  singleBlock: (c) => `<rect x="56" y="50" width="68" height="96" rx="4" fill="${c}"/>
                       <rect x="56" y="50" width="68" height="14" rx="4" fill="rgba(255,255,255,.35)"/>`,
  sticker: (c) => `<circle cx="90" cy="90" r="48" fill="${c}" stroke="rgba(0,0,0,.12)"/>
                   <path d="M90 62c-8 10-8 21 0 30 8-9 8-20 0-30zM90 92c-12-3-21 1-25 9 10 3 19 0 25-9zM90 92c12-3 21 1 25 9-10 3-19 0-25-9z" fill="rgba(0,0,0,.3)"/>
                   <path d="M70 114h40M77 122h26" stroke="rgba(0,0,0,.3)" stroke-width="3" stroke-linecap="round"/>`,
  eyePillow: (c) => `<path d="M28 96c0-17 24-26 62-26s62 9 62 26-24 26-62 26-62-9-62-26z" fill="${c}"/>
                     <path d="M40 92c4-9 24-14 50-14s46 5 50 14" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="2"/>`,
  sprayRefill: (c) => `<rect x="58" y="56" width="64" height="102" rx="12" fill="${c}" stroke="rgba(0,0,0,.12)"/>
                       <rect x="76" y="38" width="28" height="20" rx="3" fill="#5b5b5b"/>
                       <rect x="68" y="88" width="44" height="44" rx="3" fill="rgba(255,255,255,.7)"/>`,
  spray: (c) => `<rect x="66" y="74" width="48" height="82" rx="10" fill="${c}" stroke="rgba(0,0,0,.12)"/>
                 <rect x="80" y="58" width="20" height="17" rx="2" fill="#8b8b8b"/>
                 <path d="M74 38h30a6 6 0 0 1 6 6v14H74z" fill="#5b5b5b"/>
                 <path d="M74 45H60" stroke="#5b5b5b" stroke-width="5" stroke-linecap="round"/>
                 <rect x="74" y="98" width="32" height="34" rx="3" fill="rgba(255,255,255,.7)"/>`,

  // Gift card with a ribbon and bow
  giftCard: (c) => `<rect x="30" y="56" width="120" height="76" rx="8" fill="${c}"/>
                    <path d="M30 82h120M108 56v76" stroke="rgba(255,255,255,.35)" stroke-width="6"/>
                    <path d="M108 82c-6-12-20-14-20-6 0 6 14 6 20 6zm0 0c6-12 20-14 20-6 0 6-14 6-20 6z" fill="none" stroke="#fff" stroke-width="2"/>
                    <path d="M44 110h30M44 118h20" stroke="rgba(255,255,255,.7)" stroke-width="3" stroke-linecap="round"/>`,

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
  travelTowelSet: (c, a) => `${setPiece.towelRoll(a)}${setPiece.travelMat(c)}`,
  travelBeltSet: (c, a) => `${setPiece.beltRoll(a)}${setPiece.travelMat(c)}`,
  rollTowelSet: (c, a) => `${setPiece.towelRoll(a)}${setPiece.neckRoll(c)}`,
  rollBeltSet: (c, a) => `${setPiece.beltRoll(a)}${setPiece.neckRoll(c)}`,
  bagBeltSet: (c, a) => `${setPiece.beltRoll(a)}
                         <path d="M46 84C60 46 120 46 134 84" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>
                         <rect x="26" y="80" width="128" height="44" rx="22" fill="${c}"/>
                         <ellipse cx="141" cy="102" rx="9" ry="22" fill="rgba(0,0,0,.12)"/>`,
  cleaningSet: (c) => `<rect x="44" y="22" width="104" height="14" rx="7" fill="${c}" stroke="rgba(0,0,0,.08)" transform="rotate(-10 96 29)"/>
                       <circle cx="40" cy="40" r="8" fill="none" stroke="#8b8b8b" stroke-width="2.5"/>
                       <rect x="28" y="72" width="64" height="58" rx="3" fill="${CORK}"/>
                       <rect x="28" y="64" width="64" height="12" rx="3" fill="#d9b994"/>
                       <rect x="110" y="80" width="36" height="54" rx="7" fill="#e6e1d6" stroke="rgba(0,0,0,.12)"/>
                       <rect x="121" y="68" width="14" height="13" rx="2" fill="#8b8b8b"/>
                       <path d="M116 54h22a4 4 0 0 1 4 4v10h-26z" fill="#5b5b5b"/>`,
  bolsterBlanketSet: (c) => `<rect x="22" y="22" width="30" height="36" rx="3" fill="${CORK}"/>
                             <rect x="56" y="22" width="30" height="36" rx="3" fill="${CORK}"/>
                             <rect x="96" y="14" width="60" height="44" rx="4" fill="${COTTON}" stroke="rgba(0,0,0,.08)"/>
                             <rect x="96" y="28" width="60" height="4" fill="#c9a96e"/>
                             <rect x="26" y="78" width="128" height="50" rx="25" fill="${c}"/>
                             <ellipse cx="141" cy="103" rx="10" ry="25" fill="rgba(255,255,255,.18)"/>`,
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

  const tag = product.soldOut
    ? `<span class="product-card__tag">Ausverkauft</span>`
    : discount
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

  // Products with their own page (`slug`) link to it, preselecting the
  // card's colour (`variant`); the rest are placeholders.
  const colorParam = product.variant ? `&farbe=${encodeURIComponent(product.variant)}` : "";
  const href = product.slug ? `produkt.html?p=${product.slug}${colorParam}` : "#";
  const label = product.variant ? `${product.name} in ${product.variant}` : product.name;

  return `
    <a href="${href}" class="product-card">
      <div class="product-card__media${swatches ? " product-card__media--swatches" : ""}">
        <svg viewBox="0 0 180 180" role="img" aria-label="Platzhalter: ${label}">
          ${shapes[product.shape](product.tint, product.accent)}
        </svg>
        ${swatches}
        ${tag}
      </div>
      <h3 class="product-card__title">${product.name}</h3>
      ${product.variant ? `<p class="product-card__variant">${product.variant}</p>` : ""}
      <p class="product-card__price">${price}</p>
    </a>`;
}

// ---------- Category data ----------
// Models, prices, colours, materials and which variant is sold out mirror the
// original "Yogamatten" category (Oct 2026). Every colour gets its own card,
// as on the original. `family` is the colour group used by the colour filter.
const yogaMats = [
  { name: "Yogamatte MUDRA", slug: "yogamatte-mudra-studio", price: 39.95, material: "PVC (Polyvinylchlorid)", variants: [
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
  { name: "Yogamatte Mudra XL", slug: "yogamatte-mudra-studio-xl", price: 44.95, material: null, variants: [
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
  ] },
  { name: "Yogamatte ARISE", slug: "yogamatte-arise", price: 89.95, material: "Naturkautschuk", variants: [
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
    { color: "Graphite", hex: "#4a4b4d", family: "Schwarz" },
    { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot" },
    { color: "Midnight Blue", hex: "#2f3a5c", family: "Blau" },
  ] },
  { name: "Yogamatte ARISE Travel", slug: "yogamatte-arise-travel", price: 59.95, material: "Naturkautschuk", variants: [
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
    { color: "Graphite", hex: "#4a4b4d", family: "Schwarz" },
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
    { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot" },
  ] },
  { name: "Yogamatte ARISE CORK", slug: "yogamatte-arise-cork", price: 99.95, material: "Naturkork", variants: [
    { color: "Align", hex: "#c9a77e", family: "Align" },
    { color: "Lotus", hex: "#b8916a", family: "Braun" },
  ] },
  { name: "Yogamatte MUDRA PRO", slug: "yogamatte-mudra-pro", price: 99.95, material: "Polyester", variants: [
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
    { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
  ] },
  { name: "Yogamatte WOOL aus Schurwolle", slug: "yogamatte-schurwolle", price: 119.95, material: "Schurwolle", variants: [
    { color: null, hex: "#e7e1d6", family: null },
  ] },
];

// The sub-categories, shown as circles above every mat category. `key` is
// the original's collection handle, used in kategorie.html?k=...
const matShortcuts = [
  { label: "Yogamatten für Zuhause", icon: "house", key: "yogamatte-fur-zuhause" },
  { label: "Rutschfeste Yogamatte", icon: "mat", key: "rutschfeste-yogamatte" },
  { label: "Studio Yogamatte", icon: "studio", key: "studio-yogamatte" },
  { label: "Reise Yogamatte", icon: "suitcase", key: "reise-yogamatte" },
];

// Mats by name, in the order of the full category (as on the original).
const matsNamed = (...names) => yogaMats.filter((model) => names.includes(model.name));

const productLink = (slug, text) => `<a href="produkt.html?p=${slug}">${text}</a>`;

// The "Yoga-Sets" page: all set offers, one card each, in the original's
// order. Five of them are on the home page already (`bundles`); the colour
// dots of the others were read from the original's set pictures.
const setNamed = (name) => Object.values(bundles).flat().find((set) => set.name === name);
const yogaSets = [
  setNamed("Yogamatte ARISE Set"),
  { name: "Practice Anywhere Set", price: 80.91, compareAt: 89.9, bundle: true, shape: "travelTowelSet", tint: "#647892", accent: "#56697c", swatches: ["#505256", "#607c97", "#586666"] },
  { name: "Restore Comfort Set", price: 58.41, compareAt: 64.9, bundle: true, shape: "rollTowelSet", tint: "#cdc4b6", accent: "#586666", swatches: ["#ad9f94", "#5f7d97", "#586666", "#a5939e"] },
  { name: "Deep Release Set", price: 43.11, compareAt: 47.9, bundle: true, fromPrice: true, shape: "rollBeltSet", tint: "#cdc4b6", accent: "#586666", swatches: ["#ad9f92", "#5f7d97", "#586666", "#a593a0"] },
  { name: "Travel Essentials Set", price: 65.61, compareAt: 72.9, bundle: true, fromPrice: true, shape: "travelBeltSet", tint: "#647a97", accent: "#576565", swatches: ["#505256", "#647a97", "#576565"] },
  { name: "Yoga Tasche + Gurt Set", price: 38.61, compareAt: 42.9, bundle: true, fromPrice: true, material: ORGANIC_COTTON, shape: "bagBeltSet", tint: "#b3a596", accent: "#844657", swatches: ["#844657", "#697386", "#4d5156", "#ad9f94", "#6f7253", "#415d74"] },
  { name: "Yoga Zubehör + Reinigungs Set", price: 50.27, compareAt: 55.85, bundle: true, fromPrice: true, shape: "cleaningSet", tint: COTTON, swatches: [COTTON, "#854858", "#6e7152", "#4d4a4e", "#677283"] },
  { name: "Yogamatte MUDRA PRO Set", price: 116.91, compareAt: 129.9, bundle: true, fromPrice: true, shape: "matSet", tint: "#4e4c4f", accent: "#8f8c84", swatches: ["#ad9f92", "#4e4c4f"] },
  setNamed("Yoga-Zubehör Set"),
  setNamed("Yogarolle Set Yin Yoga"),
  setNamed("Yoga Set Yin Yoga Restorative S"),
  { name: "Yoga Bolster Set Yin Yoga", price: 110.57, compareAt: 122.85, bundle: true, fromPrice: true, shape: "bolsterBlanketSet", tint: "#667383", swatches: [COTTON, "#854856", "#4e4c4f", "#667383"] },
  setNamed("Yogamatte PURE Set"),
];

// ---------- Yoga accessories ----------
// As on the original's "Yoga-Zubehör" pages: one card per colour (or size,
// with its own price). Like there, the material is set on single colours
// only, e.g. six of the eight belts count as organic cotton.
const yogaAccessories = [
  { name: "Yogagurt 100% Bio-Baumwolle", slug: "yoga-gurt-bio-baumwolle", price: 12.95, shape: "strap", material: null, variants: [
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau", material: ORGANIC_COTTON },
    { color: "Natur", hex: COTTON, family: "Beige", material: ORGANIC_COTTON },
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz", material: ORGANIC_COTTON },
    { color: "Aubergine", hex: "#8d5a6f", family: "Rot", material: ORGANIC_COTTON },
    { color: "Light Taupe", hex: "#c4b6a6", family: "Beige", material: ORGANIC_COTTON },
    { color: "Lavender Fog", hex: "#b7a3b6", family: "Rosa" },
    { color: "Kurkuma", hex: "#d4913b", family: "Terra", material: ORGANIC_COTTON, badge: "New in" },
  ] },
  { name: "Yogatasche PUNE", slug: "yogatasche-pune", price: 29.95, shape: "bag", material: null, variants: [
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
    { color: "Light Taupe", hex: "#c4b6a6", family: "Beige", material: ORGANIC_COTTON },
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz", material: ORGANIC_COTTON },
    { color: "Aubergine", hex: "#8d5a6f", family: "Rot", material: ORGANIC_COTTON },
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau", material: ORGANIC_COTTON },
    { color: "Lavender Fog", hex: "#b7a3b6", family: "Rosa" },
  ] },
  { name: "Yogablock Kork 2er Set", slug: "yogablock-aus-kork-alle", price: 29.95, shape: "block", material: null, variants: [
    { color: "Klein", hex: CORK },
    { color: "Groß", hex: CORK, price: 34.95 },
  ] },
  { name: "Yogadecke „Savasana“ 100% Baumwolle (kbA)", slug: "yogadecke-savasana-100-baumwolle-kba", price: 44.95, shape: "blanket", material: ORGANIC_COTTON, variants: [
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
    { color: "Natur", hex: COTTON, family: "Beige" },
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
  ] },
  { name: "Bio Yogamatten Spray", slug: "yogamatten-spray", price: 12.95, shape: "spray", material: null, variants: [
    { color: "60ml", hex: "#e6e1d6" },
    { color: "500ml", hex: "#e6e1d6", price: 24.95, shape: "sprayRefill" },
  ] },
  { name: "Yoga Handtuch", slug: "yoga-handtuch", price: 29.95, shape: "towel", material: null, variants: [
    { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
    { color: "Balsam Green", hex: "#5d7366", family: "Grün", material: "Polyester" },
    { color: "Lavender Fog", hex: "#b7a3b6", family: "Rosa", material: "Polyester" },
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz", material: "Polyester" },
  ] },
  { name: "Yogatasche NANDI", slug: "yogatasche-nandi", price: 19.95, shape: "sack", material: ORGANIC_COTTON, variants: [
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz", soldOut: true },
    { color: "Natur", hex: COTTON, family: "Beige" },
  ] },
  { name: "Augenkissen", slug: "augenkissen", price: 27.95, shape: "eyePillow", material: null, filling: "95% Leinsaat, 5% Lavendel", variants: [
    { color: "Light Taupe", hex: "#c4b6a6", family: "Beige", material: ORGANIC_COTTON },
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
    { color: "Lavender Fog", hex: "#b7a3b6", family: "Rosa", material: ORGANIC_COTTON },
    { color: "Natur", hex: COTTON, family: "Beige", material: ORGANIC_COTTON },
  ] },
  // Stickers come in one version each: one card without a colour line.
  { name: "Yogamatten-Sticker „I am enough“", slug: "yogamatten-sticker-i-am-enough", price: 2.95, shape: "sticker", tint: "#eadbc6", material: "Polymere Klebefolie mit UV-Schutz", soldOut: true },
  { name: "Yogamatten-Sticker „einatmen. ausatmen.“", slug: "yogamatten-sticker-einatmen-ausatmen", price: 2.95, shape: "sticker", tint: "#d3ddd5", soldOut: true },
  { name: "Yogamatten-Sticker „Ich bin dankbar“", slug: "yogamatten-sticker-ich-bin-dankbar", price: 2.95, shape: "sticker", tint: "#f0d9d0", material: "Polymere Klebefolie mit UV-Schutz" },
  { name: "Yogamatten-Sticker „good vibes only“", slug: "yogamatten-sticker-good-vibes-only", price: 2.95, shape: "sticker", tint: "#dcd7e8", soldOut: true },
];
const accessoriesNamed = (...names) => yogaAccessories.filter((item) => names.includes(item.name));

// Two products that only show up on a sub-page, not under "Yoga-Zubehör".
const matCarrier = { name: "Yogamatten Tragegurt", slug: "yogamatten-tragegurt", price: 14.95, shape: "strap", material: null, variants: [
  { color: "Light Taupe", hex: "#c4b6a6", family: "Beige", material: ORGANIC_COTTON },
  { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
] };
const singleCorkBlock = { name: "Yogablock Kork Einzeln", slug: "yogablock-kork-einzeln", price: 17.95, shape: "singleBlock", material: null, variants: [
  { color: "Klein.", hex: CORK, material: "Naturkork" },
  { color: "Groß.", hex: CORK, price: 19.95 },
] };

// ---------- Bolsters, rolls and mat add-ons ----------
// The filling works like the material: the original sets it on single
// colours only. "Grassland" is a patterned fabric (colour group Wood Grain).
const SPELT = "Bio-Dinkelspelz (kbA)";
const KAPOK = "Kapokwolle";
const GRASSLAND = "#c9c6b0";
// The colours with a filling also carry organic cotton and a 15 cm seat
// height (they only show as filters on the overview and gift pages).
const olderBolster = (filling) => ({ filling, material: ORGANIC_COTTON, height: "15" });
const bolsterColors = (filling) => [
  { color: "Light Taupe", hex: "#c4b6a6", family: "Beige", ...olderBolster(filling) },
  { color: "Natur", hex: COTTON, family: "Beige", ...olderBolster(filling) },
  { color: "Indigo Dust", hex: "#6b7c95", family: "Blau", ...olderBolster(filling) },
  { color: "Aubergine", hex: "#8d5a6f", family: "Rot", ...olderBolster(filling) },
  { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz", ...olderBolster(filling) },
  { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot" },
  { color: "Grassland", hex: GRASSLAND, family: "Wood Grain" },
];
const yogaRoll = { name: "Yogarolle RESTORATIVE Ø24 cm", slug: "yogarolle-restorative-o24-cm", price: 54.95, shape: "roll", material: ORGANIC_COTTON, variants: [
  { color: "Light Taupe", hex: "#c4b6a6", family: "Beige", filling: SPELT },
  { color: "Natur", hex: COTTON, family: "Beige", filling: SPELT },
  { color: "Indigo Dust", hex: "#6b7c95", family: "Blau", filling: SPELT },
  { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz", filling: SPELT },
  { color: "Aubergine", hex: "#8d5a6f", family: "Rot", filling: SPELT, soldOut: true },
  { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot" },
  { color: "Grassland", hex: GRASSLAND, family: "Wood Grain" },
] };
const neckRoll = { name: "Yoga Mini-Rolle (Nackenrolle) Ø12 cm", slug: "nackenrolle", price: 34.95, shape: "neckRoll", variants: [
  { color: "Light Taupe", hex: "#c4b6a6", family: "Beige", filling: SPELT, material: ORGANIC_COTTON },
  { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
] };
const bolsters = [
  yogaRoll,
  // Aubergine has sold out in the large size (as of 4 Oct 2026).
  { name: "Yoga Bolster RESTORATIVE L", slug: "yoga-bolster-restorative-l", price: 64.95, shape: "bolster", variants: bolsterColors(KAPOK)
    .map((variant) => (variant.color === "Aubergine" ? { ...variant, soldOut: true } : variant)) },
  { name: "Yoga Bolster RESTORATIVE S", slug: "yoga-bolster-restorative-s", price: 49.95, shape: "bolsterS", variants: bolsterColors(KAPOK) },
  neckRoll,
];
const rollCover = { name: "Bezug für Yogarolle COVER Ø24 cm", price: 29.95, shape: "rollCover", badge: "NUR BEZUG", material: ORGANIC_COTTON, variants: [
  { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
  { color: "Natur", hex: COTTON, family: "Beige" },
  { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
  { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
  { color: "Dark Cranberry", hex: "#7a2a3a", family: "Rot" },
] };

// "Yogamatten Zubehör" (the original's name for the add-ons page) also has
// malas and spelt husks for refilling cushions; both come back under
// "Meditation Zubehör".
const stickers = yogaAccessories.filter((item) => item.shape === "sticker");
const malas = [
  { name: "Rosenholz Mala (Dunkles Rosenholz)", price: 22.95, shape: "mala", tint: "#6b3a2c", material: "Rotes Sandelholz", soldOut: true },
  { name: "Tulsi Mala", price: 24.95, shape: "mala", tint: "#c8a77a", material: "Tulsi", soldOut: true },
  { name: "Rudraksha Mala", price: 19.95, shape: "mala", tint: "#7a4a32", material: "Rudraksha", soldOut: true },
];
const speltHusks = [
  { name: "Bio Dinkelspelzen - Dinkelspreu (kbA) 2kg", price: 14.95, shape: "husks", tint: "#d9c69e" },
  { name: "Bio Dinkelspelzen -Dinkelspreu (kbA) 1kg", price: 9.95, shape: "husks", tint: "#d9c69e" },
];
const matAddOns = [
  ...accessoriesNamed("Bio Yogamatten Spray"),
  singleCorkBlock,
  ...malas,
  stickers[0],
  speltHusks[0],
  stickers[1],
  speltHusks[1],
  stickers[2],
  stickers[3],
];

const bolsterShortcuts = [
  { label: "Yogamatten", icon: "mat", key: "yogamatten" },
  { label: "Yoga-Zubehör", icon: "block", key: "yoga-zubehor" },
  { label: "Yoga Bolster", icon: "bolster", key: "yoga-bolster" },
  { label: "Yogamatten Zubehör", icon: "bottle", key: "yoga-accessories" },
];
const addOnShortcuts = [
  { label: "Yogamatten Spray", icon: "bottle", key: "yogamatten-spray" },
  { label: "Yogamatten-Sticker", icon: "sticker", key: "yogamatten-sticker-1" },
];

// The circles above "Yoga-Zubehör"; its sub-pages show the first four.
const accessoryShortcuts = [
  { label: "Yogataschen", icon: "bag", key: "yogataschen" },
  { label: "Yogadecken", icon: "blanket", key: "yogadecken" },
  { label: "Yoga-Handtücher", icon: "towel", key: "yoga-handtuecher" },
  { label: "Yoga-Gurte", icon: "strap", key: "yoga-gurte" },
  { label: "Yoga Blöcke", icon: "block", key: "yoga-block" },
];

// ---------- Meditation cushions ----------
// As on the original's "Meditationskissen" pages: the colours it shows as
// cards (some sold-out ones included, others hidden). The filling sits on
// single colours again; `form` feeds the original's "Form" filter.
const CUSHION_TONES = {
  "Balsam Green": { hex: "#5d7366", family: "Grün" },
  "Natur": { hex: COTTON, family: "Beige" },
  "Light Taupe": { hex: "#c4b6a6", family: "Beige" },
  "Indigo Dust": { hex: "#6b7c95", family: "Blau" },
  "Marine Blue": { hex: "#2f4361", family: "Blau" },
  "Midnight Blue": { hex: "#2f3a5c", family: "Blau" },
  "Anthrazit": { hex: "#3d3d3f", family: "Schwarz" },
  "Schwarz": { hex: "#1f1e1c", family: "Schwarz" },
  "Kurkuma": { hex: "#d4913b", family: "Terra" },
  "Aubergine": { hex: "#8d5a6f", family: "Rot" },
  "Bordeaux": { hex: "#6e2b38", family: "Rot" },
  "Lavender Fog": { hex: "#b7a3b6", family: "Rosa" },
  "Grassland": { hex: GRASSLAND, family: "Wood Grain" },
};
const cushionColor = (color, extra = {}) => ({ color, ...CUSHION_TONES[color], ...extra });
const spelt = { filling: SPELT };
const speltSoldOut = { filling: SPELT, soldOut: true };

const meditationCushions = [
  { name: "Meditationskissen Lotus (H: 15cm)", slug: "meditationskissen-lotus-h-15cm", price: 39.95, shape: "lotusCushion15", form: "Rund", height: "15", material: ORGANIC_COTTON, variants: [
    cushionColor("Balsam Green"), cushionColor("Natur", spelt), cushionColor("Anthrazit", spelt), cushionColor("Light Taupe", spelt),
    cushionColor("Indigo Dust", spelt), cushionColor("Kurkuma"), cushionColor("Schwarz"),
  ] },
  // Like the filling, the seat height is only set on the older colours here.
  { name: "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", slug: "meditationskissen-lotus-h-15cm-ohne-bestickung", price: 34.95, shape: "plainCushion", form: "Rund", material: ORGANIC_COTTON, variants: [
    ...[cushionColor("Indigo Dust", spelt), cushionColor("Aubergine", speltSoldOut), cushionColor("Natur", spelt), cushionColor("Light Taupe", spelt),
      cushionColor("Anthrazit", spelt)].map((variant) => ({ ...variant, height: "15" })),
    cushionColor("Lavender Fog"), cushionColor("Balsam Green"), cushionColor("Grassland"),
  ] },
  { name: "Meditationskissen Lotus HOCH (H: 20cm)", slug: "meditationskissen-lotus-hoch-h-20cm", price: 44.95, shape: "lotusCushion20", form: "Rund", height: "20", material: ORGANIC_COTTON, variants: [
    cushionColor("Light Taupe", spelt), cushionColor("Natur", spelt), cushionColor("Indigo Dust", spelt), cushionColor("Bordeaux", speltSoldOut),
    cushionColor("Anthrazit", spelt), cushionColor("Aubergine", speltSoldOut), cushionColor("Kurkuma", { badge: "New in" }), cushionColor("Balsam Green", { badge: "New in" }),
  ] },
  { name: "Zafu-Meditationskissen Zen", slug: "zafu-meditationskissen-zen", price: 39.95, shape: "zafu", form: "Zafu", height: "15", material: ORGANIC_COTTON, variants: [
    cushionColor("Balsam Green"), cushionColor("Light Taupe", spelt), cushionColor("Indigo Dust", spelt), cushionColor("Natur", spelt),
    cushionColor("Anthrazit", spelt), cushionColor("Kurkuma"),
  ] },
  { name: "Yogakissen Halbmond Shanti", slug: "yogakissen-halbmond-shanti", price: 39.95, shape: "crescent", form: "Halbrund", height: "15", material: ORGANIC_COTTON, variants: [
    cushionColor("Indigo Dust", spelt), cushionColor("Natur", spelt), cushionColor("Light Taupe", spelt), cushionColor("Anthrazit", spelt),
    cushionColor("Balsam Green"), cushionColor("Bordeaux", speltSoldOut), cushionColor("Aubergine", speltSoldOut),
  ] },
  { name: "Meditationskissen Lotus KLEIN (H: 10 cm)", slug: "meditationskissen-lotus-klein-h-10-cm", price: 37.95, shape: "lotusCushion10", form: "Rund", height: "10", material: ORGANIC_COTTON, variants: [
    cushionColor("Balsam Green"), cushionColor("Natur", spelt), cushionColor("Light Taupe", spelt), cushionColor("Aubergine", speltSoldOut),
    cushionColor("Bordeaux", speltSoldOut), cushionColor("Indigo Dust", spelt), cushionColor("Anthrazit", spelt), cushionColor("Kurkuma"),
  ] },
  { name: "Zafu-Meditationskissen Zen Kapok", slug: "zafu-meditationskissen-zen-kapok", price: 44.95, shape: "zafu", form: "Zafu", height: "15", material: ORGANIC_COTTON, variants: [
    cushionColor("Anthrazit", { filling: KAPOK, soldOut: true }),
  ] },
];
const cushionsNamed = (...names) => meditationCushions.filter((cushion) => names.includes(cushion.name));
const cushionShortcuts = [
  { label: "Halbmondkissen", icon: "crescent", key: "yogakissen-halbmond" },
  { label: "Rundkissen", icon: "cushion", key: "rundkissen" },
  { label: "Zafu-Kissen", icon: "zafu", key: "zafu-kissen" },
];
// Colours of sold-out, hidden cushions still show up in the original's filters.
const CUSHION_FILTER_COLORS = ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz", "Rosa", "Gelb", "Wood Grain"];

// ---------- Meditation mats and sets ----------
// The zabuton in two heights: each colour gets a 4 cm and a 7 cm card, with
// the original's prices.
const zabutonHeights = (color, extra = {}) => [
  { color: `${color} / 4 cm`, ...CUSHION_TONES[color], ...extra, shape: "zabuton" },
  { color: `${color} / 7 cm`, ...CUSHION_TONES[color], ...extra, shape: "zabutonThick", price: 74.95 },
];
// The older colours are filled with cotton fleece, the newer ones say nothing.
const fleece = { filling: "Baumwollvlies" };
const zabuton = { name: "Meditationsmatte Zabuton", slug: "meditationsmatte-zabuton", price: 59.95, shape: "zabuton", material: ORGANIC_COTTON, variants: [
  ...zabutonHeights("Light Taupe", fleece), ...zabutonHeights("Natur", fleece), ...zabutonHeights("Balsam Green"), ...zabutonHeights("Indigo Dust", fleece),
  ...zabutonHeights("Anthrazit", fleece), ...zabutonHeights("Bordeaux", fleece), ...zabutonHeights("Schwarz", { badge: "New in" }),
  ...zabutonHeights("Aubergine", { ...fleece, soldOut: true }),
] };
// The category page lists the sets under their full names; the home page
// (like the original's) uses shorter ones for two of them.
const meditationSets = [
  { name: "Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs", price: 85.41, compareAt: 94.9, bundle: true, fromPrice: true, shape: "meditationSet", tint: "#b3a596", swatches: ["#ad9f94", "#607c97", "#5a6566", "#88505a"] },
  { ...setNamed("Meditations-Set Lotus 15cm"), name: "Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs" },
  setNamed("Meditations-Set Lotus 20cm"),
];
// The gift circles. Each page shows its own pick (never itself), in the
// original's order.
const giftLinks = {
  yogaSets: { label: "Yoga-Sets", icon: "set", key: "yoga-sets" },
  meditationSets: { label: "Meditationskissen Set", icon: "cushion", key: "meditations-sets" },
  vouchers: { label: "Gutscheine", icon: "voucher", key: "geschenk-gutscheine-1" },
  under50: { label: "Geschenke unter 50€", icon: "gift", key: "unter-50" },
  under100: { label: "Geschenke unter 100€", icon: "gift", key: "unter-100" },
  under120: { label: "Geschenke unter 120€", icon: "gift", key: "unter-120" },
};
const giftShortcuts = (...names) => names.map((name) => giftLinks[name]);

// ---------- Covers and the meditation bench ----------
// Covers sold on their own, one card per colour the original shows (in its
// variant order). `height` feeds its "Sitzhöhe" filter; like there, only one
// half-moon cover has its form set.
const coverFor = (name, shape, extra, variants) => ({ name: `Bezug für ${name}`, price: 19.95, shape, badge: "NUR BEZUG", material: ORGANIC_COTTON, ...extra, variants });
const coverSoldOut = { soldOut: true };
const cushionCovers = [
  coverFor("Meditationskissen Lotus (H: 15cm)", "lotusCover15", { height: "15", form: "Rund" }, [
    cushionColor("Anthrazit"), cushionColor("Aubergine", coverSoldOut), cushionColor("Balsam Green"), cushionColor("Schwarz"),
    cushionColor("Indigo Dust"), cushionColor("Kurkuma"), cushionColor("Light Taupe"), cushionColor("Natur"),
  ]),
  coverFor("Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", "plainCover", { height: "15", form: "Rund" }, [
    cushionColor("Anthrazit"), cushionColor("Aubergine", coverSoldOut), cushionColor("Indigo Dust"), cushionColor("Lavender Fog"),
    cushionColor("Light Taupe"), cushionColor("Natur"), cushionColor("Balsam Green"),
  ]),
  coverFor("Zafu-Meditationskissen Zen", "zafuCover", { height: "15", form: "Zafu" }, [
    cushionColor("Anthrazit", coverSoldOut), cushionColor("Light Taupe"), cushionColor("Indigo Dust"), cushionColor("Balsam Green"),
    cushionColor("Kurkuma"), cushionColor("Natur"),
  ]),
  coverFor("Halbmond Kissen", "crescentCover", { height: "15" }, [
    cushionColor("Anthrazit", { form: "Halbrund" }), cushionColor("Aubergine", coverSoldOut), cushionColor("Balsam Green"), cushionColor("Indigo Dust"),
    cushionColor("Light Taupe"), cushionColor("Natur"), cushionColor("Midnight Blue"),
  ]),
  coverFor("Meditationskissen Lotus KLEIN (H: 10 cm)", "lotusCover10", { height: "10", form: "Rund" }, [
    cushionColor("Anthrazit"), cushionColor("Aubergine", coverSoldOut), cushionColor("Balsam Green", coverSoldOut), cushionColor("Indigo Dust"),
    cushionColor("Kurkuma"), cushionColor("Light Taupe"), cushionColor("Marine Blue", coverSoldOut), cushionColor("Natur"),
  ]),
  coverFor("Meditationskissen Lotus HOCH (H: 20cm)", "lotusCover20", { height: "20", form: "Rund" }, [
    cushionColor("Balsam Green"), cushionColor("Indigo Dust"), cushionColor("Natur"), cushionColor("Anthrazit"),
    cushionColor("Aubergine", coverSoldOut), cushionColor("Kurkuma"), cushionColor("Light Taupe"),
  ]),
];
const zabutonCover = coverFor("Zabuton", "zabutonCover", { price: 39.95 }, [
  cushionColor("Anthrazit"), cushionColor("Aubergine", coverSoldOut), cushionColor("Bordeaux"), cushionColor("Indigo Dust"),
  cushionColor("Light Taupe"), cushionColor("Natur"), cushionColor("Balsam Green"), cushionColor("Schwarz"),
]);
const meditationBench = { name: "Meditationsbank DHARMA Standard", slug: "meditationsbank-dharma-standard", price: 74.95, shape: "bench", material: "Europäisches Buchenholz", height: "15", variants: [
  cushionColor("Natur"), cushionColor("Anthrazit"), cushionColor("Indigo Dust", { badge: "New in" }), cushionColor("Aubergine", { badge: "New in" }),
] };

// ---------- Clothing ----------
// One card per colour, as on the original. `sizes` are all sizes a model
// comes in (they make up the "Größe" filter), a colour's `stock` the sizes
// it still has: like the original, the size filter only finds colours in
// stock, and colours sold out in every size drop out of any filtered list.
const CLOTHING_TONES = {
  "Dark Cranberry": { hex: "#7a2a3a", family: "Rot" },
  "Midnight Blue": { hex: "#2f3a5c", family: "Blau" },
  "Almond Milk": { hex: "#e6d9c6", family: "Beige" },
  "Marshmallow": { hex: "#eee8de", family: "Beige" },
  "Deep Taupe": { hex: "#9a8878", family: "Beige" },
  "Anthrazit": { hex: "#3d3d3f", family: "Schwarz" },
  "Violetta": { hex: "#9b7f9f", family: "Rosa" },
  "Stone Blue": { hex: "#8fa0b0", family: "Blau" },
};
const VISCOSE = "Viskose";
const RECYCLED_POLYESTER = "Recyceltes Polyester";
const sizeList = (text) => (text ? text.split(" ") : []);
const ALL_SIZES = "XS S M L XL XXL";
const outfit = (color, stock, extra = {}) => ({ color, ...CLOTHING_TONES[color], stock: sizeList(stock), soldOut: !stock, ...extra });
const newIn = { badge: "New in" };
const clothes = [
  { name: "Amina Wrap Top", slug: "amina-wrap-top", price: 59.95, shape: "wrapTop", material: VISCOSE, sizes: sizeList(ALL_SIZES), variants: [
    outfit("Dark Cranberry", ALL_SIZES, newIn), outfit("Midnight Blue", ALL_SIZES, newIn), outfit("Almond Milk", ALL_SIZES, newIn),
  ] },
  { name: "Naima Top", slug: "naima-top", price: 39.95, shape: "top", material: VISCOSE, sizes: sizeList(ALL_SIZES), variants: [
    outfit("Dark Cranberry", ALL_SIZES, newIn), outfit("Midnight Blue", "XS S M L XL", newIn), outfit("Almond Milk", "M L XL XXL", newIn),
  ] },
  { name: "Heya Culotte", slug: "heya-culotte", price: 69.95, shape: "culotte", material: VISCOSE, sizes: sizeList(ALL_SIZES), variants: [
    outfit("Midnight Blue", "", newIn), outfit("Dark Cranberry", "M L XXL", newIn), outfit("Almond Milk", "M L XXL", newIn),
  ] },
  { name: "MIKO Bralette", slug: "miko-bralette", price: 31.49, compareAt: 44.95, shape: "bralette", material: RECYCLED_POLYESTER, sizes: sizeList(ALL_SIZES), variants: [
    outfit("Marshmallow", "XS S M L"), outfit("Anthrazit", "XS S M L"), outfit("Violetta", "XS S M L XXL"),
  ] },
  { name: "ALA Tank Tee", slug: "ala-tank-tee", price: 41.99, compareAt: 59.95, shape: "tankTee", material: RECYCLED_POLYESTER, sizes: sizeList(ALL_SIZES), variants: [
    outfit("Marshmallow", "XS S M L XL"), outfit("Anthrazit", ALL_SIZES, { price: 47.95 }), outfit("Violetta", ALL_SIZES),
  ] },
  // The sold-out colour isn't reduced.
  { name: "DANA Overall", slug: "dana-overall", price: 71.95, compareAt: 89.95, shape: "overall", material: RECYCLED_POLYESTER, sizes: sizeList(ALL_SIZES), variants: [
    outfit("Marshmallow", "S M L"), outfit("Anthrazit", "", { price: 89.95, compareAt: null }),
  ] },
  { name: "BECCA Leggings", slug: "becca-leggings", price: 55.95, compareAt: 69.95, shape: "leggings", material: RECYCLED_POLYESTER, sizes: sizeList(ALL_SIZES), variants: [
    outfit("Anthrazit", "XS S M XL"), outfit("Marshmallow", ALL_SIZES, { price: 48.99 }), outfit("Violetta", "XS S M L XL"),
  ] },
  { name: "FIONA Womens Pants", slug: "fiona-womens-pants", price: 89.95, shape: "pants", material: ORGANIC_COTTON, sizes: sizeList(ALL_SIZES), variants: [
    outfit("Anthrazit", "XS S L"), outfit("Stone Blue", "XS S M L XL", { price: 71.95, compareAt: 89.95 }),
  ] },
  { name: "QUINN Mens Pants", slug: "quinn-mens-pants", price: 99.95, shape: "pants", material: ORGANIC_COTTON, sizes: sizeList("S M L XL XXL"), variants: [
    outfit("Deep Taupe", "S M L XL XXL", newIn), outfit("Anthrazit", "S M L XL XXL"), outfit("Stone Blue", "S M L XXL", { price: 69.95, compareAt: 99.95 }),
  ] },
  { name: "ELI Womens Tee (Short Sleeve)", slug: "eli-womens-tee-short-sleeve", price: 35.95, compareAt: 44.95, shape: "tee", material: ORGANIC_COTTON, sizes: sizeList("XS S M L XL"), variants: [
    outfit("Violetta", "S M L XL"), outfit("Marshmallow", "L XL"), outfit("Anthrazit", "L"),
  ] },
  { name: "REID Mens Tank-Top", slug: "reid-mens-tank-top", price: 35.95, compareAt: 44.95, shape: "tankTop", material: ORGANIC_COTTON, sizes: sizeList("S M L XL"), variants: [
    outfit("Marshmallow", "S M L XL", { price: 31.49 }), outfit("Anthrazit", "S M L XL"), outfit("Stone Blue", "S M L XL"),
  ] },
  { name: "FEND Mens Sweater", slug: "fend-mens-sweater", price: 44.99, compareAt: 89.95, shape: "sweater", material: ORGANIC_COTTON, sizes: sizeList("S M L XL"), variants: [
    outfit("Stone Blue", "S M L XL"), outfit("Marshmallow", "S M L XL"), outfit("Anthrazit", "S M L XL"),
  ] },
  { name: "NIA Womens Sweater", slug: "nia-womens-sweater", price: 71.95, compareAt: 89.95, shape: "sweater", material: ORGANIC_COTTON, sizes: sizeList("XS S M L XL"), variants: [
    outfit("Anthrazit", "XS S M L XL", { price: 62.99 }), outfit("Marshmallow", "XS S M L XL"), outfit("Stone Blue", "XS S M L XL"),
  ] },
];
// Each collection has its own order on the original, so pick in the given order.
const clothesNamed = (...names) => names.map((name) => clothes.find((model) => model.name.startsWith(name)));
const womenShortcuts = [
  { label: "Hosen", icon: "pants", key: "yoga-hosen-pants-damen" },
  { label: "Leggings", icon: "leggings", key: "yoga-leggings-damen" },
  { label: "Yoga BH", icon: "bra", key: "yoga-bra-tops" },
  { label: "Shirts", icon: "top", key: "yoga-shirt" },
  { label: "Pullover", icon: "sweater", key: "yoga-pullover" },
  { label: "Overalls", icon: "overall", key: "overalls" },
];
const menShortcuts = [
  { label: "Tanktops", icon: "top", key: "tanktops" },
  { label: "Sweatshirts", icon: "sweater", key: "yoga-sweatshirt-herren" },
  { label: "Trainingshosen", icon: "pants", key: "trainingshose-jogginghose-herren" },
];
// Brown comes from sold-out colours the original hides (Amina, Naima, Heya).
const CLOTHES_FILTER_COLORS = ["Beige", "Blau", "Rot", "Schwarz", "Rosa", "Braun"];

// ---------- Gifts ----------
// The gift card comes in 20 to 200 €; like everything here it's only shown.
const giftCard = { name: "Gutscheinkarte", price: 20, shape: "giftCard", tint: "#b8975a" };
// Yellow comes from sold-out cushion colours the original hides.
const GIFT_FILTER_COLORS = ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz", "Rosa", "Gelb", "Wood Grain"];

// "Almost Perfect" mats: second-quality, 15% off. Only the colours the
// original shows as cards; like there, only some have a material set.
const almostPerfectMats = [
  { name: "„Almost Perfect“ Yogamatte MUDRA PRO", price: 84.95, compareAt: 99.95, material: "Polyester", variants: [
    { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
  ] },
  { name: "„Almost Perfect“ Yogamatte PURE", price: 67.95, compareAt: 79.95, material: null, variants: [
    { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
  ] },
  { name: "„Almost Perfect“ Yogamatte MUDRA", price: 33.95, compareAt: 39.95, material: null, variants: [
    { color: "Indigo Dust", hex: "#6b7c95", family: "Blau" },
    { color: "Aubergine", hex: "#8d5a6f", family: "Rot" },
    { color: "Light Taupe", hex: "#c4b6a6", family: "Beige" },
    { color: "Bordeaux", hex: "#6e2b38", family: "Rot" },
    { color: "Balsam Green", hex: "#5d7366", family: "Grün" },
  ] },
  // The original's photo for this one shows a mauve mat.
  { name: "„Almost Perfect“ Yogamatte ARISE Travel", price: 50.95, compareAt: 59.95, material: "Naturkautschuk", variants: [
    { color: "Wild Ginger", hex: "#8c5769", family: "Rot" },
  ] },
  { name: "„Almost Perfect“ Yogamatte MUDRA XL", price: 36.5, compareAt: 42.95, material: null, variants: [
    { color: "Balsam Green", hex: "#5d7366", family: "Grün", soldOut: true },
  ] },
  { name: "„Almost Perfect“ Yogamatte ARISE", price: 76.46, compareAt: 89.95, material: null, variants: [
    { color: "Wild Ginger", hex: "#8c5769", family: "Rot" },
  ] },
  { name: "„Almost Perfect“ Yogamatte ARISE Cork", price: 84.95, compareAt: 99.95, material: null, variants: [
    { color: "Align", hex: "#c9a77e", family: "Align" },
    { color: "Lotus", hex: "#b8916a", family: "Braun" },
  ] },
  { name: "„Almost Perfect“ Yogamatte MUDRA PRO XL", price: 106.29, compareAt: 124.95, material: "Polyester", variants: [
    { color: "Anthrazit", hex: "#3d3d3f", family: "Schwarz" },
  ] },
];

// ---------- Pages that mix products from everywhere ----------
// Overview, gift and sale pages pick their models by name.
const allModels = [
  giftCard, ...clothes, ...yogaMats, ...almostPerfectMats, ...yogaAccessories, matCarrier, singleCorkBlock, ...bolsters, rollCover, ...malas,
  ...speltHusks, ...meditationCushions, zabuton, meditationBench, ...cushionCovers, zabutonCover, ...yogaSets, ...meditationSets,
];
const modelsNamed = (...names) => names.map((name) => allModels.find((model) => model.name === name));
// On the gift pages the original prices the stickers "ab €2,95", so these
// copies come first and win the lookup.
const giftModels = [...stickers.map((sticker) => ({ ...sticker, fromPrice: true })), ...allModels];
const giftsNamed = (...names) => names.map((name) => giftModels.find((model) => model.name === name));
// The sale shows only what is reduced: of clothing just the reduced colours.
const reduced = (model) => (model.variants
  ? { ...model, variants: model.variants.filter((variant) => ("compareAt" in variant ? variant.compareAt : model.compareAt)) }
  : model);

// Which mats each sub-category shows was read from the original. The
// `description` (the paragraph below the grid) is our own short text.
const categories = {
  yogamatten: {
    title: "Yogamatten",
    shortcuts: matShortcuts,
    models: yogaMats,
    description: `Ob griffige ${productLink("yogamatte-pure", "PURE")}, natürliche ${productLink("yogamatte-arise-cork", "ARISE CORK")} oder die leichte ${productLink("yogamatte-mudra-studio", "MUDRA")}, die in vielen Studios liegt: Hier findest du alle Yogamatten auf einen Blick. Mit den Filtern grenzt du die Auswahl nach Farbe, Material und Verfügbarkeit ein.`,
  },
  "yogamatte-fur-zuhause": {
    title: "Yogamatten für Zuhause",
    shortcuts: matShortcuts,
    models: matsNamed("Yogamatte MUDRA", "Yogamatte PURE", "Yogamatte Mudra XL", "Yogamatte ARISE", "Yogamatte ARISE CORK", "Yogamatte WOOL aus Schurwolle"),
    description: `Für die Praxis daheim: die kuschelige ${productLink("yogamatte-schurwolle", "WOOL")} für ruhige Abende, die griffige ${productLink("yogamatte-pure", "PURE")} für dynamische Flows oder die ${productLink("yogamatte-arise-cork", "ARISE CORK")} mit ihrem natürlichen Hautgefühl – hier stehen alle Matten, die sich für zu Hause eignen.`,
  },
  "rutschfeste-yogamatte": {
    title: "Rutschfeste Yogamatte",
    shortcuts: matShortcuts,
    models: matsNamed("Yogamatte PURE", "Yogamatte ARISE", "Yogamatte ARISE CORK", "Yogamatte MUDRA PRO"),
    description: `Wenn es im Flow warm wird, zählt der Halt: ${productLink("yogamatte-pure", "PURE")}, ${productLink("yogamatte-arise", "ARISE")}, ${productLink("yogamatte-arise-cork", "ARISE CORK")} und ${productLink("yogamatte-mudra-pro", "MUDRA PRO")} sind die griffigsten Matten im Sortiment – damit du dich ganz auf Atem und Bewegung konzentrieren kannst.`,
  },
  "studio-yogamatte": {
    title: "Studio Yogamatte",
    shortcuts: matShortcuts,
    models: matsNamed("Yogamatte MUDRA", "Yogamatte Mudra XL", "Yogamatte MUDRA PRO"),
    description: `Leicht, robust und schnell gereinigt: Die ${productLink("yogamatte-mudra-studio", "MUDRA")} ist für den Alltag im Yogastudio gemacht – auch in Überlänge als ${productLink("yogamatte-mudra-studio-xl", "Mudra XL")} oder besonders strapazierfähig als ${productLink("yogamatte-mudra-pro", "MUDRA PRO")}.`,
  },
  "reise-yogamatte": {
    title: "Reise Yogamatte",
    shortcuts: matShortcuts,
    models: matsNamed("Yogamatte ARISE Travel"),
    description: `Nur 1 kg leicht und faltbar: Die ${productLink("yogamatte-arise-travel", "ARISE Travel")} passt in jeden Koffer und begleitet dich ins Hotel, auf Retreats oder in den Park.`,
  },
  // Also listed under "Geschenke", so the original highlights both sections
  // and shows gift circles (the gift pages don't exist here yet).
  "yoga-sets": {
    title: "Yoga-Sets",
    nav: ["Yoga", "Geschenke"],
    shortcuts: giftShortcuts("meditationSets", "vouchers", "under50", "under100", "under120"),
    models: yogaSets,
    description: `Gut ausgestattet für jede Einheit: Die Sets kombinieren Matte, Tasche, Gurt, Block oder Bolster und kosten zusammen 10 % weniger als die Teile einzeln – ob für Yin Yoga, für unterwegs oder als Geschenk.`,
  },
  "unperfekte-produkte": {
    title: "„Almost Perfect“ Yogamatten",
    shortcuts: [],
    models: almostPerfectMats,
    // The original's colour filter also counts colours that are sold out and
    // hidden, so it offers "Rosa" (which then shows no products).
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Schwarz", "Rosa", "Braun", "Align"] },
    description: `Diese Matten funktionieren einwandfrei, haben aber kleine optische Makel – etwa eine leicht abweichende Farbe oder einen winzigen Fleck. Deshalb gibt es sie 15 % günstiger: gut für dein Budget und gut für die Umwelt, weil keine Matte aussortiert wird. Die regulären Modelle findest du unter <a href="kategorie.html?k=yogamatten">Yogamatten</a>.`,
  },
  "yoga-zubehor": {
    title: "Yoga-Zubehör",
    shortcuts: accessoryShortcuts,
    models: yogaAccessories,
    // Grey comes from a belt colour that is sold out and hidden (as on the original).
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz", "Grau", "Rosa"] },
    description: `Kleine Helfer, große Wirkung: Ein Block bringt den Boden näher, ein Gurt verlängert die Arme, eine Decke polstert Knie und Rücken. Das Zubehör ist meist aus Kork oder Bio-Baumwolle und farblich auf die Matten abgestimmt.`,
  },
  yogataschen: {
    title: "Yogataschen",
    shortcuts: accessoryShortcuts.slice(0, 4),
    models: [...accessoriesNamed("Yogatasche PUNE", "Yogatasche NANDI"), matCarrier],
    description: "Damit deine Matte sicher ins Studio kommt: geräumige Taschen für Matte und Kleinkram oder ein schlichter Tragegurt, wenn du nur die Matte mitnehmen willst.",
  },
  yogadecken: {
    title: "Yogadecken",
    shortcuts: accessoryShortcuts.slice(0, 4),
    models: accessoriesNamed("Yogadecke „Savasana“ 100% Baumwolle (kbA)"),
    description: "Handgewebt aus Bio-Baumwolle: Die Decke wärmt in der Endentspannung, polstert Knie und Hüften und lässt sich gerollt als Stütze nutzen.",
  },
  "yoga-handtuecher": {
    title: "Yoga-Handtücher",
    shortcuts: accessoryShortcuts.slice(0, 4),
    models: accessoriesNamed("Yoga Handtuch"),
    description: "Auf die Matte gelegt, nimmt das Handtuch Schweiß auf und gibt dir zusätzlichen Halt – ideal für Hot Yoga, schweißtreibende Flows oder als hygienische Auflage auf Leihmatten.",
  },
  "yoga-gurte": {
    title: "Yoga-Gurte",
    shortcuts: accessoryShortcuts.slice(0, 4),
    models: accessoriesNamed("Yogagurt 100% Bio-Baumwolle"),
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz", "Grau", "Rosa"] },
    description: "Ein Gurt verlängert deine Arme: Er hilft dir, Dehnungen sanft zu vertiefen und Haltungen zu halten, in die du allein noch nicht hineinkommst.",
  },
  "yoga-block": {
    title: "Yoga Blöcke",
    sort: "standard",
    shortcuts: [],
    models: [...accessoriesNamed("Yogablock Kork 2er Set"), singleCorkBlock],
    description: "Blöcke aus Naturkork geben dir Höhe und Halt, wo der Boden noch zu weit weg ist – im Stehen, im Sitzen und in der Entspannung. Es gibt sie klein und groß, einzeln oder im Zweierset.",
  },
  "yoga-bolster": {
    title: "Yoga Bolster",
    shortcuts: bolsterShortcuts,
    models: bolsters,
    description: "Bolster und Rollen stützen dich dort, wo du loslassen willst: unter den Knien, entlang der Wirbelsäule oder im Nacken. Gefüllt mit Bio-Dinkelspelz oder Kapok und bezogen mit Bio-Baumwolle sind sie wie gemacht für Yin und Restorative Yoga.",
  },
  // The original has no circles and no text on the next page and on the covers.
  "yoga-rolle": {
    title: "Yoga Rolle",
    shortcuts: [],
    models: [yogaRoll, neckRoll],
  },
  "yoga-accessories": {
    title: "Yogamatten Zubehör",
    shortcuts: addOnShortcuts,
    models: matAddOns,
    description: "Alles rund um die Matte: Spray zum Reinigen, Sticker als kleine Botschaft, einzelne Korkblöcke, Malas und Dinkelspelz zum Nachfüllen deiner Kissen.",
  },
  "yogamatten-spray": {
    title: "Yogamatten Spray",
    shortcuts: addOnShortcuts,
    models: accessoriesNamed("Bio Yogamatten Spray"),
    description: "Schonende Reinigung für deine Matte – klein für unterwegs oder groß zum Nachfüllen.",
  },
  "yogamatten-sticker-1": {
    title: "Yogamatten-Sticker",
    shortcuts: addOnShortcuts,
    models: stickers,
    description: "Kleine Botschaften für deine Praxis: Die Sticker halten auf Matte, Trinkflasche oder Laptop und sind mit UV-Schutz bedruckt, damit sie lange schön bleiben.",
  },
  meditationskissen: {
    title: "Meditationskissen",
    nav: ["Meditation"],
    shortcuts: cushionShortcuts,
    models: meditationCushions,
    filterValues: { colors: CUSHION_FILTER_COLORS },
    description: "Ein gutes Kissen hebt das Becken an, damit der Rücken ohne Anstrengung aufrecht bleibt. Rund, halbrund oder als Zafu, 10, 15 oder 20 cm hoch und mit Bio-Dinkelspelz oder Kapok gefüllt: Hier findest du das Kissen, das zu deiner Sitzhaltung passt.",
  },
  rundkissen: {
    title: "Rundkissen",
    nav: ["Meditation"],
    shortcuts: cushionShortcuts,
    models: cushionsNamed("Meditationskissen Lotus (H: 15cm)", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", "Meditationskissen Lotus HOCH (H: 20cm)", "Meditationskissen Lotus KLEIN (H: 10 cm)"),
    filterValues: { colors: CUSHION_FILTER_COLORS },
    description: "Die runden Lotus-Kissen gibt es in drei Höhen: 10 cm, wenn du gelenkig bist, 15 cm als Allrounder und 20 cm, wenn du mehr Unterstützung brauchst. Die Füllung aus Bio-Dinkelspelz passt sich deiner Sitzhaltung an.",
  },
  "zafu-kissen": {
    title: "Zafu-Kissen",
    nav: ["Meditation"],
    shortcuts: cushionShortcuts,
    models: cushionsNamed("Zafu-Meditationskissen Zen", "Zafu-Meditationskissen Zen Kapok"),
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz"] },
    description: "Gefaltete, besonders formstabile Rundkissen – gefüllt mit Dinkelspelz oder Kapok.",
  },
  // A sold-out (hidden) zafu in this collection adds "Zafu" to the form filter.
  "yogakissen-halbmond": {
    title: "Halbmondkissen",
    nav: ["Meditation"],
    shortcuts: cushionShortcuts,
    models: cushionsNamed("Yogakissen Halbmond Shanti"),
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz"], forms: ["Halbrund", "Zafu"] },
    description: "Die Halbmondform lässt vorne Platz für die Beine: So kippt das Becken leicht nach vorn, und du sitzt lange bequem – gut, wenn deine Knie im Schneidersitz nicht bis zum Boden reichen.",
  },
  meditationsmatten: {
    title: "Meditationsmatten",
    nav: ["Meditation"],
    shortcuts: [],
    models: [zabuton],
    description: "Ein Zabuton polstert Knie und Knöchel, wenn du länger auf deinem Kissen sitzt. Es gibt ihn 4 cm hoch als flache Unterlage und 7 cm hoch, wenn du es weicher magst.",
  },
  "meditations-sets": {
    title: "Meditationskissen Set",
    nav: ["Meditation", "Geschenke"],
    shortcuts: giftShortcuts("yogaSets", "vouchers", "under50", "under100", "under120"),
    models: meditationSets,
    description: "Kissen und Zabuton passend kombiniert: Mit einem Meditations-Set sitzt du von Anfang an bequem und sparst 10 % gegenüber den einzelnen Teilen. Ein schönes Geschenk für alle, die mit dem Meditieren beginnen.",
  },
  "meditation-zubehor": {
    title: "Meditation Zubehör",
    nav: ["Meditation"],
    shortcuts: [],
    models: [...accessoriesNamed("Augenkissen"), ...malas, ...speltHusks],
    description: "Kleine Helfer rund ums Sitzen: ein Augenkissen für die Entspannung danach, eine Mala zum Zählen der Atemzüge und Bio-Dinkelspelz, mit dem du dein Meditationskissen wieder auffüllst.",
  },
  augenkissen: {
    title: "Augenkissen",
    nav: ["Meditation"],
    shortcuts: [],
    models: accessoriesNamed("Augenkissen"),
    description: "Mit Leinsamen und Lavendel gefüllt, liegt das Augenkissen angenehm schwer auf den Augen und hält das Licht fern – schön für Savasana oder eine kurze Pause zwischendurch.",
  },
  "dinkelspelz-fullung": {
    title: "Dinkelspelz Füllung",
    nav: ["Meditation"],
    shortcuts: [],
    models: speltHusks,
    description: "Mit der Zeit gibt jede Füllung etwas nach. Mit Bio-Dinkelspelz füllst du dein Kissen einfach wieder auf und bestimmst selbst, wie hoch und fest du sitzen möchtest.",
  },
  // Brown, yellow and wood grain come from sold-out covers the original hides.
  "bezug-meditationskissen": {
    title: "Bezug Meditationskissen",
    nav: ["Meditation"],
    shortcuts: [],
    models: cushionCovers,
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz", "Rosa", "Braun", "Gelb", "Wood Grain"] },
  },
  "bezug-meditationsmatte": {
    title: "Bezug Meditationsmatte",
    nav: ["Meditation"],
    shortcuts: [],
    models: [zabutonCover],
  },
  meditationsbank: {
    title: "Meditationsbänke",
    nav: ["Meditation"],
    shortcuts: [],
    models: [meditationBench],
    description: "Auf der Meditationsbank sitzt du im Kniesitz, ohne dass Knie und Füße das Gewicht tragen. Die leicht schräge Sitzfläche kippt das Becken nach vorn, so bleibt der Rücken von selbst aufrecht. Die Ausführung „Standard“ passt bis etwa 180 cm Körpergröße.",
  },
  "yoga-kleidung": {
    title: "Yoga-Kleidung",
    nav: ["Bekleidung"],
    shortcuts: [
      { label: "Yogakleidung Herren", icon: "clothing", key: "yogakleidung-herren" },
      { label: "Yogakleidung Damen", icon: "dress", key: "yogakleidung-damen" },
    ],
    models: clothesNamed("Amina", "Naima", "Heya", "MIKO", "ALA", "DANA", "BECCA", "FIONA", "QUINN", "ELI", "REID", "FEND", "NIA"),
    sort: "standard",
    filterValues: { colors: CLOTHES_FILTER_COLORS },
    description: "Yogakleidung für Damen und Herren aus Bio-Baumwolle, recyceltem Polyester oder fließender Viskose. Oben wählst du Damen oder Herren, mit den Filtern grenzt du nach Farbe, Material und Größe ein.",
  },
  "yogakleidung-damen": {
    title: "Yogakleidung Damen",
    nav: ["Bekleidung"],
    shortcuts: womenShortcuts,
    models: clothesNamed("Amina", "Naima", "Heya", "BECCA", "FIONA", "ELI", "ALA", "MIKO", "NIA", "DANA"),
    sort: "standard",
    filterValues: { colors: CLOTHES_FILTER_COLORS },
    description: "Vom Bralette bis zum Wickeltop: Die Damenkollektion begleitet dich auf der Matte und durch den Tag, und viele Teile lassen sich farblich miteinander kombinieren.",
  },
  "yoga-hosen-pants-damen": {
    title: "Hosen",
    nav: ["Bekleidung"],
    shortcuts: womenShortcuts,
    models: clothesNamed("Heya", "FIONA"),
    sort: "standard",
    filterValues: { colors: ["Beige", "Blau", "Rot", "Schwarz", "Braun"] },
    description: "Eine weite Culotte aus Viskose oder eine Hose aus Bio-Baumwolle: bequem genug für die Praxis und schön genug für den Alltag.",
  },
  "yoga-leggings-damen": {
    title: "Leggings",
    nav: ["Bekleidung"],
    shortcuts: womenShortcuts,
    models: clothesNamed("BECCA"),
    description: "Die BECCA Leggings aus recyceltem Polyester sitzt eng am Körper und macht jede Bewegung mit.",
  },
  "yoga-bra-tops": {
    title: "Yoga BH",
    nav: ["Bekleidung"],
    shortcuts: womenShortcuts,
    models: clothesNamed("MIKO"),
    sort: "standard",
    description: "Das MIKO Bralette aus recyceltem Polyester trägst du solo in der Yogastunde oder unter einem lockeren Shirt.",
  },
  "yoga-shirt": {
    title: "Shirts",
    nav: ["Bekleidung"],
    shortcuts: womenShortcuts,
    models: clothesNamed("Naima", "Amina", "ELI", "ALA"),
    filterValues: { colors: CLOTHES_FILTER_COLORS },
    description: "Top, Wickeltop, T-Shirt oder Tank Tee: Oberteile aus Viskose, Bio-Baumwolle und recyceltem Polyester für die Matte und den Alltag.",
  },
  overalls: {
    title: "Overalls",
    nav: ["Bekleidung"],
    shortcuts: womenShortcuts,
    models: clothesNamed("DANA"),
    description: "Ein Teil, und du bist angezogen: Der DANA Overall aus recyceltem Polyester begleitet dich zur Yogastunde und danach.",
  },
  "yoga-pullover": {
    title: "Pullover",
    nav: ["Bekleidung"],
    shortcuts: womenShortcuts,
    models: clothesNamed("NIA"),
    sort: "standard",
    description: "Der NIA Sweater aus Bio-Baumwolle hält dich vor und nach der Praxis warm, etwa in der Entspannung am Ende der Stunde.",
  },
  "yogakleidung-herren": {
    title: "Yogakleidung Herren",
    nav: ["Bekleidung"],
    shortcuts: menShortcuts,
    models: clothesNamed("QUINN", "REID", "FEND"),
    description: "Tank-Top, Hose und Sweater aus Bio-Baumwolle: schlichte Yogakleidung für Herren, die sich gut miteinander kombinieren lässt.",
  },
  tanktops: {
    title: "Tanktops",
    nav: ["Bekleidung"],
    shortcuts: menShortcuts,
    models: clothesNamed("REID"),
    description: "Das REID Tank-Top aus Bio-Baumwolle lässt den Armen viel Bewegungsfreiheit.",
  },
  "trainingshose-jogginghose-herren": {
    title: "Trainingshosen",
    nav: ["Bekleidung"],
    shortcuts: menShortcuts,
    models: clothesNamed("QUINN"),
    description: "Die QUINN Pants aus Bio-Baumwolle sind bequem auf der Matte und unterwegs.",
  },
  "yoga-sweatshirt-herren": {
    title: "Sweatshirts",
    nav: ["Bekleidung"],
    shortcuts: menShortcuts,
    models: clothesNamed("FEND"),
    description: "Der FEND Sweater aus Bio-Baumwolle für den Weg ins Studio und die Pause danach.",
  },
  // Gift pages: the original's own order, no sort option chosen, no text.
  geschenkideen: {
    title: "Geschenkideen",
    nav: ["Geschenke"],
    shortcuts: giftShortcuts("yogaSets", "meditationSets", "vouchers", "under50", "under100", "under120"),
    models: giftsNamed("BECCA Leggings", "Gutscheinkarte", "Yoga-Zubehör Set", "DANA Overall", "Yogablock Kork 2er Set", "Yogamatte PURE Set",
      "Yoga Mini-Rolle (Nackenrolle) Ø12 cm", "Yoga Set Yin Yoga Restorative S", "MIKO Bralette", "Yoga Bolster Set Yin Yoga", "NIA Womens Sweater",
      "FEND Mens Sweater", "Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs", "QUINN Mens Pants", "Yogamatte ARISE Set", "Yogamatten Tragegurt",
      "Bio Yogamatten Spray", "Yogamatte MUDRA PRO", "Yoga Tasche + Gurt Set", "Yogamatte ARISE Travel", "Yogamatten-Sticker „Ich bin dankbar“",
      "Yogamatten-Sticker „I am enough“", "Yoga Zubehör + Reinigungs Set", "Yogamatte MUDRA PRO Set", "Meditations-Set Lotus 20cm",
      "Yogarolle Set Yin Yoga", "ELI Womens Tee (Short Sleeve)", "Yogamatte MUDRA", "Meditationskissen Lotus KLEIN (H: 10 cm)",
      "Meditationskissen Lotus (H: 15cm)", "Yoga Bolster RESTORATIVE S", "Yoga Bolster RESTORATIVE L",
      "Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs", "Travel Essentials Set", "Deep Release Set", "Restore Comfort Set",
      "Practice Anywhere Set"),
    sort: "standard",
    filterValues: { colors: GIFT_FILTER_COLORS },
  },
  "unter-50": {
    title: "Geschenke unter 50€",
    nav: ["Geschenke"],
    shortcuts: giftShortcuts("yogaSets", "meditationSets", "vouchers", "under120", "under100"),
    models: giftsNamed("Gutscheinkarte", "MIKO Bralette", "Yoga-Zubehör Set", "Yoga Mini-Rolle (Nackenrolle) Ø12 cm", "Yoga Tasche + Gurt Set",
      "Yogamatte MUDRA", "ELI Womens Tee (Short Sleeve)", "Yogablock Kork 2er Set", "Yoga Bolster RESTORATIVE S", "Yogamatten-Sticker „I am enough“",
      "Yogamatten Tragegurt", "Meditationskissen Lotus (H: 15cm)", "Yogamatten-Sticker „Ich bin dankbar“", "Bio Yogamatten Spray",
      "Meditationskissen Lotus KLEIN (H: 10 cm)"),
    sort: "standard",
    filterValues: { colors: GIFT_FILTER_COLORS },
  },
  "unter-100": {
    title: "Geschenke unter 100€",
    nav: ["Geschenke"],
    shortcuts: giftShortcuts("yogaSets", "meditationSets", "vouchers", "under50", "under120"),
    models: giftsNamed("Yogamatte PURE Set", "Gutscheinkarte", "BECCA Leggings", "DANA Overall", "Yoga Set Yin Yoga Restorative S", "Yogamatte MUDRA PRO",
      "NIA Womens Sweater", "Yogarolle Set Yin Yoga", "FEND Mens Sweater", "Yoga Bolster RESTORATIVE L", "QUINN Mens Pants",
      "Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs", "Yogamatte ARISE Travel", "Yogamatte ARISE Set", "Yoga Zubehör + Reinigungs Set",
      "Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs"),
    sort: "standard",
  },
  // Here the original shows the gift card's "ab" price.
  "unter-120": {
    title: "Geschenke unter 120€",
    nav: ["Geschenke"],
    shortcuts: giftShortcuts("yogaSets", "meditationSets", "vouchers", "under50", "under100"),
    models: giftsNamed("Yogamatte MUDRA PRO Set", "Gutscheinkarte", "Yoga Bolster Set Yin Yoga", "Yogamatte ARISE Set", "Yogarolle Set Yin Yoga",
      "Meditations-Set Lotus 20cm").map((model) => (model === giftCard ? { ...giftCard, fromPrice: true } : model)),
    sort: "standard",
  },
  // "Gutscheine" sits in the Yoga, Meditation and Geschenke menus.
  "geschenk-gutscheine-1": {
    title: "Gutscheine",
    nav: ["Yoga", "Meditation", "Geschenke"],
    shortcuts: [],
    models: [giftCard],
    description: "Wenn du nicht weißt, was gefällt: Mit einer Gutscheinkarte von 20 € bis 200 € sucht sich die beschenkte Person ihr Lieblingsstück selbst aus. In diesem Studentenprojekt ist sie nur ein Beispiel und lässt sich nicht kaufen.",
  },
  "sets-bundles": {
    title: "Yoga & Meditation Set",
    nav: [],
    shortcuts: [],
    models: giftsNamed("Yogamatte PURE Set", "Yoga-Zubehör Set", "Yogamatte ARISE Set", "Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs",
      "Yoga Tasche + Gurt Set", "Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs", "Meditations-Set Lotus 20cm",
      "Yoga Zubehör + Reinigungs Set", "Yogamatte MUDRA PRO Set", "Yogarolle Set Yin Yoga", "Yoga Set Yin Yoga Restorative S", "Yoga Bolster Set Yin Yoga",
      "Travel Essentials Set", "Deep Release Set", "Restore Comfort Set", "Practice Anywhere Set"),
    sort: "standard",
    description: "Alle Sets auf einen Blick: Yoga- und Meditations-Sets aus Teilen, die zusammenpassen – jeweils 10 % günstiger als einzeln gekauft.",
  },
  // Overview pages behind the header's "Yoga" and "Meditation", and the sale.
  yoga: {
    title: "Yoga",
    shortcuts: bolsterShortcuts,
    models: modelsNamed("Yogamatte MUDRA", "Yogagurt 100% Bio-Baumwolle", "Yogamatte PURE", "Yogatasche PUNE", "Yoga Bolster RESTORATIVE L",
      "Yogablock Kork 2er Set", "Yoga Bolster RESTORATIVE S", "Yogamatte Mudra XL", "Yogamatte ARISE", "Yogadecke „Savasana“ 100% Baumwolle (kbA)",
      "Yogamatte ARISE Travel", "Bio Yogamatten Spray", "Yogamatte ARISE CORK", "Yoga Handtuch", "Yogatasche NANDI", "Yogamatten Tragegurt",
      "Augenkissen", "Yogamatte MUDRA PRO", "Yogablock Kork Einzeln", "Yoga Mini-Rolle (Nackenrolle) Ø12 cm", "Yogamatten-Sticker „I am enough“",
      "Yogamatte WOOL aus Schurwolle", "Yogamatten-Sticker „einatmen. ausatmen.“", "„Almost Perfect“ Yogamatte MUDRA PRO",
      "Yogamatten-Sticker „Ich bin dankbar“", "„Almost Perfect“ Yogamatte PURE", "„Almost Perfect“ Yogamatte MUDRA", "Bezug für Yogarolle COVER Ø24 cm",
      "Yogamatten-Sticker „good vibes only“", "„Almost Perfect“ Yogamatte ARISE Travel", "„Almost Perfect“ Yogamatte MUDRA XL",
      "„Almost Perfect“ Yogamatte ARISE", "„Almost Perfect“ Yogamatte ARISE Cork", "„Almost Perfect“ Yogamatte MUDRA PRO XL"),
    // Grey comes from a sold-out product the original hides.
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz", "Grau", "Rosa", "Braun", "Align", "Wood Grain"] },
    description: "Alles für deine Yogapraxis an einem Ort: Matten, Blöcke, Gurte, Bolster und das passende Zubehör. Über die Kreise oben kommst du direkt in einen Bereich, mit den Filtern grenzt du nach Farbe, Material und Füllung ein.",
  },
  meditation: {
    title: "Meditation",
    nav: ["Meditation"],
    shortcuts: [
      { label: "Meditationskissen", icon: "cushion", key: "meditationskissen" },
      { label: "Meditationsmatten", icon: "mat", key: "meditationsmatten" },
      { label: "Meditationsbänke", icon: "bench", key: "meditationsbank" },
      { label: "Meditation Zubehör", icon: "block", key: "meditation-zubehor" },
      { label: "Meditationskissen Set", icon: "set", key: "meditations-sets" },
    ],
    models: modelsNamed("Yogarolle RESTORATIVE Ø24 cm", "Meditationskissen Lotus (H: 15cm)", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung",
      "Meditationskissen Lotus HOCH (H: 20cm)", "Zafu-Meditationskissen Zen", "Meditationsmatte Zabuton", "Yogakissen Halbmond Shanti",
      "Meditationskissen Lotus KLEIN (H: 10 cm)", "Zafu-Meditationskissen Zen Kapok", "Meditationsbank DHARMA Standard", "Rosenholz Mala (Dunkles Rosenholz)",
      "Tulsi Mala", "Rudraksha Mala", "Bio Dinkelspelzen - Dinkelspreu (kbA) 2kg", "Bio Dinkelspelzen -Dinkelspreu (kbA) 1kg", "Bezug für Yogarolle COVER Ø24 cm",
      "Bezug für Meditationskissen Lotus (H: 15cm)", "Bezug für Zabuton", "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung",
      "Bezug für Zafu-Meditationskissen Zen", "Bezug für Halbmond Kissen", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm)",
      "Bezug für Meditationskissen Lotus HOCH (H: 20cm)"),
    // Brown and yellow come from sold-out colours the original hides.
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz", "Rosa", "Braun", "Gelb", "Wood Grain"] },
    description: "Kissen, Zabuton, Bank und kleine Helfer: Hier findest du alles, was dir hilft, entspannt und aufrecht zu sitzen. Über die Kreise oben geht es direkt zu Kissen, Matten, Bänken, Zubehör und Sets.",
  },
  sale: {
    title: "SALE",
    nav: ["Sale"],
    shortcuts: [],
    models: modelsNamed("Yogamatte PURE Set", "Yoga Bolster Set Yin Yoga", "Yoga Set Yin Yoga Restorative S", "Yogarolle Set Yin Yoga", "Yoga-Zubehör Set",
      "Meditations-Set Lotus 20cm", "Yogamatte ARISE Set", "Yogamatte MUDRA PRO Set", "Yoga Zubehör + Reinigungs Set", "„Almost Perfect“ Yogamatte MUDRA PRO",
      "Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs", "NIA Womens Sweater", "FEND Mens Sweater", "REID Mens Tank-Top",
      "ELI Womens Tee (Short Sleeve)", "QUINN Mens Pants", "FIONA Womens Pants", "BECCA Leggings", "DANA Overall", "ALA Tank Tee", "MIKO Bralette",
      "Yoga Tasche + Gurt Set", "Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs", "Travel Essentials Set", "Practice Anywhere Set",
      "Deep Release Set", "Restore Comfort Set", "„Almost Perfect“ Yogamatte PURE", "„Almost Perfect“ Yogamatte ARISE", "„Almost Perfect“ Yogamatte MUDRA",
      "„Almost Perfect“ Yogamatte MUDRA PRO XL", "„Almost Perfect“ Yogamatte ARISE Travel", "„Almost Perfect“ Yogamatte ARISE Cork").map(reduced),
    sort: "standard",
    // Like the original: values of products it hides, which find nothing.
    filterValues: { colors: ["Beige", "Blau", "Rot", "Grün", "Terra", "Schwarz", "Rosa", "Braun", "Gelb", "Align"], heights: ["10", "15"], forms: ["Rund", "Zafu"] },
    description: "Reduzierte Lieblingsstücke: Yogakleidung, Sets mit 10 % Rabatt und „Almost Perfect“ Yogamatten mit kleinen Schönheitsfehlern.",
  },
  "bezug-yogabolster": {
    title: "Bezug Yogarolle",
    shortcuts: [],
    models: [rollCover],
    // Wood Grain comes from a cover colour that is sold out and hidden.
    filterValues: { colors: ["Beige", "Blau", "Rot", "Schwarz", "Wood Grain"] },
  },
};

// ---------- Search index ----------
// Everything the header search can find: one entry per mat model (with its
// material, colours and colour groups as extra search words) plus the
// bestsellers and set offers. Same names are merged into one entry.
const searchIndex = (() => {
  const byName = new Map();
  Object.values(categories).forEach((category) => {
    category.models.forEach((model) => {
      const known = byName.get(model.name);
      if (known) byName.set(model.name, { ...known, keywords: `${known.keywords} ${category.title}` });
      else if (!model.variants) byName.set(model.name, { ...model, keywords: category.title });
      else byName.set(model.name, {
        name: model.name,
        slug: model.slug,
        price: model.price,
        compareAt: model.compareAt,
        shape: model.shape || "mat",
        tint: model.variants[0].hex,
        keywords: [category.title, model.material, ...model.variants.flatMap((v) => [v.color, v.family])].filter(Boolean).join(" "),
      });
    });
  });
  [...Object.values(bestsellers), ...Object.values(bundles)].flat().forEach((item) => {
    const known = byName.get(item.name);
    byName.set(item.name, known ? { ...known, ...item, keywords: known.keywords } : item);
  });
  return [...byName.values()];
})();

// Pages the search can suggest besides products.
const sitePages = [
  { title: "Yogamatten", href: "kategorie.html?k=yogamatten", keywords: "yoga yogamatte yogamatten matte matten kategorie" },
  { title: "Yogamatten für Zuhause", href: "kategorie.html?k=yogamatte-fur-zuhause", keywords: "yogamatte yogamatten matte zuhause home kategorie" },
  { title: "Rutschfeste Yogamatte", href: "kategorie.html?k=rutschfeste-yogamatte", keywords: "yogamatte yogamatten matte rutschfest grip halt kategorie" },
  { title: "Studio Yogamatte", href: "kategorie.html?k=studio-yogamatte", keywords: "yogamatte yogamatten matte studio kategorie" },
  { title: "Reise Yogamatte", href: "kategorie.html?k=reise-yogamatte", keywords: "yogamatte yogamatten matte reise reisen travel faltbar kategorie" },
  { title: "Yoga-Sets", href: "kategorie.html?k=yoga-sets", keywords: "yoga set sets bundle paket geschenk kategorie" },
  { title: "„Almost Perfect“ Yogamatten", href: "kategorie.html?k=unperfekte-produkte", keywords: "almost perfect yogamatte yogamatten matte b-ware reduziert sale kategorie" },
  { title: "Yoga-Zubehör", href: "kategorie.html?k=yoga-zubehor", keywords: "yoga zubehör zubehoer hilfsmittel kategorie" },
  { title: "Yogataschen", href: "kategorie.html?k=yogataschen", keywords: "yoga tasche taschen yogatasche mattentasche kategorie" },
  { title: "Yogadecken", href: "kategorie.html?k=yogadecken", keywords: "yoga decke decken yogadecke kategorie" },
  { title: "Yoga-Handtücher", href: "kategorie.html?k=yoga-handtuecher", keywords: "yoga handtuch handtücher kategorie" },
  { title: "Yoga-Gurte", href: "kategorie.html?k=yoga-gurte", keywords: "yoga gurt gurte yogagurt kategorie" },
  { title: "Yoga Blöcke", href: "kategorie.html?k=yoga-block", keywords: "yoga block blöcke yogablock kork kategorie" },
  { title: "Yoga Bolster", href: "kategorie.html?k=yoga-bolster", keywords: "yoga bolster yogabolster kissen rolle kategorie" },
  { title: "Yoga Rolle", href: "kategorie.html?k=yoga-rolle", keywords: "yoga rolle yogarolle nackenrolle kategorie" },
  { title: "Yogamatten Zubehör", href: "kategorie.html?k=yoga-accessories", keywords: "yogamatte yogamatten zubehör add-ons mala dinkelspelz kategorie" },
  { title: "Yogamatten Spray", href: "kategorie.html?k=yogamatten-spray", keywords: "yogamatte spray reiniger reinigung kategorie" },
  { title: "Yogamatten-Sticker", href: "kategorie.html?k=yogamatten-sticker-1", keywords: "yogamatte sticker aufkleber kategorie" },
  { title: "Bezug Yogarolle", href: "kategorie.html?k=bezug-yogabolster", keywords: "bezug yogarolle cover bolster kategorie" },
  { title: "Meditationskissen", href: "kategorie.html?k=meditationskissen", keywords: "meditation meditationskissen kissen sitzkissen kategorie" },
  { title: "Rundkissen", href: "kategorie.html?k=rundkissen", keywords: "meditationskissen rund rundkissen lotus kissen kategorie" },
  { title: "Zafu-Kissen", href: "kategorie.html?k=zafu-kissen", keywords: "meditationskissen zafu kissen kategorie" },
  { title: "Halbmondkissen", href: "kategorie.html?k=yogakissen-halbmond", keywords: "meditationskissen halbmond kissen kategorie" },
  { title: "Meditationsmatten", href: "kategorie.html?k=meditationsmatten", keywords: "meditation meditationsmatte matten zabuton kategorie" },
  { title: "Meditationskissen Set", href: "kategorie.html?k=meditations-sets", keywords: "meditation set sets meditationsset geschenk kategorie" },
  { title: "Meditation Zubehör", href: "kategorie.html?k=meditation-zubehor", keywords: "meditation zubehör zubehoer augenkissen mala dinkelspelz kategorie" },
  { title: "Augenkissen", href: "kategorie.html?k=augenkissen", keywords: "augenkissen augenmaske entspannung lavendel kategorie" },
  { title: "Dinkelspelz Füllung", href: "kategorie.html?k=dinkelspelz-fullung", keywords: "dinkelspelz dinkelspelzen füllung füllmaterial nachfüllen kategorie" },
  { title: "Bezug Meditationskissen", href: "kategorie.html?k=bezug-meditationskissen", keywords: "bezug bezüge meditationskissen kissenbezug cover kategorie" },
  { title: "Bezug Meditationsmatte", href: "kategorie.html?k=bezug-meditationsmatte", keywords: "bezug bezüge meditationsmatte zabuton cover kategorie" },
  { title: "Meditationsbänke", href: "kategorie.html?k=meditationsbank", keywords: "meditation meditationsbank bank bänke kniebank hocker kategorie" },
  { title: "Yoga-Kleidung", href: "kategorie.html?k=yoga-kleidung", keywords: "bekleidung kleidung yogakleidung mode kategorie" },
  { title: "Yogakleidung Damen", href: "kategorie.html?k=yogakleidung-damen", keywords: "bekleidung kleidung yogakleidung damen frauen kategorie" },
  { title: "Hosen", href: "kategorie.html?k=yoga-hosen-pants-damen", keywords: "bekleidung hose hosen pants culotte damen kategorie" },
  { title: "Leggings", href: "kategorie.html?k=yoga-leggings-damen", keywords: "bekleidung leggings damen kategorie" },
  { title: "Yoga BH", href: "kategorie.html?k=yoga-bra-tops", keywords: "bekleidung bh bra bralette top damen kategorie" },
  { title: "Shirts", href: "kategorie.html?k=yoga-shirt", keywords: "bekleidung shirt shirts top tee damen kategorie" },
  { title: "Overalls", href: "kategorie.html?k=overalls", keywords: "bekleidung overall overalls jumpsuit damen kategorie" },
  { title: "Pullover", href: "kategorie.html?k=yoga-pullover", keywords: "bekleidung pullover sweater damen kategorie" },
  { title: "Yogakleidung Herren", href: "kategorie.html?k=yogakleidung-herren", keywords: "bekleidung kleidung yogakleidung herren männer kategorie" },
  { title: "Tanktops", href: "kategorie.html?k=tanktops", keywords: "bekleidung tanktop tank top herren kategorie" },
  { title: "Trainingshosen", href: "kategorie.html?k=trainingshose-jogginghose-herren", keywords: "bekleidung hose hosen jogginghose trainingshose herren kategorie" },
  { title: "Sweatshirts", href: "kategorie.html?k=yoga-sweatshirt-herren", keywords: "bekleidung sweatshirt pullover sweater herren kategorie" },
  { title: "Geschenkideen", href: "kategorie.html?k=geschenkideen", keywords: "geschenk geschenke geschenkideen schenken kategorie" },
  { title: "Geschenke unter 50€", href: "kategorie.html?k=unter-50", keywords: "geschenk geschenke unter 50 günstig kategorie" },
  { title: "Geschenke unter 100€", href: "kategorie.html?k=unter-100", keywords: "geschenk geschenke unter 100 kategorie" },
  { title: "Geschenke unter 120€", href: "kategorie.html?k=unter-120", keywords: "geschenk geschenke unter 120 kategorie" },
  { title: "Gutscheine", href: "kategorie.html?k=geschenk-gutscheine-1", keywords: "gutschein gutscheine gutscheinkarte geschenk kategorie" },
  { title: "Yoga & Meditation Set", href: "kategorie.html?k=sets-bundles", keywords: "set sets bundle bundles angebote sparen kategorie" },
  { title: "Yoga", href: "kategorie.html?k=yoga", keywords: "yoga übersicht alles yogamatten zubehör kategorie" },
  { title: "Meditation", href: "kategorie.html?k=meditation", keywords: "meditation übersicht alles meditationskissen kategorie" },
  { title: "SALE", href: "kategorie.html?k=sale", keywords: "sale angebote reduziert rabatt kategorie" },
  { title: "Startseite", href: "index.html", keywords: "start home lotuscraft bestseller sets" },
];

// Lower case without accents, so "grun" finds "Grün" and "Grün" finds "grun".
const searchText = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// Every word of the query has to appear somewhere in the entry.
function matchesQuery(query, text) {
  const words = searchText(query).split(/\s+/).filter(Boolean);
  const haystack = searchText(text);
  return words.length > 0 && words.every((word) => haystack.includes(word));
}

const searchProducts = (query) => searchIndex.filter((item) => matchesQuery(query, `${item.name} ${item.keywords || ""}`));
const searchPages = (query) => sitePages.filter((page) => matchesQuery(query, `${page.title} ${page.keywords}`));

// Stick-figure poses in a 100×100 scene: `body` is drawn as one thick stroke.
const poses = {
  lunge: { head: [39, 36], body: "M20 84H34L44 66L62 64L64 84M44 66L40 44M40 44L33 24" },
  legRaise: { head: [22, 80], body: "M28 82H54M54 82L80 84M54 82L60 46M32 84L46 88" },
  supported: { head: [18, 79], body: "M24 81H46M46 81L58 70L72 84M26 81L40 86", prop: `<ellipse cx="58" cy="80" rx="11" ry="6" fill="${COTTON}"/>` },
  warrior: { head: [50, 30], body: "M30 84L50 60M50 60L66 66L70 84M50 60V38M28 40H72" },
  seated: { head: [50, 44], body: "M32 84Q50 74 68 84M50 78V52M50 56L38 70L34 80M50 56L62 70L66 80", prop: `<ellipse cx="50" cy="86" rx="18" ry="5" fill="#6f6355"/>` },
  dog: { head: [36, 73], body: "M24 84L34 66L54 46L72 84" },
  tree: { head: [50, 33], body: "M50 84V41M50 70L40 64L49 57M50 41L42 31L50 19L58 31Z" },
};

// A drawn yoga scene (wall, floor, mat, figure) used in place of photos.
// Wall and floor reach past the 100×100 frame, so a caller can pass a
// taller or wider viewBox (portrait cards, wide banners) without empty edges.
function sceneSvg({ pose: poseName, wall, floor, mat, figure = "#3a3530" }, viewBox = "0 0 100 100", align = "xMidYMid") {
  const pose = poses[poseName];
  return `
      <svg viewBox="${viewBox}" preserveAspectRatio="${align} slice" aria-hidden="true">
        <rect x="-100" y="-100" width="300" height="172" fill="${wall}"/>
        <rect x="-100" y="72" width="300" height="128" fill="${floor}"/>
        <path d="M10 80H90L96 90H4Z" fill="${mat}"/>
        ${pose.prop || ""}
        <path d="${pose.body}" fill="none" stroke="${figure}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="${pose.head[0]}" cy="${pose.head[1]}" r="5" fill="${figure}"/>
      </svg>`;
}

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
  { label: "Bekleidung", icon: "clothing", promo: { kicker: "Trending", title: "Die Flow Styles sind zurück!", key: "yogakleidung-damen", scene: { pose: "warrior", wall: "#e3dcd3", floor: "#b49a7e", mat: "#4f5a4f", figure: "#6b2d3a" } }, children: [
    { label: "Damen", icon: "clothing", children: ["Alles in Damen-Kleidung", "Hosen", "Leggings", "Bra-Tops", "Shirts", "Overalls", "Pullover"] },
    { label: "Herren", icon: "clothing", children: ["Alles in Herren-Kleidung", "Tanktops", "Trainingshosen", "Sweatshirts & Pullover"] },
  ] },
  { label: "Geschenke", icon: "gift", promo: { kicker: "Angebote", title: "Spare beim Set-Kauf", key: "sets-bundles", product: "accessorySet" }, children: [
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
  blanket: '<rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18M3 14h18M6 18v2.5M10 18v2.5M14 18v2.5M18 18v2.5"/>',
  towel: '<path d="M6 4h12v13H6z"/><path d="M6 8h12M8 17v3M11 17v3M14 17v3M17 17v3"/>',
  crescent: '<path d="M4 16.5c0-6 3.6-10.5 8-10.5s8 4.5 8 10.5c-2-2-4.8-3-8-3s-6 1-8 3z"/>',
  zafu: '<ellipse cx="12" cy="8.5" rx="7" ry="2.5"/><path d="M5 8.5v7c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-7M8.5 11v6.5M12 11.5v6.5M15.5 11v6.5"/>',
  sticker: '<circle cx="12" cy="12" r="8.5"/><path d="M12 6.5c-1.2 1.4-1.2 3 0 4.4 1.2-1.4 1.2-3 0-4.4zM9 14.5h6M10 17h4"/>',
  bottle: '<path d="M10 3h4v3h-4zM9 6h6l1 3v12H8V9z"/>',
  set: '<rect x="3" y="11" width="9" height="9" rx="1"/><rect x="13" y="6" width="8" height="14" rx="1"/>',
  voucher: '<rect x="3" y="7" width="18" height="11" rx="1"/><path d="M9 7v11M3 12.5h6"/>',
  cushion: '<path d="M4 12c0-2 3.6-3.5 8-3.5s8 1.5 8 3.5v3c0 2-3.6 3.5-8 3.5S4 17 4 15z"/><path d="M4 12c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5"/>',
  bench: '<path d="M4 10l1-2h14l1 2zM6 10v8M18 10v8"/>',
  house: '<path d="M4 11l8-6 8 6v9H4z"/><path d="M10 20v-5h4v5"/>',
  studio: '<path d="M3 10l2-5h14l2 5zM4 10v10h16V10M10 20v-5h4v5M7 13h1M16 13h1"/>',
  suitcase: '<rect x="4" y="8" width="16" height="11" rx="1.5"/><path d="M9 8V5.5h6V8M4 13h16"/>',
  bag: '<rect x="3" y="10" width="18" height="7" rx="3.5"/><path d="M6 10c2-4 10-4 12 0"/>',
  strap: '<path d="M7 17l12-9M9 19l12-9"/><rect x="2.5" y="15.5" width="5" height="5" rx="2.5"/>',
  eyemask: '<path d="M3 10c3-3 15-3 18 0v2c-2 3-6 4-9 2-3 2-7 1-9-2z"/>',
  pants: '<path d="M7 3h10l1 18h-4l-2-11-2 11H6z"/>',
  leggings: '<path d="M8.5 3h7l1.5 18h-3L12 8.5 10 21H7z"/>',
  dress: '<path d="M10 3h4l-.5 4.5L17 20H7l3.5-12.5z"/>',
  bra: '<path d="M7 4.5 8 10M17 4.5 16 10"/><path d="M4 11c2.5-1.5 5.5-1 8 2 2.5-3 5.5-3.5 8-2v3c-2.7 1-5.4 1-8-1-2.6 2-5.3 2-8 1z"/>',
  overall: '<path d="M8.5 3v5M15.5 3v5"/><path d="M7.5 8h9l1.5 13h-4.5L12 13l-1.5 8H6z"/>',
  sweater: '<path d="M9 4l3 1 3-1 4 3 2 11-2 .5-2-7V20H7v-8.5l-2 7L3 18 5 7z"/>',
  top: '<path d="M8 4c1 2 2.5 3 4 3s3-1 4-3l3 3-2 3v10H7V10L5 7z"/>',
};

// Menu entries that already have a page in this rebuild; all others are "#".
const menuLinks = {
  "Alle Yogamatten": "kategorie.html?k=yogamatten",
  "Rutschfeste Yogamatten": "kategorie.html?k=rutschfeste-yogamatte",
  "Yogamatten für Zuhause": "kategorie.html?k=yogamatte-fur-zuhause",
  "Studio Yogamatten": "kategorie.html?k=studio-yogamatte",
  "Reise Yogamatten": "kategorie.html?k=reise-yogamatte",
  "Yogamatten-Set": "kategorie.html?k=yoga-sets",
  "Yoga-Sets": "kategorie.html?k=yoga-sets",
  "Alle Yoga-Sets": "kategorie.html?k=yoga-sets",
  "„Almost Perfect“ Yogamatten": "kategorie.html?k=unperfekte-produkte",
  "Alles in Yoga-Zubehör": "kategorie.html?k=yoga-zubehor",
  "Yogablöcke": "kategorie.html?k=yoga-block",
  "Yogataschen": "kategorie.html?k=yogataschen",
  "Yogadecken": "kategorie.html?k=yogadecken",
  "Yogagurte": "kategorie.html?k=yoga-gurte",
  "Yogahandtuch": "kategorie.html?k=yoga-handtuecher",
  "Alle Yoga-Bolster": "kategorie.html?k=yoga-bolster",
  "Yogabolster": "kategorie.html?k=yoga-bolster",
  "Yogarolle": "kategorie.html?k=yoga-rolle",
  "Alle Yogamatten Add-Ons": "kategorie.html?k=yoga-accessories",
  "Yogamatten Reiniger": "kategorie.html?k=yogamatten-spray",
  "Yogamatten Sticker": "kategorie.html?k=yogamatten-sticker-1",
  "Bezüge Yogarolle": "kategorie.html?k=bezug-yogabolster",
  "Alle Meditationskissen": "kategorie.html?k=meditationskissen",
  "Rundkissen": "kategorie.html?k=rundkissen",
  "Zafu-Kissen": "kategorie.html?k=zafu-kissen",
  "Halbmondkissen": "kategorie.html?k=yogakissen-halbmond",
  "Alle Meditationsmatten": "kategorie.html?k=meditationsmatten",
  "Meditations-Set": "kategorie.html?k=meditations-sets",
  "Meditations-Sets": "kategorie.html?k=meditations-sets",
  "Alle Meditations-Sets": "kategorie.html?k=meditations-sets",
  "Alles in Meditation-Zubehör": "kategorie.html?k=meditation-zubehor",
  "Augenkissen": "kategorie.html?k=augenkissen",
  "Dinkelspelz Füllmaterial": "kategorie.html?k=dinkelspelz-fullung",
  "Bezüge Meditationskissen": "kategorie.html?k=bezug-meditationskissen",
  "Bezüge Meditationsmatten": "kategorie.html?k=bezug-meditationsmatte",
  "Meditationsbänke": "kategorie.html?k=meditationsbank",
  "Alle Meditationsbänke": "kategorie.html?k=meditationsbank",
  "Alles in Damen-Kleidung": "kategorie.html?k=yogakleidung-damen",
  "Hosen": "kategorie.html?k=yoga-hosen-pants-damen",
  "Leggings": "kategorie.html?k=yoga-leggings-damen",
  "Bra-Tops": "kategorie.html?k=yoga-bra-tops",
  "Shirts": "kategorie.html?k=yoga-shirt",
  "Overalls": "kategorie.html?k=overalls",
  "Pullover": "kategorie.html?k=yoga-pullover",
  "Alles in Herren-Kleidung": "kategorie.html?k=yogakleidung-herren",
  "Tanktops": "kategorie.html?k=tanktops",
  "Trainingshosen": "kategorie.html?k=trainingshose-jogginghose-herren",
  "Sweatshirts & Pullover": "kategorie.html?k=yoga-sweatshirt-herren",
  "Alle Geschenkideen": "kategorie.html?k=geschenkideen",
  "Geschenkideen unter 50€": "kategorie.html?k=unter-50",
  "Geschenkideen unter 100€": "kategorie.html?k=unter-100",
  "Geschenkideen unter 120€": "kategorie.html?k=unter-120",
  "Gutscheine": "kategorie.html?k=geschenk-gutscheine-1",
  "Alle Gutscheine": "kategorie.html?k=geschenk-gutscheine-1",
  "Sale": "kategorie.html?k=sale",
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
  "Leggings": "leggings",
  "Overalls": "overall",
  "Trainingshosen": "pants",
  "Bra-Tops": "bra",
  "Shirts": "top",
  "Tanktops": "top",
  "Pullover": "sweater",
  "Sweatshirts & Pullover": "sweater",
};

const menuIcon = (name, className = "drawer__icon") =>
  `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${menuIcons[name]}</svg>`;
