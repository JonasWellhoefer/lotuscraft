// Info pages: footer links, guides, quiz and account, all on seite.html?s=<name>.
// One template; the content is in `pages` below. Every text is written for this
// student project (nothing is copied from the original shop), and the pages say
// so. Tables are built from the product data in product.js.

const NOTE = "Studentenprojekt: Dieser Nachbau ist nicht der echte Lotuscrafts-Shop. Der Text auf dieser Seite ist selbst geschrieben und hat keine rechtliche Wirkung.";
const GUIDE_NOTE = "Studentenprojekt: Die Zahlen stammen von den Produktseiten dieses Nachbaus, die Empfehlungen sind selbst geschrieben und unverbindlich.";

const pageLink = (name, text) => `<a href="seite.html?s=${name}">${text}</a>`;
const shopLink = (key, text) => `<a href="kategorie.html?k=${key}">${text}</a>`;
const num = (value) => String(value).replace(".", ",");

// ---------- Tables from the product data ----------
const scaleOf = (product, label) => (product.ratingScales || []).find(([name]) => name === label)?.[1];
const productCell = (slug) => productLink(slug, productDetails[slug].name);
const ratingCell = (product) => `${num(product.rating)} (${product.reviewCount})`;

const tables = {
  mats() {
    const slugs = ["yogamatte-mudra-studio", "yogamatte-mudra-studio-xl", "yogamatte-arise-travel", "yogamatte-pure", "yogamatte-arise",
      "yogamatte-mudra-pro", "yogamatte-arise-cork", "yogamatte-schurwolle"];
    return {
      label: "Yogamatten im Vergleich, nach Preis sortiert",
      head: ["Matte", "Preis", "Material", "Länge × Breite", "Dicke", "Gewicht", "Halt", "Dämpfung", "Herkunft"],
      rows: slugs.map((slug) => {
        const product = productDetails[slug];
        const specs = product.specs;
        return [productCell(slug), formatPrice(product.price), specs.short, sizeText(specs), `${num(specs.mm)}\u00a0mm`, specs.weight,
          num(scaleOf(product, "Rutschfestigkeit")), num(scaleOf(product, "Dämpfung")), specs.origin || "–"];
      }),
      note: "Halt und Dämpfung sind die Bewertungen der Kund:innen von 1 bis 5 (Beispieldaten des Nachbaus).",
    };
  },
  cushions() {
    const slugs = ["meditationskissen-lotus-klein-h-10-cm", "meditationskissen-lotus-h-15cm", "meditationskissen-lotus-h-15cm-ohne-bestickung",
      "meditationskissen-lotus-hoch-h-20cm", "zafu-meditationskissen-zen", "zafu-meditationskissen-zen-kapok", "yogakissen-halbmond-shanti"];
    return {
      label: "Meditationskissen im Vergleich",
      head: ["Kissen", "Preis", "Sitzhöhe", "Maße", "Füllung", "Bewertung"],
      rows: slugs.map((slug) => {
        const product = productDetails[slug];
        const specs = product.specs;
        return [productCell(slug), formatPrice(product.price), `${specs.seat} cm`, `${specs.size} cm`, specs.filling, ratingCell(product)];
      }),
    };
  },
  bolsters() {
    const slugs = ["yogarolle-restorative-o24-cm", "yoga-bolster-restorative-l", "yoga-bolster-restorative-s", "nackenrolle"];
    return {
      label: "Yogarollen und Bolster im Vergleich",
      head: ["Produkt", "Preis", "Maße", "Füllung", "Bewertung"],
      rows: slugs.map((slug) => {
        const product = productDetails[slug];
        const [length, width, height] = product.specs.dimensions;
        const size = product.specs.round ? `${length} cm lang, Ø ${width} cm` : `${length} × ${width} × ${height} cm`;
        return [productCell(slug), formatPrice(product.price), size, product.specs.filling, ratingCell(product)];
      }),
    };
  },
};

function tableMarkup({ label, head, rows, note }) {
  return `
      <div class="page__table" role="region" aria-label="${label}" tabindex="0">
        <table>
          <thead><tr>${head.map((cell) => `<th scope="col">${cell}</th>`).join("")}</tr></thead>
          <tbody>${rows.map((row) => `
            <tr>${row.map((cell, i) => (i === 0 ? `<th scope="row">${cell}</th>` : `<td>${cell}</td>`)).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>${note ? `
      <p class="page__table-note">${note}</p>` : ""}`;
}

// ---------- The quiz ----------
// Everything stays on this page: the answers are not stored or sent anywhere.
const QUIZ = [
  { key: "style", title: "Wie übst du am liebsten?", options: [
    ["calm", "Ruhig und langsam (Yin, Hatha, Restorative)"], ["dynamic", "Dynamisch und kraftvoll (Vinyasa, Power Yoga)"], ["mixed", "Von allem etwas"]] },
  { key: "place", title: "Wo übst du meistens?", options: [
    ["home", "Zu Hause"], ["studio", "Im Studio"], ["travel", "Unterwegs und auf Reisen"]] },
  { key: "wish", title: "Was ist dir am wichtigsten?", options: [
    ["cushion", "Viel Dämpfung für Knie und Handgelenke"], ["grip", "Maximaler Halt, auch wenn ich schwitze"],
    ["light", "Wenig Gewicht"], ["natural", "Natürliche Materialien"]] },
  { key: "budget", title: "Wie viel möchtest du ausgeben?", options: [
    ["60", "Bis 60 €"], ["100", "Bis 100 €"], ["any", "Das ist mir egal"]] },
];

// How well each mat fits each answer (0–3), and why it is suggested.
const QUIZ_MATS = [
  { slug: "yogamatte-mudra-studio", why: "Gut gepolstert, leicht und günstig – ideal für den Einstieg und alle Stile.",
    fit: { calm: 2, dynamic: 1, mixed: 3, home: 3, studio: 2, travel: 1, cushion: 3, grip: 1, light: 2, natural: 0 } },
  { slug: "yogamatte-mudra-studio-xl", why: "Wie die MUDRA, nur länger: Platz für große Menschen.",
    fit: { calm: 2, dynamic: 1, mixed: 3, home: 3, studio: 2, travel: 0, cushion: 3, grip: 1, light: 1, natural: 0 } },
  { slug: "yogamatte-mudra-pro", why: "Robust und für Studios geeignet, auch bei kraftvollen Workouts.",
    fit: { calm: 1, dynamic: 2, mixed: 3, home: 2, studio: 3, travel: 0, cushion: 2, grip: 2, light: 1, natural: 0 } },
  { slug: "yogamatte-pure", why: "Griffige PU-Oberfläche für dynamische Stile, dazu Dämpfung durch Naturkautschuk.",
    fit: { calm: 1, dynamic: 3, mixed: 3, home: 3, studio: 2, travel: 0, cushion: 2, grip: 3, light: 1, natural: 0 } },
  { slug: "yogamatte-arise", why: "Naturkautschuk mit extra Halt, beidseitig nutzbar.",
    fit: { calm: 2, dynamic: 3, mixed: 3, home: 3, studio: 2, travel: 0, cushion: 1, grip: 3, light: 1, natural: 3 } },
  { slug: "yogamatte-arise-travel", why: "Faltbar und nur etwa 1 kg leicht – die Matte für unterwegs.",
    fit: { calm: 1, dynamic: 2, mixed: 2, home: 1, studio: 0, travel: 3, cushion: 0, grip: 3, light: 3, natural: 3 } },
  { slug: "yogamatte-arise-cork", why: "Naturkork, der bei Schweiß sogar besser greift.",
    fit: { calm: 1, dynamic: 3, mixed: 2, home: 2, studio: 1, travel: 0, cushion: 2, grip: 3, light: 1, natural: 3 } },
  { slug: "yogamatte-schurwolle", why: "Warm und weich für Yin Yoga, Meditation und Atemübungen.",
    fit: { calm: 3, dynamic: 0, mixed: 1, home: 3, studio: 0, travel: 0, cushion: 3, grip: 0, light: 0, natural: 3 } },
];

function quizMarkup() {
  return `
      <form class="quiz" novalidate>${QUIZ.map((question) => `
        <fieldset class="quiz__question">
          <legend>${question.title}</legend>
          <div class="quiz__options">${question.options.map(([value, label]) => `
            <label class="option-pill">
              <input type="radio" name="${question.key}" value="${value}" class="visually-hidden">
              <span class="option-pill__label">${label}</span>
            </label>`).join("")}
          </div>
        </fieldset>`).join("")}
        <button class="btn btn--primary" type="submit">Matte vorschlagen</button>
        <p class="quiz__status" role="status"></p>
        <div class="quiz__result" hidden></div>
      </form>`;
}

function quizResult(answers) {
  const scored = QUIZ_MATS.map((mat) => {
    const price = productDetails[mat.slug].price;
    const over = answers.budget !== "any" && price > Number(answers.budget);
    return { ...mat, price, over, score: mat.fit[answers.style] + mat.fit[answers.place] + mat.fit[answers.wish] - (over ? 4 : 0) };
  }).sort((a, b) => b.score - a.score || a.price - b.price);
  // Suggestions stay within the budget as long as there are two mats that do.
  const affordable = scored.filter((mat) => !mat.over);
  const [best, next] = affordable.length >= 2 ? affordable : scored;
  const card = (mat) => `<a href="produkt.html?p=${mat.slug}" class="quiz__mat">${productDetails[mat.slug].name}</a> – ${formatPrice(mat.price)}`;
  return `
        <h2>Unser Vorschlag</h2>
        <p class="quiz__best">${card(best)}</p>
        <p>${best.why}</p>
        <p class="quiz__next">Auch passend: ${card(next)}. ${next.why}</p>
        <button class="btn btn--secondary quiz__again" type="button">Nochmal</button>`;
}

// ---------- Account (a demo: no sign-in, no password) ----------
const clearMarkup = () => `
      <button class="btn btn--secondary" type="button" data-clear-cart>Warenkorb in diesem Browser löschen</button>
      <p class="page__status" role="status"></p>`;
const cartMarkup = () => `
      <button class="btn btn--secondary" type="button" data-open-cart>Warenkorb öffnen</button>`;

// ---------- Content ----------
const ctaMarkup = (buttons) => `
      <p class="page__cta">${buttons.map(([href, label, secondary]) => `<a href="${href}" class="btn ${secondary ? "btn--secondary" : "btn--primary"}">${label}</a>`).join("")}</p>`;

const pages = {
  "hilfe-kontakt": {
    title: "Hilfe & Kontakt",
    lead: "Fragen zu Produkten, Bestellung oder Pflege? In einem echten Shop wärst du hier richtig.",
    blocks: [
      { h: "Was es hier gibt", html: "<p>In diesem Studentenprojekt gibt es keinen Kundenservice: keine E-Mail-Adresse, keine Telefonnummer und keinen Chat. Nachrichten würden hier niemanden erreichen, deshalb gibt es auch kein Kontaktformular.</p>" },
      { h: "Schneller zur Antwort", list: [
        `${pageLink("faq", "Die FAQ")} beantwortet Fragen zum Nachbau, zu den Produkten und zur Pflege.`,
        `${pageLink("versand", "Versandkosten")} zeigt, wie Lieferung und Preise im Shop angegeben werden.`,
        `${pageLink("yogamatten-vergleich", "Der Mattenvergleich")} und ${pageLink("quiz", "das Quiz")} helfen bei der Wahl der Yogamatte.`,
      ] },
      { h: "Wobei ein Kundenservice helfen würde", list: [
        "Die richtige Matte oder das richtige Kissen finden",
        "Lieferung, Rücksendung und Umtausch",
        "Pflege und Reinigung deiner Produkte",
        "Fragen zu Sets, Gutscheinen und Größen",
      ] },
      { cta: [["seite.html?s=faq", "FAQ lesen"], ["kategorie.html?k=yoga", "Zum Shop", true]] },
    ],
  },

  faq: {
    title: "FAQ",
    lead: "Antworten auf häufige Fragen – zum Nachbau und zu den Produkten.",
    blocks: [
      { h: "Rund um das Studentenprojekt", faq: [
        ["Kann ich hier wirklich bestellen?", "<p>Nein. Der Warenkorb ist eine Demo: Er merkt sich deine Auswahl nur in diesem Browser. „Zur Kasse“ erklärt, dass die Demo dort endet. Es wird nichts bestellt, bezahlt oder verschickt.</p>"],
        ["Wo wird mein Warenkorb gespeichert?", `<p>Nur im Speicher deines Browsers, nicht auf einem Server. Auf der Seite ${pageLink("cookies", "Cookie Einstellungen")} kannst du ihn löschen.</p>`],
        ["Sind die Bilder echte Produktfotos?", "<p>Nein. Alle Bilder sind selbst gezeichnete Platzhalter in den Farben der Produkte.</p>"],
        ["Sind die Bewertungen echt?", "<p>Nein. Die Bewertungen sind erfunden und als Beispiele gekennzeichnet. Sternezahl und Anzahl entsprechen dem Stand des Originals am 4. Oktober 2026.</p>"],
        ["Stimmen Preise, Farben und Lagerstand?", "<p>Sie wurden dem Original nachgebaut (Stand 4. Oktober 2026), aber ohne Gewähr. „Ausverkauft“ heißt hier nur: Im Original war es zu diesem Zeitpunkt ausverkauft.</p>"],
      ] },
      { h: "Produkte und Pflege", faq: [
        ["Wie reinige ich meine Yogamatte?", "<p>Mit einem weichen Tuch und einer Mischung aus Wasser und Apfelessig (1:1) abwischen, auch ein Matten-Spray eignet sich. Keine Seife, nicht in die Waschmaschine, und die Matte trocknen lassen, bevor du sie aufrollst. Unter „Pflege“ auf jeder Produktseite stehen die Hinweise zum Produkt.</p>"],
        ["Welche Matte passt zu mir?", `<p>Das hängt von Yogastil und Ort ab. ${pageLink("yogamatten-vergleich", "Der Vergleich")} zeigt Maße, Material und Bewertungen nebeneinander, ${pageLink("quiz", "das Quiz")} schlägt dir eine Matte vor.</p>`],
        ["Was bedeutet „Almost Perfect“?", `<p>Geprüfte Einzelstücke mit kleinen Schönheitsfehlern, 15 % günstiger. Funktion und Qualität sind wie bei der regulären Matte. ${shopLink("unperfekte-produkte", "Zu den Almost-Perfect-Matten")}</p>`],
        ["Wie funktionieren die Sets?", `<p>Jedes Teil eines Sets wählst du einzeln in Farbe und Größe. Das Set kostet 10 % weniger als die Teile zusammen, der Preis passt sich deiner Auswahl an. ${shopLink("yoga-sets", "Zu den Yoga-Sets")}</p>`],
        ["Wie funktioniert der Gutschein?", `<p>Du wählst einen Wert von 20 bis 200 €. In diesem Nachbau gibt es keine echten Gutscheine. ${productLink("gutschein", "Zur Gutscheinkarte")}</p>`],
        ["Was heißt „Nicht auf Lager“?", "<p>Die gewählte Variante war im Original gerade nicht lieferbar. „Benachrichtige mich“ speichert hier nichts, es kommt keine E-Mail.</p>"],
      ] },
    ],
  },

  retouren: {
    title: "Retouren & Umtausch",
    lead: "So sähe eine Rücksendung in einem echten Shop aus – hier nur als Beispiel.",
    blocks: [
      { h: "Hier gibt es nichts zurückzuschicken", html: "<p>Im Studentenprojekt kann man nichts bestellen, also auch nichts zurückschicken. Diese Seite zeigt nur, wo die Information in einem echten Shop stünde.</p>" },
      { h: "Beispiel: So läuft eine Rücksendung", ordered: true, list: [
        "Bestellung heraussuchen und die Rücksendung anmelden.",
        "Ware sauber und möglichst originalverpackt zurücksenden.",
        "Nach dem Eingang prüft der Shop die Ware und erstattet den Betrag.",
      ] },
      { h: "Und danach?", html: `<p>Zurückgeschickte, geprüfte Matten können als „Almost Perfect“ weiterverkauft werden. ${shopLink("unperfekte-produkte", "Zu den Matten mit kleinen Schönheitsfehlern")}</p>` },
    ],
  },

  versand: {
    title: "Versandkosten",
    lead: "Kostenloser Versand ab 69 €.",
    blocks: [
      { h: "Was der Shop anzeigt", list: [
        "Im Warenkorb zeigt ein Balken, wie viel bis zum kostenlosen Versand fehlt (ab 69 €).",
        "Auf den Produktseiten steht „Auf Lager: In 1-3 Tagen bei dir“, bei der Gutscheinkarte „Versand sofort per Email“.",
        "Die Preise sind Endpreise inklusive Mehrwertsteuer, die Versandkosten kommen laut Anzeige dazu.",
      ] },
      { h: "Was hier wirklich passiert", html: "<p>Nichts wird versendet. Die Angaben stammen vom Original (Stand 4. Oktober 2026) und sind nur nachgebaut. Wie hoch die Versandkosten in einzelnen Ländern sind, steht deshalb hier nicht.</p>" },
      { h: "Zahlungsarten", html: "<p>Die Symbole im Footer und in der Kaufbox sind neutrale Platzhalter-Icons, keine Marken-Logos. Bezahlt werden kann in diesem Nachbau nichts.</p>" },
    ],
  },

  widerruf: {
    title: "Widerrufsbelehrung",
    lead: "Hier steht in einem echten Shop das gesetzliche Widerrufsrecht.",
    blocks: [
      { h: "Was hier gilt", html: "<p>In diesem Studentenprojekt gibt es keine Verträge, also nichts zu widerrufen.</p>" },
      { h: "Was an dieser Stelle stünde", list: [
        "Wie lange und ab wann ein Kauf widerrufen werden kann",
        "Wie der Widerruf erklärt wird",
        "Was nach dem Widerruf passiert (Rücksendung, Erstattung)",
        "Ein Muster-Widerrufsformular",
      ] },
      { h: "Hinweis", html: "<p>Solche Texte schreiben Händler:innen nach geltendem Recht. Ein Studentenprojekt braucht sie nicht und kann sie nicht ersetzen.</p>" },
    ],
  },

  "vertrag-widerrufen": {
    title: "Vertrag widerrufen",
    lead: "Im Original führt dieser Link zu einem Online-Formular. Hier gibt es bewusst keins.",
    blocks: [
      { h: "Warum kein Formular?", html: `<p>Ein solches Formular würde Name, Bestellnummer und E-Mail-Adresse abfragen. Dieses Projekt sammelt keine Daten, und es gibt keine Bestellungen, die du widerrufen könntest. Mehr dazu unter ${pageLink("datenschutz", "Datenschutz")}.</p>` },
      { cta: [["index.html", "Zur Startseite"], ["seite.html?s=widerruf", "Zur Widerrufsbelehrung", true]] },
    ],
  },

  agb: {
    title: "AGB",
    lead: "Allgemeine Geschäftsbedingungen regeln, wie ein Kauf in einem Shop zustande kommt.",
    blocks: [
      { h: "Was hier gilt", html: "<p>Nichts: Dieses Projekt verkauft nichts. Es gibt keinen Vertragspartner und keine Bedingungen, denen du zustimmen müsstest.</p>" },
      { h: "Typische Themen in echten AGB", list: [
        "Geltungsbereich und Vertragspartner",
        "Wie ein Vertrag zustande kommt",
        "Lieferbedingungen und Lieferzeiten",
        "Bezahlung und Zahlungsarten",
        "Widerrufsrecht",
        "Eigentumsvorbehalt",
        "Transportschäden",
        "Gewährleistung und Garantien",
      ] },
    ],
  },

  datenschutz: {
    title: "Datenschutz",
    lead: "Kurz und ehrlich: was dieses Projekt über dich speichert.",
    blocks: [
      { h: "Kurz gesagt", html: "<p>Dieses Projekt sammelt keine personenbezogenen Daten, setzt keine Cookies und enthält keine Tracker oder Analysewerkzeuge.</p>" },
      { h: "Was in deinem Browser gespeichert wird", html: `<p>Nur dein Warenkorb: ein Eintrag namens <code>lotuscraft-cart</code> im lokalen Speicher des Browsers. Er enthält Produkt, Auswahl und Preis, bleibt auf deinem Gerät und wird nie übertragen. Auf ${pageLink("cookies", "Cookie Einstellungen")} kannst du ihn löschen.</p>` },
      { h: "Schriften", html: "<p>Die Schriften Hanken Grotesk und Playfair Display lädt dein Browser beim Öffnen der Seite von Google Fonts. Dabei sieht Google technisch deine IP-Adresse. Ohne Internetverbindung zeigt der Browser Ersatzschriften, die Seite funktioniert trotzdem.</p>" },
      { h: "Formulare", html: "<p>Das Newsletter-Feld im Footer ist eine Demo: Es sendet und speichert nichts. Es gibt kein Kontaktformular, kein Konto und keine Anmeldung.</p>" },
      { h: "Was ein echter Shop hier erklären müsste", list: [
        "Welche Daten bei Bestellung, Versand und Zahlung verarbeitet werden",
        "An wen sie weitergegeben werden",
        "Wie lange sie gespeichert werden",
        "Welche Rechte du hast (Auskunft, Löschung, Widerspruch)",
      ] },
    ],
  },

  cookies: {
    title: "Cookie Einstellungen",
    lead: "Diese Seite setzt keine Cookies.",
    blocks: [
      { h: "Was gespeichert wird", html: `<p>Nur dein Warenkorb, im lokalen Speicher deines Browsers (<code>lotuscraft-cart</code>). Er hilft nur dabei, dass deine Auswahl beim Wechsel zwischen den Seiten erhalten bleibt. Mehr dazu unter ${pageLink("datenschutz", "Datenschutz")}.</p>` },
      { h: "Gespeicherte Daten löschen", html: "<p>Mit einem Klick ist der Warenkorb in diesem Browser leer.</p>", clear: true },
    ],
  },

  impressum: {
    title: "Impressum",
    lead: "Wer hinter diesem Projekt steckt – und wer nicht.",
    blocks: [
      { h: "Ein nichtkommerzielles Studentenprojekt", html: "<p>LotusCraft Student Rebuild ist eine Übungsarbeit aus einem UI-Kurs. Es gibt kein Unternehmen, keine Anschrift, keine E-Mail-Adresse und keinen Verkauf. Texte und Zeichnungen stammen von den Autor:innen des Projekts.</p>" },
      { h: "Das Original", html: "<p>Name, Marke und Aufbau des echten Shops gehören den jeweiligen Rechteinhaber:innen. Fotos, Videos, Logos und Kund:innenbewertungen des Originals wurden nicht übernommen.</p>" },
    ],
  },

  "ueber-uns": {
    title: "Über uns",
    lead: "Das hier ist ein Studentenprojekt.",
    blocks: [
      { h: "Ein Kursprojekt", html: "<p>LotusCraft Student Rebuild ist ein Studentenprojekt aus einem UI-Kurs: Die Oberfläche eines bestehenden Yoga-Shops wird Seite für Seite nachgebaut, um zu lernen, wie Layouts, Menüs, Filter und Warenkörbe funktionieren.</p>" },
      { h: "Was nachgebaut wurde", list: () => [
        "Die Startseite mit Bestsellern, Sets und Bewertungen",
        `${Object.keys(categories).length} Kategorieseiten mit Filtern und Sortierung`,
        `${Object.keys(productDetails).length} Produktseiten mit Farb-, Größen- und Optionsauswahl`,
        "Menüs, Suche und einen Warenkorb als Demo",
        "Diese Info-Seiten, Vergleiche und ein Quiz",
      ] },
      { h: "Was bewusst anders ist", list: [
        "Alle Bilder sind selbst gezeichnet, es gibt keine Fotos, Videos oder Logos des Originals.",
        "Texte und Beispielbewertungen sind eigene Texte.",
        "Bestellen, bezahlen und anmelden geht nicht; die Demo-Funktionen sagen das auch.",
        "Der schwarze Hinweisbalken und der Zusatz „Student Rebuild“ bleiben immer sichtbar.",
      ] },
      { h: "Wie es gebaut ist", html: "<p>Mit HTML, CSS und JavaScript, ohne Framework und ohne Build-Schritt. Die Seiten laufen per Doppelklick direkt aus dem Ordner. Preise, Farben und Maße stammen vom Original (Stand 4. Oktober 2026).</p>" },
    ],
  },

  blog: {
    title: "Blog",
    lead: "Vier Beispielbeiträge – selbst geschrieben, damit die Seite nicht leer bleibt.",
    blocks: [
      { cards: [
        { tag: "Beispielbeitrag", title: "Fünf Minuten Atmen am Morgen", text: "Setz dich bequem hin, auf ein Kissen oder an den Rand eines Stuhls. Atme vier Zähler lang durch die Nase ein und sechs Zähler lang durch den Mund aus. Wiederhole das fünf Minuten und spüre, wie der Atem ruhiger wird. Wer mag, legt eine Hand auf den Bauch." },
        { tag: "Beispielbeitrag", title: "So pflegst du deine Yogamatte", text: "Wische die Matte nach dem Üben mit einem weichen, leicht feuchten Tuch ab. Gegen Gerüche hilft Wasser mit Apfelessig (1:1). Seife und Waschmaschine sind tabu. Lass die Matte vor dem Aufrollen trocknen und schütze sie vor direkter Sonne." },
        { tag: "Beispielbeitrag", title: "Welche Sitzhöhe passt zu mir?", text: `Sitzen deine Knie höher als die Hüften, ist das Kissen zu niedrig. Ein höheres Kissen kippt das Becken nach vorn und richtet den Rücken auf. Probiere 10, 15 und 20 cm aus und nimm das Kissen, auf dem du am längsten entspannt bleibst. Mehr im ${pageLink("guide-kissen", "Produktguide")}.` },
        { tag: "Beispielbeitrag", title: "Yin Yoga am Abend: drei Haltungen", text: "Schmetterling (Fußsohlen aneinander, vorbeugen), Kind (Stirn auf ein Bolster) und Beine an der Wand: je drei bis fünf Minuten, ohne Anstrengung. Bolster und Decke helfen beim Loslassen. Wenn etwas schmerzt, gehst du heraus." },
      ] },
    ],
  },

  nachhaltigkeit: {
    title: "Nachhaltigkeit",
    lead: "Was auf den Produktseiten zu Material, Siegeln und Herkunft steht – kurz zusammengefasst.",
    blocks: [
      { h: "Natürliche Materialien", html: "<p>Viele Produkte bestehen aus Naturmaterialien: Matten aus Naturkautschuk, Kork oder Schurwolle, Kissen und Decken aus Bio-Baumwolle, Füllungen aus Dinkelspelz oder Kapok.</p>" },
      { h: "Siegel", html: "<p>Bio-Baumwolle ist nach GOTS (Global Organic Textile Standard) zertifiziert, viele Produkte sind nach OEKO-TEX® STANDARD 100 auf Schadstoffe geprüft. Welches Siegel zu welchem Produkt gehört, steht unter „Nachhaltigkeit“ auf der jeweiligen Produktseite.</p>" },
      { h: "Recycling und Verpackung", html: "<p>Die ARISE enthält 15 % recycelten Latex, bei der ARISE CORK ist der Naturkautschuk zu 15 % recycelt. Verpackt wird ohne PVC und ohne erdölbasierte Kunststoffe.</p>" },
      { h: "Hergestellt in Europa", html: "<p>Viele Produkte entstehen in der EU, etwa in Spanien und Deutschland. Das hält Lieferketten kurz.</p>" },
      { h: "Ein zweites Leben", html: `<p>Geprüfte Rücksendungen mit kleinen Schönheitsfehlern gibt es als „Almost Perfect“ zum reduzierten Preis. ${shopLink("unperfekte-produkte", "Zu den Matten")}</p>` },
    ],
    note: "Studentenprojekt: Diese Angaben stammen von den Produktseiten dieses Nachbaus und wurden nicht unabhängig geprüft.",
  },

  store: {
    title: "Store Wien",
    lead: "Einen echten Laden gibt es in diesem Studentenprojekt nicht.",
    blocks: [
      { h: "Kein Store, keine Adresse", html: "<p>Adresse und Öffnungszeiten stehen hier bewusst nicht. Der Nachbau hat kein Geschäft, nur eine Webseite.</p>" },
      { cta: [["kategorie.html?k=yoga", "Im Shop stöbern"]] },
    ],
  },

  jobs: {
    title: "Jobs @ LotusCraft",
    lead: "Keine offenen Stellen – dies ist ein Studentenprojekt.",
    blocks: [
      { h: "Mitmachen?", html: "<p>Es gibt kein Unternehmen, das jemanden einstellen könnte. Wer am Nachbau mitarbeiten möchte, findet den Weg in der Projektbeschreibung (README) im Projektordner.</p>" },
    ],
  },

  onlinekurse: {
    title: "Online Yogakurse",
    lead: "Vier Themen, die ein Kursbereich abdecken könnte – hier nur beschrieben.",
    blocks: [
      { cards: [
        { title: "Yoga Basics", text: "Grundhaltungen und einfache Abläufe für den Einstieg, ruhig erklärt und in deinem Tempo." },
        { title: "Atemübungen", text: "Kurze Übungen für den Alltag: ein paar Minuten, die Ruhe in den Tag bringen." },
        { title: "Yin Yoga", text: "Lange, ruhige Haltungen mit Bolster und Decke." },
        { title: "Meditation", text: "Sitzen, den Atem beobachten, ankommen – auf Kissen oder Matte." },
      ] },
      { h: "Gratis Onlinekurse in Sets", html: `<p>Laut Original sind die gratis Onlinekurse Teil des ${productLink("yogamatte-mudra-pro-set", "MUDRA PRO Sets")} und der ${shopLink("meditations-sets", "Meditations-Sets")}. Hier gibt es keine Videos, die Kurse sind nur beschrieben.</p>` },
    ],
  },

  "yogamatten-vergleich": {
    title: "Yogamatten im Vergleich",
    lead: "Acht Matten nebeneinander: Material, Maße, Gewicht und Bewertungen.",
    note: GUIDE_NOTE,
    blocks: [
      { table: "mats" },
      { h: "Worauf es ankommt", list: [
        "<strong>Halt:</strong> Wer viel schwitzt oder dynamisch übt, braucht eine Oberfläche, die nicht rutscht.",
        "<strong>Dämpfung:</strong> Dickere Matten schonen Knie und Handgelenke, dünnere stehen stabiler.",
        "<strong>Gewicht und Größe:</strong> Für unterwegs zählt jedes Kilo, für große Menschen die Länge.",
        "<strong>Material:</strong> Naturkautschuk, Kork und Wolle sind natürlich, PVC und Polyester sind pflegeleicht und robust.",
      ] },
      { h: "Kurz gesagt", list: [
        `Einstieg und Alltag: ${productLink("yogamatte-mudra-studio", "MUDRA")}, gut gepolstert und günstig`,
        `Studio und Workouts: ${productLink("yogamatte-mudra-pro", "MUDRA PRO")}, robust und in zwei Längen`,
        `Dynamische Stile: ${productLink("yogamatte-pure", "PURE")} mit griffiger PU-Oberfläche`,
        `Natürlich und mit viel Halt: ${productLink("yogamatte-arise", "ARISE")}, bei viel Schweiß ${productLink("yogamatte-arise-cork", "ARISE CORK")}`,
        `Unterwegs: ${productLink("yogamatte-arise-travel", "ARISE Travel")}, faltbar und etwa 1 kg leicht`,
        `Ruhig und warm: ${productLink("yogamatte-schurwolle", "WOOL")} aus Schurwolle`,
      ] },
      { cta: [["seite.html?s=quiz", "Zum Quiz"], ["kategorie.html?k=yogamatten", "Alle Yogamatten", true]] },
    ],
  },

  quiz: {
    title: "Yogamatten Quiz",
    lead: "Vier Fragen, eine Matte: Finde heraus, welche zu dir passen könnte.",
    note: "Studentenprojekt: Das Quiz läuft nur auf dieser Seite, deine Antworten werden nicht gespeichert oder gesendet. Der Vorschlag ist selbst gebaut und unverbindlich.",
    blocks: [{ quiz: true }],
  },

  "guide-kissen": {
    title: "Produktguide – Meditationskissen",
    lead: "Welche Höhe, welche Form, welche Füllung? Eine kleine Orientierung.",
    note: GUIDE_NOTE,
    blocks: [
      { h: "Warum ein Meditationskissen?", html: "<p>Ein Kissen hebt das Becken an, die Knie sinken ab und der Rücken richtet sich fast von allein auf. So sitzt du länger bequem.</p>" },
      { h: "Welche Höhe passt?", list: [
        "<strong>10 cm</strong> (KLEIN): niedrig, für alle, die gern nah am Boden sitzen.",
        "<strong>15 cm:</strong> die vielseitige Standardhöhe.",
        "<strong>20 cm</strong> (HOCH): für alle, die höher sitzen möchten oder steife Hüften haben.",
      ] },
      { h: "Welche Form?", list: [
        "<strong>Rund</strong> (Lotus): vielseitig für fast jede Sitzhaltung.",
        "<strong>Zafu:</strong> mit Falten genäht, etwas höher und fester im Sitz.",
        "<strong>Halbmond:</strong> vorne nach innen gewölbt, das gibt den Beinen Raum.",
      ] },
      { h: "Welche Füllung?", html: `<p>Dinkelspelz ist formstabil, die Höhe lässt sich über die Füllmenge anpassen (${shopLink("dinkelspelz-fullung", "Dinkelspelz zum Nachfüllen")}). Kapok ist weich und leicht.</p>` },
      { table: "cushions" },
      { cta: [["kategorie.html?k=meditationskissen", "Alle Meditationskissen"], ["kategorie.html?k=bezug-meditationskissen", "Bezüge", true]] },
    ],
  },

  "guide-bolster": {
    title: "Produktguide – Yogabolster",
    lead: "Rolle, Bolster oder kleine Nackenrolle? So findest du die passende Unterstützung.",
    note: GUIDE_NOTE,
    blocks: [
      { h: "Wofür Bolster und Rollen gut sind", html: "<p>Sie stützen Knie, Rücken oder Nacken, damit du in ruhigen Haltungen loslassen kannst – im Yin Yoga, im Restorative Yoga und in der Schlussentspannung.</p>" },
      { h: "Welche Form passt?", list: [
        `${productLink("yogarolle-restorative-o24-cm", "Yogarolle Ø24 cm")}: rund und hoch, zum Beispiel unter den Knien, dem Rücken oder den Fersen.`,
        `${productLink("yoga-bolster-restorative-l", "Bolster L")}: breit und stabil, ideal für Vorbeugen und die Kindhaltung.`,
        `${productLink("yoga-bolster-restorative-s", "Bolster S")}: flach und klein für sanfte Unterstützung.`,
        `${productLink("nackenrolle", "Mini-Rolle")}: klein genug für Nacken und Reisetasche.`,
      ] },
      { h: "Welche Füllung?", html: "<p>Die Rollen sind mit Dinkelspelz gefüllt und halten ihre Form, die Bolster mit weichem Kapok.</p>" },
      { table: "bolsters" },
      { cta: [["kategorie.html?k=yoga-bolster", "Alle Bolster"], ["kategorie.html?k=bezug-yogabolster", "Bezüge", true]] },
    ],
  },

  "rabatt-studios": {
    title: "Rabatt für Yoga-Studios",
    lead: "Ausstattung für Studios: robust, pflegeleicht, in vielen Farben.",
    blocks: [
      { h: "Das passt in ein Studio", list: [
        `${shopLink("studio-yogamatte", "Studio-Yogamatten")} wie die ${productLink("yogamatte-mudra-pro", "MUDRA PRO")}, die für Studios geeignet ist`,
        `${shopLink("yogamatten-spray", "Matten-Spray")} zum Reinigen zwischen den Stunden`,
        `${shopLink("meditationskissen", "Meditationskissen")} und ${shopLink("bezug-meditationskissen", "waschbare Bezüge")}`,
        `${shopLink("yoga-bolster", "Bolster")}, ${shopLink("yoga-block", "Blöcke")} und ${shopLink("yoga-gurte", "Gurte")} für ruhige Stunden`,
      ] },
      { h: "Konditionen", html: "<p>Rabatte und Konditionen gibt es in diesem Studentenprojekt nicht, und eine Anfrage ist nicht möglich.</p>" },
    ],
  },

  "rabatt-gewerbe": {
    title: "Rabatt für B2B & Gewerbekunden",
    lead: "Für Händler:innen und Unternehmen würden hier Konditionen stehen.",
    blocks: [
      { h: "Was hier gilt", html: "<p>Dieses Projekt ist kein Unternehmen und hat keine Geschäftsbeziehungen. Es gibt keine Staffelpreise, keine Angebote und keine Anfrage.</p>" },
      { h: "Was an dieser Stelle stünde", list: [
        "Für wen die Konditionen gelten",
        "Welche Vorteile es gibt (Preise, Lieferung, Ansprechperson)",
        "Wie man ein Angebot anfragt",
      ] },
      { cta: [["seite.html?s=rabatt-studios", "Zu den Yoga-Studios", true], ["kategorie.html?k=yoga", "Zum Shop"]] },
    ],
  },

  konto: {
    title: "Konto",
    lead: "Hier würdest du dich anmelden – in diesem Studentenprojekt gibt es das nicht.",
    blocks: [
      { h: "Kein Konto, kein Passwort", html: `<p>Auf einer echten Shop-Seite würdest du dich hier mit E-Mail und Passwort anmelden. Dieses Projekt fragt bewusst nie ein Passwort ab und speichert keine Kontodaten. Mehr dazu unter ${pageLink("datenschutz", "Datenschutz")}.</p>` },
      { h: "Als Gast stöbern", html: "<p>Alles andere funktioniert ohne Anmeldung: Produkte ansehen, auswählen und in den Demo-Warenkorb legen.</p>", cart: true },
      { cta: [["kategorie.html?k=yoga", "Zum Shop"]] },
    ],
  },
};

// ---------- Rendering ----------
const accordionMarkup = (items) => `
      <div class="accordion">${items.map(([question, answer]) => `
        <details class="accordion__item">
          <summary class="accordion__summary">${question}<svg class="accordion__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path class="accordion__icon-v" d="M12 5v14"/></svg></summary>
          <div class="accordion__content">${answer}</div>
        </details>`).join("")}
      </div>`;

const cardsMarkup = (cards) => `
      <div class="page__cards">${cards.map((card) => `
        <article class="page-card">${card.tag ? `
          <p class="page-card__tag">${card.tag}</p>` : ""}
          <h2 class="page-card__title">${card.title}</h2>
          <p>${card.text}</p>
        </article>`).join("")}
      </div>`;

function blockMarkup(block) {
  const wide = Boolean(block.table);
  let body = block.html || "";
  if (block.list) {
    const items = typeof block.list === "function" ? block.list() : block.list;
    const tag = block.ordered ? "ol" : "ul";
    body = `<${tag} class="page__list">${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>`;
  }
  if (block.faq) body = accordionMarkup(block.faq);
  if (block.table) body = tableMarkup(tables[block.table]());
  if (block.cards) body = cardsMarkup(block.cards);
  if (block.quiz) body = quizMarkup();
  if (block.clear) body += clearMarkup();
  if (block.cart) body += cartMarkup();
  if (block.cta) body = ctaMarkup(block.cta);
  return `
    <section class="page__section${wide ? " page__section--wide" : ""}">${block.h ? `
      <h2>${block.h}</h2>` : ""}${body}
    </section>`;
}

const pageName = new URLSearchParams(location.search).get("s") || "";
const pageRoot = document.getElementById("page");
const page = pages[pageName] || {
  title: "Seite nicht gefunden",
  lead: "Diese Seite gibt es in unserem Studentenprojekt (noch) nicht.",
  blocks: [{ cta: [["index.html", "Zur Startseite"], ["kategorie.html?k=yoga", "Zum Shop", true]] }],
};

document.title = `${page.title} – LotusCraft Student Rebuild`;
pageRoot.innerHTML = `
    <div class="page__head">
      <h1 class="page__title">${page.title}</h1>
      <p class="page__lead">${page.lead}</p>
      <p class="page__note">${page.note || NOTE}</p>
    </div>
    <div class="page__body">${page.blocks.map(blockMarkup).join("")}
    </div>`;

// The demo buttons and the quiz
pageRoot.addEventListener("click", (e) => {
  if (e.target.closest("[data-open-cart]")) openCart();
  if (e.target.closest("[data-clear-cart]")) {
    cartItems = [];
    saveCart();
    pageRoot.querySelector(".page__status").textContent = "Erledigt: Dein Warenkorb in diesem Browser ist jetzt leer.";
  }
  if (e.target.closest(".quiz__again")) {
    const form = pageRoot.querySelector(".quiz");
    form.reset();
    form.querySelector(".quiz__result").hidden = true;
    form.querySelector(".quiz__status").textContent = "";
    form.querySelector("input").focus();
  }
});

pageRoot.querySelector(".quiz")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const answers = Object.fromEntries(new FormData(form));
  const status = form.querySelector(".quiz__status");
  const result = form.querySelector(".quiz__result");
  if (QUIZ.some((question) => !answers[question.key])) {
    status.textContent = "Bitte beantworte alle vier Fragen.";
    result.hidden = true;
    return;
  }
  status.textContent = "";
  result.innerHTML = quizResult(answers);
  result.hidden = false;
  result.querySelector("h2").tabIndex = -1;
  result.querySelector("h2").focus();
});
