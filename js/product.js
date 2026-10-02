// Product page: gallery, colour choice, add to cart, details.
// Which product is shown comes from the URL, e.g. produkt.html?p=yogamatte-pure.
// To add another product page, add an entry here and a `slug` to its card data.

// ---------- Product data ----------
// Name, price, colours, specs and ratings mirror the original shop. The texts
// are written for this student project (not copied from the original).
// `specs` also label the drawn pictures; `gallery` and each feature's
// `picture` pick drawings from `galleryPictures` / `featurePictures` below.

// Accessories under "Verwandte Produkte" (prices from the shop).
const accessories = {
  bag: { name: "Yogatasche PUNE", price: 29.95, shape: "bag", tint: "#c9bcae" },
  strap: { name: "Yogamatten Tragegurt", price: 14.95, shape: "strap", tint: COTTON },
  towel: { name: "Yoga Handtuch", price: 29.95, shape: "towel", tint: "#8f9a8c" },
  spray: { name: "Bio Yogamatten Spray", price: 12.95, shape: "spray", tint: "#e6e1d6" },
  belt: { name: "Yogagurt 100% Bio-Baumwolle", price: 6.49, compareAt: 12.95, shape: "strap", tint: "#8a7f72" },
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
      accessories.bag,
      accessories.strap,
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
      { name: "Marie", place: "Stuttgart, DE", color: "Dark Cranberry", stars: 5, days: 7, text: "Beim Vinyasa sind mir bisher ständig die Hände weggerutscht. Auf der ARISE ist das vorbei." },
      { name: "Sophie", place: "Linz, AT", color: "Balsam Green", stars: 5, days: 9, text: "Fühlt sich weich und trotzdem stabil an. Meine Knie freuen sich über die 4 mm." },
      { name: "David", place: "Hannover, DE", color: "Graphite", stars: 4, days: 13, text: "Top Qualität. Mit 2 kg ist sie mir für den Weg ins Studio etwas schwer, zu Hause ist sie perfekt." },
      { name: "Laura", place: "Nürnberg, DE", color: "Indigo Dust", stars: 5, days: 17, text: "Schön, dass sie in Europa hergestellt wird. Verarbeitung und Grip sind erstklassig." },
      { name: "Tim", place: "Basel, CH", color: "Dark Cranberry", stars: 2, days: 22, text: "Für meinen Geschmack zu schwer und zu fest. Für dynamisches Yoga sicher super, für mich leider nicht das Richtige." },
      { name: "Nora", place: "Graz, AT", color: "Midnight Blue", stars: 5, days: 26, text: "Liegt flach, rollt sich an den Ecken nicht auf und hält bombenfest. Jeden Cent wert." },
    ],
    related: [
      accessories.bag,
      { name: "„Almost Perfect“ Yogamatte ARISE", price: 76.46, compareAt: 89.95, shape: "mat", tint: "#5d7366" },
      accessories.strap,
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
      accessories.towel,
      bestsellers.yoga[2], // Yogamatte ARISE
      accessories.spray,
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
    features: [
      {
        title: "Gut gepolstert, sicher im Stand",
        text: "5 mm geben Knien und Handgelenken spürbar Polster. Trotzdem steht die MUDRA stabil genug für Balancehaltungen – ideal, wenn du gerade mit Yoga anfängst oder sanfte Stile magst.",
        picture: "studio",
      },
      {
        title: "Leicht genug für jeden Weg",
        text: "Mit rund 1,35 kg ist die MUDRA eine der leichtesten Matten im Sortiment. Aufgerollt unter dem Arm oder am Tragegurt nimmst du sie mühelos mit ins Studio, in den Park oder zu Freund:innen.",
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
    ],
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
      accessories.bag,
      { name: "Yogamatte MUDRA PRO", price: 99.95, shape: "mat", tint: "#3d3d3f" },
      accessories.belt,
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

// Explicit `underside`, else PURE's rule: matte colours match, smooth ones are black.
const underside = (color) => color.underside || (color.matte ? color.hex : "#2b2a28");

// Surface texture over the visible top of the mat (`path`): fine grain on
// PURE's matte colours, a waffle grid on mats with `specs.texture: "waffle"`.
const textures = {
  grain: '<circle cx="1" cy="1" r=".6" fill="rgba(255,255,255,.14)"/>',
  waffle: '<path d="M0 .5H4M.5 0V4" stroke="rgba(0,0,0,.13)"/>',
};

function texture(color, specs, path) {
  const kind = color.matte ? "grain" : specs.texture;
  if (!kind) return "";
  const id = `texture-${++patternCount}`;
  return `<defs><pattern id="${id}" width="4" height="4" patternUnits="userSpaceOnUse">${textures[kind]}</pattern></defs>
       <path d="${path}" fill="url(#${id})"/>`;
}

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

function topPicture(color, specs) {
  return `
    <svg viewBox="0 0 200 250" aria-hidden="true">
      <rect width="200" height="250" fill="${PHOTO_BG}"/>
      <rect x="52" y="22" width="96" height="180" rx="3" fill="${color.hex}"/>
      ${texture(color, specs, "M52 22h96v180H52z")}
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

// Cut edge of the mat: the side gets thicker with `specs.mm`
// (top layer darkened, underside in its own colour).
function layersPicture(color, specs) {
  const side = Math.max(4, Math.round(specs.mm * 4));
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
  const side = Math.max(5, Math.round(specs.mm * 5));
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
      <text x="150" y="176" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">${specs.material} · ${decimal(specs.mm)} mm</text>
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
      <text x="165" y="176" text-anchor="middle" font-size="11" fill="#5f5c52" font-family="Hanken Grotesk, sans-serif">ca. ${specs.weight} · ${specs.length} × ${specs.width} cm</text>
    </svg>`;
}

// A wide crop of a drawn scene (the scene backdrop reaches past its frame).
const wideScene = (color, pose, wall, floor) => sceneSvg({ pose, wall, floor, mat: color.hex }, "-40 -2 180 110");

// `label` gets the product's specs and returns the picture's text alternative.
const featurePictures = {
  grip: { label: () => "Figur im herabschauenden Hund auf der Matte", draw: (color) => wideScene(color, "dog", "#e4ded5", "#b49a7e") },
  size: { label: (specs) => `Matte von oben, ${specs.length} × ${specs.width} cm`, draw: sizeWidePicture },
  layers: { label: (specs) => `Schichtaufbau: ${specs.material}, ${decimal(specs.mm)} mm`, draw: layersWidePicture },
  styles: { label: () => "Figur im Baum auf der Matte", draw: (color) => wideScene(color, "tree", "#dcdcd2", "#9c8a74") },
  reversible: { label: () => "Matte mit umgeschlagener Ecke: Ober- und Unterseite", draw: reversibleWidePicture },
  forest: { label: () => "Figur im Sitzen auf der Matte im Wald", draw: (color) => wideScene(color, "seated", "#b4bea6", "#86735a") },
  folded: { label: (specs) => `Gefaltete Matte neben einem Rucksack, ${specs.weight}`, draw: foldedWidePicture },
  park: { label: () => "Figur im Krieger auf der Matte im Park", draw: (color) => wideScene(color, "warrior", "#d8e4d2", "#93a874") },
  beach: { label: () => "Figur im Baum auf der Matte am Strand", draw: (color) => wideScene(color, "tree", "#cfe0e8", "#e2d2b0") },
  studio: { label: () => "Figur im Ausfallschritt auf der Matte im Studio", draw: (color) => wideScene(color, "lunge", "#ece8e1", "#c4a886") },
  carry: { label: (specs) => `Aufgerollte Matte am Tragegurt, ca. ${specs.weight}`, draw: carryWidePicture },
  calm: { label: () => "Figur im Sitzen auf der Matte im Studio", draw: (color) => wideScene(color, "seated", "#e6e2dc", "#c4a886") },
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
};

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
          <div class="gallery__item" role="img" aria-label="${product.name} in ${color.name}, ${picture.label}">${picture.draw(color, product.specs)}</div>`;
  }).join("");
}

function galleryThumbs(product, color, current = 0) {
  return product.gallery.map((key, i) => `
          <button class="gallery__thumb" data-index="${i}" aria-label="Bild ${i + 1} von ${product.gallery.length} zeigen"${i === current ? ' aria-current="true"' : ""}>${galleryPictures[key].draw(color, product.specs)}</button>`).join("");
}

function detailsMarkup(specs) {
  return `
        <dl class="facts">
          <dt>Material</dt><dd>${specs.material}</dd>
          <dt>Maße (L × B)</dt><dd>${specs.length} × ${specs.width} cm</dd>
          <dt>Dicke</dt><dd>${cm(specs.mm)}</dd>
          <dt>Gewicht</dt><dd>${specs.weight}</dd>
          <dt>Herkunft</dt><dd>${specs.origin}</dd>
          <dt>Hinweis</dt><dd>Nachbau für ein Studentenprojekt – kein echtes Produkt, daher keine Hersteller- oder Bestellangaben.</dd>
        </dl>`;
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

  const accordion = [
    ["Beschreibung", product.description],
    ["Details", detailsMarkup(product.specs)],
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
  const cartButton = productRoot.querySelector(".buybox__cart");
  const note = productRoot.querySelector(".buybox__note");
  const stock = productRoot.querySelector(".buybox__stock");
  const added = productRoot.querySelector(".buybox__added");
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

  // Picking a colour redraws every picture in that colour and shows
  // whether it is in stock.
  productRoot.querySelector(".color-picker").addEventListener("change", (e) => {
    color = product.colors[Number(e.target.value)];
    colorValue.textContent = color.name;
    badge.hidden = !color.matte;
    track.innerHTML = galleryItems(product, color);
    thumbs.innerHTML = galleryThumbs(product, color, currentPicture());
    productRoot.querySelectorAll(".feature__media").forEach((media) => {
      media.innerHTML = featurePictures[media.dataset.picture].draw(color, product.specs);
    });
    cartButton.textContent = cartLabel(color);
    note.hidden = !color.soldOut;
    stock.textContent = stockText(color);
    stock.classList.toggle("buybox__stock--out", Boolean(color.soldOut));
    added.textContent = "";
  });

  // Demo cart: adds the picked colour and opens the cart; nothing is ordered.
  // For a sold-out colour the button only explains that no reminder is stored.
  cartButton.addEventListener("click", () => {
    if (color.soldOut) {
      added.textContent = "Nur eine Demo: In diesem Studentenprojekt gibt es keine Benachrichtigungen, es wird nichts gespeichert.";
      return;
    }
    addToCart({
      id: `${slug}:${color.name}`,
      name: product.name,
      variant: color.name,
      hex: color.hex,
      price: product.price,
      href: `produkt.html?p=${slug}&farbe=${encodeURIComponent(color.name)}`,
    });
    openCart();
    added.textContent = `${product.name} (${color.name}) liegt im Warenkorb – nur eine Demo, es wird nichts bestellt.`;
    cartButton.textContent = "Hinzugefügt ✓";
    setTimeout(() => (cartButton.textContent = cartLabel(color)), 2000);
  });

  // A link can preselect a colour, e.g. from the category page (&farbe=Light Taupe).
  const wanted = product.colors.findIndex((c) => c.name === new URLSearchParams(location.search).get("farbe"));
  if (wanted > 0) productRoot.querySelectorAll(".color-picker input")[wanted].click();
}
