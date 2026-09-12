/* ===================================================================
   Rendu de l'interface — Comparatif des programmes électoraux
   =================================================================== */

(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const el = (tag, opts) => {
    const node = document.createElement(tag);
    if (opts) {
      if (opts.class) node.className = opts.class;
      if (opts.html !== undefined) node.innerHTML = opts.html;
      if (opts.text !== undefined) node.textContent = opts.text;
      if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
    }
    return node;
  };

  const CATEGORY_LABELS = { majorite: "Majorité sortante", opposition: "Opposition", gauche: "Alliance de la gauche" };

  /* ---------------- Theme ---------------- */
  function initTheme() {
    const stored = localStorage.getItem("theme");
    if (stored) document.documentElement.setAttribute("data-theme", stored);
    $("#themeToggle").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = current ? current === "dark" : prefersDark;
      const next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* ---------------- Nav ---------------- */
  function initNav() {
    const toggle = $("#navToggle");
    const nav = $("#mainNav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("#mainNav a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

    const sections = $$("main .section[id]");
    const navLinks = $$("#mainNav a[data-nav]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    $("#backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------- Hero ---------------- */
  function renderHero() {
    const stats = [
      { value: "395", label: "sièges en jeu" },
      { value: "27", label: "partis en lice" },
      { value: "15,8 M", label: "électeurs inscrits" },
      { value: "23 sept.", label: "jour du scrutin" },
      { value: "11", label: "programmes analysables" },
    ];
    const host = $("#heroStats");
    stats.forEach((s) => {
      const tile = el("div", { class: "stat-tile" });
      tile.appendChild(el("span", { class: "stat-value", text: s.value }));
      tile.appendChild(el("span", { class: "stat-label", text: s.label }));
      host.appendChild(tile);
    });
  }

  /* ---------------- Avant-propos ---------------- */
  function renderAvantPropos() {
    const host = $("#avantProposGrid");
    AVANT_PROPOS.forEach((item) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h4", { text: item.title }));
      card.appendChild(el("p", { text: item.text }));
      host.appendChild(card);
    });
  }

  /* ---------------- Contexte ---------------- */
  function tilesInto(hostId, items) {
    const host = $(hostId);
    items.forEach((item) => {
      const tile = el("div", { class: "info-tile" });
      tile.appendChild(el("span", { class: "info-label", text: item.label }));
      tile.appendChild(el("span", { class: "info-value", html: item.value }));
      host.appendChild(tile);
    });
  }

  function renderContexte() {
    tilesInto("#scrutinGrid", CONTEXT.scrutin);
    tilesInto("#economieGrid", CONTEXT.economie);
    tilesInto("#eauGrid", CONTEXT.eau);

    // seats chart
    const seatsHost = $("#seatsChart");
    const max = Math.max(...CONTEXT.depart2021.map((d) => d.seats));
    CONTEXT.depart2021.forEach((d) => {
      const row = el("div", { class: "seat-row" });
      row.appendChild(el("span", { text: d.party }));
      const track = el("div", { class: "seat-bar-track" });
      const fill = el("div", { class: "seat-bar-fill" });
      fill.style.width = Math.round((d.seats / max) * 100) + "%";
      track.appendChild(fill);
      row.appendChild(track);
      row.appendChild(el("span", { class: "seat-value", text: d.seats }));
      seatsHost.appendChild(row);
    });

    $("#jeunesseCallout").innerHTML = CONTEXT.jeunesse;

    const nuancesHost = $("#economieNuances");
    CONTEXT.economieNuances.forEach((t) => nuancesHost.appendChild(el("li", { html: t })));

    $("#emploiCallout").innerHTML =
      "<p>" + CONTEXT.emploi.intro + "</p><p>" + CONTEXT.emploi.central + "</p><p>" + CONTEXT.emploi.jeunes + "</p>";

    tilesInto("#socialGrid", CONTEXT.social);

    $("#retraitesCallout").innerHTML =
      "<p>" + CONTEXT.retraites.situation + "</p><ul class='note-list' style='margin-top:10px'>" +
      CONTEXT.retraites.chiffres.map((c) => "<li>" + c + "</li>").join("") + "</ul>";

    $("#eauNote").innerHTML = CONTEXT.eauNote;

    const defisHost = $("#defisList");
    CONTEXT.defis.forEach((d) => defisHost.appendChild(el("li", { text: d })));
  }

  /* ---------------- Parties ---------------- */
  let activeCategory = "all";

  function scoreLevel(v) {
    return typeof v === "number" ? v : 0;
  }

  function dotsHtml(level, count) {
    count = count || 3;
    let out = "";
    for (let i = 1; i <= count; i++) {
      out += `<span class="dot ${i <= level ? "lvl-" + level : ""}"></span>`;
    }
    return out;
  }

  function renderCategoryFilters() {
    const host = $("#categoryFilters");
    const makeBtn = (key, label) => {
      const btn = el("button", { class: "filter-btn", text: label, attrs: { type: "button" } });
      if (key === activeCategory) btn.classList.add("active");
      btn.addEventListener("click", () => {
        activeCategory = key;
        $$(".filter-btn", host).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderPartiesGrid();
      });
      return btn;
    };
    host.appendChild(makeBtn("all", "Tous les partis"));
    CATEGORIES.forEach((c) => host.appendChild(makeBtn(c.key, c.label)));
  }

  function renderPartiesGrid() {
    const host = $("#partiesGrid");
    host.innerHTML = "";
    const list = PARTIES.filter((p) => activeCategory === "all" || p.category === activeCategory);
    list.forEach((p) => {
      const card = el("button", { class: "party-card", attrs: { type: "button" } });
      const tag = el("span", { class: "cat-tag cat-" + p.category, text: CATEGORY_LABELS[p.category] });
      card.appendChild(tag);
      card.appendChild(el("span", { class: "acronym", text: p.acronym }));
      card.appendChild(el("span", { class: "full-name", text: p.name }));
      card.appendChild(el("span", { class: "seats", text: p.seats2021 + " sièges en 2021" }));
      if (p.notDocumented) {
        const note = el("p", { text: "Programme non documenté — voir détail.", class: "seats" });
        note.style.marginTop = "8px";
        card.appendChild(note);
      } else {
        const dots = el("div", { class: "mini-dots" });
        CRITERIA.forEach((c) => {
          const lvl = scoreLevel(p.scores[c.key]);
          dots.innerHTML += `<span class="dot ${lvl > 0 ? "lvl-" + lvl : ""}" title="${c.label}"></span>`;
        });
        card.appendChild(dots);
      }
      card.addEventListener("click", () => openPartyModal(p));
      host.appendChild(card);
    });
  }

  function renderMeasureList(measures) {
    let html = "";
    Object.entries(measures).forEach(([section, items]) => {
      html += `<div class="modal-section-title">${section}</div><ul>`;
      items.forEach((it) => (html += `<li>${it}</li>`));
      html += "</ul>";
    });
    return html;
  }

  function openPartyModal(p) {
    const content = $("#modalContent");
    let html = "";
    html += `<span class="cat-tag cat-${p.category}">${CATEGORY_LABELS[p.category]}</span>`;
    html += `<h2 style="margin:10px 0 2px">${p.acronym} — ${p.name}</h2>`;
    html += `<p style="color:var(--text-muted);margin-bottom:14px">${p.seats2021} sièges en 2021${p.leader ? " · " + p.leader : ""}</p>`;
    html += `<p>${p.identity}</p>`;

    if (p.notDocumented) {
      html += `<div class="callout"><strong>Non analysable :</strong> ${p.notDocumented}</div>`;
    } else {
      if (p.architecture) html += `<p><strong>Architecture du programme.</strong> ${p.architecture}</p>`;
      if (p.pari) html += `<p><strong>Le pari politique.</strong> ${p.pari}</p>`;

      html += `<div class="modal-section-title" style="font-size:1.05rem;margin-top:1.6em">Mesures principales</div>`;
      html += renderMeasureList(p.measures);

      if (p.strengths) {
        html += `<div class="modal-section-title">Ce qui est fort</div><div class="strengths">${p.strengths}</div>`;
      }
      if (p.weaknesses) {
        html += `<div class="modal-section-title">Ce qui est faible</div><div class="weaknesses">${p.weaknesses}</div>`;
      }
      if (p.structure) {
        html += `<div class="structure-note">${p.structure}</div>`;
      }

      html += `<div class="modal-section-title">Grille d'évaluation</div><div class="modal-scores">`;
      CRITERIA.forEach((c) => {
        const lvl = scoreLevel(p.scores[c.key]);
        html += `<div class="score-row"><span>${c.label}</span><span class="dots">${dotsHtml(lvl)}</span></div>`;
      });
      html += `</div>`;
    }

    content.innerHTML = html;
    $("#modalBackdrop").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    $("#modalBackdrop").classList.remove("open");
    document.body.style.overflow = "";
  }

  function initModal() {
    $("#modalClose").addEventListener("click", closeModal);
    $("#modalBackdrop").addEventListener("click", (e) => {
      if (e.target.id === "modalBackdrop") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ---------------- Cohérence ---------------- */
  function renderCriteriaGrid() {
    const host = $("#criteriaGrid");
    CRITERIA.forEach((c) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h4", { text: c.label }));
      card.appendChild(el("p", { text: c.question }));
      host.appendChild(card);
    });
  }

  function renderScoreTable() {
    const table = $("#scoreTable");
    let html = "<thead><tr><th>Parti</th>";
    CRITERIA.forEach((c) => (html += `<th>${c.label}</th>`));
    html += "</tr></thead><tbody>";
    PARTIES.forEach((p) => {
      html += `<tr><td class="party-cell">${p.acronym}</td>`;
      CRITERIA.forEach((c) => {
        const lvl = scoreLevel(p.scores[c.key]);
        html += `<td><span class="dots">${dotsHtml(lvl)}</span></td>`;
      });
      html += "</tr>";
    });
    html += "</tbody>";
    table.innerHTML = html;
  }

  function renderScoreLegend() {
    const host = $("#scoreLegend");
    const items = [
      { lvl: 3, label: "élevé" },
      { lvl: 2, label: "moyen" },
      { lvl: 1, label: "faible" },
      { lvl: 0, label: "non documenté" },
    ];
    items.forEach((i) => {
      const span = el("span");
      span.innerHTML = `<span class="dot ${i.lvl > 0 ? "lvl-" + i.lvl : ""}"></span>${i.label}`;
      host.appendChild(span);
    });
  }

  function renderConsensusFindings() {
    const host = $("#consensusFindings");
    CONSENSUS_FINDINGS.forEach((f) => {
      const card = el("div", { class: "finding-card" });
      card.appendChild(el("h4", { text: f.title }));
      card.appendChild(el("p", { html: f.text }));
      host.appendChild(card);
    });
  }

  function renderStructureGrid() {
    const host = $("#structureGrid");
    PARTIES.filter((p) => p.structure).forEach((p) => {
      const card = el("div", { class: "card structure-card" });
      card.appendChild(el("h4", { text: p.acronym }));
      card.appendChild(el("p", { text: p.structure }));
      host.appendChild(card);
    });
  }

  /* ---------------- Axes ---------------- */
  let activeAxis = 1;

  function renderAxesNav() {
    const host = $("#axesNav");
    AXES.forEach((axis) => {
      const btn = el("button", { text: axis.id + ". " + axis.title, attrs: { type: "button" } });
      if (axis.id === activeAxis) btn.classList.add("active");
      btn.addEventListener("click", () => {
        activeAxis = axis.id;
        $$("#axesNav button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderAxisPanel();
      });
      host.appendChild(btn);
    });
  }

  function renderAxisPanel() {
    const axis = AXES.find((a) => a.id === activeAxis);
    const host = $("#axesContent");
    let html = `<div class="axis-panel"><h3 style="margin-top:0">${axis.id}. ${axis.title}</h3>`;
    if (axis.repere) html += `<div class="callout"><strong>Point de repère.</strong> ${axis.repere}</div>`;
    html += `<table class="axis-table">`;
    axis.rows.forEach(([party, text]) => {
      html += `<tr><td class="axis-party">${party}</td><td>${text}</td></tr>`;
    });
    html += `</table>`;
    html += `<div class="axis-lecture"><strong>Lecture.</strong> ${axis.lecture}</div></div>`;
    host.innerHTML = html;
  }

  /* ---------------- Blind spots / toolbox / sources ---------------- */
  function renderBlindSpots() {
    const host = $("#blindSpotsGrid");
    BLIND_SPOTS.forEach((b) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h4", { text: b.title }));
      card.appendChild(el("p", { text: b.text }));
      host.appendChild(card);
    });
  }

  function renderToolbox() {
    const host = $("#questionsList");
    TOOLBOX_QUESTIONS.forEach((q) => host.appendChild(el("li", { text: q })));
  }

  function renderSources() {
    const progHost = $("#sourcesProgrammes");
    SOURCES.programmes.forEach((s) => {
      progHost.appendChild(el("li", { html: `<strong>${s.party}</strong><br>${s.url}` }));
    });
    const instHost = $("#sourcesInstitutionnelles");
    SOURCES.institutionnelles.forEach((s) => instHost.appendChild(el("li", { text: s })));
    const presseHost = $("#sourcesPresse");
    SOURCES.presse.forEach((s) => presseHost.appendChild(el("li", { text: s })));
  }

  function renderNoteFinale() {
    $("#noteFinale").innerHTML = NOTE_FINALE;
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    initModal();

    renderHero();
    renderAvantPropos();
    renderContexte();

    renderCategoryFilters();
    renderPartiesGrid();

    renderCriteriaGrid();
    renderScoreTable();
    renderScoreLegend();
    renderConsensusFindings();
    renderStructureGrid();

    renderAxesNav();
    renderAxisPanel();

    renderBlindSpots();
    renderToolbox();
    renderSources();
    renderNoteFinale();
  });
})();
