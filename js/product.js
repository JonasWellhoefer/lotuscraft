// Product page: gallery, colour choice, add to cart, details.
// Which product is shown comes from the URL, e.g. produkt.html?p=yogamatte-pure.
// To add another product page, add an entry here and a `slug` to its card data.

// ---------- Product data ----------
// Name, price, colours, specs and ratings mirror the original shop. The texts
// are written for this student project (not copied from the original).
// `specs` also label the drawn pictures; `gallery` and each feature's
// `picture` pick drawings from `galleryPictures` / `featurePictures` below.

// Cards that show up under "Verwandte Produkte" on several pages (prices from the shop).
const relatedCards = {
  bag: { name: "Yogatasche PUNE", price: 29.95, shape: "bag", tint: "#c9bcae" },
  strap: { name: "Yogamatten Tragegurt", price: 14.95, shape: "strap", tint: COTTON },
  towel: { name: "Yoga Handtuch", price: 29.95, shape: "towel", tint: "#8f9a8c" },
  spray: { name: "Bio Yogamatten Spray", price: 12.95, shape: "spray", tint: "#e6e1d6" },
  belt: { name: "Yogagurt 100% Bio-Baumwolle", price: 6.49, compareAt: 12.95, shape: "strap", tint: "#8a7f72" },
  mudraPro: { name: "Yogamatte MUDRA PRO", slug: "yogamatte-mudra-pro", price: 99.95, shape: "mat", tint: "#3d3d3f" },
  eyePillow: { name: "Augenkissen", price: 27.95, shape: "eyePillow", tint: "#7f93ad" },
  ariseCork: { name: "Yogamatte ARISE CORK", slug: "yogamatte-arise-cork", price: 99.95, shape: "mat", tint: "#d6a571" },
  almostPerfectProXl: { name: "„Almost Perfect“ Yogamatte MUDRA PRO XL", price: 106.29, compareAt: 124.95, shape: "mat", tint: "#3d3d3f" },
};

// The ARISE mats are two-tone: the underside is a lighter shade of the top.
const ARISE_TONES = {
  "Balsam Green": { hex: "#5d7366", underside: "#8fae9b" },
  "Indigo Dust": { hex: "#6b7c95", underside: "#9cabc0" },
  "Graphite": { hex: "#4a4b4d", underside: "#8b8d95" },
  "Dark Cranberry": { hex: "#7a2a3a", underside: "#b06a80" },
  "Midnight Blue": { hex: "#2f3a5c", underside: "#6f8db0" },
};
const ariseColors = (...names) => names.map((name) => ({ name, ...ARISE_TONES[name] }));

// MUDRA and MUDRA XL share their info rows, as on the original.
const mudraFeatures = [
  {
    title: "Gut gepolstert, sicher im Stand",
    text: "5 mm geben Knien und Handgelenken spürbar Polster. Trotzdem steht die MUDRA stabil genug für Balancehaltungen – ideal, wenn du gerade mit Yoga anfängst oder sanfte Stile magst.",
    picture: "studio",
  },
  {
    title: "Leicht genug für jeden Weg",
    text: "Die MUDRA gehört zu den leichtesten Matten im Sortiment. Aufgerollt unter dem Arm oder am Tragegurt nimmst du sie mühelos mit ins Studio, in den Park oder zu Freund:innen.",
    picture: "carry",
  },
  {
    title: "Geprüft und frei von Latex",
    text: "Die Matte ist nach OEKO-TEX® STANDARD 100 auf Schadstoffe geprüft und enthält weder Latex noch BPA. Damit ist sie auch eine gute Wahl, wenn du auf Latex allergisch reagierst.",
    picture: "calm",
  },
  {
    title: "Griffig und schnell sauber",
    text: "Die Waffelstruktur der Oberfläche gibt dir Halt, auch wenn es im Flow anstrengender wird. Nach der Stunde genügt ein feuchtes Tuch – deshalb ist die MUDRA auch in vielen Yogastudios im Einsatz.",
    picture: "layers",
  },
];

// ---------- Meditation cushions ----------
// Colours (and which are sold out) come from the category data in shared.js;
// ratings, details and related products were read from the original.
const colorsOf = (name) => allModels.find((model) => model.name === name).variants
  .map((variant) => ({ name: variant.color, hex: variant.hex, soldOut: Boolean(variant.soldOut) }));

// A card for "Verwandte Produkte" from the category data: like the original,
// it shows the first colour that is in stock.
function relatedCard(name) {
  const model = allModels.find((candidate) => candidate.name === name);
  const first = model.variants?.find((variant) => !variant.soldOut) || model.variants?.[0] || {};
  return { name: model.name, slug: model.slug, price: first.price ?? model.price, compareAt: model.compareAt, shape: first.shape || model.shape, tint: first.hex || model.tint, badge: model.badge };
}

const ORGANIC = "Bio-Baumwolle (kbA)";
const SPELT_FILLING = "Bio-Dinkelspelz (kbA)";
const ORIGIN = "Bezug aus Indien, befüllt in Deutschland";
const cushionCare = (filling) => `
        <p>Den Bezug nimmst du einfach ab und wäschst ihn bei 30 °C. Bitte nicht in den Trockner geben, sondern an der Luft trocknen lassen.</p>
        <p>Das Innenkissen mit der ${filling === "Kapokwolle" ? "Kapokfüllung" : "Dinkelspelz-Füllung"} wird nicht gewaschen. Lüfte es ab und zu gut durch, dann bleibt die Füllung trocken und locker.</p>`;
const CUSHION_SUSTAINABILITY = `
        <p><strong>Plastikfreie Verpackung</strong> – ohne PVC und ohne erdölbasierte Kunststoffe.</p>
        <p><strong>Wertschöpfung in der EU</strong> – befüllt wird das Kissen in Deutschland.</p>
        <p><strong>GOTS-zertifizierte Bio-Baumwolle</strong> – der Standard prüft die ganze Lieferkette auf ökologische und faire Herstellung.</p>`;
const cushionGallery = ["cushionFront", "cushionSeated", "cushionTop", "cushionSize", "cushionInside", "cushionFabric"];
// The two-part opening as the original lists it.
const OPENING = (cover) => `Bezug: ${cover}; Innenkissen: Reißverschluss`;
const CUSHION_SCALES = (material, quality, filling) => [
  ["Material", material],
  ...(quality ? [["Qualität & Langlebigkeit", quality]] : []),
  ["Füllmaterial", filling],
];

const cushionDetails = {
  "meditationskissen-lotus-h-15cm": {
    name: "Meditationskissen Lotus (H: 15cm)",
    price: 39.95,
    rating: 4.86,
    reviewCount: 456,
    ratingScales: CUSHION_SCALES(4.86, 4.88, 4.8),
    // `size` labels the view from above, `dimensions` the side view (L, B, H in cm).
    specs: { shape: "lotusCushion15", seat: 15, size: "Ø 31", dimensions: [31, 31, 15], filling: SPELT_FILLING },
    facts: [["Material", ORGANIC], ["Sitzhöhe", "15 cm (standard)"], ["Maße (L × B × H)", "31 × 31 × 15 cm"], ["Gewicht", "1,6 kg"], ["Form", "Rund"], ["Herkunft", ORIGIN]],
    colors: colorsOf("Meditationskissen Lotus (H: 15cm)"),
    description: `
        <p>Das runde Lotus-Kissen ist der Allrounder für die Meditation: 15 cm hoch, 31 cm im Durchmesser und mit Bio-Dinkelspelz gefüllt. Die Füllung gibt nach, wenn du dich setzt, und hält dich trotzdem stabil – so kippt dein Becken leicht nach vorn und der Rücken bleibt von selbst aufrecht.</p>
        <p>Der Bezug aus Bio-Baumwolle trägt einen kleinen gestickten Lotus und lässt sich zum Waschen abnehmen.</p>`,
    features: [
      { title: "Passt zu fast jeder Sitzhaltung", text: "Ob Schneidersitz, halber Lotus oder Fersensitz: Mit 15 cm Höhe ist das Kissen für die meisten Menschen und Haltungen genau richtig. Wenn du nicht sicher bist, welche Höhe du brauchst, ist es ein guter Anfang.", picture: "sitting" },
      { title: "Höhe und Festigkeit selbst bestimmen", text: "Über die Öffnung nimmst du etwas Dinkelspelz heraus oder füllst nach. So wird das Kissen ein wenig flacher oder fester – ganz so, wie es sich für dich gut anfühlt.", picture: "refill" },
      { title: "Natürlich und pflegeleicht", text: "Bezug und Innenkissen sind aus Bio-Baumwolle, die Füllung ist Bio-Dinkelspelz. Den Bezug nimmst du ab und wäschst ihn bei 30 °C.", picture: "wash" },
      { title: "Drei Höhen zur Wahl", text: "Neben 15 cm gibt es das Lotus-Kissen auch mit 10 cm für bewegliche Hüften und mit 20 cm, wenn du mehr Unterstützung brauchst.", picture: "heights" },
    ],
    reviews: [
      { name: "Hanna", place: "Bremen, DE", color: "Natur", stars: 5, days: 2, text: "Endlich sitze ich 20 Minuten, ohne dass mir die Füße einschlafen. Das Kissen ist fester, als ich dachte – genau richtig." },
      { name: "Jonas", place: "Linz, AT", color: "Anthrazit", stars: 5, days: 4, text: "Gute Höhe für den Schneidersitz. Ich habe etwas Füllung herausgenommen, jetzt passt es perfekt." },
      { name: "Anonym", place: "", color: "Balsam Green", stars: 5, days: 6, text: "Die Farbe ist ruhig und schön, die Stickerei dezent. Steht bei mir auch tagsüber gern im Wohnzimmer." },
      { name: "Petra", place: "Dortmund, DE", color: "Light Taupe", stars: 4, days: 9, text: "Sehr bequem. Am Anfang raschelt der Dinkelspelz etwas, daran gewöhnt man sich schnell." },
      { name: "Simon", place: "Luzern, CH", color: "Indigo Dust", stars: 5, days: 13, text: "Bezug abgenommen, gewaschen, wieder drauf – sieht aus wie neu. Praktisch, wenn man täglich übt." },
      { name: "Clara", place: "Kiel, DE", color: "Kurkuma", stars: 3, days: 20, text: "Für meine steifen Hüften etwas zu niedrig, ich hätte die hohe Variante nehmen sollen. Verarbeitung top." },
    ],
    related: ["Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", "Meditationsmatte Zabuton", "Meditationskissen Lotus KLEIN (H: 10 cm)", "Yogarolle RESTORATIVE Ø24 cm"],
  },

  "meditationskissen-lotus-h-15cm-ohne-bestickung": {
    name: "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung",
    price: 34.95,
    rating: 4.89,
    reviewCount: 502,
    ratingScales: CUSHION_SCALES(4.87, 4.88, 4.84),
    // The original lists 20 cm as the height here, although it sits at 15 cm.
    specs: { shape: "plainCushion", seat: 15, size: "Ø 31", dimensions: [31, 31, 20], filling: SPELT_FILLING },
    facts: [["Material", ORGANIC], ["Füllung", SPELT_FILLING], ["Sitzhöhe", "15 cm (standard)"], ["Maße (L × B × H)", "31 × 31 × 20 cm"], ["Gewicht", "1,5 kg"], ["Form", "Rund"],
      ["Oberstoff", `100 % ${ORGANIC}`], ["Innenstoff", `100 % ${ORGANIC}`], ["Öffnung", OPENING("Reißverschluss")], ["Herkunft", ORIGIN]],
    colors: colorsOf("Meditationskissen Lotus (H: 15cm) - Ohne Bestickung"),
    description: `
        <p>Das Lotus-Kissen in seiner schlichtesten Form: ohne Stickerei, sonst genau wie das Original mit 15 cm Sitzhöhe und einer Füllung aus Bio-Dinkelspelz.</p>
        <p>Bezug und Innenkissen schließen beide mit Reißverschluss. So kommst du leicht an die Füllung und nimmst den Bezug zum Waschen ab.</p>`,
    features: [
      { title: "Schlicht und vertraut", text: "Kein Logo, keine Stickerei – nur Stoff und Farbe. Das Kissen fügt sich in jeden Raum ein und sitzt sich so angenehm wie sein besticktes Gegenstück.", picture: "sitting" },
      { title: "Deine Höhe, dein Gefühl", text: "Mit dem Reißverschluss am Innenkissen nimmst du Dinkelspelz heraus oder füllst nach, bis Höhe und Festigkeit für dich stimmen.", picture: "refill" },
      { title: "Pflegeleicht für jeden Tag", text: "Den Bezug aus Bio-Baumwolle wäschst du bei 30 °C. Danach an der Luft trocknen lassen, wieder aufziehen, fertig.", picture: "wash" },
    ],
    reviews: [
      { name: "Lisa", place: "Mainz, DE", color: "Lavender Fog", stars: 5, days: 1, text: "Die Farbe ist ein Traum und das Kissen fühlt sich sehr hochwertig an. Ohne Stickerei gefällt es mir sogar besser." },
      { name: "Markus", place: "Bern, CH", color: "Anthrazit", stars: 5, days: 3, text: "Stabil, schlicht, gut verarbeitet. Reißverschluss läuft leicht." },
      { name: "Anonym", place: "", color: "Natur", stars: 4, days: 7, text: "Schönes Kissen. Für mich war es anfangs zu hoch, mit etwas weniger Füllung passt es jetzt." },
      { name: "Eva", place: "Wels, AT", color: "Grassland", stars: 5, days: 11, text: "Das Muster ist dezent und lebendig zugleich. Sitze jeden Morgen zehn Minuten darauf." },
      { name: "Tobias", place: "Rostock, DE", color: "Indigo Dust", stars: 5, days: 16, text: "Habe schon das zweite gekauft, damit auch meine Freundin eins hat. Klare Empfehlung." },
      { name: "Sophie", place: "Bonn, DE", color: "Light Taupe", stars: 4, days: 24, text: "Bequem und formstabil. Etwas schwerer, als ich erwartet hatte, aber das spricht für die Füllung." },
    ],
    related: ["Meditationskissen Lotus (H: 15cm)", "Meditationsmatte Zabuton", "Meditationskissen Lotus KLEIN (H: 10 cm)", "Meditationskissen Lotus HOCH (H: 20cm)"],
  },

  "meditationskissen-lotus-hoch-h-20cm": {
    name: "Meditationskissen Lotus HOCH (H: 20cm)",
    price: 44.95,
    rating: 4.9,
    reviewCount: 480,
    ratingScales: CUSHION_SCALES(4.89, 4.87, 4.79),
    specs: { shape: "lotusCushion20", seat: 20, size: "Ø 31", dimensions: [31, 31, 20], filling: SPELT_FILLING },
    facts: [["Material", ORGANIC], ["Füllung", SPELT_FILLING], ["Sitzhöhe", "20 cm (hoch)"], ["Maße (L × B × H)", "31 × 31 × 20 cm"], ["Gewicht", "1,9 kg"], ["Form", "Rund"],
      ["Oberstoff", `100 % ${ORGANIC}`], ["Innenstoff", `100 % ${ORGANIC}`], ["Öffnung", OPENING("Kordelzug")], ["Herkunft", ORIGIN]],
    colors: colorsOf("Meditationskissen Lotus HOCH (H: 20cm)"),
    description: `
        <p>Die hohe Variante des Lotus-Kissens bringt dich 20 cm über den Boden. Das entlastet Hüften und Knie, wenn sie im Sitzen noch nicht so weit nachgeben – und macht das aufrechte Sitzen leichter.</p>
        <p>Gefüllt ist es mit Bio-Dinkelspelz, der Bezug aus Bio-Baumwolle schließt mit einem Kordelzug.</p>`,
    features: [
      { title: "Mehr Höhe, mehr Entspannung", text: "Je höher du sitzt, desto weniger müssen Hüften und Knie nachgeben. Auf 20 cm findest du leichter eine Haltung, in der du lange ruhig sitzen kannst.", picture: "sitting" },
      { title: "Hilfe bei steifen Hüften", text: "Wenn deine Knie im Schneidersitz weit über dem Boden schweben, ist das hohe Kissen oft die bessere Wahl als die Standardhöhe von 15 cm.", picture: "heights" },
      { title: "Anpassbar an deinen Körper", text: "Über den Reißverschluss am Innenkissen nimmst du Dinkelspelz heraus oder füllst nach – für genau die Höhe und Festigkeit, die du brauchst.", picture: "refill" },
    ],
    reviews: [
      { name: "Gerd", place: "Kassel, DE", color: "Anthrazit", stars: 5, days: 2, text: "Mit 1,90 m und unbeweglichen Hüften war jedes andere Kissen zu flach. Dieses passt endlich." },
      { name: "Anja", place: "Villach, AT", color: "Natur", stars: 5, days: 5, text: "Mein Rücken dankt es mir. Ich sitze aufrechter und ohne Ziehen in den Knien." },
      { name: "Anonym", place: "", color: "Kurkuma", stars: 5, days: 8, text: "Die neue Farbe bringt richtig Wärme ins Zimmer. Sehr bequem." },
      { name: "Ralf", place: "Erfurt, DE", color: "Light Taupe", stars: 4, days: 12, text: "Etwas hoch für den Lotussitz, für den Fersensitz ideal. Gut verarbeitet." },
      { name: "Nadine", place: "Basel, CH", color: "Indigo Dust", stars: 5, days: 17, text: "Habe vorher auf zwei gestapelten Kissen gesessen. Das hier ist viel stabiler." },
      { name: "Uwe", place: "Augsburg, DE", color: "Balsam Green", stars: 4, days: 26, text: "Fest und hoch, wie beschrieben. Der Kordelzug hält gut, ist beim Abziehen aber etwas fummelig." },
    ],
    related: ["Meditationsmatte Zabuton", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", "Meditationskissen Lotus (H: 15cm)", "Bezug für Meditationskissen Lotus HOCH (H: 20cm)"],
  },

  "meditationskissen-lotus-klein-h-10-cm": {
    name: "Meditationskissen Lotus KLEIN (H: 10 cm)",
    price: 37.95,
    rating: 4.9,
    reviewCount: 247,
    ratingScales: CUSHION_SCALES(4.89, 4.88, 4.8),
    specs: { shape: "lotusCushion10", seat: 10, size: "Ø 31", dimensions: [31, 31, 10], filling: SPELT_FILLING },
    facts: [["Material", ORGANIC], ["Sitzhöhe", "10 cm (niedrig)"], ["Maße (L × B × H)", "31 × 31 × 10 cm"], ["Gewicht", "1,2 kg"], ["Form", "Rund"], ["Herkunft", ORIGIN]],
    colors: colorsOf("Meditationskissen Lotus KLEIN (H: 10 cm)"),
    description: `
        <p>Das niedrige Lotus-Kissen hebt dich nur 10 cm an. Damit sitzt du nah am Boden – ideal, wenn deine Hüften beweglich sind und dir die Standardhöhe zu hoch vorkommt.</p>
        <p>Auch als Unterlage beim Yoga, etwa im Fersensitz, oder als zweites Kissen für Kinder ist es beliebt. Gefüllt ist es mit Bio-Dinkelspelz.</p>`,
    features: [
      { title: "Für eine bodennahe Praxis", text: "Auf 10 cm sitzt du fast so, wie du es vom Boden kennst – nur mit leicht angehobenem Becken. So bleibt der Rücken aufrecht, ohne dass du hoch thronst.", picture: "sitting" },
      { title: "Ideal bei beweglichen Hüften", text: "Wenn deine Knie im Schneidersitz schon fast den Boden berühren, ist das niedrige Kissen meist die bessere Wahl als 15 oder 20 cm.", picture: "heights" },
      { title: "Anpassbar und pflegeleicht", text: "Dinkelspelz lässt sich entnehmen oder nachfüllen, den Bezug aus Bio-Baumwolle wäschst du bei 30 °C.", picture: "wash" },
    ],
    reviews: [
      { name: "Mira", place: "Freiburg, DE", color: "Balsam Green", stars: 5, days: 3, text: "Ich bin sehr beweglich und alle anderen Kissen waren mir zu hoch. Das hier ist perfekt." },
      { name: "Anonym", place: "", color: "Natur", stars: 5, days: 6, text: "Nutze es für den Fersensitz im Yoga, entlastet die Knöchel spürbar." },
      { name: "Daniel", place: "Graz, AT", color: "Indigo Dust", stars: 4, days: 10, text: "Gut verarbeitet, schöne Farbe. Für längere Meditationen nehme ich doch lieber das 15er." },
      { name: "Ella", place: "Hannover, DE", color: "Light Taupe", stars: 5, days: 15, text: "Meine Tochter (8) meditiert jetzt mit. Die Größe passt für Kinder richtig gut." },
      { name: "Robert", place: "Chur, CH", color: "Anthrazit", stars: 5, days: 19, text: "Flach, aber erstaunlich stabil. Genau das, was ich gesucht habe." },
      { name: "Jana", place: "Würzburg, DE", color: "Kurkuma", stars: 4, days: 28, text: "Tolle Farbe, die Füllung setzt sich anfangs etwas. Mit einer Handvoll Dinkelspelz mehr ist es top." },
    ],
    related: ["Yogakissen Halbmond Shanti", "Meditationskissen Lotus (H: 15cm)", "Meditationsmatte Zabuton", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung"],
  },

  "zafu-meditationskissen-zen": {
    name: "Zafu-Meditationskissen Zen",
    price: 39.95,
    rating: 4.83,
    reviewCount: 269,
    ratingScales: CUSHION_SCALES(4.87, 4.88, 4.75),
    specs: { shape: "zafu", seat: 15, size: "Ø 35", dimensions: [35, 35, 15], filling: SPELT_FILLING },
    facts: [["Material", ORGANIC], ["Sitzhöhe", "15 cm (standard)"], ["Maße (L × B × H)", "35 × 35 × 15 cm"], ["Gewicht", "1,7 kg"], ["Form", "Zafu"], ["Herkunft", ORIGIN]],
    colors: colorsOf("Zafu-Meditationskissen Zen"),
    description: `
        <p>Das Zafu ist das klassische Meditationskissen aus der Zen-Tradition: rund, gefaltet und mit einer breiten Sitzfläche von 35 cm. Die Falten am Rand halten das Kissen in Form, auch wenn du lange darauf sitzt.</p>
        <p>Gefüllt mit Bio-Dinkelspelz, gibt es dir festen Halt und passt sich trotzdem deinem Becken an.</p>`,
    features: [
      { title: "Aufrecht und stabil sitzen", text: "Die breite, feste Sitzfläche trägt dich auch in längeren Meditationen. Dein Becken kippt leicht nach vorn, der Rücken richtet sich wie von selbst auf.", picture: "sitting" },
      { title: "Die klassische Zafu-Form", text: "Rundum gefaltet und 35 cm breit: Das Zafu bietet mehr Platz als ein Lotus-Kissen und bleibt durch die Falten formstabil.", picture: "topView" },
      { title: "Dinkelspelz oder Kapok?", text: "Dinkelspelz ist fest und formbar, Kapok weich und leicht. Wer gern fest sitzt, nimmt dieses Kissen; wer es weicher mag, die Kapok-Variante.", picture: "fillings" },
      { title: "Fester Halt durch Dinkelspelz", text: "Die Spelzen verschieben sich beim Hinsetzen und bilden eine Mulde, die dich stützt. Nach dem Aufschütteln ist das Zafu wieder in Form.", picture: "refill" },
    ],
    reviews: [
      { name: "Kai", place: "Lübeck, DE", color: "Natur", stars: 5, days: 2, text: "Klassisches Zafu, sehr stabil. Ich sitze darauf jeden Abend 30 Minuten." },
      { name: "Anonym", place: "", color: "Anthrazit", stars: 5, days: 5, text: "Die breite Sitzfläche ist für mich der große Unterschied zum runden Kissen." },
      { name: "Vera", place: "St. Gallen, CH", color: "Balsam Green", stars: 4, days: 9, text: "Schön fest. Das Abziehen des Bezugs ist wegen der Falten etwas aufwendiger." },
      { name: "Moritz", place: "Bielefeld, DE", color: "Indigo Dust", stars: 5, days: 14, text: "Formstabil auch nach Monaten. Sieht im Zimmer richtig edel aus." },
      { name: "Ines", place: "Klagenfurt, AT", color: "Light Taupe", stars: 4, days: 21, text: "Gutes Kissen, für mich etwas zu fest – ich habe Füllung herausgenommen." },
      { name: "Paula", place: "Potsdam, DE", color: "Kurkuma", stars: 5, days: 27, text: "Die Farbe ist kräftig und warm, die Verarbeitung tadellos." },
    ],
    related: ["Meditationsmatte Zabuton", "Meditationskissen Lotus KLEIN (H: 10 cm)", "Bezug für Zafu-Meditationskissen Zen", "Yogakissen Halbmond Shanti"],
  },

  "zafu-meditationskissen-zen-kapok": {
    name: "Zafu-Meditationskissen Zen Kapok",
    price: 44.95,
    rating: 4.86,
    reviewCount: 49,
    buyboxCount: 73, // the original counts more reviews up top than in its review list
    ratingScales: CUSHION_SCALES(4.96, null, 4.95),
    specs: { shape: "zafu", seat: 15, size: "Ø 35", dimensions: [35, 35, 15], filling: "Kapokwolle" },
    facts: [["Material", ORGANIC], ["Füllung", "Kapokwolle"], ["Sitzhöhe", "15 cm (standard)"], ["Maße (L × B × H)", "35 × 35 × 15 cm"], ["Gewicht", "0,9 kg"], ["Form", "Zafu"],
      ["Oberstoff", `100 % ${ORGANIC}`], ["Innenstoff", `100 % ${ORGANIC}`], ["Öffnung", OPENING("Reißverschluss")], ["Herkunft", ORIGIN]],
    colors: colorsOf("Zafu-Meditationskissen Zen Kapok"),
    description: `
        <p>Das Zafu mit Kapokfüllung ist die weiche, leichte Variante des Klassikers. Kapok ist eine pflanzliche Faser aus den Samenkapseln des Kapokbaums – flauschig, luftig und mit 0,9 kg deutlich leichter als Dinkelspelz.</p>
        <p>Du sitzt etwas tiefer im Kissen, bleibst aber dank der Zafu-Form stabil.</p>`,
    features: [
      { title: "Weich sitzen, stabil bleiben", text: "Kapok gibt mehr nach als Dinkelspelz. Das fühlt sich wie ein Polster an, während die gefaltete Form dich trotzdem aufrecht hält.", picture: "sitting" },
      { title: "Dinkelspelz oder Kapok?", text: "Kapok ist weich, leicht und raschelt nicht. Wenn du lieber fest und formbar sitzt, ist das Zafu mit Dinkelspelz die bessere Wahl.", picture: "fillings" },
    ],
    reviews: [
      { name: "Nora", place: "Ulm, DE", color: "Anthrazit", stars: 5, days: 4, text: "So weich und trotzdem stabil. Und es raschelt nicht – für mich der wichtigste Punkt." },
      { name: "Anonym", place: "", color: "Anthrazit", stars: 5, days: 9, text: "Viel leichter als mein altes Dinkelkissen, ich nehme es gern mit zum Retreat." },
      { name: "Florian", place: "Dornbirn, AT", color: "Anthrazit", stars: 4, days: 15, text: "Sehr bequem. Nach ein paar Wochen etwas flacher, Aufschütteln hilft." },
      { name: "Greta", place: "Göttingen, DE", color: "Anthrazit", stars: 5, days: 22, text: "Perfekt für längere Sitzungen. Leider gerade ausverkauft, sonst hätte ich ein zweites bestellt." },
      { name: "Henrik", place: "Winterthur, CH", color: "Anthrazit", stars: 5, days: 30, text: "Hochwertiger Stoff, gleichmäßige Falten, angenehm weich." },
    ],
    related: ["Zafu-Meditationskissen Zen", "Bezug für Zafu-Meditationskissen Zen", "Meditationsmatte Zabuton", "Yogakissen Halbmond Shanti"],
  },

  "yogakissen-halbmond-shanti": {
    name: "Yogakissen Halbmond Shanti",
    price: 39.95,
    rating: 4.84,
    reviewCount: 333,
    ratingScales: CUSHION_SCALES(4.7, 4.78, 4.59),
    specs: { shape: "crescent", seat: 15, size: "28 × 40", dimensions: [40, 28, 12], filling: SPELT_FILLING },
    facts: [["Material", ORGANIC], ["Füllung", SPELT_FILLING], ["Sitzhöhe", "15 cm (standard)"], ["Maße (L × B × H)", "28 × 40 × 12 cm"], ["Gewicht", "1,1 kg"], ["Form", "Halbrund"],
      ["Oberstoff", `100 % ${ORGANIC}`], ["Innenstoff", `100 % ${ORGANIC}`], ["Öffnung", OPENING("Reißverschluss")], ["Herkunft", ORIGIN]],
    colors: colorsOf("Yogakissen Halbmond Shanti"),
    description: `
        <p>Die Halbmondform lässt vorne Platz für die Beine: Die Oberschenkel liegen nicht auf dem Kissen auf, das Becken kippt sanft nach vorn, und du sitzt lange bequem im Schneidersitz.</p>
        <p>Mit 12 cm Höhe ist das Kissen etwas niedriger als die runden Lotus-Kissen. Gefüllt ist es mit Bio-Dinkelspelz.</p>`,
    features: [
      { title: "Platz für die Beine", text: "Weil die Vorderseite nach innen gewölbt ist, liegen deine Oberschenkel frei. Das entlastet Hüften und Knie, gerade wenn sie im Schneidersitz noch nicht bis zum Boden reichen.", picture: "sitting" },
      { title: "Die Halbmondform", text: "40 cm breit und 28 cm tief: Das Kissen gibt deinem Becken eine breite Auflage und den Beinen vorne Raum.", picture: "topView" },
      { title: "Niedrig und nah am Boden", text: "Mit 12 cm Höhe sitzt du etwas tiefer als auf den runden Kissen – angenehm, wenn du dich nicht hoch über dem Boden fühlen möchtest.", picture: "sideView" },
      { title: "Halt durch Dinkelspelz", text: "Die Spelzen formen sich beim Hinsetzen zu einer Mulde, die dich stützt. Den Bezug wäschst du bei 30 °C.", picture: "refill" },
    ],
    reviews: [
      { name: "Lena", place: "Münster, DE", color: "Indigo Dust", stars: 5, days: 1, text: "Die Halbmondform ist für meine Knie ein Segen. Kein Druck mehr auf den Oberschenkeln." },
      { name: "Anonym", place: "", color: "Natur", stars: 4, days: 6, text: "Bequem, aber etwas niedriger, als ich erwartet hatte. Mit Zabuton darunter ideal." },
      { name: "Stefan", place: "Leoben, AT", color: "Anthrazit", stars: 5, days: 10, text: "Nutze es auch beim Yin Yoga als Stütze unter den Knien. Vielseitig." },
      { name: "Marie", place: "Aachen, DE", color: "Light Taupe", stars: 4, days: 16, text: "Schöne Form, solide Verarbeitung. Der Dinkelspelz verrutscht anfangs etwas nach außen." },
      { name: "Jan", place: "Thun, CH", color: "Balsam Green", stars: 5, days: 23, text: "Das bequemste Kissen, das ich bisher hatte. Klare Empfehlung bei steifen Hüften." },
      { name: "Birgit", place: "Trier, DE", color: "Indigo Dust", stars: 3, days: 29, text: "Gutes Kissen, für mich aber zu niedrig. Werde die hohe Lotus-Variante ausprobieren." },
    ],
    related: ["Meditationsmatte Zabuton", "Bezug für Halbmond Kissen", "Yogagurt 100% Bio-Baumwolle", "Meditationskissen Lotus HOCH (H: 20cm)"],
  },
};
// Everything a cushion page shares with the others.
Object.values(cushionDetails).forEach((cushion) => Object.assign(cushion, {
  gallery: cushionGallery,
  swatch: "cushionFront",
  care: cushionCare(cushion.specs.filling),
  sustainability: CUSHION_SUSTAINABILITY,
  related: cushion.related.map(relatedCard),
}));

const productDetails = {
  ...cushionDetails,
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
    // `short` is the material in a few words, for picture labels; `mm` the thickness.
    specs: { material: "PU-Oberfläche, Unterseite aus Naturkautschuk", short: "PU + Naturkautschuk", length: 183, width: 66, mm: 4, weight: "2,7 kg", origin: "China" },
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
    gallery: ["rolled", "top", "standing", "layers", "lunge", "warrior"],
    description: `
        <p>Die PURE ist für dynamische Yogastile gemacht: Ihre Oberfläche aus PU (Polyurethan) gibt dir auch dann sicheren Halt, wenn du ins Schwitzen kommst – ideal für Vinyasa und Power Yoga.</p>
        <p>Die Unterseite aus Naturkautschuk liegt fest auf dem Boden und dämpft angenehm. Dark Cranberry und Balsam Green haben eine fein strukturierte, matte Oberfläche und eine Unterseite im gleichen Farbton. Alle anderen Farben sind glatt und haben eine schwarze Unterseite.</p>`,
    care: `
        <p>Am besten mit einem weichen Tuch und einer Mischung aus Wasser und Apfelessig (1:1) abwischen. Keine Seife verwenden und nicht in die Waschmaschine geben.</p>
        <p>Vor direkter Sonne und großer Hitze schützen und nach dem Reinigen trocknen lassen, bevor du die Matte aufrollst. Cremes und Öle auf der Haut hinterlassen Flecken und verringern den Grip.</p>`,
    sustainability: `
        <p><strong>Plastikfreie Verpackung</strong> – ohne PVC und ohne erdölbasierte Kunststoffe.</p>`,
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
      relatedCards.bag,
      relatedCards.strap,
      { name: "„Almost Perfect“ Yogamatte PURE", price: 67.95, compareAt: 79.95, shape: "mat", tint: "#7a2a3a" },
      bestsellers.yoga[0], // Yogablock Kork 2er Set
    ],
  },

  "yogamatte-arise": {
    name: "Yogamatte ARISE",
    subtitle: "Die Rutschfeste: Maximaler Grip in allen Posen - Made in Spain",
    price: 89.95,
    rating: 4.71,
    reviewCount: 320,
    ratingScales: [
      ["Rutschfestigkeit", 4.9],
      ["Dämpfung", 4.57],
      ["Qualität und Langlebigkeit", 4.65],
    ],
    specs: { material: "Naturkautschuk mit 15 % Recycling-Latex", short: "Naturkautschuk", length: 185, width: 65, mm: 4, weight: "2,0 kg", origin: "Spanien" },
    // Wild Ginger is sold out and, as on the original, not offered at all.
    colors: ariseColors("Balsam Green", "Indigo Dust", "Graphite", "Dark Cranberry", "Midnight Blue"),
    gallery: ["rolled", "standing", "layers", "top", "forestWarrior", "forestTree"],
    description: `
        <p>Die ARISE ist die Matte für alle, die maximalen Halt suchen. Ihre Oberfläche aus Naturkautschuk bleibt auch dann griffig, wenn du ins Schwitzen kommst – ideal für Vinyasa, Power Yoga und Ashtanga.</p>
        <p>Ober- und Unterseite sind aus Naturkautschuk, du kannst die Matte also wenden. Im Kern stecken 15 % recyceltes Latex, das sie formstabil macht. Hergestellt wird sie in Spanien.</p>
        <p>Naturkautschuk ist ein Naturmaterial: Mit der Zeit zeigen sich Gebrauchsspuren und leichte Farbveränderungen. Die ARISE ist für die eigene Praxis gedacht – für Studios sind MUDRA und MUDRA PRO die bessere Wahl.</p>`,
    care: `
        <p>Am besten mit einer weichen Bürste oder einem Tuch und einer Mischung aus Wasser und Apfelessig (1:1) reinigen. Keine Seife verwenden und nicht in die Waschmaschine geben.</p>
        <p>Eine feuchte Matte erst trocknen lassen, dann aufrollen. Vor direkter Sonne schützen und am besten in einer Tasche oder im Schrank aufbewahren. Der typische Gummigeruch ist am Anfang stärker und lässt mit der Zeit nach.</p>`,
    sustainability: `
        <p><strong>Hergestellt in Spanien</strong> – kurze Wege innerhalb der EU.</p>
        <p><strong>Ohne PVC</strong> – Naturkautschuk mit 15 % recyceltem Latex.</p>
        <p><strong>Schadstoffgeprüft</strong> nach OEKO-TEX® STANDARD 100.</p>`,
    features: [
      {
        title: "Halt, auch wenn es schweißtreibend wird",
        text: "Naturkautschuk greift von Natur aus. Auf der ARISE bleiben Hände und Füße auch im schnellen Flow dort, wo du sie hinsetzt – kein Nachrutschen, kein Zurechtrücken. So bleibt deine Aufmerksamkeit bei Atem und Bewegung.",
        picture: "grip",
      },
      {
        title: "Zwei Seiten, eine robuste Matte",
        text: "Ober- und Unterseite sind aus Naturkautschuk, du kannst also beide nutzen – zum Beispiel eine Seite drinnen und eine draußen. Im Kern stecken 15 % recyceltes Latex. Das macht die Matte formstabil und verlängert ihre Lebensdauer.",
        picture: "reversible",
      },
      {
        title: "In Spanien gefertigt und geprüft",
        text: "Die ARISE wird in Spanien hergestellt und ist nach OEKO-TEX® STANDARD 100 auf Schadstoffe geprüft. Sie kommt ohne PVC aus und ist angenehm auf der Haut – eine gute Wahl, wenn dir natürliche Materialien wichtig sind.",
        picture: "forest",
      },
      {
        title: "Weich genug, fest genug",
        text: "4 mm Naturkautschuk polstern Knie und Handgelenke, ohne dass du in Balancehaltungen wackelst. Mit 185 × 65 cm bietet die Matte genug Fläche für weite Schritte und ruhige Momente am Ende der Stunde.",
        picture: "size",
      },
    ],
    reviews: [
      { name: "Hannah", place: "Bremen, DE", color: "Balsam Green", stars: 5, days: 1, text: "So rutschfest war noch keine meiner Matten. Selbst im Power Yoga bleiben die Hände genau da, wo sie hingehören." },
      { name: "Clara", place: "Dresden, DE", color: "Midnight Blue", stars: 5, days: 2, text: "Das Blau sieht in echt noch schöner aus als auf den Bildern. Grip und Dämpfung passen für mich perfekt." },
      { name: "Anonym", place: "", color: "Indigo Dust", stars: 5, days: 4, text: "Dass man beide Seiten nutzen kann, finde ich praktisch – die hellere Unterseite nehme ich für Yoga im Garten." },
      { name: "Felix", place: "Bern, CH", color: "Graphite", stars: 3, days: 5, text: "Der Gummigeruch war anfangs sehr stark. Nach zwei Wochen auf dem Balkon ist es deutlich besser geworden." },
      { name: "Marie", place: "Karlsruhe, DE", color: "Dark Cranberry", stars: 5, days: 7, text: "Beim Vinyasa sind mir bisher ständig die Hände weggerutscht. Auf der ARISE ist das vorbei." },
      { name: "Sophie", place: "Linz, AT", color: "Balsam Green", stars: 5, days: 9, text: "Fühlt sich weich und trotzdem stabil an. Meine Knie freuen sich über die 4 mm." },
      { name: "David", place: "Kiel, DE", color: "Graphite", stars: 4, days: 13, text: "Top Qualität. Mit 2 kg ist sie mir für den Weg ins Studio etwas schwer, zu Hause ist sie perfekt." },
      { name: "Laura", place: "Nürnberg, DE", color: "Indigo Dust", stars: 5, days: 17, text: "Schön, dass sie in Europa hergestellt wird. Verarbeitung und Grip sind erstklassig." },
      { name: "Tim", place: "Basel, CH", color: "Dark Cranberry", stars: 2, days: 22, text: "Für meinen Geschmack zu schwer und zu fest. Für dynamisches Yoga sicher super, für mich leider nicht das Richtige." },
      { name: "Nora", place: "Graz, AT", color: "Midnight Blue", stars: 5, days: 26, text: "Liegt flach, rollt sich an den Ecken nicht auf und hält bombenfest. Jeden Cent wert." },
    ],
    related: [
      relatedCards.bag,
      { name: "„Almost Perfect“ Yogamatte ARISE", price: 76.46, compareAt: 89.95, shape: "mat", tint: "#5d7366" },
      relatedCards.strap,
      { name: "Yogamatte ARISE Travel", slug: "yogamatte-arise-travel", price: 59.95, shape: "mat", tint: "#5d7366" },
    ],
  },

  "yogamatte-arise-travel": {
    name: "Yogamatte ARISE Travel",
    subtitle: "Die Ultraleichte - Extrem rutschfest und ideal für Reisen - Made in Spain",
    price: 59.95,
    rating: 4.46,
    reviewCount: 169,
    ratingScales: [
      ["Rutschfestigkeit", 4.76],
      ["Dämpfung", 3.48],
      ["Qualität und Langlebigkeit", 4.5],
    ],
    specs: { material: "Naturkautschuk", short: "Naturkautschuk", length: 185, width: 65, mm: 1.3, weight: "1,0 kg", origin: "Spanien" },
    // Wild Ginger and Midnight Blue are sold out and hidden, as on the original.
    colors: ariseColors("Balsam Green", "Graphite", "Indigo Dust", "Dark Cranberry"),
    gallery: ["folded", "rolled", "top", "beach", "park", "seated"],
    description: `
        <p>Die ARISE Travel ist die Reiseversion der ARISE: nur 1,3 mm dünn und rund 1 kg leicht. Statt sie zu rollen, faltest du sie einfach – so passt sie in Koffer, Rucksack oder Handgepäck.</p>
        <p>Trotz der geringen Dicke hält der Naturkautschuk sicher auf dem Boden, ob im Hotelzimmer, im Park oder auf einem Retreat. Beide Seiten sind nutzbar. Hergestellt wird sie in Spanien, ohne PVC.</p>
        <p>Gedacht ist sie für deine eigene Praxis – für Studios sind MUDRA und MUDRA PRO die bessere Wahl.</p>`,
    care: `
        <p>Mit einer weichen Bürste oder einem Tuch und einer Mischung aus Wasser und Apfelessig (1:1) reinigen. Keine Seife verwenden und nicht in die Waschmaschine geben.</p>
        <p>Feucht nicht zusammenfalten, sondern erst trocknen lassen. Vor direkter Sonne und großer Hitze schützen. Der typische Gummigeruch ist am Anfang stärker und lässt mit der Zeit nach.</p>`,
    sustainability: `
        <p><strong>Hergestellt in Spanien</strong> – kurze Wege innerhalb der EU.</p>
        <p><strong>Schadstoffgeprüft</strong> nach OEKO-TEX® STANDARD 100.</p>`,
    features: [
      {
        title: "Gefaltet statt gerollt",
        text: "Mit 1 kg und nur 1,3 mm Dicke lässt sich die ARISE Travel falten wie ein Handtuch. Sie liegt flach im Koffer oder steckt in der Seitentasche vom Rucksack und braucht kaum mehr Platz als ein Pullover.",
        picture: "folded",
      },
      {
        title: "Hält auf jedem Boden",
        text: "Ob Parkett im Hotel, Fliesen im Ferienhaus oder Gras im Park: Der Naturkautschuk greift auf glatten wie auf unebenen Flächen. Im Studio kannst du sie auch über eine Leihmatte legen und auf deiner eigenen Oberfläche üben.",
        picture: "park",
      },
      {
        title: "Naturkautschuk aus Spanien",
        text: "Die Matte besteht aus Naturkautschuk und kommt ohne PVC aus. Hergestellt wird sie in Spanien, auf Schadstoffe geprüft ist sie nach OEKO-TEX® STANDARD 100.",
        picture: "layers",
      },
      {
        title: "Yoga, wo immer du bist",
        text: "Am Strand, auf dem Balkon oder im Retreat: Die Travel ist schnell ausgebreitet und genauso schnell wieder verstaut. Weil sie so dünn ist, spürst du den Boden gut – wer mehr Polster mag, legt eine Decke darunter.",
        picture: "beach",
      },
    ],
    reviews: [
      { name: "Lena", place: "Köln, DE", color: "Balsam Green", stars: 5, days: 1, text: "War mit im Urlaub und hat gefaltet locker in den Koffer gepasst. Rutscht auch auf Fliesen nicht." },
      { name: "Ben", place: "Wien, AT", color: "Graphite", stars: 4, days: 3, text: "Super leicht und griffig. Für die Knie ist sie natürlich sehr dünn, da lege ich ein Handtuch unter." },
      { name: "Anonym", place: "", color: "Indigo Dust", stars: 5, days: 4, text: "Ich lege sie im Studio über die Leihmatten – so habe ich immer meine eigene Oberfläche dabei." },
      { name: "Carla", place: "Freiburg, DE", color: "Dark Cranberry", stars: 3, days: 7, text: "Der Grip ist top, aber nach dem Falten bleiben anfangs Knicke, die sich erst nach ein paar Minuten glätten." },
      { name: "Miriam", place: "Luzern, CH", color: "Balsam Green", stars: 5, days: 9, text: "Perfekt für Yoga im Park. Wiegt fast nichts und ist schnell wieder eingepackt." },
      { name: "Stefan", place: "Bonn, DE", color: "Graphite", stars: 2, days: 12, text: "Für mich zu dünn – auf hartem Boden tun mir die Knie weh. Als Reisematte trotzdem gut verarbeitet." },
      { name: "Ida", place: "Klagenfurt, AT", color: "Indigo Dust", stars: 5, days: 15, text: "Habe sie im Handgepäck mit auf ein Retreat genommen. Genau dafür ist sie gemacht." },
      { name: "Noah", place: "Leipzig, DE", color: "Dark Cranberry", stars: 4, days: 19, text: "Leicht, rutschfest, schöne Farbe. Der Gummigeruch war am Anfang deutlich, ist inzwischen aber weg." },
      { name: "Pia", place: "Mainz, DE", color: "Balsam Green", stars: 5, days: 23, text: "Endlich eine Matte, die ich mit dem Rad mitnehmen kann. Zusammengefaltet passt sie in meine Fahrradtasche." },
      { name: "Elias", place: "Zürich, CH", color: "Graphite", stars: 4, days: 28, text: "Für unterwegs ideal. Zu Hause nutze ich trotzdem lieber meine dickere Matte." },
    ],
    related: [
      relatedCards.towel,
      bestsellers.yoga[2], // Yogamatte ARISE
      relatedCards.spray,
      { name: "„Almost Perfect“ Yogamatte ARISE Travel", price: 50.95, compareAt: 59.95, shape: "mat", tint: "#5d7366" },
    ],
  },

  "yogamatte-mudra-studio": {
    name: "Yogamatte MUDRA",
    subtitle: "Die Vielseitige: Perfekt für Einsteiger - ideal für alle Yoga-Stile und als Studioausstattung.",
    price: 39.95,
    rating: 4.56,
    reviewCount: 1637,
    ratingScales: [
      ["Rutschfestigkeit", 4.35],
      ["Dämpfung", 4.47],
      ["Qualität und Langlebigkeit", 4.47],
    ],
    specs: { material: "PVC (Polyvinylchlorid)", short: "PVC", length: 183, width: 61, mm: 5, weight: "1,35 kg", origin: "Taiwan", texture: "waffle" },
    // One colour all through. Aubergine is sold out but still offered, as on
    // the original (which hides Withered Rose instead).
    colors: [
      { name: "Balsam Green", hex: "#5d7366" },
      { name: "Lavender Fog", hex: "#b7a3b6" },
      { name: "Light Taupe", hex: "#c4b6a6" },
      { name: "Indigo Dust", hex: "#6b7c95" },
      { name: "Anthrazit", hex: "#3d3d3f" },
      { name: "Aubergine", hex: "#8d5a6f", soldOut: true },
      { name: "Dark Cranberry", hex: "#7a2a3a" },
    ].map((color) => ({ ...color, underside: color.hex })),
    gallery: ["standing", "rolled", "layers", "top", "studioLunge", "studioSeated"],
    description: `
        <p>Die MUDRA ist die Allrounderin für den Einstieg: leicht, gut gepolstert und unkompliziert. Mit 5 mm Dicke federt sie Knie und Handgelenke ab, mit rund 1,35 kg trägst du sie mühelos ins Studio.</p>
        <p>Ihre Oberfläche mit Waffelstruktur gibt Halt, auch in dynamischen Stilen wie Vinyasa oder Ashtanga. Die Matte ist frei von Latex und BPA und robust genug für den Alltag im Yogastudio – dafür ist sie ausdrücklich gemacht.</p>`,
    care: `
        <p>Mit einer weichen Bürste oder einem Tuch und einer Mischung aus Wasser und Apfelessig (1:1) reinigen. Keine Seife verwenden und nicht in die Waschmaschine geben.</p>
        <p>Erst trocknen lassen, dann aufrollen. Vor direkter Sonne und großer Hitze schützen.</p>`,
    sustainability: `
        <p><strong>Schadstoffgeprüft</strong> nach OEKO-TEX® STANDARD 100.</p>`,
    features: mudraFeatures,
    reviews: [
      { name: "Anna", place: "Berlin, DE", color: "Balsam Green", stars: 5, days: 1, text: "Meine erste richtige Yogamatte und ich bin begeistert. Leicht, weich und sie rutscht nicht weg." },
      { name: "Kerstin", place: "Essen, DE", color: "Lavender Fog", stars: 5, days: 2, text: "Die Farbe ist ein Traum und die Matte angenehm dick. Für meine Yin-Stunden genau richtig." },
      { name: "Anonym", place: "", color: "Anthrazit", stars: 4, days: 3, text: "Für den Preis wirklich gut. Bei sehr schwitzigen Händen rutsche ich manchmal ein wenig." },
      { name: "Ralf", place: "Kassel, DE", color: "Indigo Dust", stars: 5, days: 5, text: "Wir haben zehn Stück für unseren Kurs im Gemeindesaal gekauft. Robust und leicht zu reinigen." },
      { name: "Eva", place: "Salzburg, AT", color: "Light Taupe", stars: 4, days: 8, text: "Schön leicht zum Tragen. Auf dem hellen Farbton sieht man Flecken allerdings schnell." },
      { name: "Lisa", place: "Rostock, DE", color: "Dark Cranberry", stars: 5, days: 10, text: "Die neue Farbe ist wunderschön. Polsterung und Grip passen für mich perfekt." },
      { name: "Max", place: "Winterthur, CH", color: "Anthrazit", stars: 3, days: 13, text: "Ordentliche Einsteigermatte. Nach einem Jahr täglicher Nutzung sieht man erste Abriebspuren." },
      { name: "Johanna", place: "Ulm, DE", color: "Balsam Green", stars: 5, days: 17, text: "Wiegt fast nichts, ich nehme sie mit dem Fahrrad mit ins Studio. Klare Empfehlung." },
      { name: "Greta", place: "Innsbruck, AT", color: "Aubergine", stars: 5, days: 22, text: "Habe für meine Tochter gleich eine zweite bestellt. Weich, rutschfest und schnell sauber gewischt." },
      { name: "Oskar", place: "Graz, AT", color: "Lavender Fog", stars: 4, days: 26, text: "Gute Matte für den Anfang. Die Waffelstruktur ist zuerst ungewohnt, gibt aber guten Halt." },
    ],
    related: [
      bestsellers.yoga[0], // Yogablock Kork 2er Set
      relatedCards.bag,
      relatedCards.mudraPro,
      relatedCards.belt,
    ],
  },

  "yogamatte-mudra-studio-xl": {
    name: "Yogamatte Mudra XL",
    subtitle: "Universelle XL Yogamatte für Einsteiger & Fortgeschrittene, schadstoffgeprüft",
    price: 44.95,
    rating: 4.56,
    reviewCount: 273,
    ratingScales: [
      ["Rutschfestigkeit", 4.38],
      ["Dämpfung", 4.36],
      ["Qualität und Langlebigkeit", 4.39],
    ],
    // The original states only length, thickness and weight for the XL
    // (no material or width), so the Details tab does the same.
    specs: { short: "Waffelstruktur", length: 195, mm: 5, weight: "1,5 kg", texture: "waffle" },
    // Five more colours are sold out and hidden, as on the original.
    colors: [
      { name: "Anthrazit", hex: "#3d3d3f" },
      { name: "Indigo Dust", hex: "#6b7c95" },
      { name: "Balsam Green", hex: "#5d7366" },
    ].map((color) => ({ ...color, underside: color.hex })),
    gallery: ["standing", "rolled", "top", "layers"],
    description: `
        <p>Die Mudra XL ist die bewährte MUDRA in Überlänge: 195 statt 183 cm – genug Platz, wenn du groß bist oder dich in der Endentspannung gern ganz ausstreckst.</p>
        <p>Wie die MUDRA ist sie 5 mm dick, leicht und hat eine griffige Waffelstruktur. Sie ist nach OEKO-TEX® STANDARD 100 schadstoffgeprüft und robust genug für den Einsatz im Yogastudio.</p>`,
    care: `
        <p>Mit einer weichen Bürste oder einem Tuch und einer Mischung aus Wasser und Apfelessig (1:1) reinigen. Keine Seife verwenden und nicht in die Waschmaschine geben.</p>
        <p>Erst trocknen lassen, dann aufrollen. Vor direkter Sonne schützen und am besten in einer Tasche oder im Schrank aufbewahren.</p>`,
    sustainability: `
        <p><strong>Schadstoffgeprüft</strong> nach OEKO-TEX® STANDARD 100.</p>`,
    features: mudraFeatures,
    reviews: [
      { name: "Florian", place: "Ingolstadt, DE", color: "Anthrazit", stars: 5, days: 1, text: "Als großer Mensch hingen bei normalen Matten immer Kopf oder Füße drüber. Auf der XL nicht mehr." },
      { name: "Birgit", place: "Bregenz, AT", color: "Indigo Dust", stars: 5, days: 4, text: "Leicht, weich und lang genug für die Endentspannung. Genau das, was ich gesucht habe." },
      { name: "Anonym", place: "", color: "Balsam Green", stars: 4, days: 6, text: "Gute Dämpfung, der Grip könnte bei schwitzigen Händen etwas besser sein." },
      { name: "Lars", place: "Oldenburg, DE", color: "Anthrazit", stars: 5, days: 9, text: "Für meine Größe die beste Matte, die ich bisher hatte. Und trotzdem leicht zu tragen." },
      { name: "Theresa", place: "Passau, DE", color: "Indigo Dust", stars: 4, days: 13, text: "Schöne Farbe, angenehm weich. Der Geruch war am Anfang deutlich, ist aber schnell verflogen." },
      { name: "Daniel", place: "Thun, CH", color: "Balsam Green", stars: 5, days: 19, text: "Nutze sie für Yoga und für Dehnübungen nach dem Laufen. Die Extralänge ist Gold wert." },
      { name: "Sarah", place: "Wiesbaden, DE", color: "Anthrazit", stars: 3, days: 25, text: "Für den Preis in Ordnung. Nach einigen Monaten zeigen sich unter den Händen leichte Abriebspuren." },
    ],
    related: [
      relatedCards.mudraPro,
      relatedCards.eyePillow,
      { name: "Naima Top", price: 39.95, shape: "top", tint: "#d8d0c4" },
      relatedCards.almostPerfectProXl,
    ],
  },

  "yogamatte-mudra-pro": {
    name: "Yogamatte MUDRA PRO",
    subtitle: "Die Leistungsstarke: Extra robust für Yoga und Workouts - Made in Germany",
    price: 99.95,
    rating: 4.46,
    reviewCount: 48,
    ratingScales: [
      ["Rutschfestigkeit", 4.45],
      ["Dämpfung", 4.43],
      ["Qualität und Langlebigkeit", 4.47],
    ],
    // `size` replaces "L × B" in the Details tab, since there are two lengths.
    specs: { material: "Polyester mit Vinyl-Beschichtung", short: "Polyester + Vinyl", size: "180 × 65 cm oder 200 × 65 cm", mm: 5, weight: "1,77 kg (180 cm), 2,13 kg (200 cm)", origin: "Deutschland" },
    colors: [
      { name: "Anthrazit", hex: "#3d3d3f" },
      { name: "Light Taupe", hex: "#c4b6a6" },
      { name: "Balsam Green", hex: "#5d7366" },
    ].map((color) => ({ ...color, underside: color.hex })),
    // A second choice next to the colour. The first length's price is `price`;
    // `without` lists colours not made in that length (hidden, as on the original).
    lengths: [
      { label: "180cm", price: 99.95 },
      { label: "200cm", price: 124.95, without: ["Light Taupe", "Balsam Green"] },
    ],
    gallery: ["rolled", "top", "standing", "layers", "studioLunge", "studioSeated"],
    description: `
        <p>Die MUDRA PRO ist die robusteste Matte im Sortiment: gemacht für tägliches Üben zu Hause und den Dauereinsatz im Studio. Die geschlossene Oberfläche nimmt keine Feuchtigkeit auf und ist schnell gereinigt, die strukturierte Unterseite hält sie am Platz.</p>
        <p>Mit 5 mm Dicke dämpft sie gut und bleibt trotzdem stabil. Es gibt sie in 180 cm und – für große Menschen – in 200 cm Länge. Hergestellt wird sie in Deutschland.</p>
        <p>Neue Matten können anfangs eine leichte Schutzschicht aus der Herstellung haben. Sie verschwindet beim Üben und Reinigen, danach wird die Oberfläche griffiger.</p>`,
    care: `
        <p>Nach dem Üben mit einem weichen, leicht feuchten Tuch abwischen und mit einem trockenen Tuch nachtrocknen. Keine Seife verwenden und nicht in die Waschmaschine geben.</p>
        <p>Eine feuchte Matte erst trocknen lassen, dann aufrollen.</p>`,
    sustainability: `
        <p><strong>Hergestellt in Deutschland</strong> – kurze Wege innerhalb der EU.</p>
        <p><strong>Schadstoffgeprüft</strong> nach OEKO-TEX® STANDARD 100.</p>`,
    features: [
      {
        title: "Robust für jeden Tag",
        text: "Die MUDRA PRO ist für viel Nutzung gebaut: Ihre geschlossene Oberfläche hält auch kraftvollen Workouts stand und bleibt formstabil. Die strukturierte Unterseite sorgt dafür, dass die Matte auf glattem Boden nicht wandert.",
        picture: "grip",
      },
      {
        title: "Gefertigt in Deutschland",
        text: "Die MUDRA PRO wird in Deutschland hergestellt und ist nach OEKO-TEX® STANDARD 100 auf Schadstoffe geprüft – kurze Lieferwege inklusive.",
        picture: "calm",
      },
      {
        title: "Polster, das trägt",
        text: "5 mm Polsterung schonen Knie und Rücken, ohne dass die Matte unter dir nachgibt. Mit 65 cm Breite und wahlweise 200 cm Länge hast du auch als großer Mensch genug Platz.",
        picture: "layers",
      },
      {
        title: "Für Yoga, Pilates und Workouts",
        text: "Ob Sonnengruß, Pilates-Übung oder Training zu Hause: Die MUDRA PRO lässt sich nach jeder Einheit feucht abwischen und ist schnell wieder einsatzbereit – auch im Studioalltag.",
        picture: "studio",
      },
    ],
    reviews: [
      { name: "Sandra", place: "Augsburg, DE", color: "Anthrazit", stars: 5, days: 2, text: "Ich gebe fünf Kurse pro Woche auf dieser Matte. Nach Monaten sieht sie noch aus wie am ersten Tag." },
      { name: "Moritz", place: "Bielefeld, DE", color: "Anthrazit", stars: 5, days: 3, text: "Mit fast zwei Metern endlich eine Matte, auf der Kopf und Füße Platz haben. Die 200-cm-Version lohnt sich." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 4, days: 5, text: "Sehr stabil und angenehm gedämpft. In den ersten Tagen war sie etwas rutschig, das hat sich gegeben." },
      { name: "Helena", place: "Wels, AT", color: "Balsam Green", stars: 5, days: 8, text: "Nutze sie für Pilates und Krafttraining. Hält alles aus und ist in Sekunden sauber gewischt." },
      { name: "Jan", place: "Lübeck, DE", color: "Anthrazit", stars: 3, days: 11, text: "Gute Qualität, aber für Hot Yoga ist mir der Grip zu gering. Für ruhigere Stile top." },
      { name: "Vera", place: "St. Gallen, CH", color: "Light Taupe", stars: 5, days: 14, text: "Schön, dass sie in Deutschland gefertigt wird. Fühlt sich hochwertig an und liegt sofort flach." },
      { name: "Philipp", place: "Potsdam, DE", color: "Balsam Green", stars: 4, days: 18, text: "Etwas schwerer als meine alte Matte, dafür deutlich robuster. Für den Preis absolut in Ordnung." },
      { name: "Amelie", place: "Regensburg, DE", color: "Anthrazit", stars: 5, days: 24, text: "Wir haben unser Studio komplett mit der MUDRA PRO ausgestattet. Die Teilnehmenden sind begeistert." },
    ],
    related: [
      relatedCards.almostPerfectProXl,
      relatedCards.bag,
      relatedCards.strap,
      bestsellers.yoga[3], // Yogamatte MUDRA
    ],
  },

  "yogamatte-arise-cork": {
    name: "Yogamatte ARISE CORK",
    subtitle: "Die Natürliche: Angenehmes Hautgefühl und extra rutschfest bei intensiver Praxis.",
    price: 99.95,
    rating: 4.79,
    reviewCount: 72,
    ratingScales: [
      ["Rutschfestigkeit", 4.53],
      ["Dämpfung", 4.8],
      ["Qualität und Langlebigkeit", 4.86],
    ],
    specs: { material: "Naturkork auf Naturkautschuk (15 % recycelt)", short: "Kork + Naturkautschuk", length: 185, width: 65, mm: 4.5, weight: "1,8 kg", origin: "Spanien", texture: "cork", topOutside: true },
    // Both are the same cork; "Align" carries a line print.
    colors: [
      { name: "Align", hex: "#d6a571", print: "align" },
      { name: "Lotus", hex: "#d6a571" },
    ],
    gallery: ["rolled", "top", "standing", "layers", "lunge", "seated"],
    description: `
        <p>Die ARISE CORK verbindet eine Oberfläche aus Naturkork mit einer Unterseite aus Naturkautschuk, die zu 15 % aus recyceltem Material besteht. Kork fühlt sich warm und angenehm auf der Haut an und wird griffiger, je feuchter er ist – ideal für schweißtreibende Stile.</p>
        <p>Mit 4,5 mm dämpft die Matte gut und bleibt stabil. Kork und Kautschuk sind ohne Klebstoff miteinander verbunden. Hergestellt wird sie in Spanien.</p>
        <p>Tipp: Zu Beginn der Praxis Hände und Füße leicht anfeuchten, dann greift der Kork sofort. Die Matte ist für die eigene Praxis gedacht – für Studios sind MUDRA und MUDRA PRO die bessere Wahl.</p>`,
    care: `
        <p>Kork wirkt von Natur aus antimikrobiell und nimmt Gerüche kaum an. Nach der Praxis mit einem weichen, leicht feuchten Tuch abwischen und trocken nachwischen. Keine Seife verwenden und nicht in die Waschmaschine geben.</p>
        <p>Immer mit der Korkseite nach außen aufrollen und vor direkter Sonne und großer Hitze schützen.</p>`,
    sustainability: `
        <p><strong>Plastikfreie Verpackung</strong> – ohne PVC und ohne erdölbasierte Kunststoffe.</p>
        <p><strong>Nachwachsende Rohstoffe</strong> – Kork und Naturkautschuk, dazu ein Recyclinganteil.</p>`,
    features: [
      {
        title: "Je feuchter, desto griffiger",
        text: "Kork verhält sich anders als Gummi: Wird die Oberfläche feucht, greift sie sogar besser. Darum passt die ARISE CORK gut zu schweißtreibenden Stilen wie Power Yoga – Hände und Füße bleiben auch dann, wo du sie hinsetzt.",
        picture: "grip",
      },
      {
        title: "Pflegeleicht von Natur aus",
        text: "Kork wirkt antimikrobiell und nimmt kaum Gerüche an. Nach der Praxis genügt ein leicht feuchtes Tuch. Beim Aufrollen zeigt die Korkseite nach außen, dann bleibt die Matte schön flach.",
        picture: "layers",
      },
      {
        title: "Kork und Kautschuk, sonst nichts",
        text: "Oben Naturkork, unten Naturkautschuk mit 15 % Recyclinganteil – und dazwischen kein Klebstoff. Das macht die Matte langlebig und angenehm natürlich im Griff.",
        picture: "forest",
      },
      {
        title: "Hergestellt in Spanien",
        text: "Die ARISE CORK wird in Spanien gefertigt und kommt ohne Verpackung aus PVC oder erdölbasierten Kunststoffen. Mit 185 × 65 cm und 1,8 kg bietet sie viel Fläche und ist trotzdem gut zu tragen.",
        picture: "size",
      },
    ],
    reviews: [
      { name: "Paula", place: "Heidelberg, DE", color: "Align", stars: 5, days: 2, text: "Die Linien helfen mir wirklich, Hände und Füße gerade zu setzen. Und der Kork fühlt sich wunderbar an." },
      { name: "Anonym", place: "", color: "Lotus", stars: 5, days: 4, text: "Je mehr ich schwitze, desto besser hält sie. Hätte ich nicht gedacht." },
      { name: "Selin", place: "Dortmund, DE", color: "Align", stars: 4, days: 7, text: "Schöne Matte, aber trocken ist sie am Anfang etwas glatt. Ein paar Tropfen Wasser auf die Hände, dann passt es." },
      { name: "Georg", place: "Wien, AT", color: "Lotus", stars: 5, days: 10, text: "Riecht nicht nach Gummi und sieht nach Monaten noch aus wie neu." },
      { name: "Merle", place: "Kiel, DE", color: "Align", stars: 5, days: 15, text: "Ein Naturmaterial, das sich warm anfühlt. Für mich die schönste Matte im ganzen Kurs." },
      { name: "Timo", place: "Chur, CH", color: "Lotus", stars: 4, days: 21, text: "Top Grip bei Hot Yoga. Man sollte sie mit der Korkseite nach außen rollen, sonst wellt sie sich leicht." },
      { name: "Hanna", place: "Magdeburg, DE", color: "Align", stars: 5, days: 26, text: "Liegt flach, rutscht nicht und ist schnell abgewischt. Gerne wieder." },
    ],
    related: [
      relatedCards.bag,
      bestsellers.yoga[2], // Yogamatte ARISE
      { name: "Yogatasche NANDI", price: 19.95, shape: "bag", tint: "#d5cbbd" },
      { name: "„Almost Perfect“ Yogamatte ARISE Cork", price: 84.95, compareAt: 99.95, shape: "mat", tint: "#d6a571" },
    ],
  },

  "yogamatte-schurwolle": {
    name: "Yogamatte WOOL aus Schurwolle",
    subtitle: "Natürlich warm, weich & kuschelig - Made in Germany.",
    price: 119.95,
    rating: 4.95,
    reviewCount: 16,
    ratingScales: [
      ["Rutschfestigkeit", 4.65],
      ["Dämpfung", 4.6],
      ["Qualität und Langlebigkeit", 4.89],
    ],
    specs: { material: "Schurwolle auf Naturlatex, PU und Acrylharz", short: "Schurwolle", length: 200, width: 75, mm: 20, weight: "1,75 kg", origin: "Deutschland", texture: "wool" },
    // One version only, so the page shows no colour choice (as on the original).
    colors: [{ name: null, hex: "#e7e1d6", underside: "#c9c0ae" }],
    gallery: ["rolled", "top", "standing", "layers", "seated", "studioSeated"],
    description: `
        <p>Die WOOL ist eine Matte aus 100 % Schurwolle mit rund 2 cm dichtem Flor – weich, warm und wie gemacht für ruhige Praxis: Yin Yoga, Meditation oder Atemübungen.</p>
        <p>Die Wolle ist mulesingfrei und stammt aus Neuseeland. Die Unterseite aus Naturlatex, PU und Acrylharz hält die Matte auf jedem Boden, ein eingefasster Rand gibt ihr Form, und Baumwollkordeln halten sie aufgerollt zusammen. Hergestellt wird sie in Deutschland.</p>`,
    care: `
        <p>Regelmäßig auslüften, ausklopfen oder absaugen – das reicht meistens. Bei Bedarf ist eine kalte Handwäsche mit Wollwaschmittel ohne Weichspüler möglich.</p>
        <p>Zum Trocknen aufhängen oder flach auslegen, nicht in den Trockner geben. Keine Seife, keine Waschmaschine, und vor direkter Sonne und großer Hitze schützen.</p>`,
    sustainability: `
        <p><strong>Hergestellt in Deutschland</strong> – kurze Wege innerhalb der EU.</p>
        <p><strong>Schadstoffgeprüft</strong> nach OEKO-TEX® STANDARD 100.</p>
        <p><strong>Woolmark-zertifizierte Wolle</strong> – mulesingfrei, aus Neuseeland.</p>`,
    // The original has three info rows here instead of four.
    features: [
      {
        title: "Warm und weich für ruhige Stunden",
        text: "Rund 2 cm dichter Wollflor halten die Kälte vom Boden fern und machen die WOOL zur gemütlichen Unterlage für Yin Yoga, Meditation und Atemübungen.",
        picture: "calm",
      },
      {
        title: "Wolle, die sich selbst pflegt",
        text: "Schurwolle enthält natürliches Wollfett. Dadurch weist sie Schmutz und Gerüche ab, gleicht Wärme und Feuchtigkeit aus und bleibt atmungsaktiv. Meist reicht es, die Matte regelmäßig auszulüften.",
        picture: "layers",
      },
      {
        title: "Gefertigt in Deutschland",
        text: "Die WOOL wird in Deutschland hergestellt. Mit 200 × 75 cm ist sie größer als die meisten Yogamatten, ein eingefasster Rand hält sie in Form, und mit den Baumwollkordeln bindest du sie aufgerollt zusammen.",
        picture: "size",
      },
    ],
    reviews: [
      { name: "Ines", place: "Konstanz, DE", stars: 5, days: 3, text: "Für meine Yin-Stunden am Abend gibt es nichts Gemütlicheres. Herrlich warm, auch auf dem Fliesenboden." },
      { name: "Anonym", place: "", stars: 5, days: 6, text: "Ich meditiere jeden Morgen darauf. Weich, ohne dass man einsinkt." },
      { name: "Robert", place: "Linz, AT", stars: 5, days: 12, text: "Hochwertig verarbeitet, der Rand ist sauber eingefasst. Riecht ganz leicht nach Wolle, das mag ich." },
      { name: "Maja", place: "Freiburg, DE", stars: 4, days: 17, text: "Wunderbar für Atemübungen und Entspannung. Für Sonnengrüße ist sie mir zu weich, aber dafür ist sie ja nicht gemacht." },
      { name: "Christine", place: "Luzern, CH", stars: 5, days: 23, text: "Nicht günstig, aber jeden Euro wert. Die Kordeln zum Zusammenbinden sind praktisch." },
      { name: "Anton", place: "Göttingen, DE", stars: 5, days: 30, text: "Endlich keine kalten Füße mehr beim Yoga auf dem Holzboden." },
    ],
    related: [
      relatedCards.eyePillow,
      bundles["yoga-bundles"][0], // Yogamatte ARISE Set
      relatedCards.ariseCork,
      relatedCards.almostPerfectProXl,
    ],
  },
};

// ---------- Drawn product pictures ----------
// Stand-ins for the original's photos, drawn in the selected colour.
// All are 200×250 (the original's 4:5 format) on the photo-grey background.
const PHOTO_BG = "#f1f0ee";
let patternCount = 0; // keeps SVG pattern ids unique on the page

const decimal = (value) => String(value).replace(".", ",");
const cm = (mm) => `${decimal(mm / 10)} cm`;
// "183 × 61 cm" – or just the length where the original gives no width.
const sizeText = (specs) => specs.size || (specs.width ? `${specs.length} × ${specs.width} cm` : `${specs.length} cm lang`);

// Explicit `underside`, else PURE's rule: matte colours match, smooth ones are black.
const underside = (color) => color.underside || (color.matte ? color.hex : "#2b2a28");

// Surface texture over the visible top of the mat (`path`): fine grain on
// PURE's matte colours, otherwise the product's `specs.texture`.
const textures = {
  grain: '<circle cx="1" cy="1" r=".6" fill="rgba(255,255,255,.14)"/>',
  waffle: '<path d="M0 .5H4M.5 0V4" stroke="rgba(0,0,0,.13)"/>',
  cork: '<circle cx="1" cy="1" r=".45" fill="rgba(110,60,20,.3)"/><circle cx="3" cy="2.6" r=".3" fill="rgba(255,255,255,.25)"/>',
  wool: '<circle cx="1" cy="1" r="1.1" fill="rgba(255,255,255,.45)"/><circle cx="3" cy="3" r="1.1" fill="rgba(0,0,0,.05)"/>',
};

function texture(color, specs, path) {
  const kind = color.matte ? "grain" : specs.texture;
  if (!kind) return "";
  const id = `texture-${++patternCount}`;
  return `<defs><pattern id="${id}" width="4" height="4" patternUnits="userSpaceOnUse">${textures[kind]}</pattern></defs>
       <path d="${path}" fill="url(#${id})"/>`;
}

// Line print of the cork mat "Align": centre line, cross line, two chevrons
// and a circle - our own simple pattern, drawn into a mat seen from above.
function alignPrint(color, x, y, w, h) {
  if (color.print !== "align") return "";
  const cx = x + w / 2;
  const cy = y + h / 2;
  const lines = h > w
    ? `M${cx} ${y + 6}V${y + h - 6}M${x + 6} ${cy}H${x + w - 6}M${x + 6} ${y + h * 0.25}L${cx} ${y + h * 0.15}L${x + w - 6} ${y + h * 0.25}M${x + 6} ${y + h * 0.75}L${cx} ${y + h * 0.85}L${x + w - 6} ${y + h * 0.75}`
    : `M${x + 6} ${cy}H${x + w - 6}M${cx} ${y + 6}V${y + h - 6}M${x + w * 0.25} ${y + 6}L${x + w * 0.15} ${cy}L${x + w * 0.25} ${y + h - 6}M${x + w * 0.75} ${y + 6}L${x + w * 0.85} ${cy}L${x + w * 0.75} ${y + h - 6}`;
  return `<g fill="none" stroke="rgba(40,30,20,.5)" stroke-width=".8"><path d="${lines}"/><circle cx="${cx}" cy="${cy}" r="${Math.min(w, h) * 0.22}"/></g>`;
}

function rolledPicture(color) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <ellipse cx="104" cy="176" rx="86" ry="9" fill="rgba(0,0,0,.07)"/>
      <g transform="rotate(-24 100 130)">
        <rect x="30" y="112" width="160" height="46" rx="3" fill="${color.hex}"/>
        ${alignPrint(color, 50, 112, 140, 46)}
        <circle cx="128" cy="135" r="7" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="1.2"/>
        <ellipse cx="34" cy="135" rx="17" ry="26" fill="${underside(color)}"/>
        <ellipse cx="32" cy="135" rx="12" ry="19" fill="none" stroke="rgba(255,255,255,.14)"/>
        <ellipse cx="32" cy="135" rx="7" ry="11" fill="rgba(0,0,0,.35)"/>
      </g>
    </svg>`;
}

function topPicture(color, specs) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <rect x="52" y="22" width="96" height="180" rx="3" fill="${color.hex}"/>
      ${texture(color, specs, "M52 22h96v180H52z")}
      ${alignPrint(color, 52, 22, 96, 180)}
      <circle cx="100" cy="54" r="8" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="1.2"/>
      <rect x="48" y="196" width="104" height="30" rx="15" fill="${underside(color)}"/>
      <rect x="54" y="199" width="92" height="7" rx="3.5" fill="rgba(255,255,255,.1)"/>
    </svg>`;
}

// Rolled up and standing; cork mats are rolled with the top outside (`topOutside`).
function standingPicture(color, specs) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <ellipse cx="100" cy="222" rx="40" ry="7" fill="rgba(0,0,0,.08)"/>
      <rect x="76" y="46" width="48" height="176" rx="4" fill="${specs.topOutside ? color.hex : underside(color)}"/>
      <rect x="80" y="50" width="8" height="168" rx="4" fill="rgba(255,255,255,.1)"/>
      <ellipse cx="100" cy="46" rx="24" ry="9" fill="${color.hex}"/>
      <ellipse cx="100" cy="46" rx="15" ry="5.5" fill="none" stroke="${underside(color)}" stroke-width="2"/>
      <ellipse cx="100" cy="46" rx="6" ry="2.2" fill="rgba(0,0,0,.4)"/>
    </svg>`;
}

// Cut edge of the mat: the side gets thicker with `specs.mm`
// (top layer darkened, underside in its own colour).
function layersPicture(color, specs) {
  const side = Math.min(36, Math.max(4, Math.round(specs.mm * 4)));
  const top = Math.round(side * 0.44);
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <path d="M28 92H172L192 160H8Z" fill="${color.hex}"/>
      ${texture(color, specs, "M28 92H172L192 160H8Z")}
      <rect x="8" y="160" width="184" height="${top}" fill="${color.hex}"/>
      <rect x="8" y="160" width="184" height="${top}" fill="rgba(0,0,0,.2)"/>
      <rect x="8" y="${160 + top}" width="184" height="${side - top}" fill="${underside(color)}"/>
      <path d="M196 160V${160 + side}M193 160H199M193 ${160 + side}H199" stroke="#5f5c52"/>
      <text x="100" y="204" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">${cm(specs.mm)} · ${specs.short}</text>
    </svg>`;
}

// Folded like a towel (the travel mat folds instead of rolling up):
// the stacked folds show top and underside in turn.
function foldedPicture(color) {
  const folds = [0, 1, 2, 3].map((i) => `
      <rect x="34" y="${150 + i * 7}" width="124" height="7" rx="3.5" fill="${i % 2 ? color.hex : underside(color)}"/>`).join("");
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <ellipse cx="104" cy="182" rx="80" ry="8" fill="rgba(0,0,0,.07)"/>
      <path d="M34 150L56 104H180L158 150Z" fill="${color.hex}"/>
      <path d="M158 150L180 104V132L158 178Z" fill="${color.hex}"/>
      <path d="M158 150L180 104V132L158 178Z" fill="rgba(0,0,0,.2)"/>${folds}
      <ellipse cx="107" cy="127" rx="8" ry="6" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="1.2"/>
    </svg>`;
}

const scenePicture = (color, pose, wall, floor) => sceneSvg({ pose, wall, floor, mat: color.hex });

// Wide pictures for the info rows (840×515 on the original).
function sizeWidePicture(color, specs) {
  const height = Math.round((222 * specs.width) / specs.length);
  const y = 96 - height / 2;
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <rect x="40" y="${y}" width="222" height="${height}" rx="3" fill="${color.hex}"/>
      ${texture(color, specs, `M40 ${y}h222v${height}H40z`)}
      ${alignPrint(color, 40, y, 222, height)}
      <circle cx="66" cy="96" r="7" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="1.2"/>
      <g stroke="#5f5c52" fill="none">
        <path d="M276 ${y}V${y + height}M272 ${y}H280M272 ${y + height}H280"/>
        <path d="M40 152H262M40 148V156M262 148V156"/>
      </g>
      <g font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">
        <text x="286" y="100">${specs.width} cm</text>
        <text x="151" y="172" text-anchor="middle">${specs.length} cm</text>
      </g>
    </svg>`;
}

function layersWidePicture(color, specs) {
  const side = Math.min(36, Math.max(5, Math.round(specs.mm * 5)));
  const top = Math.round(side * 0.4);
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <path d="M50 56H250L286 128H14Z" fill="${color.hex}"/>
      ${texture(color, specs, "M50 56H250L286 128H14Z")}
      <rect x="14" y="128" width="272" height="${top}" fill="${color.hex}"/>
      <rect x="14" y="128" width="272" height="${top}" fill="rgba(0,0,0,.2)"/>
      <rect x="14" y="${128 + top}" width="272" height="${side - top}" fill="${underside(color)}"/>
      <path d="M296 128V${128 + side}M292 128H300M292 ${128 + side}H300" stroke="#5f5c52"/>
      <text x="150" y="176" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">${specs.material || specs.short} · ${decimal(specs.mm)} mm</text>
    </svg>`;
}

// The mat from above with one corner folded over, showing the other side.
function reversibleWidePicture(color) {
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <path d="M34 52H250L296 98V144H34Z" fill="${color.hex}"/>
      <circle cx="62" cy="98" r="7" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="1.2"/>
      <path d="M250 52L296 98L246 102Z" fill="rgba(0,0,0,.12)"/>
      <path d="M250 52L296 98H250Z" fill="${underside(color)}"/>
      <text x="165" y="176" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">Ober- und Unterseite nutzbar</text>
    </svg>`;
}

// The folded travel mat next to a backpack.
function foldedWidePicture(color, specs) {
  const folds = [0, 1, 2, 3].map((i) => `
      <rect x="36" y="${112 + i * 6}" width="130" height="6" rx="3" fill="${i % 2 ? color.hex : underside(color)}"/>`).join("");
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <ellipse cx="170" cy="138" rx="146" ry="7" fill="rgba(0,0,0,.06)"/>
      <path d="M36 112L56 76H186L166 112Z" fill="${color.hex}"/>
      <path d="M166 112L186 76V100L166 136Z" fill="${color.hex}"/>
      <path d="M166 112L186 76V100L166 136Z" fill="rgba(0,0,0,.2)"/>${folds}
      <path d="M236 52V44a16 16 0 0 1 32 0V52" fill="none" stroke="#8a7d6b" stroke-width="5"/>
      <rect x="212" y="52" width="80" height="84" rx="14" fill="#a89a86"/>
      <rect x="226" y="90" width="52" height="34" rx="6" fill="rgba(0,0,0,.1)"/>
      <text x="165" y="176" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">Gefaltet · ${specs.weight} · ${decimal(specs.mm)} mm</text>
    </svg>`;
}

// The rolled-up mat on its carrying strap.
function carryWidePicture(color, specs) {
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <ellipse cx="165" cy="136" rx="112" ry="7" fill="rgba(0,0,0,.07)"/>
      <path d="M101 74C111 24 213 24 223 74" fill="none" stroke="${COTTON}" stroke-width="6" stroke-linecap="round"/>
      <rect x="64" y="74" width="196" height="56" rx="4" fill="${color.hex}"/>
      ${texture(color, specs, "M64 74h196v56H64z")}
      <rect x="96" y="72" width="10" height="60" rx="2" fill="${COTTON}"/>
      <rect x="218" y="72" width="10" height="60" rx="2" fill="${COTTON}"/>
      <ellipse cx="260" cy="102" rx="13" ry="28" fill="${underside(color)}"/>
      <ellipse cx="259" cy="102" rx="8" ry="18" fill="none" stroke="rgba(0,0,0,.18)"/>
      <ellipse cx="259" cy="102" rx="4" ry="8" fill="rgba(0,0,0,.35)"/>
      <text x="165" y="176" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">ca. ${specs.weight} · ${sizeText(specs)}</text>
    </svg>`;
}

// A wide crop of a drawn scene (the scene backdrop reaches past its frame).
const wideScene = (color, pose, wall, floor) => sceneSvg({ pose, wall, floor, mat: color.hex }, "-40 -2 180 110");

// `label` gets the product's specs and returns the picture's text alternative.
const featurePictures = {
  grip: { label: () => "Figur im herabschauenden Hund auf der Matte", draw: (color) => wideScene(color, "dog", "#e4ded5", "#b49a7e") },
  size: { label: (specs) => `Matte von oben, ${specs.length} × ${specs.width} cm`, draw: sizeWidePicture },
  layers: { label: (specs) => `Schichtaufbau: ${specs.material || specs.short}, ${decimal(specs.mm)} mm`, draw: layersWidePicture },
  styles: { label: () => "Figur im Baum auf der Matte", draw: (color) => wideScene(color, "tree", "#dcdcd2", "#9c8a74") },
  reversible: { label: () => "Matte mit umgeschlagener Ecke: Ober- und Unterseite", draw: reversibleWidePicture },
  forest: { label: () => "Figur im Sitzen auf der Matte im Wald", draw: (color) => wideScene(color, "seated", "#b4bea6", "#86735a") },
  folded: { label: (specs) => `Gefaltete Matte neben einem Rucksack, ${specs.weight}`, draw: foldedWidePicture },
  park: { label: () => "Figur im Krieger auf der Matte im Park", draw: (color) => wideScene(color, "warrior", "#d8e4d2", "#93a874") },
  beach: { label: () => "Figur im Baum auf der Matte am Strand", draw: (color) => wideScene(color, "tree", "#cfe0e8", "#e2d2b0") },
  studio: { label: () => "Figur im Ausfallschritt auf der Matte im Studio", draw: (color) => wideScene(color, "lunge", "#ece8e1", "#c4a886") },
  carry: { label: (specs) => `Aufgerollte Matte am Tragegurt, ca. ${specs.weight}`, draw: carryWidePicture },
  calm: { label: () => "Figur im Sitzen auf der Matte im Studio", draw: (color) => wideScene(color, "seated", "#e6e2dc", "#c4a886") },
  // Meditation cushions
  sitting: { label: () => "Figur im Schneidersitz auf dem Kissen", draw: (color, specs) => cushionSittingWide(color, specs) },
  heights: { label: (specs) => `Die Lotus-Kissen in 10, 15 und 20 cm Höhe, hervorgehoben ${specs.seat} cm`, draw: (color, specs) => cushionHeightsWide(color, specs) },
  refill: { label: (specs) => `Kissen und ein Beutel ${specs.filling}`, draw: (color, specs) => cushionRefillWide(color, specs) },
  wash: { label: () => "Kissen und Waschsymbol für 30 °C", draw: (color, specs) => cushionWashWide(color, specs) },
  fillings: { label: () => "Dinkelspelz und Kapok im Vergleich", draw: () => cushionFillingsWide() },
  topView: { label: (specs) => `Kissen von oben, ${specs.size} cm`, draw: (color, specs) => cushionTopWide(color, specs) },
  sideView: { label: (specs) => `Kissen von der Seite, ${specs.dimensions[2]} cm hoch`, draw: (color, specs) => cushionSizeWide(color, specs) },
};

const galleryPictures = {
  rolled: { label: "halb aufgerollt", draw: rolledPicture },
  top: { label: "von oben", draw: topPicture },
  standing: { label: "aufgerollt", draw: standingPicture },
  layers: { label: "Materialaufbau", draw: layersPicture },
  lunge: { label: "beim Üben im Ausfallschritt", draw: (color) => scenePicture(color, "lunge", "#e4ded5", "#b49a7e") },
  warrior: { label: "beim Üben im Krieger", draw: (color) => scenePicture(color, "warrior", "#dcdcd2", "#9c8a74") },
  forestWarrior: { label: "beim Üben im Wald", draw: (color) => scenePicture(color, "warrior", "#a8b49c", "#7d6a52") },
  forestTree: { label: "im Baum im Wald", draw: (color) => scenePicture(color, "tree", "#b4bea6", "#86735a") },
  folded: { label: "gefaltet", draw: foldedPicture },
  beach: { label: "im Baum am Strand", draw: (color) => scenePicture(color, "tree", "#cfe0e8", "#e2d2b0") },
  park: { label: "im Krieger im Park", draw: (color) => scenePicture(color, "warrior", "#d8e4d2", "#93a874") },
  seated: { label: "im Sitzen", draw: (color) => scenePicture(color, "seated", "#e8e1d6", "#b49a7e") },
  studioLunge: { label: "im Ausfallschritt im Studio", draw: (color) => scenePicture(color, "lunge", "#ece8e1", "#c4a886") },
  studioSeated: { label: "im Sitzen im Studio", draw: (color) => scenePicture(color, "seated", "#e6e2dc", "#c4a886") },
  // Meditation cushions
  cushionFront: { label: "von vorn", draw: (color, specs) => cushionFrontPicture(color, specs) },
  cushionSeated: { label: "beim Meditieren", draw: (color, specs) => cushionSeatedPicture(color, specs) },
  cushionTop: { label: "von oben", draw: (color, specs) => cushionTopPicture(color, specs) },
  cushionSize: { label: "Maße von der Seite", draw: (color, specs) => cushionSizePicture(color, specs) },
  cushionInside: { label: "geöffnet mit Füllung", draw: (color, specs) => cushionInsidePicture(color, specs) },
  cushionFabric: { label: "Stoff aus Bio-Baumwolle", draw: (color) => cushionFabricPicture(color) },
};

// ---------- Drawn cushion pictures ----------
// The cushions reuse their card drawings from shared.js (a 180×180 box).
// `CUSHION_SEAT` is where the seat is in that box, for the sitting figure.
const CUSHION_SEAT = { lotusCushion10: 94, lotusCushion15: 86, lotusCushion20: 78, plainCushion: 86, zafu: 72, crescent: 58 };
const LABEL_STYLE = 'font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif"';
const cushion = (color, specs, x, y, scale = 1) =>
  `<g transform="translate(${x} ${y}) scale(${scale})">${shapes[specs.shape](color.hex)}</g>`;

// A cross-legged figure whose hips sit at (x, y).
const sittingFigure = (x, y, scale = 1) => `
      <g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="#3a3530" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M0 0V-38M0-33L-15-17L-25-3M0-33L15-17L25-3M-5 2L-34 8L8 15M5 2L34 8L-8 15"/>
        <circle cx="0" cy="-51" r="8" fill="#3a3530" stroke="none"/>
      </g>`;

// Spelt husks (little grains) or kapok (soft tufts) as a fill pattern.
function fillingPattern(specs) {
  const id = `filling-${++patternCount}`;
  const kapok = /Kapok/.test(specs.filling);
  const tile = kapok
    ? '<rect width="10" height="10" fill="#f3efe6"/><circle cx="3" cy="3" r="2.6" fill="#fff"/><circle cx="8" cy="7" r="2.2" fill="#e9e3d6"/>'
    : '<rect width="6" height="6" fill="#d9c69e"/><ellipse cx="2" cy="2" rx="1.6" ry=".8" fill="#b89a62" transform="rotate(30 2 2)"/><ellipse cx="4.5" cy="4.6" rx="1.4" ry=".7" fill="#c9ad74" transform="rotate(-40 4.5 4.6)"/>';
  const size = kapok ? 10 : 6;
  return { id, defs: `<defs><pattern id="${id}" width="${size}" height="${size}" patternUnits="userSpaceOnUse">${tile}</pattern></defs>` };
}

function cushionFrontPicture(color, specs) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      ${cushion(color, specs, -8, 20, 1.2)}
    </svg>`;
}

// Someone sitting on the cushion, on a zabuton in a quiet room.
function cushionSeatedPicture(color, specs) {
  const seat = 95 + CUSHION_SEAT[specs.shape];
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="#ece6dc"/>
      <rect y="186" width="200" height="64" fill="#c9b9a3"/>
      <rect x="22" y="206" width="156" height="20" rx="6" fill="#d9cfc0"/>
      ${cushion(color, specs, 10, 95)}
      ${sittingFigure(100, seat - 2)}
    </svg>`;
}

// From above: round with a seam, the zafu with its pleats, the half moon as a "D".
function topOutline(color, specs) {
  const outline = specs.shape === "crescent"
    ? `<path d="M30 160C30 92 62 66 100 66S170 92 170 160C150 144 126 138 100 138S50 144 30 160Z" fill="${color.hex}"/>
       <path d="M44 150C46 100 70 80 100 80S154 100 156 150" fill="none" stroke="rgba(0,0,0,.14)" stroke-dasharray="3 3"/>`
    : `<circle cx="100" cy="118" r="${specs.shape === "zafu" ? 78 : 72}" fill="${color.hex}"/>
       <circle cx="100" cy="118" r="${specs.shape === "zafu" ? 70 : 64}" fill="none" stroke="rgba(0,0,0,.14)" stroke-dasharray="3 3"/>`;
  const pleats = specs.shape === "zafu" ? `<path d="${Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    return `M${(100 + 14 * Math.cos(angle)).toFixed(1)} ${(118 + 14 * Math.sin(angle)).toFixed(1)}L${(100 + 66 * Math.cos(angle)).toFixed(1)} ${(118 + 66 * Math.sin(angle)).toFixed(1)}`;
  }).join("")}" stroke="rgba(0,0,0,.12)" stroke-width="1.5"/><circle cx="100" cy="118" r="7" fill="rgba(0,0,0,.18)"/>` : "";
  return outline + pleats;
}

function cushionTopPicture(color, specs) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      ${topOutline(color, specs)}
      <text x="100" y="220" text-anchor="middle" ${LABEL_STYLE}>${specs.size} cm</text>
    </svg>`;
}

function cushionTopWide(color, specs) {
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <g transform="translate(165 86) scale(.78) translate(-100 -118)">${topOutline(color, specs)}</g>
      <text x="165" y="182" text-anchor="middle" ${LABEL_STYLE}>${specs.size} cm</text>
    </svg>`;
}

// Side view with the height and the width (4 px per cm), standing on `base`.
function sideView(color, specs, cx, base) {
  const [length, , height] = specs.dimensions;
  const w = Math.round(length * 4);
  const h = Math.round(height * 4);
  const x = cx - w / 2;
  const y = base - h;
  return `
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(18, h / 2)}" fill="${color.hex}"/>
      <rect x="${x + 6}" y="${y + 4}" width="${w - 12}" height="6" rx="3" fill="rgba(255,255,255,.14)"/>
      <g stroke="#5f5c52" fill="none">
        <path d="M${x + w + 10} ${y}V${base}M${x + w + 6} ${y}H${x + w + 14}M${x + w + 6} ${base}H${x + w + 14}"/>
        <path d="M${x} ${base + 18}H${x + w}M${x} ${base + 14}V${base + 22}M${x + w} ${base + 14}V${base + 22}"/>
      </g>
      <text x="${x + w + 12}" y="${y - 8}" text-anchor="middle" ${LABEL_STYLE}>${height} cm</text>
      <text x="${cx}" y="${base + 38}" text-anchor="middle" ${LABEL_STYLE}>${length} cm</text>`;
}

function cushionSizePicture(color, specs) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>${sideView(color, specs, 100, 150)}
    </svg>`;
}

function cushionSizeWide(color, specs) {
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>${sideView(color, specs, 165, 120)}
    </svg>`;
}

// Cut open: the cover in colour, the inner cushion with its filling.
function cushionInsidePicture(color, specs) {
  const filling = fillingPattern(specs);
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      ${filling.defs}
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <rect x="26" y="70" width="148" height="92" rx="30" fill="${color.hex}"/>
      <rect x="36" y="80" width="128" height="72" rx="24" fill="${COTTON}"/>
      <rect x="44" y="88" width="112" height="56" rx="18" fill="url(#${filling.id})"/>
      <text x="100" y="196" text-anchor="middle" ${LABEL_STYLE}>Füllung: ${specs.filling}</text>
    </svg>`;
}

// The cotton fabric up close.
function cushionFabricPicture(color) {
  const id = `weave-${++patternCount}`;
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <defs><pattern id="${id}" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 1.5H6M0 4.5H6" stroke="rgba(255,255,255,.18)" stroke-width="1.4"/><path d="M1.5 0V6M4.5 0V6" stroke="rgba(0,0,0,.1)"/></pattern></defs>
      <rect width="200" height="250" fill="${color.hex}"/>
      <rect width="200" height="250" fill="url(#${id})"/>
      <rect x="40" y="196" width="120" height="26" rx="13" fill="rgba(255,255,255,.85)"/>
      <text x="100" y="213" text-anchor="middle" ${LABEL_STYLE}>Bio-Baumwolle (kbA)</text>
    </svg>`;
}

// Wide pictures for the info rows (330×202, like the mats').
function cushionSittingWide(color, specs) {
  const seat = 32 + CUSHION_SEAT[specs.shape] * 0.8;
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="#ece6dc"/>
      <rect y="138" width="330" height="64" fill="#c9b9a3"/>
      <rect x="92" y="130" width="146" height="16" rx="6" fill="#d9cfc0"/>
      ${cushion(color, specs, 93, 32, 0.8)}
      ${sittingFigure(165, seat - 2, 0.8)}
    </svg>`;
}

// The three Lotus heights side by side; the cushion's own height in its colour.
function cushionHeightsWide(color, specs) {
  const heights = [["lotusCushion10", 10, 14], ["lotusCushion15", 15, 112], ["lotusCushion20", 20, 210]];
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      ${heights.map(([shape, cm, x]) => `
      <g transform="translate(${x} 34) scale(.6)">${shapes[shape](cm === specs.seat ? color.hex : "#d8d3cb")}</g>
      <text x="${x + 54}" y="${cm === specs.seat ? 150 : 148}" text-anchor="middle" ${LABEL_STYLE}${cm === specs.seat ? ' font-weight="700"' : ""}>${cm} cm</text>`).join("")}
    </svg>`;
}

// Opening the cover to take out or add filling.
function cushionRefillWide(color, specs) {
  const filling = fillingPattern(specs);
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      ${filling.defs}
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      ${cushion(color, specs, 20, 18, 0.9)}
      <path d="M210 70h70l8 76h-86z" fill="url(#${filling.id})"/>
      <path d="M210 70h70v10h-70z" fill="rgba(0,0,0,.08)"/>
      <path d="M190 100c-14 0-22 6-26 14" fill="none" stroke="#5f5c52" stroke-dasharray="3 3"/>
      <text x="165" y="182" text-anchor="middle" ${LABEL_STYLE}>Füllmenge nach Gefühl anpassen</text>
    </svg>`;
}

// Cover off and in the wash at 30 °C.
function cushionWashWide(color, specs) {
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      ${cushion(color, specs, 10, 18, 0.9)}
      <path d="M200 66h86l-10 74h-66z" fill="none" stroke="#5f5c52" stroke-width="2"/>
      <path d="M204 84c12 6 22-6 34 0s22 6 34 0" fill="none" stroke="#5f5c52" stroke-width="1.5"/>
      <text x="243" y="122" text-anchor="middle" font-size="16" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">30°</text>
      <text x="165" y="182" text-anchor="middle" ${LABEL_STYLE}>Bezug abnehmbar und waschbar bei 30 °C</text>
    </svg>`;
}

// Spelt next to kapok, for choosing a filling.
function cushionFillingsWide() {
  const spelt = fillingPattern({ filling: "Dinkelspelz" });
  const kapok = fillingPattern({ filling: "Kapok" });
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      ${spelt.defs}${kapok.defs}
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <circle cx="105" cy="92" r="52" fill="url(#${spelt.id})"/>
      <circle cx="225" cy="92" r="52" fill="url(#${kapok.id})" stroke="rgba(0,0,0,.08)"/>
      <text x="105" y="172" text-anchor="middle" ${LABEL_STYLE}>Dinkelspelz: fest, formbar</text>
      <text x="225" y="172" text-anchor="middle" ${LABEL_STYLE}>Kapok: weich, leicht</text>
    </svg>`;
}

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

// Buy box texts for the picked colour; sold-out colours read as on the original.
const cartLabel = (color) => (color.soldOut ? "Benachrichtige mich" : "In den Warenkorb");
const stockText = (color) => (color.soldOut ? "Nicht auf Lager" : "Auf Lager: In 1-3 Tagen bei dir");

// ---------- Page markup ----------
function galleryItems(product, color) {
  return product.gallery.map((key) => {
    const picture = galleryPictures[key];
    return `
          <div class="gallery__item" role="img" aria-label="${product.name}${color.name ? ` in ${color.name}` : ""}, ${picture.label}">${picture.draw(color, product.specs)}</div>`;
  }).join("");
}

function galleryThumbs(product, color, current = 0) {
  return product.gallery.map((key, i) => `
          <button class="gallery__thumb" data-index="${i}" aria-label="Bild ${i + 1} von ${product.gallery.length} zeigen"${i === current ? ' aria-current="true"' : ""}>${galleryPictures[key].draw(color, product.specs)}</button>`).join("");
}

// Rows the original leaves out (e.g. the XL's material) are left out here too.
function detailsMarkup(specs) {
  const rows = [
    ["Material", specs.material],
    specs.width || specs.size ? ["Maße (L × B)", sizeText(specs)] : ["Länge", `${specs.length} cm`],
    ["Dicke", cm(specs.mm)],
    ["Gewicht", specs.weight],
    ["Herkunft", specs.origin],
    ["Hinweis", "Nachbau für ein Studentenprojekt – kein echtes Produkt, daher keine Hersteller- oder Bestellangaben."],
  ];
  return `
        <dl class="facts">${rows.filter(([, value]) => value).map(([term, value]) => `
          <dt>${term}</dt><dd>${value}</dd>`).join("")}
        </dl>`;
}

// Products with their own list of details (the cushions) show it as is.
function factsMarkup(facts) {
  const rows = [...facts, ["Hinweis", "Nachbau für ein Studentenprojekt – kein echtes Produkt, daher keine Hersteller- oder Bestellangaben."]];
  return `
        <dl class="facts">${rows.map(([term, value]) => `
          <dt>${term}</dt><dd>${value}</dd>`).join("")}
        </dl>`;
}

function productMarkup(product) {
  const color = product.colors[0];

  const swatches = product.colors.map((c, i) => `
              <label class="color-swatch">
                <input type="radio" name="color" value="${i}" class="visually-hidden"${i === 0 ? " checked" : ""}>
                <span class="color-swatch__thumb">${galleryPictures[product.swatch || "rolled"].draw(c, product.specs)}</span>
                <span class="visually-hidden">${c.name}</span>
              </label>`).join("");

  // Like the original, a product without colours (WOOL) has no colour choice;
  // a single named colour (the Kapok zafu) still shows its swatch.
  const colorPicker = product.colors.some((c) => c.name) ? `

        <fieldset class="color-picker">
          <legend class="color-picker__legend"><strong>Farbe:</strong> <span class="color-picker__value">${color.name}</span></legend>
          <div class="color-picker__options">${swatches}
          </div>
        </fieldset>` : "";

  const lengths = product.lengths ? `

        <fieldset class="option-picker">
          <legend class="color-picker__legend"><strong>Länge:</strong> <span class="option-picker__value">${product.lengths[0].label}</span></legend>
          <div class="option-picker__options">${product.lengths.map((length, i) => `
            <label class="option-pill">
              <input type="radio" name="length" value="${i}" class="visually-hidden"${i === 0 ? " checked" : ""}>
              <span class="option-pill__label">${length.label}</span>
            </label>`).join("")}
          </div>
        </fieldset>` : "";

  const usps = buyboxUsps.map(([icon, text]) => `
            <li><svg class="buybox__usp-icon" viewBox="0 0 24 24" aria-hidden="true">${buyboxIcons[icon]}</svg>${text}</li>`).join("");

  const accordion = [
    ["Beschreibung", product.description],
    ["Details", product.facts ? factsMarkup(product.facts) : detailsMarkup(product.specs)],
    ["Pflege", product.care],
    ["Nachhaltigkeit", product.sustainability],
  ].map(([title, body]) => `
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
        <div class="gallery__thumbs">${galleryThumbs(product, color)}
        </div>
      </div>

      <div class="buybox">
        <h1 class="buybox__title">${product.name}</h1>${product.subtitle ? `
        <p class="buybox__subtitle">${product.subtitle}</p>` : ""}
        <a href="#bewertungen" class="buybox__rating">${starRating(product.rating)}<span>(${product.buyboxCount || product.reviewCount})</span></a>
        <p class="buybox__price">
          <span class="buybox__amount">${formatPrice(product.price)}</span>
          <span class="buybox__tax">inkl. MwSt. zzgl. <a href="#">Versandkosten</a></span>
        </p>

${colorPicker}${lengths}

        <button class="btn btn--primary btn--block buybox__cart" type="button">${cartLabel(color)}</button>
        <p class="buybox__note"${color.soldOut ? "" : " hidden"}>Du erhältst eine Benachrichtigung per E-Mail, sobald der Artikel wieder auf Lager ist.</p>
        <p class="buybox__stock${color.soldOut ? " buybox__stock--out" : ""}">${stockText(color)}</p>
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
        <div class="feature__media" role="img" aria-label="${picture.label(product.specs)}" data-picture="${feature.picture}">${picture.draw(color, product.specs)}</div>
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
              <p class="review-item__product">${product.name}${review.color ? ` ${review.color}` : ""}</p>
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
  const colorInputs = productRoot.querySelectorAll('input[name="color"]');
  const lengthInputs = productRoot.querySelectorAll('input[name="length"]');
  const amount = productRoot.querySelector(".buybox__amount");
  const cartButton = productRoot.querySelector(".buybox__cart");
  const note = productRoot.querySelector(".buybox__note");
  const stock = productRoot.querySelector(".buybox__stock");
  const added = productRoot.querySelector(".buybox__added");
  let color = product.colors[0];
  let length = product.lengths?.[0]; // only for products with a length choice

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

  // A length can rule out colours (MUDRA PRO: 200 cm only in Anthrazit).
  // Like the original, such combinations are hidden rather than sold out.
  const offered = (c, l) => !l?.without?.includes(c.name);

  // Buy box texts, price and offered choices for the picked colour (and length).
  function updateBuybox() {
    if (colorValue) colorValue.textContent = color.name;
    cartButton.textContent = cartLabel(color);
    note.hidden = !color.soldOut;
    stock.textContent = stockText(color);
    stock.classList.toggle("buybox__stock--out", Boolean(color.soldOut));
    added.textContent = "";
    if (!length) return;
    productRoot.querySelector(".option-picker__value").textContent = length.label;
    amount.textContent = formatPrice(length.price);
    colorInputs.forEach((input, i) => (input.closest("label").hidden = !offered(product.colors[i], length)));
    lengthInputs.forEach((input, i) => (input.closest("label").hidden = !offered(color, product.lengths[i])));
  }

  // Picking a colour redraws every picture in that colour.
  productRoot.querySelector(".color-picker")?.addEventListener("change", (e) => {
    color = product.colors[Number(e.target.value)];
    badge.hidden = !color.matte;
    track.innerHTML = galleryItems(product, color);
    thumbs.innerHTML = galleryThumbs(product, color, currentPicture());
    productRoot.querySelectorAll(".feature__media").forEach((media) => {
      media.innerHTML = featurePictures[media.dataset.picture].draw(color, product.specs);
    });
    updateBuybox();
  });

  productRoot.querySelector(".option-picker")?.addEventListener("change", (e) => {
    length = product.lengths[Number(e.target.value)];
    updateBuybox();
  });

  // Demo cart: adds the picked colour and opens the cart; nothing is ordered.
  // For a sold-out colour the button only explains that no reminder is stored.
  cartButton.addEventListener("click", () => {
    if (color.soldOut) {
      added.textContent = "Nur eine Demo: In diesem Studentenprojekt gibt es keine Benachrichtigungen, es wird nichts gespeichert.";
      return;
    }
    const variant = [color.name, length?.label].filter(Boolean).join(" / ");
    addToCart({
      id: variant ? `${slug}:${variant}` : slug,
      name: product.name,
      variant,
      hex: color.hex,
      price: length ? length.price : product.price,
      href: `produkt.html?p=${slug}${color.name ? `&farbe=${encodeURIComponent(color.name)}` : ""}`,
    });
    openCart();
    added.textContent = `${product.name}${variant ? ` (${variant})` : ""} liegt im Warenkorb – nur eine Demo, es wird nichts bestellt.`;
    cartButton.textContent = "Hinzugefügt ✓";
    setTimeout(() => (cartButton.textContent = cartLabel(color)), 2000);
  });

  // A link can preselect a colour, e.g. from the category page (&farbe=Light Taupe).
  const wanted = product.colors.findIndex((c) => c.name === new URLSearchParams(location.search).get("farbe"));
  if (wanted > 0) colorInputs[wanted].click();
}
