// The two windows the original shows on a first visit: a cookie banner and a
// newsletter pop-up. Both are demos: the site sets no cookies, tracks nothing
// and sends nothing. What you pick only decides whether they show up again,
// and that is remembered in the browser's local storage (not in a cookie).

const NOTICE_KEY = "lotuscraft-hinweise"; // { cookies: "abgelehnt" | "auswahl" | "alle", newsletter: "gezeigt" }
const NEWSLETTER_DELAY = 15000; // ms on a page before the pop-up shows

function readNotices() {
  try {
    return JSON.parse(localStorage.getItem(NOTICE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveNotice(name, value) {
  try {
    localStorage.setItem(NOTICE_KEY, JSON.stringify({ ...readNotices(), [name]: value }));
  } catch {
    // Storage can be blocked (private mode); the window then shows again next time.
  }
}

// ---------- Cookie banner ----------
const COOKIE_LEVELS = [
  ["Notwendig", true],
  ["Präferenzen", false],
  ["Statistiken", false],
  ["Marketing", false],
];
const COOKIE_TABS = ["Zustimmung", "Details", "Über Cookies"];

const cookieMarkup = `
<dialog class="consent" id="cookie-dialog" aria-labelledby="cookie-title">
  <div class="consent__top">
    <span class="logo__mark">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="var(--gold)"/>
        <path d="M16 8c2 2.5 3 5 3 7.5S18 20 16 22c-2-2-3-4-3-6.5S14 10.5 16 8z" fill="#fff"/>
        <path d="M8 13c3 .5 5.5 2.5 6.8 5.4.5 1.2.8 2.4.9 3.6-3-.3-5.4-1.6-6.7-3.8C8.2 16.8 7.9 15 8 13zM24 13c-3 .5-5.5 2.5-6.8 5.4-.5 1.2-.8 2.4-.9 3.6 3-.3 5.4-1.6 6.7-3.8.8-1.4 1.1-3.2 1-5.2z" fill="#fff" opacity=".9"/>
      </svg>
    </span>
    <span class="consent__demo">Demo: Es wird nichts gesetzt</span>
  </div>

  <div class="consent__tabs" role="tablist" aria-label="Cookie-Abfrage">${COOKIE_TABS.map((label, i) => `
    <button class="consent__tab" type="button" role="tab" id="cookie-tab-${i}" aria-controls="cookie-panel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${label}</button>`).join("")}
  </div>

  <div class="consent__body">
    <div role="tabpanel" id="cookie-panel-0" aria-labelledby="cookie-tab-0">
      <h2 class="consent__title" id="cookie-title" tabindex="-1">Diese Webseite verwendet Cookies</h2>
      <p>Dieser Nachbau ist ein Studentenprojekt und setzt in Wirklichkeit keine Cookies. Der Banner zeigt nur, wie die Abfrage in einem Shop aussieht: Was du auch wählst, es wird nichts verfolgt und nichts weitergegeben. Gespeichert wird nur deine Auswahl hier, damit die Abfrage nicht auf jeder Seite wiederkommt. Mehr unter <a href="seite.html?s=datenschutz">Datenschutz</a>.</p>
    </div>
    <div role="tabpanel" id="cookie-panel-1" aria-labelledby="cookie-tab-1" hidden>
      <dl class="consent__details">
        <dt>Notwendig</dt>
        <dd>Merkt sich deinen Warenkorb und diese Auswahl: die Einträge <code>lotuscraft-cart</code> und <code>lotuscraft-hinweise</code> im lokalen Speicher des Browsers, keine Cookies.</dd>
        <dt>Präferenzen</dt>
        <dd>Würden zum Beispiel Sprache oder Region merken. Hier gibt es nichts davon.</dd>
        <dt>Statistiken</dt>
        <dd>Würden anonym zählen, welche Seiten besucht werden. Hier gibt es nichts davon.</dd>
        <dt>Marketing</dt>
        <dd>Würden Werbung auf dich zuschneiden. Hier gibt es nichts davon.</dd>
      </dl>
    </div>
    <div role="tabpanel" id="cookie-panel-2" aria-labelledby="cookie-tab-2" hidden>
      <p>Cookies sind kleine Textdateien, die eine Webseite im Browser ablegt, zum Beispiel um einen Warenkorb oder Einstellungen zu merken. Manche sind für den Betrieb nötig, andere dienen der Statistik oder der Werbung und brauchen deine Zustimmung.</p>
      <p>Dieser Nachbau nutzt statt Cookies den lokalen Speicher deines Browsers, und das nur für den Warenkorb und diese Auswahl.</p>
    </div>
  </div>

  <div class="consent__levels">${COOKIE_LEVELS.map(([label, necessary], i) => `
    <label class="consent__level" for="cookie-level-${i}">
      <span>${label}</span>
      <input class="consent__switch" type="checkbox" role="switch" id="cookie-level-${i}"${necessary ? " checked disabled" : ""}>
    </label>`).join("")}
  </div>

  <div class="consent__buttons">
    <button class="consent__button" type="button" data-choice="abgelehnt">Ablehnen</button>
    <button class="consent__button" type="button" data-choice="auswahl">Auswahl erlauben</button>
    <button class="consent__button consent__button--all" type="button" data-choice="alle">Alle zulassen</button>
  </div>
</dialog>`;

document.body.insertAdjacentHTML("beforeend", cookieMarkup);
const cookieDialog = document.getElementById("cookie-dialog");
const cookieTabs = [...cookieDialog.querySelectorAll(".consent__tab")];
const cookieSwitches = [...cookieDialog.querySelectorAll(".consent__switch")];

function selectCookieTab(index, focus = false) {
  cookieTabs.forEach((tab, i) => {
    tab.setAttribute("aria-selected", String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = i !== index;
  });
  if (focus) cookieTabs[index].focus();
}

// Opens the banner again (also from the page "Cookie Einstellungen").
function showCookieBanner() {
  if (cookieDialog.open) return;
  cookieSwitches.forEach((toggle) => (toggle.checked = toggle.disabled));
  selectCookieTab(0);
  cookieDialog.showModal();
  cookieDialog.querySelector(".consent__title").focus();
}

// "Alle zulassen" switches everything on, "Ablehnen" nothing; nothing is set either way.
function chooseCookies(choice) {
  saveNotice("cookies", choice);
  cookieDialog.close();
}

cookieTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectCookieTab(i));
  tab.addEventListener("keydown", (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (step) {
      e.preventDefault();
      selectCookieTab((i + step + cookieTabs.length) % cookieTabs.length, true);
    }
    if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      selectCookieTab(e.key === "Home" ? 0 : cookieTabs.length - 1, true);
    }
  });
});

cookieDialog.querySelector(".consent__buttons").addEventListener("click", (e) => {
  const button = e.target.closest("[data-choice]");
  if (!button) return;
  if (button.dataset.choice === "alle") cookieSwitches.forEach((toggle) => (toggle.checked = true));
  chooseCookies(button.dataset.choice);
});

// Escape counts as "Ablehnen", the privacy-friendly answer.
cookieDialog.addEventListener("cancel", () => saveNotice("cookies", "abgelehnt"));

// ---------- Newsletter pop-up ----------
const popupMarkup = `
<dialog class="popup" id="newsletter-dialog" aria-labelledby="popup-title">
  <button class="popup__close icon-btn" type="button" aria-label="Schließen">
    <svg class="icon" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>
  </button>
  <div class="popup__art" aria-hidden="true">
    <svg viewBox="0 0 200 200">
      <circle cx="100" cy="104" r="78" fill="rgba(255, 255, 255, .45)"/>
      <circle cx="100" cy="104" r="54" fill="rgba(255, 255, 255, .55)"/>
      <path d="M100 52c9 11 13 22 13 34s-5 22-13 31c-8-9-13-19-13-31s4-23 13-34z" fill="var(--gold)"/>
      <path d="M52 84c15 2 28 12 35 26 2 6 4 12 4 18-15-1-27-8-34-19-5-8-7-16-5-25zM148 84c-15 2-28 12-35 26-2 6-4 12-4 18 15-1 27-8 34-19 5-8 7-16 5-25z" fill="var(--gold)" opacity=".8"/>
      <path d="M40 150h120" stroke="var(--gold)" stroke-width="3" stroke-linecap="round" opacity=".6"/>
    </svg>
  </div>
  <div class="popup__content">
    <p class="popup__kicker">Newsletter</p>
    <h2 class="popup__title" id="popup-title">10&nbsp;% Rabatt auf deine erste Bestellung</h2>
    <p class="popup__text">Melde dich an und erhalte Angebote, Produkt-Updates und Beiträge zu Yoga und Meditation.</p>
    <form class="popup__form">
      <label class="visually-hidden" for="popup-email">E-Mail-Adresse</label>
      <input class="popup__input" type="email" id="popup-email" placeholder="Deine E-Mail-Adresse" autocomplete="off" required>
      <button class="btn btn--primary" type="submit">Jetzt anmelden</button>
      <p class="popup__status" role="status"></p>
    </form>
    <button class="popup__skip" type="button">Nein, danke</button>
    <p class="popup__demo">Demo: Es wird nichts gesendet oder gespeichert.</p>
  </div>
</dialog>`;

document.body.insertAdjacentHTML("beforeend", popupMarkup);
const popupDialog = document.getElementById("newsletter-dialog");

function showNewsletterPopup() {
  if (popupDialog.open) return;
  saveNotice("newsletter", "gezeigt");
  popupDialog.querySelector(".popup__status").textContent = "";
  popupDialog.showModal();
}

popupDialog.querySelector(".popup__close").addEventListener("click", () => popupDialog.close());
popupDialog.querySelector(".popup__skip").addEventListener("click", () => popupDialog.close());
// A click on the dark backdrop lands on the <dialog> itself: close it.
popupDialog.addEventListener("click", (e) => {
  if (e.target === popupDialog) popupDialog.close();
});
popupDialog.querySelector(".popup__form").addEventListener("submit", (e) => {
  e.preventDefault();
  popupDialog.querySelector(".popup__status").textContent =
    "Danke! Das ist nur eine Demo – in diesem Studentenprojekt wird nichts gesendet oder gespeichert.";
  e.currentTarget.reset();
});

// ---------- When they show ----------
// The banner opens right away on a first visit; the pop-up follows later, once,
// and waits while another window (menu, cart, search, banner) is open.
if (!readNotices().cookies) showCookieBanner();

if (!readNotices().newsletter) {
  let tries = 0;
  const later = () => {
    if (document.querySelector("dialog[open]") && tries++ < 6) setTimeout(later, 5000);
    else if (!document.querySelector("dialog[open]")) showNewsletterPopup();
  };
  setTimeout(later, NEWSLETTER_DELAY);
}
