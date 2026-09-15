/* ===================================================================
   Résolution de langue — choisit FR ou AR et l'applique à la page.
   Chargé après data.js et data.ar.js, avant common.js et app.js :
   il redéclare les noms globaux (PARTIES, AXES, UI...) que les deux
   fichiers de données exposent en _FR / _AR, pour que le reste du
   code n'ait jamais besoin de savoir dans quelle langue il tourne.
   =================================================================== */

const LANG = localStorage.getItem("lang") === "ar" ? "ar" : "fr";

const DOC_DATE = LANG === "ar" ? DOC_DATE_AR : DOC_DATE_FR;
const CONTEXT = LANG === "ar" ? CONTEXT_AR : CONTEXT_FR;
const CRITERIA = LANG === "ar" ? CRITERIA_AR : CRITERIA_FR;
const PARTIES = LANG === "ar" ? PARTIES_AR : PARTIES_FR;
const CATEGORIES = LANG === "ar" ? CATEGORIES_AR : CATEGORIES_FR;
const CONSENSUS_FINDINGS = LANG === "ar" ? CONSENSUS_FINDINGS_AR : CONSENSUS_FINDINGS_FR;
const BLIND_SPOTS = LANG === "ar" ? BLIND_SPOTS_AR : BLIND_SPOTS_FR;
const TOOLBOX_QUESTIONS = LANG === "ar" ? TOOLBOX_QUESTIONS_AR : TOOLBOX_QUESTIONS_FR;
const AXIS_GROUPS = LANG === "ar" ? AXIS_GROUPS_AR : AXIS_GROUPS_FR;
const AXES = LANG === "ar" ? AXES_AR : AXES_FR;
const SOURCES = LANG === "ar" ? SOURCES_AR : SOURCES_FR;
const AVANT_PROPOS = LANG === "ar" ? AVANT_PROPOS_AR : AVANT_PROPOS_FR;
const NOTE_FINALE = LANG === "ar" ? NOTE_FINALE_AR : NOTE_FINALE_FR;
const UPDATES = LANG === "ar" ? UPDATES_AR : UPDATES_FR;
const OTHER_PARTIES = LANG === "ar" ? OTHER_PARTIES_AR : OTHER_PARTIES_FR;
const NATIONAL_STRATEGIES = LANG === "ar" ? NATIONAL_STRATEGIES_AR : NATIONAL_STRATEGIES_FR;
const SOLIDITY_READING_NOTE = LANG === "ar" ? SOLIDITY_READING_NOTE_AR : SOLIDITY_READING_NOTE_FR;
const CLOSING_LIMITS = LANG === "ar" ? CLOSING_LIMITS_AR : CLOSING_LIMITS_FR;
const UI = LANG === "ar" ? UI_AR : UI_FR;

document.documentElement.lang = UI.htmlLang;
document.documentElement.dir = UI.dir;

/** Applique les chaînes UI aux éléments statiques marqués data-i18n="chemin.vers.la.cle" */
function applyStaticI18n(root) {
  (root || document).querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n").split(".");
    let value = UI;
    for (const key of path) {
      value = value && value[key];
    }
    if (typeof value === "string") el.textContent = value;
  });
}

/** Change de langue et recharge la page (le contenu est régénéré en JS au chargement). */
function setLang(next) {
  localStorage.setItem("lang", next);
  window.location.reload();
}
window.setLang = setLang;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => applyStaticI18n());
} else {
  applyStaticI18n();
}
