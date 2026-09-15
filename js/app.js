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

  const CATEGORY_LABELS = UI.categoryLabels;
  const LEVEL_LABELS = UI.levelLabels;

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
    const title = p.symbol ? `${UI.symbolLabel} : ${p.symbol}` : p.acronym;
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
      .join(` <span class="crumb-sep">${UI.crumbSep}</span> `);
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
    const statsHost = $("#heroStats");
    UI.home.stats.forEach((s) => {
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

    const updHost = $("#updatesList");
    if (updHost && typeof UPDATES !== "undefined" && UPDATES) {
      UPDATES.items.forEach((u) => {
        const card = el("div", { class: "card update-card" });
        card.innerHTML = `<span class="cat-tag">${u.party}</span><h4>${u.title}</h4><p>${u.body}</p>`;
        updHost.appendChild(card);
      });
    }

    const navHost = $("#navCards");
    UI.home.navCards.forEach((c, i) => {
      const a = el("a", { class: "nav-card", attrs: { href: c.href } });
      const primary = i % 2 === 0 ? "var(--accent)" : "var(--accent-2)";
      const secondary = i % 2 === 0 ? "var(--accent-2)" : "var(--accent)";
      a.style.setProperty("--card-accent", primary);
      a.style.setProperty("--card-accent-a", primary);
      a.style.setProperty("--card-accent-b", secondary);
      a.innerHTML = `<span class="nav-card-emoji" aria-hidden="true">${c.emoji}</span>
        <span class="nav-card-title">${c.title}</span>
        <span class="nav-card-text">${c.text}</span>
        <span class="nav-card-go">${UI.home.navCardGo}</span>`;
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
    breadcrumb("#breadcrumb", [{ href: "index.html", label: UI.crumbHome }, { label: UI.nav.contexte }]);
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
      "<p>" + CONTEXT.emploi.intro + "</p>" +
      (CONTEXT.emploi.calloutTitle ? `<p><strong>${CONTEXT.emploi.calloutTitle}</strong></p>` : "") +
      "<p>" + CONTEXT.emploi.central +
      ` <a href="axe.html?id=1">${UI.contexte.voirAxeEmploi}</a></p>`;

    tilesInto("#socialGrid", CONTEXT.social);

    $("#retraitesCallout").innerHTML =
      "<p>" + CONTEXT.retraites.situation + "</p><ul class='note-list' style='margin-top:10px'>" +
      CONTEXT.retraites.chiffres.map((c) => "<li>" + c + "</li>").join("") + "</ul>" +
      (CONTEXT.retraites.enjeu ? "<p>" + CONTEXT.retraites.enjeu + "</p>" : "") +
      `<p><a href="axe.html?id=3">${UI.contexte.voirAxeRetraites}</a></p>`;

    $("#eauNote").innerHTML = CONTEXT.eauNote + ` <a href="axe.html?id=6">${UI.contexte.voirAxeEau}</a>`;

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
    host.appendChild(makeBtn("all", UI.partis.filterAll));
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
        <span class="seats">${p.seats2021} ${UI.seatsSuffix}</span>`;
      if (p.notDocumented) {
        card.innerHTML += `<p class="seats" style="margin-top:8px">${UI.notDocumentedCard}</p>`;
      } else {
        let dots = `<div class="mini-dots">`;
        CRITERIA.forEach((c) => {
          const lvl = scoreLevel((p.scores || {})[c.key]);
          dots += `<span class="dot ${lvl > 0 ? "lvl-" + lvl : ""}" title="${c.label} : ${LEVEL_LABELS[lvl]}"></span>`;
        });
        dots += `</div>`;
        card.innerHTML += dots;
      }
      host.appendChild(card);
    });
  }

  function pagePartisListe() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: UI.crumbHome }, { label: UI.nav.partis }]);
    renderCategoryFilters();
    renderPartiesGrid();

    const otherHost = $("#otherParties");
    if (otherHost && typeof OTHER_PARTIES !== "undefined" && OTHER_PARTIES) {
      otherHost.innerHTML = `<h2>${OTHER_PARTIES.title}</h2><p>${OTHER_PARTIES.body}</p>`;
    }
  }

  /* ============================================================
     PAGE: parti.html (détail — lit ?id=)
     ============================================================ */
  function renderBudget(b) {
    let html = `<div class="budget-block"><h3>${b.title}</h3><div class="budget-rows">`;
    b.rows.forEach((r) => {
      html += `<div class="budget-row"><span>${r.label}</span><strong>${r.value}</strong></div>`;
    });
    html += `</div>`;
    if (b.spending) html += `<p><strong>${UI.parti.budgetSpendingLabel}</strong> ${b.spending}</p>`;
    if (b.revenue) html += `<p><strong>${UI.parti.budgetRevenueLabel}</strong> ${b.revenue}</p>`;
    if (b.note) html += `<p class="table-note">${b.note}</p>`;
    return html + `</div>`;
  }

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
    document.title = p.acronym + " — " + p.name + " | " + UI.siteTitleSuffix;

    breadcrumb("#breadcrumb", [
      { href: "index.html", label: UI.crumbHome },
      { href: "partis.html", label: UI.nav.partis },
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
        <span class="seats">${p.seats2021} ${UI.seatsSuffix}${p.leader ? " · " + p.leader : ""}${p.symbol ? " · " + UI.symbolLabel + " : " + p.symbol : ""}</span>
      </div>
    </div>`;
    if (p.summary) html += `<p class="party-summary">${p.summary}</p>`;

    const meta = [];
    if (p.slogan) meta.push(`<strong>${UI.parti.sloganLabel}</strong> « ${p.slogan} »`);
    if (p.programDate) meta.push(`<strong>${UI.parti.programDateLabel}</strong> ${p.programDate}`);
    if (meta.length) html += `<p class="party-meta">${meta.join(" · ")}</p>`;

    if (p.identity && p.identity.length) {
      html += `<ul class="identity-list">${p.identity.map((b) => `<li>${b}</li>`).join("")}</ul>`;
    }

    if (p.programUrl) {
      html += `<p><a class="program-link" href="${p.programUrl}" target="_blank" rel="noopener noreferrer">${UI.parti.programLinkLabel}</a></p>`;
    }

    if (p.notDocumented) {
      html += `<div class="callout"><strong>${UI.parti.notAnalyzableLabel}</strong> ${p.notDocumented}</div>`;
    } else {
      if (p.architecture) html += `<p><strong>${UI.parti.architectureLabel}</strong> ${p.architecture}</p>`;

      if (p.budget) html += renderBudget(p.budget);

      html += `<h2 style="margin-top:1.8em">${UI.parti.measuresHeading}</h2>`;
      html += renderMeasureList(p.measures);

      if (p.strengths) html += `<h2>${UI.parti.strengthsHeading}</h2><div class="strengths">${p.strengths}</div>`;
      if (p.weaknesses && p.weaknesses.length) {
        html += `<h2>${UI.parti.weaknessesHeading}</h2><div class="weaknesses"><ul>${p.weaknesses
          .map((x) => `<li>${x}</li>`)
          .join("")}</ul></div>`;
      }
      if (p.structure) html += `<div class="structure-note">« ${p.structure} »</div>`;

      html += `<h2>${UI.parti.evalHeading}</h2>`;
      html += `<p class="table-note">${UI.parti.methodNoteBefore} <a href="coherence.html">${UI.parti.methodNoteLink}</a> ${UI.parti.methodNoteAfter}</p>`;
      html += `<div class="score-bars">`;
      CRITERIA.forEach((c) => {
        const lvl = scoreLevel((p.scores || {})[c.key]);
        html += `<div class="score-bar-row">
          <div class="score-bar-label"><strong>${c.label}</strong><span>${c.question}</span></div>
          <div class="score-bar-track"><div class="score-bar-fill lvl-${lvl}" style="width:${(lvl / 3) * 100}%"></div></div>
          <div class="score-bar-value">${LEVEL_LABELS[lvl]}</div>
        </div>`;
      });
      html += `</div>`;
      if (p.scoreNote) html += `<p class="table-note"><strong>${UI.parti.scoreNoteLabel}</strong> ${p.scoreNote}</p>`;
    }

    $("#partyDetail").innerHTML = html;

    // prev / next
    const idx = PARTIES.findIndex((x) => x.id === p.id);
    const prev = PARTIES[(idx - 1 + PARTIES.length) % PARTIES.length];
    const next = PARTIES[(idx + 1) % PARTIES.length];
    $("#partyPrevNext").innerHTML = `
      <a class="prev-next-link prev" href="parti.html?id=${prev.id}"><span>${UI.parti.prev}</span><strong>${partyBadge(prev, "size-sm")} ${prev.acronym}</strong></a>
      <a class="prev-next-link" href="partis.html">${UI.parti.allParties}</a>
      <a class="prev-next-link next" href="parti.html?id=${next.id}"><span>${UI.parti.next}</span><strong>${next.acronym} ${partyBadge(next, "size-sm")}</strong></a>`;
  }

  /* ============================================================
     PAGE: coherence.html
     ============================================================ */
  function pageCoherence() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: UI.crumbHome }, { label: UI.nav.coherence }]);

    const critHost = $("#criteriaGrid");
    CRITERIA.forEach((c) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h4", { text: c.label }));
      card.appendChild(el("p", { text: c.question }));
      critHost.appendChild(card);
    });

    const table = $("#scoreTable");
    let html = `<thead><tr><th>${UI.coherence.tableHeaderParti}</th>`;
    CRITERIA.forEach((c) => (html += `<th>${c.label}</th>`));
    html += "</tr></thead><tbody>";
    PARTIES.forEach((p) => {
      html += `<tr><td class="party-cell">${partyLink(p)}</td>`;
      CRITERIA.forEach((c) => {
        const lvl = scoreLevel((p.scores || {})[c.key]);
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

    const readNoteHost = $("#readingNote");
    if (readNoteHost) readNoteHost.innerHTML = SOLIDITY_READING_NOTE;

    const stratHost = $("#strategiesGrid");
    if (stratHost) {
      NATIONAL_STRATEGIES.forEach((s) => {
        const card = el("div", { class: "card" });
        card.appendChild(el("h4", { text: s.name }));
        card.appendChild(el("p", { text: s.content }));
        stratHost.appendChild(card);
      });
    }

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
    breadcrumb("#breadcrumb", [{ href: "index.html", label: UI.crumbHome }, { label: UI.nav.axes }]);
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
    document.title = UI.axe.axisBreadcrumb(axis.id) + " — " + axis.title + " | " + UI.siteTitleSuffix;

    breadcrumb("#breadcrumb", [
      { href: "index.html", label: UI.crumbHome },
      { href: "axes.html", label: UI.nav.axes },
      { label: UI.axe.axisBreadcrumb(axis.id) },
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

    let html = `<p class="eyebrow">${UI.axe.axisOf(axis.id)}</p><h1>${axis.title}</h1>`;
    if (axis.repere) html += `<div class="callout"><strong>${UI.axe.pointDeRepereLabel}</strong> ${axis.repere}</div>`;
    html += `<table class="axis-table">`;
    axis.rows.forEach(([party, text]) => {
      html += `<tr><td class="axis-party">${linkifyPartyLabel(party)}</td><td>${text}</td></tr>`;
    });
    html += `</table>`;
    html += `<div class="axis-lecture"><strong>${UI.axe.lectureLabel}</strong> ${axis.lecture}</div>`;
    $("#axisDetail").innerHTML = html;

    const idx = AXES.findIndex((a) => a.id === axis.id);
    const prev = AXES[(idx - 1 + AXES.length) % AXES.length];
    const next = AXES[(idx + 1) % AXES.length];
    $("#axisPrevNext").innerHTML = `
      <a class="prev-next-link prev" href="axe.html?id=${prev.id}"><span>${UI.axe.prev}</span><strong>${prev.title}</strong></a>
      <a class="prev-next-link" href="axes.html">${UI.axe.allAxes}</a>
      <a class="prev-next-link next" href="axe.html?id=${next.id}"><span>${UI.axe.next}</span><strong>${next.title}</strong></a>`;
  }

  /* ============================================================
     PAGE: angles-morts.html
     ============================================================ */
  function pageAnglesMorts() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: UI.crumbHome }, { label: UI.nav.anglesMorts }]);
    const host = $("#blindSpotsGrid");
    BLIND_SPOTS.forEach((b) => {
      const card = el("div", { class: "card" });
      card.innerHTML = `<h4>${b.title}</h4><p>${b.text}</p>` +
        (b.axisRef ? `<a class="card-link" href="axe.html?id=${b.axisRef}">${UI.anglesMorts.voirAxe}</a>` : "");
      host.appendChild(card);
    });
  }

  /* ============================================================
     PAGE: boite-a-outils.html
     ============================================================ */
  function pageBoiteAOutils() {
    breadcrumb("#breadcrumb", [{ href: "index.html", label: UI.crumbHome }, { label: UI.nav.boiteAOutils }]);
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
        const a = el("a", { class: "card-link", text: UI.boiteAOutils.voirAxe, attrs: { href: "axe.html?id=" + q.axisRef } });
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
    breadcrumb("#breadcrumb", [{ href: "index.html", label: UI.crumbHome }, { label: UI.nav.sources }]);

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

    const limitsHost = $("#closingLimits");
    if (limitsHost && typeof CLOSING_LIMITS !== "undefined" && CLOSING_LIMITS) {
      CLOSING_LIMITS.forEach((l) => {
        const card = el("div", { class: "card" });
        card.appendChild(el("h4", { text: l.title }));
        card.appendChild(el("p", { text: l.text }));
        limitsHost.appendChild(card);
      });
    }

    const replyHost = $("#rightOfReply");
    if (replyHost) {
      replyHost.innerHTML = `<strong>${UI.sources.rightOfReplyTitle}</strong> ${UI.sources.rightOfReplyBody}`;
    }
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
