/* ===================================================================
   Chrome commun à toutes les pages — en-tête, pied de page, thème
   Suppose que js/i18n.js a déjà tourné (LANG, UI disponibles).
   =================================================================== */

(function () {
  "use strict";

  function navItems() {
    return [
      { href: "index.html", label: UI.nav.index, key: "index" },
      { href: "contexte.html", label: UI.nav.contexte, key: "contexte" },
      { href: "partis.html", label: UI.nav.partis, key: "partis" },
      { href: "coherence.html", label: UI.nav.coherence, key: "coherence" },
      { href: "axes.html", label: UI.nav.axes, key: "axes" },
      { href: "angles-morts.html", label: UI.nav.anglesMorts, key: "angles-morts" },
      { href: "boite-a-outils.html", label: UI.nav.boiteAOutils, key: "boite-a-outils" },
      { href: "sources.html", label: UI.nav.sources, key: "sources" },
    ];
  }

  /* Rose des vents, volontairement symétrique : une boussole qui pointerait
     quelque part contredirait la neutralité que revendique le site. */
  const MARK_SVG = `<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
    <rect width="40" height="40" rx="10" fill="#b3242f"/>
    <path d="M20,4 C21.4,14.4 25.6,18.6 36,20 C25.6,21.4 21.4,25.6 20,36 C18.6,25.6 14.4,21.4 4,20 C14.4,18.6 18.6,14.4 20,4 Z" fill="#00693e"/>
    <circle cx="20" cy="20" r="2.9" fill="#b3242f"/>
  </svg>`;

  function headerHtml(activeKey) {
    const links = navItems()
      .map((item) => `<a href="${item.href}" data-nav-key="${item.key}" class="${item.key === activeKey ? "active" : ""}">${item.label}</a>`)
      .join("");
    return `
      <div class="masthead">
        <div class="masthead-inner">
          <span>${UI.masthead.line1}</span>
          <span>${UI.masthead.line2}</span>
        </div>
      </div>
      <div class="header-band"><span></span><span></span></div>
      <div class="header-inner">
        <a href="index.html" class="brand">
          ${MARK_SVG}
          <span class="brand-text">
            <strong>${UI.siteTitleSuffix}</strong>
            <small>${UI.siteTagline}</small>
          </span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="${LANG === "ar" ? "فتح القائمة" : "Ouvrir le menu"}" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" id="mainNav">${links}</nav>
        <button class="lang-toggle" id="langToggle" title="${UI.langToggleTitle}">${UI.langToggleLabel}</button>
        <button class="theme-toggle" id="themeToggle" aria-label="${UI.themeToggleTitle}" title="${UI.themeToggleTitle}">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.4 5.4 0 0 1-7.54-7.54c-.44-.06-.9-.1-1.36-.1Z"/></svg>
        </button>
      </div>`;
  }

  function footerHtml() {
    const links = navItems()
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");
    return `
      <div class="container footer-inner">
        <div class="footer-top">
          <a href="index.html" class="brand footer-brand">${MARK_SVG}<span class="brand-text"><strong>${UI.siteTitleSuffix}</strong><small>${UI.siteTagline}</small></span></a>
          <nav class="footer-nav">${links}</nav>
        </div>
        <div class="footer-bottom">
          <p>${fillTokens(UI.footerNote)}</p>
          <button class="btn btn-ghost btn-small" id="backToTop">${UI.backToTop}</button>
        </div>
      </div>`;
  }

  function mount() {
    const body = document.body;
    const activeKey = body.dataset.nav || "";

    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = headerHtml(activeKey);
    body.insertBefore(header, body.firstChild);

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = footerHtml();
    body.appendChild(footer);

    // Theme toggle
    const stored = localStorage.getItem("theme");
    if (stored) document.documentElement.setAttribute("data-theme", stored);
    document.getElementById("themeToggle").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = current ? current === "dark" : prefersDark;
      const next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });

    // Language toggle
    document.getElementById("langToggle").addEventListener("click", () => {
      window.setLang(LANG === "ar" ? "fr" : "ar");
    });

    // Mobile nav toggle
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Back to top
    document.getElementById("backToTop").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }

  window.SiteChrome = { navItems };
})();
