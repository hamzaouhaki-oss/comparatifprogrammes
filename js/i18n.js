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

const ELECTION_DATE_ISO = LANG === "ar" ? ELECTION_DATE_ISO_AR : ELECTION_DATE_ISO_FR;

document.documentElement.lang = UI.htmlLang;
document.documentElement.dir = UI.dir;

/* ===================================================================
   Date et décompte — calculés à chaque chargement, jamais figés dans
   le texte : le site affiche toujours la date réelle du jour et le
   nombre de jours qui restent avant le scrutin.
   =================================================================== */

const MONTHS = {
  fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  ar: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"],
};

function midnight(d) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

/** Date du jour, formatée dans la langue active (ex. « 15 septembre 2026 »). */
function todayLabel() {
  const d = new Date();
  return `${d.getDate()} ${MONTHS[LANG][d.getMonth()]} ${d.getFullYear()}`;
}

/** Jours restants avant le scrutin (négatif une fois le scrutin passé). */
function daysUntilElection() {
  const election = midnight(new Date(ELECTION_DATE_ISO + "T00:00:00"));
  return Math.round((election - midnight(new Date())) / 86400000);
}

/** Décompte lisible, accordé correctement dans les deux langues. */
function countdownLabel() {
  const n = daysUntilElection();
  if (LANG === "ar") {
    if (n < 0) return "انتهى الاقتراع";
    if (n === 0) return "اليوم يوم الاقتراع";
    if (n === 1) return "غدا يوم الاقتراع";
    if (n === 2) return "يومان قبل الاقتراع";
    if (n <= 10) return `${n} أيام قبل الاقتراع`;
    return `${n} يوما قبل الاقتراع`;
  }
  if (n < 0) return "Scrutin passé";
  if (n === 0) return "Jour du scrutin";
  if (n === 1) return "J-1 — le scrutin est demain";
  return `J-${n} avant le scrutin`;
}

/** Remplace {date} et {countdown} par leur valeur du moment. */
function fillTokens(text) {
  return text.replace(/\{date\}/g, todayLabel()).replace(/\{countdown\}/g, countdownLabel());
}
window.fillTokens = fillTokens;

/** Applique les chaînes UI aux éléments statiques marqués data-i18n="chemin.vers.la.cle" */
function applyStaticI18n(root) {
  (root || document).querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n").split(".");
    let value = UI;
    for (const key of path) {
      value = value && value[key];
    }
    if (typeof value === "string") el.textContent = fillTokens(value);
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
