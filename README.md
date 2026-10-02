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
├── kategorie.html  # Kategorieseite mit Filtern, z. B. kategorie.html?k=yogamatten
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
- [x] Yogamatte PURE, ARISE, ARISE Travel (faltbar) und MUDRA (Waffelstruktur) – alle Seiten nutzen dieselbe Vorlage, Maße und Material stehen in den Daten

**Kategorieseite „Yogamatten“** (Hero-Button „Yogamatten“ oder Menü → „Alle Yogamatten“):

- [x] Unterkategorien als Kreise, Titel, 31 Karten (eine pro Farbe, wie im Original)
- [x] Filter Farbe, Material, Verfügbarkeit (kombinierbar) und Sortierung
- [x] Klick auf eine Karte mit eigener Produktseite (MUDRA, PURE, ARISE, ARISE Travel – 22 von 31 Karten) öffnet sie gleich in der richtigen Farbe

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
