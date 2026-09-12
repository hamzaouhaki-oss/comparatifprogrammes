/* ===================================================================
   Rendu de l'interface — Comparatif des programmes électoraux
   Un routeur simple : chaque page HTML déclare data-page sur <body>,
   ce script génère le contenu propre à cette page depuis js/data.js.
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
  const LEVEL_LABELS = { 0: "non documenté", 1: "faible", 2: "moyen", 3: "élevé" };

  function qparam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
  function scoreLevel(v) {
    return typeof v === "number" ? v : 0;
  }
  function dotsHtml(level, count) {
    count = count || 3;
    let out = "";
    for (let i = 1; i <= count; i++) out += `<span class="dot ${i <= level ? "lvl-" + level : ""}"></span>`;
    return out;
  }
  function partyLink(p) {
    return `<a href="parti.html?id=${p.id}">${partyBadge(p, "size-sm")} ${p.acronym}</a>`;
  }
  /** Emblème coloré du parti. Essaie d'abord un vrai logo déposé dans assets/logos/{id}.svg puis .png ;
   *  s'il est absent (404 des deux), retombe silencieusement sur un monogramme dans la couleur du parti.
   *  Voir README.md pour déposer de vrais logos. */
  window.__logoFallback = function (img, id, stage) {
    if (stage === "svg") {
      img.src = "assets/logos/" + id + ".png";
      img.setAttribute("onerror", "window.__logoFallback(this,'" + id + "','png')");
    } else {
      img.style.display = "none";
    }
  };
  function partyBadge(p, sizeClass) {
    const lenClass = p.acronym.length > 4 ? " len-long" : "";
    const title = p.symbol ? `Symbole électoral : ${p.symbol}` : p.acronym;
    return (
      `<span class="party-badge ${sizeClass}${lenClass}" style="--party-accent:${p.color}" title="${title}">` +
      `<span aria-hidden="true">${p.acronym}</span>` +
      `<img class="party-badge-img" src="assets/logos/${p.id}.svg" alt="${title}" onerror="window.__logoFallback(this,'${p.id}','svg')">` +
      `</span>`
    );
  }
  const PARTY_ALIASES = {
    rni: ["RNI"],
    pam: ["PAM"],
    istiqlal: ["Istiqlal", "PI"],
    usfp: ["USFP"],
    mp: ["MP", "Mouvement populaire"],
    pps: ["PPS"],
    pjd: ["PJD"],
    uc: ["UC"],
    ffd: ["FFD"],
    gauche: ["Alliance de la gauche", "Alliance", "PSU-FGD", "PSU", "FGD"],
    mds: ["MDS"],
  };
  function partyByToken(token) {
    token = token.trim();
    return PARTIES.find((p) => (PARTY_ALIASES[p.id] || [p.acronym]).some((alias) => alias.toLowerCase() === token.toLowerCase()));
  }
  /** Turn "RNI" / "MP, PJD, USFP" / "Istiqlal, UC, Alliance" inside axis-row party labels into links where a match exists. */
  function linkifyPartyLabel(label) {
    const parts = label.split(/(,\s*)/);
    return parts
      .map((seg) => {
        if (seg.trim() === "" || seg.trim() === ",") return seg;
        const p = partyByToken(seg.trim());
        return p ? `<a href="parti.html?id=${p.id}">${seg}</a>` : seg;
      })
      .join("");
  }

  function breadcrumb(hostId, trail) {
    const host = $(hostId);
    if (!host) return;
    host.innerHTML = trail
      .map((t, i) => (i === trail.length - 1 ? `<span aria-current="page">${t.label}</span>` : `<a href="${t.href}">${t.label}</a>`))
      .join(' <span class="crumb-sep">›</span> ');
  }

  function pageHero(hostId, eyebrow, title, lead) {
    const host = $(hostId);
    if (!host) return;
    host.innerHTML = `
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ""}`;
  }

  /* ============================================================
     PAGE: index.html
     ============================================================ */
  function pageIndex() {
    const stats = [
      { value: "395", label: "sièges en jeu" },
      { value: "27", label: "partis en lice" },
      { value: "15,8 M", label: "électeurs inscrits" },
      { value: "23 sept.", label: "jour du scrutin" },
      { value: "11", label: "programmes analysables" },
    ];
    const statsHost = $("#heroStats");
    stats.forEach((s) => {
      const tile = el("div", { class: "stat-tile" });
      tile.appendChild(el("span", { class: "stat-value", text: s.value }));
      tile.appendChild(el("span", { class: "stat-label", text: s.label }));
      statsHost.appendChild(tile);
    });

    const avantHost = $("#avantProposGrid");
    AVANT_PROPOS.forEach((item) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h4", { text: item.title }));
      card.appendChild(el("p", { text: item.text }));
      avantHost.appendChild(card);
    });

    const navCards = [
      { href: "partis.html", emoji: "🧭", title: "Découvrir les partis", text: "11 programmes analysés fiche par fiche : mesures, points forts, points faibles." },
      { href: "axes.html", emoji: "⚖️", title: "Comparer par thème", text: "14 axes stratégiques — emploi, retraites, santé, eau, éducation... — parti par parti." },
      { href: "coherence.html", emoji: "🔎", title: "Vérifier la cohérence", text: "Une grille à 6 critères pour juger si un programme tient debout." },
      { href: "angles-morts.html", emoji: "🕳️", title: "Les angles morts", text: "Ce que presque aucun programme ne traite sérieusement." },
      { href: "boite-a-outils.html", emoji: "🗳️", title: "Questions à poser", text: "8 questions à poser à tout candidat qui sonne à votre porte." },
      { href: "contexte.html", emoji: "📊", title: "Le contexte du scrutin", text: "L'économie, l'emploi, le social et l'eau, en chiffres." },
    ];
    const navHost = $("#navCards");
    navCards.forEach((c, i) => {
      const a = el("a", { class: "nav-card", attrs: { href: c.href } });
      const primary = i % 2 === 0 ? "var(--accent)" : "var(--accent-2)";
      const secondary = i % 2 === 0 ? "var(--accent-2)" : "var(--accent)";
      a.style.setProperty("--card-accent", primary);
      a.style.setProperty("--card-accent-a", primary);
      a.style.setProperty("--card-accent-b", secondary);
      a.innerHTML = `<span class="nav-card-emoji" aria-hidden="true">${c.emoji}</span>
        <span class="nav-card-title">${c.title}</span>
        <span class="nav-card-text">${c.text}</span>
        <span class="nav-card-go">Voir →</span>`;
      navHost.appendChild(a);
    });
  }

  /* ============================================================
     PAGE: contexte.html
     ============================================================ */
  function tilesInto(hostId, items) {
    const host = $(hostId);
    items.forEach((item) => {
      const tile = el("div", { class: "info-tile" });
      tile.appendChild(el("span", { class: "info-label", text: item.label }));
      tile.appendChild(el("span", { class: "info-value", html: item.value }));
      host.appendChild(tile);
    });
  }

  function pageContexte() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: "Accueil" }, { label: "Contexte" }]);
    tilesInto("#scrutinGrid", CONTEXT.scrutin);
    tilesInto("#economieGrid", CONTEXT.economie);
    tilesInto("#eauGrid", CONTEXT.eau);

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
      "<p>" + CONTEXT.emploi.intro + "</p><p>" + CONTEXT.emploi.central + "</p><p>" + CONTEXT.emploi.jeunes +
      ` <a href="axe.html?id=1">Voir l'axe emploi et insertion des jeunes →</a></p>`;

    tilesInto("#socialGrid", CONTEXT.social);

    $("#retraitesCallout").innerHTML =
      "<p>" + CONTEXT.retraites.situation + "</p><ul class='note-list' style='margin-top:10px'>" +
      CONTEXT.retraites.chiffres.map((c) => "<li>" + c + "</li>").join("") +
      `</ul><p><a href="axe.html?id=3">Voir l'axe retraites et protection sociale →</a></p>`;

    $("#eauNote").innerHTML = CONTEXT.eauNote + ` <a href="axe.html?id=6">Voir l'axe eau, climat et énergie →</a>`;

    const defisHost = $("#defisList");
    CONTEXT.defis.forEach((d) => defisHost.appendChild(el("li", { text: d })));
  }

  /* ============================================================
     PAGE: partis.html (liste)
     ============================================================ */
  let activeCategory = "all";

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
      const card = el("a", { class: "party-card", attrs: { href: "parti.html?id=" + p.id } });
      card.style.setProperty("--party-accent", p.color);
      card.innerHTML = `<div class="party-card-top">${partyBadge(p, "size-md")}<span class="cat-tag">${CATEGORY_LABELS[p.category]}</span></div>
        <span class="acronym">${p.acronym}</span>
        <span class="full-name">${p.name}</span>
        <span class="seats">${p.seats2021} sièges en 2021</span>`;
      if (p.notDocumented) {
        card.innerHTML += `<p class="seats" style="margin-top:8px">Programme non documenté — voir détail.</p>`;
      } else {
        let dots = `<div class="mini-dots">`;
        CRITERIA.forEach((c) => {
          const lvl = scoreLevel(p.scores[c.key]);
          dots += `<span class="dot ${lvl > 0 ? "lvl-" + lvl : ""}" title="${c.label} : ${LEVEL_LABELS[lvl]}"></span>`;
        });
        dots += `</div>`;
        card.innerHTML += dots;
      }
      host.appendChild(card);
    });
  }

  function pagePartisListe() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: "Accueil" }, { label: "Partis" }]);
    renderCategoryFilters();
    renderPartiesGrid();
  }

  /* ============================================================
     PAGE: parti.html (détail — lit ?id=)
     ============================================================ */
  function renderMeasureList(measures) {
    let html = "";
    Object.entries(measures).forEach(([section, items]) => {
      html += `<div class="measure-title">${section}</div><ul>`;
      items.forEach((it) => (html += `<li>${it}</li>`));
      html += "</ul>";
    });
    return html;
  }

  function pagePartiDetail() {
    const id = qparam("id");
    const p = PARTIES.find((x) => x.id === id) || PARTIES[0];
    document.title = p.acronym + " — " + p.name + " | Législatives 2026";

    breadcrumb("#breadcrumb", [
      { href: "index.html", label: "Accueil" },
      { href: "partis.html", label: "Partis" },
      { label: p.acronym },
    ]);

    // quick switcher
    const select = $("#partySwitch");
    PARTIES.forEach((party) => {
      const opt = el("option", { text: party.acronym + " — " + party.name, attrs: { value: party.id } });
      if (party.id === p.id) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener("change", () => {
      window.location.href = "parti.html?id=" + select.value;
    });

    // scope the party's brand color to the main content only — header/footer stay on the shared charter
    $("main").style.setProperty("--party-accent", p.color);

    let html = "";
    html += `<div class="party-hero">${partyBadge(p, "size-lg")}
      <div class="party-hero-text">
        <span class="cat-tag">${CATEGORY_LABELS[p.category]}</span>
        <h1>${p.acronym}</h1>
        <span class="full-name">${p.name}</span>
        <span class="seats">${p.seats2021} sièges en 2021${p.leader ? " · " + p.leader : ""}${p.symbol ? " · Symbole électoral : " + p.symbol : ""}</span>
      </div>
    </div>`;
    html += `<p>${p.identity}</p>`;

    if (p.notDocumented) {
      html += `<div class="callout"><strong>Non analysable :</strong> ${p.notDocumented}</div>`;
    } else {
      if (p.architecture) html += `<p><strong>Architecture du programme.</strong> ${p.architecture}</p>`;
      if (p.pari) html += `<p><strong>Le pari politique.</strong> ${p.pari}</p>`;

      html += `<h2 style="margin-top:1.8em">Mesures principales</h2>`;
      html += renderMeasureList(p.measures);

      if (p.strengths) html += `<h2>Ce qui est fort</h2><div class="strengths">${p.strengths}</div>`;
      if (p.weaknesses) html += `<h2>Ce qui est faible</h2><div class="weaknesses">${p.weaknesses}</div>`;
      if (p.structure) html += `<div class="structure-note">« ${p.structure} »</div>`;

      html += `<h2>Grille d'évaluation</h2>`;
      html += `<p class="table-note">Voir la <a href="coherence.html">méthode complète</a> et comparer avec les autres partis.</p>`;
      html += `<div class="score-bars">`;
      CRITERIA.forEach((c) => {
        const lvl = scoreLevel(p.scores[c.key]);
        html += `<div class="score-bar-row">
          <div class="score-bar-label"><strong>${c.label}</strong><span>${c.question}</span></div>
          <div class="score-bar-track"><div class="score-bar-fill lvl-${lvl}" style="width:${(lvl / 3) * 100}%"></div></div>
          <div class="score-bar-value">${LEVEL_LABELS[lvl]}</div>
        </div>`;
      });
      html += `</div>`;
    }

    $("#partyDetail").innerHTML = html;

    // prev / next
    const idx = PARTIES.findIndex((x) => x.id === p.id);
    const prev = PARTIES[(idx - 1 + PARTIES.length) % PARTIES.length];
    const next = PARTIES[(idx + 1) % PARTIES.length];
    $("#partyPrevNext").innerHTML = `
      <a class="prev-next-link prev" href="parti.html?id=${prev.id}"><span>← Précédent</span><strong>${partyBadge(prev, "size-sm")} ${prev.acronym}</strong></a>
      <a class="prev-next-link" href="partis.html">Tous les partis</a>
      <a class="prev-next-link next" href="parti.html?id=${next.id}"><span>Suivant →</span><strong>${next.acronym} ${partyBadge(next, "size-sm")}</strong></a>`;
  }

  /* ============================================================
     PAGE: coherence.html
     ============================================================ */
  function pageCoherence() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: "Accueil" }, { label: "Cohérence" }]);

    const critHost = $("#criteriaGrid");
    CRITERIA.forEach((c) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h4", { text: c.label }));
      card.appendChild(el("p", { text: c.question }));
      critHost.appendChild(card);
    });

    const table = $("#scoreTable");
    let html = "<thead><tr><th>Parti</th>";
    CRITERIA.forEach((c) => (html += `<th>${c.label}</th>`));
    html += "</tr></thead><tbody>";
    PARTIES.forEach((p) => {
      html += `<tr><td class="party-cell">${partyLink(p)}</td>`;
      CRITERIA.forEach((c) => {
        const lvl = scoreLevel(p.scores[c.key]);
        html += `<td><span class="dots" title="${LEVEL_LABELS[lvl]}">${dotsHtml(lvl)}</span></td>`;
      });
      html += "</tr>";
    });
    table.innerHTML = html + "</tbody>";

    const legendHost = $("#scoreLegend");
    [3, 2, 1, 0].forEach((lvl) => {
      const span = el("span");
      span.innerHTML = `<span class="dot ${lvl > 0 ? "lvl-" + lvl : ""}"></span>${LEVEL_LABELS[lvl]}`;
      legendHost.appendChild(span);
    });

    const findHost = $("#consensusFindings");
    CONSENSUS_FINDINGS.forEach((f) => {
      const card = el("div", { class: "finding-card" });
      card.appendChild(el("h4", { text: f.title }));
      card.appendChild(el("p", { html: f.text }));
      findHost.appendChild(card);
    });

    const structHost = $("#structureGrid");
    PARTIES.filter((p) => p.structure).forEach((p) => {
      const card = el("div", { class: "card structure-card" });
      card.innerHTML = `<h4>${partyLink(p)}</h4><p>${p.structure}</p>`;
      structHost.appendChild(card);
    });
  }

  /* ============================================================
     PAGE: axes.html (liste, groupée)
     ============================================================ */
  function pageAxesListe() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: "Accueil" }, { label: "Comparer par thème" }]);
    const host = $("#axesGroups");
    AXIS_GROUPS.forEach((g) => {
      const section = el("div", { class: "axis-group" });
      section.innerHTML = `<h2>${g.label}</h2><p class="section-intro" style="margin-bottom:14px">${g.blurb}</p>`;
      const grid = el("div", { class: "axes-grid" });
      AXES.filter((a) => a.group === g.key).forEach((a) => {
        const card = el("a", { class: "axis-card", attrs: { href: "axe.html?id=" + a.id } });
        card.innerHTML = `<span class="axis-card-num">${String(a.id).padStart(2, "0")}</span>
          <span class="axis-card-title">${a.title}</span>
          <span class="axis-card-teaser">${a.teaser || ""}</span>`;
        grid.appendChild(card);
      });
      section.appendChild(grid);
      host.appendChild(section);
    });
  }

  /* ============================================================
     PAGE: axe.html (détail — lit ?id=)
     ============================================================ */
  function pageAxeDetail() {
    const id = parseInt(qparam("id"), 10) || 1;
    const axis = AXES.find((a) => a.id === id) || AXES[0];
    document.title = "Axe " + axis.id + " — " + axis.title + " | Législatives 2026";

    breadcrumb("#breadcrumb", [
      { href: "index.html", label: "Accueil" },
      { href: "axes.html", label: "Comparer par thème" },
      { label: "Axe " + axis.id },
    ]);

    // les pages d'axes empruntent le vert (charte commune) plutôt que la couleur d'un parti
    $("main").style.setProperty("--party-accent", "var(--accent-2)");

    const select = $("#axisSwitch");
    AXES.forEach((a) => {
      const opt = el("option", { text: a.id + ". " + a.title, attrs: { value: a.id } });
      if (a.id === axis.id) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener("change", () => {
      window.location.href = "axe.html?id=" + select.value;
    });

    let html = `<p class="eyebrow">Axe ${axis.id} / 14</p><h1>${axis.title}</h1>`;
    if (axis.repere) html += `<div class="callout"><strong>Point de repère.</strong> ${axis.repere}</div>`;
    html += `<table class="axis-table">`;
    axis.rows.forEach(([party, text]) => {
      html += `<tr><td class="axis-party">${linkifyPartyLabel(party)}</td><td>${text}</td></tr>`;
    });
    html += `</table>`;
    html += `<div class="axis-lecture"><strong>Lecture.</strong> ${axis.lecture}</div>`;
    $("#axisDetail").innerHTML = html;

    const idx = AXES.findIndex((a) => a.id === axis.id);
    const prev = AXES[(idx - 1 + AXES.length) % AXES.length];
    const next = AXES[(idx + 1) % AXES.length];
    $("#axisPrevNext").innerHTML = `
      <a class="prev-next-link prev" href="axe.html?id=${prev.id}"><span>← Précédent</span><strong>${prev.title}</strong></a>
      <a class="prev-next-link" href="axes.html">Tous les axes</a>
      <a class="prev-next-link next" href="axe.html?id=${next.id}"><span>Suivant →</span><strong>${next.title}</strong></a>`;
  }

  /* ============================================================
     PAGE: angles-morts.html
     ============================================================ */
  function pageAnglesMorts() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: "Accueil" }, { label: "Angles morts" }]);
    const host = $("#blindSpotsGrid");
    BLIND_SPOTS.forEach((b) => {
      const card = el("div", { class: "card" });
      card.innerHTML = `<h4>${b.title}</h4><p>${b.text}</p>` +
        (b.axisRef ? `<a class="card-link" href="axe.html?id=${b.axisRef}">Voir l'axe concerné →</a>` : "");
      host.appendChild(card);
    });
  }

  /* ============================================================
     PAGE: boite-a-outils.html
     ============================================================ */
  function pageBoiteAOutils() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: "Accueil" }, { label: "Questions à poser" }]);
    const host = $("#questionsList");
    let checked = {};
    try {
      checked = JSON.parse(localStorage.getItem("checklist") || "{}");
    } catch (e) {
      checked = {};
    }
    TOOLBOX_QUESTIONS.forEach((q, i) => {
      const li = el("li");
      const label = el("label", { class: "question-label" });
      const checkbox = el("input", { attrs: { type: "checkbox", id: "q" + i } });
      checkbox.checked = !!checked[i];
      checkbox.addEventListener("change", () => {
        checked[i] = checkbox.checked;
        localStorage.setItem("checklist", JSON.stringify(checked));
        li.classList.toggle("answered", checkbox.checked);
      });
      if (checked[i]) li.classList.add("answered");
      label.appendChild(checkbox);
      label.appendChild(el("span", { text: q.text }));
      li.appendChild(label);
      if (q.axisRef) {
        const a = el("a", { class: "card-link", text: "Voir l'axe concerné →", attrs: { href: "axe.html?id=" + q.axisRef } });
        li.appendChild(a);
      }
      host.appendChild(li);
    });
  }

  /* ============================================================
     PAGE: sources.html
     ============================================================ */
  function looksLikeDomain(s) {
    return /^[a-z0-9.-]+\.[a-z]{2,}(\/[^\s(]*)?$/i.test(s.trim());
  }

  function pageSources() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: "Accueil" }, { label: "Sources" }]);

    const progHost = $("#sourcesProgrammes");
    SOURCES.programmes.forEach((s) => {
      const linkable = looksLikeDomain(s.url);
      progHost.appendChild(
        el("li", {
          html: `<strong>${s.party}</strong><br>${linkable ? `<a href="https://${s.url}" target="_blank" rel="noopener">${s.url}</a>` : s.url}`,
        })
      );
    });
    const instHost = $("#sourcesInstitutionnelles");
    SOURCES.institutionnelles.forEach((s) => instHost.appendChild(el("li", { text: s })));
    const presseHost = $("#sourcesPresse");
    SOURCES.presse.forEach((s) => presseHost.appendChild(el("li", { text: s })));

    $("#noteFinale").innerHTML = NOTE_FINALE;
  }

  /* ---------------- Router ---------------- */
  const ROUTES = {
    index: pageIndex,
    contexte: pageContexte,
    "partis-list": pagePartisListe,
    "parti-detail": pagePartiDetail,
    coherence: pageCoherence,
    "axes-list": pageAxesListe,
    "axe-detail": pageAxeDetail,
    "angles-morts": pageAnglesMorts,
    "boite-a-outils": pageBoiteAOutils,
    sources: pageSources,
  };

  function init() {
    const page = document.body.dataset.page;
    const fn = ROUTES[page];
    if (fn) fn();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
