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
├── index.html   # Seitenaufbau (alle Abschnitte)
├── styles.css   # Gestaltung: Farben, Schriften, Layout, Mobilansicht
├── script.js    # Produkt- und Set-Daten, Tabs, Bewertungs-Karussell
└── README.md
```

Farben und Schriften sind oben in `styles.css` als Variablen gesammelt (`--gold`, `--text` …) –
die Werte stammen direkt aus dem CSS des Originals.

## ✅ Fortschritt

Die Startseite wird Abschnitt für Abschnitt in der Reihenfolge des Originals nachgebaut:

- [x] Vertrauensleiste (Bewertung, Versand)
- [x] Header mit Navigation
- [x] Hero-Bereich „Einatmen. Ausatmen. Ankommen.“
- [x] Kategorie-Kacheln
- [x] Bestseller mit Tabs (Yoga / Meditation / Bekleidung)
- [x] Kundenbewertungen (Karussell)
- [x] Set-Angebote mit Tabs (Yoga- / Meditation-Bundles)
- [x] Community-Inspiration
- [x] Verkaufsargumente
- [ ] Footer mit Newsletter
- [ ] Mobiles Menü & Dropdowns

## Hinweis

Entstanden im Rahmen eines Studienkurses, ausschließlich zu Lernzwecken.
Feedback und Verbesserungsvorschläge sind willkommen!
