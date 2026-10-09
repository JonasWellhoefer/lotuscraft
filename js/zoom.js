// Gallery zoom (produkt.html): a click on a picture opens all of them large in
// a full-screen dialog, like the original's zoom window. From 1060px the
// thumbnails stand on the left and the arrows beside the picture; below that
// the picture fits the screen with dots and arrows at the bottom. Swiping
// works through scroll snapping, keys and buttons scroll the same track.

const zoomSource = document.querySelector(".gallery__track");

if (zoomSource) {
  const zoomChevron = (path) => `<svg viewBox="0 0 8 15" aria-hidden="true"><path d="${path}"/></svg>`;
  const ZOOM_PREV = "M7 1.5 1 7.5l6 6";
  const ZOOM_NEXT = "M1 1.5l6 6-6 6";

  const zoomDialog = document.createElement("dialog");
  zoomDialog.className = "zoom";
  zoomDialog.setAttribute("aria-label", "Produktbilder in groß");
  zoomDialog.innerHTML = `
    <ul class="zoom__thumbs" role="list"></ul>
    <div class="zoom__stage">
      <div class="zoom__track" tabindex="0" role="region" aria-label="Produktbilder"></div>
      <button class="zoom__arrow zoom__arrow--prev" type="button" aria-label="Vorheriges Bild">${zoomChevron(ZOOM_PREV)}</button>
      <button class="zoom__arrow zoom__arrow--next" type="button" aria-label="Nächstes Bild">${zoomChevron(ZOOM_NEXT)}</button>
    </div>
    <div class="zoom__bar">
      <button class="zoom__step zoom__step--prev" type="button" aria-label="Vorheriges Bild">${zoomChevron(ZOOM_PREV)}</button>
      <ul class="zoom__dots" role="list"></ul>
      <button class="zoom__step zoom__step--next" type="button" aria-label="Nächstes Bild">${zoomChevron(ZOOM_NEXT)}</button>
    </div>
    <button class="zoom__close" type="button" autofocus aria-label="Zoom schließen"><svg viewBox="0 0 18 18" aria-hidden="true"><path d="M17 17 1 1M17 1 1 17"/></svg></button>
    <p class="visually-hidden" role="status"></p>`;
  document.getElementById("product").appendChild(zoomDialog);

  const zoomTrack = zoomDialog.querySelector(".zoom__track");
  const zoomThumbs = zoomDialog.querySelector(".zoom__thumbs");
  const zoomDots = zoomDialog.querySelector(".zoom__dots");
  const zoomStatus = zoomDialog.querySelector("[role=status]");
  const zoomPrevious = zoomDialog.querySelectorAll(".zoom__arrow--prev, .zoom__step--prev");
  const zoomNext = zoomDialog.querySelectorAll(".zoom__arrow--next, .zoom__step--next");
  const zoomSlowly = window.matchMedia("(prefers-reduced-motion: reduce)");
  let zoomOpener = null;
  let zoomCount = 0;
  let zoomIndex = 0;

  // Marks the shown picture in thumbnails and dots, greys out the arrows at the ends.
  function zoomMark(index, announce) {
    zoomIndex = index;
    [zoomThumbs, zoomDots].forEach((list) => {
      list.querySelectorAll("button").forEach((button, i) => {
        if (i === index) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
    });
    zoomPrevious.forEach((button) => button.setAttribute("aria-disabled", String(index === 0)));
    zoomNext.forEach((button) => button.setAttribute("aria-disabled", String(index === zoomCount - 1)));
    zoomThumbs.querySelector("[aria-current]")?.scrollIntoView({ block: "nearest" });
    zoomDots.querySelector("[aria-current]")?.scrollIntoView({ block: "nearest", inline: "nearest" });
    if (announce) zoomStatus.textContent = `Bild ${index + 1} von ${zoomCount}`;
  }

  function zoomGo(index) {
    const target = Math.min(Math.max(index, 0), zoomCount - 1);
    zoomTrack.scrollTo({ left: target * zoomTrack.clientWidth, behavior: zoomSlowly.matches ? "auto" : "smooth" });
  }

  function zoomOpen(index, opener) {
    const items = [...zoomSource.querySelectorAll(".gallery__item")];
    zoomCount = items.length;
    zoomTrack.innerHTML = items.map((item, i) => `
        <div class="zoom__slide" role="group" aria-roledescription="Bild" aria-label="${i + 1} von ${zoomCount}: ${escapeHtml(item.dataset.label)}">
          <div class="zoom__picture">${item.innerHTML}</div>
        </div>`).join("");
    zoomThumbs.innerHTML = items.map((item, i) => `
        <li><button class="zoom__thumb" type="button" data-index="${i}" aria-label="Bild ${i + 1} von ${zoomCount} zeigen">${item.innerHTML}</button></li>`).join("");
    zoomDots.innerHTML = items.map((item, i) => `
        <li><button class="zoom__dot" type="button" data-index="${i}" aria-label="Bild ${i + 1} von ${zoomCount} zeigen"></button></li>`).join("");
    zoomDialog.classList.toggle("zoom--single", zoomCount < 2);
    zoomOpener = opener;
    zoomDialog.showModal();
    zoomTrack.scrollLeft = index * zoomTrack.clientWidth;
    zoomMark(index, false);
  }

  zoomSource.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (item) zoomOpen(Number(item.dataset.index), item);
  });

  zoomTrack.addEventListener("scroll", () => {
    const index = Math.round(zoomTrack.scrollLeft / zoomTrack.clientWidth);
    if (index !== zoomIndex && index >= 0 && index < zoomCount) zoomMark(index, true);
  }, { passive: true });

  zoomDialog.addEventListener("click", (e) => {
    const picked = e.target.closest("[data-index]");
    if (picked) zoomGo(Number(picked.dataset.index));
    else if (e.target.closest(".zoom__arrow--prev, .zoom__step--prev")) zoomGo(zoomIndex - 1);
    else if (e.target.closest(".zoom__arrow--next, .zoom__step--next")) zoomGo(zoomIndex + 1);
    else if (e.target.closest(".zoom__close")) zoomDialog.close();
  });

  zoomDialog.addEventListener("keydown", (e) => {
    const target = { ArrowLeft: zoomIndex - 1, ArrowRight: zoomIndex + 1, Home: 0, End: zoomCount - 1 }[e.key];
    if (target === undefined || e.altKey || e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    zoomGo(target);
  });

  // Keep the same picture in view when the window changes size (turning a phone).
  window.addEventListener("resize", () => {
    if (zoomDialog.open) zoomTrack.scrollLeft = zoomIndex * zoomTrack.clientWidth;
  });

  // Back to the picture that opened it (the pictures are drawn anew, so the
  // zoom starts empty next time).
  zoomDialog.addEventListener("close", () => {
    zoomTrack.innerHTML = "";
    if (zoomOpener?.isConnected) zoomOpener.focus({ preventScroll: true });
  });
}
