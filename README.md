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
├── styles.css      # Gestaltung: Farben, Schriften, Layout, Mobilansicht
├── js/
│   ├── shared.js   # Gemeinsame Daten & Helfer: Produkte, Kategorien, Menü, Suchindex, Zeichnungen
│   ├── layout.js   # Header, Menüs (Handy + Desktop), Suche, Footer, Warenkorb (Demo)
│   ├── home.js     # Startseite: Produkt-Tabs, Community, Bewertungs-Karussell
│   ├── product.js  # Produktseiten: Daten aller Matten, Zeichnungen, Galerie, Farbauswahl, Warenkorb-Button
│   └── category.js # Kategorieseite: Filter (Farbe, Material, Verfügbarkeit), Sortierung
└── README.md
```

Header, Menüs und Footer sind auf allen Seiten gleich. Deshalb stehen sie nur einmal in
`js/layout.js` und werden beim Laden in `<div id="site-header">` und `<div id="site-footer">`
eingesetzt. Wer den Header ändern will, ändert also nur diese eine Datei.

Farben und Schriften sind oben in `styles.css` als Variablen gesammelt (`--gold`, `--text` …) –
die Werte stammen direkt aus dem CSS des Originals.

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

**Produktseiten** (Klick auf eine Matte bei den Bestsellern oder in der Kategorie):

- [x] Galerie (Desktop: Raster, Handy: Wisch-Galerie mit Vorschaubildern)
- [x] Kaufbox: Preis, Bewertung, Farbauswahl (zeichnet die Bilder neu), Warenkorb-Button (Demo)
- [x] Ausverkaufte Farben wie im Original mit „Benachrichtige mich“ und „Nicht auf Lager“ (Demo, es wird nichts gespeichert)
- [x] Akkordeon (Beschreibung, Details, Pflege, Nachhaltigkeit) und Bewertungsübersicht
- [x] Infobereich zu Material & Grip (4 Zeilen im Zickzack)
- [x] Bewertungen (Beispieldaten, sortierbar, mit Seiten)
- [x] Verwandte Produkte
- [x] Alle 8 Yogamatten: PURE, ARISE, ARISE Travel (faltbar), MUDRA (Waffelstruktur), Mudra XL, MUDRA PRO, ARISE CORK (Kork, Variante „Align“ mit Linienmuster) und WOOL (Schurwolle) – alle Seiten nutzen dieselbe Vorlage, Maße und Material stehen in den Daten
- [x] Produkte mit nur einer Ausführung (WOOL) zeigen wie im Original keine Farbauswahl
- [x] Längenauswahl wie im Original (MUDRA PRO: 180 / 200 cm mit eigenem Preis; Kombinationen, die es nicht gibt, werden ausgeblendet)

**Kategorieseiten** (Hero-Button „Yogamatten“, Menü → „Yoga“ oder die Kreise oben):

- [x] Unterkategorien als Kreise, Titel, eine Karte pro Farbe (31 bei „Yogamatten“, wie im Original)
- [x] Vier Unterkategorien wie im Original: Für Zuhause (24 Karten), Rutschfest (16), Studio (13), Reise (4) – der aktuelle Kreis ist umrandet
- [x] „Yoga-Sets“ (Menü → „Yogamatten-Set“ oder „Yoga-Sets“): alle 13 Sets mit „Set -10%“ und Farbpunkten; im Header sind wie im Original „Yoga“ und „Geschenke“ hervorgehoben
- [x] „„Almost Perfect“ Yogamatten“: 17 Matten mit kleinen Schönheitsfehlern zu −15 %, Filter verhalten sich wie im Original
- [x] „Yoga-Zubehör“ (36 Karten: Gurte, Taschen, Blöcke, Decke, Spray, Handtuch, Augenkissen, Sticker) mit den Unterseiten Yogataschen, Yogadecken, Yoga-Handtücher, Yoga-Gurte und Yoga Blöcke
- [x] „Yoga Bolster“ (23 Karten, mit Filter „Füllung“) und „Yoga Rolle“; „Yogamatten Zubehör“ mit Spray, Stickern, Malas und Dinkelspelz sowie „Bezug Yogarolle“ – damit führt jeder Eintrag der Yoga-Spalte im Menü auf eine Seite (außer „Gutscheine“)
- [x] „Meditationskissen“ (46 Karten, Filter „Form“: rund, halbrund, Zafu) mit den Unterseiten Rundkissen, Zafu-Kissen und Halbmondkissen – im Header ist dort „Meditation“ hervorgehoben
- [x] „Meditationsmatten“ (Zabuton in 8 Farben, je 4 cm und 7 cm hoch) und „Meditationskissen Set“ (3 Sets; im Header „Meditation“ und „Geschenke“ hervorgehoben)
- [x] Filter Farbe, Material, Verfügbarkeit (kombinierbar) – wie im Original nur mit Werten, die auf der Seite vorkommen
- [x] Sortierung wie im Original, voreingestellt „meistverkauft“ (Rangliste des Originals vom 2. Oktober 2026); dazu Relevanz, A–Z, Z–A und Preis
- [x] Kurzer eigener Text unter dem Raster, mit Links zu den Produktseiten
- [x] Jede Mattenkarte öffnet die passende Produktseite, gleich in der richtigen Farbe (Zubehör hat noch keine eigenen Produktseiten)

**Warenkorb** (Icon oben rechts oder „In den Warenkorb“ auf der Produktseite):

- [x] Seitenleiste wie im Original, mit leerem Zustand
- [x] Artikel mit Menge (− / +), Entfernen, Zwischensumme und Balken bis „kostenloser Versand ab 69 €“
- [x] Bleibt beim Seitenwechsel erhalten (nur in diesem Browser gespeichert) – „Zur Kasse“ ist nur eine Demo, es wird nichts bestellt

**Suche** (Lupe oben rechts):

- [x] Suchfenster wie im Original, Ergebnisse schon beim Tippen (erste vier, „Alle anzeigen“ zeigt alle)
- [x] Findet Produkte auch über Material, Farbname und Farbgruppe (z. B. „grün“, „kork“), ohne Rücksicht auf Groß-/Kleinschreibung und Umlaute
- [x] Passende Seiten (z. B. „Yogamatten“); Escape leert erst das Feld, das zweite Escape schließt

## Hinweis

Entstanden im Rahmen eines Studienkurses, ausschließlich zu Lernzwecken.
Feedback und Verbesserungsvorschläge sind willkommen!
