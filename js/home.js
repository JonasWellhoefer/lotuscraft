// Homepage sections: product grids, community row, review carousel, tabs.

// ---------- Product grids (bestsellers + set offers) ----------
const collections = { ...bestsellers, ...bundles };

document.querySelectorAll(".product-grid").forEach((grid) => {
  grid.innerHTML = collections[grid.dataset.category].map(productCard).join("");
});

// ---------- Community inspiration ----------
// The original shows real Instagram posts. Here: invented "Musterfrau"-style
// accounts and small drawn yoga scenes instead of other people's photos.
const communityPosts = [
  { handle: "erika.musterfrau", pose: "lunge", wall: "#d9d2c7", floor: "#a88b6a", mat: "#4f5a4f" },
  { handle: "max.mustermann", pose: "legRaise", wall: "#8a8178", floor: "#5f554b", mat: "#2f3a35" },
  { handle: "yoga.beispiel", pose: "supported", wall: "#e4e0d9", floor: "#cbbfae", mat: "#b8ad9c" },
  { handle: "flow.demo", pose: "warrior", wall: "#b9c4b0", floor: "#7f8582", mat: "#2f3b3a" },
  { handle: "om.platzhalter", pose: "seated", wall: "#ece9e3", floor: "#c9b293", mat: "#8b7d6b" },
];

function communityTile(post) {
  return `
    <a href="#" class="community-tile" aria-label="Beitrag von @${post.handle} (Platzhalter)">
      ${sceneSvg(post)}
      <span class="community-tile__handle">${post.handle}</span>
    </a>`;
}

document.querySelector(".community-row").innerHTML = communityPosts.map(communityTile).join("");

// ---------- Testimonials ----------
// Invented sample reviews: the original shows real customers' names and
// towns, which don't belong in a public student repo.
const reviews = [
  { name: "Lena", stars: 5, product: "Yogamatte ARISE", text: "Super rutschfest, auch wenn es mal schweißtreibend wird. Die Farbe ist in echt noch schöner.", meta: "vor 2 Stunden" },
  { name: "Markus", stars: 5, product: "Yogablock Kork 2er Set", text: "Stabil, angenehm griffig und riecht nicht. Genau das, was ich gesucht habe.", meta: "vor 5 Stunden" },
  { name: "Sophie", stars: 4, product: "Meditationskissen Lotus (H: 15cm)", text: "Sehr bequem und gut verarbeitet. Für mich hätte es einen Tick höher sein dürfen, sonst perfekt.", meta: "vor 9 Stunden" },
  { name: "Jana", stars: 5, product: "Yogamatte PURE", text: "Die matte Oberfläche fühlt sich toll an. Lieferung ging schnell und die Verpackung war plastikfrei.", meta: "vor einem Tag" },
  { name: "Anonym", stars: 5, product: "Meditationsmatte Zabuton", text: "Ergänzt mein Kissen perfekt, die Knie danken es mir. Klare Empfehlung.", meta: "vor einem Tag" },
  { name: "Tobias", stars: 4, product: "FEND Mens Sweater", text: "Weich und gemütlich, fällt etwas größer aus. Nach dem Waschen immer noch in Form.", meta: "vor 2 Tagen" },
  { name: "Clara", stars: 5, product: "Yogamatte MUDRA", text: "Für den Preis eine richtig gute Einsteigermatte. Leicht genug, um sie zum Kurs mitzunehmen.", meta: "vor 3 Tagen" },
];

const star = (filled) =>
  `<svg viewBox="0 0 20 20" class="${filled ? "is-filled" : ""}"><path d="${STAR_PATH}"/></svg>`;

function reviewCard(review) {
  const stars = Array.from({ length: 5 }, (_, i) => star(i < review.stars)).join("");
  return `
    <article class="review">
      <div class="review__head">
        <span class="review__name">${review.name}</span>
        <span class="review__stars" aria-label="${review.stars} von 5 Sternen">${stars}</span>
      </div>
      <p class="review__badge">
        <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7"/><path d="M5 8.2l2 2 4-4.4"/></svg>
        Verifizierter Kauf
      </p>
      <p class="review__product">${review.product}</p>
      <p class="review__text">${review.text}</p>
      <p class="review__meta">${review.meta}</p>
    </article>`;
}

const track = document.querySelector(".carousel__track");
track.innerHTML = reviews.map(reviewCard).join("");

function scrollByCard(direction) {
  const card = track.querySelector(".review");
  const step = card.offsetWidth + parseFloat(getComputedStyle(track).columnGap);
  const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  if (direction > 0 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
  else track.scrollBy({ left: direction * step, behavior: "smooth" });
}

document.querySelector(".carousel__arrow--prev").addEventListener("click", () => scrollByCard(-1));
document.querySelector(".carousel__arrow--next").addEventListener("click", () => scrollByCard(1));

// Autoplay like the original, with a pause button. Respects reduced motion.
const pauseButton = document.querySelector(".carousel__pause");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let autoplay = null;

function setPaused(paused) {
  clearInterval(autoplay);
  autoplay = paused ? null : setInterval(() => scrollByCard(1), 5000);
  pauseButton.setAttribute("aria-pressed", paused);
  pauseButton.querySelector("span").textContent = paused ? "Abspielen" : "Pause";
  pauseButton.querySelector("path").setAttribute("d", paused ? "M8 5l11 7-11 7z" : "M9 6v12M15 6v12");
}

pauseButton.addEventListener("click", () => setPaused(autoplay !== null));
setPaused(reducedMotion);

// ---------- Tabs ----------
// Each tab list only controls its own panels, so several tab groups
// (bestsellers, set offers) can live on the same page.
document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];

  function selectTab(tab) {
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active);
      t.tabIndex = active ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (e) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (!step) return;
      const next = tabs[(i + step + tabs.length) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });
});
