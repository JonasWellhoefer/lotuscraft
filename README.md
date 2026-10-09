# LotusCraft

> ⚠️ **Studentenprojekt / Student Project**
>
> Dieses Repository ist ein Studentenprojekt und dient nur zu Lernzwecken.
> Es ist **kein** echter Shop, steht in **keiner Verbindung** zu Lotuscrafts
> und wird ohne Gewähr bereitgestellt.
>
> *This repository is a student project for learning purposes only. It is not a real
> shop, is not affiliated with Lotuscrafts, and comes with no guarantees.*

## Worum geht's?

LotusCraft ist ein Projekt für einen **UI-Design-Kurs**. Die Aufgabe: eine bestehende
Nischen-Website mithilfe von KI nachbauen – so nah wie möglich am Original.

Vorlage ist [lotuscrafts.com](https://www.lotuscrafts.com/), ein Online-Shop für Yoga- und
Meditationszubehör. Dies ist eine **Übung im Nachbauen von Benutzeroberflächen**, nicht die
Originalseite. Alle Marken, Logos und Inhalte des Originals gehören den jeweiligen Inhaber:innen.

Damit das öffentliche Repo sauber bleibt:
- **Fotos** des Originals werden nicht kopiert – stattdessen gibt es Farbflächen und einfache Zeichnungen.
- **Logo** ist eine eigene Lotusblüte mit dem Zusatz „Student Rebuild“.
- **Kundenbewertungen** sind erfunden (das Original zeigt echte Namen und Orte).

---

## 🚀 Website lokal starten

Die Seite besteht nur aus HTML, CSS und JavaScript. Du musst **nichts installieren und nichts bauen**.

### Schritt 1: Code herunterladen

**Variante A – ohne Git (am einfachsten):**
1. Oben auf dieser GitHub-Seite auf den grünen Button **„Code“** klicken.
2. **„Download ZIP“** wählen.
3. Die ZIP-Datei entpacken (Doppelklick). Es entsteht ein Ordner `lotuscraft-main`.

**Variante B – mit Git** (im Terminal):

```bash
git clone https://github.com/JonasWellhoefer/lotuscraft.git
```

### Schritt 2: Seite öffnen

**Variante A – Doppelklick (am einfachsten):**
Im Ordner die Datei **`index.html`** doppelklicken. Sie öffnet sich im Browser – fertig. ✅

**Variante B – mit lokalem Server** (empfohlen, verhält sich wie eine echte Website):

Im Terminal in den Projektordner wechseln:

```bash
cd lotuscraft
```

Dann **einen** dieser Befehle ausführen – je nachdem, was auf deinem Rechner installiert ist:

| Du hast … | Befehl |
|---|---|
| Python (auf macOS meist schon da) | `python3 -m http.server 8000` |
| Node.js | `npx serve .` |

Danach im Browser öffnen: **http://localhost:8000** (bei `npx serve` steht die Adresse im Terminal, meist http://localhost:3000).

Beenden mit **Strg + C** im Terminal.

**Variante C – VS Code:**
1. Ordner in [VS Code](https://code.visualstudio.com/) öffnen.
2. Erweiterung **„Live Server“** installieren.
3. Rechtsklick auf `index.html` → **„Open with Live Server“**.
   Die Seite lädt sich bei jeder Änderung automatisch neu.

### Probleme?

| Problem | Lösung |
|---|---|
| Schriften sehen anders aus | Die Schriften kommen von Google Fonts – dafür braucht es eine Internetverbindung. |
| `python3: command not found` | Unter Windows stattdessen `python -m http.server 8000` probieren, oder Variante A/C nutzen. |
| `Address already in use` | Port ist belegt – eine andere Zahl nehmen, z. B. `python3 -m http.server 8001`. |
| Änderungen werden nicht angezeigt | Seite hart neu laden: **Cmd + Shift + R** (Mac) bzw. **Strg + F5** (Windows). |

---

## 📁 Projektstruktur

```
lotuscraft/
├── index.html      # Startseite (nur der Inhalt zwischen Header und Footer)
├── produkt.html    # Produktseite, z. B. produkt.html?p=yogamatte-pure
├── kategorie.html  # Kategorieseiten mit Filtern, z. B. kategorie.html?k=yogamatten oder ?k=reise-yogamatte
├── seite.html      # Info-Seiten (Footer, Guides, Quiz, Konto), z. B. seite.html?s=faq
├── suche.html      # Suchergebnisse, z. B. suche.html?q=kissen (Enter oder „Alle anzeigen“ in der Suche)
├── styles.css      # Gestaltung: Farben, Schriften, Layout, Mobilansicht
├── js/
│   ├── shared.js   # Gemeinsame Daten & Helfer: Produkte, Kategorien, Karten pro Farbe, Verkaufs-Rangfolge, Blog-Beiträge, Menü, Suchindex, Zeichnungen
│   ├── layout.js   # Header, Menüs (Handy + Desktop), Suche, Footer, Warenkorb (Demo)
│   ├── home.js     # Startseite: Produkt-Tabs, Community, Bewertungs-Karussell
│   ├── popups.js   # Cookie-Banner und Newsletter-Fenster (Demo), auf allen Seiten
│   ├── fehler.js   # Fehlerseite 404 für Produkt-, Kategorie- und Info-Seiten, Blog-Teaser mit gezeichneten Bildern
│   ├── product.js  # Produktseiten: Daten aller Matten, „Almost Perfect“-Matten, Kissen, Kleidung, Bolster, Zabuton, Bank, Bezüge, Sets, Gutschein und des Zubehörs, Zeichnungen, Galerie, Farb-, Größen- und Optionsauswahl, Warenkorb-Button
│   ├── zoom.js     # Produktseite: Bild-Zoom als Vollbild-Fenster mit Vorschaubildern, Pfeilen und Punkten
│   ├── category.js # Kategorieseite: Filter (Farbe, Sitzhöhe, Form, Material, Füllung, Größe, Verfügbarkeit), Sortierung
│   ├── suche.js    # Ergebnisseite der Suche: eine Karte pro Farbe, darunter passende Seiten und Blog
│   └── seite.js    # Info-Seiten: eine Vorlage, alle Texte, Vergleichstabellen aus den Produktdaten, Quiz
└── README.md
```

Header, Menüs und Footer sind auf allen Seiten gleich. Deshalb stehen sie nur einmal in
`js/layout.js` und werden beim Laden in `<div id="site-header">` und `<div id="site-footer">`
eingesetzt. Wer den Header ändern will, ändert also nur diese eine Datei.

Farben und Schriften sind oben in `styles.css` als Variablen gesammelt (`--gold`, `--text` …) –
die Werte stammen direkt aus dem CSS des Originals. Zwei Ausnahmen sind mit Absicht etwas dunkler,
damit Text darauf gut lesbar bleibt: `--gold-text` (Gold als Schrift) und `--newsletter` (blaues Band).

## ✅ Fortschritt

**Startseite** – Abschnitt für Abschnitt in der Reihenfolge des Originals:

- [x] Vertrauensleiste (Bewertung, Versand)
- [x] Header mit Navigation
- [x] Hero-Bereich „Einatmen. Ausatmen. Ankommen.“
- [x] Kategorie-Kacheln
- [x] Bestseller mit Tabs (Yoga / Meditation / Bekleidung)
- [x] Kundenbewertungen (Karussell)
- [x] Set-Angebote mit Tabs (Yoga- / Meditation-Bundles)
- [x] Community-Inspiration
- [x] Verkaufsargumente
- [x] Footer mit Newsletter (Demo-Formular, sendet nichts)
- [x] Mobiles Menü (3 Ebenen, per Tastatur bedienbar)
- [x] Desktop-Dropdowns (Mega-Menü mit Werbekacheln, per Tastatur bedienbar)

**Produktseiten** (Klick auf eine Karte bei den Bestsellern oder in einer Kategorie):

- [x] Galerie (Desktop: Raster, Handy: Wisch-Galerie mit Vorschaubildern)
- [x] Bild-Zoom wie im Original: Ein Klick auf ein Bild öffnet alle Bilder groß im Vollbild (`js/zoom.js`). Ab 1060 px stehen die Vorschaubilder links (56 × 70 px, das aktuelle mit goldenem Rand) und die Pfeile neben dem Bild, darunter ein Bild im Format 4 : 5 mit Punkten und Pfeilen in einer 76 px hohen Leiste; der Schließen-Knopf sitzt oben rechts. Die Maße (Bild 681,6 × 852 px bei 900 px Höhe, Pfeile 48 px, 32 px Abstand, Punkte 44 px) stimmen bei 1440, 1060, 1059, 900, 780 und 375 px auf 0,2 px mit dem Original überein
- [x] Der Zoom zeigt immer die Farbe, die gerade gewählt ist; man blättert mit Pfeilen, Vorschaubildern, Punkten, Wischen oder den Tasten ← → Pos1 Ende, Escape schließt und der Fokus kehrt zum Bild zurück; dafür sind die Galerie-Bilder echte Knöpfe mit Beschriftung („… – vergrößern“)
- [x] Kaufbox: Preis, Bewertung, Farbauswahl (zeichnet die Bilder neu), Warenkorb-Button (Demo)
- [x] Unter dem Warenkorb-Knopf lässt die Kaufbox den Platz des Originals frei (Lieferdatum-Zeile 21 px, schmal 40,5 px) und zeigt elf neutrale Zahlungs-Kacheln in zwei Reihen; die Zeilen darunter liegen bei 1440, 900 und 375 px auf 0,5 px wie im Original
- [x] Ausverkaufte Farben wie im Original mit „Benachrichtige mich“ und „Nicht auf Lager“ (Demo, es wird nichts gespeichert)
- [x] Akkordeon (Beschreibung, Details, Pflege, Nachhaltigkeit) und Bewertungsübersicht; wie im Original in normaler Schrift mit 16-px-Plus, dunklem Text und 8 px Abstand (auch auf den Info-Seiten, z. B. in der FAQ)
- [x] Infobereich zu Material & Grip (4 Zeilen im Zickzack)
- [x] Bewertungen (Beispieldaten, sortierbar, mit Seiten)
- [x] Verwandte Produkte
- [x] Alle 8 Yogamatten: PURE, ARISE, ARISE Travel (faltbar), MUDRA (Waffelstruktur), Mudra XL, MUDRA PRO, ARISE CORK (Kork, Variante „Align“ mit Linienmuster) und WOOL (Schurwolle) – alle Seiten nutzen dieselbe Vorlage, Maße und Material stehen in den Daten
- [x] Produkte mit nur einer Ausführung (WOOL) zeigen wie im Original keine Farbauswahl
- [x] Längenauswahl wie im Original (MUDRA PRO: 180 / 200 cm mit eigenem Preis; Kombinationen, die es nicht gibt, werden ausgeblendet)
- [x] Alle 7 Meditationskissen (Lotus 15 cm, ohne Stickerei, HOCH, KLEIN, Zafu, Zafu Kapok, Halbmond) mit derselben Vorlage: eigene Zeichnungen (von vorn, beim Sitzen, von oben, Maße, Füllung, Stoff), Detailangaben wie im Original (Sitzhöhe, Maße, Füllung, Öffnung …), Bewertungsübersicht und verwandte Produkte
- [x] Alle 13 Kleidungsstücke (Damen und Herren) mit Größenauswahl wie im Original: runde Größen-Buttons; eine Größe, die in der gewählten Farbe ausverkauft ist, zeigt „Benachrichtige mich“ und „Nicht auf Lager“; die Größe bleibt beim Farbwechsel erhalten; reduzierte Farben mit Streichpreis
- [x] „Größentabelle“ als Dialog: die Maße jeder Größe wie im Original (z. B. Taille und Innenbeinlänge) und eine eigene Zeichnung mit nummerierten Messstellen – schließt mit Escape, dem X oder einem Klick daneben
- [x] Eigene Zeichnungen für die Kleidung (flach ausgelegt, getragen beim Üben, Stoff mit Zusammensetzung, Maße in Größe M, zusammengelegt) und Beispielbewertungen mit Körpergröße und gekaufter Größe
- [x] Bolster und Rollen (Yogarolle Ø24 cm, Bolster RESTORATIVE L und S, Nackenrolle), Meditationsmatte Zabuton und Meditationsbank DHARMA: eigene Zeichnungen (beim Üben, Maße, Querschnitt, Füllung, Holz und Polster) und Detailangaben wie im Original – ohne Bewertungsbalken oder Pflegehinweise, wo das Original keine hat
- [x] Zabuton mit Auswahl „Dicke“ (4 cm / 7 cm) wie im Original: Preis, Detailangaben und Zeichnungen ändern sich mit
- [x] Yogataschen PUNE und NANDI, Yogablock Kork (2er-Set und einzeln), Yogagurt und Matten-Tragegurt: eigene Zeichnungen (unterwegs, was in die Tasche passt, Kork, drei Höhen eines Blocks, Metall-D-Ringe), Optionen wie im Original („Block-Größe“, „Pack: 2er Pack“) – der einzelne Block zeigt wie dort keine Sterne und keine Bewertungsübersicht
- [x] Yogadecke „Savasana“, Yoga Handtuch, Augenkissen, Bio Yogamatten Spray (Auswahl „Inhalt“: 60 ml Sprühflasche / 500 ml Nachfüllflasche) und die vier Yogamatten-Sticker – damit hat jede Karte auf „Yoga-Zubehör“ eine eigene Seite
- [x] Wie im Original: Spray und Sticker ohne Infozeilen; ausverkaufte Sticker mit „Ausverkauft“-Schild und rotem Hinweis statt Warenkorb-Button
- [x] Alle 8 Bezüge (Lotus 15 cm, ohne Bestickung, KLEIN, HOCH, Zafu, Halbmond, Zabuton, Yogarolle): eigene Zeichnungen (Bezug auf dem Kissen, nur der Bezug mit gestricheltem Innenkissen, alter und neuer Bezug, gestickter Lotus) und der Hinweis, dass nur der Bezug geliefert wird
- [x] Rosenholz-, Tulsi- und Rudraksha-Mala (wie im Original ausverkauft) und Bio-Dinkelspelz 1 kg / 2 kg (Beutel, Spelzen aus der Nähe, beim Nachfüllen)
- [x] Produkte ohne Bewertungen zeigen wie im Original nur „– Für dieses Produkt wurden noch keine Bewertungen abgegeben –“
- [x] Alle 8 „Almost Perfect“-Matten (MUDRA PRO, PURE, MUDRA, ARISE Travel, MUDRA XL, ARISE, ARISE Cork, MUDRA PRO XL): die Seite der regulären Matte mit durchgestrichenem Preis (−15 %), den Farben, die das Original zeigt, den eigenen Angaben unter „Details“ (oft nur das Gewicht), eigenen Bewertungen – und einer Zeichnung des kleinen Schönheitsfehlers unter der Lupe
- [x] Wie im Original: ARISE Travel und MUDRA XL sind ausverkauft (rote Meldung statt Warenkorb-Button, bei MUDRA XL mit „Nicht auf Lager“); ARISE zeigt keine Sterne in der Kaufbox, MUDRA PRO XL Sterne ohne Bewertungsliste; die ausverkaufte ARISE-Travel-Karte steht nicht mehr in den Kategorien und Empfehlungen
- [x] „Basierend auf 1 Bewertung“ statt „1 Bewertungen“
- [x] Alle 16 Sets (13 Yoga-Sets, 3 Meditations-Sets) mit „Dieses N-teilige Set enthält:“ wie im Original: jedes Teil mit Bild, Name (Link zu seiner Seite), Sternen und eigener Auswahl (Farbe, Länge, Dicke, Block-Größe, Inhalt); der Preis liegt 10 % unter der Summe der Teile und folgt der Auswahl, Bilder und Infozeilen zeigen die gewählten Teile
- [x] Sets zeigen wie im Original keine Sterne in der Kaufbox und keinen Bewertungsbereich, nur „inkl. MwSt.“ und unter „Details“ das Gewicht (auch Eigenheiten wie „0,0 kg“); ist ein gewähltes Teil ausverkauft, steht „Nicht auf Lager“, in der Demo wird dann nichts eingelegt
- [x] Gutscheinkarte: Gutscheinwert 20 bis 200 € (die Karte zeigt den Wert), „Versand sofort per Email“, Bewertungsbereich ohne Sterne in der Kaufbox – damit hat jede Karte im Shop eine eigene Seite
- [x] Bewertungen, Farben, Preise und verwandte Produkte aller 86 Produktseiten mit dem Original abgeglichen (Stand 4. Oktober 2026)

**Kategorieseiten** (Hero-Button „Yogamatten“, Menü → „Yoga“ oder die Kreise oben):

- [x] Unterkategorien als Kreise, Titel, eine Karte pro Farbe (31 bei „Yogamatten“, wie im Original)
- [x] Vier Unterkategorien wie im Original: Für Zuhause (24 Karten), Rutschfest (16), Studio (13), Reise (4) – der aktuelle Kreis ist umrandet
- [x] „Yoga-Sets“ (Menü → „Yogamatten-Set“ oder „Yoga-Sets“): alle 13 Sets mit „Set -10%“ und Farbpunkten; im Header sind wie im Original „Yoga“ und „Geschenke“ hervorgehoben
- [x] „„Almost Perfect“ Yogamatten“: 16 Karten mit kleinen Schönheitsfehlern zu −15 %, Filter verhalten sich wie im Original
- [x] „Yoga-Zubehör“ (36 Karten: Gurte, Taschen, Blöcke, Decke, Spray, Handtuch, Augenkissen, Sticker) mit den Unterseiten Yogataschen, Yogadecken, Yoga-Handtücher, Yoga-Gurte und Yoga Blöcke
- [x] „Yoga Bolster“ (23 Karten, mit Filter „Füllung“) und „Yoga Rolle“; „Yogamatten Zubehör“ mit Spray, Stickern, Malas und Dinkelspelz sowie „Bezug Yogarolle“ – damit führt jeder Eintrag der Yoga-Spalte im Menü auf eine Seite
- [x] „Meditationskissen“ (45 Karten, Filter „Sitzhöhe“ und „Form“: rund, halbrund, Zafu) mit den Unterseiten Rundkissen, Zafu-Kissen und Halbmondkissen – im Header ist dort „Meditation“ hervorgehoben
- [x] „Meditationsmatten“ (Zabuton in 8 Farben, je 4 cm und 7 cm hoch) und „Meditationskissen Set“ (3 Sets; im Header „Meditation“ und „Geschenke“ hervorgehoben)
- [x] „Meditation Zubehör“ (Augenkissen, Malas, Dinkelspelz) mit den Unterseiten Augenkissen und Dinkelspelz Füllung, „Bezug Meditationskissen“ (43 Bezüge mit Filter „Sitzhöhe“ 10 / 15 / 20 cm), „Bezug Meditationsmatte“ und „Meditationsbänke“ – damit führt jeder Eintrag der Meditation-Spalte im Menü auf eine Seite, auch im Handy-Menü
- [x] „Yoga-Kleidung“ (Header → „Bekleidung“, 37 Karten) mit „Yogakleidung Damen“ (Hosen, Leggings, Yoga BH, Shirts, Overalls, Pullover) und „Yogakleidung Herren“ (Tanktops, Trainingshosen, Sweatshirts) – der Filter „Größe“ findet wie im Original nur lieferbare Größen
- [x] „Geschenkideen“ (Header → „Geschenke“, 90 Karten quer durchs Sortiment), „Geschenke unter 50 / 100 / 120 €“, „Gutscheine“ (Gutscheinkarte, nur zum Ansehen) und „Yoga & Meditation Set“ (Menükachel „Spare beim Set-Kauf“) – damit führen auch alle Kreise auf den Set-Seiten auf eine Seite
- [x] „Yoga“ (108 Karten) und „Meditation“ (133 Karten) hinter den Header-Links sowie „SALE“ (55 Karten, nur reduzierte Artikel) – damit führt jeder Link im Header und im Menü auf eine Seite
- [x] Filter Farbe, Material, Größe, Sitzhöhe, Form, Füllung und Verfügbarkeit (kombinierbar) – wie im Original nur mit Werten, die auf der Seite vorkommen
- [x] Auf dem Handy (unter 780 px) wie im Original nur zwei Buttons: „Filter“ öffnet eine Schublade mit einer Unterseite je Filter (Haken wirken sofort, ein goldener Punkt zählt sie), „Sortierung“ öffnet die Auswahlliste des Handys – per Tastatur bedienbar, Escape geht erst zurück und schließt dann
- [x] Sortierung wie im Original, voreingestellt „meistverkauft“ (Rangliste des Originals vom 4. Oktober 2026); dazu Relevanz, A–Z, Z–A und Preis. Einige Bekleidungsseiten zeigen wie dort die eigene Reihenfolge des Shops, ohne gewählte Sortierung
- [x] Alle 52 Kategorieseiten automatisch Karte für Karte mit dem Original abgeglichen (Stand 4. Oktober 2026: Reihenfolge, Farben, Preise, Lagerstand, Filterwerte)
- [x] Kurzer eigener Text unter dem Raster, mit Links zu den Produktseiten
- [x] Jede Karte im Shop öffnet die passende Produktseite, gleich in der richtigen Farbe oder Option (Kleidung in der ersten lieferbaren Größe, Sets mit der gewählten Auswahl im Warenkorb-Link)

**Info-Seiten** (Footer, Handy-Menü, Konto-Symbol, „Versandkosten“ in der Kaufbox):

- [x] Aufbau wie die Seiten des Originals (bei 1440, 900 und 375 Pixel gemessen): Die meisten Seiten beginnen mit einem Bildband (603 px hoch, auf dem Handy 544 px) mit zentriertem Titel, darunter folgen Abschnitte mit zentrierter Überschrift (31,25 px) und schmaler Textspalte (642 px); Tabellen und Karten nutzen die volle Breite. Die Rechtstexte (Widerruf, AGB, Datenschutz, Impressum) stehen wie im Original in einer schlichten 542-px-Spalte mit fetter Überschrift, FAQ, Hilfe, Cookies, Konto, Quiz, Jobs und Blog nur mit Titel und Inhalt
- [x] Das Bildband ist ein gezeichneter Farbverlauf als Platzhalter (kein Foto des Originals), die Abschnitte stehen 64 px voneinander entfernt (32 px auf dem Handy)
- [x] 23 Seiten über `seite.html?s=…`: Hilfe & Kontakt, FAQ (11 Fragen als Akkordeon), Retouren & Umtausch, Versandkosten, Widerrufsbelehrung, Vertrag widerrufen, AGB, Datenschutz, Cookie Einstellungen, Impressum, Über uns, Blog, Nachhaltigkeit, Store Wien, Jobs, Online Yogakurse, Rabatt für Yoga-Studios und für Gewerbekunden, Konto
- [x] Alle Texte selbst geschrieben und mit einem Hinweiskasten als Studentenprojekt gekennzeichnet: keine echten Rechtstexte, keine Firmenadresse, keine E-Mail-Adresse, keine Formulare, die Daten sammeln, und beim Konto kein Passwort
- [x] Datenschutz und „Cookie Einstellungen“ sagen ehrlich, was gespeichert wird (nur der Warenkorb im Browser, dazu Schriften von Google Fonts); ein Knopf löscht den Warenkorb
- [x] „Yogamatten im Vergleich“, „Produktguide – Meditationskissen“ und „– Yogabolster“ mit Tabellen, die aus den Produktdaten gebaut werden (auf dem Handy scrollt die Tabelle in ihrem Kasten, die erste Spalte bleibt stehen)
- [x] Yogamatten-Quiz mit vier Fragen und einem Vorschlag samt Zweitplatziertem im gewählten Budget – läuft nur auf der Seite, nichts wird gespeichert oder gesendet
- [x] Auch auf der Startseite führen der Hero-Knopf „Yoga-Sets“, die Kategorie-Kacheln und „Jetzt shoppen“ jetzt in den Shop; ohne Ziel bleiben nur die Platzhalter für Community-Beiträge und Social Media

**Fehlerseite 404** (bei einer Adresse, die es im Nachbau nicht gibt, z. B. `produkt.html?p=gibts-nicht`, `kategorie.html?k=…` oder `seite.html?s=…`):

- [x] Aufbau und Maße wie die 404-Seite des Originals (bei 1440 und 375 Pixel gemessen, Umbruch bei 780 Pixel): „404“, „Leider finden wir nicht, wonach du suchst“, „Vielleicht hilft das weiter?“ und die Knöpfe „Zur Homepage“ und „Suche ausprobieren“
- [x] „Suche ausprobieren“ öffnet die Suche; nach dem Schließen landet der Fokus wieder auf dem Knopf (die Suche gibt ihn jetzt immer an den zurück, der sie geöffnet hat)
- [x] Darunter „Unsere Bestseller“ (die vier Karten des Originals) und „Neueste Blogartikel“: die ersten drei Beispielbeiträge mit selbst gezeichneten Bildern, „Weiterlesen“ springt zum Beitrag auf der Blog-Seite
- [x] Ein kleiner Zusatz sagt, dass nicht jede Seite des Originals nachgebaut ist; die Adresse bleibt stehen, der Seitentitel heißt „404 Nicht gefunden“
- [x] Produkt-, Kategorie- und Info-Seiten teilen sich diese eine Seite (`js/fehler.js`); die Beispielbeiträge des Blogs stehen jetzt einmal in `js/shared.js`

**Banner und Fenster** (beim ersten Besuch, wie im Original – nur als Demo):

- [x] Cookie-Banner mit den Reitern „Zustimmung“, „Details“ und „Über Cookies“, vier Schaltern und den Knöpfen „Ablehnen“, „Auswahl erlauben“ und „Alle zulassen“ – Maße am Original gemessen (900 px breit, Knöpfe 280 px; auf dem Handy ein fast bildschirmfüllendes Blatt mit untereinander gestapelten Knöpfen); Escape zählt als „Ablehnen“
- [x] Der Banner setzt keine Cookies und verfolgt nichts, egal was man wählt; nur im lokalen Speicher steht, dass geantwortet wurde, damit er nicht auf jeder Seite wiederkommt – auf „Cookie Einstellungen“ lässt er sich wieder öffnen und die Auswahl löschen
- [x] Newsletter-Fenster: erscheint einmal, 15 Sekunden nach dem Seitenaufruf (nicht solange ein anderes Fenster offen ist), schließt mit dem X, „Nein, danke“, Escape oder einem Klick daneben; „Jetzt anmelden“ sendet und speichert nichts und sagt das
- [x] Die Seiten „Datenschutz“ und „Cookie Einstellungen“ nennen beide gespeicherten Einträge (`lotuscraft-cart`, `lotuscraft-hinweise`)

**Warenkorb** (Icon oben rechts oder „In den Warenkorb“ auf der Produktseite):

- [x] Seitenleiste wie im Original, mit leerem Zustand
- [x] Artikel mit Menge (− / +), Entfernen, Zwischensumme und Balken bis „kostenloser Versand ab 69 €“
- [x] Kleidung mit Farbe und Größe (z. B. „Marshmallow / L“); der Link im Warenkorb führt zurück zu genau dieser Auswahl
- [x] Bleibt beim Seitenwechsel erhalten (nur in diesem Browser gespeichert) – „Zur Kasse“ ist nur eine Demo, es wird nichts bestellt

**Suche** (Lupe oben rechts):

- [x] Suchfenster wie im Original, Ergebnisse schon beim Tippen (erste vier); Enter und „Alle anzeigen“ führen wie im Original auf eine eigene Ergebnisseite
- [x] Findet Produkte auch über Material, Farbname und Farbgruppe (z. B. „grün“, „kork“), ohne Rücksicht auf Groß-/Kleinschreibung und Umlaute
- [x] Passende Seiten (z. B. „Yogamatten“, „Versandkosten“, „Quiz“); Escape leert erst das Feld, das zweite Escape schließt

**Suchergebnisse** (`suche.html?q=kissen`; Enter im Suchfenster, „Alle anzeigen“ hängt `&typ=produkt` an und lässt die Seiten weg):

- [x] Raster wie die Ergebnisseite des Originals (bei 1440 bis 320 Pixel gemessen): vier, drei oder zwei Spalten ab 1060, ab 780 und darunter, Abstände 20 / 80, 20 / 40 und 16 / 20 px, Ränder 64 / 32 / 16 px, die Karten 64 px (Handy 32 px) unter dem Header; Spaltenbreite, Bildhöhe, Kartenhöhe und Zeilenabstand stimmen mit dem Original auf 0,1 px überein
- [x] Wie im Original eine Karte pro Farbe, mit Farbname, Preis und den Etiketten „Ausverkauft“ oder „NUR BEZUG“ oben rechts
- [x] Karten Text für Text mit dem Original abgeglichen (Suche „zafu“ bei 1440 und 375 px): Abstände in der Karte und Zeilenhöhen stimmen, Titel und Farbnamen sind höchstens 1,5 px breiter oder schmaler, Preise 2,5 px und Etiketten bis 4 px (andere Schrift)
- [x] Zusätze, die das Original nicht hat: Wer eine Farbe mitsucht („kissen natur“), sieht nur diese Farbe; die Produkte stehen nach Namenstreffern zuerst, danach nach Verkauf (die „meistverkauft“-Rangfolge der Kategorien liegt dafür jetzt in `js/shared.js`); unter den Karten steht „Seiten und Blog“ als Linkliste
- [x] Bewusst anders: Das Original zeigt bei „keine Treffer“ eine leere Seite, hier steht eine Meldung mit dem Knopf „Neue Suche“ und ein paar Bereichen zum Weitersuchen; die Seite hat eine unsichtbare Überschrift („17 Suchergebnisse für „kissen““) für Screenreader; die Seiten und Beiträge, die das Original als graue Karten ins Raster setzt, stehen hier als Liste
- [x] Die Suchanfrage wird nur in den Daten dieses Projekts nachgeschlagen, nicht gesendet und nicht gespeichert; Sonderzeichen in der Anfrage werden maskiert
- [x] Tastatur und axe: Enter im Suchfenster öffnet die Ergebnisse, „Alle anzeigen“ ist ein echter Link; axe ohne Verstoß bei 375 und 1440 px (mit Treffern, ohne Treffer, ohne Eingabe und mit offenem Suchfenster); kein waagerechtes Scrollen von 320 bis 1440 px

**Tastatur und Barrierefreiheit** (auf allen Seiten):

- [x] „Zum Inhalt springen“: der erste Tabulator-Druck zeigt den Link, er springt hinter Header und Menü
- [x] Landmarken und Überschriften ohne Sprünge: Kopfbereich, Navigation, Hauptteil und Fußbereich; der Studentenhinweis, die Galerien und die Karussells sind benannte Bereiche, die sich per Tastatur scrollen lassen; die aktuelle Rubrik im Menü trägt `aria-current`
- [x] Menü, Suche, Warenkorb, Größentabelle, Filter, Cookie-Banner und Newsletter sind echte `<dialog>`-Fenster mit Namen: die Seite dahinter ist gesperrt, Escape schließt, der Fokus kehrt zum Auslöser zurück
- [x] Sterne sind ein Bild mit Text („4,8 von 5 Sternen“), die Platzhalterzeichnungen in den Produktkarten sind für Screenreader ausgeblendet (Name und Preis stehen im Link), englische Wörter tragen `lang="en"`, E-Mail-Felder `autocomplete="email"`
- [x] Kontrast: normaler Text erreicht mindestens 4,5 : 1. Dafür ist Gold als Schrift etwas dunkler (`#8a6a00` statt `#ac8700`), ebenso das blaue Newsletter-Band (`#547796` statt `#5e81a2`); der Verlauf über Hero und Community-Kacheln ist kräftiger, der Betrag auf der Gutscheinkarte dunkel
- [x] Der Fokus verschwindet nie hinter dem festen Header (`scroll-padding`), und jedes bedienbare Element zeigt einen sichtbaren Rahmen
- [x] Bis 320 Pixel Breite (entspricht 400 % Zoom) ohne waagerechtes Scrollen; zusätzlicher Zeilen- und Buchstabenabstand schneidet nichts ab
- [x] Seitenkopf: jede Seite hat eine Beschreibung und ein Tab-Symbol (die gezeichnete Lotus-Marke, als SVG direkt im HTML, damit es auch per Doppelklick klappt); ohne JavaScript erklärt ein Hinweis, dass die Seiten im Browser gebaut werden
- [x] Mit axe-core geprüft (nur zum Testen geladen, nicht Teil der Seite): Start, 52 Kategorien, 86 Produkte, 23 Info-Seiten bei 1440 und 375 Pixel sowie 18 geöffnete Zustände (Menüs, Fenster, Filter, Quiz …) ohne einen Verstoß

**Tablet- und Handy-Breiten** (am Original gemessen, wie bei der Fehlerseite):

- [x] Zwei Umbruchstellen wie im Original: unter 1060 px ersetzt der Menü-Knopf die Navigation (Tablet), unter 780 px beginnt die Handy-Ansicht; die Seitenränder sind 64 / 32 / 16 px (ab 1060, von 780 bis 1059, darunter)
- [x] Header: auf dem Tablet 79 px hoch mit Menü-Knopf, Logo und Symbolen, auf dem Handy 63 px; das Menü öffnet als 414 px breites Seitenfenster (auf dem Handy bildschirmfüllend), ein Klick daneben schließt es; die Hinweisleiste zeigt ab 780 px alle vier Hinweise nebeneinander, darunter einen nach dem anderen
- [x] Startseite: Kacheln, Bestseller, Sets und Verkaufsargumente in vier Spalten ab 780 px, darunter zwei; das Bewertungs-Karussell zeigt je nach Platz vier, drei, zwei oder eine Karte; der Fußbereich hat vier, drei oder eine Spalte
- [x] Kategorieseiten: vier, drei oder zwei Spalten (ab 1060, ab 780, darunter); die Kreise stehen unter 1060 px links und scrollen seitlich
- [x] Produktseiten: zwei Spalten (3 : 2) ab 780 px, darunter gestapelt; die Kaufbox hat unter 1060 px 16 statt 24 px Innenabstand
- [x] Schriftgrößen wie im Original auch auf dem Handy: Kartentitel, Farbnamen, Preise, Tags und Bewertungswerte 16 px, Überschriften 25 px
- [x] Produktkarten wie im Original: Bild im Format 4 : 5, dann 8 px Abstand und Zeilen von 19,5 px mit 4 px dazwischen (Karte 313 px breit = 441,8 px hoch, mit Farbzeile 465,8 px); die Reihen der Kategorieseiten liegen jetzt bis auf eine Zeile mit Umbruch auf 0,1 px wie im Original
- [x] Start- und Produktseite bei 375 und 900 px Text für Text mit dem Original abgeglichen (Position, Breite, Schriftgröße), die Kategorieseite Raster für Raster: Die Abstände weichen meist um weniger als 5 px ab; übrig bleiben die breitere Überschriftenschrift (Playfair), die fehlenden Zahlungslogos und das eingebettete Newsletter-Formular des Originals
- [x] Fenster bei allen Breiten am Original gemessen: Das Suchfenster ist ab 780 px halb so breit wie der Bildschirm (Oberkante bei 15 % der Breite), darunter ein Blatt über die volle Breite am oberen Rand; die vier Ergebnis-Karten laufen unter etwa 1250 px über den Rand, das Fenster scrollt; unter „Seiten und Blog“ findet die Suche auch die vier Beispielbeiträge
- [x] Größentabelle so breit wie ihre Tabelle (höchstens halber Bildschirm, auf dem Handy 38 px weniger als der Bildschirm), Warenkorb-Überschriften auf dem Handy 20 und 25 px, Cookie-Banner mit 15 px Innenabstand (ab 1280 px 23 px) und denselben Knopfbreiten wie das Original
- [x] Zeilenhöhe des Fließtexts 1,22 wie bei der Schrift des Originals (Überschriften behalten ihre eigene): Die Abschnitte der Startseite sind bei 375, 900 und 1440 px höchstens 1 % höher oder niedriger als im Original, nur die Bewertungen weichen je nach Textlänge der Karten ab
- [x] Kein waagerechtes Scrollen bei 320 bis 1440 px (alle Seitentypen); axe ohne Verstoß bei 375 bis 1060 px, auch mit offenem Menü, Warenkorb, Suche, Mega-Menü und Filtern

## Hinweis

Entstanden im Rahmen eines Studienkurses, ausschließlich zu Lernzwecken.
Feedback und Verbesserungsvorschläge sind willkommen!
