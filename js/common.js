/* ===================================================================
   Chrome commun à toutes les pages — en-tête, pied de page, thème
   =================================================================== */

(function () {
  "use strict";

  const NAV_ITEMS = [
    { href: "index.html", label: "Accueil", key: "index" },
    { href: "contexte.html", label: "Contexte", key: "contexte" },
    { href: "partis.html", label: "Partis", key: "partis" },
    { href: "coherence.html", label: "Cohérence", key: "coherence" },
    { href: "axes.html", label: "Comparer par thème", key: "axes" },
    { href: "angles-morts.html", label: "Angles morts", key: "angles-morts" },
    { href: "boite-a-outils.html", label: "Questions à poser", key: "boite-a-outils" },
    { href: "sources.html", label: "Sources", key: "sources" },
  ];

  const MARK_SVG = `<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
    <rect width="40" height="40" rx="10" fill="#b3242f"/>
    <path d="M20.0,9.0 L22.6,16.4 L30.5,16.6 L24.3,21.4 L26.5,28.9 L20.0,24.5 L13.5,28.9 L15.7,21.4 L9.5,16.6 L17.4,16.4 Z" fill="#00693e"/>
  </svg>`;

  function headerHtml(activeKey) {
    const links = NAV_ITEMS.map(
      (item) =>
        `<a href="${item.href}" data-nav-key="${item.key}" class="${item.key === activeKey ? "active" : ""}">${item.label}</a>`
    ).join("");
    return `
      <div class="masthead">
        <div class="masthead-inner">
          <span>Analyse indépendante des programmes électoraux · Royaume du Maroc</span>
          <span>Législatives du 23 septembre 2026</span>
        </div>
      </div>
      <div class="header-band"><span></span><span></span></div>
      <div class="header-inner">
        <a href="index.html" class="brand">
          ${MARK_SVG}
          <span class="brand-text">
            <strong>Législatives 2026</strong>
            <small>Comparatif des programmes électoraux</small>
          </span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Ouvrir le menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" id="mainNav">${links}</nav>
        <button class="theme-toggle" id="themeToggle" aria-label="Changer le thème" title="Changer le thème">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.4 5.4 0 0 1-7.54-7.54c-.44-.06-.9-.1-1.36-.1Z"/></svg>
        </button>
      </div>`;
  }

  function footerHtml() {
    const links = NAV_ITEMS.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
    return `
      <div class="container footer-inner">
        <div class="footer-top">
          <a href="index.html" class="brand footer-brand">${MARK_SVG}<span class="brand-text"><strong>Législatives 2026</strong><small>Comparatif des programmes électoraux</small></span></a>
          <nav class="footer-nav">${links}</nav>
        </div>
        <div class="footer-bottom">
          <p>Document d'analyse indépendant, arrêté au 12 septembre 2026. Ce site ne recommande aucun vote.</p>
          <button class="btn btn-ghost btn-small" id="backToTop">↑ Haut de page</button>
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

  window.SiteChrome = { NAV_ITEMS };
})();
