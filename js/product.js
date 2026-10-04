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
  towel: relatedCard("Yoga Handtuch"),
  spray: relatedCard("Bio Yogamatten Spray"),
  mudraPro: relatedCard("Yogamatte MUDRA PRO"),
  eyePillow: relatedCard("Augenkissen"),
  ariseCork: relatedCard("Yogamatte ARISE CORK"),
  almostPerfectProXl: relatedCard("„Almost Perfect“ Yogamatte MUDRA PRO XL"),
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
// it shows the first colour that is in stock, with that colour's price and
// badge. Sets keep their "Set" tag and "ab" price; mats have no `shape`.
function relatedCard(name) {
  const model = allModels.find((candidate) => candidate.name === name);
  const first = model.variants?.find((variant) => !variant.soldOut) || model.variants?.[0] || {};
  return {
    name: model.name,
    slug: model.slug,
    price: first.price ?? model.price,
    compareAt: "compareAt" in first ? first.compareAt : model.compareAt,
    shape: first.shape || model.shape || "mat",
    tint: first.hex || model.tint,
    accent: model.accent,
    badge: first.badge ?? model.badge,
    bundle: model.bundle,
    fromPrice: model.fromPrice,
    swatches: model.swatches,
  };
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
const CUSHION_SCALES = (material, quality, filling) => [["Material", material], ["Qualität & Langlebigkeit", quality], ["Füllmaterial", filling]];

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
    rating: 4.9,
    reviewCount: 679,
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
    reviewCount: 243,
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
    rating: 4.84,
    reviewCount: 381,
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
    rating: 4.89,
    reviewCount: 73,
    ratingScales: CUSHION_SCALES(4.96, 5, 4.95),
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

// ---------- Clothing ----------
// Colours, sizes in stock and prices come from the category data in shared.js;
// ratings, details, size charts and related products were read from the
// original (Oct 2026). As there, a size that is sold out in the picked colour
// can still be chosen and then offers "Benachrichtige mich".
const outfitsOf = (name) => {
  const model = clothes.find((candidate) => candidate.name === name);
  return model.variants.map((variant) => ({
    name: variant.color,
    hex: variant.hex,
    stock: variant.stock,
    soldOut: Boolean(variant.soldOut),
    price: variant.price ?? model.price,
    compareAt: ("compareAt" in variant ? variant.compareAt : model.compareAt) || null,
  }));
};

// One row per size: "size EU-size value value …", all values in cm.
const chartRows = (text) => text.split(" | ").map((row) => row.split(" "));
const CLOTHING_SCALES = (length, fit, quality) => [["Länge", length], ["Passform", fit], ["Material & Qualität", quality]];
const VISCOSE_MIX = "95 % Viskose, 5 % Elasthan";
const RECYCLED_MIX = "72 % recyceltes Polyester, 28 % Elasthan";
const MODAL_MIX = "42,5 % Modal, 42,5 % Bio-Baumwolle, 15 % Elasthan";
const SWEAT_MIX = "70 % Bio-Baumwolle, 30 % Modal";
const clothingFacts = (material, mix, weight, origin, inseam) => [
  ["Material", material],
  ...(mix ? [["Zusammensetzung", mix]] : []),
  ["Gewicht", weight],
  ...(inseam ? [["Beinlänge", inseam]] : []),
  ["Herkunft", origin],
];

// Care and sustainability per fabric, in our own words.
const careList = (...steps) => `
        <ul class="care-list">${steps.map((step) => `
          <li>${step}</li>`).join("")}
        </ul>`;
const WASH_30 = "Bei höchstens 30 °C mit ähnlichen Farben waschen";
const HANG_DRY = "Zum Trocknen aufhängen oder flach auslegen";
const NO_BLEACH = "Nicht bleichen";
const NO_DRY_CLEANING = "Nicht chemisch reinigen";
const NO_DRYER = "Nicht in den Trockner";
const clothingCare = {
  viscose: careList("Bei 30 °C waschen", NO_BLEACH, NO_DRYER, "Vorsichtig dämpfen oder bügeln"),
  recycled: careList(WASH_30, HANG_DRY, "Nicht bügeln", NO_BLEACH, NO_DRY_CLEANING),
  pants: careList(WASH_30, HANG_DRY, NO_BLEACH, NO_DRY_CLEANING),
  cotton: careList(WASH_30, `${HANG_DRY}, vorher in Form ziehen`, NO_DRYER, NO_BLEACH, NO_DRY_CLEANING),
  sweater: `
        <p>Der Stoff ist sanforisiert, also so vorbehandelt, dass er formstabil bleibt und kaum einläuft. Weil Baumwolle eine Naturfaser ist, kann er beim ersten Waschen trotzdem minimal einlaufen.</p>${careList(WASH_30, `${HANG_DRY}, vorher in Form ziehen`, NO_DRYER, NO_BLEACH, NO_DRY_CLEANING)}`,
};
const sustainabilityText = (...points) => points.map(([title, text]) => `
        <p><strong>${title}</strong> – ${text}</p>`).join("");
const MADE_IN_UKRAINE = ["Genäht in Europa", "gefertigt in der Ukraine, mit kurzen Wegen bis zu dir."];
const MADE_IN_PORTUGAL = ["Genäht in Portugal", "gefertigt in der EU, mit kurzen Lieferwegen."];
const clothingSustainability = {
  viscose: sustainabilityText(MADE_IN_UKRAINE, ["Viskose aus zertifiziertem Holz", "das Holz für die Fasern stammt aus PEFC- bzw. FSC-zertifizierter Forstwirtschaft."]),
  recycled: sustainabilityText(MADE_IN_UKRAINE, ["Hoher Recyclinganteil", "72 % des Stoffs sind recyceltes Polyester. Das spart neue Rohstoffe."]),
  cotton: sustainabilityText(MADE_IN_PORTUGAL, ["Bio-Baumwolle", "die Baumwolle stammt aus kontrolliert biologischem Anbau (kbA)."]),
};
const clothingGallery = ["garmentFront", "garmentWarrior", "garmentFabric", "garmentTree", "garmentMeasure", "garmentFolded"];

// `fabric` labels the fabric pictures, `madeIn` the origin picture, `chart`
// is the size chart (its columns are numbered in the drawings), `pair` the
// garment shown alongside (same colour unless it has its own `hex`).
// Reviews add body height, bought and usual size, like the original's.
const clothingDetails = {
  "amina-wrap-top": {
    name: "Amina Wrap Top",
    subtitle: "Wickeltop mit langen Ärmeln – zum Binden, so eng oder locker du magst.",
    rating: 4.79,
    reviewCount: 14,
    ratingScales: CLOTHING_SCALES(2.7, 2.82, 4.09),
    specs: {
      fabric: VISCOSE_MIX,
      madeIn: "in der Ukraine",
      chart: { columns: ["Brustweite", "Saumweite", "Länge", "Armlänge"], rows: chartRows("XS 34 41,5 33,5 41,4 59,8 | S 36/38 44 36 42 60 | M 40 46,5 38,5 42,5 60,2 | L 42 49 41 43 60,4 | XL 44 51,5 43,5 43,5 60,6 | XXL 46 54 46 44 60,8") },
      pair: { shape: "culotte", label: "Kombiniert mit der Heya Culotte in derselben Farbe" },
    },
    facts: clothingFacts("Viskose", VISCOSE_MIX, "260 g", "Ukraine"),
    care: clothingCare.viscose,
    sustainability: clothingSustainability.viscose,
    description: `
        <p>Das Amina Wrap Top wird vorne übereinandergelegt und an der Seite gebunden. So entscheidest du selbst, wie eng es sitzt: beim Üben etwas fester, im Alltag lockerer. Die langen Ärmel halten dich warm, wenn du auf der Matte ankommst.</p>
        <p>Der Viskose-Jersey mit 5 % Elasthan fällt weich und fließend, dehnt sich mit und findet danach in seine Form zurück.</p>`,
    features: [
      { title: "Gebunden statt geknöpft", text: "Die beiden Vorderteile legst du übereinander und knotest sie an der Seite. Kein Knopf und kein Reißverschluss drückt, wenn du dich auf den Bauch legst oder tief nach vorn beugst.", picture: "outfitWarrior" },
      { title: "Weich und fließend", text: "95 % Viskose und 5 % Elasthan ergeben einen leichten Jersey, der sich kühl auf der Haut anfühlt und schön fällt.", picture: "fabricClose" },
      { title: "Ein ruhiger Look in einer Farbe", text: "Zusammen mit der Heya Culotte in derselben Farbe wird aus zwei Teilen ein Outfit – für die Matte genauso wie für unterwegs.", picture: "pair" },
    ],
    reviews: [
      { name: "Lea", place: "Freiburg, DE", color: "Dark Cranberry", height: "~168 cm", size: "S", usual: "S", stars: 5, days: 3, text: "Wunderschöne Farbe, und der Stoff fällt richtig schön. Beim Yoga binde ich es etwas enger, im Büro locker." },
      { name: "Anonym", place: "", color: "Almond Milk", height: "~172 cm", size: "M", usual: "M", stars: 5, days: 8, text: "Fühlt sich weich und kühl an, perfekt für Yin Yoga. Die langen Ärmel mag ich sehr." },
      { name: "Katrin", place: "Salzburg, AT", color: "Midnight Blue", height: "~165 cm", size: "L", usual: "L", stars: 4, days: 12, text: "Sitzt gut. Für meinen Geschmack dürfte es ein wenig länger sein, über einer hohen Hose passt es aber perfekt." },
      { name: "Mira", place: "Leipzig, DE", color: "Dark Cranberry", height: "~158 cm", size: "XS", usual: "XS", stars: 5, days: 17, text: "Das Binden geht schnell, und beim Üben sitzt es angenehm." },
      { name: "Johanna", place: "Bern, CH", color: "Almond Milk", height: "~170 cm", size: "S", usual: "S", stars: 5, days: 25, text: "Schlicht und elegant. Ich trage es auch zur Jeans." },
      { name: "Nora", place: "Kassel, DE", color: "Midnight Blue", height: "~175 cm", size: "M", usual: "M", stars: 5, days: 33, text: "Mit der Heya Culotte in derselben Farbe ein sehr ruhiger, schöner Look." },
    ],
    related: ["Heya Culotte", "ALA Tank Tee", "Naima Top", "NIA Womens Sweater"],
  },
  "naima-top": {
    name: "Naima Top",
    subtitle: "Leichtes Top mit kurzen Flügelärmeln für warme Tage und ruhige Flows.",
    rating: 4.69,
    reviewCount: 16,
    ratingScales: CLOTHING_SCALES(3, 3.06, 4.13),
    specs: {
      fabric: VISCOSE_MIX,
      madeIn: "in der Ukraine",
      chart: { columns: ["Brustweite", "Saumweite", "Länge"], rows: chartRows("XS 34 43,5 47,5 59 | S 36/38 46 50 60 | M 40 48,5 52,5 61 | L 42 51 55 62 | XL 44 53,5 57,5 63 | XXL 46 56 60 64") },
      pair: { shape: "culotte", label: "Kombiniert mit der Heya Culotte in derselben Farbe" },
    },
    facts: clothingFacts("Viskose", VISCOSE_MIX, "160 g", "Ukraine"),
    care: clothingCare.viscose,
    sustainability: clothingSustainability.viscose,
    description: `
        <p>Das Naima Top ist schlicht geschnitten und sitzt locker, ohne aufzutragen. Die kurzen, angeschnittenen Ärmel lassen deinen Schultern Raum – beim Üben genauso wie im Café danach.</p>
        <p>Mit 160 g ist der Viskose-Jersey angenehm leicht. 5 % Elasthan sorgen dafür, dass das Top auch nach vielen Sonnengrüßen in Form bleibt.</p>`,
    features: [
      { title: "Leicht wie ein T-Shirt", text: "Der dünne Jersey aus Viskose fühlt sich kühl an und trägt kaum auf. Gerade an warmen Tagen und in geheizten Räumen ist das angenehm.", picture: "fabricClose" },
      { title: "Raum für die Schultern", text: "Die kurzen Flügelärmel sind direkt angeschnitten. Wenn du die Arme hebst, spannt nichts unter den Achseln.", picture: "outfitTree" },
      { title: "Ein Teil, viele Kombinationen", text: "Zur Heya Culotte in derselben Farbe, zur Leggings oder zur Jeans – das Naima Top passt sich deinem Tag an.", picture: "pair" },
    ],
    reviews: [
      { name: "Sophie", place: "Mainz, DE", color: "Dark Cranberry", height: "~170 cm", size: "M", usual: "M", stars: 5, days: 2, text: "Leicht, luftig und eine wunderschöne Farbe. Mein Lieblingstop für den Sommer." },
      { name: "Anonym", place: "", color: "Midnight Blue", height: "~163 cm", size: "S", usual: "S", stars: 5, days: 6, text: "Sitzt locker, aber nicht zu weit. Die kurzen Ärmel stören in keiner Haltung." },
      { name: "Carla", place: "Graz, AT", color: "Almond Milk", height: "~168 cm", size: "L", usual: "L", stars: 4, days: 11, text: "Schönes Basic. Ich hätte es gern noch in mehr Farben." },
      { name: "Ella", place: "Rostock, DE", color: "Dark Cranberry", height: "~160 cm", size: "XS", usual: "XS", stars: 5, days: 15, text: "Gleich in zwei Farben bestellt. Passt zu allem." },
      { name: "Vanessa", place: "Basel, CH", color: "Midnight Blue", height: "~174 cm", size: "M", usual: "M", stars: 5, days: 22, text: "Weich und angenehm auf der Haut. Ich trage es zum Yoga und im Alltag." },
      { name: "Anonym", place: "", color: "Almond Milk", height: "~178 cm", size: "XL", usual: "XL", stars: 4, days: 30, text: "Gute Länge, bequemer Schnitt. Die Farbe ist etwas heller als auf meinem Bildschirm." },
    ],
    related: ["Heya Culotte", "ALA Tank Tee", "Amina Wrap Top", "DANA Overall"],
  },
  "heya-culotte": {
    name: "Heya Culotte",
    subtitle: "Weite Culotte mit hohem Bund: luftig wie ein Rock und frei in jeder Bewegung.",
    rating: 4.65,
    reviewCount: 23,
    ratingScales: CLOTHING_SCALES(2.96, 3.17, 4.04),
    specs: {
      fabric: VISCOSE_MIX,
      madeIn: "in der Ukraine",
      chart: { columns: ["Taille", "Hüfte", "Oberschenkel", "Innenbeinlänge"], rows: chartRows("XS 34 30,5 48,5 29,5 65 | S 36/38 33 51 31 65 | M 40 35,5 53,5 32,5 65 | L 42 38 56 34 65 | XL 44 40,5 58,5 35,5 65 | XXL 46 43 61 37 65") },
      pair: { shape: "top", label: "Kombiniert mit dem Naima Top in derselben Farbe" },
    },
    facts: clothingFacts("Viskose", VISCOSE_MIX, "340 g", "Ukraine", "65 cm"),
    care: clothingCare.viscose,
    sustainability: clothingSustainability.viscose,
    description: `
        <p>Die Heya Culotte hat weite, wadenlange Beine und einen breiten, hohen Bund, der nicht einschneidet. Beim Gehen schwingt der Stoff mit, beim Üben lässt er dir viel Bewegungsfreiheit.</p>
        <p>Mit 65 cm Innenbeinlänge in allen Größen endet sie über dem Knöchel – so trittst du auch im Ausfallschritt nicht auf den Saum.</p>`,
    features: [
      { title: "Hoher, weicher Bund", text: "Der breite Bund sitzt in der Taille und liegt flach an. Im Sitzen und in Vorbeugen drückt er nicht in den Bauch.", picture: "measure" },
      { title: "Weite, die mitschwingt", text: "Die weiten Beine fallen locker und geben dir Platz für weite Schritte, tiefe Hocken und den Weg nach Hause.", picture: "outfitWarrior" },
      { title: "Fließender Viskose-Jersey", text: "95 % Viskose und 5 % Elasthan machen den Stoff weich und schwer genug, dass er schön fällt.", picture: "fabricClose" },
      { title: "Passt zu Naima und Amina", text: "Mit einem Top in derselben Farbe wirkt die Culotte fast wie ein Jumpsuit – nur bequemer an- und auszuziehen.", picture: "pair" },
    ],
    reviews: [
      { name: "Maja", place: "Würzburg, DE", color: "Dark Cranberry", height: "~167 cm", size: "M", usual: "M", stars: 5, days: 4, text: "Die bequemste Hose, die ich habe. Der hohe Bund drückt überhaupt nicht." },
      { name: "Anonym", place: "", color: "Almond Milk", height: "~171 cm", size: "L", usual: "L", stars: 5, days: 9, text: "Fühlt sich an wie ein Rock und ist doch eine Hose. Perfekt für warme Tage." },
      { name: "Tamara", place: "Innsbruck, AT", color: "Midnight Blue", height: "~176 cm", size: "S", usual: "S", stars: 4, days: 14, text: "Bei meiner Größe endet sie ein gutes Stück über dem Knöchel. Mir gefällt das, man sollte es aber wissen." },
      { name: "Ines", place: "Bonn, DE", color: "Dark Cranberry", height: "~169 cm", size: "XXL", usual: "XXL", stars: 5, days: 20, text: "Schöner, fließender Stoff und eine tolle Farbe." },
      { name: "Paula", place: "Ulm, DE", color: "Almond Milk", height: "~162 cm", size: "M", usual: "S", stars: 4, days: 27, text: "Fällt eher groß aus, beim nächsten Mal nehme ich eine Nummer kleiner." },
      { name: "Anonym", place: "", color: "Midnight Blue", height: "~170 cm", size: "M", usual: "M", stars: 5, days: 35, text: "Mit dem Naima Top in derselben Farbe sieht das fast wie ein Jumpsuit aus." },
    ],
    related: ["Naima Top", "Amina Wrap Top", "MIKO Bralette", "ELI Womens Tee (Short Sleeve)"],
  },
  "miko-bralette": {
    name: "MIKO Bralette",
    subtitle: "Bralette mit schmalen Trägern – leichter Halt für ruhige und fließende Stunden.",
    rating: 4,
    reviewCount: 2,
    ratingScales: CLOTHING_SCALES(3, 3.4, 3.8),
    specs: {
      fabric: RECYCLED_MIX,
      madeIn: "in der Ukraine",
      chart: { columns: ["Brustweite", "Saumweite", "Länge"], rows: chartRows("XS 34 36,5 32,5 31,5 | S 36-38 39 35 32 | M 40-42 41,5 37,5 32,5 | L 42-44 44 40 33 | XL 44-46 46,5 42,5 33,5 | XXL 46-48 49 45 34") },
      pair: { shape: "leggings", hex: "#3d3d3f", label: "Kombiniert mit der BECCA Leggings in Anthrazit" },
    },
    facts: clothingFacts("Recyceltes Polyester", RECYCLED_MIX, "120 g", "Ukraine"),
    care: clothingCare.recycled,
    sustainability: clothingSustainability.recycled,
    description: `
        <p>Die MIKO Bralette kommt ohne Bügel und ohne Verschluss aus. Ein breiter, elastischer Bund unter der Brust gibt leichten Halt, die schmalen Träger stören in keiner Haltung.</p>
        <p>Der glatte Stoff aus 72 % recyceltem Polyester und 28 % Elasthan liegt eng an und trocknet schnell.</p>`,
    features: [
      { title: "Ohne Bügel, ohne Druck", text: "Nichts drückt oder schneidet ein, auch nicht im Liegen. Die Bralette ist für ruhige und fließende Stunden gedacht.", picture: "outfitTree" },
      { title: "Aus recyceltem Polyester", text: "Fast drei Viertel des Stoffs bestehen aus recyceltem Polyester. Elasthan sorgt dafür, dass er dehnbar bleibt.", picture: "fabricClose" },
      { title: "Passt zur BECCA Leggings", text: "Gleicher Stoff, gleiche Farben: Mit der BECCA Leggings ergibt die Bralette ein schlichtes Set.", picture: "pair" },
    ],
    reviews: [
      { name: "Lina", place: "Potsdam, DE", color: "Violetta", height: "~166 cm", size: "S", usual: "S", stars: 5, days: 10, text: "Angenehm leicht, nichts drückt. Für ruhige Stunden genau richtig." },
      { name: "Anonym", place: "", color: "Anthrazit", height: "~172 cm", size: "M", usual: "M", stars: 3, days: 26, text: "Schöner Stoff, für dynamische Flows hätte ich mir aber mehr Halt gewünscht. Für Yin Yoga ist sie top." },
    ],
    related: ["BECCA Leggings", "DANA Overall", "ALA Tank Tee", "„Almost Perfect“ Yogamatte MUDRA PRO XL"],
  },
  "ala-tank-tee": {
    name: "ALA Tank Tee",
    subtitle: "Eng anliegendes Tank-Top, das in Umkehrhaltungen bleibt, wo es hingehört.",
    rating: 3.75,
    reviewCount: 4,
    ratingScales: CLOTHING_SCALES(3.29, 2.43, 3.71),
    specs: {
      fabric: RECYCLED_MIX,
      madeIn: "in der Ukraine",
      chart: { columns: ["Brustweite", "Saumweite", "Länge"], rows: chartRows("XS 34 34,5 34 58 | S 36-38 37 36,5 59 | M 40-42 39,5 39 60 | L 42-44 42 41,5 61 | XL 44-46 44,5 44 62 | XXL 46-48 47 46,5 63") },
      pair: { shape: "leggings", label: "Kombiniert mit der BECCA Leggings in derselben Farbe" },
    },
    facts: clothingFacts("Recyceltes Polyester", RECYCLED_MIX, "200 g", "Ukraine"),
    care: clothingCare.recycled,
    sustainability: clothingSustainability.recycled,
    description: `
        <p>Das ALA Tank Tee sitzt eng am Körper und rutscht auch im herabschauenden Hund nicht über den Kopf. Mit rundem Ausschnitt und breiten Trägern ist es ein ruhiges Basic für jede Stunde.</p>
        <p>72 % recyceltes Polyester und 28 % Elasthan machen den Stoff dehnbar, formstabil und schnell trocken.</p>`,
    features: [
      { title: "Bleibt, wo es hingehört", text: "Weil das Tee eng anliegt, musst du es auch in Umkehrhaltungen nicht festhalten oder zurechtziehen.", picture: "outfitDog" },
      { title: "Aus recyceltem Polyester", text: "Der dehnbare Stoff besteht zu 72 % aus recyceltem Polyester und trocknet nach schweißtreibenden Stunden schnell.", picture: "fabricClose" },
      { title: "Das Basic zur BECCA", text: "In denselben Farben wie die BECCA Leggings: zusammen ein schlichtes Outfit für dynamische Stunden.", picture: "pair" },
    ],
    reviews: [
      { name: "Rebecca", place: "Hannover, DE", color: "Violetta", height: "~170 cm", size: "M", usual: "M", stars: 5, days: 5, text: "Sitzt eng und bleibt auch in der Kerze, wo es sein soll. Tolle Farbe." },
      { name: "Anonym", place: "", color: "Anthrazit", height: "~168 cm", size: "L", usual: "M", stars: 4, days: 13, text: "Fällt klein aus – ich trage sonst M und habe L genommen. Damit passt es gut." },
      { name: "Svenja", place: "Lübeck, DE", color: "Marshmallow", height: "~164 cm", size: "S", usual: "S", stars: 4, days: 21, text: "Schönes Basic für unter einen Pullover. Etwas enger, als ich dachte." },
      { name: "Daniela", place: "Wels, AT", color: "Anthrazit", height: "~173 cm", size: "M", usual: "M", stars: 2, days: 34, text: "In meiner üblichen Größe zu eng. Ich tausche gegen eine Nummer größer." },
    ],
    related: ["BECCA Leggings", "ELI Womens Tee (Short Sleeve)", "MIKO Bralette", "DANA Overall"],
  },
  "dana-overall": {
    name: "DANA Overall",
    subtitle: "Einteiler in Leggings-Länge: ein Teil an, und du bist bereit für die Matte.",
    rating: 4.25,
    reviewCount: 4,
    ratingScales: CLOTHING_SCALES(3.75, 2.75, 4.5),
    specs: {
      fabric: RECYCLED_MIX,
      madeIn: "in der Ukraine",
      chart: { columns: ["Brustweite", "Oberschenkel", "Beinlänge", "Länge"], rows: chartRows("XS 34 31,5 17,3 89,5 47,7 | S 36-38 34 18,2 90,5 47,4 | M 40-42 36,5 19,1 91,5 48,1 | L 42-44 39 20 92,5 48,8 | XL 44-46 41,5 20,9 93,5 49,5 | XXL 46-48 44 21,8 94,5 50,2") },
    },
    facts: clothingFacts("Recyceltes Polyester", RECYCLED_MIX, "380 g", "Ukraine"),
    care: clothingCare.recycled,
    sustainability: clothingSustainability.recycled,
    description: `
        <p>Der DANA Overall verbindet Top und Leggings zu einem Teil. Nichts rutscht, nichts verdreht sich, und kein Bund schneidet in den Bauch – angenehm in Stunden mit vielen Umkehrhaltungen.</p>
        <p>Der dehnbare Stoff aus 72 % recyceltem Polyester und 28 % Elasthan liegt eng an und bleibt in Form.</p>`,
    features: [
      { title: "Ein Teil, kein Bund", text: "Weil Ober- und Unterteil verbunden sind, gibt es keinen Bund, der rollt oder drückt. Du ziehst den Overall an und musst danach nicht mehr an ihm zupfen.", picture: "outfitDog" },
      { title: "Mit dir in Bewegung", text: "28 % Elasthan geben dem Stoff viel Dehnung – für weite Ausfallschritte genauso wie für die Kerze.", picture: "outfitWarrior" },
      { title: "Aus recyceltem Polyester", text: "Fast drei Viertel des Stoffs bestehen aus recyceltem Polyester. Er trocknet schnell und bleibt lange in Form.", picture: "fabricClose" },
    ],
    reviews: [
      { name: "Alina", place: "Erfurt, DE", color: "Marshmallow", height: "~165 cm", size: "S", usual: "S", stars: 5, days: 7, text: "Ein Teil anziehen und fertig – nichts rutscht, nichts zwickt am Bauch." },
      { name: "Anonym", place: "", color: "Anthrazit", height: "~170 cm", size: "M", usual: "M", stars: 5, days: 16, text: "Sitzt eng und trotzdem bequem. Für Umkehrhaltungen ideal." },
      { name: "Franziska", place: "Regensburg, DE", color: "Marshmallow", height: "~178 cm", size: "L", usual: "M", stars: 4, days: 24, text: "Oben herum etwas knapp, mit L passt es. Die Beinlänge ist für mich super." },
      { name: "Selin", place: "Zürich, CH", color: "Marshmallow", height: "~160 cm", size: "M", usual: "M", stars: 3, days: 38, text: "Schönes Material, aber die Beine sind mir zu lang. Für große Menschen sicher perfekt." },
    ],
    related: ["ALA Tank Tee", "MIKO Bralette", "NIA Womens Sweater", "BECCA Leggings"],
  },
  "becca-leggings": {
    name: "BECCA Leggings",
    subtitle: "Leggings mit hohem, breitem Bund aus recyceltem Polyester.",
    rating: 2.4,
    reviewCount: 5,
    ratingScales: CLOTHING_SCALES(4.1, 2.56, 4),
    specs: {
      fabric: RECYCLED_MIX,
      madeIn: "in der Ukraine",
      chart: { columns: ["Taille", "Innenbeinlänge"], rows: chartRows("XS 34 29 71,9 | S 36-38 31,5 72,2 | M 40-42 34 72,5 | L 42-44 36,5 72,8 | XL 44-46 39 73,1 | XXL 46-48 41,5 73,4") },
    },
    facts: clothingFacts("Recyceltes Polyester", RECYCLED_MIX, "230 g", "Ukraine", "71,9 cm"),
    care: clothingCare.recycled,
    sustainability: clothingSustainability.recycled,
    description: `
        <p>Die BECCA Leggings sitzt hoch in der Taille, ihr breiter Bund liegt flach am Bauch an. Die Beine sind lang geschnitten und reichen bis zum Knöchel.</p>
        <p>Der glatte Stoff aus 72 % recyceltem Polyester und 28 % Elasthan ist dehnbar und trocknet schnell. Miss am besten vorher nach: Die Größentabelle zeigt Taille und Innenbeinlänge für jede Größe.</p>`,
    features: [
      { title: "Hoher, breiter Bund", text: "Der Bund reicht bis in die Taille und hält die Leggings an ihrem Platz – im Stehen, im Sitzen und in Vorbeugen.", picture: "measure" },
      { title: "Dehnbar in jede Richtung", text: "Dank 28 % Elasthan geht der Stoff jede Bewegung mit und findet danach wieder in seine Form.", picture: "outfitDog" },
      { title: "Aus recyceltem Polyester", text: "Fast drei Viertel des Stoffs bestehen aus recyceltem Polyester – das spart neue Rohstoffe.", picture: "fabricClose" },
    ],
    reviews: [
      { name: "Kim", place: "Bochum, DE", color: "Anthrazit", height: "~176 cm", size: "M", usual: "M", stars: 4, days: 3, text: "Angenehmer Stoff und ein hoher Bund, der gut sitzt. Bei meiner Größe passt auch die Länge." },
      { name: "Anonym", place: "", color: "Marshmallow", height: "~163 cm", size: "S", usual: "S", stars: 3, days: 9, text: "Das Material gefällt mir, die Beine sind mir aber deutlich zu lang." },
      { name: "Lisa", place: "Gießen, DE", color: "Violetta", height: "~168 cm", size: "M", usual: "M", stars: 2, days: 18, text: "Fällt klein aus, an den Oberschenkeln zu eng. Lieber eine Größe größer bestellen." },
      { name: "Anonym", place: "", color: "Anthrazit", height: "~158 cm", size: "XS", usual: "XS", stars: 2, days: 29, text: "Für meine Größe zu lang, am Knöchel schlägt der Stoff Falten." },
      { name: "Merle", place: "Oldenburg, DE", color: "Marshmallow", height: "~170 cm", size: "L", usual: "L", stars: 1, days: 41, text: "Die Passform passt leider nicht zu meiner Figur. Am besten vorher mit der Größentabelle nachmessen." },
    ],
    related: ["ALA Tank Tee", "MIKO Bralette", "NIA Womens Sweater", "DANA Overall"],
  },
  "fiona-womens-pants": {
    name: "FIONA Womens Pants",
    subtitle: "Bequeme Hose aus Bio-Baumwolle und Modal – für die Matte und den Weg dorthin.",
    rating: 3,
    reviewCount: 3,
    ratingScales: CLOTHING_SCALES(3, 3, 4.5),
    specs: {
      fabric: MODAL_MIX,
      madeIn: "in Portugal",
      chart: { columns: ["Taille", "Oberschenkel", "Innenbeinlänge"], rows: chartRows("XS 34 31 23,5 70,5 | S 36-38 33 24,5 71,5 | M 40-42 35 25,5 72,5 | L 42-44 37 26,5 73,5 | XL 44-46 39 27,5 74,5 | XXL 46-48 41 28,5 75,5") },
    },
    facts: clothingFacts("Bio-Baumwolle (kbA)", MODAL_MIX, "470 g", "Portugal", "70,5 cm"),
    care: clothingCare.pants,
    sustainability: clothingSustainability.cotton,
    description: `
        <p>Die FIONA Pants ist eine gerade geschnittene Hose mit weichem Bund. Sie ist bequem genug für Yin Yoga und Meditation und sieht trotzdem ordentlich aus, wenn du danach noch etwas vorhast.</p>
        <p>Je 42,5 % Modal und Bio-Baumwolle und 15 % Elasthan machen den Stoff weich, dehnbar und angenehm griffig.</p>`,
    features: [
      { title: "Für lange, ruhige Sitzungen", text: "Der weiche Bund drückt auch nach einer langen Meditation nicht, und der Stoff spannt nicht über den Knien.", picture: "outfitSeated" },
      { title: "Weich durch Modal", text: "Modal ist eine Faser aus Holz und macht die Baumwolle besonders weich und geschmeidig.", picture: "fabricClose" },
      { title: "Bewegungsfreiheit inklusive", text: "15 % Elasthan geben genug Dehnung für tiefe Ausfallschritte und den herabschauenden Hund.", picture: "outfitDog" },
      { title: "Genäht in Portugal", text: "Die FIONA Pants entsteht in Portugal, also in der EU und mit kurzen Wegen.", picture: "origin" },
    ],
    reviews: [
      { name: "Judith", place: "Konstanz, DE", color: "Anthrazit", height: "~167 cm", size: "S", usual: "S", stars: 4, days: 12, text: "Sehr weich und bequem, ich trage sie auch im Homeoffice." },
      { name: "Anonym", place: "", color: "Stone Blue", height: "~171 cm", size: "M", usual: "M", stars: 3, days: 27, text: "Schöner Stoff, an der Hüfte ist sie mir aber etwas zu weit." },
      { name: "Helena", place: "Linz, AT", color: "Anthrazit", height: "~162 cm", size: "L", usual: "L", stars: 2, days: 44, text: "Für mich nicht die richtige Passform. Der Stoff selbst ist aber schön." },
    ],
    related: ["NIA Womens Sweater", "QUINN Mens Pants", "BECCA Leggings", "DANA Overall"],
  },
  "quinn-mens-pants": {
    name: "QUINN Mens Pants",
    subtitle: "Yogahose für Männer aus Bio-Baumwolle und Modal mit weichem Bund.",
    rating: 3.67,
    reviewCount: 3,
    ratingScales: CLOTHING_SCALES(2.5, 3.17, 4.67),
    specs: {
      fabric: MODAL_MIX,
      madeIn: "in Portugal",
      chart: { columns: ["Taille", "Oberschenkel", "Innenbeinlänge"], rows: chartRows("S 44-46 37 26 69,5 | M 46-48 39 27 70,5 | L 48-50 41 28 71,5 | XL 52-54 43 29 72,5 | XXL 56-58 45 30 73,5") },
    },
    facts: clothingFacts("Bio-Baumwolle (kbA)", MODAL_MIX, "440 g", "Portugal"),
    care: clothingCare.pants,
    sustainability: clothingSustainability.cotton,
    description: `
        <p>Die QUINN Pants ist eine bequeme Herrenhose mit elastischem Bund und leicht schmal zulaufenden Beinen. Sie gibt dir Raum für tiefe Ausfallschritte und sieht auch nach der Stunde noch gut aus.</p>
        <p>Je 42,5 % Modal und Bio-Baumwolle und 15 % Elasthan machen den Stoff weich und dehnbar.</p>`,
    features: [
      { title: "Raum für jede Bewegung", text: "Im Krieger, in der Hocke oder im Lotussitz: Der dehnbare Stoff geht mit und spannt nicht.", picture: "outfitWarrior" },
      { title: "Weich und griffig", text: "Die Mischung aus Modal und Bio-Baumwolle fühlt sich weich an und ist trotzdem kräftig genug für den Alltag.", picture: "fabricClose" },
      { title: "Genäht in Portugal", text: "Die QUINN Pants entsteht in Portugal, also in der EU und mit kurzen Wegen.", picture: "origin" },
    ],
    reviews: [
      { name: "Felix", place: "Münster, DE", color: "Deep Taupe", height: "~182 cm", size: "L", usual: "L", stars: 5, days: 6, text: "Endlich eine Yogahose für Männer, die nicht nach Jogginghose aussieht. Sehr bequem." },
      { name: "Anonym", place: "", color: "Anthrazit", height: "~178 cm", size: "M", usual: "M", stars: 4, days: 19, text: "Weicher Stoff und ein guter Bund. Die Beine dürften für mich etwas länger sein." },
      { name: "Tobias", place: "Chur, CH", color: "Stone Blue", height: "~190 cm", size: "XL", usual: "XL", stars: 2, days: 37, text: "Bei 1,90 m leider zu kurz. Stoff und Verarbeitung gefallen mir aber." },
    ],
    related: ["REID Mens Tank-Top", "FIONA Womens Pants", "FEND Mens Sweater", "Yogatasche PUNE"],
  },
  "eli-womens-tee-short-sleeve": {
    name: "ELI Womens Tee (Short Sleeve)",
    subtitle: "Kurzarm-Shirt aus 100 % Bio-Baumwolle mit entspanntem Schnitt.",
    rating: 5,
    reviewCount: 3,
    ratingScales: CLOTHING_SCALES(3.25, 3.25, 3.75),
    specs: {
      fabric: "100 % Bio-Baumwolle",
      madeIn: "in Portugal",
      chart: { columns: ["Brustweite", "Saumweite", "Länge"], rows: chartRows("XS 34 60,5 62,5 48 | S 36-38 62,5 64,5 50 | M 40-42 64,5 66,5 52 | L 42-44 66,5 68,5 54 | XL 44-46 68,5 70,5 56") },
      pair: { shape: "leggings", hex: "#3d3d3f", label: "Kombiniert mit der BECCA Leggings in Anthrazit" },
    },
    facts: clothingFacts("Bio-Baumwolle (kbA)", "100 % Bio-Baumwolle", "180 g", "Portugal"),
    care: clothingCare.cotton,
    sustainability: clothingSustainability.cotton,
    description: `
        <p>Das ELI Tee ist ein T-Shirt mit kurzen Ärmeln und entspanntem Schnitt. Über Leggings sieht es genauso gut aus wie zur Jeans.</p>
        <p>Der Jersey aus 100 % Bio-Baumwolle ist weich und atmungsaktiv – angenehm auf der Haut, gerade an warmen Tagen.</p>`,
    features: [
      { title: "Reine Bio-Baumwolle", text: "Ein Stoff, nur eine Faser: 100 % Bio-Baumwolle aus kontrolliert biologischem Anbau.", picture: "fabricClose" },
      { title: "Entspannt, nicht weit", text: "Das Tee sitzt locker, flattert aber nicht. So bleibt es auch beim Üben, wo es hingehört.", picture: "outfitTree" },
      { title: "Über Leggings und Hosen", text: "Zur BECCA Leggings, zur FIONA Pants oder zur Jeans – ein Basic für jeden Tag.", picture: "pair" },
    ],
    reviews: [
      { name: "Hannah", place: "Jena, DE", color: "Violetta", height: "~169 cm", size: "M", usual: "M", stars: 5, days: 8, text: "Weich, locker und eine wunderschöne Farbe. Mein neues Lieblingsshirt." },
      { name: "Anonym", place: "", color: "Marshmallow", height: "~174 cm", size: "L", usual: "L", stars: 5, days: 20, text: "Passt über Leggings und Jeans gleichermaßen gut." },
      { name: "Eva", place: "Villach, AT", color: "Anthrazit", height: "~166 cm", size: "L", usual: "L", stars: 5, days: 31, text: "Angenehm auf der Haut, auch an heißen Tagen." },
    ],
    related: ["BECCA Leggings", "ALA Tank Tee", "MIKO Bralette", "NIA Womens Sweater"],
  },
  "reid-mens-tank-top": {
    name: "REID Mens Tank-Top",
    subtitle: "Tank-Top für Männer aus Bio-Baumwolle – luftig für schweißtreibende Stunden.",
    rating: 5,
    reviewCount: 1,
    ratingScales: CLOTHING_SCALES(3.13, 2.88, 4.71),
    specs: {
      madeIn: "in Portugal",
      chart: { columns: ["Brustweite", "Saumweite", "Länge"], rows: chartRows("S 36-38 53 54,5 69 | M 40-42 55 56,5 71 | L 42-44 57 58,5 73 | XL 44-46 59 60,5 75") },
      pair: { shape: "pants", hex: "#9a8878", label: "Kombiniert mit der QUINN Pants in Deep Taupe" },
    },
    facts: clothingFacts("Bio-Baumwolle (kbA)", null, "190 g", "Portugal"),
    care: clothingCare.cotton,
    sustainability: clothingSustainability.cotton,
    description: `
        <p>Das REID Tank-Top hat weite Armausschnitte und lässt deinen Schultern volle Bewegungsfreiheit – ideal für kraftvolle Flows und warme Räume.</p>
        <p>Der Stoff aus Bio-Baumwolle ist weich und atmungsaktiv.</p>`,
    features: [
      { title: "Freie Schultern", text: "Die weiten Armausschnitte geben dir Platz für Sonnengrüße, Krieger und alles, was die Arme über den Kopf bringt.", picture: "outfitWarrior" },
      { title: "Aus Bio-Baumwolle", text: "Weich, atmungsaktiv und angenehm auf der Haut – auch wenn die Stunde schweißtreibend wird.", picture: "fabricClose" },
      { title: "Passt zur QUINN Pants", text: "Zusammen mit der QUINN Pants hast du ein bequemes Outfit für die Matte und den Weg dorthin.", picture: "pair" },
    ],
    reviews: [
      { name: "Lukas", place: "Darmstadt, DE", color: "Marshmallow", height: "~180 cm", size: "M", usual: "M", stars: 5, days: 14, text: "Luftig, bequem und viel Platz für die Schultern. Genau richtig für Power Yoga." },
    ],
    related: ["QUINN Mens Pants", "ALA Tank Tee", "FEND Mens Sweater", "Naima Top"],
  },
  "fend-mens-sweater": {
    name: "FEND Mens Sweater",
    subtitle: "Sweater für Männer aus Bio-Baumwolle und Modal – warm nach der Stunde.",
    rating: 4,
    reviewCount: 1,
    ratingScales: CLOTHING_SCALES(1.5, 1.5, 4.5),
    specs: {
      fabric: SWEAT_MIX,
      madeIn: "in Portugal",
      chart: { columns: ["Brustweite", "Saumweite", "Länge"], rows: chartRows("S 36 56 42 63 | M 38 58 44 65 | L 40-42 60 46 67 | XL 44-46 62 48 69") },
    },
    facts: clothingFacts("Bio-Baumwolle (kbA)", SWEAT_MIX, "500 g", "Portugal"),
    care: clothingCare.sweater,
    sustainability: clothingSustainability.cotton,
    description: `
        <p>Der FEND Sweater ist ein schlichter Pullover mit Rundhalsausschnitt. Zieh ihn nach der Stunde über, für die Schlussentspannung oder für den Weg nach Hause.</p>
        <p>70 % Bio-Baumwolle und 30 % Modal machen ihn mit 500 g schön warm und trotzdem weich.</p>`,
    features: [
      { title: "Warm für die Schlussentspannung", text: "Wenn der Körper zur Ruhe kommt, wird es schnell kühl. Der dichte Stoff hält dich in Savasana und in der Meditation warm.", picture: "outfitSeated" },
      { title: "Weich durch Modal", text: "30 % Modal machen die Bio-Baumwolle besonders weich und geschmeidig.", picture: "fabricClose" },
      { title: "Vorbehandelt gegen Einlaufen", text: "Der Stoff ist sanforisiert. Er behält auch nach dem Waschen bei 30 °C seine Form.", picture: "garmentWash" },
    ],
    reviews: [
      { name: "Anonym", place: "", color: "Stone Blue", height: "~183 cm", size: "L", usual: "M", stars: 4, days: 22, text: "Sehr weicher, schwerer Stoff. Fällt kürzer und enger aus, als ich dachte – lieber eine Nummer größer." },
    ],
    related: ["QUINN Mens Pants", "NIA Womens Sweater", "REID Mens Tank-Top", "Yoga Zubehör + Reinigungs Set"],
  },
  "nia-womens-sweater": {
    name: "NIA Womens Sweater",
    subtitle: "Weicher Sweater für Frauen aus Bio-Baumwolle und Modal.",
    rating: 4,
    reviewCount: 2,
    ratingScales: CLOTHING_SCALES(3.25, 3.25, 4.5),
    specs: {
      fabric: SWEAT_MIX,
      madeIn: "in Portugal",
      chart: { columns: ["Brustweite", "Saumweite", "Länge"], rows: chartRows("XS 34 64 60 48 | S 36-38 66 62 50 | M 40-42 68 64 52 | L 42-44 70 66 54 | XL 44-46 72 68 56") },
    },
    facts: clothingFacts("Bio-Baumwolle (kbA)", SWEAT_MIX, "480 g", "Portugal"),
    care: clothingCare.sweater,
    sustainability: clothingSustainability.cotton,
    description: `
        <p>Der NIA Sweater ist bequem geschnitten und hält dich vor und nach der Stunde warm. Er passt über Tops und Shirts und zu Leggings genauso wie zur weiten Hose.</p>
        <p>70 % Bio-Baumwolle und 30 % Modal ergeben einen dichten, weichen Stoff, der vorbehandelt ist, damit er beim Waschen kaum einläuft.</p>`,
    features: [
      { title: "Warm vor und nach der Stunde", text: "Auf dem Weg ins Studio, in der Schlussentspannung oder bei der Meditation: Der NIA Sweater hält dich warm.", picture: "outfitSeated" },
      { title: "Weich durch Modal", text: "30 % Modal machen die Bio-Baumwolle besonders weich und geschmeidig.", picture: "fabricClose" },
      { title: "Vorbehandelt gegen Einlaufen", text: "Der Stoff ist sanforisiert. Er behält auch nach dem Waschen bei 30 °C seine Form.", picture: "garmentWash" },
      { title: "Genäht in Portugal", text: "Der NIA Sweater entsteht in Portugal, also in der EU und mit kurzen Wegen.", picture: "origin" },
    ],
    reviews: [
      { name: "Clara", place: "Göttingen, DE", color: "Anthrazit", height: "~165 cm", size: "S", usual: "S", stars: 5, days: 9, text: "Kuschelig und trotzdem nicht zu warm. Ich ziehe ihn nach jeder Stunde über." },
      { name: "Anonym", place: "", color: "Marshmallow", height: "~172 cm", size: "M", usual: "M", stars: 3, days: 28, text: "Schöner Pullover, der Schnitt ist mir aber etwas zu weit." },
    ],
    related: ["FIONA Womens Pants", "ELI Womens Tee (Short Sleeve)", "BECCA Leggings", "DANA Overall"],
  },
};
// Everything a clothing page shares with the others.
Object.values(clothingDetails).forEach((item) => {
  const model = clothes.find((candidate) => candidate.name === item.name);
  item.specs.shape = model.shape;
  Object.assign(item, {
    colors: outfitsOf(item.name),
    sizes: model.sizes,
    gallery: clothingGallery,
    swatch: "garmentFront",
    related: item.related.map(relatedCard),
  });
});

// ---------- Bolsters, rolls, zabuton and bench ----------
// Colours come from the category data in shared.js; ratings, details and
// related products were read from the original (Oct 2026). `specs` drive the
// drawings: `dimensions` (L, B, H in cm), `round` for the rolls, `scene` for
// the picture "beim Üben", `article` for picture texts, and `compare` for the
// "Rolle oder Bolster?" picture.
const PROP_GALLERY = ["propFront", "propInUse", "propSize", "propEndView", "cushionInside", "cushionFabric"];
const COVER_FABRIC = ["Oberstoff", `100 % ${ORGANIC}`];
const DRAWSTRING = ["Öffnung", "Kordelzug"];
const ROLL_END = { label: "Rolle: Ø 24 cm", dimensions: [64, 24, 24], round: true };
const BOLSTER_L_END = { label: "L: 30 × 20 cm", dimensions: [72, 30, 20] };
const BOLSTER_S_END = { label: "S: 20 × 15 cm", dimensions: [72, 20, 15] };
const ORGANIC_COVER = ["Bio-Baumwolle", "der Bezug stammt aus kontrolliert biologischem Anbau."];
const GOTS = ["GOTS-zertifiziert", "der Standard prüft die ganze Lieferkette auf ökologische und faire Herstellung."];
const PLASTIC_FREE = ["Plastikfreie Verpackung", "ohne PVC und ohne erdölbasierte Kunststoffe."];
// The zabuton's card data lists every colour twice (4 and 7 cm); its page
// shows each colour once, in the original's order.
const zabutonColors = ["Balsam Green", "Light Taupe", "Aubergine", "Indigo Dust", "Natur", "Anthrazit", "Bordeaux", "Schwarz"].map((name) => ({
  name,
  hex: CUSHION_TONES[name].hex,
  soldOut: zabuton.variants.filter((variant) => variant.color.startsWith(`${name} /`)).every((variant) => variant.soldOut),
}));

const propDetails = {
  "yogarolle-restorative-o24-cm": {
    name: "Yogarolle RESTORATIVE Ø24 cm",
    subtitle: "Runde Rolle mit Bio-Dinkelspelz – für Rückbeugen, unter den Knien und überall, wo du Halt brauchst.",
    price: 54.95,
    rating: 4.88,
    reviewCount: 711,
    ratingScales: CUSHION_SCALES(4.9, 4.9, 4.82),
    specs: { shape: "roll", round: true, dimensions: [64, 24, 24], filling: SPELT_FILLING, scene: "knees", article: "der Rolle", compare: [{ ...ROLL_END, self: true }, { ...BOLSTER_L_END, label: "Bolster L: 30 × 20 cm" }] },
    facts: [["Material", ORGANIC], ["Füllung", SPELT_FILLING], ["Maße (L × B × H)", "64 × 24 × 24 cm"], ["Gewicht", "4,2 kg"], COVER_FABRIC, DRAWSTRING, ["Herkunft", ORIGIN]],
    colors: colorsOf("Yogarolle RESTORATIVE Ø24 cm"),
    gallery: PROP_GALLERY,
    description: `
        <p>Die Yogarolle RESTORATIVE ist rund, 64 cm lang und 24 cm im Durchmesser. Mit Bio-Dinkelspelz gefüllt, gibt sie unter dir ein wenig nach und behält trotzdem ihre Form – so bleibst du in Yin und Restorative Yoga entspannt in einer Haltung.</p>
        <p>Der Bezug aus Bio-Baumwolle schließt mit einem Kordelzug und lässt sich zum Waschen abnehmen.</p>`,
    care: `
        <p>Den Bezug nimmst du ab und wäschst ihn bei 30 °C. Die Füllung wird nicht gewaschen – lüfte die Rolle ab und zu gut durch.</p>`,
    sustainability: sustainabilityText(GOTS, ["Wertschöpfung in der EU", "befüllt wird die Rolle in Deutschland."], PLASTIC_FREE, ["Natürliche Rohstoffe", "Baumwolle und Dinkelspelz wachsen nach."]),
    features: [
      { title: "Für Yin und Restorative Yoga", text: "Unter den Knien entlastet die Rolle in der Rückenlage den unteren Rücken, unter den Fersen dehnt sie sanft die Beinrückseiten. Mit 24 cm Durchmesser trägt sie dich, ohne dass du nachhelfen musst.", picture: "propKnees" },
      { title: "Halt in Herzöffnern", text: "Quer unter den Schulterblättern öffnet die Rolle den Brustkorb. Der Kopf darf dabei nach hinten sinken – oder auf eine gefaltete Decke.", picture: "propFish" },
      { title: "Rolle oder Bolster?", text: "Die runde Rolle ist höher und hebt dich stärker an. Das rechteckige Bolster ist breiter und flacher und liegt ruhiger auf. Viele nutzen beides.", picture: "propCompare" },
      { title: "Formstabil durch Dinkelspelz", text: "Die Spelzen passen sich deinem Körper an und rutschen nicht weg. Mit gut 4 kg bleibt die Rolle liegen, wo du sie hinlegst.", picture: "propFilling" },
    ],
    reviews: [
      { name: "Sabine", place: "Würzburg, DE", color: "Light Taupe", stars: 5, days: 3, text: "Liegt schwer und stabil, rutscht nicht weg. Unter den Knien in der Schlussentspannung ein Traum." },
      { name: "Anonym", place: "", color: "Anthrazit", stars: 5, days: 7, text: "Für Yin Yoga genau richtig. Fester, als ich dachte, aber angenehm." },
      { name: "Florian", place: "Graz, AT", color: "Indigo Dust", stars: 4, days: 12, text: "Sehr gute Rolle, für meine Rückbeugen etwas hoch. Mit einer Decke darunter passt es." },
      { name: "Petra", place: "Ulm, DE", color: "Natur", stars: 5, days: 18, text: "Der Bezug lässt sich gut abnehmen und waschen. Schöne, ruhige Farbe." },
      { name: "Anonym", place: "", color: "Grassland", stars: 5, days: 26, text: "Das Muster ist dezent und sieht auch im Wohnzimmer gut aus." },
      { name: "Leonie", place: "Basel, CH", color: "Dark Cranberry", stars: 5, days: 34, text: "Ich nutze sie jeden Abend für eine gestützte Rückbeuge. Klare Empfehlung." },
    ],
    related: ["Yogablock Kork 2er Set", "Yoga Bolster RESTORATIVE S", "Yogagurt 100% Bio-Baumwolle", "Bezug für Yogarolle COVER Ø24 cm"],
  },
  "yoga-bolster-restorative-l": {
    name: "Yoga Bolster RESTORATIVE L",
    subtitle: "Großes, flaches Bolster mit Kapokfüllung – breite Auflage für Rücken, Schultern und Vorbeugen.",
    price: 64.95,
    rating: 4.82,
    reviewCount: 605,
    specs: { shape: "bolster", dimensions: [72, 30, 20], filling: KAPOK, scene: "child", article: "dem Bolster", compare: [{ ...BOLSTER_L_END, self: true }, BOLSTER_S_END] },
    facts: [["Material", ORGANIC], ["Füllung", KAPOK], ["Sitzhöhe", "15 cm (standard)"], ["Maße (L × B × H)", "72 × 30 × 20 cm"], ["Gewicht", "1,6 kg"], COVER_FABRIC, DRAWSTRING, ["Herkunft", "Indien"]],
    colors: colorsOf("Yoga Bolster RESTORATIVE L"),
    gallery: PROP_GALLERY,
    description: `
        <p>Das RESTORATIVE L ist ein rechteckiges Bolster: 72 cm lang, 30 cm breit und 20 cm hoch. Es liegt flach und ruhig auf der Matte und stützt deinen Oberkörper in Vorbeugen und gestützten Rückbeugen auf ganzer Länge.</p>
        <p>Gefüllt ist es mit Kapok, einer leichten Pflanzenfaser. Mit 1,6 kg nimmst du es mühelos mit ins Studio.</p>`,
    care: careList("Bezug bei 30 °C waschen", NO_DRYER),
    sustainability: sustainabilityText(ORGANIC_COVER, ["Natürliche Rohstoffe", "Kapok ist eine Pflanzenfaser aus den Früchten des Kapokbaums."]),
    features: [
      { title: "L oder S?", text: "Beide sind 72 cm lang. Das L ist mit 30 × 20 cm breiter und höher und stützt den ganzen Oberkörper, das S mit 20 × 15 cm hebt dich nur ein wenig an.", picture: "propCompare" },
      { title: "Stabil in Vorbeugen", text: "In der gestützten Kindhaltung ruht dein Oberkörper auf dem Bolster. Durch die Breite liegst du sicher und kannst den Kopf bequem zur Seite drehen.", picture: "propChild" },
      { title: "Breite Auflage für Rücken und Schultern", text: "Quer unter den Schulterblättern oder längs unter der Wirbelsäule: Die breite Fläche verteilt dein Gewicht gleichmäßig.", picture: "propFish" },
      { title: "Weich durch Kapok", text: "Kapok ist leicht, weich und rein pflanzlich. Die Füllung federt angenehm und gibt dem Bolster trotzdem Halt.", picture: "propFilling" },
    ],
    reviews: [
      { name: "Miriam", place: "Freiburg, DE", color: "Light Taupe", stars: 5, days: 2, text: "Breit und flach, liegt ruhig auf der Matte. In der gestützten Kindhaltung komme ich richtig zur Ruhe." },
      { name: "Anonym", place: "", color: "Anthrazit", stars: 5, days: 9, text: "Angenehm leicht und trotzdem stützend. Kapok fühlt sich weicher an als Dinkelspelz." },
      { name: "Daniel", place: "Wien, AT", color: "Indigo Dust", stars: 4, days: 15, text: "Gutes Bolster. Für mich dürfte es etwas fester sein, daher ein Stern weniger." },
      { name: "Ruth", place: "Kiel, DE", color: "Natur", stars: 5, days: 21, text: "Ich nutze es auch zum Sitzen beim Meditieren. Vielseitiger, als ich erwartet hatte." },
      { name: "Anonym", place: "", color: "Grassland", stars: 5, days: 28, text: "Schöner Stoff, gut verarbeitet, der Kordelzug hält." },
      { name: "Tim", place: "Bern, CH", color: "Dark Cranberry", stars: 5, days: 40, text: "Mein Lieblingsteil für Restorative Yoga. Würde ich wieder kaufen." },
    ],
    // The original shows "ab" on the cork blocks only here.
    related: ["Yogagurt 100% Bio-Baumwolle", "Yoga Bolster Set Yin Yoga", { ...relatedCard("Yogablock Kork 2er Set"), fromPrice: true }, "Yoga Set Yin Yoga Restorative S"],
  },
  "yoga-bolster-restorative-s": {
    name: "Yoga Bolster RESTORATIVE S",
    subtitle: "Kompaktes Bolster mit Kapokfüllung – niedrige, sanfte Unterstützung für viele Haltungen.",
    price: 49.95,
    rating: 4.81,
    reviewCount: 409,
    specs: { shape: "bolsterS", dimensions: [72, 20, 15], filling: KAPOK, scene: "knees", article: "dem Bolster", compare: [BOLSTER_L_END, { ...BOLSTER_S_END, self: true }] },
    facts: [["Material", ORGANIC], ["Füllung", KAPOK], ["Sitzhöhe", "15 cm (standard)"], ["Maße (L × B × H)", "72 × 20 × 15 cm"], ["Gewicht", "0,9 kg"], COVER_FABRIC, DRAWSTRING, ["Herkunft", "Indien"]],
    colors: colorsOf("Yoga Bolster RESTORATIVE S"),
    gallery: PROP_GALLERY,
    description: `
        <p>Das RESTORATIVE S ist die kompakte Variante: genauso lang wie das L, aber nur 20 cm breit und 15 cm hoch. Es hebt dich ein wenig an – angenehm unter den Knien, unter dem Becken oder im Sitzen.</p>
        <p>Die Kapokfüllung ist weich und leicht, das Bolster wiegt nur 0,9 kg.</p>`,
    care: careList("Bezug bei 30 °C waschen", NO_DRYER),
    sustainability: sustainabilityText(ORGANIC_COVER, ["Natürliche Rohstoffe", "Kapok ist eine Pflanzenfaser aus den Früchten des Kapokbaums."]),
    features: [
      { title: "L oder S?", text: "Beide sind 72 cm lang. Das S ist mit 20 × 15 cm schmaler und niedriger als das L und darum ideal, wenn du nur etwas Unterstützung brauchst.", picture: "propCompare" },
      { title: "Sanft und niedrig", text: "Mit 15 cm Höhe bleibst du nah am Boden. So eignet sich das S für Haltungen, in denen ein großes Bolster zu viel wäre.", picture: "propSideWide" },
      { title: "Weich und formstabil", text: "Die Kapokfüllung ist leicht und federt angenehm. Sie gibt nach, ohne dass das Bolster seine Form verliert.", picture: "propFilling" },
      { title: "Klein genug für vieles", text: "Unter den Knien in der Rückenlage, unter dem Becken in der Brücke oder zum Sitzen: Das S findet überall Platz.", picture: "propKnees" },
    ],
    reviews: [
      { name: "Anna", place: "Lüneburg, DE", color: "Light Taupe", stars: 5, days: 4, text: "Klein und handlich, perfekt unter den Knien oder im Sitzen unter dem Becken." },
      { name: "Anonym", place: "", color: "Aubergine", stars: 5, days: 10, text: "Die Farbe ist wunderschön, das Bolster angenehm weich." },
      { name: "Jörg", place: "Linz, AT", color: "Anthrazit", stars: 4, days: 16, text: "Für Rückbeugen etwas niedrig, dafür ideal für sanfte Haltungen." },
      { name: "Carina", place: "Bremen, DE", color: "Indigo Dust", stars: 5, days: 23, text: "Habe es zum großen L dazugekauft. Die beiden ergänzen sich super." },
      { name: "Anonym", place: "", color: "Natur", stars: 5, days: 31, text: "Leicht genug, um es mit zum Kurs zu nehmen." },
      { name: "Nina", place: "Chur, CH", color: "Grassland", stars: 5, days: 45, text: "Gute Qualität und ein weicher Bezug. Sehr zufrieden." },
    ],
    related: ["Yogablock Kork 2er Set", "Yogarolle RESTORATIVE Ø24 cm", "Yogagurt 100% Bio-Baumwolle", "Bezug für Yogarolle COVER Ø24 cm"],
  },
  "nackenrolle": {
    name: "Yoga Mini-Rolle (Nackenrolle) Ø12 cm",
    subtitle: "Kleine Rolle mit Bio-Dinkelspelz für Nacken, Knie und Handgelenke – auch für unterwegs.",
    price: 34.95,
    rating: 4.91,
    reviewCount: 11,
    specs: { shape: "neckRoll", round: true, dimensions: [40, 13, 13], filling: SPELT_FILLING, scene: "neck", article: "der Rolle" },
    facts: [["Material", ORGANIC], ["Zusammensetzung", "100 % Baumwolle (kbA)"], ["Füllung", SPELT_FILLING], ["Maße (L × B × H)", "40 × 13 × 13 cm"], ["Gewicht", "830 g"], COVER_FABRIC, DRAWSTRING, ["Herkunft", "Indien"]],
    colors: colorsOf("Yoga Mini-Rolle (Nackenrolle) Ø12 cm"),
    gallery: PROP_GALLERY,
    description: `
        <p>Die kleine Rolle ist 40 cm lang und gut 13 cm dick. Sie stützt den Nacken in der Rückenlage, polstert Knie und Handgelenke oder liegt beim Lesen im Rücken.</p>
        <p>Mit Bio-Dinkelspelz gefüllt, passt sie sich an und bleibt in Form. Mit 830 g ist sie leicht genug für jede Reise.</p>`,
    care: careList("Bei 30 °C waschen", NO_BLEACH, NO_DRYER, "Vorsichtig dämpfen oder bügeln"),
    sustainability: sustainabilityText(ORGANIC_COVER, GOTS),
    features: [
      { title: "Klein und vielseitig", text: "Unter dem Nacken in der Rückenlage, unter den Knien im Sitzen oder unter den Handgelenken im Vierfüßlerstand: Die Mini-Rolle hilft dort, wo es zwickt.", picture: "propNeck" },
      { title: "Leicht für unterwegs", text: "Mit 830 g und 40 cm Länge passt sie in jede Tasche – für Yoga im Urlaub oder die lange Zugfahrt.", picture: "propTravel" },
      { title: "Formstabil durch Dinkelspelz", text: "Die Spelzen passen sich an und rutschen nicht weg. So bleibt die Rolle da, wo du sie brauchst.", picture: "propFilling" },
      { title: "Natürliche Materialien", text: "Bezug aus Bio-Baumwolle, Füllung aus Bio-Dinkelspelz: Die Rolle kommt ohne Kunststoff aus.", picture: "fabricWeave" },
    ],
    reviews: [
      { name: "Clemens", place: "Augsburg, DE", color: "Light Taupe", stars: 5, days: 5, text: "Unter dem Nacken in der Rückenlage genau richtig. Nimmt im Koffer kaum Platz weg." },
      { name: "Anonym", place: "", color: "Balsam Green", stars: 5, days: 11, text: "Schöne Farbe und angenehm fest. Ich nutze sie auch unter den Handgelenken." },
      { name: "Ilse", place: "Krems, AT", color: "Light Taupe", stars: 5, days: 19, text: "Klein, aber vielseitig. Liegt beim Lesen jetzt auch auf dem Sofa." },
      { name: "Anonym", place: "", color: "Balsam Green", stars: 4, days: 27, text: "Gute Rolle, für mich hätte sie etwas länger sein dürfen." },
      { name: "Marta", place: "Erfurt, DE", color: "Light Taupe", stars: 5, days: 38, text: "Der Dinkelspelz passt sich gut an. Raschelt ein wenig, stört mich aber nicht." },
      { name: "Paul", place: "Zug, CH", color: "Balsam Green", stars: 5, days: 52, text: "Perfekt für die Schlussentspannung. Klare Empfehlung." },
    ],
    related: ["Yoga Handtuch", "Yoga Bolster RESTORATIVE S", "Augenkissen", "Yogarolle RESTORATIVE Ø24 cm"],
  },
  "meditationsmatte-zabuton": {
    name: "Meditationsmatte Zabuton",
    price: 59.95,
    rating: 4.86,
    reviewCount: 470,
    ratingScales: CLOTHING_SCALES(4.33, 4.33, 5),
    specs: { shape: "zabuton", dimensions: [80, 75, 4], filling: "Baumwollvlies", scene: "seated" },
    // Two thicknesses with their own price; the details and drawings follow the choice.
    choices: { name: "Dicke", values: [
      { label: "4 cm", price: 59.95 },
      { label: "7 cm", price: 74.95, specs: { shape: "zabutonThick", dimensions: [80, 75, 7] } },
    ] },
    facts: (choice) => [["Material", ORGANIC], ["Maße (L × B × H)", `80 × 75 × ${choice.label}`], ["Dicke", choice.label], ["Gewicht", "2,5 kg"], ["Herkunft", "Indien"]],
    colors: zabutonColors,
    gallery: ["propFront", "propInUse", "zabutonTop", "propSize", "cushionInside", "cushionFabric"],
    description: `
        <p>Der Zabuton ist eine flache, gepolsterte Unterlage für dein Meditationskissen. Auf 80 × 75 cm liegen Knie, Füße und Knöchel weich – auch wenn du lange sitzt.</p>
        <p>Es gibt ihn 4 cm dick, wenn du es flach magst, und 7 cm dick für mehr Polster. Der Bezug aus Bio-Baumwolle lässt sich abnehmen und waschen.</p>`,
    care: careList("Bezug bei 30 °C waschen", NO_DRYER, "Das Innenkissen nicht waschen oder reinigen und immer trocken lagern"),
    sustainability: sustainabilityText(GOTS),
    features: [
      { title: "Eine bequeme Basis für lange Meditationen", text: "Das Kissen liegt auf dem Zabuton, deine Beine ebenfalls. So sitzt du weich und stabil, statt mit Knien und Knöcheln auf dem harten Boden.", picture: "propSeated" },
      { title: "Platz für Kissen, Knie und Füße", text: "Mit 80 × 75 cm ist die Matte groß genug für den Schneidersitz und den Fersensitz. Zusammen mit dem Kissen wird sie zu deinem festen Meditationsplatz.", picture: "zabutonCushion" },
    ],
    reviews: [
      { name: "Ulrike", place: "Münster, DE", color: "Balsam Green / 4 cm", stars: 5, days: 2, text: "Endlich tun mir die Knöchel beim Sitzen nicht mehr weh. Groß genug für Kissen und Knie." },
      { name: "Anonym", place: "", color: "Anthrazit / 7 cm", stars: 5, days: 8, text: "Ich habe 7 cm genommen und bereue es nicht – schön weich." },
      { name: "Klaus", place: "Salzburg, AT", color: "Natur / 4 cm", stars: 4, days: 14, text: "Gute Matte, die 4 cm sind mir auf dem Holzboden etwas dünn." },
      { name: "Johanna", place: "Dresden, DE", color: "Indigo Dust / 7 cm", stars: 5, days: 22, text: "Passt farblich perfekt zu meinem Lotus-Kissen." },
      { name: "Anonym", place: "", color: "Light Taupe / 4 cm", stars: 5, days: 30, text: "Der Bezug ist abnehmbar und waschbar, das war mir wichtig." },
      { name: "Sven", place: "Luzern, CH", color: "Schwarz / 7 cm", stars: 5, days: 41, text: "Schlicht, groß und bequem. Mein fester Meditationsplatz." },
    ],
    related: ["Bezug für Zabuton", "Meditationskissen Lotus HOCH (H: 20cm)", "Meditationskissen Lotus (H: 15cm)", "Meditations-Set Lotus 20cm"],
  },
  "meditationsbank-dharma-standard": {
    name: "Meditationsbank DHARMA Standard",
    price: 74.95,
    rating: 4.67,
    reviewCount: 64,
    specs: { shape: "bench", dimensions: [19.5, 46, 16.5], scene: "kneel" },
    facts: [["Material", "Europäisches Buchenholz"], ["Sitzhöhe", "15 cm (standard)"], ["Maße (L × B × H)", "19,5 × 46 × 16,5 cm"], ["Gewicht", "2,2 kg"],
      ["Polster", "Schaumstoffkissen mit Bezug aus 100 % Baumwolle (Bio/kbA)"], ["Herkunft", "Rumänien"]],
    colors: colorsOf("Meditationsbank DHARMA Standard"),
    gallery: ["propFront", "propInUse", "benchSide", "benchFront", "benchPad", "benchWood"],
    description: `
        <p>Auf der DHARMA sitzt du im Fersensitz, ohne dass Knie und Füße dein Gewicht tragen. Die Bank steht über deinen Unterschenkeln, die Sitzfläche ist leicht geneigt – so richtet sich das Becken auf und der Rücken bleibt von selbst gerade.</p>
        <p>Gefertigt ist sie aus massivem Buchenholz aus Europa, das Polster ist mit Bio-Baumwolle bezogen.</p>`,
    sustainability: sustainabilityText(PLASTIC_FREE, ["Gefertigt in der EU", "die Bank entsteht in Rumänien."], ["Nachwachsender Rohstoff", "massives Buchenholz aus europäischen Wäldern."], ["Bio-Baumwolle", "für den Bezug des Polsters."]),
    features: [
      { title: "Entspannt im Fersensitz", text: "Die Bank nimmt dein Gewicht auf, Knie und Füße liegen frei auf dem Boden. So kannst du länger knien, ohne dass die Beine einschlafen.", picture: "propKneel" },
      { title: "Leicht geneigt, aufrecht sitzen", text: "Die Sitzfläche fällt nach vorn leicht ab. Dein Becken kippt dadurch ein wenig nach vorn, und die Wirbelsäule richtet sich ohne Anstrengung auf.", picture: "benchTilt" },
      { title: "Massives Buchenholz", text: "Buche ist hart, schwer und langlebig. Mit 2,2 kg steht die Bank ruhig und wackelt nicht.", picture: "benchWood" },
      { title: "Weich gepolstert", text: "Ein Schaumstoffkissen mit Bezug aus Bio-Baumwolle macht die Sitzfläche bequem – auch in längeren Meditationen.", picture: "benchCushion" },
    ],
    reviews: [
      { name: "Helga", place: "Kassel, DE", color: "Natur", stars: 5, days: 6, text: "Im Fersensitz schlafen mir die Füße nicht mehr ein. Solide verarbeitet." },
      { name: "Anonym", place: "", color: "Anthrazit", stars: 5, days: 12, text: "Schönes Holz, stabil und trotzdem leicht genug zum Tragen." },
      { name: "Bernd", place: "Villach, AT", color: "Indigo Dust", stars: 4, days: 20, text: "Gute Bank. Mit 1,90 m hätte ich sie gern etwas höher." },
      { name: "Sophia", place: "Heidelberg, DE", color: "Aubergine", stars: 5, days: 29, text: "Das Polster ist angenehm, und die Farbe passt zu meinem Kissen." },
      { name: "Anonym", place: "", color: "Natur", stars: 4, days: 37, text: "Ich brauchte ein paar Tage, um mich an die Neigung zu gewöhnen. Jetzt möchte ich sie nicht mehr missen." },
      { name: "Lars", place: "Winterthur, CH", color: "Anthrazit", stars: 5, days: 48, text: "Ruhig, schlicht, gut gemacht. Steht bei mir direkt neben dem Zabuton." },
    ],
    // The original shows "ab" on the cover only here.
    related: ["Meditationsmatte Zabuton", "Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs",
      { ...relatedCard("Bezug für Meditationskissen Lotus (H: 15cm)"), fromPrice: true }, "Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs"],
  },
};
// Everything these pages share; related products are names or ready cards.
Object.values(propDetails).forEach((item) => Object.assign(item, {
  swatch: "propFront",
  related: item.related.map((entry) => (typeof entry === "string" ? relatedCard(entry) : entry)),
}));

// ---------- Bags, cork blocks, straps and the other accessories ----------
// Colours come from the category data in shared.js; ratings, details (which
// for the blocks and the spray differ by option, as on the original) and
// related products were read from the original (Oct 2026).
const ORGANIC_BAG = ["Bio-Baumwolle", "genäht aus Baumwolle aus kontrolliert biologischem Anbau."];
const CORK_SOURCE = ["Nachwachsender Rohstoff", "Kork ist die Rinde der Korkeiche. Sie wird geschält und wächst danach wieder nach."];
const CORK_COLOR = [{ hex: CORK }];
const CORK_SCALES = [["Material", 4.92], ["Haptik", 4.92], ["Qualität & Verarbeitung", 4.93]];
const SMALL_BLOCK = [22, 12, 7.5]; // the original only gives the small block's size
const SPRAY_INGREDIENTS = "Aqua**, Ethanol*, 1–5 % anionische Tenside** (Candida Bombicola Glucose, Methyl Rapeseedate Ferment**), Salbeiöl*, Curcuma Xanthorrhiza Root Extract** (Kurkuma) – * aus kontrolliert biologischem Anbau (kbA), ** natürlich";

// The four stickers share one layout: our own design with the quote. Three
// are sold out as a whole, so their page can't order anything (as on the
// original); none has info rows.
const STICKER_TEXT = `
        <p>Ein kleiner Sticker mit großer Wirkung: Er erinnert dich auf der Matte daran, worum es dir beim Üben geht. Er klebt auf Yogamatten, Trinkflaschen, Laptops und vielem mehr.</p>
        <p>Der Sticker hält auch beim Hot Yoga und verträgt bis zu +90 °C. Er haftet dauerhaft – direkt nach dem Aufkleben kannst du ihn aber noch einmal abziehen und neu platzieren.</p>`;
const STICKER_FACTS = [["Material", "Polymere Klebefolie mit UV-Schutz"], ["Gewicht", "5 g"], ["Herkunft", "Deutschland"]];
function sticker(name, quote, details) {
  const model = allModels.find((candidate) => candidate.name === name);
  return {
    name,
    price: model.price,
    unavailable: Boolean(model.soldOut),
    colors: [{ hex: model.tint, soldOut: Boolean(model.soldOut) }],
    specs: { shape: "sticker", quote },
    gallery: ["stickerFront", "stickerOnMat"],
    description: STICKER_TEXT,
    features: [],
    ...details,
  };
}

const accessoryDetails = {
  "yogatasche-pune": {
    name: "Yogatasche PUNE",
    price: 29.95,
    rating: 4.79,
    reviewCount: 579,
    ratingScales: [["Material & Qualität", 5], ["Länge", 3], ["Passform", 3]],
    specs: { shape: "bag", scene: "carry" },
    facts: [["Gewicht", "430 g"]],
    colors: colorsOf("Yogatasche PUNE"),
    gallery: ["propFront", "propCarried", "bagPacked", "cushionFabric"],
    description: `
        <p>Die PUNE ist eine geräumige Yogatasche aus Bio-Baumwolle. Deine Matte passt hinein, dazu Block, Gurt oder Handtuch – alles, was du für die Stunde brauchst.</p>
        <p>Den Schultergurt stellst du so ein, wie es für dich bequem ist: über der Schulter oder quer über den Körper.</p>`,
    care: careList("Bei 30 °C waschen", NO_DRYER),
    sustainability: sustainabilityText(ORGANIC_BAG, GOTS),
    features: [
      { title: "Platz für Matte und Zubehör", text: "In die PUNE packst du deine Matte und das, was sonst noch mit ins Studio soll: Block, Gurt, Handtuch oder eine Trinkflasche.", picture: "bagPacked" },
      { title: "Bequem zu tragen", text: "Der Schultergurt lässt sich in der Länge verstellen. So sitzt die Tasche an der Hüfte – zu Fuß genauso wie auf dem Fahrrad.", picture: "propCarry" },
      { title: "Ökologisch genäht", text: "Die Tasche ist aus Bio-Baumwolle genäht und nach GOTS zertifiziert, vom Anbau bis zum fertigen Stück.", picture: "fabricWeave" },
      { title: "Ein Set in einer Farbe", text: "Den Yogagurt gibt es in denselben Farben. Zusammen mit der Tasche ergibt er ein schlichtes Set für den Weg zur Matte.", picture: "bagSet" },
    ],
    reviews: [
      { name: "Tanja", place: "Koblenz, DE", color: "Balsam Green", stars: 5, days: 4, text: "Meine Matte passt locker hinein, dazu noch Block und Wasserflasche." },
      { name: "Anonym", place: "", color: "Anthrazit", stars: 5, days: 9, text: "Der verstellbare Gurt ist super, die Tasche sitzt genau richtig." },
      { name: "Rainer", place: "Bregenz, AT", color: "Indigo Dust", stars: 4, days: 15, text: "Gute Tasche, die Farbe ist etwas dunkler, als ich dachte." },
      { name: "Elif", place: "Stuttgart, DE", color: "Lavender Fog", stars: 5, days: 22, text: "Die Farbe ist ein Traum und passt zu meinem Gurt." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 5, days: 30, text: "Ich nehme sie jeden Tag mit ins Studio. Robust und schlicht." },
      { name: "Moritz", place: "Aarau, CH", color: "Aubergine", stars: 5, days: 41, text: "Lässt sich gut waschen und sieht danach wieder aus wie neu." },
    ],
    related: ["Yogamatte PURE", "Yogatasche NANDI", "Yogamatte ARISE", "Yogamatte MUDRA PRO Set"],
  },
  "yogatasche-nandi": {
    name: "Yogatasche NANDI",
    price: 19.95,
    rating: 4.61,
    reviewCount: 49,
    specs: { shape: "sack", scene: "carry", dimensions: [78, 24.5, 24.5] },
    facts: [["Material", ORGANIC], ["Maße (L × B)", "78 × 24,5 cm"], ["Gewicht", "190 g"], ["Öffnung", "Tunnelzug mit Kordel"], ["Herkunft", "Indien"]],
    colors: colorsOf("Yogatasche NANDI"),
    gallery: ["propFront", "propCarried", "bagSize", "bagFolded", "cushionFabric"],
    description: `
        <p>Die NANDI ist eine schlichte Hülle für deine Yogamatte: ein schmaler Beutel aus Bio-Baumwolle, 78 cm lang, den du oben mit einer Kordel zuziehst.</p>
        <p>Brauchst du sie gerade nicht, faltest du sie klein zusammen – sie passt in jede Schublade.</p>`,
    care: careList("Bei 30 °C waschen", NO_DRYER),
    sustainability: sustainabilityText(ORGANIC_BAG, GOTS),
    features: [
      { title: "Schlicht und praktisch", text: "Matte hinein, Kordel zuziehen, fertig: Die NANDI ist eine unaufgeregte Hülle für den Weg ins Studio.", picture: "propCarry" },
      { title: "Platz für eine Matte", text: "Mit 78 cm Länge und 24,5 cm Breite nimmt sie eine aufgerollte Matte auf.", picture: "bagSize" },
      { title: "Klein zusammengefaltet", text: "Wenn du sie nicht brauchst, faltest du die Tasche klein zusammen. Sie passt in jede Schublade und in jeden Koffer.", picture: "bagFolded" },
      { title: "Aus Bio-Baumwolle", text: "Genäht aus GOTS-zertifizierter Bio-Baumwolle, waschbar bei 30 °C.", picture: "fabricWeave" },
    ],
    reviews: [
      { name: "Greta", place: "Lübeck, DE", color: "Natur", stars: 5, days: 6, text: "Einfach und gut. Meine Matte passt genau hinein." },
      { name: "Anonym", place: "", color: "Natur", stars: 5, days: 13, text: "Leicht, schlicht und schnell zugezogen. Mehr brauche ich nicht." },
      { name: "Wolfgang", place: "Steyr, AT", color: "Anthrazit", stars: 4, days: 19, text: "Gute Tasche, für dickere Matten wird es aber eng." },
      { name: "Lisa", place: "Fulda, DE", color: "Natur", stars: 4, days: 27, text: "Hübsch und praktisch. Ich hätte sie gern noch in mehr Farben." },
      { name: "Anonym", place: "", color: "Natur", stars: 5, days: 35, text: "Im Urlaub immer dabei, sie nimmt kaum Platz weg." },
      { name: "Jana", place: "Zürich, CH", color: "Anthrazit", stars: 5, days: 50, text: "Schöner Stoff, gut verarbeitet." },
    ],
    // The original shows "ab" on these two only here.
    related: ["Yogamatte ARISE Travel", "Yoga Tasche + Gurt Set", { ...relatedCard("Yogamatte ARISE CORK"), fromPrice: true }, { ...relatedCard("Yogatasche PUNE"), fromPrice: true }],
  },
  "yogablock-aus-kork-alle": {
    name: "Yogablock Kork 2er Set",
    price: 29.95,
    rating: 4.9,
    reviewCount: 1576,
    ratingScales: CORK_SCALES,
    specs: { shape: "block", scene: "blockSeat", dimensions: SMALL_BLOCK },
    colors: CORK_COLOR,
    choices: { name: "Block-Größe", values: [{ label: "Klein", price: 29.95 }, { label: "Groß", price: 34.95 }] },
    fixedOptions: [{ name: "Pack", value: "2er Pack" }],
    // As on the original, the large set states only its weight.
    facts: (choice) => [["Gewicht", "1,0 kg"], ...(choice.label === "Klein" ? [["Herkunft", "Portugal"]] : [])],
    gallery: ["propFront", "propInUse", "blockHeights", "cork"],
    description: `
        <p>Zwei Yogablöcke aus Naturkork: fest genug, um dein Gewicht zu tragen, und mit einer feinen, griffigen Oberfläche. Kork ist leicht, fühlt sich warm an und gibt dir sicheren Halt.</p>
        <p>Die Blöcke gibt es in zwei Größen, Klein und Groß. Hergestellt werden sie in Portugal.</p>`,
    sustainability: sustainabilityText(CORK_SOURCE),
    features: [
      { title: "Aus Naturkork", text: "Kork ist die Rinde der Korkeiche. Sie wächst nach dem Schälen wieder nach – ein Rohstoff, der dem Baum nicht schadet.", picture: "cork" },
      { title: "Griffig und rutschfest", text: "Die feinporige Oberfläche gibt deinen Händen Halt, auch wenn es warm wird, und der Block bleibt auf der Matte stehen.", picture: "propBlockLunge" },
      { title: "Drei Höhen in einem Block", text: "Flach, auf der Seite oder hochkant: Je nachdem, wie du den Block hinlegst, bekommst du eine andere Höhe.", picture: "blockHeights" },
    ],
    reviews: [
      { name: "Nadine", place: "Bielefeld, DE", color: "Klein", stars: 5, days: 3, text: "Fest, griffig und angenehm schwer. Rutscht auf der Matte nicht." },
      { name: "Anonym", place: "", color: "Groß", stars: 5, days: 8, text: "Die großen Blöcke geben mir im Dreieck genau die Höhe, die ich brauche." },
      { name: "Hendrik", place: "Wels, AT", color: "Klein", stars: 5, days: 14, text: "Viel besser als meine alten Schaumstoffblöcke. Kein Wackeln." },
      { name: "Simone", place: "Trier, DE", color: "Klein", stars: 4, days: 21, text: "Sehr gute Blöcke. Für meine kleinen Hände hätte auch einer gereicht." },
      { name: "Anonym", place: "", color: "Groß", stars: 5, days: 33, text: "Ich nutze sie auch zum Sitzen beim Meditieren." },
      { name: "Beat", place: "Thun, CH", color: "Klein", stars: 5, days: 47, text: "Schlicht, nachhaltig und robust. Gerne wieder." },
    ],
    related: ["Yogagurt 100% Bio-Baumwolle", "Yogablock Kork Einzeln", "Yogarolle RESTORATIVE Ø24 cm", "Yoga-Zubehör Set"],
  },
  "yogablock-kork-einzeln": {
    name: "Yogablock Kork Einzeln",
    price: 17.95,
    // No rating of its own on the original (no stars, no summary); its
    // review list shows 4.89 from 449 reviews.
    buyboxRating: false,
    rating: 4.89,
    reviewCount: 449,
    specs: { shape: "singleBlock", scene: "blockSeat", dimensions: SMALL_BLOCK },
    colors: CORK_COLOR,
    // The original's labels end with a full stop.
    choices: { name: "Block-Größe", values: [{ label: "Klein.", price: 17.95 }, { label: "Groß.", price: 19.95 }] },
    facts: (choice) => (choice.label === "Klein."
      ? [["Material", "Naturkork"], ["Zusammensetzung", "100 % Naturkork, Polyurethan-Bindemittel"], ["Maße (L × B × H)", "12 × 22 × 7,5 cm"], ["Gewicht", "0,5 kg"], ["Herkunft", "Portugal"]]
      : [["Gewicht", "0,5 kg"]]),
    gallery: ["propFront", "propInUse", "blockHeights", "cork"],
    description: `
        <p>Ein einzelner Yogablock aus Naturkork – zum Ergänzen oder um erst einmal auszuprobieren, wie viel Unterstützung du brauchst. Er ist fest, griffig und angenehm schwer.</p>
        <p>Du bekommst ihn in den Größen Klein und Groß.</p>`,
    sustainability: sustainabilityText(CORK_SOURCE),
    features: [
      { title: "Natürlich griffig", text: "Kork hat von Natur aus eine feine, griffige Oberfläche. Der Block liegt gut in der Hand und fühlt sich warm an.", picture: "cork" },
      { title: "Halt in jeder Haltung", text: "Unter der Hand im Ausfallschritt, unter dem Becken im Sitzen oder zwischen den Knien: Der Block bringt den Boden ein Stück näher.", picture: "propBlockLunge" },
      { title: "Drei Höhen", text: "Flach, auf der Seite oder hochkant hingelegt, gibt dir ein einziger Block drei verschiedene Höhen.", picture: "blockHeights" },
    ],
    reviews: [
      { name: "Marlene", place: "Hamm, DE", color: "Klein.", stars: 5, days: 5, text: "Ich hatte schon einen und wollte einen zweiten. Genauso gut wie der erste." },
      { name: "Anonym", place: "", color: "Groß.", stars: 5, days: 11, text: "Schön fest, die große Größe passt gut zu meinen langen Armen." },
      { name: "Thomas", place: "Leoben, AT", color: "Klein.", stars: 5, days: 18, text: "Griffig und stabil. Für den Preis sehr gut." },
      { name: "Anonym", place: "", color: "Klein.", stars: 4, days: 26, text: "Guter Block. Zwei wären praktischer, deshalb kaufe ich noch einen." },
      { name: "Katharina", place: "Zwickau, DE", color: "Groß.", stars: 5, days: 39, text: "Riecht angenehm nach Kork und liegt gut in der Hand." },
      { name: "Urs", place: "Wil, CH", color: "Klein.", stars: 5, days: 55, text: "Nachhaltig und gut verarbeitet." },
    ],
    related: ["Yogarolle RESTORATIVE Ø24 cm", "Yogablock Kork 2er Set", "Yoga Bolster RESTORATIVE S", "Yoga-Zubehör Set"],
  },
  "yoga-gurt-bio-baumwolle": {
    name: "Yogagurt 100% Bio-Baumwolle",
    price: 12.95,
    rating: 4.86,
    reviewCount: 1114,
    ratingScales: CLOTHING_SCALES(3, 3, 3.5),
    specs: { shape: "strap", scene: "strapStretch" },
    facts: [["Gewicht", "175 g"], ["Herkunft", "Indien"]],
    colors: colorsOf("Yogagurt 100% Bio-Baumwolle"),
    gallery: ["propFront", "propInUse", "strapRings", "cushionFabric"],
    description: `
        <p>Der Yogagurt verlängert deine Arme: In Vorbeugen, Dehnungen und Balancehaltungen erreichst du mit ihm, was sonst noch zu weit weg ist. So übst du entspannt, statt dich in eine Haltung zu ziehen.</p>
        <p>Gewebt ist er aus Bio-Baumwolle, zwei Metall-D-Ringe halten ihn in jeder Länge fest.</p>`,
    sustainability: sustainabilityText(["Bio-Baumwolle", "der Gurt ist aus Baumwolle aus kontrolliert biologischem Anbau gewebt."]),
    features: [
      { title: "Mehr Reichweite in jeder Haltung", text: "Um die Füße gelegt, hilft dir der Gurt in der Vorbeuge, ohne dass du den Rücken rund machst. Auch in Dehnungen im Liegen leistet er gute Dienste.", picture: "propStretch" },
      { title: "Aus Bio-Baumwolle", text: "Das feste Gewebe liegt weich in der Hand und schneidet nicht ein.", picture: "fabricWeave" },
      { title: "Zwei Metall-D-Ringe", text: "Durch die beiden Ringe ziehst du das Ende des Gurts und stellst so jede Länge ein. Er hält, bis du ihn wieder löst.", picture: "strapRings" },
    ],
    reviews: [
      { name: "Vera", place: "Paderborn, DE", color: "Balsam Green", stars: 5, days: 2, text: "Fester Stoff, stabile Ringe. Hilft mir sehr in den Vorbeugen." },
      { name: "Anonym", place: "", color: "Kurkuma", stars: 5, days: 7, text: "Die Farbe ist toll, der Gurt angenehm weich." },
      { name: "Martin", place: "Dornbirn, AT", color: "Anthrazit", stars: 4, days: 13, text: "Guter Gurt. Für meine Größe dürfte er etwas länger sein." },
      { name: "Sarah", place: "Marburg, DE", color: "Lavender Fog", stars: 5, days: 20, text: "Ich trage damit auch meine Matte. Vielseitig." },
      { name: "Anonym", place: "", color: "Natur", stars: 5, days: 29, text: "Die D-Ringe halten bombenfest." },
      { name: "Reto", place: "Olten, CH", color: "Indigo Dust", stars: 5, days: 44, text: "Einfach, robust, macht genau, was er soll." },
    ],
    // The original shows "ab" on these two only here.
    related: ["Yogablock Kork 2er Set", "Yoga Tasche + Gurt Set", { ...relatedCard("Yoga Bolster RESTORATIVE L"), fromPrice: true },
      { ...relatedCard("Yogadecke „Savasana“ 100% Baumwolle (kbA)"), fromPrice: true }],
  },
  "yogamatten-tragegurt": {
    name: "Yogamatten Tragegurt",
    price: 14.95,
    rating: 4.89,
    reviewCount: 18,
    specs: { shape: "strap", scene: "strapCarry" },
    facts: [["Material", ORGANIC], ["Maße (L × B)", "210 cm × 3,5 mm"], ["Gewicht", "60 g"], ["Herkunft", "Indien"]],
    colors: colorsOf("Yogamatten Tragegurt"),
    gallery: ["propFront", "propCarried", "strapLoops", "cushionFabric"],
    description: `
        <p>Mit dem Tragegurt nimmst du deine Matte einfach über die Schulter. Die beiden Schlaufen legst du um die aufgerollte Matte und ziehst sie fest – sie passen sich jeder Mattengröße an.</p>
        <p>Der Gurt ist aus Bio-Baumwolle, wiegt nur 60 g und hält die Matte auch zu Hause zusammen.</p>`,
    care: careList("Bei 30 °C waschen", NO_DRYER, NO_BLEACH),
    features: [
      { title: "Matte schnappen und los", text: "Schlaufen um die Matte, Gurt über die Schulter: So hast du die Hände frei – auf dem Weg ins Studio, in den Park oder an den See.", picture: "propMatCarry" },
    ],
    reviews: [
      { name: "Lea", place: "Gera, DE", color: "Light Taupe", stars: 5, days: 3, text: "Einfach und genau richtig, um die Matte ins Studio zu tragen." },
      { name: "Anonym", place: "", color: "Balsam Green", stars: 5, days: 9, text: "Hält auch meine dicke Matte gut zusammen." },
      { name: "Konstantin", place: "Klagenfurt, AT", color: "Light Taupe", stars: 5, days: 17, text: "Leicht und schnell angelegt." },
      { name: "Anonym", place: "", color: "Balsam Green", stars: 4, days: 24, text: "Praktisch. Mit den Schlaufen muss man anfangs etwas üben." },
      { name: "Pia", place: "Speyer, DE", color: "Light Taupe", stars: 5, days: 36, text: "Schöne Farbe, passt zu meiner Matte." },
      { name: "Nico", place: "Baden, CH", color: "Balsam Green", stars: 5, days: 49, text: "Für den Preis top." },
    ],
    // The original shows "ab" on the MUDRA PRO only here.
    related: ["Yogamatte PURE", "Yogamatte ARISE", "Yoga Tasche + Gurt Set", { ...relatedCard("Yogamatte MUDRA PRO"), fromPrice: true }],
  },
  "yogadecke-savasana-100-baumwolle-kba": {
    name: "Yogadecke „Savasana“ 100% Baumwolle (kbA)",
    price: 44.95,
    rating: 4.72,
    reviewCount: 343,
    specs: { shape: "blanket", scene: "covered", dimensions: [200, 150, 1] },
    facts: [["Material", ORGANIC], ["Zusammensetzung", "100 % Baumwolle (kbA)"], ["Maße (L × B)", "200 × 150 cm"], ["Gewicht", "1,5 kg"], ["Herkunft", "Indien"]],
    colors: colorsOf("Yogadecke „Savasana“ 100% Baumwolle (kbA)"),
    gallery: ["propFront", "propInUse", "blanketSeated", "blanketTop", "cushionFabric"],
    description: `
        <p>Die Savasana ist eine große Decke aus 100 % Bio-Baumwolle, traditionell von Hand gewebt. Mit 200 × 150 cm deckt sie dich in der Schlussentspannung ganz zu.</p>
        <p>Gefaltet wird sie zur Stütze: unter dem Becken im Sitzen, unter den Knien oder als Kissen unter dem Kopf.</p>`,
    care: `${careList("Bei 30 °C waschen", NO_DRYER)}
        <p>Kleine dunkle Pünktchen im Stoff sind Reste der Baumwollkapsel. Sie gehören zu Bio-Baumwolle, die ohne chemische Entlaubung geerntet wird. Falls sie beim Waschen leicht abfärben, hilft etwas Fleckensalz.</p>`,
    sustainability: sustainabilityText(["Bio-Baumwolle", "die Decke ist aus Baumwolle aus kontrolliert biologischem Anbau gewebt."]),
    features: [
      { title: "Warm in der Schlussentspannung", text: "Wenn der Körper zur Ruhe kommt, wird es schnell kühl. Mit 200 × 150 cm deckt dich die Decke von den Schultern bis zu den Füßen zu.", picture: "propCovered" },
      { title: "Gefaltet eine feste Stütze", text: "Zusammengelegt hebt sie das Becken im Sitzen an, polstert die Knie oder stützt den Kopf.", picture: "propBlanketSeat" },
      { title: "Von Hand gewebt", text: "Die Decke ist traditionell von Hand gewebt, aus 100 % Bio-Baumwolle. Kleine Unregelmäßigkeiten machen jedes Stück einzigartig.", picture: "fabricWeave" },
    ],
    reviews: [
      { name: "Theresa", place: "Rosenheim, DE", color: "Indigo Dust", stars: 5, days: 3, text: "Groß, schwer und kuschelig. In der Schlussentspannung decke ich mich ganz damit zu." },
      { name: "Anonym", place: "", color: "Natur", stars: 5, days: 10, text: "Gefaltet unter dem Becken ideal zum Meditieren." },
      { name: "Georg", place: "Wels, AT", color: "Anthrazit", stars: 4, days: 16, text: "Schöne Decke, für den Sommer fast zu warm." },
      { name: "Ronja", place: "Hildesheim, DE", color: "Indigo Dust", stars: 5, days: 24, text: "Die Farbe ist noch schöner als auf dem Bildschirm." },
      { name: "Anonym", place: "", color: "Natur", stars: 5, days: 33, text: "Man sieht, dass sie von Hand gewebt ist. Jede ein kleines Unikat." },
      { name: "Beatrice", place: "Lugano, CH", color: "Anthrazit", stars: 4, days: 45, text: "Sehr gemütlich. Die kleinen dunklen Pünktchen im Stoff haben mich erst überrascht – das ist bei Bio-Baumwolle normal." },
    ],
    // The original shows "ab" on these two only here.
    related: ["Yogagurt 100% Bio-Baumwolle", "Yogarolle Set Yin Yoga", { ...relatedCard("Yoga Bolster RESTORATIVE L"), fromPrice: true },
      { ...relatedCard("Yogarolle RESTORATIVE Ø24 cm"), fromPrice: true }],
  },
  "yoga-handtuch": {
    name: "Yoga Handtuch",
    subtitle: "Rutschfestes Handtuch für die Matte – für schweißtreibende Flows und Hot Yoga.",
    price: 29.95,
    rating: 4.73,
    reviewCount: 234,
    // The original shows the three bars without labels.
    ratingScales: [["", 4.54], ["", 4.6], ["", 4.81]],
    specs: { shape: "towel" },
    facts: [["Gewicht", "580 g"]],
    colors: colorsOf("Yoga Handtuch"),
    gallery: ["propFront", "towelOnMat", "towelUnderside", "towelFabric"],
    description: `
        <p>Das Yoga Handtuch legst du über deine Matte, wenn es beim Üben richtig warm wird. Die Oberfläche greift auch dann, wenn sie feucht ist, und der Stoff nimmt Schweiß gut auf.</p>
        <p>Hergestellt ist es aus recyceltem Polyester mit GRS-Zertifikat. Unterwegs dient es auch als leichte Unterlage.</p>`,
    care: careList("Bei 30 °C waschen", NO_DRYER),
    features: [
      { title: "Griffig, auch wenn es feucht wird", text: "Die Oberfläche hält deine Hände und Füße sicher – gerade dann, wenn du ins Schwitzen kommst.", picture: "towelDog" },
      { title: "Bleibt auf der Matte liegen", text: "Die ganze Unterseite ist mit Silikon beschichtet. So verrutscht das Handtuch auch in schnellen Flows nicht.", picture: "towelUnderside" },
      { title: "Für Hot Yoga, Pilates und Reisen", text: "Zusammengerollt ist es klein und leicht – für den Kurs, das Fitnessstudio oder als Unterlage im Urlaub.", picture: "towelTravel" },
    ],
    reviews: [
      { name: "Leonie", place: "Kiel, DE", color: "Light Taupe", stars: 5, days: 2, text: "Beim Hot Yoga rutsche ich nicht mehr. Endlich!" },
      { name: "Anonym", place: "", color: "Anthrazit", stars: 5, days: 8, text: "Nimmt den Schweiß gut auf und liegt glatt auf der Matte." },
      { name: "Fabian", place: "Graz, AT", color: "Indigo Dust", stars: 4, days: 15, text: "Gutes Handtuch. Leicht angefeuchtet greift es bei mir am besten." },
      { name: "Selma", place: "Essen, DE", color: "Lavender Fog", stars: 5, days: 23, text: "Schöne Farbe und angenehm weich." },
      { name: "Anonym", place: "", color: "Balsam Green", stars: 5, days: 31, text: "Im Urlaub nutze ich es als leichte Unterlage. Praktisch." },
      { name: "Dario", place: "Bern, CH", color: "Light Taupe", stars: 4, days: 46, text: "Gute Qualität. Ich hätte es gern noch in mehr Farben." },
    ],
    // The original shows "ab" on the bag only here.
    related: ["Yogamatte ARISE Travel", "Yoga Zubehör + Reinigungs Set", { ...relatedCard("Yogatasche PUNE"), fromPrice: true }, "Yogamatte PURE Set"],
  },
  augenkissen: {
    name: "Augenkissen",
    subtitle: "Mit Leinsamen und Bio-Lavendel gefüllt – zum Abschalten in der Schlussentspannung.",
    price: 27.95,
    rating: 4.9,
    reviewCount: 38,
    specs: { shape: "eyePillow", scene: "eyes", filling: "95 % Leinsaat, 5 % Lavendel", dimensions: [22, 11.5, 1.7] },
    facts: [["Material", ORGANIC], ["Füllung", "95 % Leinsaat, 5 % Lavendel"], ["Maße (L × B × H)", "11,5 × 22 × 1,7 cm"], ["Gewicht", "225 g"], COVER_FABRIC, ["Herkunft", ORIGIN]],
    colors: colorsOf("Augenkissen"),
    gallery: ["propFront", "propInUse", "eyePillowSize", "cushionInside", "cushionFabric"],
    description: `
        <p>Das Augenkissen legst du in der Schlussentspannung oder beim Meditieren auf die Augen. Mit etwa 22 × 11,5 cm deckt es die Augenpartie gut ab, sein sanftes Gewicht hilft dir loszulassen.</p>
        <p>Gefüllt ist es mit Leinsamen und 5 % Lavendel. Bezug und Innenkissen sind aus Bio-Baumwolle, den Bezug wäschst du bei 30 °C.</p>`,
    care: careList("Bezug bei 30 °C waschen", NO_DRYER),
    sustainability: sustainabilityText(ORGANIC_COVER, ["Natürliche Füllung", "Leinsamen und Lavendel wachsen nach."], GOTS),
    features: [
      { title: "Zur Ruhe kommen", text: "Das Kissen dunkelt ab und liegt angenehm schwer auf den Augen. So fällt es leichter, in der Schlussentspannung wirklich abzuschalten.", picture: "propEyes" },
      { title: "Mit Bio-Lavendel", text: "Leinsamen schmiegen sich an, 5 % Lavendel geben einen feinen, beruhigenden Duft.", picture: "eyeFilling" },
      { title: "In Bio-Qualität", text: "Bezug und Innenkissen sind aus GOTS-zertifizierter Bio-Baumwolle.", picture: "fabricWeave" },
    ],
    reviews: [
      { name: "Miriam", place: "Aachen, DE", color: "Lavender Fog", stars: 5, days: 4, text: "Das leichte Gewicht auf den Augen entspannt sofort. Der Lavendelduft ist dezent." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 5, days: 11, text: "Ich nutze es jeden Abend zum Einschlafen." },
      { name: "Jonas", place: "Innsbruck, AT", color: "Balsam Green", stars: 5, days: 17, text: "Perfekt für die Schlussentspannung. Hält das Licht gut ab." },
      { name: "Anonym", place: "", color: "Natur", stars: 4, days: 25, text: "Schön, der Duft dürfte für mich etwas stärker sein." },
      { name: "Christine", place: "Görlitz, DE", color: "Lavender Fog", stars: 5, days: 34, text: "Den Bezug kann man waschen, das ist mir wichtig." },
      { name: "Gian", place: "Chur, CH", color: "Light Taupe", stars: 5, days: 49, text: "Ein schönes Geschenk, kam gut an." },
    ],
    related: ["Yoga Bolster RESTORATIVE L", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm)", "Yoga Mini-Rolle (Nackenrolle) Ø12 cm", "Bezug für Halbmond Kissen"],
  },
  "yogamatten-spray": {
    name: "Bio Yogamatten Spray",
    price: 12.95,
    rating: 4.63,
    reviewCount: 85,
    specs: { shape: "spray" },
    colors: [{ hex: "#e6e1d6" }],
    choices: { name: "Inhalt", values: [{ label: "60ml", price: 12.95 }, { label: "500ml", price: 24.95, specs: { shape: "sprayRefill" } }] },
    facts: (choice) => {
      const small = choice.label === "60ml";
      return [["Füllmenge", small ? "60 ml" : "500 ml"], ["Inhaltsstoffe", SPRAY_INGREDIENTS], ["Gewicht", small ? "60 g" : "500 g"], ["Herkunft", "Österreich"]];
    },
    gallery: ["propFront", "sprayMist", "sprayBottles", "sprayIngredients"],
    description: `
        <p>Das Spray reinigt und erfrischt deine Matte nach dem Üben. Die Rezeptur ist natürlich: Bio-Ethanol, milde Tenside aus Raps, Salbeiöl und Kurkuma – ohne synthetische Inhaltsstoffe und darum auch mild zur Haut.</p>
        <p>Die 500-ml-Flasche ist eine Nachfüllflasche ohne Sprühkopf; zum Sprühen gibt es das Spray in der 60-ml-Flasche. Beide Flaschen sind aus recyceltem Kunststoff und lassen sich wieder befüllen.</p>
        <p>Wichtig: Sprühe die Matte nur leicht ein und tränke sie nicht mit Flüssigkeit.</p>`,
    features: [],
    reviews: [
      { name: "Nele", place: "Oldenburg, DE", color: "60ml", stars: 5, days: 3, text: "Riecht frisch nach Salbei, und die Matte ist danach angenehm sauber." },
      { name: "Anonym", place: "", color: "500ml", stars: 5, days: 9, text: "Damit fülle ich meine kleine Flasche immer wieder auf." },
      { name: "Harald", place: "Steyr, AT", color: "60ml", stars: 4, days: 16, text: "Gutes Spray. Der Duft ist mir etwas zu kräftig." },
      { name: "Anonym", place: "", color: "60ml", stars: 5, days: 22, text: "Passt in jede Tasche und reicht lange." },
      { name: "Paula", place: "Bamberg, DE", color: "500ml", stars: 4, days: 30, text: "Gut, aber ich hatte übersehen, dass die große Flasche keinen Sprühkopf hat." },
      { name: "Luca", place: "Sion, CH", color: "60ml", stars: 5, days: 44, text: "Natürliche Inhaltsstoffe und ein angenehmer Duft. Gerne wieder." },
    ],
    // The original shows "ab" on the bag only here.
    related: ["Yogamatte ARISE Travel", "Yoga Zubehör + Reinigungs Set", { ...relatedCard("Yogatasche PUNE"), fromPrice: true }, "Yogamatte ARISE Set"],
  },
  "yogamatten-sticker-i-am-enough": sticker("Yogamatten-Sticker „I am enough“", "I am enough", {
    rating: 5,
    reviewCount: 7,
    facts: STICKER_FACTS,
    reviews: [
      { name: "Mila", place: "Kassel, DE", stars: 5, days: 6, text: "Klebt seit Wochen auf meiner Matte und sieht noch aus wie neu." },
      { name: "Anonym", place: "", stars: 5, days: 13, text: "Eine schöne kleine Erinnerung in jeder Stunde." },
      { name: "Sara", place: "Linz, AT", stars: 5, days: 21, text: "Hält auch beim Hot Yoga." },
      { name: "Anonym", place: "", stars: 5, days: 38, text: "Ziert jetzt meine Trinkflasche." },
    ],
    related: ["Yogamatten-Sticker „Ich bin dankbar“", "„Almost Perfect“ Yogamatte PURE", "Yogamatten Tragegurt", "Bio Yogamatten Spray"],
  }),
  "yogamatten-sticker-einatmen-ausatmen": sticker("Yogamatten-Sticker „einatmen. ausatmen.“", "einatmen. ausatmen.", {
    rating: 4.86,
    reviewCount: 7,
    facts: [["Gewicht", "5 g"]],
    reviews: [
      { name: "Ole", place: "Husum, DE", stars: 5, days: 5, text: "Genau die richtige Erinnerung zu Beginn jeder Stunde." },
      { name: "Anonym", place: "", stars: 5, days: 12, text: "Schlicht und schön, klebt gut." },
      { name: "Vera", place: "Graz, AT", stars: 5, days: 26, text: "Ließ sich direkt nach dem Aufkleben noch einmal versetzen." },
      { name: "Anonym", place: "", stars: 4, days: 41, text: "Hübsch, für meinen Geschmack etwas klein." },
    ],
    related: ["Yogatasche NANDI", "Yogamatten-Sticker „Ich bin dankbar“", "Yogamatten Tragegurt", "„Almost Perfect“ Yogamatte PURE"],
  }),
  "yogamatten-sticker-ich-bin-dankbar": sticker("Yogamatten-Sticker „Ich bin dankbar“", "Ich bin dankbar", {
    rating: 3.67,
    reviewCount: 6,
    facts: STICKER_FACTS,
    reviews: [
      { name: "Ina", place: "Bremen, DE", stars: 5, days: 7, text: "Schöner Spruch, klebt gut auf meiner Matte." },
      { name: "Anonym", place: "", stars: 4, days: 18, text: "Nett für den kleinen Preis." },
      { name: "Karin", place: "Wien, AT", stars: 3, days: 29, text: "Die Farbe ist blasser, als ich dachte." },
      { name: "Anonym", place: "", stars: 3, days: 47, text: "Ganz okay, aber kleiner als erwartet." },
    ],
    related: ["Yogamatten Tragegurt", "Yogatasche NANDI", "Bio Yogamatten Spray", "„Almost Perfect“ Yogamatte MUDRA PRO XL"],
  }),
  "yogamatten-sticker-good-vibes-only": sticker("Yogamatten-Sticker „good vibes only“", "good vibes only", {
    rating: 4.33,
    reviewCount: 12,
    // The original shows a mat's rating scales here.
    ratingScales: [["Rutschfestigkeit", 4.8], ["Dämpfung", 4.5], ["Qualität und Langlebigkeit", 5]],
    facts: [["Gewicht", "5 g"]],
    reviews: [
      { name: "Timo", place: "Ulm, DE", stars: 5, days: 4, text: "Macht gute Laune, jedes Mal, wenn ich die Matte ausrolle." },
      { name: "Anonym", place: "", stars: 5, days: 15, text: "Hält bombenfest, auch nach vielen Stunden." },
      { name: "Elena", place: "Basel, CH", stars: 4, days: 27, text: "Schön, nur das Aufkleben braucht etwas Geduld." },
      { name: "Anonym", place: "", stars: 3, days: 40, text: "Ganz okay, ich hätte mir eine größere Variante gewünscht." },
    ],
    related: ["„Almost Perfect“ Yogamatte PURE", "Yogamatten-Sticker „Ich bin dankbar“", "Yogatasche NANDI", "Yogamatte PURE"],
  }),
};
Object.values(accessoryDetails).forEach((item) => Object.assign(item, {
  swatch: "propFront",
  related: item.related.map((entry) => (typeof entry === "string" ? relatedCard(entry) : entry)),
}));

// ---------- Covers, malas and spelt husks ----------
// Colours come from the category data in shared.js; ratings, details and
// related products were read from the original (Oct 2026). Several covers
// have no rating of their own there (no stars, no summary); their review
// list shows what the original's shows, sometimes nothing at all.
const COVER_NOTE = "Nur der Bezug – ohne Innenkissen und ohne Füllung.";
const COVER_GALLERY = ["propFront", "coverOn", "coverOnly", "cushionSize", "cushionFabric"];
const coverFacts = (seat, size, weight, form, origin = ORIGIN) => [["Material", ORGANIC], ["Sitzhöhe", seat], ["Maße (L × B × H)", size], ["Gewicht", weight], ["Form", form], ["Herkunft", origin]];
function coverPage(name, details) {
  const model = allModels.find((candidate) => candidate.name === name);
  return {
    name,
    price: model.price,
    colors: colorsOf(name),
    gallery: COVER_GALLERY,
    care: careList("Bezug bei 30 °C waschen", NO_DRYER),
    sustainability: sustainabilityText(GOTS),
    ...details,
    specs: { shape: model.shape, ...details.specs },
  };
}

// The malas are sold out as a whole on the original.
function malaPage(name, beads, details) {
  const model = allModels.find((candidate) => candidate.name === name);
  return {
    name,
    price: model.price,
    unavailable: Boolean(model.soldOut),
    colors: [{ hex: model.tint, soldOut: Boolean(model.soldOut) }],
    specs: { shape: "mala", material: beads },
    facts: [["Material", model.material], ["Maße (L)", "80 cm"], ["Gewicht", "110 g"], ["Perlen", "108"], ["Herkunft", "Indien"]],
    gallery: ["propFront", "malaClose", "malaLength"],
    features: [],
    ...details,
  };
}

const coverDetails = {
  "meditationskissen-cover-lotus-h-15cm": coverPage("Bezug für Meditationskissen Lotus (H: 15cm)", {
    subtitle: "Ein neuer Bezug in deiner Lieblingsfarbe – mit gesticktem Lotus, passend zum Lotus-Kissen mit 15 cm Höhe.",
    buyboxRating: false,
    rating: 5,
    reviewCount: 1,
    specs: { cushion: "lotusCushion15", dimensions: [31, 31, 15] },
    facts: coverFacts("15 cm (standard)", "31 × 31 × 15 cm", "120 g", "Rund"),
    sustainability: sustainabilityText(PLASTIC_FREE, GOTS),
    description: `
        <p>${COVER_NOTE} Der Bezug passt auf das Meditationskissen Lotus mit 15 cm Höhe und schließt mit einem Kordelzug.</p>
        <p>Er ist aus Bio-Baumwolle genäht und trägt den kleinen gestickten Lotus. So bekommt dein Kissen eine neue Farbe – oder du hast einen zweiten Bezug, wenn der erste in der Wäsche ist.</p>`,
    features: [
      { title: "Ein neuer Look für dein Kissen", text: "Statt eines neuen Kissens bekommt dein altes einfach einen neuen Bezug. Das Innenkissen mit der Füllung bleibt, wie es ist.", picture: "coverSwap" },
      { title: "Mit gesticktem Lotus", text: "Wie beim Kissen selbst ziert ein kleiner gestickter Lotus den Bezug.", picture: "coverEmbroidery" },
      { title: "Einfach wechseln und waschen", text: "Kordelzug öffnen, Bezug abziehen und bei 30 °C waschen. Mit einem zweiten Bezug ist dein Kissen auch am Waschtag bereit.", picture: "coverWash" },
    ],
    reviews: [
      { name: "Anonym", place: "", color: "Balsam Green", stars: 5, days: 12, text: "Passt perfekt auf mein altes Kissen, das jetzt wieder aussieht wie neu." },
    ],
    related: ["Bio Dinkelspelzen -Dinkelspreu (kbA) 1kg", "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", "Bezug für Zabuton", "Bezug für Meditationskissen Lotus HOCH (H: 20cm)"],
  }),
  "meditationskissen-cover-lotus-h-15cm-ohne-bestickung": coverPage("Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", {
    subtitle: "Schlichter Bezug ohne Stickerei für das runde Lotus-Kissen ohne Bestickung.",
    buyboxRating: false,
    reviewCount: 0,
    reviews: [],
    // The original states 20 cm as the height here.
    specs: { cushion: "plainCushion", dimensions: [31, 31, 20] },
    facts: coverFacts("15 cm (standard)", "31 × 31 × 20 cm", "110 g", "Rund"),
    sustainability: sustainabilityText(GOTS, PLASTIC_FREE),
    description: `
        <p>${COVER_NOTE} Der Bezug passt auf das Meditationskissen Lotus ohne Bestickung mit 15 cm Höhe.</p>
        <p>Schlicht, aus robuster Bio-Baumwolle und in vielen Farben – für einen neuen Look oder als zweiter Bezug zum Wechseln.</p>`,
    features: [
      { title: "Schlicht und ruhig", text: "Ohne Stickerei wirkt der Bezug besonders zurückhaltend und passt in jeden Raum.", picture: "coverSwap" },
      { title: "Nur der Bezug", text: "Dein Innenkissen mit der Füllung behältst du – du tauschst nur den Bezug und bekommst so eine neue Farbe.", picture: "coverOnlyWide" },
      { title: "Pflegeleicht", text: "Abziehen, bei 30 °C waschen, an der Luft trocknen lassen und wieder aufziehen.", picture: "coverWash" },
    ],
    related: ["Bezug für Halbmond Kissen", "Bezug für Meditationskissen Lotus (H: 15cm)", "Bezug für Yogarolle COVER Ø24 cm", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung"],
  }),
  "zafu-meditationskissen-cover-zen": coverPage("Bezug für Zafu-Meditationskissen Zen", {
    subtitle: "Zafu-Bezug mit Falten und gesticktem Lotus am Griff – für dein Zafu-Kissen Zen.",
    buyboxRating: false,
    rating: 5,
    reviewCount: 2,
    specs: { cushion: "zafu", dimensions: [35, 35, 15] },
    facts: coverFacts("15 cm (standard)", "35 × 35 × 15 cm", "140 g", "Zafu", "Bezug aus Indien"),
    care: `${careList("Bezug bei 30 °C waschen", NO_DRYER)}
        <p>Nass kann die Farbe abfärben. Zieh den Bezug deshalb erst wieder auf, wenn er ganz trocken ist.</p>`,
    description: `
        <p>${COVER_NOTE} Der Bezug passt auf das Zafu-Meditationskissen Zen: rund, mit den typischen Falten und einem kleinen gestickten Lotus am Haltegriff.</p>
        <p>Genäht ist er aus Bio-Baumwolle. Mit einem zweiten Bezug bekommt dein Zafu eine neue Farbe.</p>`,
    features: [
      { title: "Welche Füllung passt zu dir?", text: "Unter dem Bezug steckt das Innenkissen – beim Zafu Zen mit Dinkelspelz, beim Zafu Kapok mit der leichten Kapokfaser.", picture: "fillings" },
      { title: "Nur der Bezug", text: "Das Innenkissen mit der Füllung behältst du. Der neue Bezug wird einfach darübergezogen.", picture: "coverOnlyWide" },
    ],
    reviews: [
      { name: "Katja", place: "Leipzig, DE", color: "Kurkuma", stars: 5, days: 9, text: "Die Farbe ist wunderschön und der Bezug sitzt perfekt." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 5, days: 27, text: "Endlich ein zweiter Bezug zum Wechseln. Sehr gute Qualität." },
    ],
    related: ["Bezug für Yogarolle COVER Ø24 cm", "Bezug für Meditationskissen Lotus HOCH (H: 20cm)", "Zafu-Meditationskissen Zen", "Bezug für Halbmond Kissen"],
  }),
  "halbmond-kissen-cover": coverPage("Bezug für Halbmond Kissen", {
    subtitle: "Bezug für das Halbmond-Kissen – mehr Platz für die Beine, in neuer Farbe.",
    buyboxRating: false,
    reviewCount: 0,
    reviews: [],
    specs: { cushion: "crescent", dimensions: [40, 28, 12], size: "40 × 28" },
    facts: coverFacts("15 cm (standard)", "28 × 40 × 12 cm", "110 g", "Halbrund"),
    sustainability: sustainabilityText(PLASTIC_FREE, GOTS),
    description: `
        <p>${COVER_NOTE} Der Bezug passt auf das Yogakissen Halbmond Shanti. Durch die gewölbte Form liegen deine Oberschenkel frei – angenehm, wenn du mit gekreuzten Beinen sitzt.</p>
        <p>Genäht aus Bio-Baumwolle, abnehmbar und bei 30 °C waschbar.</p>`,
    features: [
      { title: "Die Halbmondform", text: "Vorne nach innen gewölbt, gibt das Kissen deinen Beinen Raum. Der Bezug folgt genau dieser Form.", picture: "coverTopView" },
      { title: "Neue Farbe für dein Kissen", text: "Das Innenkissen mit Dinkelspelz bleibt, wie es ist – nur die Farbe ändert sich.", picture: "coverSwap" },
      { title: "Einfach waschbar", text: "Abziehen, bei 30 °C waschen und nach dem Trocknen wieder aufziehen.", picture: "coverWash" },
    ],
    related: ["Bezug für Yogarolle COVER Ø24 cm", "Yogakissen Halbmond Shanti", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm)", "Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung"],
  }),
  "meditationskissen-cover-lotus-klein-h-10-cm": coverPage("Bezug für Meditationskissen Lotus KLEIN (H: 10 cm)", {
    buyboxRating: false,
    reviewCount: 0,
    reviews: [],
    specs: { cushion: "lotusCushion10", dimensions: [31, 31, 10] },
    facts: coverFacts("10 cm (niedrig)", "31 × 31 × 10 cm", "110 g", "Rund"),
    description: `
        <p>${COVER_NOTE} Der Bezug passt auf das niedrige Meditationskissen Lotus KLEIN mit 10 cm Höhe und schließt mit einem Kordelzug.</p>
        <p>Wie das Kissen trägt er einen kleinen gestickten Lotus am Haltegriff und ist aus robuster Bio-Baumwolle genäht.</p>`,
    features: [
      { title: "Passend zum niedrigen Kissen", text: "Zugeschnitten auf das Lotus KLEIN mit 10 cm Höhe – für alle, die gern nah am Boden sitzen.", picture: "coverSwap" },
      { title: "Mit gesticktem Lotus", text: "Auch dieser Bezug trägt den kleinen gestickten Lotus – das bekannte Detail der Lotus-Kissen.", picture: "coverEmbroidery" },
      { title: "Einfach wechseln", text: "Kordelzug öffnen, Bezug abziehen und bei 30 °C waschen.", picture: "coverWash" },
    ],
    related: ["Bio Dinkelspelzen -Dinkelspreu (kbA) 1kg", "Bezug für Meditationskissen Lotus (H: 15cm)", "Bezug für Zabuton", "Meditationskissen Lotus KLEIN (H: 10 cm)"],
  }),
  "meditationskissen-cover-lotus-hoch-h-20cm": coverPage("Bezug für Meditationskissen Lotus HOCH (H: 20cm)", {
    rating: 5,
    reviewCount: 2,
    specs: { cushion: "lotusCushion20", dimensions: [31, 31, 20] },
    facts: coverFacts("20 cm (hoch)", "31 × 31 × 20 cm", "140 g", "Rund"),
    description: `
        <p>${COVER_NOTE} Der Bezug passt auf das hohe Meditationskissen Lotus HOCH mit 20 cm und schließt mit einem Kordelzug.</p>
        <p>Aus robuster Bio-Baumwolle und in vielen Farben – für einen neuen Look oder als zweiter Bezug für den Waschtag.</p>`,
    features: [
      { title: "Passend zum hohen Kissen", text: "Zugeschnitten auf das Lotus HOCH mit 20 cm – für alle, die gern etwas höher sitzen.", picture: "coverSwap" },
      { title: "Klassisch mit Lotus", text: "Der kleine gestickte Lotus gehört zu jedem Lotus-Kissen dazu, auch zum neuen Bezug.", picture: "coverEmbroidery" },
      { title: "Waschbar und schnell getauscht", text: "Kordelzug öffnen, Bezug abziehen und bei 30 °C waschen.", picture: "coverWash" },
    ],
    reviews: [
      { name: "Stefanie", place: "Darmstadt, DE", color: "Balsam Green", stars: 5, days: 14, text: "Schöne Farbe, sitzt wie angegossen." },
      { name: "Anonym", place: "", color: "Indigo Dust", stars: 5, days: 40, text: "Gute Qualität, mein Kissen sieht wieder aus wie neu." },
    ],
    related: ["Bezug für Zafu-Meditationskissen Zen", "Bezug für Meditationskissen Lotus (H: 15cm)", "Bezug für Zabuton", "Meditationskissen Lotus HOCH (H: 20cm)"],
  }),
  "zabuton-cover": coverPage("Bezug für Zabuton", {
    rating: 5,
    reviewCount: 1,
    specs: { cushion: "zabuton", dimensions: [80, 75, 2] },
    gallery: ["propFront", "coverOn", "coverOnly", "zabutonTop", "cushionFabric"],
    facts: [["Material", ORGANIC], ["Maße (L × B × H)", "80 × 75 × 2 cm"], ["Gewicht", "400 g"], ["Herkunft", "Indien"]],
    description: `
        <p>${COVER_NOTE} Der Bezug passt auf die Meditationsmatte Zabuton mit 80 × 75 cm und gibt ihr eine neue Farbe – passend zu deinem Meditationskissen.</p>
        <p>Genäht aus GOTS-zertifizierter Bio-Baumwolle, abnehmbar und bei 30 °C waschbar.</p>`,
    features: [
      { title: "Eine bequeme Basis", text: "Mit frischem Bezug bleibt der Zabuton dein Meditationsplatz – weich unter Knien und Knöcheln.", picture: "propSeated" },
      { title: "Passend zum Kissen", text: "Den Bezug gibt es in den Farben der Meditationskissen. So passen Matte und Kissen zusammen.", picture: "zabutonCushion" },
    ],
    reviews: [
      { name: "Anonym", place: "", color: "Anthrazit", stars: 5, days: 21, text: "Ließ sich leicht aufziehen, und die Farbe passt gut zu meinem Kissen." },
    ],
    related: ["Bezug für Meditationskissen Lotus (H: 15cm)", "Meditationsmatte Zabuton", "Bezug für Meditationskissen Lotus HOCH (H: 20cm)", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm)"],
  }),
  "yogarolle-cover-o24-cm": coverPage("Bezug für Yogarolle COVER Ø24 cm", {
    // The page lists the colours in another order than the category.
    colors: ["Anthrazit", "Indigo Dust", "Light Taupe", "Natur", "Dark Cranberry"].map((name) => colorsOf("Bezug für Yogarolle COVER Ø24 cm").find((color) => color.name === name)),
    subtitle: "Neuer Bezug für deine Yogarolle RESTORATIVE Ø24 cm – aus Bio-Baumwolle, mit Kordelzug.",
    buyboxRating: false,
    reviewCount: 0,
    reviews: [],
    specs: { cushion: "roll", round: true, dimensions: [64, 24, 24], article: "der Rolle", compare: [{ ...ROLL_END, self: true }, { ...BOLSTER_L_END, label: "Bolster L: 30 × 20 cm" }] },
    facts: [["Material", ORGANIC], ["Maße (L × B × H)", "64 × 24 × 24 cm"], ["Gewicht", "230 g"], ["Herkunft", "Bezug aus Indien, befüllt mit Dinkelspelzen in Deutschland"]],
    care: careList("Bezug bei 30 °C waschen"),
    description: `
        <p>${COVER_NOTE} Der Bezug passt auf die Yogarolle RESTORATIVE mit 24 cm Durchmesser und schließt mit einem Kordelzug.</p>
        <p>Genäht aus Bio-Baumwolle – für einen neuen Look oder als zweiter Bezug, wenn der erste in der Wäsche ist.</p>`,
    features: [
      { title: "Für Yin und Restorative Yoga", text: "Mit neuem Bezug ist deine Rolle bereit für die nächste ruhige Stunde – unter den Knien, unter dem Rücken oder unter den Fersen.", picture: "propKnees" },
      { title: "Rolle oder Bolster?", text: "Die runde Rolle ist höher als das flache Bolster L. Dieser Bezug passt auf die Rolle mit 24 cm Durchmesser.", picture: "propCompare" },
      { title: "Einfach waschbar", text: "Kordelzug öffnen, Bezug abziehen und bei 30 °C waschen.", picture: "coverWash" },
    ],
    related: ["Bezug für Zafu-Meditationskissen Zen", "Yogarolle RESTORATIVE Ø24 cm", "Bezug für Halbmond Kissen", "Yoga Bolster RESTORATIVE S"],
  }),
  "rosenholz-mala-rotes-sandelholz": malaPage("Rosenholz Mala (Dunkles Rosenholz)", "Rosenholz", {
    rating: 4.88,
    reviewCount: 67,
    description: `
        <p>Eine traditionelle indische Gebetskette mit 108 Perlen aus dunklem Rosenholz. Beim Meditieren gleitet Perle für Perle durch deine Finger – das hilft, beim Mantra oder beim Atem zu bleiben.</p>
        <p>Gefertigt wird die Mala von einem Partnerbetrieb in Haridwar, Indien.</p>`,
    reviews: [
      { name: "Anja", place: "Freiburg, DE", stars: 5, days: 8, text: "Die Perlen liegen angenehm in der Hand und duften leicht nach Holz." },
      { name: "Anonym", place: "", stars: 5, days: 19, text: "Hilft mir sehr, bei der Meditation bei meinem Mantra zu bleiben." },
      { name: "Bernhard", place: "Salzburg, AT", stars: 5, days: 33, text: "Schön verarbeitet, die Quaste ist sauber gebunden." },
      { name: "Anonym", place: "", stars: 4, days: 52, text: "Schöne Mala, etwas dunkler als gedacht." },
    ],
    // The original shows "ab" on the cover only here.
    related: ["Restore Comfort Set", "Bezug für Meditationskissen Lotus (H: 15cm)", "Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs",
      { ...relatedCard("Bezug für Meditationskissen Lotus (H: 15cm) - Ohne Bestickung"), fromPrice: true }],
  }),
  "tulsi-mala": malaPage("Tulsi Mala", "Tulsi-Holz", {
    rating: 4.85,
    reviewCount: 53,
    description: `
        <p>Eine Gebetskette mit 108 Perlen aus Tulsi-Holz, dem Holz des Indischen Basilikums. Die hellen Perlen sind leicht und liegen angenehm in der Hand.</p>
        <p>Gefertigt wird die Mala von einem Partnerbetrieb in Haridwar, Indien.</p>`,
    reviews: [
      { name: "Ruth", place: "Bonn, DE", stars: 5, days: 6, text: "Leicht und schön hell. Begleitet mich jeden Morgen beim Meditieren." },
      { name: "Anonym", place: "", stars: 5, days: 17, text: "Sorgfältig gefertigt, die Perlen sind schön gleichmäßig." },
      { name: "Lukas", place: "Graz, AT", stars: 5, days: 30, text: "Ein schönes Geschenk für meine Schwester." },
      { name: "Anonym", place: "", stars: 4, days: 48, text: "Gute Mala, die Quaste hätte ich mir etwas voller gewünscht." },
    ],
    related: ["Yoga Mini-Rolle (Nackenrolle) Ø12 cm", "Yoga Bolster RESTORATIVE L", "Meditationsmatte Zabuton", "Yogamatte MUDRA"],
  }),
  "rudraksha-mala": malaPage("Rudraksha Mala", "Rudraksha-Samen", {
    rating: 4.68,
    reviewCount: 38,
    description: `
        <p>Eine Mala mit 108 Rudraksha-Perlen: getrocknete Samen des Rudraksha-Baums mit ihrer typischen, gefurchten Oberfläche. Beim Meditieren zählst du mit ihnen deine Atemzüge oder Mantras.</p>
        <p>Gefertigt wird die Mala von einem Partnerbetrieb in Haridwar, Indien.</p>`,
    reviews: [
      { name: "Daniel", place: "Kassel, DE", stars: 5, days: 10, text: "Die Struktur der Perlen fühlt sich beim Zählen sehr angenehm an." },
      { name: "Anonym", place: "", stars: 5, days: 23, text: "Wunderschön natürlich, jede Perle ist ein bisschen anders." },
      { name: "Petra", place: "Linz, AT", stars: 4, days: 37, text: "Schöne Mala, etwas kleiner als erwartet." },
      { name: "Anonym", place: "", stars: 4, days: 55, text: "Gut verarbeitet, die Perlen sind etwas unregelmäßig – das ist bei Samen wohl normal." },
    ],
    related: ["Yogamatte MUDRA", "Yogagurt 100% Bio-Baumwolle", "Yogamatte PURE", "Yogatasche PUNE"],
  }),
  "bio-dinkelspelzen-dinkelspreu-kba-2kg": {
    name: "Bio Dinkelspelzen - Dinkelspreu (kbA) 2kg",
    subtitle: "Nachfüllpack mit Bio-Dinkelspelzen aus Deutschland – für Meditations- und Sitzkissen.",
    price: 14.95,
    rating: 5,
    reviewCount: 21,
    specs: { shape: "husks", weight: "2 kg" },
    facts: [["Gewicht", "1,0 g"]], // as the original states
    colors: [{ hex: "#d9c69e" }],
    gallery: ["huskBag", "huskClose", "huskRefill"],
    description: `
        <p>Zwei Kilo Bio-Dinkelspelzen aus Deutschland zum Nachfüllen deiner Kissen. Die Spelzen sind die Hüllen des Dinkelkorns: leicht, innen hohl und rein pflanzlich. Sie passen sich deinem Körper an und bleiben trotzdem formstabil.</p>
        <p>Dinkelspelzen sind atmungsaktiv, verteilen die Wärme gleichmäßig und bleiben auch nach langer Zeit locker. Ausgedient kommen sie auf den Kompost.</p>`,
    features: [],
    reviews: [
      { name: "Monika", place: "Ulm, DE", stars: 5, days: 7, text: "Mein altes Kissen ist wieder schön fest. Kaum Staub beim Umfüllen." },
      { name: "Anonym", place: "", stars: 5, days: 16, text: "Genug für zwei Kissen, gute Qualität." },
      { name: "Jürgen", place: "Wels, AT", stars: 5, days: 29, text: "Schnell nachgefüllt, das Kissen sitzt sich wie neu." },
      { name: "Anonym", place: "", stars: 5, days: 44, text: "Gute Spelzen, riecht angenehm nach Getreide." },
    ],
    related: ["Meditationskissen Lotus KLEIN (H: 10 cm)", "Bio Dinkelspelzen -Dinkelspreu (kbA) 1kg", "Meditationskissen Lotus (H: 15cm) - Ohne Bestickung", "Yoga Bolster RESTORATIVE S"],
  },
  "bio-dinkelspelzen-dinkelspreu-kba-1kg": {
    name: "Bio Dinkelspelzen -Dinkelspreu (kbA) 1kg",
    subtitle: "Ein Kilo Bio-Dinkelspelzen, gereinigt und entstaubt – zum Nachfüllen deiner Kissen.",
    price: 9.95,
    rating: 4.83,
    reviewCount: 12,
    specs: { shape: "husks", weight: "1 kg" },
    facts: [["Gewicht", "1,0 g"]], // as the original states
    colors: [{ hex: "#d9c69e" }],
    gallery: ["huskBag", "huskClose", "huskRefill"],
    description: `
        <p>Ein Kilo Bio-Dinkelspelzen aus kontrolliert biologischem Anbau, besonders gereinigt und entstaubt.</p>
        <p>Damit füllst du Meditationskissen, Sitzkissen und Kopfkissen nach – oder machst ein zu weiches Kissen wieder fest.</p>`,
    features: [],
    reviews: [
      { name: "Hanna", place: "Gotha, DE", stars: 5, days: 5, text: "Genau richtig, um mein Kissen ein wenig aufzufüllen." },
      { name: "Anonym", place: "", stars: 5, days: 14, text: "Sauber und kaum Staub. Gerne wieder." },
      { name: "Thomas", place: "Krems, AT", stars: 5, days: 26, text: "Lässt sich gut einfüllen und verteilt sich gleichmäßig." },
      { name: "Anonym", place: "", stars: 4, days: 41, text: "Gute Qualität, für ein großes Kissen reicht ein Kilo aber nicht ganz." },
    ],
    related: ["Bezug für Meditationskissen Lotus (H: 15cm)", "Bio Dinkelspelzen - Dinkelspreu (kbA) 2kg", "Bezug für Meditationskissen Lotus KLEIN (H: 10 cm)", "Yoga Bolster RESTORATIVE S"],
  },
};
Object.values(coverDetails).forEach((item) => Object.assign(item, {
  swatch: "propFront",
  related: item.related.map((entry) => (typeof entry === "string" ? relatedCard(entry) : entry)),
}));

const productDetails = {
  ...cushionDetails,
  ...clothingDetails,
  ...propDetails,
  ...accessoryDetails,
  ...coverDetails,
  "yogamatte-pure": {
    name: "Yogamatte PURE",
    subtitle: "Die Dynamische: Rutschfestigkeit und Stabilität in perfekter Balance.",
    price: 79.95,
    rating: 4.62,
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
      relatedCard("Yogatasche PUNE"),
      relatedCard("Yogamatten Tragegurt"),
      relatedCard("„Almost Perfect“ Yogamatte PURE"),
      bestsellers.yoga[0], // Yogablock Kork 2er Set
    ],
  },

  "yogamatte-arise": {
    name: "Yogamatte ARISE",
    subtitle: "Die Rutschfeste: Maximaler Grip in allen Posen - Made in Spain",
    price: 89.95,
    rating: 4.7,
    reviewCount: 323,
    ratingScales: [
      ["Rutschfestigkeit", 4.9],
      ["Dämpfung", 4.58],
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
      relatedCard("Yogatasche PUNE"),
      relatedCard("„Almost Perfect“ Yogamatte ARISE"),
      relatedCard("Yogamatten Tragegurt"),
      { name: "Yogamatte ARISE Travel", slug: "yogamatte-arise-travel", price: 59.95, shape: "mat", tint: "#5d7366" },
    ],
  },

  "yogamatte-arise-travel": {
    name: "Yogamatte ARISE Travel",
    subtitle: "Die Ultraleichte - Extrem rutschfest und ideal für Reisen - Made in Spain",
    price: 59.95,
    rating: 4.48,
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
      relatedCard("Yogatasche NANDI"),
    ],
  },

  "yogamatte-mudra-studio": {
    name: "Yogamatte MUDRA",
    subtitle: "Die Vielseitige: Perfekt für Einsteiger - ideal für alle Yoga-Stile und als Studioausstattung.",
    price: 39.95,
    rating: 4.57,
    reviewCount: 1645,
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
      relatedCard("Yogatasche PUNE"),
      relatedCards.mudraPro,
      relatedCard("Yogagurt 100% Bio-Baumwolle"),
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
      relatedCard("Naima Top"),
      relatedCards.almostPerfectProXl,
    ],
  },

  "yogamatte-mudra-pro": {
    name: "Yogamatte MUDRA PRO",
    subtitle: "Die Leistungsstarke: Extra robust für Yoga und Workouts - Made in Germany",
    price: 99.95,
    rating: 4.48,
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
    choices: { name: "Länge", values: [
      { label: "180cm", price: 99.95 },
      { label: "200cm", price: 124.95, without: ["Light Taupe", "Balsam Green"] },
    ] },
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
      relatedCard("Yogatasche PUNE"),
      relatedCard("Yogamatten Tragegurt"),
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
      relatedCard("Yogatasche PUNE"),
      bestsellers.yoga[2], // Yogamatte ARISE
      relatedCard("Yogatasche NANDI"),
      relatedCard("„Almost Perfect“ Yogamatte ARISE Cork"),
    ],
  },

  "yogamatte-schurwolle": {
    name: "Yogamatte WOOL aus Schurwolle",
    subtitle: "Natürlich warm, weich & kuschelig - Made in Germany.",
    price: 119.95,
    rating: 4.94,
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

// ---------- "Almost Perfect" mats ----------
// Returned mats, checked and 15 % cheaper. Each page borrows the drawings,
// care notes and info rows of its regular mat; price, colours, details,
// ratings and reviews are the ones the original lists for the second-quality
// one. `colors` are [name, overrides] pairs: the regular mat's colour,
// reduced, and without PURE's matte look.
const AP_INTRO = `
        <p>„Almost Perfect“ heißt: ein geprüftes Einzelstück aus einer Rücksendung, aufbereitet und ohne Originalverpackung. Ein kleiner Makel – etwa eine leicht abweichende Farbe oder ein winziger Fleck – ändert nichts an der Funktion. Dafür kostet die Matte 15 % weniger als die reguläre.</p>`;
const AP_STUDIO = "Für Studios und andere Räume geeignet";

function almostPerfectPage(baseSlug, { colors, compareAt, about, ...details }) {
  const base = productDetails[baseSlug];
  return {
    ...base,
    choices: undefined,
    gallery: [...base.gallery, "flaw"],
    colors: colors.map(([name, extra]) => ({ ...base.colors.find((color) => color.name === name), name, compareAt, matte: false, soldOut: false, ...extra })),
    description: `${AP_INTRO}
        <p>${about}</p>`,
    ...details,
  };
}

const almostPerfectDetails = {
  "almost-perfect-yogamatte-mudra-pro": almostPerfectPage("yogamatte-mudra-pro", {
    name: "„Almost Perfect“ Yogamatte MUDRA PRO",
    subtitle: "Die Leistungsstarke: Extra robust für Yoga und Workouts - Made in Germany",
    price: 84.95,
    compareAt: 99.95,
    colors: [["Light Taupe"], ["Anthrazit"], ["Balsam Green"]],
    rating: 4.78,
    reviewCount: 9,
    ratingScales: [["Rutschfestigkeit", 5], ["Dämpfung", 5], ["Qualität und Langlebigkeit", 4.5]],
    about: "Wie die reguläre MUDRA PRO ist sie robust, rutschfest und in Deutschland gefertigt – gemacht für Yoga, Pilates und Workouts, auch im Studio. Aussehen und Oberfläche können von der regulären Matte abweichen.",
    facts: [["Material", "Polyester"], ["Maße (L × B)", "180 × 65 cm"], ["Dicke", "0,5 cm"], ["Gewicht", "1775 g"], ["Herkunft", "Deutschland"], ["Hinweis Studios", AP_STUDIO]],
    reviews: [
      { name: "Katharina", place: "Wiesbaden, DE", color: "Anthrazit", stars: 5, days: 4, text: "Einen Makel habe ich nicht gefunden. Dicke, robuste Matte, die auf dem Parkett nicht wandert." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 5, days: 12, text: "Deutlich günstiger als neu und fühlt sich genauso solide an." },
      { name: "Moritz", place: "Osnabrück, DE", color: "Balsam Green", stars: 5, days: 20, text: "Ich nutze sie für Yoga und Krafttraining. Sie hält beides aus." },
      { name: "Sandra", place: "Villach, AT", color: "Anthrazit", stars: 4, days: 33, text: "Eine kleine Stelle an der Kante war minimal heller. Sonst top, und nach dem Wischen ist sie sofort wieder sauber." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 5, days: 51, text: "Preis und Qualität stimmen." },
    ],
    related: ["Augenkissen", "Yogatasche NANDI", "„Almost Perfect“ Yogamatte MUDRA PRO XL", "Meditationskissen Lotus KLEIN (H: 10 cm)"],
  }),
  "almost-perfect-yogamatte-pure": almostPerfectPage("yogamatte-pure", {
    name: "„Almost Perfect“ Yogamatte PURE",
    subtitle: "Die Dynamische: Dämpfung & Halt vereint. Die „Almost Perfect“ ist voll funktionsfähig, mit kleinen Schönheitsfehlern.",
    price: 67.95,
    compareAt: 79.95,
    colors: [["Light Taupe"], ["Indigo Dust"], ["Balsam Green"]],
    rating: 4.6,
    reviewCount: 5,
    ratingScales: [["Rutschfestigkeit", 5], ["Dämpfung", 5], ["Qualität und Langlebigkeit", 5]],
    about: "Wie die reguläre PURE hat sie eine griffige PU-Oberfläche und eine Unterseite aus Naturkautschuk – für dynamische Stile, bei denen es ins Schwitzen geht.",
    facts: [["Gewicht", "2700 g"]],
    reviews: [
      { name: "Elisa", place: "Münster, DE", color: "Indigo Dust", stars: 5, days: 6, text: "Mit trockenen Händen rutsche ich auf vielen Matten. Hier sitzt alles. Den Makel suche ich noch." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 5, days: 15, text: "Genau wie die reguläre PURE, nur günstiger." },
      { name: "Tobias", place: "Regensburg, DE", color: "Balsam Green", stars: 5, days: 27, text: "Ein winziger Fleck am Rand, mehr nicht. Grip und Dämpfung sind top." },
      { name: "Gabi", place: "Steyr, AT", color: "Indigo Dust", stars: 4, days: 38, text: "Gute Matte. Der Gummigeruch war am Anfang deutlich, nach ein paar Tagen Lüften ging es." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 4, days: 60, text: "Für den Preis völlig in Ordnung, nur etwas schwer zum Mitnehmen." },
    ],
    related: ["Yogamatte PURE", "Yogatasche NANDI", "Zafu-Meditationskissen Zen", "„Almost Perfect“ Yogamatte ARISE"],
  }),
  "almost-perfect-yogamatte-mudra": almostPerfectPage("yogamatte-mudra-studio", {
    name: "„Almost Perfect“ Yogamatte MUDRA",
    subtitle: "Die Vielseitige: Besonders geeignet für Einsteiger. Die „Almost Perfect“ ist voll funktionsfähig, mit kleinen Schönheitsfehlern.",
    price: 33.95,
    compareAt: 39.95,
    colors: [["Indigo Dust"], ["Aubergine"], ["Light Taupe"], ["Bordeaux", { hex: "#6e2b38", underside: "#6e2b38" }], ["Balsam Green"]],
    rating: 3.5,
    reviewCount: 2,
    ratingScales: [["Rutschfestigkeit", 2.33], ["Dämpfung", 3], ["Qualität und Langlebigkeit", 1.5]],
    about: "Wie die reguläre MUDRA ist sie gut gepolstert und leicht – eine gute Wahl für den Einstieg und für alle Yogastile.",
    facts: [["Gewicht", "1350 g"]],
    reviews: [
      { name: "Kerstin", place: "Freiburg, DE", color: "Indigo Dust", stars: 4, days: 14, text: "Für den Einstieg völlig in Ordnung. Auf glattem Boden rutscht sie manchmal etwas." },
      { name: "Anonym", place: "", color: "Light Taupe", stars: 3, days: 45, text: "Etwas dünner als erwartet, und die Oberfläche ist nicht sehr griffig." },
    ],
    related: ["„Almost Perfect“ Yogamatte ARISE Cork", "Bezug für Yogarolle COVER Ø24 cm", "„Almost Perfect“ Yogamatte MUDRA PRO XL", "Yogablock Kork 2er Set"],
  }),
  // Sold out as a whole: no colour to pick, no cart.
  "almost-perfect-yogamatte-arise-travel": almostPerfectPage("yogamatte-arise-travel", {
    name: "„Almost Perfect“ Yogamatte ARISE Travel",
    subtitle: "Die Faltbare: Rutschfest und leicht für Reisen. Die „Almost Perfect“ ist voll funktionsfähig, mit kleinen Schönheitsfehlern.",
    price: 50.95,
    compareAt: 59.95,
    colors: [[null, { hex: "#8c5769", underside: "#b98a9c", soldOut: true }]],
    unavailable: true,
    rating: 4,
    reviewCount: 2,
    ratingScales: [["Rutschfestigkeit", 5], ["Dämpfung", 3.5], ["Qualität und Langlebigkeit", 5]],
    about: "Wie die reguläre ARISE Travel ist sie faltbar und ultraleicht – eine Matte aus Naturkautschuk für unterwegs, die auf jedem Untergrund hält.",
    facts: [["Material", "Naturkautschuk"], ["Maße (L × B)", "185 × 65 cm"], ["Dicke", "0,13 cm"], ["Gewicht", "1,0 kg"], ["Herkunft", "Spanien"],
      ["Hinweis Studios", "Nur für die persönliche Praxis. Für Räume empfehlen wir die MUDRA oder die MUDRA PRO."]],
    features: [
      ...productDetails["yogamatte-arise-travel"].features.slice(0, 3),
      {
        title: "Almost Perfect",
        text: "Diese Matte stammt aus einer Rücksendung und wurde geprüft. Ein kleiner Schönheitsfehler – ein winziger Fleck oder eine leicht andere Farbe – ändert nichts daran, wie sie hält und wie leicht sie ist.",
        picture: "flawWide",
      },
    ],
    reviews: [
      { name: "Judith", place: "Dresden, DE", stars: 5, days: 22, text: "Perfekt für Reisen: kaum Platz im Koffer, und der Grip ist super." },
      { name: "Anonym", place: "", stars: 3, days: 58, text: "Sehr rutschfest, aber dünn. Für die Knie lege ich eine Decke darunter." },
    ],
    related: ["Yogatasche NANDI", "Yogamatte ARISE Travel", "„Almost Perfect“ Yogamatte ARISE", "Yogamatte ARISE Set"],
  }),
  // The only colour is sold out, so the page is sold out as well.
  "almost-perfect-yogamatte-mudra-xl": almostPerfectPage("yogamatte-mudra-studio-xl", {
    name: "„Almost Perfect“ Yogamatte MUDRA XL",
    subtitle: "Die Vielseitige: Besonders geeignet für Einsteiger. Die „Almost Perfect“ ist voll funktionsfähig, mit kleinen Schönheitsfehlern.",
    price: 36.5,
    compareAt: 42.95,
    colors: [["Balsam Green", { soldOut: true }]],
    unavailable: true,
    rating: 5,
    reviewCount: 1,
    ratingScales: [["Rutschfestigkeit", 5], ["Dämpfung", 5], ["Qualität und Langlebigkeit", 5]],
    about: "Wie die reguläre MUDRA XL ist sie mit 195 cm besonders lang – für große Menschen, die genug Platz brauchen.",
    facts: [["Gewicht", "1500 g"]],
    reviews: [
      { name: "Anneliese", place: "Coburg, DE", color: "Balsam Green", stars: 5, days: 40, text: "Schön lang, auch für mich mit 1,90 m. Den Makel sehe ich nicht." },
    ],
    related: ["Yogablock Kork Einzeln", "„Almost Perfect“ Yogamatte MUDRA", "Amina Wrap Top", "„Almost Perfect“ Yogamatte MUDRA PRO XL"],
  }),
  // No stars in the buy box, but a review below, as on the original.
  "almost-perfect-yogamatte-arise": almostPerfectPage("yogamatte-arise", {
    name: "„Almost Perfect“ Yogamatte ARISE",
    subtitle: "Die Rutschfeste: Maximaler Grip in allen Posen. Die „Almost Perfect“ ist voll funktionsfähig, mit kleinen Schönheitsfehlern.",
    price: 76.46,
    compareAt: 89.95,
    colors: [["Wild Ginger", { hex: "#8c5769", underside: "#b98a9c" }]],
    buyboxRating: false,
    rating: 5,
    reviewCount: 1,
    ratingScales: undefined,
    about: "Wie die reguläre ARISE besteht sie aus Naturkautschuk mit extra Grip, ist beidseitig nutzbar und wird in Spanien gefertigt.",
    facts: [["Gewicht", "2,0 kg"]],
    reviews: [
      { name: "Anonym", place: "", color: "Wild Ginger", stars: 5, days: 75, text: "Griffig auch bei viel Schweiß. Von dem kleinen Makel merke ich nichts." },
    ],
    related: ["Yoga Bolster RESTORATIVE L", "Yogamatte ARISE", "Yogamatte ARISE Travel", "Yogamatte ARISE Set"],
  }),
  "almost-perfect-yogamatte-arise-cork": almostPerfectPage("yogamatte-arise-cork", {
    name: "„Almost Perfect“ Yogamatte ARISE Cork",
    subtitle: "Die Natürliche: Für sehr schweißtreibendes Yoga. Die „Almost Perfect“ ist voll funktionsfähig, mit kleinen Schönheitsfehlern.",
    price: 84.95,
    compareAt: 99.95,
    colors: [["Align"], ["Lotus"]],
    rating: 5,
    reviewCount: 1,
    ratingScales: [["Rutschfestigkeit", 5], ["Dämpfung", 5]],
    about: "Wie die reguläre ARISE CORK hat sie eine Oberfläche aus Naturkork, die auch bei Schweiß griffig bleibt und von Natur aus Gerüche abweist.",
    facts: [["Gewicht", "1,8 kg"]],
    features: productDetails["yogamatte-arise-cork"].features.slice(0, 3),
    reviews: [
      { name: "Vera", place: "Erfurt, DE", color: "Lotus", stars: 5, days: 33, text: "Je feuchter die Hände, desto besser der Halt – genau wie beschrieben." },
    ],
    related: ["„Almost Perfect“ Yogamatte MUDRA", "„Almost Perfect“ Yogamatte ARISE", "FIONA Womens Pants", "Yogamatte ARISE CORK"],
  }),
  // The buy box shows stars (as on the original) though the review list is empty.
  "almost-perfect-yogamatte-mudra-pro-xl": almostPerfectPage("yogamatte-mudra-pro", {
    name: "„Almost Perfect“ Yogamatte MUDRA PRO XL",
    subtitle: "Die Leistungsstarke: Extra robust für Yoga und Workouts - Made in Germany",
    price: 106.29,
    compareAt: 124.95,
    colors: [["Anthrazit"]],
    rating: 4.67,
    reviewCount: 6,
    ratingScales: undefined,
    about: "Wie die reguläre MUDRA PRO in 200 cm Länge ist sie robust, rutschfest und in Deutschland gefertigt. Aussehen und Oberfläche können von der regulären Matte abweichen.",
    facts: [["Material", "Polyester"], ["Zusammensetzung", "100 % PVC mit Vinyl-Beschichtung"], ["Maße (L × B)", "200 × 65 cm"], ["Dicke", "0,5 cm"], ["Gewicht", "2,0 kg"],
      ["Herkunft", "Germany"], ["Hinweis Studios", AP_STUDIO]],
    reviews: [],
    related: ["Yogatasche NANDI", "Yogamatte MUDRA PRO", "„Almost Perfect“ Yogamatte MUDRA", "„Almost Perfect“ Yogamatte MUDRA PRO"],
  }),
};
Object.values(almostPerfectDetails).forEach((item) => {
  item.related = item.related.map((name) => relatedCard(name));
});
Object.assign(productDetails, almostPerfectDetails);

// ---------- Sets ----------
// A set is built from the pages of its parts (colours, choices, ratings, info
// rows); only what is about the set itself is written here. The original's
// sets have no rating of their own and no reviews section.
const SET_PART = {
  arise: "yogamatte-arise", travel: "yogamatte-arise-travel", pure: "yogamatte-pure", mudraPro: "yogamatte-mudra-pro",
  bag: "yogatasche-pune", strap: "yoga-gurt-bio-baumwolle", towel: "yoga-handtuch", neck: "nackenrolle",
  block: "yogablock-aus-kork-alle", spray: "yogamatten-spray", roll: "yogarolle-restorative-o24-cm",
  bolsterS: "yoga-bolster-restorative-s", bolsterL: "yoga-bolster-restorative-l", blanket: "yogadecke-savasana-100-baumwolle-kba",
  cushion: "meditationskissen-lotus-h-15cm", plain: "meditationskissen-lotus-h-15cm-ohne-bestickung",
  tall: "meditationskissen-lotus-hoch-h-20cm", zabuton: "meditationsmatte-zabuton",
};
// The free online courses are no product page here, only a line in the set.
const COURSE_PART = { name: "inkl. GRATIS Onlinekurse", rating: 5, reviewCount: 3, price: 0, colors: [{ name: null, hex: "#b8975a" }], gallery: ["course"], specs: {} };

const careOf = (...slugs) => slugs.map((slug) => productDetails[slug].care).filter(Boolean).join("");
const sustainabilityOf = (...slugs) => slugs.map((slug) => productDetails[slug].sustainability).filter(Boolean).join("");

function setPage({ parts, rows, ...details }) {
  const resolved = parts.map((part) => (typeof part === "string" ? { slug: part, ...productDetails[part] } : part));
  return {
    colors: [],
    gallery: ["setAll", ...resolved.map((_, i) => `setPart${i}`)],
    specs: { parts: resolved },
    parts: resolved,
    price: setColor({ parts: resolved }, resolved.map((part) => startPick(part))).price,
    buyboxRating: false,
    noReviews: true,
    reviews: [],
    shippingNote: false,
    features: rows.map(([slug, index]) => ({ ...productDetails[slug].features[index], part: parts.indexOf(slug) })),
    ...details,
  };
}
const relatedFrom = (name) => ({ ...relatedCard(name), fromPrice: true });
const SET_HINT = "Im Set sparst du 10 % gegenüber den Einzelpreisen.";

const setDetails = {
  "yoga-set-arise": setPage({
    name: "Yogamatte ARISE Set",
    parts: [SET_PART.arise, SET_PART.bag],
    rows: [[SET_PART.bag, 0], [SET_PART.bag, 1], [SET_PART.arise, 0], [SET_PART.arise, 2]],
    description: `
        <p>Matte und Tasche in einem Set: Die ARISE aus Naturkautschuk hält auch bei viel Schweiß, die Yogatasche aus Bio-Baumwolle trägt sie samt Zubehör.</p>
        <p>Beide Teile wählst du in deiner Farbe. ${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Yogamatte ARISE", "„Almost Perfect“ Yogamatte ARISE", "Yogamatte ARISE Travel", "Yogamatte ARISE CORK"],
  }),
  "practice-anywhere-set": setPage({
    name: "Practice Anywhere Set",
    subtitle: "Reisematte und Handtuch in einem Set: leicht, griffig und überall einsatzbereit.",
    parts: [SET_PART.towel, SET_PART.travel],
    rows: [[SET_PART.travel, 0], [SET_PART.travel, 1], [SET_PART.travel, 2], [SET_PART.towel, 0], [SET_PART.towel, 1]],
    description: `
        <p>Die faltbare ARISE Travel und das saugfähige Yoga Handtuch ergänzen sich: Die Matte liegt fest auf dem Boden, das Handtuch gibt zusätzlichen Halt, wenn die Hände feucht werden.</p>
        <p>Das Set passt in jeden Koffer. ${SET_HINT}</p>`,
    facts: [["Gewicht", "0,0 kg"]],
    care: careOf(SET_PART.travel, SET_PART.towel),
    sustainability: sustainabilityOf(SET_PART.travel, SET_PART.towel),
    related: ["Travel Essentials Set", relatedFrom("Yogamatte ARISE Travel"), "Yogamatte ARISE Set", "Yogamatte ARISE CORK"],
  }),
  "restore-comfort-set": setPage({
    name: "Restore Comfort Set",
    subtitle: "Mini-Rolle und Handtuch für sanfte Unterstützung bei Yoga, Meditation und Regeneration.",
    parts: [SET_PART.towel, SET_PART.neck],
    rows: [[SET_PART.neck, 0], [SET_PART.neck, 2], [SET_PART.towel, 0], [SET_PART.towel, 1]],
    description: `
        <p>Die kleine Rolle stützt Nacken, Knie oder Rücken, das Handtuch macht die Unterlage griffig – ein Set für Yin Yoga, Meditation und ruhige Pausen.</p>
        <p>Beide Teile gibt es in mehreren Farben. ${SET_HINT}</p>`,
    facts: [["Gewicht", "0,0 kg"]],
    care: careOf(SET_PART.neck, SET_PART.towel),
    sustainability: sustainabilityOf(SET_PART.neck, SET_PART.towel),
    related: ["Deep Release Set", "Yogarolle Set Yin Yoga", relatedFrom("Yogarolle RESTORATIVE Ø24 cm"), relatedFrom("Yoga Mini-Rolle (Nackenrolle) Ø12 cm")],
  }),
  "deep-release-set": setPage({
    name: "Deep Release Set",
    subtitle: "Mini-Rolle und Yogagurt für sanftes Dehnen und gezielte Entspannung von Nacken, Schultern und Rücken.",
    parts: [SET_PART.strap, SET_PART.neck],
    rows: [[SET_PART.neck, 0], [SET_PART.neck, 1], [SET_PART.neck, 2], [SET_PART.strap, 0]],
    description: `
        <p>Mini-Rolle und Yogagurt helfen beim sanften Dehnen: Die Rolle entspannt Nacken, Schultern und Rücken, der Gurt verlängert deine Reichweite in jeder Haltung.</p>
        <p>${SET_HINT}</p>`,
    facts: [["Gewicht", "0,0 kg"]],
    care: careOf(SET_PART.strap, SET_PART.neck),
    sustainability: sustainabilityOf(SET_PART.strap, SET_PART.neck),
    related: ["Yoga Mini-Rolle (Nackenrolle) Ø12 cm", "Restore Comfort Set", "Yogarolle RESTORATIVE Ø24 cm", "Yogarolle Set Yin Yoga"],
  }),
  "travel-essentials-set": setPage({
    name: "Travel Essentials Set",
    subtitle: "Leichte Reisematte plus Yogagurt – alles, was du für unterwegs brauchst.",
    parts: [SET_PART.strap, SET_PART.travel],
    rows: [[SET_PART.travel, 0], [SET_PART.travel, 1], [SET_PART.strap, 0]],
    description: `
        <p>Eine leichte, faltbare Reisematte und ein Yogagurt – mehr braucht deine Praxis im Hotel, im Park oder im Retreat nicht.</p>
        <p>Matte und Gurt wählst du in je einer Farbe. ${SET_HINT}</p>`,
    facts: [["Gewicht", "0,0 kg"]],
    care: careOf(SET_PART.travel, SET_PART.strap),
    sustainability: sustainabilityOf(SET_PART.travel, SET_PART.strap),
    related: ["Practice Anywhere Set", "Yogamatte ARISE Travel", "Yogamatte ARISE Set", "„Almost Perfect“ Yogamatte ARISE"],
  }),
  "yoga-tasche-gurt-set": setPage({
    name: "Yoga Tasche + Gurt Set",
    subtitle: "Stilvolle Tasche und Yogagurt aus Bio-Baumwolle – nachhaltig und immer einsatzbereit.",
    parts: [SET_PART.strap, SET_PART.bag],
    rows: [[SET_PART.bag, 0], [SET_PART.bag, 2], [SET_PART.strap, 0], [SET_PART.strap, 1]],
    description: `
        <p>Eine geräumige Yogatasche und ein Yogagurt, beide aus Bio-Baumwolle: das Set für alle, die schon eine Matte haben und sie bequem tragen wollen.</p>
        <p>Beide Teile wählst du einzeln in deiner Farbe. ${SET_HINT}</p>`,
    facts: [["Material", ORGANIC], ["Gewicht", "500 g"]],
    care: careOf(SET_PART.bag, SET_PART.strap),
    sustainability: sustainabilityOf(SET_PART.bag, SET_PART.strap),
    related: ["Yogamatten Tragegurt", "Yogagurt 100% Bio-Baumwolle", "Yogatasche NANDI", "Yogamatte ARISE Set"],
  }),
  "yogazubehor-set": setPage({
    name: "Yoga Zubehör + Reinigungs Set",
    parts: [SET_PART.block, SET_PART.strap, SET_PART.spray],
    rows: [[SET_PART.block, 0], [SET_PART.block, 1], [SET_PART.strap, 0]],
    description: `
        <p>Ein Korkblock für Stabilität, ein Yogagurt für mehr Reichweite und das Bio-Spray zum Reinigen deiner Matte: die Grundausstattung für saubere, sichere Übungen.</p>
        <p>Block-Größe und Spray-Inhalt wählst du selbst, der Preis folgt. ${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Yoga-Zubehör Set", "Yoga Set Yin Yoga Restorative S", "Yoga Bolster Set Yin Yoga", "Yogarolle Set Yin Yoga"],
  }),
  "yogamatte-mudra-pro-set": setPage({
    name: "Yogamatte MUDRA PRO Set",
    subtitle: "Das Basis-Set: robuste Matte und geräumige Tasche für deine Praxis.",
    parts: [SET_PART.mudraPro, SET_PART.bag, COURSE_PART],
    rows: [[SET_PART.mudraPro, 0], [SET_PART.bag, 0], [SET_PART.bag, 1], [SET_PART.mudraPro, 3]],
    description: `
        <p>Die robuste MUDRA PRO, eine geräumige Yogatasche und die gratis Onlinekurse: ein Einstieg, der dich trägt.</p>
        <p>Die Matte gibt es in 180 und 200 cm Länge, der Set-Preis passt sich an. ${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Yogamatte MUDRA PRO", "„Almost Perfect“ Yogamatte MUDRA PRO XL", "„Almost Perfect“ Yogamatte MUDRA PRO", "Yogamatte MUDRA"],
  }),
  "yogazubehor-set-essentials-1": setPage({
    name: "Yoga-Zubehör Set",
    parts: [SET_PART.block, SET_PART.strap],
    rows: [[SET_PART.block, 0], [SET_PART.block, 1], [SET_PART.strap, 0]],
    description: `
        <p>Korkblock und Yogagurt – zwei Helfer für mehr Stabilität und Reichweite in deinen Haltungen.</p>
        <p>Block-Größe und Gurtfarbe wählst du selbst. ${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Yoga Zubehör + Reinigungs Set", "Yoga Bolster Set Yin Yoga", "Yoga Set Yin Yoga Restorative S", "Yogarolle Set Yin Yoga"],
  }),
  "yoga-set-yin-yoga-restorative-rolle": setPage({
    name: "Yogarolle Set Yin Yoga",
    parts: [SET_PART.roll, SET_PART.blanket, SET_PART.strap],
    rows: [[SET_PART.roll, 0], [SET_PART.roll, 2], [SET_PART.blanket, 0], [SET_PART.strap, 0]],
    description: `
        <p>Rolle, Decke und Gurt für lange, ruhige Haltungen im Yin und Restorative Yoga: Die Rolle öffnet den Brustkorb, die Decke wärmt und polstert, der Gurt gibt Halt.</p>
        <p>Alle Teile wählst du in deinen Farben. ${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Yoga Set Yin Yoga Restorative S", "Yoga Bolster Set Yin Yoga", "Yoga Zubehör + Reinigungs Set", relatedFrom("Yogarolle RESTORATIVE Ø24 cm")],
  }),
  "yoga-set-yin-yoga-restorative-s": setPage({
    name: "Yoga Set Yin Yoga Restorative S",
    parts: [SET_PART.bolsterS, SET_PART.strap, SET_PART.block],
    rows: [[SET_PART.bolsterS, 1], [SET_PART.strap, 0], [SET_PART.block, 0]],
    description: `
        <p>Das flache Bolster S, ein Yogagurt und zwei Korkblöcke: die Grundausstattung für sanfte, unterstützte Haltungen mit geringer Höhe.</p>
        <p>${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Yoga Bolster Set Yin Yoga", "Yogarolle Set Yin Yoga", "Yoga-Zubehör Set", "Yoga Zubehör + Reinigungs Set"],
  }),
  "yoga-set-yin-yoga-restorative-l": setPage({
    name: "Yoga Bolster Set Yin Yoga",
    parts: [SET_PART.bolsterL, SET_PART.blanket, SET_PART.strap],
    rows: [[SET_PART.bolsterL, 1], [SET_PART.blanket, 0], [SET_PART.strap, 0]],
    description: `
        <p>Das breite Bolster L, eine Yogadecke und ein Gurt: stabile Unterstützung für Vorbeugen und regenerative Haltungen.</p>
        <p>${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Yoga Set Yin Yoga Restorative S", "Yogarolle Set Yin Yoga", "Yoga-Zubehör Set", "Yoga Zubehör + Reinigungs Set"],
  }),
  "yoga-set-pure": setPage({
    name: "Yogamatte PURE Set",
    parts: [SET_PART.pure, SET_PART.bag],
    rows: [[SET_PART.bag, 0], [SET_PART.bag, 1], [SET_PART.pure, 2], [SET_PART.pure, 1]],
    description: `
        <p>Die PURE mit griffiger PU-Oberfläche und die geräumige Yogatasche: dynamisches Yoga, bequem verpackt.</p>
        <p>Beide Teile wählst du in deiner Farbe. ${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Yogamatte MUDRA PRO Set", relatedFrom("Yogamatte PURE"), "Yoga Zubehör + Reinigungs Set", relatedFrom("„Almost Perfect“ Yogamatte PURE")],
  }),
  "meditations-set-lotus-15cm-ohne-stick-inkl-gratis-meditationskurs": setPage({
    name: "Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs",
    parts: [SET_PART.plain, SET_PART.zabuton, COURSE_PART],
    rows: [[SET_PART.plain, 0], [SET_PART.zabuton, 0], [SET_PART.plain, 1]],
    description: `
        <p>Ein schlichtes Meditationskissen ohne Stickerei, die weiche Meditationsmatte Zabuton als Unterlage und gratis Onlinekurse: alles für einen festen Meditationsplatz.</p>
        <p>Farbe und Dicke der Matte (4 oder 7 cm) wählst du selbst. ${SET_HINT}</p>`,
    facts: [["Gewicht", "4,0 kg"]],
    related: ["Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs", "Meditations-Set Lotus 20cm", relatedFrom("Meditationskissen Lotus (H: 15cm) - Ohne Bestickung"), relatedFrom("Meditationskissen Lotus (H: 15cm)")],
  }),
  "meditations-set-lotus-15cm-inkl-gratis-meditationskurs": setPage({
    name: "Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs",
    parts: [SET_PART.cushion, SET_PART.zabuton, COURSE_PART],
    rows: [[SET_PART.cushion, 0], [SET_PART.zabuton, 0], [SET_PART.cushion, 1]],
    description: `
        <p>Das Lotus-Kissen mit gesticktem Lotus (Höhe 15 cm), die Meditationsmatte Zabuton und gratis Onlinekurse: dein Meditationsplatz in einem Set.</p>
        <p>Farbe und Dicke der Matte (4 oder 7 cm) wählst du selbst. ${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs", "Meditations-Set Lotus 20cm", relatedFrom("Meditationskissen Lotus (H: 15cm) - Ohne Bestickung"), relatedFrom("Meditationskissen Lotus (H: 15cm)")],
  }),
  "meditations-set-lotus-1": setPage({
    name: "Meditations-Set Lotus 20cm",
    parts: [SET_PART.tall, SET_PART.zabuton],
    rows: [[SET_PART.tall, 0], [SET_PART.zabuton, 0]],
    description: `
        <p>Das höhere Lotus-Kissen (20 cm) auf der weichen Meditationsmatte Zabuton: für alle, die etwas höher sitzen möchten.</p>
        <p>Farbe und Dicke der Matte (4 oder 7 cm) wählst du selbst. ${SET_HINT}</p>`,
    facts: [["Gewicht", "1,0 kg"]],
    related: ["Meditations-Set Lotus 15cm inkl. GRATIS Meditationskurs", "Meditations-Set Lotus 15cm (Ohne Stick) inkl. GRATIS Meditationskurs", relatedFrom("Meditationsmatte Zabuton"), relatedFrom("Meditationskissen Lotus HOCH (H: 20cm)")],
  }),
};

// The gift card: a value instead of a colour, delivered by mail. As on the
// original there are no stars in the buy box, but a reviews section.
const giftDetails = {
  gutschein: {
    name: "Gutscheinkarte",
    price: 20,
    colors: [{ name: null, hex: "#b8975a" }],
    choices: { name: "Gutscheinwert", values: [20, 40, 60, 80, 100, 125, 150, 200].map((value) => ({ label: `€${value}.00`, price: value, specs: { value } })) },
    specs: { value: 20 },
    gallery: ["giftFront", "giftMail"],
    buyboxRating: false,
    shippingNote: false,
    inStock: "Auf Lager - Versand sofort per Email",
    rating: 4.2,
    reviewCount: 5,
    description: `
        <p>Mit dem Gutschein verschenkst du Yoga und Meditation, ohne etwas auszusuchen: Er kommt als PDF per E-Mail und lässt sich ausdrucken oder direkt weiterleiten.</p>
        <p>Den Wert wählst du zwischen 20 und 200 €.</p>`,
    facts: [["Gewicht", "0,0 kg"]],
    features: [],
    reviews: [
      { name: "Annika", place: "Gera, DE", stars: 5, days: 40, text: "Als Geschenk für meine Schwester ideal. Die E-Mail kam sofort an." },
      { name: "Anonym", place: "", stars: 5, days: 120, text: "Unkompliziert und schnell." },
      { name: "Wolfgang", place: "Villach, AT", stars: 5, days: 300, text: "Der Gutschein ließ sich gut ausdrucken und hübsch verpacken." },
      { name: "Heike", place: "Cottbus, DE", stars: 1, days: 330, text: "Ich hatte mir etwas Schöneres zum Verschenken vorgestellt." },
      { name: "Anonym", place: "", stars: 5, days: 700, text: "Genau das Richtige, wenn man nicht weiß, welche Farbe." },
    ],
    related: ["Meditationskissen Lotus KLEIN (H: 10 cm)", "Yoga Zubehör + Reinigungs Set", relatedFrom("Meditationskissen Lotus (H: 15cm) - Ohne Bestickung"), relatedFrom("Yoga Handtuch")],
  },
};

Object.values({ ...setDetails, ...giftDetails }).forEach((item) => {
  item.related = item.related.map((entry) => (typeof entry === "string" ? relatedCard(entry) : entry));
});
Object.assign(productDetails, setDetails, giftDetails);

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
  // Clothing
  outfitWarrior: { label: () => "Figur im Krieger, die das Kleidungsstück trägt", draw: (color, specs) => outfitScene(color, specs, "warrior", "-40 -2 180 110") },
  outfitTree: { label: () => "Figur im Baum, die das Kleidungsstück trägt", draw: (color, specs) => outfitScene(color, specs, "tree", "-40 -2 180 110") },
  outfitDog: { label: () => "Figur im herabschauenden Hund, die das Kleidungsstück trägt", draw: (color, specs) => outfitScene(color, specs, "dog", "-40 -2 180 110") },
  outfitSeated: { label: () => "Figur im Schneidersitz, die das Kleidungsstück trägt", draw: (color, specs) => outfitScene(color, specs, "seated", "-40 -2 180 110") },
  fabricClose: { label: (specs) => `Stoff aus der Nähe: ${specs.fabric || "Bio-Baumwolle (kbA)"}`, draw: (color, specs) => fabricWidePicture(color, specs) },
  measure: { label: (specs) => `Maße in Größe M: ${specs.chart.columns.join(", ")}`, draw: (color, specs) => measureWidePicture(color, specs) },
  pair: { label: (specs) => specs.pair.label, draw: (color, specs) => pairWidePicture(color, specs) },
  origin: { label: (specs) => `Garnrolle und Nähnadel – genäht ${specs.madeIn}`, draw: (color, specs) => originWidePicture(color, specs) },
  garmentWash: { label: () => "Kleidungsstück und Waschsymbol für 30 °C", draw: (color, specs) => garmentWashWide(color, specs) },
  // Bolsters, rolls, zabuton and bench
  propKnees: { label: (specs) => `Figur in Rückenlage, die Knie auf ${specs.article}`, draw: (color, specs) => propSceneSvg(color, specs, "knees", true) },
  propFish: { label: (specs) => `Figur in einer gestützten Rückbeuge über ${specs.article}`, draw: (color, specs) => propSceneSvg(color, specs, "fish", true) },
  propChild: { label: () => "Figur in der gestützten Kindhaltung auf dem Bolster", draw: (color, specs) => propSceneSvg(color, specs, "child", true) },
  propNeck: { label: () => "Figur in Rückenlage, die Rolle unter dem Nacken", draw: (color, specs) => propSceneSvg(color, specs, "neck", true) },
  propSeated: { label: () => "Figur im Schneidersitz auf einem Kissen auf dem Zabuton", draw: (color, specs) => propSceneSvg(color, specs, "seated", true) },
  propKneel: { label: () => "Figur im Fersensitz auf der Meditationsbank", draw: (color, specs) => propSceneSvg(color, specs, "kneel", true) },
  propCompare: { label: (specs) => `Querschnitte im Vergleich: ${specs.compare.map((item) => item.label).join(" und ")}`, draw: (color, specs) => propCompareWide(color, specs) },
  propFilling: { label: (specs) => `Querschnitt mit der Füllung aus ${specs.filling}`, draw: (color, specs) => propFillingWide(color, specs) },
  propSideWide: { label: (specs) => `Von der Seite, ${specs.dimensions[0]} cm lang und ${specs.dimensions[2]} cm hoch`, draw: (color, specs) => widePhoto(propSideView(color, specs, 150, 128, 200, 80)) },
  propTravel: { label: () => "Die Rolle neben einer Tasche, 830 g", draw: (color, specs) => propTravelWide(color, specs) },
  fabricWeave: { label: () => "Stoff aus Bio-Baumwolle aus der Nähe", draw: (color) => weaveWidePicture(color) },
  zabutonCushion: { label: (specs) => `Zabuton von oben, ${specs.dimensions[0]} × ${specs.dimensions[1]} cm, mit einem Meditationskissen`, draw: (color, specs) => widePhoto(zabutonTopView(color, specs, 150, 88, 130, true)) },
  benchTilt: { label: (specs) => `Meditationsbank von der Seite, ${decimal(specs.dimensions[2])} cm hoch, die Sitzfläche leicht geneigt`, draw: (color, specs) => widePhoto(benchSideView(color, specs, 150, 140, 5)) },
  benchWood: { label: () => "Buchenholz aus der Nähe", draw: () => widePhoto(woodGrain(330, 202) + woodLabel(165, 88)) },
  benchCushion: { label: () => "Polster aus Schaumstoff im Bezug aus Bio-Baumwolle", draw: (color) => benchPadWide(color) },
  // Bags, cork blocks and straps
  propCarry: { label: (specs) => (specs.shape === "sack" ? "Figur mit der Tasche quer über dem Rücken" : "Figur mit der Tasche über der Schulter"), draw: (color, specs) => propSceneSvg(color, specs, "carry", true) },
  propBlockLunge: { label: () => "Figur im Ausfallschritt, eine Hand auf dem Yogablock", draw: (color, specs) => propSceneSvg(color, specs, "blockLunge", true) },
  propStretch: { label: () => "Figur in der Vorbeuge im Sitzen, der Gurt um die Füße", draw: (color, specs) => propSceneSvg(color, specs, "strapStretch", true) },
  propMatCarry: { label: () => "Figur mit der aufgerollten Matte am Tragegurt über der Schulter", draw: (color, specs) => propSceneSvg(color, specs, "strapCarry", true) },
  bagPacked: { label: () => "Die Tasche neben Matte, Block und Gurt, die hineinpassen", draw: (color, specs) => bagPackedWide(color, specs) },
  bagSet: { label: () => "Tasche und Yogagurt in derselben Farbe", draw: (color, specs) => bagSetWide(color, specs) },
  bagSize: { label: (specs) => `Die Tasche von der Seite, ${decimal(specs.dimensions[0])} × ${decimal(specs.dimensions[2])} cm`, draw: (color, specs) => widePhoto(propSideView(color, specs, 150, 128, 220, 80)) },
  bagFolded: { label: () => "Die Tasche klein zusammengefaltet", draw: (color) => bagFoldedWide(color) },
  blockHeights: { label: () => "Ein Yogablock flach, auf der Seite und hochkant: 7,5, 12 und 22 cm hoch", draw: (color, specs) => blockHeightsWide(color, specs) },
  cork: { label: () => "Kork aus der Nähe", draw: (color) => corkWide(color) },
  strapRings: { label: () => "Das Gurtende durch zwei Metall-D-Ringe gezogen", draw: (color) => strapRingsWide(color) },
  // Blanket, towel and eye pillow
  propCovered: { label: () => "Figur in Rückenlage, mit der Decke zugedeckt", draw: (color, specs) => propSceneSvg(color, specs, "covered", true) },
  propBlanketSeat: { label: () => "Figur im Schneidersitz auf der gefalteten Decke", draw: (color, specs) => propSceneSvg(color, specs, "blanketSeat", true) },
  propEyes: { label: () => "Figur in Rückenlage, das Augenkissen auf den Augen", draw: (color, specs) => propSceneSvg(color, specs, "eyes", true) },
  towelDog: { label: () => "Figur im herabschauenden Hund auf dem Handtuch über der Matte", draw: (color) => wideScene(color, "dog", "#e4ded5", "#b49a7e") },
  towelUnderside: { label: () => "Handtuch mit umgeschlagener Ecke: die Unterseite mit Silikon-Noppen", draw: (color) => towelUndersideWide(color) },
  towelTravel: { label: () => "Das aufgerollte Handtuch neben einer Tasche", draw: (color) => towelTravelWide(color) },
  eyeFilling: { label: (specs) => `Das Augenkissen geöffnet, Füllung aus ${specs.filling}`, draw: (color, specs) => eyeFillingWide(color, specs) },
  // Covers
  coverSwap: { label: () => "Dasselbe Kissen vorher und mit neuem Bezug in neuer Farbe", draw: (color, specs) => coverSwapWide(color, specs) },
  coverOnlyWide: { label: () => "Nur der Bezug, Innenkissen und Füllung sind nicht dabei", draw: (color, specs) => coverOnlyWide(color, specs) },
  coverEmbroidery: { label: () => "Der gestickte Lotus aus der Nähe", draw: (color) => coverEmbroideryWide(color) },
  coverWash: { label: () => "Bezug und Waschsymbol für 30 °C", draw: (color, specs) => cushionWashWide(color, specs) },
  coverTopView: { label: (specs) => `Das Kissen von oben, ${specs.size} cm`, draw: (color, specs) => cushionTopWide(color, onCushion(specs)) },
  // "Almost Perfect" mats
  flawWide: { label: () => "Matte mit kleinem Schönheitsfehler unter der Lupe", draw: (color, specs) => flawWide(color, specs) },
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
  // Clothing
  garmentFront: { label: "flach ausgelegt", draw: (color, specs) => garmentFrontPicture(color, specs) },
  garmentWarrior: { label: "beim Üben im Krieger", draw: (color, specs) => outfitScene(color, specs, "warrior", "0 0 100 100") },
  garmentFabric: { label: "Stoff aus der Nähe", draw: (color, specs) => garmentFabricPicture(color, specs) },
  garmentTree: { label: "beim Üben im Baum", draw: (color, specs) => outfitScene(color, specs, "tree", "0 0 100 100") },
  garmentMeasure: { label: "mit den Maßen in Größe M", draw: (color, specs) => garmentMeasurePicture(color, specs) },
  garmentFolded: { label: "zusammengelegt", draw: (color) => garmentFoldedPicture(color) },
  // Bolsters, rolls, zabuton and bench
  propFront: { label: "von vorn", draw: (color, specs) => propFrontPicture(color, specs) },
  propInUse: { label: "beim Üben", draw: (color, specs) => propSceneSvg(color, specs, specs.scene) },
  propSize: { label: "Maße von der Seite", draw: (color, specs) => propSizePicture(color, specs) },
  propEndView: { label: "Querschnitt mit Maßen", draw: (color, specs) => propEndPicture(color, specs) },
  zabutonTop: { label: "von oben mit Maßen", draw: (color, specs) => galleryPhoto(zabutonTopView(color, specs, 92, 118, 140, false)) },
  benchSide: { label: "von der Seite mit Maßen", draw: (color, specs) => galleryPhoto(benchSideView(color, specs, 90, 150, 6)) },
  benchFront: { label: "Breite und Höhe", draw: (color, specs) => benchFrontPicture(color, specs) },
  benchPad: { label: "Polster mit Bezug aus Bio-Baumwolle", draw: (color) => benchPadPicture(color) },
  benchWood: { label: "Buchenholz aus der Nähe", draw: () => galleryPhoto(woodGrain(200, 250) + woodLabel(100, 200)) },
  // Bags, cork blocks and straps
  propCarried: { label: "unterwegs", draw: (color, specs) => propSceneSvg(color, specs, specs.scene) },
  bagPacked: { label: "mit Matte, Block und Gurt", draw: (color, specs) => bagPackedPicture(color, specs) },
  bagSize: { label: "Maße von der Seite", draw: (color, specs) => propSizePicture(color, specs) },
  bagFolded: { label: "klein gefaltet", draw: (color) => bagFoldedPicture(color) },
  blockHeights: { label: "drei Höhen eines Blocks", draw: (color, specs) => blockHeightsPicture(color, specs) },
  cork: { label: "Kork aus der Nähe", draw: (color) => corkPicture(color) },
  strapRings: { label: "Metall-D-Ringe", draw: (color) => strapRingsPicture(color) },
  strapLoops: { label: "um eine Matte geschlungen", draw: (color) => strapLoopsPicture(color) },
  // Blanket, towel, eye pillow, spray and stickers
  blanketSeated: { label: "gefaltet als Sitzunterlage", draw: (color, specs) => propSceneSvg(color, specs, "blanketSeat") },
  blanketTop: { label: "ausgebreitet mit Maßen", draw: (color, specs) => blanketTopPicture(color, specs) },
  towelOnMat: { label: "beim Üben auf der Matte", draw: (color) => scenePicture(color, "dog", "#e4ded5", "#b49a7e") },
  towelUnderside: { label: "Unterseite mit Silikon-Noppen", draw: (color) => towelUndersidePicture(color) },
  towelFabric: { label: "Stoff aus recyceltem Polyester", draw: (color) => cushionFabricPicture(color, "Recyceltes Polyester") },
  eyePillowSize: { label: "Maße von oben", draw: (color, specs) => eyePillowSizePicture(color, specs) },
  sprayMist: { label: "beim Einsprühen einer Matte", draw: (color) => sprayMistPicture(color) },
  sprayBottles: { label: "Sprühflasche und Nachfüllflasche", draw: (color) => sprayBottlesPicture(color) },
  sprayIngredients: { label: "Salbei, Kurkuma und Bio-Ethanol", draw: () => sprayIngredientsPicture() },
  stickerFront: { label: "Sticker", draw: (color, specs) => stickerFrontPicture(color, specs) },
  stickerOnMat: { label: "auf einer Matte", draw: (color, specs) => stickerOnMatPicture(color, specs) },
  // Covers, malas and spelt husks
  coverOn: { label: "auf dem Kissen", draw: (color, specs) => cushionFrontPicture(color, onCushion(specs)) },
  coverOnly: { label: "nur der Bezug", draw: (color, specs) => coverOnlyPicture(color, specs) },
  malaClose: { label: "Perlen aus der Nähe", draw: (color, specs) => malaClosePicture(color, specs) },
  malaLength: { label: "ausgelegt, 80 cm lang", draw: (color) => malaLengthPicture(color) },
  huskBag: { label: "Nachfüllbeutel", draw: (color, specs) => huskBagPicture(color, specs) },
  huskClose: { label: "Dinkelspelzen aus der Nähe", draw: () => huskClosePicture() },
  huskRefill: { label: "beim Nachfüllen", draw: (color, specs) => huskRefillPicture(color, specs) },
  // "Almost Perfect" mats
  flaw: { label: "mit kleinem Schönheitsfehler", draw: (color, specs) => flawPicture(color, specs) },
  // Sets and the gift card
  setAll: { label: "alle Teile des Sets", draw: (color, specs) => setAllPicture(color, specs) },
  setPart0: { label: "erstes Teil des Sets", draw: (color, specs) => partPicture(specs.parts[0], color.picks[0]) },
  setPart1: { label: "zweites Teil des Sets", draw: (color, specs) => partPicture(specs.parts[1], color.picks[1]) },
  setPart2: { label: "drittes Teil des Sets", draw: (color, specs) => partPicture(specs.parts[2], color.picks[2]) },
  course: { label: "gratis Onlinekurse", draw: () => coursePicture() },
  giftFront: { label: "die Karte mit ihrem Wert", draw: (color, specs) => giftFrontPicture(color, specs) },
  giftMail: { label: "der Gutschein per E-Mail", draw: (color) => giftMailPicture(color) },
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

// Spelt husks (little grains), kapok (soft tufts), cotton fleece (soft
// layers, the zabuton's) or linseed with lavender (the eye pillow's) as a
// fill pattern: [width, height, tile].
const FILLING_TILES = {
  spelt: [6, 6, '<rect width="6" height="6" fill="#d9c69e"/><ellipse cx="2" cy="2" rx="1.6" ry=".8" fill="#b89a62" transform="rotate(30 2 2)"/><ellipse cx="4.5" cy="4.6" rx="1.4" ry=".7" fill="#c9ad74" transform="rotate(-40 4.5 4.6)"/>'],
  kapok: [10, 10, '<rect width="10" height="10" fill="#f3efe6"/><circle cx="3" cy="3" r="2.6" fill="#fff"/><circle cx="8" cy="7" r="2.2" fill="#e9e3d6"/>'],
  fleece: [12, 8, '<rect width="12" height="8" fill="#f6f2ea"/><path d="M0 4c3-3 6 3 12 0" fill="none" stroke="#e2dacb" stroke-width="1.2"/>'],
  linseed: [8, 8, '<rect width="8" height="8" fill="#8a5a33"/><ellipse cx="2.2" cy="2.4" rx="1.6" ry=".9" fill="#a8743f" transform="rotate(25 2.2 2.4)"/><ellipse cx="5.8" cy="5.8" rx="1.5" ry=".85" fill="#b07a44" transform="rotate(-35 5.8 5.8)"/><circle cx="6" cy="1.8" r=".8" fill="#9a86b8"/>'],
};
function fillingPattern(specs) {
  const id = `filling-${++patternCount}`;
  const kind = /Kapok/.test(specs.filling) ? "kapok" : /vlies/i.test(specs.filling) ? "fleece" : /Leinsaat/.test(specs.filling) ? "linseed" : "spelt";
  const [width, height, tile] = FILLING_TILES[kind];
  return { id, defs: `<defs><pattern id="${id}" width="${width}" height="${height}" patternUnits="userSpaceOnUse">${tile}</pattern></defs>` };
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

// Side view with the height and the width (4 px per cm unless a wide cushion
// needs less), standing on `base`.
function sideView(color, specs, cx, base, perCm = 4) {
  const [length, , height] = specs.dimensions;
  const w = Math.round(length * perCm);
  const h = Math.round(height * perCm);
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
      <rect width="200" height="250" fill="${PHOTO_BG}"/>${sideView(color, specs, 100, 150, Math.min(4, 140 / specs.dimensions[0]))}
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

// The fabric up close (cotton unless a label says otherwise).
function cushionFabricPicture(color, label = "Bio-Baumwolle (kbA)") {
  const id = `weave-${++patternCount}`;
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <defs><pattern id="${id}" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 1.5H6M0 4.5H6" stroke="rgba(255,255,255,.18)" stroke-width="1.4"/><path d="M1.5 0V6M4.5 0V6" stroke="rgba(0,0,0,.1)"/></pattern></defs>
      <rect width="200" height="250" fill="${color.hex}"/>
      <rect width="200" height="250" fill="url(#${id})"/>
      <rect x="40" y="196" width="120" height="26" rx="13" fill="rgba(255,255,255,.85)"/>
      <text x="100" y="213" text-anchor="middle" ${LABEL_STYLE}>${label}</text>
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

// ---------- Drawn clothing pictures ----------
// The garments reuse their card drawings from shared.js (a 180×180 box).
// `SHAPE_BOX` is the area a drawing covers there (garments, and the props
// further down), so any of them can be fitted into a picture; worn, a
// garment colours its part of a stick figure. Worn garments sit on a light
// wooden figure, so dark colours stand out.
const MANNEQUIN = "#b39373";
const GOLD = "#ac8700";
const isLight = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 > 180;
};
const SHAPE_BOX = {
  leggings: [56, 30, 124, 160], pants: [60, 34, 120, 142], culotte: [44, 38, 138, 124],
  top: [56, 34, 124, 136], tee: [44, 34, 136, 138], tankTop: [60, 36, 120, 140], tankTee: [52, 36, 128, 138],
  bralette: [58, 38, 122, 104], wrapTop: [40, 34, 140, 142], sweater: [26, 30, 154, 154], overall: [60, 26, 120, 144],
  roll: [24, 64, 156, 132], bolster: [20, 74, 160, 130], bolsterS: [34, 80, 146, 130], neckRoll: [42, 84, 138, 125],
  zabuton: [22, 80, 158, 118], zabutonThick: [22, 68, 158, 118], bench: [24, 66, 156, 143],
  bag: [22, 46, 158, 118], sack: [30, 52, 160, 129], block: [38, 48, 140, 150], singleBlock: [56, 50, 124, 146], strap: [33, 60, 147, 134],
  blanket: [28, 56, 152, 142], towel: [32, 56, 148, 141], eyePillow: [28, 70, 152, 122], spray: [58, 38, 114, 156], sprayRefill: [58, 38, 122, 158],
  sticker: [42, 42, 138, 138],
  lotusCover10: [24, 70, 156, 135], lotusCover15: [24, 68, 156, 137], lotusCover20: [24, 67, 156, 138], plainCover: [24, 68, 156, 137],
  zafuCover: [24, 68, 156, 137], crescentCover: [22, 76, 158, 132], zabutonCover: [18, 70, 162, 125], rollCover: [30, 56, 150, 128],
  mala: [41, 29, 139, 160], husks: [44, 44, 136, 152],
  lotusCushion10: [28, 74, 152, 136], lotusCushion15: [28, 66, 152, 136], lotusCushion20: [28, 58, 152, 136], plainCushion: [28, 66, 152, 136],
  zafu: [34, 54, 146, 136], crescent: [24, 50, 156, 133],
};

// Fits the drawing into a box around (cx, cy); `point` maps a spot on it
// (in card coordinates) into the picture.
function shapePlacement(specs, cx, cy, maxWidth, maxHeight) {
  const [x1, y1, x2, y2] = SHAPE_BOX[specs.shape];
  const scale = Math.min(maxWidth / (x2 - x1), maxHeight / (y2 - y1), 2);
  const point = (x, y) => [cx + (x - (x1 + x2) / 2) * scale, cy + (y - (y1 + y2) / 2) * scale].map((v) => Math.round(v * 10) / 10);
  const [left, top] = point(0, 0);
  return { point, draw: (hex) => `<g transform="translate(${left} ${top}) scale(${Math.round(scale * 1000) / 1000})">${shapes[specs.shape](hex)}</g>` };
}

// Where each size chart value is measured: a line in card coordinates,
// optionally with the spot (0–1) for its number.
const MEASURES = {
  leggings: { Taille: [62, 35, 118, 35], Innenbeinlänge: [95, 70, 106, 156] },
  pants: { Taille: [64, 38, 116, 38], Oberschenkel: [91, 76, 117, 76], Innenbeinlänge: [94, 72, 101, 138, 0.6] },
  culotte: { Taille: [62, 42, 118, 42], Hüfte: [61, 56, 121, 56], Oberschenkel: [91, 84, 127, 84, 0.6], Innenbeinlänge: [94, 78, 99, 120, 0.65] },
  top: { Brustweite: [66, 68, 114, 68], Saumweite: [66, 130, 114, 130], Länge: [104, 37, 104, 135] },
  tee: { Brustweite: [66, 74, 114, 74], Saumweite: [66, 132, 114, 132], Länge: [104, 37, 104, 137] },
  tankTop: { Brustweite: [60, 68, 120, 68], Saumweite: [60, 134, 120, 134], Länge: [106, 38, 106, 139] },
  tankTee: { Brustweite: [52, 70, 128, 70], Saumweite: [52, 132, 128, 132], Länge: [110, 38, 110, 137] },
  bralette: { Brustweite: [58, 80, 122, 80], Saumweite: [60, 98, 120, 98], Länge: [108, 42, 108, 100, 0.3] },
  wrapTop: { Brustweite: [66, 78, 114, 78], Saumweite: [66, 136, 114, 136], Länge: [106, 38, 106, 141], Armlänge: [116, 46, 134, 102] },
  sweater: { Brustweite: [54, 82, 126, 82], Saumweite: [54, 148, 126, 148], Länge: [110, 36, 110, 153] },
  overall: { Brustweite: [70, 62, 110, 62], Oberschenkel: [91, 96, 116, 96], Beinlänge: [94, 90, 100, 140, 0.65], Länge: [104, 31, 104, 84, 0.25] },
};

// Gold measuring lines with numbered dots, like the original's size charts.
function measureMarks(specs, place) {
  const lines = specs.chart.columns.map((column, i) => {
    const [x1, y1, x2, y2, at = 0.5] = MEASURES[specs.shape][column];
    const [ax, ay] = place.point(x1, y1);
    const [bx, by] = place.point(x2, y2);
    const length = Math.hypot(bx - ax, by - ay);
    const [nx, ny] = [((ay - by) / length) * 4, ((bx - ax) / length) * 4];
    const tick = (x, y) => `M${Math.round((x - nx) * 10) / 10} ${Math.round((y - ny) * 10) / 10}l${Math.round(nx * 20) / 10} ${Math.round(ny * 20) / 10}`;
    const d = `M${ax} ${ay}L${bx} ${by}${tick(ax, ay)}${tick(bx, by)}`;
    const [dx, dy] = [ax + (bx - ax) * at, ay + (by - ay) * at].map((v) => Math.round(v * 10) / 10);
    return { d, dot: `
      <circle cx="${dx}" cy="${dy}" r="6.5" fill="${GOLD}" stroke="#fff"/>
      <text x="${dx}" y="${dy + 3}" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fff" font-family="Hanken Grotesk, sans-serif">${i + 1}</text>` };
  });
  return `
      <g fill="none" stroke-linecap="round">${lines.map(({ d }) => `<path d="${d}" stroke="rgba(255, 255, 255, .8)" stroke-width="3.5"/>`).join("")}${lines.map(({ d }) => `<path d="${d}" stroke="${GOLD}" stroke-width="1.4"/>`).join("")}</g>${lines.map(({ dot }) => dot).join("")}`;
}

// The poses of the drawn scenes, split into legs, torso and arms.
const outfitPoses = {
  warrior: { head: [50, 30], legs: "M30 84L50 60L66 66L70 84", torso: "M50 60V38", arms: "M28 40H72" },
  tree: { head: [50, 33], legs: "M50 84V60L40 66L49 72", torso: "M50 60V41", arms: "M50 41L42 31L50 19L58 31Z" },
  dog: { head: [36, 73], legs: "M54 46L72 84", torso: "M34 66L54 46", arms: "M24 84L34 66" },
  seated: { head: [50, 44], legs: "M32 84Q50 74 68 84", torso: "M50 78V52", arms: "M50 56L38 70L34 80M50 56L62 70L66 80", prop: '<ellipse cx="50" cy="86" rx="18" ry="5" fill="#6f6355"/>' },
};
const GARMENT_PARTS = {
  leggings: ["legs"], pants: ["legs"], culotte: ["legs"],
  top: ["torso"], tankTop: ["torso"], tankTee: ["torso"], bralette: ["torso"],
  tee: ["torso", "arms"], sweater: ["torso", "arms"], wrapTop: ["torso", "arms"],
  overall: ["torso", "legs"],
};

// A yoga scene whose figure wears the garment; light colours get a darker room.
function outfitScene(color, specs, poseName, viewBox) {
  const pose = outfitPoses[poseName];
  const parts = GARMENT_PARTS[specs.shape];
  const width = (part) => ((part === "legs" && specs.shape === "culotte") || (part === "torso" && specs.shape === "sweater") ? 7 : 5);
  const line = (d, stroke, strokeWidth) => `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const light = isLight(color.hex);
  return `
      <svg viewBox="${viewBox}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect x="-100" y="-100" width="300" height="172" fill="${light ? "#d3c9bb" : "#ece6dc"}"/>
        <rect x="-100" y="72" width="300" height="128" fill="${light ? "#a8957d" : "#c9b9a3"}"/>
        <path d="M10 80H90L96 90H4Z" fill="#8b8378"/>
        ${pose.prop || ""}
        ${["legs", "torso", "arms"].filter((part) => !parts.includes(part)).map((part) => line(pose[part], MANNEQUIN, 5)).join("")}
        ${parts.map((part) => line(pose[part], "rgba(0, 0, 0, .3)", width(part) + 1.4)).join("")}
        ${parts.map((part) => line(pose[part], color.hex, width(part))).join("")}
        <circle cx="${pose.head[0]}" cy="${pose.head[1]}" r="5" fill="${MANNEQUIN}"/>
      </svg>`;
}

// Jersey up close: rows of little stitches.
function knitPattern() {
  const id = `knit-${++patternCount}`;
  return { id, defs: `<defs><pattern id="${id}" width="6" height="5" patternUnits="userSpaceOnUse"><path d="M0 0L1.5 4.5L3 0M3 0L4.5 4.5L6 0" fill="none" stroke="rgba(0, 0, 0, .14)" stroke-width=".8"/><path d="M0 1L1.5 5.5L3 1M3 1L4.5 5.5L6 1" fill="none" stroke="rgba(255, 255, 255, .16)" stroke-width=".8"/></pattern></defs>` };
}

// The fabric's composition on a label, one fibre per line.
function fabricLabel(specs, cx, top) {
  const lines = (specs.fabric || "Bio-Baumwolle (kbA)").split(", ");
  return `
      <rect x="${cx - 80}" y="${top}" width="160" height="${lines.length * 14 + 12}" rx="13" fill="rgba(255, 255, 255, .88)"/>
      ${lines.map((text, i) => `<text x="${cx}" y="${top + 20 + i * 14}" text-anchor="middle" ${LABEL_STYLE}>${text}</text>`).join("")}`;
}

// Size M's measures next to their numbers.
function measureLegend(specs, x, top, anchor) {
  const sizeM = specs.chart.rows.find(([size]) => size === "M");
  return `
      <text x="${x}" y="${top}" text-anchor="${anchor}" ${LABEL_STYLE} font-weight="700">Größe M</text>
      ${specs.chart.columns.map((column, i) => `<text x="${x}" y="${top + 15 + i * 14}" text-anchor="${anchor}" ${LABEL_STYLE}>(${i + 1}) ${column}: ${sizeM[i + 2]} cm</text>`).join("")}`;
}

function garmentFrontPicture(color, specs) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      ${shapePlacement(specs, 100, 125, 170, 200).draw(color.hex)}
    </svg>`;
}

function garmentFabricPicture(color, specs) {
  const knit = knitPattern();
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      ${knit.defs}
      <rect width="200" height="250" fill="${color.hex}"/>
      <rect width="200" height="250" fill="url(#${knit.id})"/>
      ${fabricLabel(specs, 100, 186)}
    </svg>`;
}

// The legend takes the bottom, the garment the space above it.
function garmentMeasurePicture(color, specs) {
  const top = 250 - specs.chart.columns.length * 14 - 22;
  const place = shapePlacement(specs, 100, (top - 4) / 2, 150, top - 32);
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      ${place.draw(color.hex)}${measureMarks(specs, place)}
      ${measureLegend(specs, 100, top, "middle")}
    </svg>`;
}

// Two folded pieces on top of each other.
function garmentFoldedPicture(color) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <ellipse cx="100" cy="176" rx="74" ry="6" fill="rgba(0, 0, 0, .08)"/>
      <rect x="34" y="128" width="132" height="46" rx="8" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <rect x="34" y="150" width="132" height="24" rx="8" fill="rgba(0, 0, 0, .06)"/>
      <rect x="40" y="86" width="120" height="44" rx="8" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <path d="M40 102H160M100 86V130" stroke="rgba(0, 0, 0, .08)"/>
    </svg>`;
}

// Wide pictures for the info rows (330×202, like the mats').
function fabricWidePicture(color, specs) {
  const knit = knitPattern();
  const lines = (specs.fabric || "Bio-Baumwolle (kbA)").split(", ").length;
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      ${knit.defs}
      <rect width="330" height="202" fill="${color.hex}"/>
      <rect width="330" height="202" fill="url(#${knit.id})"/>
      ${fabricLabel(specs, 165, 101 - (lines * 14 + 12) / 2)}
    </svg>`;
}

function measureWidePicture(color, specs) {
  const place = shapePlacement(specs, 98, 101, 160, 172);
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      ${place.draw(color.hex)}${measureMarks(specs, place)}
      ${measureLegend(specs, 186, 101 - specs.chart.columns.length * 7, "start")}
    </svg>`;
}

function pairWidePicture(color, specs) {
  const partner = specs.pair;
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      ${shapePlacement(specs, 102, 90, 116, 140).draw(color.hex)}
      ${shapePlacement(partner, 228, 90, 116, 140).draw(partner.hex || color.hex)}
      <text x="165" y="186" text-anchor="middle" ${LABEL_STYLE}>${partner.label}</text>
    </svg>`;
}

// A spool of thread in the garment's colour and a needle.
function originWidePicture(color, specs) {
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      <rect x="120" y="40" width="76" height="12" rx="3" fill="#c9a77e"/>
      <rect x="120" y="128" width="76" height="12" rx="3" fill="#c9a77e"/>
      <rect x="128" y="52" width="60" height="76" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <path d="M128 62H188M128 72H188M128 82H188M128 92H188M128 102H188M128 112H188M128 122H188" stroke="rgba(0, 0, 0, .1)"/>
      <path d="M188 88C222 92 226 128 250 134" fill="none" stroke="${color.hex}" stroke-width="2"/>
      <path d="M188 88C222 92 226 128 250 134" fill="none" stroke="rgba(0, 0, 0, .15)" stroke-width=".6"/>
      <path d="M236 58L274 142" stroke="#8c8778" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="239" cy="65" rx="1.2" ry="3.4" transform="rotate(-24 239 65)" fill="${PHOTO_BG}"/>
      <text x="165" y="176" text-anchor="middle" ${LABEL_STYLE}>Genäht ${specs.madeIn}</text>
    </svg>`;
}

// The garment next to a wash tub at 30 °C.
function garmentWashWide(color, specs) {
  return `
    <svg viewBox="0 0 330 202" aria-hidden="true">
      <rect width="330" height="202" fill="${PHOTO_BG}"/>
      ${shapePlacement(specs, 106, 90, 150, 140).draw(color.hex)}
      <path d="M200 66h86l-10 74h-66z" fill="none" stroke="#5f5c52" stroke-width="2"/>
      <path d="M204 84c12 6 22-6 34 0s22 6 34 0" fill="none" stroke="#5f5c52" stroke-width="1.5"/>
      <text x="243" y="122" text-anchor="middle" font-size="16" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">30°</text>
      <text x="165" y="186" text-anchor="middle" ${LABEL_STYLE}>Vorbehandelt, waschbar bei 30 °C</text>
    </svg>`;
}

// The drawing in the size chart: the garment in a neutral tone, so the
// numbers stay readable whatever colour is picked.
function sizeChartDrawing(specs) {
  const place = shapePlacement(specs, 180, 140, 230, 250);
  return `
        <svg viewBox="0 0 360 280" aria-hidden="true">
          ${place.draw("#ebe7df")}${measureMarks(specs, place)}
        </svg>`;
}

// ---------- Drawn pictures for bolsters, rolls, zabuton and bench ----------
// The front view is the card drawing; scenes, sizes and cross-sections are
// drawn to scale from `specs.dimensions` (length, width, height in cm).
const r1 = (value) => Math.round(value * 10) / 10;
const BEECH = "#dcc09a";
const BEECH_DARK = "#c9a77e";
const OTHER_PROP = "#d8d3cb"; // the product it is compared with
const SCENE_CM = 0.45; // scene units (of 100) per cm
// Picture sections of the scene: 4:5 for the gallery (higher up for standing
// figures), and for the info rows one close to the floor (lying poses) or
// one with room for a sitting or standing figure.
const SCENE_VIEWS = { gallery: "8 34 84 105", galleryStanding: "8 18 84 105", lying: "-2 46 104 64", upright: "-24 24 148 91" };
const LYING_SCENES = ["knees", "fish", "child", "neck", "covered", "eyes"];
const STANDING_SCENES = ["carry", "strapCarry"];
const MEASURE_LINE = 'stroke="#5f5c52" fill="none"';

// The prop seen from its end – round for the rolls – standing on `bottom`.
function propEnd(fill, specs, cx, bottom, perCm) {
  const [, width, height] = specs.dimensions;
  const w = r1(width * perCm);
  const h = r1(height * perCm);
  return specs.round
    ? `<circle cx="${cx}" cy="${r1(bottom - h / 2)}" r="${r1(h / 2)}" fill="${fill}" stroke="${GARMENT_LINE}"/>`
    : `<rect x="${r1(cx - w / 2)}" y="${r1(bottom - h)}" width="${w}" height="${h}" rx="${r1(Math.min(w, h) * 0.35)}" fill="${fill}" stroke="${GARMENT_LINE}"/>`;
}

// Dimension lines: one below a box (with its label), one to its right.
const widthMark = (x, right, y, label) => `
      <path d="M${x} ${y}H${right}M${x} ${y - 4}V${y + 4}M${right} ${y - 4}V${y + 4}" ${MEASURE_LINE}/>
      <text x="${r1((x + right) / 2)}" y="${y + 18}" text-anchor="middle" ${LABEL_STYLE}>${label}</text>`;
const heightMark = (x, top, bottom, label) => `
      <path d="M${x} ${top}V${bottom}M${x - 4} ${top}H${x + 4}M${x - 4} ${bottom}H${x + 4}" ${MEASURE_LINE}/>
      <text x="${x + 2}" y="${top - 8}" text-anchor="middle" ${LABEL_STYLE}>${label}</text>`;

const limb = (d, tone = MANNEQUIN) => `<path d="${d}" fill="none" stroke="${tone}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
const headAt = (x, y, tone = MANNEQUIN) => `<circle cx="${x}" cy="${y}" r="5" fill="${tone}"/>`;
// Next to cork, which has nearly the wooden figure's colour, a dark figure.
const DARK_FIGURE = "#4a4038";
const SCENE_MAT = '<path d="M10 80H90L96 90H4Z" fill="#8b8378"/>';

// Poses with a prop, in the 100×100 scene of the mats' pictures.
const propScenes = {
  // On the back, the knees resting on the bolster or roll.
  knees: (color, specs) => {
    const top = r1(84 - specs.dimensions[2] * SCENE_CM);
    return SCENE_MAT + propEnd(color.hex, specs, 58, 84, SCENE_CM) + limb(`M26 82H46L58 ${r1(top - 2.5)}L72 84`) + limb("M29 82L43 86") + headAt(20, 79);
  },
  // A supported back bend: the prop across, under the shoulder blades.
  fish: (color, specs) => {
    const top = r1(84 - specs.dimensions[2] * SCENE_CM);
    return SCENE_MAT + propEnd(color.hex, specs, 36, 84, SCENE_CM) + limb(`M27 82L36 ${r1(top - 2.5)}L56 82L86 83`) + limb(`M37 ${r1(top - 1)}L30 87`) + headAt(23, 81);
  },
  // Supported child's pose: lying forward along the bolster.
  child: (color, specs) => {
    const w = r1(specs.dimensions[0] * SCENE_CM);
    const h = r1(specs.dimensions[2] * SCENE_CM);
    const top = r1(84 - h);
    return `${SCENE_MAT}<rect x="38" y="${top}" width="${w}" height="${h}" rx="${r1(h * 0.4)}" fill="${color.hex}" stroke="${GARMENT_LINE}"/>`
      + limb(`M18 84H36L25 ${r1(top - 1)}L56 ${r1(top - 2.5)}`) + limb(`M55 ${r1(top - 2)}L60 84`) + headAt(63, r1(top - 5));
  },
  // Lying flat, the small roll under the neck.
  neck: (color, specs) => {
    const top = r1(84 - specs.dimensions[2] * SCENE_CM);
    return SCENE_MAT + propEnd(color.hex, specs, 24, 84, SCENE_CM) + limb(`M20 80L24 ${r1(top - 2.5)}L29 82H52L84 83`) + limb("M31 82L45 86") + headAt(16, 80);
  },
  // Cross-legged on a cushion on the zabuton; its front shows the thickness.
  seated: (color, specs) => {
    const front = `M6 92H94V${r1(92 + specs.dimensions[2] * 0.6)}H6Z`;
    return `
        <path d="M12 84H88L94 92H6Z" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
        <path d="${front}" fill="${color.hex}"/><path d="${front}" fill="rgba(0, 0, 0, .15)"/>
        <ellipse cx="50" cy="86" rx="18" ry="5" fill="#d9cfc0"/>`
      + limb("M32 84Q50 74 68 84") + limb("M50 78V52") + limb("M50 56L38 70L34 80M50 56L62 70L66 80") + headAt(50, 44);
  },
  // Kneeling on the bench, the shins underneath it.
  kneel: (color, specs) => {
    const seat = r1(85 - specs.dimensions[2] * SCENE_CM);
    return SCENE_MAT + limb("M66 84L34 85") + `
        <path d="M44 ${r1(seat + 2)}H53L54 85H43Z" fill="${BEECH_DARK}"/>
        <g transform="rotate(4 48.5 ${seat})">
          <rect x="43" y="${seat}" width="11" height="2.2" rx=".6" fill="${BEECH}"/>
          <rect x="43.5" y="${r1(seat - 2.2)}" width="10" height="2.4" rx="1.2" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
        </g>`
      + limb(`M48 ${r1(seat - 4)}L66 84`) + limb(`M48 ${r1(seat - 4)}L49 54`) + limb("M49 57L57 68L63 78") + headAt(49, 46);
  },
};

// Bags, cork blocks and straps in use. A standing figure faces right; the
// mat rolled up for carrying is a neutral green.
const MAT_ROLL = "#7d8a7f";
const standingFigure = () => limb("M44 84L48 62L54 84") + limb("M48 62V40") + limb("M48 44L45 62") + limb("M48 44L55 55") + headAt(48, 32);
const colorLine = (d, hex, width = 2) => `<path d="${d}" fill="none" stroke="rgba(0, 0, 0, .3)" stroke-width="${width + 0.8}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${hex}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
Object.assign(propScenes, {
  // The bag at the hip on a strap over the shoulder; the slim sack (NANDI)
  // diagonally across the back.
  carry: (color, specs) => (specs.shape === "sack"
    ? `<g transform="rotate(-76 40 57)"><rect x="20" y="52.5" width="40" height="9" rx="4.5" fill="${color.hex}" stroke="${GARMENT_LINE}"/></g>${standingFigure()}${colorLine("M44 38L50 42L57 52", color.hex, 1.4)}`
    : `${standingFigure()}${colorLine("M54 59L47 41L78 59", color.hex, 1.6)}<rect x="50" y="57" width="31" height="11" rx="5.5" fill="${color.hex}" stroke="${GARMENT_LINE}"/>`),
  // Sitting cross-legged on a cork block, the legs in front of it.
  blockSeat: (color) => `${SCENE_MAT}<rect x="38" y="79" width="24" height="10" rx="1.5" fill="${color.hex}" stroke="${GARMENT_LINE}"/>`
    + limb("M30 90Q50 82 70 90", DARK_FIGURE) + limb("M50 78V53", DARK_FIGURE) + limb("M50 57L38 72L33 86M50 57L62 72L67 86", DARK_FIGURE) + headAt(50, 45, DARK_FIGURE),
  // A lunge with one hand on the block.
  blockLunge: (color) => `${SCENE_MAT}<rect x="66" y="74" width="10" height="10" rx="1" fill="${color.hex}" stroke="${GARMENT_LINE}"/>`
    + limb("M18 84L42 66L60 64L62 84", DARK_FIGURE) + limb("M42 66L58 55", DARK_FIGURE) + limb("M58 55L70 72", DARK_FIGURE) + headAt(63, 49, DARK_FIGURE),
  // A seated forward bend, the strap around the feet.
  strapStretch: (color) => SCENE_MAT + limb("M30 83H72") + limb("M30 82L47 63") + limb("M47 63L61 71") + headAt(52, 56) + colorLine("M61 71L76 78V86L61 72", color.hex, 1.8),
  // The rolled mat across the back, the strap over the shoulder.
  strapCarry: (color) => `<g transform="rotate(-70 40 57)"><rect x="18" y="52" width="44" height="10" rx="5" fill="${MAT_ROLL}"/></g>`
    + standingFigure() + colorLine("M34 72L52 42L45 39", color.hex, 1.4),
  // Lying under the blanket, only the head showing.
  covered: (color) => SCENE_MAT + limb("M21 81H30") + headAt(16, 79)
    + `<path d="M25 85V79Q26 74 34 74H74Q83 74 85 81V85Z" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
       <path d="M85 77v8M88 78v7" stroke="${color.hex}" stroke-width="1.2" stroke-linecap="round"/>`,
  // Sitting cross-legged on the folded blanket.
  blanketSeat: (color) => `${SCENE_MAT}<rect x="36" y="79" width="28" height="10" rx="2" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
       <path d="M36 82.5h28M36 86h28" stroke="rgba(0, 0, 0, .12)"/>`
    + limb("M30 90Q50 82 70 90") + limb("M50 78V53") + limb("M50 57L38 72L33 86M50 57L62 72L67 86") + headAt(50, 45),
  // Lying flat, the eye pillow over the eyes.
  eyes: (color) => SCENE_MAT + limb("M21 82H52L84 83") + limb("M31 82L45 86") + headAt(16, 80)
    + `<rect x="10" y="74.5" width="11" height="4.5" rx="2.25" fill="${color.hex}" stroke="${GARMENT_LINE}" transform="rotate(-12 15.5 76.75)"/>`,
});

// A scene in a room (light colours get a darker one), for the gallery or,
// `wide`, for an info row.
function propSceneSvg(color, specs, kind, wide) {
  const light = isLight(color.hex);
  const view = wide
    ? SCENE_VIEWS[LYING_SCENES.includes(kind) ? "lying" : "upright"]
    : SCENE_VIEWS[STANDING_SCENES.includes(kind) ? "galleryStanding" : "gallery"];
  return `
      <svg viewBox="${view}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect x="-100" y="-100" width="300" height="172" fill="${light ? "#d3c9bb" : "#ece6dc"}"/>
        <rect x="-100" y="72" width="300" height="128" fill="${light ? "#a8957d" : "#c9b9a3"}"/>
        ${propScenes[kind](color, specs)}
      </svg>`;
}

// Side view with length and height (Ø for the rolls), standing on `base`.
function propSideView(color, specs, cx, base, maxWidth, maxHeight) {
  const [length, , height] = specs.dimensions;
  const perCm = Math.min(maxWidth / length, maxHeight / height);
  const w = r1(length * perCm);
  const h = r1(height * perCm);
  const x = r1(cx - w / 2);
  const top = r1(base - h);
  return `
      <rect x="${x}" y="${top}" width="${w}" height="${h}" rx="${r1(specs.round ? h / 2 : Math.min(h * 0.35, 12))}" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      ${heightMark(r1(x + w + 10), top, base, `${specs.round ? "Ø " : ""}${decimal(height)} cm`)}
      ${widthMark(x, r1(x + w), base + 16, `${decimal(length)} cm`)}`;
}

const galleryPhoto = (content, defs = "") => `
    <svg viewBox="0 0 200 250" aria-hidden="true">${defs}
      <rect width="200" height="250" fill="${PHOTO_BG}"/>${content}
    </svg>`;
const widePhoto = (content, defs = "") => `
    <svg viewBox="0 0 330 202" aria-hidden="true">${defs}
      <rect width="330" height="202" fill="${PHOTO_BG}"/>${content}
    </svg>`;

const propFrontPicture = (color, specs) => galleryPhoto(shapePlacement(specs, 100, 125, 176, 170).draw(color.hex));
const propSizePicture = (color, specs) => galleryPhoto(propSideView(color, specs, 90, 150, 130, 90));

// The end with its width and height; a roll shows its diameter and the
// gathered fabric of the drawstring.
function propEndPicture(color, specs) {
  const [, width, height] = specs.dimensions;
  const perCm = 110 / Math.max(width, height);
  const w = r1(width * perCm);
  const h = r1(height * perCm);
  const base = 150;
  const x = r1(100 - w / 2);
  const right = r1(100 + w / 2);
  const middle = r1(base - h / 2);
  const marks = specs.round
    ? `${Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      return `<path d="M${r1(100 + 6 * Math.cos(angle))} ${r1(middle + 6 * Math.sin(angle))}L${r1(100 + h * 0.3 * Math.cos(angle))} ${r1(middle + h * 0.3 * Math.sin(angle))}" stroke="rgba(0, 0, 0, .12)"/>`;
    }).join("")}<circle cx="100" cy="${middle}" r="5" fill="rgba(0, 0, 0, .18)"/>
      ${widthMark(x, right, base + 16, `Ø ${decimal(height)} cm`)}`
    : `${heightMark(r1(right + 10), r1(base - h), base, `${decimal(height)} cm`)}${widthMark(x, right, base + 16, `${decimal(width)} cm`)}`;
  return galleryPhoto(propEnd(color.hex, specs, 100, base, perCm) + marks);
}

// From above, the zabuton's length and width; `withCushion` adds a round
// meditation cushion (Ø 31 cm) on it.
function zabutonTopView(color, specs, cx, cy, maxSize, withCushion) {
  const [length, width] = specs.dimensions;
  const perCm = maxSize / Math.max(length, width);
  const w = r1(length * perCm);
  const h = r1(width * perCm);
  const x = r1(cx - w / 2);
  const y = r1(cy - h / 2);
  return `
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <rect x="${r1(x + 6)}" y="${r1(y + 6)}" width="${r1(w - 12)}" height="${r1(h - 12)}" rx="5" fill="rgba(255, 255, 255, .1)"/>${withCushion ? `
      <circle cx="${cx}" cy="${r1(cy - h * 0.12)}" r="${r1(15.5 * perCm)}" fill="#d9cfc0" stroke="${GARMENT_LINE}"/>` : ""}
      ${heightMark(r1(x + w + 10), y, r1(y + h), `${width} cm`)}
      ${widthMark(x, r1(x + w), r1(y + h + 14), `${length} cm`)}`;
}

// The bench from the side: the seat (a little lower at the front) on its
// leg, the cushion on top; the height includes the cushion.
function benchSideView(color, specs, cx, base, perCm, angle = 4) {
  const [depth, , height] = specs.dimensions;
  const d = r1(depth * perCm);
  const pad = r1(2.4 * perCm);
  const seat = r1(2.4 * perCm);
  const x = r1(cx - d / 2);
  const top = r1(base - height * perCm);
  return `
      <path d="M${r1(x + d * 0.1)} ${r1(top + pad + seat)}H${r1(x + d * 0.9)}L${r1(x + d * 0.96)} ${base}H${r1(x + d * 0.04)}Z" fill="${BEECH_DARK}"/>
      <g transform="rotate(${angle} ${cx} ${r1(top + pad)})">
        <rect x="${x}" y="${r1(top + pad)}" width="${d}" height="${seat}" rx="2" fill="${BEECH}"/>
        <rect x="${r1(x + 2)}" y="${top}" width="${r1(d - 4)}" height="${pad}" rx="${r1(pad / 2)}" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      </g>
      ${heightMark(r1(x + d + 16), top, base, `${decimal(height)} cm`)}
      ${widthMark(x, r1(x + d), base + 16, `${decimal(depth)} cm`)}`;
}

// The bench from the front: seat and cushion across both legs.
function benchFrontPicture(color, specs) {
  const [, width, height] = specs.dimensions;
  const perCm = 2.8;
  const w = r1(width * perCm);
  const x = r1(100 - w / 2);
  const right = r1(x + w);
  const base = 150;
  const top = r1(base - height * perCm);
  const pad = r1(2.4 * perCm);
  const seat = r1(2.4 * perCm);
  const leg = r1(3 * perCm);
  return galleryPhoto(`
      <path d="M${x} ${r1(top + pad)}h${leg}V${base}h-${leg}zM${r1(right - leg)} ${r1(top + pad)}h${leg}V${base}h-${leg}z" fill="${BEECH_DARK}"/>
      <rect x="${x}" y="${r1(top + pad)}" width="${w}" height="${seat}" rx="2" fill="${BEECH}"/>
      <rect x="${r1(x + 4)}" y="${top}" width="${r1(w - 8)}" height="${pad}" rx="${r1(pad / 2)}" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      ${heightMark(r1(right + 10), top, base, `${decimal(height)} cm`)}
      ${widthMark(x, right, base + 16, `${width} cm`)}`);
}

// The cushion of the bench cut open: foam in a cotton cover.
function benchPad(color, x, y, w, h) {
  const id = `foam-${++patternCount}`;
  return {
    defs: `<defs><pattern id="${id}" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#efe3bf"/><circle cx="2" cy="3" r="1" fill="#e2d3a8"/><circle cx="6" cy="6.5" r=".8" fill="#e2d3a8"/></pattern></defs>`,
    content: `
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r1(h / 2)}" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <rect x="${x + 8}" y="${y + 7}" width="${w - 16}" height="${h - 14}" rx="${r1((h - 14) / 2)}" fill="url(#${id})"/>`,
  };
}

function benchPadPicture(color) {
  const pad = benchPad(color, 30, 90, 140, 56);
  return galleryPhoto(`${pad.content}
      <text x="100" y="184" text-anchor="middle" ${LABEL_STYLE}>Schaumstoff im Bezug</text>
      <text x="100" y="199" text-anchor="middle" ${LABEL_STYLE}>aus Bio-Baumwolle</text>`, pad.defs);
}

// Beech up close: gently waving grain and the small flecks typical for it.
function woodGrain(width, height) {
  const lines = Array.from({ length: Math.ceil(height / 12) }, (_, i) => {
    const y = 5 + i * 12;
    return `<path d="M0 ${y}C${r1(width * 0.3)} ${y - 5} ${r1(width * 0.6)} ${y + 6} ${width} ${y - 2}" stroke="rgba(120, 80, 40, .2)" fill="none"/>`;
  }).join("");
  const flecks = Array.from({ length: Math.round((width * height) / 900) }, (_, i) => {
    const x = (i * 53) % width;
    const y = (i * 29) % height;
    return `<path d="M${x} ${y}h4" stroke="rgba(150, 90, 40, .28)" stroke-width="1.4" stroke-linecap="round"/>`;
  }).join("");
  return `<rect width="${width}" height="${height}" fill="${BEECH}"/>${lines}${flecks}`;
}

const woodLabel = (cx, y) => `
      <rect x="${cx - 80}" y="${y}" width="160" height="26" rx="13" fill="rgba(255, 255, 255, .88)"/>
      <text x="${cx}" y="${y + 17}" text-anchor="middle" ${LABEL_STYLE}>Europäisches Buchenholz</text>`;

// Two ends side by side at the same scale: this product in its colour.
function propCompareWide(color, specs) {
  return widePhoto(specs.compare.map((item, i) => {
    const cx = 105 + i * 120;
    return `${propEnd(item.self ? color.hex : OTHER_PROP, item, cx, 128, 3.2)}
      <text x="${cx}" y="154" text-anchor="middle" ${LABEL_STYLE}${item.self ? ' font-weight="700"' : ""}>${item.label}</text>`;
  }).join(""));
}

// The end opened up: the cover around its filling.
function propFillingWide(color, specs) {
  const filling = fillingPattern(specs);
  const perCm = 120 / Math.max(specs.dimensions[1], specs.dimensions[2]);
  const inner = { ...specs, dimensions: specs.dimensions.map((value) => value - 3) };
  return widePhoto(`
      ${propEnd(color.hex, specs, 165, 160, perCm)}
      ${propEnd(`url(#${filling.id})`, inner, 165, r1(160 - 1.5 * perCm), perCm)}
      <text x="165" y="186" text-anchor="middle" ${LABEL_STYLE}>Füllung: ${specs.filling}</text>`, filling.defs);
}

// The small roll next to a bag: light enough for every trip.
function propTravelWide(color, specs) {
  return widePhoto(`
      ${shapePlacement(specs, 110, 96, 130, 90).draw(color.hex)}
      <path d="M206 78c0-22 46-22 46 0" fill="none" stroke="#8c8778" stroke-width="3"/>
      <rect x="190" y="76" width="78" height="64" rx="10" fill="#d9cfc0" stroke="${GARMENT_LINE}"/>
      <text x="165" y="176" text-anchor="middle" ${LABEL_STYLE}>Nur 830 g – passt in jede Tasche</text>`);
}

// Woven fabric up close, wide.
function weaveWidePicture(color, label = "Bio-Baumwolle (kbA)") {
  const id = `weave-${++patternCount}`;
  return widePhoto(`
      <rect width="330" height="202" fill="${color.hex}"/>
      <rect width="330" height="202" fill="url(#${id})"/>
      <rect x="85" y="88" width="160" height="26" rx="13" fill="rgba(255, 255, 255, .88)"/>
      <text x="165" y="105" text-anchor="middle" ${LABEL_STYLE}>${label}</text>`,
  `<defs><pattern id="${id}" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 1.5H6M0 4.5H6" stroke="rgba(255,255,255,.18)" stroke-width="1.4"/><path d="M1.5 0V6M4.5 0V6" stroke="rgba(0,0,0,.1)"/></pattern></defs>`);
}

function benchPadWide(color) {
  const pad = benchPad(color, 70, 66, 190, 64);
  return widePhoto(`${pad.content}
      <text x="165" y="170" text-anchor="middle" ${LABEL_STYLE}>Schaumstoff im Bezug aus Bio-Baumwolle</text>`, pad.defs);
}

// ---------- Drawn pictures for bags, cork blocks and straps ----------
// What fits into the bag: a rolled mat, a block and a strap.
function bagPackedWide(color, specs) {
  return widePhoto(`
      ${shapePlacement(specs, 96, 96, 150, 110).draw(color.hex)}
      <path d="M182 96h20m-7-6 7 6-7 6" fill="none" stroke="#5f5c52" stroke-width="1.5"/>
      <rect x="214" y="58" width="22" height="80" rx="11" fill="${MAT_ROLL}"/>
      <ellipse cx="225" cy="60" rx="11" ry="4" fill="#6b776d"/>
      <rect x="246" y="104" width="26" height="34" rx="2" fill="${CORK}" stroke="${GARMENT_LINE}"/>
      ${colorLine("M296 111a13 13 0 1 0 .1 0", color.hex, 5)}
      <text x="165" y="176" text-anchor="middle" ${LABEL_STYLE}>Matte, Block und Gurt passen hinein</text>`);
}

function bagPackedPicture(color, specs) {
  return galleryPhoto(`
      ${shapePlacement(specs, 100, 84, 160, 100).draw(color.hex)}
      <rect x="40" y="150" width="22" height="70" rx="11" fill="${MAT_ROLL}"/>
      <ellipse cx="51" cy="152" rx="11" ry="4" fill="#6b776d"/>
      <rect x="84" y="186" width="26" height="34" rx="2" fill="${CORK}" stroke="${GARMENT_LINE}"/>
      ${colorLine("M146 189a14 14 0 1 0 .1 0", color.hex, 5)}
      <text x="100" y="242" text-anchor="middle" ${LABEL_STYLE}>Platz für Matte, Block und Gurt</text>`);
}

// The bag with the strap in the same colour.
function bagSetWide(color, specs) {
  return widePhoto(`
      ${shapePlacement(specs, 110, 92, 150, 110).draw(color.hex)}
      ${shapePlacement({ shape: "strap" }, 240, 92, 100, 100).draw(color.hex)}
      <text x="165" y="176" text-anchor="middle" ${LABEL_STYLE}>Mit dem Yogagurt in derselben Farbe</text>`);
}

// The empty bag folded small, its cord on top.
const foldedBag = (color, cx, cy) => `
      <rect x="${cx - 40}" y="${cy - 30}" width="80" height="60" rx="6" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <path d="M${cx - 40} ${cy - 10}H${cx + 40}M${cx - 40} ${cy + 10}H${cx + 40}" stroke="rgba(0, 0, 0, .1)"/>
      ${colorLine(`M${cx + 28} ${cy - 30}c22 4 22 52-6 60`, color.hex, 2.2)}`;
const bagFoldedPicture = (color) => galleryPhoto(`${foldedBag(color, 100, 118)}
      <text x="100" y="184" text-anchor="middle" ${LABEL_STYLE}>Klein gefaltet passt sie</text>
      <text x="100" y="199" text-anchor="middle" ${LABEL_STYLE}>in jede Schublade</text>`);
const bagFoldedWide = (color) => widePhoto(`${foldedBag(color, 165, 90)}
      <text x="165" y="160" text-anchor="middle" ${LABEL_STYLE}>Klein gefaltet passt sie in jede Schublade</text>`);

// One block (small size, 22 × 12 × 7,5 cm) lying flat, on its side and
// upright: three heights.
function blockHeights(color, specs, cx, base, perCm) {
  const [length, width, height] = specs.dimensions;
  const sizes = [[length, height], [length, width], [width, length]];
  const gap = 16;
  const total = sizes.reduce((sum, [w]) => sum + w * perCm, 0) + gap * 2;
  let x = cx - total / 2;
  return sizes.map(([w, h]) => {
    const blockW = r1(w * perCm);
    const blockH = r1(h * perCm);
    const left = r1(x);
    x += blockW + gap;
    return `
      <rect x="${left}" y="${r1(base - blockH)}" width="${blockW}" height="${blockH}" rx="2" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <text x="${r1(left + blockW / 2)}" y="${r1(base - blockH - 8)}" text-anchor="middle" ${LABEL_STYLE}>${decimal(h)} cm</text>`;
  }).join("");
}
const blockHeightsPicture = (color, specs) => galleryPhoto(`${blockHeights(color, specs, 100, 160, 2.6)}
      <text x="100" y="196" text-anchor="middle" ${LABEL_STYLE}>Größe Klein:</text>
      <text x="100" y="211" text-anchor="middle" ${LABEL_STYLE}>22 × 12 × 7,5 cm</text>`);
const blockHeightsWide = (color, specs) => widePhoto(`${blockHeights(color, specs, 165, 140, 3.4)}
      <text x="165" y="172" text-anchor="middle" ${LABEL_STYLE}>Drei Höhen mit einem Block (Größe Klein: 22 × 12 × 7,5 cm)</text>`);

// Cork up close: fine grains in two shades.
function corkTexture(color, width, height) {
  const id = `cork-${++patternCount}`;
  return {
    defs: `<defs><pattern id="${id}" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="rgba(110, 70, 30, .35)"/><circle cx="6.5" cy="5" r=".8" fill="rgba(255, 255, 255, .3)"/><circle cx="4" cy="7.5" r=".9" fill="rgba(110, 70, 30, .25)"/></pattern></defs>`,
    content: `<rect width="${width}" height="${height}" fill="${color.hex}"/><rect width="${width}" height="${height}" fill="url(#${id})"/>`,
  };
}
const corkLabel = (cx, y) => `
      <rect x="${cx - 70}" y="${y}" width="140" height="26" rx="13" fill="rgba(255, 255, 255, .88)"/>
      <text x="${cx}" y="${y + 17}" text-anchor="middle" ${LABEL_STYLE}>Naturkork aus Portugal</text>`;
function corkPicture(color) {
  const cork = corkTexture(color, 200, 250);
  return galleryPhoto(cork.content + corkLabel(100, 200), cork.defs);
}
function corkWide(color) {
  const cork = corkTexture(color, 330, 202);
  return widePhoto(cork.content + corkLabel(165, 88), cork.defs);
}

// The strap's end through its two metal D-rings.
const dRings = (x, y, scale) => `
      <g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="#8b8b8b" stroke-width="3.5">
        <path d="M0 -18h6a18 18 0 0 1 0 36h-6z"/><path d="M10 -18h6a18 18 0 0 1 0 36h-6z"/>
      </g>`;
function strapRings(color, x, y, length, scale) {
  const band = r1(18 * scale);
  return `
      <rect x="${x}" y="${r1(y - band / 2)}" width="${length}" height="${band}" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      ${dRings(x + length, y, scale)}
      <path d="M${r1(x + length + 30 * scale)} ${r1(y - band / 2)}c${r1(12 * scale)} 0 ${r1(12 * scale)} ${r1(band + 14 * scale)} 0 ${r1(band + 14 * scale)}H${r1(x + length - 30 * scale)}v-${band}z" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <path d="M${r1(x + length + 30 * scale)} ${r1(y - band / 2)}c${r1(12 * scale)} 0 ${r1(12 * scale)} ${r1(band + 14 * scale)} 0 ${r1(band + 14 * scale)}H${r1(x + length - 30 * scale)}v-${band}z" fill="rgba(0, 0, 0, .12)"/>`;
}
const strapRingsPicture = (color) => galleryPhoto(`${strapRings(color, 20, 120, 110, 1)}
      <text x="100" y="196" text-anchor="middle" ${LABEL_STYLE}>Zwei Metall-D-Ringe</text>`);
const strapRingsWide = (color) => widePhoto(`${strapRings(color, 40, 92, 170, 1.4)}
      <text x="165" y="172" text-anchor="middle" ${LABEL_STYLE}>Durch beide Ringe gezogen, hält der Gurt jede Länge</text>`);

// The carrying strap's loops around a rolled mat, the strap arching above.
function strapLoopsPicture(color) {
  return galleryPhoto(`
      <rect x="30" y="130" width="140" height="40" rx="20" fill="${MAT_ROLL}"/>
      <ellipse cx="160" cy="150" rx="8" ry="20" fill="rgba(255, 255, 255, .15)"/>
      ${colorLine("M52 130v40M148 130v40", color.hex, 6)}
      ${colorLine("M52 130C52 52 148 52 148 130", color.hex, 4)}
      <text x="100" y="206" text-anchor="middle" ${LABEL_STYLE}>Schlaufen um die Matte,</text>
      <text x="100" y="221" text-anchor="middle" ${LABEL_STYLE}>Gurt über die Schulter</text>`);
}

// ---------- Drawn pictures for blanket, towel, eye pillow, spray and stickers ----------
// The blanket from above with its size (fringes at the short ends).
function blanketTopPicture(color, specs) {
  const [length, width] = specs.dimensions;
  const perCm = 0.75;
  const w = r1(width * perCm);
  const h = r1(length * perCm);
  const x = r1(96 - w / 2);
  const y = 40;
  const fringes = (top) => Array.from({ length: 12 }, (_, i) => `M${r1(x + 6 + i * ((w - 12) / 11))} ${top}v6`).join("");
  return galleryPhoto(`
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <path d="M${x} ${r1(y + h / 3)}h${w}M${x} ${r1(y + (2 * h) / 3)}h${w}" stroke="rgba(0, 0, 0, .1)" stroke-width="2"/>
      <path d="${fringes(y - 6)}${fringes(r1(y + h))}" stroke="${color.hex}" stroke-width="1.6" stroke-linecap="round"/>
      ${heightMark(r1(x + w + 12), y, r1(y + h), `${length} cm`)}
      ${widthMark(x, r1(x + w), r1(y + h + 18), `${width} cm`)}`);
}

// The towel with one corner turned over: the dotted grip underneath.
function towelCorner(color, x, y, w, h) {
  const id = `dots-${++patternCount}`;
  const fold = r1(Math.min(w, h) * 0.45);
  return {
    defs: `<defs><pattern id="${id}" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="${color.hex}"/><rect width="6" height="6" fill="rgba(0, 0, 0, .12)"/><circle cx="3" cy="3" r="1.3" fill="rgba(255, 255, 255, .45)"/></pattern></defs>`,
    content: `
      <path d="M${x} ${y}H${x + w}V${r1(y + h - fold)}L${r1(x + w - fold)} ${y + h}H${x}Z" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <path d="M${x + w} ${r1(y + h - fold)}L${r1(x + w - fold)} ${y + h}L${r1(x + w - fold)} ${r1(y + h - fold)}Z" fill="url(#${id})" stroke="${GARMENT_LINE}"/>`,
  };
}
function towelUndersidePicture(color) {
  const towel = towelCorner(color, 30, 50, 140, 150);
  return galleryPhoto(`${towel.content}
      <text x="100" y="226" text-anchor="middle" ${LABEL_STYLE}>Unterseite mit Silikon-Noppen</text>`, towel.defs);
}
function towelUndersideWide(color) {
  const towel = towelCorner(color, 85, 30, 160, 120);
  return widePhoto(`${towel.content}
      <text x="165" y="176" text-anchor="middle" ${LABEL_STYLE}>Ganzflächig mit Silikon beschichtet</text>`, towel.defs);
}

// Rolled up next to a bag: small enough for travelling.
function towelTravelWide(color) {
  return widePhoto(`
      <rect x="70" y="76" width="110" height="40" rx="20" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <ellipse cx="172" cy="96" rx="8" ry="20" fill="rgba(0, 0, 0, .1)"/>
      <path d="M216 78c0-22 46-22 46 0" fill="none" stroke="#8c8778" stroke-width="3"/>
      <rect x="200" y="76" width="78" height="64" rx="10" fill="#d9cfc0" stroke="${GARMENT_LINE}"/>
      <text x="165" y="176" text-anchor="middle" ${LABEL_STYLE}>Hot Yoga, Pilates oder unterwegs</text>`);
}

// The eye pillow from above with its size.
function eyePillowSizePicture(color, specs) {
  const [length, width] = specs.dimensions;
  const place = shapePlacement(specs, 90, 110, 136, 90);
  const [left, top] = place.point(28, 70);
  const [right, bottom] = place.point(152, 122);
  return galleryPhoto(`${place.draw(color.hex)}
      ${heightMark(r1(right + 10), top, bottom, `${decimal(width)} cm`)}
      ${widthMark(left, right, r1(bottom + 18), `${length} cm`)}`);
}

// The 60 ml spray and the 500 ml refill bottle side by side.
const sprayBottles = (color, cx, cy, size) => `
      ${shapePlacement({ shape: "spray" }, cx - size * 0.45, cy, size * 0.7, size).draw(color.hex)}
      ${shapePlacement({ shape: "sprayRefill" }, cx + size * 0.45, cy + size * 0.06, size * 0.8, size * 1.15).draw(color.hex)}`;
const sprayBottlesPicture = (color) => galleryPhoto(`${sprayBottles(color, 100, 110, 120)}
      <text x="100" y="206" text-anchor="middle" ${LABEL_STYLE}>Sprühflasche 60 ml</text>
      <text x="100" y="221" text-anchor="middle" ${LABEL_STYLE}>Nachfüllflasche 500 ml</text>`);

// The spray over a mat, with a fine mist.
function sprayMistPicture(color) {
  const mist = Array.from({ length: 18 }, (_, i) => `<circle cx="${r1(46 + (i % 6) * 9 + (i % 2) * 3)}" cy="${r1(96 + Math.floor(i / 6) * 9 + (i % 3) * 2)}" r="${i % 3 ? 1.4 : 2}" fill="rgba(140, 170, 190, .55)"/>`).join("");
  return galleryPhoto(`
      <path d="M14 170L54 132H196V190H14Z" fill="#7d8a7f"/>
      <path d="M54 132H196" stroke="rgba(255, 255, 255, .25)"/>
      ${mist}
      <g transform="rotate(-24 140 90)">${shapePlacement({ shape: "spray" }, 140, 90, 70, 120).draw(color.hex)}</g>`);
}

// The eye pillow opened: its cover around linseed and lavender.
function eyeFillingWide(color, specs) {
  const filling = fillingPattern(specs);
  return widePhoto(`
      <rect x="55" y="46" width="220" height="100" rx="50" fill="${color.hex}" stroke="${GARMENT_LINE}"/>
      <rect x="67" y="56" width="196" height="80" rx="40" fill="url(#${filling.id})"/>
      <text x="165" y="176" text-anchor="middle" ${LABEL_STYLE}>Füllung: ${specs.filling}</text>`, filling.defs);
}

// What is in it: sage, turmeric and organic ethanol.
function sprayIngredientsPicture() {
  return galleryPhoto(`
      <path d="M58 96c-22-6-30-30-20-48 18 6 28 26 20 48zM58 96c2-20 14-34 32-38 2 20-12 36-32 38z" fill="#8a9a7b"/>
      <path d="M58 96V122" stroke="#6d7c60" stroke-width="2"/>
      <text x="58" y="142" text-anchor="middle" ${LABEL_STYLE}>Salbeiöl</text>
      <path d="M124 104c8-14 26-16 34-6 6 8 0 18-10 20-8 2-14 8-24 4-6-3-6-12 0-18z" fill="#d79a3c"/>
      <path d="M134 112c4-4 10-5 14-2" stroke="rgba(0, 0, 0, .2)" fill="none"/>
      <text x="140" y="142" text-anchor="middle" ${LABEL_STYLE}>Kurkuma</text>
      <path d="M92 168c-8 8-8 22 6 26 14-4 14-18 6-26l-6-12z" fill="#cfe0e8" stroke="${GARMENT_LINE}"/>
      <text x="98" y="218" text-anchor="middle" ${LABEL_STYLE}>Bio-Ethanol</text>`);
}

// Our own sticker design: the quote around a small lotus.
function stickerArt(color, specs, cx, cy, r) {
  // Longer quotes take two lines.
  const words = specs.quote.split(" ");
  const half = Math.ceil(words.length / 2);
  const lines = specs.quote.length > 12 && words.length > 1 ? [words.slice(0, half).join(" "), words.slice(half).join(" ")] : [specs.quote];
  const size = r1(r * 0.2);
  return `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color.hex}" stroke="rgba(0, 0, 0, .12)"/>
      <g transform="translate(${cx} ${r1(cy - r * 0.32)}) scale(${r1(r / 48)})" fill="rgba(0, 0, 0, .3)">
        <path d="M0 -16c-6 7-6 15 0 22 6-7 6-15 0-22zM0 6c-9-2-15 1-18 7 7 2 13 0 18-7zM0 6c9-2 15 1 18 7-7 2-13 0-18-7z"/>
      </g>
      ${lines.map((line, i) => `<text x="${cx}" y="${r1(cy + r * 0.2 + i * size * 1.25)}" text-anchor="middle" font-size="${size}" fill="rgba(0, 0, 0, .62)" font-family="Playfair Display, serif">${line}</text>`).join("")}`;
}
const stickerFrontPicture = (color, specs) => galleryPhoto(stickerArt(color, specs, 100, 120, 76));

// The sticker on the corner of a rolled-out mat.
function stickerOnMatPicture(color, specs) {
  return galleryPhoto(`
      <path d="M0 250V110L120 40H200V250Z" fill="#5d7366"/>
      <path d="M0 110L120 40" stroke="rgba(255, 255, 255, .2)" stroke-width="2"/>
      <g transform="rotate(-8 120 140)">${stickerArt(color, specs, 120, 140, 34)}</g>`);
}

// ---------- Drawn pictures for covers, malas and spelt husks ----------
// A cover's page also knows its cushion (`specs.cushion`), to show the
// cover pulled on and, for comparison, the cushion in a neutral colour.
const OLD_COVER = "#cfc8bc";
const onCushion = (specs) => ({ ...specs, shape: specs.cushion });

// Only the cover: the inner cushion is drawn as a dashed outline.
function coverOnly(color, specs, cx, cover, inner, scale) {
  const round = !["zabutonCover", "rollCover"].includes(specs.shape);
  const w = r1(120 * scale);
  const h = r1((round ? 44 : 34) * scale);
  return `
      ${shapePlacement(specs, cx, cover, 160 * scale, 90 * scale).draw(color.hex)}
      <rect x="${r1(cx - w / 2)}" y="${r1(inner - h / 2)}" width="${w}" height="${h}" rx="${r1(round ? h / 2 : 8)}" fill="none" stroke="#8c8778" stroke-width="1.5" stroke-dasharray="5 4"/>`;
}
const coverOnlyPicture = (color, specs) => galleryPhoto(`${coverOnly(color, specs, 100, 84, 158, 1)}
      <text x="100" y="208" text-anchor="middle" ${LABEL_STYLE}>Nur der Bezug: Innenkissen</text>
      <text x="100" y="223" text-anchor="middle" ${LABEL_STYLE}>und Füllung sind nicht dabei</text>`);
const coverOnlyWide = (color, specs) => widePhoto(`${coverOnly(color, specs, 165, 66, 128, 0.9)}
      <text x="165" y="178" text-anchor="middle" ${LABEL_STYLE}>Nur der Bezug – Innenkissen und Füllung sind nicht dabei</text>`);

// The same cushion before and after: neutral, then in the new colour.
function coverSwapWide(color, specs) {
  const cushionSpecs = onCushion(specs);
  return widePhoto(`
      ${shapePlacement(cushionSpecs, 92, 92, 118, 120).draw(OLD_COVER)}
      <path d="M155 92h20m-7-6 7 6-7 6" fill="none" stroke="#5f5c52" stroke-width="1.5"/>
      ${shapePlacement(cushionSpecs, 238, 92, 118, 120).draw(color.hex)}
      <text x="165" y="182" text-anchor="middle" ${LABEL_STYLE}>Neuer Bezug, neue Farbe – dasselbe Kissen</text>`);
}

// The embroidered lotus up close, stitched onto the cotton.
function coverEmbroideryWide(color) {
  const id = `weave-${++patternCount}`;
  const stitch = 'fill="none" stroke="rgba(255, 255, 255, .75)" stroke-width="2.2" stroke-dasharray="4 2.5" stroke-linecap="round"';
  return widePhoto(`
      <rect width="330" height="202" fill="${color.hex}"/>
      <rect width="330" height="202" fill="url(#${id})"/>
      <g transform="translate(165 86) scale(2.4)">
        <path d="M0 -16c-6 7-6 15 0 22 6-7 6-15 0-22z" ${stitch}/>
        <path d="M0 6c-9-2-15 1-18 7 7 2 13 0 18-7z" ${stitch}/>
        <path d="M0 6c9-2 15 1 18 7-7 2-13 0-18-7z" ${stitch}/>
      </g>
      <rect x="105" y="150" width="120" height="26" rx="13" fill="rgba(255, 255, 255, .88)"/>
      <text x="165" y="167" text-anchor="middle" ${LABEL_STYLE}>Gestickter Lotus</text>`,
  `<defs><pattern id="${id}" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 1.5H6M0 4.5H6" stroke="rgba(255,255,255,.18)" stroke-width="1.4"/><path d="M1.5 0V6M4.5 0V6" stroke="rgba(0,0,0,.1)"/></pattern></defs>`);
}

// A mala: the beads up close with the guru bead and the tassel.
function malaClosePicture(color, specs) {
  const centers = Array.from({ length: 7 }, (_, i) => [30 + i * 24, r1(70 + Math.sin(i / 2) * 10)]);
  const beads = centers.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="11" fill="${color.hex}"/><circle cx="${x - 3}" cy="${r1(y - 4)}" r="3" fill="rgba(255, 255, 255, .25)"/>`).join("");
  return galleryPhoto(`
      <path d="M${centers.map(([x, y]) => `${x} ${y}`).join("L")}M${centers[3][0]} ${centers[3][1]}L100 132" fill="none" stroke="#8c8778" stroke-width="1.2"/>
      ${beads}
      <circle cx="100" cy="132" r="15" fill="${color.hex}"/><circle cx="95" cy="126" r="4" fill="rgba(255, 255, 255, .25)"/>
      <path d="M92 146h16l8 52H84z" fill="${color.hex}"/>
      <path d="M90 160h20M88 176h24" stroke="rgba(0, 0, 0, .15)"/>
      <text x="100" y="226" text-anchor="middle" ${LABEL_STYLE}>108 Perlen aus ${specs.material}</text>`);
}

// The mala laid out: about 80 cm long.
function malaLengthPicture(color) {
  const beads = Array.from({ length: 30 }, (_, i) => {
    const angle = (i / 30) * Math.PI * 2;
    return `<circle cx="${r1(100 + 30 * Math.cos(angle))}" cy="${r1(112 + 74 * Math.sin(angle))}" r="5" fill="${color.hex}"/>`;
  }).join("");
  return galleryPhoto(`${beads}
      ${heightMark(160, 38, 186, "80 cm")}`);
}

// A bag of spelt husks with its weight on the label.
function huskBagPicture(color, specs) {
  const place = shapePlacement(specs, 100, 120, 150, 180);
  const [x, y] = place.point(90, 112);
  return galleryPhoto(`${place.draw(color.hex)}
      <text x="${x}" y="${y}" text-anchor="middle" font-size="18" font-weight="700" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">${specs.weight}</text>`);
}

// The husks up close.
function huskClosePicture() {
  const filling = fillingPattern({ filling: "Dinkelspelz" });
  return galleryPhoto(`<rect width="200" height="250" fill="url(#${filling.id})"/>
      <rect x="30" y="200" width="140" height="26" rx="13" fill="rgba(255, 255, 255, .88)"/>
      <text x="100" y="217" text-anchor="middle" ${LABEL_STYLE}>Bio-Dinkelspelz (kbA)</text>`, filling.defs);
}

// Refilling a cushion from the bag.
function huskRefillPicture(color, specs) {
  const filling = fillingPattern({ filling: "Dinkelspelz" });
  const grains = Array.from({ length: 14 }, (_, i) => `<ellipse cx="${r1(118 + (i % 4) * 5 + (i % 3))}" cy="${r1(112 + Math.floor(i / 4) * 9)}" rx="2" ry="1" fill="#b89a62" transform="rotate(${i * 25} ${r1(118 + (i % 4) * 5)} ${r1(112 + Math.floor(i / 4) * 9)})"/>`).join("");
  return galleryPhoto(`
      <g transform="rotate(-35 120 70)">${shapePlacement(specs, 120, 70, 60, 80).draw(color.hex)}</g>
      ${grains}
      <rect x="40" y="150" width="120" height="56" rx="24" fill="${OLD_COVER}"/>
      <rect x="54" y="160" width="92" height="36" rx="16" fill="url(#${filling.id})"/>
      <text x="100" y="230" text-anchor="middle" ${LABEL_STYLE}>Zum Nachfüllen deiner Kissen</text>`, filling.defs);
}

// ---------- Pictures for the "Almost Perfect" mats ----------
// The flaw, tiny as it is, under a magnifier: a scratch and a speck.
function flawLens(color, cx, cy, r) {
  const clip = `lens-${++patternCount}`;
  const scratch = (dy, stroke, width) => `<path d="M${r1(cx - r * 0.55)} ${r1(cy + dy)}l${r1(r * 0.9)} ${r1(-r * 0.3)}" stroke="${stroke}" stroke-width="${r1(r * width)}"/>`;
  return `
      <defs><clipPath id="${clip}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${color.hex}"/>
      <g clip-path="url(#${clip})" fill="none" stroke-linecap="round">
        ${scratch(r * 0.15, "rgba(0, 0, 0, .3)", 0.1)}
        ${scratch(r * 0.25, "rgba(255, 255, 255, .55)", 0.06)}
        <circle cx="${r1(cx + r * 0.35)}" cy="${r1(cy + r * 0.4)}" r="${r1(r * 0.09)}" fill="rgba(0, 0, 0, .25)" stroke="none"/>
      </g>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(255, 255, 255, .12)" stroke="#5f5c52" stroke-width="2.5"/>
      <path d="M${r1(cx + r * 0.72)} ${r1(cy + r * 0.72)}l${r1(r * 0.7)} ${r1(r * 0.7)}" stroke="#5f5c52" stroke-width="${r1(r * 0.2)}" stroke-linecap="round"/>`;
}
const flawPicture = (color, specs) => galleryPhoto(`
      <rect x="40" y="20" width="96" height="176" rx="3" fill="${color.hex}"/>
      ${texture(color, specs, "M40 20h96v176H40z")}
      ${alignPrint(color, 40, 20, 96, 176)}${flawLens(color, 124, 138, 40)}
      <text x="100" y="226" text-anchor="middle" ${LABEL_STYLE}>Kleiner Schönheitsfehler</text>
      <text x="100" y="241" text-anchor="middle" ${LABEL_STYLE}>– volle Funktion</text>`);
const flawWide = (color, specs) => widePhoto(`
      <rect x="28" y="30" width="226" height="104" rx="3" fill="${color.hex}"/>
      ${texture(color, specs, "M28 30h226v104H28z")}
      ${alignPrint(color, 28, 30, 226, 104)}${flawLens(color, 226, 84, 44)}
      <text x="165" y="184" text-anchor="middle" ${LABEL_STYLE}>Kleiner Schönheitsfehler, volle Funktion</text>`);

// ---------- Pictures for sets and the gift card ----------
// A set's gallery shows all its parts together, then each part in the colour
// (and choice) picked for it, drawn by the part's own first picture.
const partPicture = (part, pick) => galleryPictures[part.setPicture || part.gallery[0]].draw(pick.color, specsFor(part, pick.choice));

// A picture's inside without its svg tag and background, to nest it.
const pictureContent = (markup) => markup
  .replace(/^\s*<svg[^>]*>/, "")
  .replace(/<\/svg>\s*$/, "")
  .replace(/<rect width="200" height="250" fill="[^"]*"\/>/, "");

// [x, y, scale] of each part, by the number of parts.
const SET_LAYOUT = {
  2: [[-4, 6, 0.76], [52, 62, 0.76]],
  3: [[-8, 0, 0.62], [76, 20, 0.62], [34, 92, 0.62]],
};
function setAllPicture(color, specs) {
  const layout = SET_LAYOUT[specs.parts.length];
  const parts = specs.parts.map((part, i) => {
    const [x, y, scale] = layout[i];
    return `<svg x="${x}" y="${y}" width="${r1(200 * scale)}" height="${r1(250 * scale)}" viewBox="0 0 200 250">${pictureContent(partPicture(part, color.picks[i]))}</svg>`;
  }).join("");
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>${parts}
    </svg>`;
}

// The free online courses that come with some sets.
const coursePicture = () => galleryPhoto(`
      <rect x="34" y="62" width="132" height="86" rx="8" fill="#ffffff" stroke="#c9b9a3" stroke-width="2"/>
      <rect x="42" y="70" width="116" height="70" rx="4" fill="#e6dfd3"/>
      <circle cx="100" cy="105" r="17" fill="#b8975a"/>
      <path d="M95 96l15 9-15 9z" fill="#ffffff"/>
      <path d="M66 160h68" stroke="#c9b9a3" stroke-width="4" stroke-linecap="round"/>
      <text x="100" y="196" text-anchor="middle" ${LABEL_STYLE}>Gratis Onlinekurse</text>`);

// The gift card with its value, and the mail it comes in.
const giftFrontPicture = (color, specs) => galleryPhoto(`
      <rect x="22" y="70" width="156" height="98" rx="10" fill="${color.hex}"/>
      <rect x="22" y="70" width="156" height="98" rx="10" fill="rgba(255, 255, 255, .12)"/>
      <path d="M100 86c-5 5-5 11 0 16 5-5 5-11 0-16zm0 16c-7-2-12 1-14 5 5 2 10 1 14-5zm0 0c7-2 12 1 14 5-5 2-10 1-14-5z" fill="rgba(255, 255, 255, .8)"/>
      <text x="100" y="146" text-anchor="middle" font-size="24" font-weight="700" fill="rgba(255, 255, 255, .95)" font-family="Hanken Grotesk, sans-serif">${specs.value} €</text>
      <text x="100" y="206" text-anchor="middle" ${LABEL_STYLE}>Gutscheinkarte</text>`);
const giftMailPicture = (color) => galleryPhoto(`
      <rect x="52" y="58" width="96" height="62" rx="6" fill="${color.hex}"/>
      <rect x="28" y="88" width="144" height="88" rx="8" fill="#ffffff" stroke="#c9b9a3" stroke-width="2"/>
      <path d="M30 92l70 50 70-50" fill="none" stroke="#c9b9a3" stroke-width="2"/>
      <text x="100" y="206" text-anchor="middle" ${LABEL_STYLE}>Kommt per E-Mail:</text>
      <text x="100" y="221" text-anchor="middle" ${LABEL_STYLE}>ausdrucken oder weiterleiten</text>`);

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

// The tag on the gallery: matte mats say so, products sold out as a whole
// (some stickers) say "Ausverkauft", as on the original.
const galleryBadge = (product, color) => (product.unavailable ? "Ausverkauft" : color.matte ? "Matte Oberfläche" : "");

// Buy box texts for the picked choice; sold-out choices read as on the original.
// Clothing sells out per size, everything else per colour.
const isSoldOut = (color, size) => (size ? !color.stock.includes(size) : Boolean(color.soldOut));
const cartLabel = (soldOut) => (soldOut ? "Benachrichtige mich" : "In den Warenkorb");
const stockText = (soldOut, product) => (soldOut ? "Nicht auf Lager" : product?.inStock || "Auf Lager: In 1-3 Tagen bei dir");

// A choice (MUDRA PRO's length, the zabuton's thickness) or a colour
// (clothing) can bring its own price; reduced clothing colours also show
// the old price, crossed out.
const priceOf = (product, color, choice) => ({ price: choice?.price ?? color.price ?? product.price, compareAt: color.compareAt || null });
function priceMarkup({ price, compareAt }) {
  return compareAt ? `
          <s class="buybox__compare"><span class="visually-hidden">statt </span>${formatPrice(compareAt)}</s>
          <span class="buybox__amount buybox__amount--sale"><span class="visually-hidden">jetzt </span>${formatPrice(price)}</span>` : `
          <span class="buybox__amount">${formatPrice(price)}</span>`;
}

// The original's size chart: a table per size and a drawing with numbered
// measures. It is a <dialog>, so focus, Escape and the backdrop work natively.
function sizeChartMarkup(product) {
  const { columns, rows } = product.specs.chart;
  return `
    <dialog class="size-chart" aria-labelledby="size-chart-title">
      <div class="size-chart__inner">
        <div class="size-chart__head">
          <h2 class="size-chart__title" id="size-chart-title">Größentabelle</h2>
          <button class="size-chart__close" type="button" aria-label="Größentabelle schließen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button>
        </div>
        <div class="size-chart__scroll" tabindex="0" role="region" aria-label="Maßtabelle">
          <table class="size-chart__table">
            <caption class="visually-hidden">Maße der ${product.name} in cm</caption>
            <thead>
              <tr><th scope="col"><span class="visually-hidden">Größe</span></th><th scope="col">EU Größen</th>${columns.map((column, i) => `<th scope="col">${column} (${i + 1})</th>`).join("")}</tr>
            </thead>
            <tbody>${rows.map(([size, eu, ...values]) => `
              <tr><th scope="row">${size}</th><td>${eu}</td>${values.map((value) => `<td>${value}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
        <p class="size-chart__note">Alle Maße in cm. Die Nummern zeigen, wo gemessen wird.</p>
        <div class="size-chart__picture" role="img" aria-label="Zeichnung der ${product.name} mit den Messstellen: ${columns.map((column, i) => `${i + 1} ${column}`).join(", ")}">${sizeChartDrawing(product.specs)}
        </div>
      </div>
    </dialog>`;
}

// ---------- Page markup ----------
// `specs` are the product's, plus whatever the picked choice changes (the
// zabuton's thickness), so the drawings follow the choice.
const specsFor = (product, choice) => ({ ...product.specs, ...choice?.specs });

function galleryItems(product, color, specs = product.specs) {
  return product.gallery.map((key) => {
    const picture = galleryPictures[key];
    return `
          <div class="gallery__item" role="img" aria-label="${product.name}${color.name ? ` in ${color.name}` : ""}, ${picture.label}">${picture.draw(color, specs)}</div>`;
  }).join("");
}

function galleryThumbs(product, color, current = 0, specs = product.specs) {
  return product.gallery.map((key, i) => `
          <button class="gallery__thumb" data-index="${i}" aria-label="Bild ${i + 1} von ${product.gallery.length} zeigen"${i === current ? ' aria-current="true"' : ""}>${galleryPictures[key].draw(color, specs)}</button>`).join("");
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

// Products with their own list of details (the cushions) show it as is;
// for the zabuton the list depends on the picked thickness.
function factsMarkup(facts) {
  const rows = [...facts, ["Hinweis", "Nachbau für ein Studentenprojekt – kein echtes Produkt, daher keine Hersteller- oder Bestellangaben."]];
  return `
        <dl class="facts">${rows.map(([term, value]) => `
          <dt>${term}</dt><dd>${value}</dd>`).join("")}
        </dl>`;
}

function detailsFor(product, choice) {
  if (!product.facts) return detailsMarkup(product.specs);
  return factsMarkup(typeof product.facts === "function" ? product.facts(choice) : product.facts);
}

// `color`, `size` and `choice` are what the page opens with.
function productMarkup(product, color, size, choice) {
  const soldOut = isSoldOut(color, size);
  // A set keeps its "In den Warenkorb" even when a part is sold out, as on the original.
  const remindable = soldOut && !product.parts;
  const specs = specsFor(product, choice);

  const swatches = !product.colors.some((c) => c.name) ? "" : product.colors.map((c, i) => `
              <label class="color-swatch">
                <input type="radio" name="color" value="${i}" class="visually-hidden"${c === color ? " checked" : ""}>
                <span class="color-swatch__thumb">${galleryPictures[product.swatch || "rolled"].draw(c, specs)}</span>
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

  const choices = product.choices ? `

        <fieldset class="option-picker choice-picker">
          <legend class="color-picker__legend"><strong>${product.choices.name}:</strong> <span class="choice-picker__value">${choice.label}</span></legend>
          <div class="option-picker__options">${product.choices.values.map((value, i) => `
            <label class="option-pill">
              <input type="radio" name="choice" value="${i}" class="visually-hidden"${value === choice ? " checked" : ""}>
              <span class="option-pill__label">${value.label}</span>
            </label>`).join("")}
          </div>
        </fieldset>` : "";

  // Sizes sold out in the picked colour look like the others (as on the
  // original) but say so to screen readers; picking one offers a reminder.
  // Products without a rating of their own (the single cork block) show
  // neither stars in the buy box nor the rating summary, as on the original.
  const rated = product.buyboxRating !== false;

  // Options with a single value (the cork set's "Pack: 2er Pack") show as
  // one picked pill, as on the original.
  const fixedOptions = (product.fixedOptions || []).map(({ name, value }) => `

        <fieldset class="option-picker">
          <legend class="color-picker__legend"><strong>${name}:</strong> <span>${value}</span></legend>
          <div class="option-picker__options">
            <label class="option-pill">
              <input type="radio" name="${name}" value="${value}" class="visually-hidden" checked>
              <span class="option-pill__label">${value}</span>
            </label>
          </div>
        </fieldset>`).join("");

  const sizes = product.sizes ? `

        <fieldset class="option-picker size-picker">
          <legend class="color-picker__legend"><strong>Größe:</strong> <span class="size-picker__value">${size}</span></legend>
          <div class="option-picker__options">${product.sizes.map((label) => `
            <label class="option-pill option-pill--size${color.stock.includes(label) ? "" : " option-pill--out"}">
              <input type="radio" name="size" value="${label}" class="visually-hidden"${label === size ? " checked" : ""}>
              <span class="option-pill__label">${label}<span class="visually-hidden">${color.stock.includes(label) ? "" : " (ausverkauft)"}</span></span>
            </label>`).join("")}
          </div>
          <button class="size-picker__chart" type="button" aria-haspopup="dialog">Größentabelle</button>
        </fieldset>` : "";

  const usps = buyboxUsps.map(([icon, text]) => `
            <li><svg class="buybox__usp-icon" viewBox="0 0 24 24" aria-hidden="true">${buyboxIcons[icon]}</svg>${text}</li>`).join("");

  // Like the original, a product without care notes (the bench) has no "Pflege".
  const accordion = [
    ["Beschreibung", product.description],
    ["Details", detailsFor(product, choice), "details"],
    ["Pflege", product.care],
    ["Nachhaltigkeit", product.sustainability],
  ].filter(([, body]) => body).map(([title, body, key]) => `
          <details class="accordion__item">
            <summary class="accordion__summary">${title}<svg class="accordion__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path class="accordion__icon-v" d="M12 5v14"/></svg></summary>
            <div class="accordion__content"${key ? ` data-${key}` : ""}>${body}</div>
          </details>`).join("");

  // Some products (bolsters, bench) show only the stars, without scales.
  const scales = product.ratingScales ? `
        <ul class="rating-scales">${product.ratingScales.map(([label, value]) => `
            <li class="rating-scale">
              <div class="rating-scale__row"><span>${label}</span><span>${value} / 5.00</span></div>
              <div class="rating-scale__bar"><span style="width: ${(value / 5) * 100}%"></span></div>
            </li>`).join("")}
        </ul>` : "";

  return `
    <div class="container product__main">
      <div class="gallery">
        <span class="gallery__badge"${galleryBadge(product, color) ? "" : " hidden"}>${galleryBadge(product, color)}</span>
        <div class="gallery__track" tabindex="0" aria-label="Produktbilder">${galleryItems(product, color, specs)}
        </div>
        <div class="gallery__thumbs">${galleryThumbs(product, color, 0, specs)}
        </div>
      </div>

      <div class="buybox">
        <h1 class="buybox__title">${product.name}</h1>${product.subtitle ? `
        <p class="buybox__subtitle">${product.subtitle}</p>` : ""}${rated ? `
        <a href="#bewertungen" class="buybox__rating">${starRating(product.rating)}<span>(${product.reviewCount})</span></a>` : ""}
        <p class="buybox__price">
          <span class="buybox__prices">${priceMarkup(priceOf(product, color, choice))}</span>
          <span class="buybox__tax">${product.shippingNote === false ? "inkl. MwSt." : `inkl. MwSt. zzgl. <a href="#">Versandkosten</a>`}</span>
        </p>

${product.parts ? bundleMarkup(product, color) : ""}${colorPicker}${choices}${fixedOptions}${sizes}

${product.unavailable ? `
        <p class="buybox__alert"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5v.5"/></svg>Dieser Artikel ist nicht mehr verfügbar, versuche es mit einer anderen Variante.</p>${color.name ? `
        <p class="buybox__stock buybox__stock--out">${stockText(true)}</p>` : ""}` : `
        <button class="btn btn--primary btn--block buybox__cart" type="button">${cartLabel(remindable)}</button>
        <p class="buybox__note"${remindable ? "" : " hidden"}>Du erhältst eine Benachrichtigung per E-Mail, sobald der Artikel wieder auf Lager ist.</p>
        <p class="buybox__stock${soldOut ? " buybox__stock--out" : ""}">${stockText(soldOut, product)}</p>`}
        <p class="buybox__added" role="status"></p>
        <div class="buybox__payments" role="img" aria-label="Zahlungsarten (neutrale Platzhalter-Icons)">${PAYMENT_ICONS}
        </div>
        <ul class="buybox__usps">${usps}
        </ul>
      </div>
    </div>

    <div class="container product__more">
      <div class="accordion">${accordion}
      </div>${rated ? `

      <div class="rating-summary">
        <p class="rating-summary__head">${starRating(product.rating)}<span>(${product.reviewCount})</span></p>${scales}
        <a href="#bewertungen" class="btn btn--secondary btn--block">Bewertungen anschauen</a>
      </div>` : ""}
    </div>

${product.features.length ? `
    <section class="container product-features" aria-label="Mehr über die ${product.name}">${featureRows(product, color, specs)}
    </section>` : ""}
${reviewsMarkup(product)}
    <section class="section related" aria-labelledby="related-title">
      <div class="container">
        <header class="section-header">
          <h2 class="section-header__title" id="related-title">Verwandte Produkte</h2>
        </header>
        <div class="product-grid">${product.related.map(productCard).join("")}
        </div>
      </div>
    </section>${product.sizes ? sizeChartMarkup(product) : ""}`;
}

// A set's info rows come from its parts and are drawn in that part's pick.
function featureContext(product, part, color, specs) {
  if (part === undefined || !color.picks) return [color, specs];
  const pick = color.picks[part];
  return [pick.color, specsFor(product.parts[part], pick.choice)];
}

function featureRows(product, color, specs = product.specs) {
  return product.features.map((feature, i) => {
    const picture = featurePictures[feature.picture];
    const [pictureColor, pictureSpecs] = featureContext(product, feature.part, color, specs);
    return `
      <div class="feature${i % 2 ? " feature--reverse" : ""}">
        <div class="feature__text">
          <h2 class="feature__title">${feature.title}</h2>
          <p>${feature.text}</p>
        </div>
        <div class="feature__media" role="img" aria-label="${picture.label(pictureSpecs)}" data-picture="${feature.picture}"${feature.part === undefined ? "" : ` data-part="${feature.part}"`}>${picture.draw(pictureColor, pictureSpecs)}</div>
      </div>`;
  }).join("");
}

// ---------- Sets ----------
// A set's page lists its parts like the original's bundle configurator: each
// part has its own colour (and choices such as length or thickness), and the
// set costs 10 % less than its parts together, so price and "statt" price
// follow the picks. Colours that a choice rules out on the part's own page
// stay pickable here, as on the original.

// What a part starts with: the colour a link names, else the first one in
// stock, plus the first (or the named) choice.
function startPick(part, label = "") {
  const [wantedColor, wantedChoice] = label.split(" / ");
  return {
    color: part.colors.find((c) => c.name && c.name === wantedColor) || part.colors.find((c) => !c.soldOut) || part.colors[0],
    choice: part.choices && (part.choices.values.find((value) => [wantedChoice, wantedColor].includes(value.label)) || part.choices.values[0]),
  };
}
const pickLabel = (pick) => [pick.color.name, pick.choice?.label].filter(Boolean).join(" / ");

// What a part costs with its pick (a choice or a colour can bring its own price).
function partPrice(part, pick) {
  return pick.choice?.price ?? pick.color.price ?? part.price;
}

// The "colour" a set's page works with: the picks and the prices they make.
function setColor(product, picks) {
  const cents = picks.reduce((sum, pick, i) => sum + Math.round(partPrice(product.parts[i], pick) * 100), 0);
  return {
    name: null,
    hex: picks[0].color.hex,
    picks,
    soldOut: picks.some((pick) => pick.color.soldOut),
    compareAt: cents / 100,
    price: Math.round((cents * 9) / 10) / 100,
  };
}

function bundleMarkup(product, color) {
  return `

        <div class="bundle">${bundleInner(product, color)}
        </div>`;
}

function bundleInner(product, color) {
  return `
          <p class="bundle__lead">Dieses ${product.parts.length}-teilige Set enthält:</p>${product.parts.map((part, i) => bundleItem(part, i, color.picks[i])).join("")}`;
}

// One part: its picture, name, rating and pickers (names start with
// "part-" so the page's own pickers don't react to them).
function bundleItem(part, i, pick) {
  const specs = specsFor(part, pick.choice);
  const colorPicker = part.colors.some((c) => c.name) ? `
              <fieldset class="option-picker bundle-picker">
                <legend class="color-picker__legend"><strong>Farbe:</strong> <span>${pick.color.name}</span></legend>
                <div class="color-picker__options">${part.colors.map((c, j) => `
                  <label class="color-swatch">
                    <input type="radio" name="part-${i}-color" value="${j}" class="visually-hidden"${c === pick.color ? " checked" : ""}>
                    <span class="color-swatch__thumb">${galleryPictures[part.swatch || "rolled"].draw(c, specs)}</span>
                    <span class="visually-hidden">${c.name}</span>
                  </label>`).join("")}
                </div>
              </fieldset>` : "";
  const choices = part.choices ? `
              <fieldset class="option-picker bundle-picker">
                <legend class="color-picker__legend"><strong>${part.choices.name}:</strong> <span>${pick.choice.label}</span></legend>
                <div class="option-picker__options">${part.choices.values.map((value, j) => `
                  <label class="option-pill">
                    <input type="radio" name="part-${i}-choice" value="${j}" class="visually-hidden"${value === pick.choice ? " checked" : ""}>
                    <span class="option-pill__label">${value.label}</span>
                  </label>`).join("")}
                </div>
              </fieldset>` : "";
  const fixed = (part.fixedOptions || []).map(({ name, value }) => `
              <fieldset class="option-picker bundle-picker">
                <legend class="color-picker__legend"><strong>${name}:</strong> <span>${value}</span></legend>
                <div class="option-picker__options">
                  <label class="option-pill">
                    <input type="radio" name="part-${i}-${name}" value="${value}" class="visually-hidden" checked>
                    <span class="option-pill__label">${value}</span>
                  </label>
                </div>
              </fieldset>`).join("");
  const image = `<span class="bundle-item__image">${partPicture(part, pick)}</span>`;
  return `
          <div class="bundle-item">
            ${part.slug ? `<a href="produkt.html?p=${part.slug}" class="bundle-item__link" tabindex="-1" aria-hidden="true">${image}</a>` : image}
            <div class="bundle-item__aside">
              <p class="bundle-item__name">${part.slug ? `<a href="produkt.html?p=${part.slug}">${part.name}</a>` : part.name}</p>
              <p class="bundle-item__rating">${starRating(part.rating)}<span>(${part.reviewCount})</span></p>${colorPicker}${choices}${fixed}
            </div>
          </div>`;
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

// Clothing reviews also say how tall the reviewer is and which size fits.
function reviewItem(product, review) {
  const fit = [["Körpergröße", review.height], ["Gekaufte Größe", review.size], ["Übliche Größe", review.usual]].filter(([, value]) => value);
  return `
          <li class="review-item">
            <div class="review-item__meta">
              <p class="review-item__badge"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7"/><path d="M5 8.2l2 2 4-4.4"/></svg>Verifizierter Kauf</p>
              <p class="review-item__name">${review.name}</p>
              ${review.place ? `<p class="review-item__place">${review.place}</p>` : ""}${fit.length ? `
              <dl class="review-item__fit">${fit.map(([term, value]) => `
                <div><dt>${term}:</dt> <dd>${value}</dd></div>`).join("")}
              </dl>` : ""}
            </div>
            <div class="review-item__body">
              ${starRating(review.stars, `${review.stars} von 5 Sternen`)}
              <p class="review-item__product">${product.name}${review.color ? ` ${review.color}` : ""}${review.size ? ` / ${review.size}` : ""}</p>
              <p class="review-item__text">${review.text}</p>
              <p class="review-item__date">${ago(review.days)}</p>
            </div>
          </li>`;
}

function reviewsMarkup(product) {
  // A set has no reviews section (its parts carry the ratings).
  if (product.noReviews) return "";
  // Without any reviews the original only says so.
  if (!product.reviews.length) return `
    <section class="reviews-section" id="bewertungen" aria-labelledby="reviews-title">
      <div class="container">
        <h2 class="visually-hidden" id="reviews-title">Bewertungen</h2>
        <p class="reviews__empty">– Für dieses Produkt wurden noch keine Bewertungen abgegeben –</p>
      </div>
    </section>`;
  return `
    <section class="reviews-section" id="bewertungen" aria-labelledby="reviews-title">
      <div class="container">
        <div class="reviews__summary">
          <h2 class="visually-hidden" id="reviews-title">Bewertungen</h2>
          <p class="reviews__score"><span class="reviews__average">${product.rating.toFixed(2)}</span>${starRating(product.rating)}</p>
          <p class="reviews__basis">Basierend auf ${product.reviewCount === 1 ? "1 Bewertung" : `${product.reviewCount} Bewertungen`}</p>
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
  if (!product.reviews.length) return;
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
const pageParams = new URLSearchParams(location.search);
const slug = pageParams.get("p") || "yogamatte-pure";
const product = productDetails[slug];
const productRoot = document.getElementById("product");

if (!product) {
  productRoot.innerHTML = missingMarkup();
} else {
  // A link can preselect a colour (&farbe=Light Taupe), with a choice
  // (&farbe=Light Taupe / 7 cm, as the zabuton's cards name it; the cork
  // blocks' cards name only the choice) and a size (&groesse=M), e.g. from a
  // category card or the cart. Like the original, a page otherwise opens on
  // the first colour in stock and clothing in its first size in stock.
  const [wantedColor, wantedChoice] = (pageParams.get("farbe") || "").split(" / ");
  // A set (&auswahl=Balsam Green|Light Taupe, one pick per part) works with
  // one "colour" that holds the picks of all its parts.
  const wantedPicks = (pageParams.get("auswahl") || "").split("|");
  let color = product.parts
    ? setColor(product, product.parts.map((part, i) => startPick(part, wantedPicks[i])))
    : product.colors.find((c) => c.name === wantedColor)
    || product.colors.find((c) => !c.soldOut)
    || product.colors[0];
  let size = product.sizes && (product.sizes.find((s) => s === pageParams.get("groesse")) || color.stock[0] || product.sizes[0]);
  let choice = product.choices && (product.choices.values.find((value) => [wantedChoice, wantedColor].includes(value.label)) || product.choices.values[0]);

  document.title = `${product.name} – LotusCraft Student Rebuild`;
  productRoot.innerHTML = productMarkup(product, color, size, choice);
  setupReviews(product);

  const track = productRoot.querySelector(".gallery__track");
  const thumbs = productRoot.querySelector(".gallery__thumbs");
  const badge = productRoot.querySelector(".gallery__badge");
  const colorValue = productRoot.querySelector(".color-picker__value");
  const colorInputs = productRoot.querySelectorAll('input[name="color"]');
  const choiceInputs = productRoot.querySelectorAll('input[name="choice"]');
  const sizeInputs = productRoot.querySelectorAll('input[name="size"]');
  const prices = productRoot.querySelector(".buybox__prices");
  const cartButton = productRoot.querySelector(".buybox__cart");
  const note = productRoot.querySelector(".buybox__note");
  const stock = productRoot.querySelector(".buybox__stock");
  const added = productRoot.querySelector(".buybox__added");
  const sizeChart = productRoot.querySelector(".size-chart");

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

  // A choice can rule out colours (MUDRA PRO: 200 cm only in Anthrazit).
  // Like the original, such combinations are hidden rather than sold out.
  const offered = (c, value) => !value?.without?.includes(c.name);

  // Every picture in the picked colour (and the picked choice's specs).
  function redraw() {
    const specs = specsFor(product, choice);
    badge.textContent = galleryBadge(product, color);
    badge.hidden = !badge.textContent;
    track.innerHTML = galleryItems(product, color, specs);
    thumbs.innerHTML = galleryThumbs(product, color, currentPicture(), specs);
    productRoot.querySelectorAll(".feature__media").forEach((media) => {
      const picture = featurePictures[media.dataset.picture];
      const [pictureColor, pictureSpecs] = featureContext(product, media.dataset.part === undefined ? undefined : Number(media.dataset.part), color, specs);
      media.innerHTML = picture.draw(pictureColor, pictureSpecs);
      media.setAttribute("aria-label", picture.label(pictureSpecs));
    });
  }

  // Buy box texts, price and offered choices for the picked colour (and
  // choice or size).
  function updateBuybox() {
    const soldOut = isSoldOut(color, size);
    if (colorValue) colorValue.textContent = color.name;
    prices.innerHTML = priceMarkup(priceOf(product, color, choice));
    added.textContent = "";
    if (cartButton) {
      const remindable = soldOut && !product.parts;
      cartButton.textContent = cartLabel(remindable);
      note.hidden = !remindable;
      stock.textContent = stockText(soldOut, product);
      stock.classList.toggle("buybox__stock--out", soldOut);
    }
    if (size) {
      productRoot.querySelector(".size-picker__value").textContent = size;
      sizeInputs.forEach((input) => {
        const out = !color.stock.includes(input.value);
        input.closest("label").classList.toggle("option-pill--out", out);
        input.nextElementSibling.lastElementChild.textContent = out ? " (ausverkauft)" : "";
      });
    }
    if (!choice) return;
    productRoot.querySelector(".choice-picker__value").textContent = choice.label;
    colorInputs.forEach((input, i) => (input.closest("label").hidden = !offered(product.colors[i], choice)));
    choiceInputs.forEach((input, i) => (input.closest("label").hidden = !offered(color, product.choices.values[i])));
  }

  // Picking a colour redraws every picture in that colour. Clothing keeps
  // the picked size, as on the original, even if it is sold out in the new colour.
  productRoot.querySelector(".color-picker")?.addEventListener("change", (e) => {
    color = product.colors[Number(e.target.value)];
    redraw();
    updateBuybox();
  });

  // A choice can change the price, the details (the zabuton's height) and
  // the drawings.
  productRoot.querySelector(".choice-picker")?.addEventListener("change", (e) => {
    choice = product.choices.values[Number(e.target.value)];
    productRoot.querySelector("[data-details]").innerHTML = detailsFor(product, choice);
    if (product.choices.values.some((value) => value.specs)) redraw();
    updateBuybox();
  });

  productRoot.querySelector(".size-picker")?.addEventListener("change", (e) => {
    size = e.target.value;
    updateBuybox();
  });

  // A set: every part has its own colour and choices; price and pictures follow.
  const bundle = productRoot.querySelector(".bundle");
  bundle?.addEventListener("change", (e) => {
    const [, index, kind] = e.target.name.match(/^part-(\d+)-(color|choice)$/) || [];
    if (!kind) return;
    const part = product.parts[index];
    const options = kind === "color" ? part.colors : part.choices.values;
    color = setColor(product, color.picks.map((pick, i) => (i === Number(index) ? { ...pick, [kind]: options[Number(e.target.value)] } : pick)));
    // The configurator is drawn anew; keyboard focus stays on the same option.
    bundle.innerHTML = bundleInner(product, color);
    bundle.querySelector(`input[name="${e.target.name}"]:checked`)?.focus();
    redraw();
    updateBuybox();
  });

  // The size chart closes with its button, Escape or a click on the dark
  // backdrop (outside the inner box the click lands on the dialog itself).
  productRoot.querySelector(".size-picker__chart")?.addEventListener("click", () => sizeChart.showModal());
  sizeChart?.addEventListener("click", (e) => {
    if (e.target === sizeChart || e.target.closest(".size-chart__close")) sizeChart.close();
  });

  // Demo cart: adds the picked colour (and size) and opens the cart; nothing
  // is ordered. For a sold-out choice the button only explains that no
  // reminder is stored.
  cartButton?.addEventListener("click", () => {
    if (isSoldOut(color, size)) {
      added.textContent = product.parts
        ? "Nur eine Demo: Diese Auswahl ist nicht auf Lager, es wird nichts bestellt."
        : "Nur eine Demo: In diesem Studentenprojekt gibt es keine Benachrichtigungen, es wird nichts gespeichert.";
      return;
    }
    const variant = product.parts
      ? color.picks.map(pickLabel).filter(Boolean).join(" + ")
      : [color.name, choice?.label, ...(product.fixedOptions || []).map((option) => option.value), size].filter(Boolean).join(" / ");
    const colorParam = [color.name, choice?.label].filter(Boolean).join(" / ");
    const wanted = product.parts
      ? `&auswahl=${encodeURIComponent(color.picks.map(pickLabel).join("|"))}`
      : `${colorParam ? `&farbe=${encodeURIComponent(colorParam)}` : ""}${size ? `&groesse=${size}` : ""}`;
    addToCart({
      id: variant ? `${slug}:${variant}` : slug,
      name: product.name,
      variant,
      hex: color.hex,
      price: priceOf(product, color, choice).price,
      href: `produkt.html?p=${slug}${wanted}`,
    });
    openCart();
    added.textContent = `${product.name}${variant ? ` (${variant})` : ""} liegt im Warenkorb – nur eine Demo, es wird nichts bestellt.`;
    cartButton.textContent = "Hinzugefügt ✓";
    setTimeout(() => (cartButton.textContent = cartLabel(isSoldOut(color, size))), 2000);
  });

  updateBuybox();
}
