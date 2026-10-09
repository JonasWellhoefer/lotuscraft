// Site layout shared by every page: header, menus and footer.
// The markup lives here once and replaces <div id="site-header"> and
// <div id="site-footer">. A plain <script> keeps this working when a page
// is opened by double-click (fetch() can't load local files there).

document.getElementById("site-header").outerHTML = `
<!-- Keyboard users can jump past the header; the link shows up when it gets focus. -->
<a href="#" class="skip-link">Zum Inhalt springen</a>

<!-- Student project notice: this page is a UI-class rebuild, not the real shop. -->
<div class="student-note" role="region" aria-label="Hinweis zum Studentenprojekt" lang="en">🎓 Student project – UI class rebuild, not the real Lotuscrafts shop.</div>

<!-- Trust bar -->
<div class="trustbar">
  <div class="container trustbar__inner" aria-live="polite">
    <button class="trustbar__arrow trustbar__arrow--prev" aria-label="Vorheriger Hinweis">
      <svg class="icon" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>
    </button>
    <div class="trustbar__item is-current">
      <span class="stars" role="img" aria-label="4,8 von 5 Sternen">
        <svg viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.7l6-.7z"/></svg>
        <svg viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.7l6-.7z"/></svg>
        <svg viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.7l6-.7z"/></svg>
        <svg viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.7l6-.7z"/></svg>
        <svg viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.1 6-5.3-3-5.3 3 1.1-6L1.4 7.7l6-.7z"/></svg>
      </span>
      <span class="small">(3231) <strong>4.80</strong> / 5.00</span>
    </div>
    <div class="trustbar__item hide-sm">
      <svg class="icon" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>
      <p class="small">Von Yoga-Lehrer:innen empfohlen</p>
    </div>
    <div class="trustbar__item hide-sm">
      <svg class="icon" viewBox="0 0 24 24"><path d="M12 3.5l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.4l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z"/></svg>
      <p class="small">Zeitloses Design</p>
    </div>
    <div class="trustbar__item">
      <svg class="icon" viewBox="0 0 24 24"><path d="M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10"/></svg>
      <p class="small">Gratis Versand ab 69€</p>
    </div>
    <button class="trustbar__arrow trustbar__arrow--next" aria-label="Nächster Hinweis">
      <svg class="icon" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
    </button>
  </div>
</div>

<!-- Header -->
<header class="header">
  <div class="container header__inner">
    <button class="icon-btn menu-toggle" aria-label="Menü öffnen" aria-controls="menu-drawer" aria-expanded="false">
      <svg class="icon" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>

    <a href="index.html" class="logo" aria-label="LotusCraft Startseite">
      <span class="logo__mark">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="16" fill="var(--gold)"/>
          <path d="M16 8c2 2.5 3 5 3 7.5S18 20 16 22c-2-2-3-4-3-6.5S14 10.5 16 8z" fill="#fff"/>
          <path d="M8 13c3 .5 5.5 2.5 6.8 5.4.5 1.2.8 2.4.9 3.6-3-.3-5.4-1.6-6.7-3.8C8.2 16.8 7.9 15 8 13zM24 13c-3 .5-5.5 2.5-6.8 5.4-.5 1.2-.8 2.4-.9 3.6 3-.3 5.4-1.6 6.7-3.8.8-1.4 1.1-3.2 1-5.2z" fill="#fff" opacity=".9"/>
        </svg>
      </span>
      <span class="logo__text">
        <span class="logo__name">LOTUSCRAFT</span>
        <span class="logo__tag">Student Rebuild</span>
      </span>
    </a>

    <!-- Items with data-menu get their dropdown panel below -->
    <nav class="nav" aria-label="Hauptnavigation">
      <ul class="nav__list">
        <li class="nav__item" data-menu="Yoga"><a href="kategorie.html?k=yoga" class="nav__link">Yoga</a></li>
        <li class="nav__item" data-menu="Meditation"><a href="kategorie.html?k=meditation" class="nav__link">Meditation</a></li>
        <li class="nav__item" data-menu="Bekleidung"><a href="kategorie.html?k=yoga-kleidung" class="nav__link">Bekleidung</a></li>
        <li class="nav__item" data-menu="Geschenke"><a href="kategorie.html?k=geschenkideen" class="nav__link">Geschenke</a></li>
        <li class="nav__item" data-section="Sale"><a href="kategorie.html?k=sale" class="nav__link">Sale</a></li>
      </ul>
    </nav>

    <div class="header__actions">
      <button class="icon-btn search-toggle" type="button" aria-label="Suche öffnen" aria-controls="search-dialog" aria-haspopup="dialog" aria-expanded="false">
        <svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>
      </button>
      <a href="seite.html?s=konto" class="icon-btn hide-sm" aria-label="Konto">
        <svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.5 3.6-5.5 7-5.5s6.2 2 7 5.5"/></svg>
      </a>
      <button class="icon-btn cart-link" type="button" aria-label="Warenkorb öffnen" aria-controls="cart-drawer" aria-haspopup="dialog" aria-expanded="false">
        <svg class="icon" viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6zM9 8V6.5a3 3 0 0 1 6 0V8"/></svg>
        <span class="cart-count" hidden>0</span>
      </button>
    </div>
  </div>
</header>
`;

document.getElementById("site-footer").outerHTML = `
<footer class="footer">
  <!-- Newsletter (demo only: nothing is sent or stored) -->
  <div class="newsletter">
    <div class="container">
      <h2 class="newsletter__title">Bleib inspiriert!</h2>
      <p class="newsletter__text">Melde dich für unseren Newsletter an und erhalte 10% Rabatt auf deine Bestellung. Erhalte zusätzlich exklusive Angebote, Produkt-Updates und spannende Beiträge zu Yoga und Meditation.</p>
      <form class="newsletter__form">
        <label class="visually-hidden" for="newsletter-email">E-Mail-Adresse</label>
        <input class="newsletter__input" type="email" id="newsletter-email" placeholder="Deine E-Mail-Adresse" autocomplete="email" required>
        <button class="newsletter__button" type="submit">Jetzt anmelden</button>
        <p class="newsletter__status" role="status"></p>
      </form>
    </div>
  </div>

  <div class="container footer__links">
    <nav class="footer__col" aria-labelledby="footer-service">
      <h3 class="footer__heading" id="footer-service">Kundenservice</h3>
      <ul>
        <li><a href="seite.html?s=hilfe-kontakt">Hilfe &amp; Kontakt</a></li>
        <li><a href="seite.html?s=faq">FAQ</a></li>
        <li><a href="seite.html?s=retouren">Retouren &amp; Umtausch</a></li>
        <li><a href="seite.html?s=versand">Versandkosten</a></li>
        <li><a href="seite.html?s=widerruf">Widerrufsbelehrung</a></li>
        <li><a href="seite.html?s=vertrag-widerrufen">Vertrag widerrufen</a></li>
        <li><a href="seite.html?s=agb">AGB</a></li>
        <li><a href="seite.html?s=datenschutz">Datenschutz</a></li>
        <li><a href="seite.html?s=cookies">Cookie Einstellungen</a></li>
        <li><a href="seite.html?s=impressum">Impressum</a></li>
      </ul>
    </nav>
    <nav class="footer__col" aria-labelledby="footer-about">
      <h3 class="footer__heading" id="footer-about">Über uns &amp; Inspiration</h3>
      <ul>
        <li><a href="seite.html?s=ueber-uns">Über Uns</a></li>
        <li><a href="seite.html?s=blog">Blog</a></li>
        <li><a href="seite.html?s=nachhaltigkeit">Nachhaltigkeit</a></li>
        <li><a href="seite.html?s=store">Store Wien</a></li>
        <li><a href="seite.html?s=jobs">Jobs @ LotusCraft</a></li>
        <li><a href="seite.html?s=onlinekurse">Online Yogakurse</a></li>
      </ul>
    </nav>
    <nav class="footer__col" aria-labelledby="footer-products">
      <h3 class="footer__heading" id="footer-products">Produkte &amp; Beratung</h3>
      <ul>
        <li><a href="seite.html?s=yogamatten-vergleich">Yogamatten im Vergleich</a></li>
        <li><a href="seite.html?s=quiz">Yogamatten Quiz - Finde die richtige Matte</a></li>
        <li><a href="seite.html?s=guide-kissen">Produktguide – Meditationskissen</a></li>
        <li><a href="seite.html?s=guide-bolster">Produktguide – Yogabolster</a></li>
        <li><a href="seite.html?s=rabatt-studios">Rabatt für Yoga-Studios</a></li>
        <li><a href="seite.html?s=rabatt-gewerbe">Rabatt für B2B &amp; Gewerbekunden</a></li>
      </ul>
    </nav>
    <div class="footer__col">
      <h3 class="footer__heading">We inspire to practice!</h3>
      <div class="socials">
        <a href="#" aria-label="Facebook (Platzhalter)">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8"/><path d="M8.9 13V8.6h1.5l.2-1.7H8.9V5.8c0-.5.1-.8.8-.8h.9V3.5a12 12 0 0 0-1.3-.1c-1.3 0-2.2.8-2.2 2.3v1.2H5.6v1.7h1.5V13z" fill="#fff"/></svg>
        </a>
        <a href="#" aria-label="Instagram (Platzhalter)">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8"/><rect x="4" y="4" width="8" height="8" rx="2.4" fill="none" stroke="#fff" stroke-width="1.2"/><circle cx="8" cy="8" r="1.9" fill="none" stroke="#fff" stroke-width="1.2"/><circle cx="10.4" cy="5.6" r=".6" fill="#fff"/></svg>
        </a>
        <a href="#" aria-label="Pinterest (Platzhalter)">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8"/><path d="M7.6 9.6 7 12.6M6.2 7.6c0-1.6 1-2.6 2.3-2.6 1.4 0 2.1 1 2.1 2.1 0 1.5-.8 2.6-1.9 2.6-.7 0-1.1-.5-1-1.1" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></svg>
        </a>
        <a href="#" aria-label="YouTube (Platzhalter)">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8"/><rect x="3.5" y="5" width="9" height="6" rx="1.6" fill="#fff"/><path d="M7.2 6.6v2.8L9.6 8z"/></svg>
        </a>
      </div>
    </div>
  </div>

  <div class="container footer__bottom">
    <p class="footer__copyright">© 2026 LotusCraft · Studentenprojekt</p>

    <div class="payments" role="img" aria-label="Zahlungsarten (neutrale Platzhalter-Icons)">${PAYMENT_ICONS}
    </div>

    <div class="language">
      <svg class="language__flag" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="7" fill="#000"/><rect y="6.6" width="30" height="6.8" fill="#dd0000"/><rect y="13.3" width="30" height="6.7" fill="#ffce00"/></svg>
      <label class="visually-hidden" for="language-select">Sprache</label>
      <select class="language__select" id="language-select">
        <option>Deutsch</option>
        <option lang="en">English</option>
      </select>
      <svg class="language__chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>
    </div>
  </div>
</footer>

<!-- Mobile menu (opened by the menu button below 1060px) -->
<dialog class="drawer" id="menu-drawer" aria-label="Menü">
  <div class="drawer__top">
    <a href="index.html" class="logo" aria-label="LotusCraft Startseite">
      <span class="logo__mark">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="16" fill="var(--gold)"/>
          <path d="M16 8c2 2.5 3 5 3 7.5S18 20 16 22c-2-2-3-4-3-6.5S14 10.5 16 8z" fill="#fff"/>
          <path d="M8 13c3 .5 5.5 2.5 6.8 5.4.5 1.2.8 2.4.9 3.6-3-.3-5.4-1.6-6.7-3.8C8.2 16.8 7.9 15 8 13zM24 13c-3 .5-5.5 2.5-6.8 5.4-.5 1.2-.8 2.4-.9 3.6 3-.3 5.4-1.6 6.7-3.8.8-1.4 1.1-3.2 1-5.2z" fill="#fff" opacity=".9"/>
        </svg>
      </span>
      <span class="logo__text">
        <span class="logo__name">LOTUSCRAFT</span>
        <span class="logo__tag">Student Rebuild</span>
      </span>
    </a>
    <button class="icon-btn drawer__close" aria-label="Menü schließen">
      <svg class="icon" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>
    </button>
  </div>

  <nav class="drawer__nav" aria-label="Mobile Navigation"></nav>

  <div class="drawer__footer">
    <a href="seite.html?s=hilfe-kontakt">Kontakt &amp; Hilfe</a>
    <a href="seite.html?s=konto">Account</a>
    <a href="seite.html?s=ueber-uns">Über Uns</a>
    <div class="language">
      <svg class="language__flag" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="7" fill="#000"/><rect y="6.6" width="30" height="6.8" fill="#dd0000"/><rect y="13.3" width="30" height="6.7" fill="#ffce00"/></svg>
      <label class="visually-hidden" for="drawer-language-select">Sprache</label>
      <select class="language__select" id="drawer-language-select">
        <option>Deutsch</option>
        <option lang="en">English</option>
      </select>
      <svg class="language__chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg>
    </div>
  </div>
</dialog>

<!-- Cart drawer (demo: nothing is ever ordered) -->
<dialog class="cart-drawer" id="cart-drawer" aria-labelledby="cart-title">
  <div class="cart-drawer__header">
    <p class="cart-drawer__title" id="cart-title">Warenkorb</p>
    <button class="icon-btn cart-drawer__close" type="button" aria-label="Warenkorb schließen">
      <svg class="icon" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>
    </button>
  </div>
  <div class="cart-drawer__body"></div>
</dialog>

<!-- Search (finds products from the shared data while typing) -->
<dialog class="search" id="search-dialog" aria-label="Suche">
  <button class="icon-btn search__close" type="button" aria-label="Suche schließen">
    <svg class="icon" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>
  </button>
  <form class="search__form" role="search">
    <label class="visually-hidden" for="search-input">Produkte suchen</label>
    <svg class="search__icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>
    <input class="search__input" id="search-input" type="search" placeholder="Suche..." autocomplete="off" autofocus>
    <button class="search__clear" type="button" aria-label="Eingabe löschen" hidden>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>
    </button>
  </form>
  <p class="visually-hidden" role="status" id="search-status"></p>
  <div class="search__results"></div>
</dialog>
`;

// ---------- Trust bar ----------
// On phones only one hint shows at a time; the arrows step through them.
const trustItems = [...document.querySelectorAll(".trustbar__item")];
let trustIndex = 0;

function showTrustItem(step) {
  trustItems[trustIndex].classList.remove("is-current");
  trustIndex = (trustIndex + step + trustItems.length) % trustItems.length;
  trustItems[trustIndex].classList.add("is-current");
}

document.querySelector(".trustbar__arrow--prev").addEventListener("click", () => showTrustItem(-1));
document.querySelector(".trustbar__arrow--next").addEventListener("click", () => showTrustItem(1));

// ---------- Skip link ----------
// The page's <main> gets an id (if it has none) and can take focus, so the
// link lands there.
const mainContent = document.querySelector("main");
mainContent.id ||= "main";
mainContent.tabIndex = -1;
document.querySelector(".skip-link").href = `#${mainContent.id}`;

// ---------- Newsletter (demo) ----------
// This is a student project: the form never sends or stores the address.
const newsletterForm = document.querySelector(".newsletter__form");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  newsletterForm.querySelector(".newsletter__status").textContent =
    "Danke! Das ist nur eine Demo – in diesem Studentenprojekt wird nichts gesendet oder gespeichert.";
  newsletterForm.reset();
});

// ---------- Mobile menu ----------
const drawer = document.getElementById("menu-drawer");
const drawerNav = drawer.querySelector(".drawer__nav");
const menuToggle = document.querySelector(".menu-toggle");
const trail = []; // the panels opened so far, e.g. [Yoga, Yogamatten]

const chevron = (direction) =>
  `<svg class="drawer__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="${direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}"/></svg>`;

function renderMenu(direction) {
  const parent = trail[trail.length - 1];
  const items = parent ? parent.children : menu;

  const back = parent
    ? `<button class="drawer__back" data-action="back">${chevron("left")}<span>${parent.label}</span></button>`
    : "";
  const list = items.map((item, i) => {
    if (typeof item === "string") {
      return `<li><a href="${menuLinks[item] || "#"}" class="drawer__link drawer__link--plain">${item}</a></li>`;
    }
    return item.children
      ? `<li><button class="drawer__link" data-index="${i}">${menuIcon(item.icon)}<span>${item.label}</span>${chevron("right")}</button></li>`
      : `<li><a href="${menuLinks[item.label] || "#"}" class="drawer__link">${menuIcon(item.icon)}<span>${item.label}</span></a></li>`;
  }).join("");

  drawerNav.innerHTML = `${back}<ul>${list}</ul>`;

  // Restart the slide-in animation in the direction we're moving.
  drawerNav.dataset.direction = direction;
  drawerNav.classList.remove("is-sliding");
  void drawerNav.offsetWidth;
  drawerNav.classList.add("is-sliding");

  if (drawer.open) drawerNav.querySelector("button, a").focus();
}

drawerNav.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  if (button.dataset.action === "back") {
    const closed = trail.pop();
    renderMenu("back");
    // Return focus to the item we came from, not just the top of the list.
    const items = trail.length ? trail[trail.length - 1].children : menu;
    drawerNav.querySelector(`[data-index="${items.indexOf(closed)}"]`).focus();
  } else {
    const items = trail.length ? trail[trail.length - 1].children : menu;
    trail.push(items[button.dataset.index]);
    renderMenu("forward");
  }
});

menuToggle.addEventListener("click", () => {
  trail.length = 0;
  renderMenu("none");
  drawer.showModal();
  menuToggle.setAttribute("aria-expanded", "true");
  drawerNav.querySelector("button, a").focus();
});

drawer.querySelector(".drawer__close").addEventListener("click", () => drawer.close());
// On tablets the menu is a side panel: a click on the dark rest of the page closes it.
drawer.addEventListener("click", (e) => {
  if (e.target !== drawer) return;
  const box = drawer.getBoundingClientRect();
  if (e.clientX > box.right || e.clientX < box.left || e.clientY > box.bottom || e.clientY < box.top) drawer.close();
});
// Safari doesn't focus buttons on click, so hand focus back explicitly.
drawer.addEventListener("close", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.focus();
});

// The desktop navigation takes over from 1060px, so close the drawer there.
window.matchMedia("(min-width: 1060px)").addEventListener("change", (e) => {
  if (e.matches && drawer.open) drawer.close();
});

// ---------- Desktop mega menu ----------
// Hovering a nav item (after a short pause, so sweeping across the nav
// doesn't flicker) or tabbing onto it opens its full-width dropdown.
// Escape closes it again.
const header = document.querySelector(".header");
const megaItems = [...document.querySelectorAll(".nav__item[data-menu]")];
let openMegaItem = null;
let megaTimer = null;
let suppressFocusOpen = false;

function megaColumn(category, column) {
  // An entry without children (e.g. "Yoga-Sets") becomes one "Alle …" link.
  const links = column.children || [`Alle ${column.label}`];
  const items = links.map((label, i) => {
    const icon = column.children && i === 0 ? category.icon : linkIcons[label] || column.icon;
    return `<li><a href="${menuLinks[label] || "#"}" class="mega__link">${menuIcon(icon, "mega__icon")}<span>${label}</span></a></li>`;
  }).join("");
  return `
        <div class="mega__column">
          <p class="mega__heading">${column.label}</p>
          <ul class="mega__links">${items}</ul>
        </div>`;
}

function megaPromo({ kicker, title, key, scene, product }) {
  // Extra room below the figure keeps it clear of the label at the bottom.
  const art = scene
    ? sceneSvg(scene, "0 -20 100 160", "xMidYMax")
    : `<svg viewBox="0 0 180 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
         <rect width="180" height="225" fill="#f1f0ee"/>
         <g transform="translate(0 20)">${shapes[product](COTTON)}</g>
       </svg>`;
  return `
        <a href="${key ? `kategorie.html?k=${key}` : "#"}" class="mega__promo">
          ${art}
          <span class="mega__promo-details">
            <span class="mega__promo-kicker">${kicker}</span>
            <span class="mega__promo-title">${title}</span>
          </span>
        </a>`;
}

function setMegaOpen(item) {
  if (openMegaItem === item) return;
  if (openMegaItem) {
    openMegaItem.classList.remove("is-open");
    openMegaItem.querySelector(".nav__link").setAttribute("aria-expanded", "false");
  }
  openMegaItem = item;
  if (item) {
    item.classList.add("is-open");
    item.querySelector(".nav__link").setAttribute("aria-expanded", "true");
  }
  header.classList.toggle("has-open-menu", Boolean(item));
}

megaItems.forEach((item) => {
  const category = menu.find((entry) => entry.label === item.dataset.menu);
  const columns = category.children
    .filter((column) => !column.mobileOnly)
    .map((column) => megaColumn(category, column))
    .join("");
  const id = `mega-${category.label.toLowerCase()}`;

  item.insertAdjacentHTML("beforeend", `
    <div class="mega" id="${id}">
      <div class="mega__grid">${columns}${category.promo ? megaPromo(category.promo) : ""}
      </div>
    </div>`);

  const link = item.querySelector(".nav__link");
  link.setAttribute("aria-expanded", "false");
  link.setAttribute("aria-controls", id);

  item.addEventListener("mouseenter", () => {
    clearTimeout(megaTimer);
    // Switch at once when moving between items, wait a moment otherwise.
    megaTimer = setTimeout(() => setMegaOpen(item), openMegaItem ? 0 : 80);
  });
  item.addEventListener("mouseleave", () => {
    clearTimeout(megaTimer);
    megaTimer = setTimeout(() => setMegaOpen(null), 150);
  });
  item.addEventListener("focusin", () => {
    if (suppressFocusOpen) return;
    clearTimeout(megaTimer);
    setMegaOpen(item);
  });
  item.addEventListener("focusout", (e) => {
    if (!item.contains(e.relatedTarget) && openMegaItem === item) setMegaOpen(null);
  });
  item.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || openMegaItem !== item) return;
    setMegaOpen(null);
    // Put focus back on the nav link without the focus reopening the menu.
    suppressFocusOpen = true;
    link.focus();
    suppressFocusOpen = false;
  });
});

// ---------- Current section ----------
// A page can name its section, e.g. <body data-nav="Yoga">, to highlight it.
const currentNav = document.querySelector(`.nav__item[data-menu="${document.body.dataset.nav}"] .nav__link`);
if (currentNav) {
  currentNav.classList.add("is-current");
  currentNav.setAttribute("aria-current", "true");
}

// ---------- Search ----------
// Shows matching products while you type (first four, like the original).
// Enter and "Alle anzeigen" lead to the results page, which lists every match.
const SEARCH_PREVIEW = 4;
const searchDialog = document.getElementById("search-dialog");
const searchToggle = document.querySelector(".search-toggle");
const searchForm = searchDialog.querySelector(".search__form");
const searchInput = searchDialog.querySelector(".search__input");
const searchClear = searchDialog.querySelector(".search__clear");
const searchResults = searchDialog.querySelector(".search__results");
const searchStatus = searchDialog.querySelector("#search-status");
let searchTimer = null;
let searchOpener = null;

// The query is typed by the visitor, so escape it before showing it.
const escapeHtml = (text) => text.replace(/[&<>"']/g, (ch) => `&#${ch.charCodeAt(0)};`);

// "Alle anzeigen" adds `typ=produkt`: products only, as on the original.
const resultsHref = (query, productsOnly) => `suche.html?q=${encodeURIComponent(query)}${productsOnly ? "&typ=produkt" : ""}`;

function renderSearch() {
  const query = searchInput.value.trim();
  searchClear.hidden = !searchInput.value;

  if (!query) {
    searchResults.innerHTML = "";
    searchStatus.textContent = "";
    return;
  }

  const products = searchProducts(query);
  const pages = searchPages(query);
  const countText = `${products.length} ${products.length === 1 ? "Suchergebnis" : "Suchergebnisse"}`;
  searchStatus.textContent = products.length || pages.length ? countText : "Keine Ergebnisse";

  if (!products.length && !pages.length) {
    searchResults.innerHTML = `<p class="search__empty">Keine Ergebnisse für „${escapeHtml(query)}“.</p>`;
    return;
  }

  const shown = products.slice(0, SEARCH_PREVIEW);
  const productBlock = products.length ? `
      <div class="search__head">
        <p>${countText}</p>
        ${products.length > shown.length ? `<a class="search__all" href="${resultsHref(query, true)}">Alle anzeigen</a>` : ""}
      </div>
      <div class="search__grid">${shown.map(productCard).join("")}</div>` : "";
  const pageBlock = pages.length ? `
      <p class="search__label">Seiten und Blog</p>
      <ul class="search__pages">${pages.map((page) => `<li><a href="${page.href}">${page.title}</a></li>`).join("")}</ul>` : "";
  searchResults.innerHTML = productBlock + pageBlock;
}

searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderSearch, 120);
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) location.href = resultsHref(query, false);
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  renderSearch();
  searchInput.focus();
});

searchToggle.addEventListener("click", () => {
  searchOpener = document.activeElement; // the icon, or another button that calls this click (404 page)
  searchDialog.showModal(); // focuses the input (autofocus)
  searchToggle.setAttribute("aria-expanded", "true");
  searchInput.select();
});

searchDialog.querySelector(".search__close").addEventListener("click", () => searchDialog.close());

// Close on a click outside the box (on the dark backdrop).
searchDialog.addEventListener("click", (e) => {
  if (e.target !== searchDialog) return;
  const box = searchDialog.getBoundingClientRect();
  const outside = e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom;
  if (outside) searchDialog.close();
});

// Give focus back to whatever opened the search (Safari doesn't focus
// buttons on click, so fall back to the icon).
searchDialog.addEventListener("close", () => {
  searchToggle.setAttribute("aria-expanded", "false");
  const opener = searchOpener && searchOpener !== document.body && searchOpener.isConnected ? searchOpener : searchToggle;
  opener.focus();
});

// ---------- Cart (demo) ----------
// The cart remembers items in this browser (localStorage) so they survive
// switching pages. Nothing is ever ordered: "Zur Kasse" just ends the demo.
const CART_KEY = "lotuscraft-cart";
const FREE_SHIPPING_FROM = 69;
const cartDrawer = document.getElementById("cart-drawer");
const cartBody = cartDrawer.querySelector(".cart-drawer__body");
const cartToggle = document.querySelector(".cart-link");
let cartItems = loadCart();
let cartOpener = null;

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  } catch {
    // Storage can be blocked (private mode); the cart then lasts for this page.
  }
  renderCart();
}

// `item` = { id, name, variant, hex, price, href }; the same id adds up.
function addToCart(item) {
  const existing = cartItems.find((entry) => entry.id === item.id);
  if (existing) existing.qty += 1;
  else cartItems.push({ ...item, qty: 1 });
  saveCart();
}

function openCart() {
  cartOpener = document.activeElement;
  if (!cartDrawer.open) cartDrawer.showModal();
  cartToggle.setAttribute("aria-expanded", "true");
}

function cartItemMarkup(item) {
  const href = item.href || "#";
  return `
      <li class="cart-item">
        <a href="${href}" class="cart-item__media" tabindex="-1" aria-hidden="true">
          <svg viewBox="0 0 180 225"><rect width="180" height="225" fill="#f1f0ee"/><g transform="translate(0 22)">${shapes.mat(item.hex)}</g></svg>
        </a>
        <div class="cart-item__info">
          <a href="${href}" class="cart-item__name">${item.name}</a>
          ${item.variant ? `<p class="cart-item__variant">${item.variant}</p>` : ""}
          <p class="cart-item__price">${formatPrice(item.price * item.qty)}</p>
          <div class="cart-item__actions">
            <div class="qty" role="group" aria-label="Menge: ${item.name}${item.variant ? ` (${item.variant})` : ""}">
              <button class="qty__btn" type="button" data-action="dec" data-id="${item.id}" aria-label="Eins weniger">−</button>
              <span class="qty__value">${item.qty}</span>
              <button class="qty__btn" type="button" data-action="inc" data-id="${item.id}" aria-label="Eins mehr">+</button>
            </div>
            <button class="cart-item__remove" type="button" data-action="remove" data-id="${item.id}">Entfernen</button>
          </div>
        </div>
      </li>`;
}

function renderCart() {
  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const badge = document.querySelector(".cart-count");
  badge.textContent = count;
  badge.hidden = count === 0;
  cartToggle.setAttribute("aria-label", count ? `Warenkorb öffnen, ${count} Artikel` : "Warenkorb öffnen");

  if (!count) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <p class="cart-empty__title">Dein Warenkorb ist leer</p>
        <a href="kategorie.html?k=yogamatten" class="btn btn--primary">Jetzt shoppen</a>
      </div>`;
    return;
  }

  const missing = FREE_SHIPPING_FROM - total;
  const shippingText = missing > 0
    ? `Noch <strong>${formatPrice(missing)}</strong> bis zum kostenlosen Versand`
    : "Dein Versand ist kostenlos";

  cartBody.innerHTML = `
      <div class="cart-shipping">
        <p>${shippingText}</p>
        <div class="cart-shipping__bar"><span style="width: ${Math.min(100, (total / FREE_SHIPPING_FROM) * 100)}%"></span></div>
      </div>
      <ul class="cart-items">${cartItems.map(cartItemMarkup).join("")}
      </ul>
      <div class="cart-drawer__footer">
        <p class="cart-total"><span>Zwischensumme</span><span>${formatPrice(total)}</span></p>
        <p class="cart-note">Inkl. MwSt., zzgl. Versandkosten.</p>
        <button class="btn btn--primary btn--block cart-checkout" type="button">Zur Kasse</button>
        <p class="cart-checkout-note" role="status"></p>
      </div>`;
}

cartToggle.addEventListener("click", openCart);
cartDrawer.querySelector(".cart-drawer__close").addEventListener("click", () => cartDrawer.close());

// A click on the dark backdrop lands on the <dialog> itself: close it.
cartDrawer.addEventListener("click", (e) => {
  if (e.target === cartDrawer) cartDrawer.close();
});

// Give focus back to whatever opened the cart (Safari doesn't focus
// buttons on click, so fall back to the cart button).
cartDrawer.addEventListener("close", () => {
  cartToggle.setAttribute("aria-expanded", "false");
  const opener = cartOpener && cartOpener !== document.body && cartOpener.isConnected ? cartOpener : cartToggle;
  opener.focus();
});

cartBody.addEventListener("click", (e) => {
  if (e.target.closest(".cart-checkout")) {
    cartBody.querySelector(".cart-checkout-note").textContent =
      "Hier endet die Demo: In diesem Studentenprojekt gibt es keine Kasse, es wird nichts bestellt.";
    return;
  }

  const button = e.target.closest("[data-action]");
  if (!button) return;
  const { action, id } = button.dataset;
  const item = cartItems.find((entry) => entry.id === id);
  if (action === "inc") item.qty += 1;
  if (action === "dec") item.qty -= 1;
  if (action === "remove" || item.qty < 1) cartItems = cartItems.filter((entry) => entry !== item);
  saveCart();

  // Keep keyboard focus on the same control, or on the close button if the item is gone.
  const same = cartBody.querySelector(`[data-action="${action}"][data-id="${CSS.escape(id)}"]`);
  (same || cartDrawer.querySelector(".cart-drawer__close")).focus();
});

renderCart();
