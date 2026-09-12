/* ===================================================================
   Données — Analyse des programmes électoraux, Maroc, législatives 2026
   Source : document d'analyse arrêté au 12 septembre 2026
   =================================================================== */

const DOC_DATE = "12 septembre 2026";

const CONTEXT = {
  scrutin: [
    { label: "Date du scrutin", value: "Mercredi 23 septembre 2026" },
    { label: "Sièges en jeu", value: "395 (305 locaux + 90 régionaux)" },
    { label: "Mandat", value: "5 ans" },
    { label: "Électeurs inscrits", value: "15 801 162" },
    { label: "Partis en lice", value: "27 (702 listes)" },
    { label: "Campagne officielle", value: "10 → 22 septembre 2026" },
    { label: "Observateurs accrédités", value: "3 006" },
    { label: "Plafond de dépenses", value: "600 000 DH / liste" },
  ],
  depart2021: [
    { party: "RNI", seats: 102 },
    { party: "PAM", seats: 87 },
    { party: "Istiqlal", seats: 81 },
    { party: "USFP", seats: 34 },
    { party: "MP", seats: 28 },
    { party: "PPS", seats: 22 },
    { party: "UC", seats: 18 },
    { party: "PJD", seats: 13 },
    { party: "MDS", seats: 5 },
    { party: "FFD", seats: 3 },
    { party: "PSU", seats: 1 },
  ],
  jeunesse: "Taux d'inscription des 18-24 ans : environ <strong>12 %</strong> (474 000 inscrits sur 3,89 millions de jeunes). Les plus de 60 ans représentent <strong>29 %</strong> du corps électoral : les programmes parlent de jeunesse à un électorat nettement plus âgé que le pays.",
  economie: [
    { label: "Croissance 2026", value: "4,1 à 5,3 % selon les sources (HCP, gouvernement, BAM, Banque mondiale)" },
    { label: "Croissance 2027 (HCP)", value: "Ralentissement marqué à 3 %" },
    { label: "Inflation 2026 (prévision)", value: "1,5 %, puis 2 % en 2027" },
    { label: "Chômage", value: "13 % au sens large (2025) ; 10,8 % au sens strict (S1 2026) ≈ 1,25 M de personnes" },
    { label: "Déficit budgétaire", value: "≈ 3,4 % du PIB en 2026, 3,2 % en 2027" },
    { label: "Dette du Trésor", value: "≈ 65,8 % du PIB en 2026, 65,2 % en 2027" },
    { label: "Charge d'intérêts de la dette", value: "≈ 2,2 % du PIB" },
  ],
  economieNuances: [
    "La croissance 2026 est largement <strong>agricole</strong> — portée par des pluies exceptionnelles, pas par une transformation structurelle. Le HCP prévoit un retour à 3 % dès 2027.",
    "La croissance longue du Maroc est modeste : <strong>4,7 %</strong> en moyenne sur 2000-2011, <strong>2,8 %</strong> sur 2012-2024. Le pouvoir d'achat n'a progressé que de 1,6 %/an sur la seconde période.",
  ],
  emploi: {
    intro: "Le gouvernement revendique <strong>193 000 emplois créés en 2025</strong> (réel). Mais le solde net cumulé sur les quatre années du mandat n'est que d'environ <strong>94 000 emplois</strong> — largement annulé par des destructions, notamment agricoles.",
    central: "Cinq partis promettent un million d'emplois (ou 500 000). Un million net en cinq ans = <strong>200 000 par an</strong>. Passer de 94 000 en quatre ans à 200 000 par an suppose de multiplier le rythme par plus de huit — sans qu'aucun programme n'explique quelle activité économique produirait ce saut.",
    jeunes: "Chômage des 15-24 ans : plus de <strong>37 %</strong>. Chômeurs recensés : ≈ 1,6 million.",
  },
  social: [
    { label: "Aide sociale directe (ASD)", value: "≈ 3,9 M de ménages (12 M de personnes) ; 500 à 1 350 DH/mois ; budget porté à 29 MMDH en 2026 (≈ 2 % du PIB) ; ≈ 52 MMDH versés depuis déc. 2023" },
    { label: "AMO", value: "≈ 11 M de bénéficiaires AMO Tadamon, plus de 418 000 pour AMO Achamil" },
    { label: "Budget santé", value: "19,7 MMDH (2021) → 42,4 MMDH (2026), soit +115 %" },
    { label: "SMAG", value: "+25 %, atteint 2 533,44 DH nets/mois au 1er avril 2026" },
    { label: "Réforme de l'IR", value: "Coût de 7,6 MMDH ; jusqu'à +400 DH/mois pour certains salariés" },
    { label: "Seuil pension CNSS", value: "Abaissé de 3 240 à 1 320 jours de cotisation (effet rétroactif)" },
  ],
  retraites: {
    situation: "La loi-cadre fixait la réforme des retraites à <strong>fin 2026</strong> — elle n'aura pas lieu. Projet présenté le 12 mai 2026 : âge légal 60 → 63 ans par paliers, +8 % de pensions sur 3 ans à partir de 2027, deux pôles (public : CMR + RCAR ; privé : CNSS + CIMR). Blocage syndical (revalorisation d'abord, refus de la logique paramétrique). Le dossier passe au prochain gouvernement.",
    chiffres: [
      "CMR : <strong>60,3 MMDH</strong> de déficits cumulés depuis 2014 (plus de la moitié sur les 5 dernières années) ; réserves à 57,4 MMDH (-7,1 % sur un an)",
      "<strong>81 % des retraités CNSS</strong> (≈ 680 000 personnes) perçoivent moins de 3 000 DH ; porter toutes les pensions à 3 000 DH coûterait ≈ <strong>54 MMDH</strong>",
    ],
  },
  eau: [
    { label: "Remplissage des barrages (2026)", value: "75,86 % (contre 23 % en février 2024) — ≈ 16,3 Mrd de m³ stockés" },
    { label: "Capacité barrages", value: "156 grands barrages, 20,8 Mrd de m³ ; 12 en travaux, 155 petits ouvrages d'ici 2027" },
    { label: "Dessalement", value: "40 M m³/an (2021) → 350 M m³/an aujourd'hui (17 stations) ; objectif 1,4-1,7 Mrd m³/an en 2030" },
    { label: "Réutilisation des eaux usées", value: "52 M m³/an (fin 2025) → objectif 100 M (2027) puis 350 M (2035)" },
  ],
  eauNote: "L'amélioration de 2026 est <strong>météorologique</strong>, pas structurelle. Les vulnérabilités de fond (nappes surexploitées, envasement, agriculture très consommatrice d'eau) demeurent entières.",
  defis: [
    "Créer de l'emploi à un rythme jamais atteint, surtout pour les jeunes et les femmes",
    "Trancher la réforme des retraites — impopulaire, inévitable, reportée depuis 12 ans",
    "Financer l'État social déjà promis sans casser les finances publiques, alors que 2027 ralentira à 3 %",
    "Faire progresser la qualité de l'école, pas seulement ses effectifs",
    "Passer du répit hydrique à une vraie gestion de la demande en eau",
    "Transformer les infrastructures du Mondial 2030 en emplois durables",
    "Réduire l'informel et les écarts entre territoires, urbain/rural en tête",
    "Restaurer la confiance politique : 12 % d'inscription chez les 18-24 ans est un signal d'alerte",
  ],
};

/* Scores : 0 = non documenté, 1 = faible (●), 2 = moyen (●●), 3 = élevé (●●●) */
const CRITERIA = [
  { key: "diagnostic", label: "Diagnostic", question: "Le programme part-il d'un constat chiffré et vérifiable ?" },
  { key: "chiffrage", label: "Chiffrage", question: "Les objectifs sont-ils quantifiés ?" },
  { key: "financement", label: "Financement", question: "Le programme dit-il qui paie et avec quel argent ?" },
  { key: "execution", label: "Exécution", question: "Y a-t-il un mécanisme, une loi, un calendrier ?" },
  { key: "alignement", label: "Alignement stratégique", question: "S'articule-t-il avec les grands chantiers nationaux ?" },
  { key: "arbitrages", label: "Arbitrages difficiles", question: "Aborde-t-il les sujets qui fâchent ?" },
];

const PARTIES = [
  {
    id: "rni", acronym: "RNI", name: "Rassemblement national des indépendants",
    category: "majorite", seats2021: 102, leader: "Mohamed Chaouki",
    color: "#1D6FB8", colorVerified: true, symbol: "La colombe",
    identity: "Parti libéral de centre-droit, première force en 2021, a dirigé le gouvernement sortant. Changement de direction en février 2026 (Mohamed Chaouki succède à Aziz Akhannouch), sans rupture de ligne.",
    architecture: "Programme 2026-2031 : <strong>3 priorités, 12 mesures</strong> — pouvoir d'achat, services publics, emploi.",
    pari: "La continuité : revendiquer le bilan et proposer d'amplifier ce qui a été lancé.",
    measures: {
      "Pouvoir d'achat": [
        "Indexation automatique des aides sociales directes sur l'inflation",
        "Compte d'épargne simplifié pour l'informel, contribution publique de 0,25 DH par DH épargné",
        "Hausse du SMIG et du SMAG, revalorisation des retraites",
        "Crédit d'impôt jusqu'à 5 000 DH/enfant/an (frais de scolarité)",
      ],
      "Services publics": [
        "Eau : barrages, transferts, dessalement, eaux pluviales, irrigation localisée",
        "Énergie : autoproduction solaire sans apport initial, GNL, hydrogène vert",
        "École : préscolaire et écoles/collèges pionniers généralisés d'ici 2028, lycées pionniers d'ici 2031, décrochage divisé par deux",
        "Supérieur : 12 → 27 universités, 12 Cités des métiers achevées",
        "Santé : groupements sanitaires territoriaux, médecin de famille, ≈5 000 agents ruraux supplémentaires, 1 600 structures réhabilitées, 200 nouvelles",
      ],
      "Emploi": [
        "1 million d'emplois, chômage sous 9 %",
        "Allocation de retour à l'emploi jusqu'à 12 mois",
      ],
    },
    strengths: "Le programme le plus directement branché sur l'appareil administratif existant : généraliser des dispositifs déjà en place (pionniers, GST, Cités des métiers, ASD) est plus crédible que créer ex nihilo. Le crédit d'impôt scolarité et l'épargne abondée pour l'informel sont des mécanismes précis.",
    weaknesses: "Le million d'emplois avait déjà été promis en 2021 (solde réel : ≈94 000 en 4 ans) sans expliquer ce qui change. Aucun chiffrage global du coût. Silence sur le paramétrage des retraites.",
    scores: { diagnostic: 2, chiffrage: 3, financement: 1, execution: 3, alignement: 3, arbitrages: 1 },
    structure: "L'État comme machine à généraliser. Logique de déploiement à l'échelle. Profondeur administrative élevée, profondeur doctrinale faible.",
  },
  {
    id: "pam", acronym: "PAM", name: "Parti authenticité et modernité",
    category: "majorite", seats2021: 87, leader: "Direction collégiale (El Mansouri, Bensaïd, Saadi)",
    color: "#1F2E7A", colorVerified: true, symbol: "Le tracteur",
    identity: "Deuxième force en 2021, membre de la majorité. Direction collégiale depuis 2024. Plusieurs ralliements médiatisés dont Fouzi Lekjaa.",
    architecture: "Programme dévoilé le 1er septembre 2026, « Pour changer de cap ». <strong>5 pactes, 20 engagements</strong>, enveloppe de <strong>350 MMDH sur 2027-2031</strong>.",
    pari: "Rester dans la majorité tout en réclamant un changement de cap — vise la première place.",
    measures: {
      "Pacte 1 — Pouvoir d'achat (≈150 MMDH)": [
        "6 sociétés régionales de distribution agricole, modernisation des marchés de gros, unités frigorifiques dans les ports de pêche",
        "Gratuité des factures d'électricité inférieures à 100 DH/mois",
        "Exonération d'IR pour les salaires bruts inférieurs à 15 000 DH",
        "Pension minimale de 3 000 DH",
        "Plancher de 1 000 DH pour l'ASD",
      ],
      "Pacte 2 — Insertion des jeunes (≈50 MMDH)": [
        "Parcours national pour les NEET",
        "500 000 contrats de première expérience sur 5 ans",
        "Accompagnement de 60 000 jeunes entreprises",
        "100 000 solutions de logement pour les jeunes",
      ],
      "Pacte 3 — Citoyenneté (≈100 MMDH)": [
        "4 nouveaux CHU, mise à niveau de 1 600 centres de santé et 90 hôpitaux",
        "Préscolaire généralisé dès 4 ans, transport scolaire renforcé",
        "500 000 familles bénéficiant d'un logement décent",
        "École au quotidien : rentrée à 9h, 20 min de lecture/jour, socle garanti jusqu'à 15 ans, 3h d'EPS/semaine, dépistages médicaux systématiques",
        "Supérieur en 3 pôles : excellence internationale, technique territorial, passerelles",
      ],
      "Pacte 4 — Sécurités stratégiques (≈50 MMDH)": [
        "6 nouvelles stations de dessalement, 400 petits barrages et retenues collinaires",
        "5 000 spécialistes formés en IA et cybersécurité",
      ],
      "Pacte 5 — Croissance et durabilité": [
        "Croissance 5 %, inflation ≈2 %, déficit 3 % du PIB, dette à 62 % du PIB en 2031",
        "1 million d'emplois nets",
        "Financement : 300 des 350 MMDH attendus de « l'effet de la croissance »",
      ],
    },
    strengths: "Le programme le plus complet et détaillé de la campagne, jusqu'au concret quotidien. Seul parti à afficher un coût global et des cibles macroéconomiques précises — une transparence rare qui le rend vérifiable.",
    weaknesses: "Financement circulaire : 300 des 350 MMDH viennent d'une croissance de 5 % que le HCP et la Banque mondiale jugent optimiste. La pension à 3 000 DH (≈54 MMDH) n'est pas chiffrée dans l'enveloppe. L'exonération d'IR sous 15 000 DH n'est pas chiffrée alors que le déficit doit baisser à 3 %.",
    scores: { diagnostic: 2, chiffrage: 3, financement: 2, execution: 3, alignement: 3, arbitrages: 2 },
    structure: "L'État comme gestionnaire du quotidien. Descend jusqu'à l'heure de rentrée scolaire. Très opérationnel, faible sur la question du pouvoir.",
  },
  {
    id: "istiqlal", acronym: "PI", name: "Parti de l'Istiqlal",
    category: "majorite", seats2021: 81, leader: "Nizar Baraka",
    color: "#A81F5C", colorVerified: true, symbol: "La balance",
    identity: "Troisième force en 2021, membre de la majorité. Ne cache plus son ambition de diriger le prochain gouvernement.",
    architecture: "Programme 2026-2031, « Watani Moustaqbali » (Ma patrie, mon futur), présenté le 29 août. <strong>5 engagements</strong> plus un dispositif jeunesse transversal.",
    pari: "Combiner discours de valeurs/famille (terrain historique) et offre technique de gouvernance économique.",
    measures: {
      "Engagement 1 — Cohésion familiale et valeurs": [
        "Rôle renforcé de l'école, des médias, de la culture dans un récit national ; programmes en arabe et amazighe",
        "Protection des jeunes face aux risques des réseaux sociaux",
        "Aide jusqu'à 5 000 DH aux jeunes en instance de mariage",
        "Médiation familiale, crèches sociales, prise en charge des personnes âgées et handicapées",
      ],
      "Engagement 2 — Corruption, rente, conflits d'intérêts": [
        "Loi spécifique sur les conflits d'intérêts, déclarations de patrimoine élargies",
        "Renforcement du Conseil de la concurrence",
        "IS porté à 40 % dans les situations de monopole",
        "« Le silence de l'administration vaut accord »",
      ],
      "Engagement 3 — Pouvoir d'achat": [
        "Suivi national des marges commerciales",
        "Hausses progressives du salaire minimum et des retraites",
        "Carte familiale contre la pauvreté, plan de consolidation de la classe moyenne",
      ],
      "Engagement 4 — Services publics": [
        "Préscolaire gratuit, lutte contre le décrochage, régulation des frais de scolarité dans le privé",
        "Santé : gouvernance hospitalière, médecin référent, agence nationale des urgences",
      ],
      "Engagement 5 — Souveraineté stratégique": [
        "Sécurité hydrique, contenu local énergétique, politique carbone",
        "Commande publique favorisant la production marocaine",
        "Montée en gamme industrielle, souveraineté numérique, valorisation minière",
      ],
    },
    strengths: "Le programme le plus solide sur la gouvernance économique : loi sur les conflits d'intérêts, IS à 40 % sur les monopoles, « silence vaut accord », régulation des frais du privé — des mesures institutionnelles précises et vérifiables.",
    weaknesses: "Aucun chiffrage global ni objectif d'emploi quantifié. Tension interne : le parti était au gouvernement (ministère de l'Équipement et de l'Eau) tout en faisant campagne contre la rente. L'aide au mariage a un effet ponctuel. Silence sur le paramétrage des retraites.",
    scores: { diagnostic: 2, chiffrage: 1, financement: 1, execution: 3, alignement: 3, arbitrages: 2 },
    structure: "L'État comme régulateur et arbitre. Profondeur institutionnelle élevée (lois, agences, conflits d'intérêts), faible sur les résultats quantifiés.",
  },
  {
    id: "usfp", acronym: "USFP", name: "Union socialiste des forces populaires",
    category: "opposition", seats2021: 34, leader: "Driss Lachgar",
    color: "#C21F1F", colorVerified: true, symbol: "La rose",
    identity: "Principale force d'opposition en 2021. Programme présenté le 27 août à Rabat.",
    architecture: "<strong>20 engagements</strong> sous le concept de « développement juste / équitable », présenté comme un contrat évaluable.",
    pari: "Une chaîne causale explicite : politique industrielle → emplois → croissance → revenus.",
    measures: {
      "Industrie et souveraineté productive": [
        "Contrats sectoriels (agroalimentaire, médicament, énergies renouvelables)",
        "250 000 emplois industriels, +40 % d'exportations industrielles, +1,5 point de croissance/an",
      ],
      "Emploi": [
        "Chômage sous 8 % (jeunes sous 10 %, femmes sous 15 %)",
        "200 000 insertions/an, 50 000 entreprises accompagnées en 5 ans",
        "Mondial 2030 : 500 000 emplois directs et indirects",
      ],
      "Classes moyennes et entreprises": [
        "+20 % du salaire moyen, +15 % du revenu net des salariés",
        "-20 % des dépenses de santé des ménages, 250 000 familles soutenues pour un logement",
        "30 % des marchés publics réservés aux TPME, établissement financier public dédié",
      ],
      "Protection sociale et santé": [
        "Couverture universelle, pauvreté multidimensionnelle réduite de moitié",
        "Densité de soins à 4,5 prestataires/1 000 habitants, délais d'attente réduits de moitié",
      ],
      "École et recherche": [
        "Maximum 30 élèves par classe, préscolaire à 100 %",
        "Recherche scientifique à 2 % du PIB",
        "-40 % de sureffectif, 60 % d'insertion des diplômés, 10 nouveaux pôles universitaires",
      ],
      "Eau et énergie": [
        "-40 % des pertes des réseaux d'eau, 60 % de renouvelables dans la production électrique",
      ],
    },
    strengths: "Probablement le programme le mieux construit sur le plan logique économique : cause → effet. 30 élèves/classe et 4,5 prestataires/1 000 hab. sont des indicateurs de qualité, pas de volume — une différence rare.",
    weaknesses: "Les objectifs de revenus (+20 % du salaire moyen) ne sont pas des leviers d'État directs. La recherche à 2 % du PIB est un saut considérable sans dire comment l'absorber. Pas de chiffrage global ni de plan de financement.",
    scores: { diagnostic: 3, chiffrage: 3, financement: 1, execution: 2, alignement: 3, arbitrages: 2 },
    structure: "L'État comme stratège industriel. Profondeur économique élevée, chaîne causale explicite.",
  },
  {
    id: "mp", acronym: "MP", name: "Mouvement populaire",
    category: "opposition", seats2021: 28, leader: "Mohamed Ouzzine",
    color: "#A6790E", colorVerified: true, symbol: "L'épi de blé",
    identity: "Ancrage historique rural et amazigh. Hors de la majorité sortante. Premier grand parti à avoir publié son programme (dès mai 2026).",
    architecture: "« Contrat social », <strong>11 axes et 33 mesures</strong>.",
    pari: "L'État comme service de proximité à décentraliser.",
    measures: {
      "Pouvoir d'achat": [
        "Plateforme nationale de suivi des prix et des marges",
        "« Compte fiscal social » : déduction d'une partie des frais de scolarité",
        "Trêve à l'exportation pour stabiliser les prix des produits de base",
      ],
      "Entreprises et emploi": [
        "Exonération d'impôt pour les TPME jusqu'à 1 M DH de chiffre d'affaires",
        "Chèque-formation pour chaque jeune chômeur",
        "Restructuration de l'OFPPT en régulateur (non-opérateur direct)",
      ],
      "Santé": [
        "Dossier médical numérique dès la naissance, plateforme nationale de rendez-vous",
        "Transfert de 70 % du budget de la santé vers les structures régionales et locales",
      ],
      "Éducation": [
        "Plan d'éradication de l'analphabétisme, « Marche de la lumière » (200h/an d'étudiants mobilisés)",
        "Gratuité de l'enseignement supérieur public",
        "Suppression du plafond d'âge pour les concours d'enseignement",
      ],
      "Monde rural": [
        "Pôles multiservices dans les communes de plus de 5 000 habitants",
        "« Contrat de stabilité rurale » de 5 ans pour médecins, enseignants, agents",
        "Fonds de logement rural",
      ],
    },
    strengths: "Les innovations institutionnelles les plus originales de la campagne. Le « contrat de stabilité rurale » attaque un problème réel (rotation du personnel en zone rurale) par un mécanisme concret. Cohérent avec son identité rurale et amazighe.",
    weaknesses: "Presque aucun objectif macroéconomique chiffré. Trois mesures coûteuses non chiffrées (gratuité du supérieur, exonération TPME, compte fiscal social). La trêve à l'exportation pénalise les producteurs sans que le coût soit abordé.",
    scores: { diagnostic: 2, chiffrage: 1, financement: 1, execution: 3, alignement: 2, arbitrages: 2 },
    structure: "L'État comme service de proximité à décentraliser. Profondeur territoriale élevée, faible sur la macroéconomie.",
  },
  {
    id: "pps", acronym: "PPS", name: "Parti du progrès et du socialisme",
    category: "opposition", seats2021: 22, leader: "Nabil Benabdallah",
    color: "#0A6FA3", colorVerified: true, symbol: "Le livre",
    identity: "Dans l'opposition, discours critique du bilan sortant. Programme 2027-2031 publié en ligne.",
    architecture: "Programme de gauche assumé, État social et services publics, logique de moyens massifs.",
    pari: "L'État doit produire les services publics : donc recruter, construire, financer.",
    measures: {
      "Emploi et économie": [
        "1 million d'emplois nets, NEET réduits de moitié",
        "Taux d'activité des femmes porté à 25 %",
        "Industrie à 20 % du PIB, informel réduit d'un tiers",
        "Révision de certains accords de libre-échange jugés défavorables",
      ],
      "Social": [
        "Pension minimale de retraite à 3 000 DH, minimum de 1 000 DH pour les aides sociales",
        "Doublement des effectifs du personnel hospitalier",
        "Extension de l'AMO aux 8,5 millions de personnes encore exclues",
      ],
      "Éducation": [
        "18 000 enseignants recrutés par an (préscolaire, primaire, collège)",
        "30 000 nouvelles salles de classe en 5 ans, priorité au rural",
        "-50 % de décrochage d'ici 2031",
        "Recherche à 1,5 % du PIB, une université marocaine dans le top 500 mondial",
      ],
    },
    strengths: "Le programme le plus cohérent avec lui-même : une doctrine claire dont toutes les mesures découlent. Chiffres opérationnels et vérifiables chaque année (18 000 enseignants/an, 30 000 salles). Volet agricole (-25 % d'eau, souveraineté alimentaire) le plus abouti de la campagne.",
    weaknesses: "Le programme le plus coûteux et le moins financé explicitement : aucun chiffrage global, aucune trajectoire budgétaire. Doubler le personnel hospitalier en 5 ans est matériellement impossible (goulot de formation). La révision des accords de libre-échange n'est pas précisée.",
    scores: { diagnostic: 3, chiffrage: 3, financement: 1, execution: 2, alignement: 2, arbitrages: 2 },
    structure: "L'État comme employeur et producteur de services. Profondeur sociale élevée, profondeur budgétaire faible.",
  },
  {
    id: "pjd", acronym: "PJD", name: "Parti de la justice et du développement",
    category: "opposition", seats2021: 13, leader: "Abdelilah Benkirane",
    color: "#B85E12", colorVerified: true, symbol: "La lampe (le flambeau)",
    identity: "Passé de 125 à 13 sièges en 2021 (plus de 90 % de sa représentation perdue). Programme présenté le 7 septembre 2026 : scrutin existentiel.",
    architecture: "« La croissance durable pour l'emploi » — la création d'emplois comme critère principal d'évaluation économique.",
    pari: "Conditionner l'argent public à des résultats plutôt que promettre des chiffres.",
    measures: {
      "Emploi": [
        "Diagnostic explicite : ≈1,6 M de chômeurs en 2025, +37 % de chômage chez les 15-24 ans",
        "Formation, reconversion, soutien à l'entrepreneuriat et à l'auto-emploi",
      ],
      "Entreprises et fiscalité": [
        "Conditionnalité des soutiens publics : emplois créés, achats locaux, innovation, délais de paiement respectés",
        "Taux d'imposition réduits pour certaines TPE",
      ],
      "Concurrence et prix": [
        "Réglementation renforcée contre les monopoles et oligopoles, fiscalité plus élevée pour ces secteurs",
        "Contrôle des prix des produits de première nécessité, lutte contre la spéculation, réforme des marchés de gros",
      ],
      "Éducation — la rupture la plus nette de la campagne": [
        "Suppression de la distinction écoles ordinaires / pionnières, retour à une école publique unifiée",
        "L'arabe comme langue principale d'enseignement (alternance scientifique limitée à 30 %)",
        "Suppression de la limite d'âge de 35 ans aux concours de recrutement",
        "Recherche scientifique à 1,5 % du PIB",
      ],
    },
    strengths: "La mécanique la plus précise sur un point que presque tous les autres esquivent : conditionner l'argent public à des résultats vérifiables. Diagnostic chiffré du chômage le plus clair. Sur l'école, une vraie alternative doctrinale plutôt qu'un dosage différent.",
    weaknesses: "Peu d'objectifs quantifiés de résultat, aucun chiffrage ni plan de financement. Supprimer les écoles pionnières (≈80 % du primaire dès 2026-2027) est un pari à haut risque sans détail sur ce qui remplace. Le retour à l'arabe n'aborde pas la continuité avec un supérieur largement francophone.",
    scores: { diagnostic: 3, chiffrage: 1, financement: 1, execution: 3, alignement: 1, arbitrages: 3 },
    structure: "L'État comme régulateur des marchés et redresseur de doctrine scolaire. Profondeur normative élevée, faible sur les objectifs mesurables.",
  },
  {
    id: "uc", acronym: "UC", name: "Union constitutionnelle",
    category: "opposition", seats2021: 18, leader: "Mohamed Joudar",
    color: "#8C5A1F", colorVerified: true, symbol: "Le cheval",
    identity: "Parti libéral fondé en 1983. Programme publié en ligne pour 2026.",
    architecture: "Orientations autour de l'économie productive, du soutien aux entreprises, de l'emploi, des services publics et du développement territorial.",
    pari: "Continuité peu doctrinale.",
    measures: {
      "Économie et emploi": [
        "L'emploi comme axe clé de la politique économique",
        "Réduction des écarts entre territoires, soutien aux secteurs productifs (agriculture, industrie, tourisme, services)",
      ],
      "École et supérieur": [
        "Révision des programmes autour des compétences fondamentales, des langues et du numérique",
        "Préscolaire de qualité généralisé, mise à niveau des infrastructures",
        "Rapprochement formation-emploi, partenariats université-entreprise",
      ],
    },
    strengths: "Cohérente sur un point souvent négligé : le contenu de l'école (compétences, langues, numérique, citoyenneté) plutôt que seulement les moyens. Articulation explicite école-formation-marché du travail.",
    weaknesses: "Glissement doctrinal non expliqué : positionnement libéral historique, discours 2026 tourné vers l'État social. Quasi-absence de chiffrage. Niveau de détail très en deçà du PAM, du RNI, de l'USFP ou du PPS.",
    scores: { diagnostic: 1, chiffrage: 1, financement: 1, execution: 1, alignement: 2, arbitrages: 1 },
    structure: "Positionnement de continuité, peu doctrinal, faiblement documenté.",
  },
  {
    id: "ffd", acronym: "FFD", name: "Front des forces démocratiques",
    category: "opposition", seats2021: 3, leader: "Mustapha Benali",
    color: "#5A6B2E", colorVerified: true, symbol: "Le rameau d'olivier",
    identity: "Positionné à gauche. Candidats sur l'ensemble du territoire, mise en avant de femmes et de jeunes. Ambition : atteindre le seuil du groupe parlementaire.",
    architecture: "« Contrat social fondé sur la dignité, la souveraineté et la justice distributive ». Proportionnellement à sa taille, le programme le plus chiffré de la campagne.",
    pari: "Nommer explicitement une recette fiscale nouvelle.",
    measures: {
      "Objectifs chiffrés": [
        "Croissance de 5,5 à 6 %, chômage sous 8 %",
        "1,2 million de familles sorties de la précarité, +25 % de pouvoir d'achat pour la classe moyenne",
        "Taux d'activité des femmes à 35 %, quota de 33 % femmes/jeunes",
      ],
      "Fiscalité — le point le plus distinctif": [
        "Réforme allégeant la pression sur les classes moyennes et les salariés",
        "Taxation progressive des fortunes improductives et des superprofits",
      ],
      "Autres": [
        "« Revenu de dignité » (proposition récurrente du parti)",
        "Préscolaire dès 3 ans, objectif d'entrée du Maroc dans le top 50 PISA/TIMSS",
      ],
    },
    strengths: "Le seul parti à nommer une source de financement nouvelle et identifiable (taxation des fortunes improductives/superprofits). L'objectif PISA/TIMSS porte sur les apprentissages réels, pas sur des taux de scolarisation.",
    weaknesses: "Croissance de 5,5-6 % supérieure à toutes les prévisions officielles, sans mécanisme. Rendement de la taxation non chiffré. « Revenu de dignité » ni chiffré ni articulé à l'ASD existante. Part de 3 sièges : probabilité de mise en œuvre faible.",
    scores: { diagnostic: 2, chiffrage: 3, financement: 2, execution: 1, alignement: 2, arbitrages: 3 },
    structure: "L'État redistributeur, financé par la fiscalité du capital improductif. Cohérence interne forte, puissance politique faible.",
  },
  {
    id: "gauche", acronym: "PSU-FGD", name: "Alliance de la gauche (PSU + FGD)",
    category: "gauche", seats2021: 1, leader: "Jamal El Asri (PSU), Abdessalam El Aziz (FGD)",
    color: "#C79A1E", colorVerified: true, symbol: "La bougie (PSU)",
    identity: "Alliance conclue en mai 2026 : candidatures communes et programme commun (listes communes sur 63 des 92 circonscriptions locales). Candidatures notables : Nabila Mounib, Houssine El Yamani. Changement notable par rapport à 2021, où la gauche démocratique concourait séparément.",
    architecture: "Six familles de politiques : développement humain, justice sociale, droits et libertés, institutions, transition verte, politique étrangère.",
    pari: "Le problème est la répartition du pouvoir, pas seulement les politiques publiques.",
    measures: {
      "Institutions — le cœur du projet": [
        "Réforme constitutionnelle vers une monarchie parlementaire",
        "Séparation plus nette des pouvoirs, indépendance du pouvoir judiciaire, Parlement renforcé",
        "Régionalisation plus effective, lutte contre la corruption et les conflits d'intérêts",
      ],
      "Économie": [
        "Rupture avec l'économie de rente et les privilèges",
        "Économie mixte : État actif + secteur privé productif",
        "Priorité aux PME créatrices d'emplois, fiscalité ciblée contre la captation de ressources par les rentes",
      ],
      "Social": [
        "Justice sociale, réduction des inégalités, lutte contre la pauvreté et l'analphabétisme",
        "Éducation et santé publiques érigées en missions nationales prioritaires",
        "Égalité renforcée entre femmes et hommes",
      ],
    },
    strengths: "La seule offre qui pose la question institutionnelle de front : le problème est la répartition du pouvoir, pas seulement l'action publique. L'unité des listes est un progrès stratégique réel par rapport à 2021.",
    weaknesses: "Très peu de chiffrage, pas de financement détaillé. La réforme constitutionnelle ne dépend pas du Parlement seul (initiative + référendum) : promesse d'identité plus que plan d'action à 5 ans. Détail sectoriel (santé, école, emploi) inférieur au PPS ou à l'USFP.",
    scores: { diagnostic: 2, chiffrage: 1, financement: 1, execution: 1, alignement: 2, arbitrages: 3 },
    structure: "L'État à refonder avant d'être réformé. Profondeur institutionnelle maximale, profondeur opérationnelle minimale.",
  },
  {
    id: "mds", acronym: "MDS", name: "Mouvement démocratique et social",
    category: "opposition", seats2021: 5, leader: "Abdessamad Archane",
    color: "#2F7A3D", colorVerified: true, symbol: "Le palmier",
    identity: "Centre droit. Présence sélective (≈60 % des circonscriptions), priorité aux femmes et aux jeunes. Recrutement de personnalités connues, dont l'ancien champion de kick-boxing Mustapha Lakhsem. Objectif annoncé : un groupe parlementaire d'au moins 20 députés (12 sièges considérés comme un succès).",
    architecture: null,
    pari: null,
    measures: {},
    strengths: null,
    weaknesses: null,
    notDocumented: "Programme non documenté publiquement à un niveau permettant l'analyse. Le MDS a surtout communiqué sur ses candidatures et ses ambitions électorales, pas sur un projet programmatique détaillé.",
    scores: { diagnostic: 0, chiffrage: 0, financement: 0, execution: 0, alignement: 0, arbitrages: 0 },
    structure: null,
  },
];

const CATEGORIES = [
  { key: "majorite", label: "Majorité sortante" },
  { key: "opposition", label: "Opposition parlementaire" },
  { key: "gauche", label: "Alliance de la gauche" },
];

const CONSENSUS_FINDINGS = [
  {
    title: "1 — Le chiffrage a progressé ; le financement, non.",
    text: "Les programmes sont beaucoup plus quantifiés qu'en 2021 (PAM : 350 MMDH ; USFP, PPS, FFD : dizaines d'indicateurs). Mais un seul parti sur onze (le FFD) nomme une ressource nouvelle et identifiable. Le PAM s'appuie sur « l'effet de la croissance » à 300 des 350 MMDH — circulaire. Le PPS empile les dépenses sans plan de recettes. <strong>Presque tous répondent à « qu'est-ce qu'on fait ? », très peu à « qui paie ? ».</strong>",
  },
  {
    title: "2 — Le « million d'emplois » est une unité de compte, pas une prévision.",
    text: "RNI, PAM et PPS promettent un million d'emplois ; d'autres 500 000. Aucun n'explique quelle activité économique produirait ces emplois, ni comment passer d'≈94 000 créations nettes en quatre ans à 200 000/an. Le RNI promettait déjà ce million en 2021 : le principal problème de crédibilité de la campagne, tous camps confondus.",
  },
  {
    title: "3 — Une contradiction arithmétique récurrente : plus de dépenses et moins de déficit.",
    text: "Plusieurs programmes promettent à la fois une forte hausse des dépenses sociales, des baisses d'impôts, et la maîtrise du déficit/de la dette. Ces objectifs ne sont compatibles que si la croissance dépasse durablement 5 % — or le HCP anticipe 3 % en 2027. Cette tension n'est résolue dans aucun programme.",
  },
  {
    title: "4 — La retraite est le grand évitement collectif.",
    text: "Réforme échue fin 2026, blocage syndical, renvoi au prochain gouvernement, 60,3 MMDH de déficits cumulés à la CMR. Plusieurs partis promettent la revalorisation (PAM, PPS : 3 000 DH), mais <strong>aucun n'assume le volet coûteux</strong> : âge de départ, cotisations, ou taux de remplacement. C'est le déficit démocratique le plus net de ce scrutin.",
  },
  {
    title: "5 — Sur l'eau, l'énergie et le Mondial, il n'y a presque pas de désaccord.",
    text: "Tous les partis soutiennent dessalement, barrages, renouvelables et chantiers du Mondial — orientations fixées au-dessus du champ partisan. La vraie différenciation porte sur la <strong>demande</strong> : le PPS (-25 % de consommation d'eau agricole) et l'USFP (-40 % de pertes de réseaux) sont les rares exceptions.",
  },
];

const BLIND_SPOTS = [
  { title: "Le financement", text: "Un seul parti (FFD) nomme une ressource nouvelle identifiable. Les autres reposent sur la croissance, l'implicite ou le silence.", axisRef: 8 },
  { title: "Le paramétrage des retraites", text: "Plusieurs promettent la revalorisation ; aucun n'assume l'âge, les cotisations ou le taux de remplacement.", axisRef: 3 },
  { title: "Le goulot des ressources humaines", text: "On promet de recruter massivement enseignants et soignants sans dire comment on les forme, ni comment on les retient au Maroc et en zone rurale.", axisRef: 4 },
  { title: "La demande en eau", text: "Consensus sur produire plus, quasi-silence sur consommer moins — alors que l'agriculture est le premier usager.", axisRef: 6 },
  { title: "L'après-Mondial 2030", text: "Aucune doctrine sur la conversion des emplois de chantier en emplois durables.", axisRef: 12 },
  { title: "Le ralentissement de 2027", text: "Les programmes sont calibrés sur la bonne année 2026 (≈5 %), alors que le HCP anticipe 3 % dès 2027 : ils seront exécutés dans un contexte moins favorable que celui où ils ont été écrits.", axisRef: 8 },
];

const TOOLBOX_QUESTIONS = [
  { text: "Vous promettez X emplois. Dans quel secteur précisément, et pourquoi le rythme passerait de 94 000 en quatre ans à 200 000 par an ?", axisRef: 1 },
  { text: "Combien coûte votre programme, et quelle recette nouvelle le finance ? (« La croissance » n'est pas une recette : c'est un espoir.)", axisRef: 8 },
  { text: "Sur les retraites : vous augmentez l'âge, les cotisations, ou vous baissez les pensions ? Il faut au moins un des trois.", axisRef: 3 },
  { text: "La pension minimale à 3 000 DH coûte environ 54 MMDH pour la seule CNSS. Cela figure-t-il dans votre chiffrage ?", axisRef: 3 },
  { text: "Vous voulez recruter des milliers d'enseignants et de soignants : où les formez-vous, et comment les gardez-vous en zone rurale ?", axisRef: 4 },
  { text: "Sur l'eau : une mesure qui réduit la consommation, pas seulement la production ?", axisRef: 6 },
  { text: "Après le Mondial 2030, combien des emplois créés existent encore en 2032 ?", axisRef: 12 },
  { text: "Si vous n'obtenez que 15 % des sièges, quelles trois mesures de votre programme sont non négociables dans une coalition ?", axisRef: null },
];

const AXIS_GROUPS = [
  { key: "quotidien", label: "Vie quotidienne", blurb: "Ce qui pèse directement sur le budget et le quotidien des ménages." },
  { key: "avenir", label: "Avenir et compétences", blurb: "Ce qui prépare les générations qui arrivent." },
  { key: "ressources", label: "Ressources et territoire", blurb: "Ce que le pays a de rare, et comment il est réparti." },
  { key: "economie", label: "Économie et finances", blurb: "D'où vient l'argent, et où il va." },
  { key: "institutions", label: "Institutions et société", blurb: "Comment le pouvoir est exercé et contrôlé." },
  { key: "evenements", label: "Grands rendez-vous", blurb: "Ce qui engage le pays au-delà d'un mandat." },
];

const AXES = [
  {
    id: 1, title: "Emploi et insertion des jeunes", group: "quotidien",
    teaser: "Le sujet numéro un des Marocains — et le plus flou de la campagne.",
    repere: "Environ 94 000 créations nettes en quatre ans, 193 000 en 2025, chômage des 15-24 ans au-dessus de 37 %.",
    rows: [
      ["RNI", "1 million d'emplois, chômage sous 9 %, allocation de retour à l'emploi jusqu'à 12 mois"],
      ["PAM", "1 million d'emplois nets, 500 000 contrats de première expérience, 60 000 jeunes entreprises accompagnées"],
      ["PPS", "1 million d'emplois nets, NEET réduits de moitié, activité féminine à 25 %"],
      ["USFP", "Chômage sous 8 % (jeunes sous 10 %, femmes sous 15 %), 250 000 emplois industriels, 200 000 insertions/an"],
      ["FFD", "Chômage sous 8 %, activité féminine à 35 %, quota de 33 % femmes/jeunes"],
      ["PJD", "Pas de cible chiffrée ; conditionnalité des aides publiques à la création d'emplois"],
      ["MP", "Pas de cible ; chèque-formation pour chaque jeune chômeur, OFPPT réformé"],
      ["Istiqlal, UC, Alliance", "Pas de cible chiffrée publique"],
    ],
    lecture: "Les cibles les plus crédibles ne sont pas les plus élevées. L'USFP est le seul à relier son objectif à un secteur identifié (l'industrie) ; le PJD et le MP proposent des mécanismes (conditionnalité, chèque-formation) plutôt que des chiffres. Le FFD et l'USFP sont les seuls à cibler explicitement l'emploi des femmes.",
  },
  {
    id: 2, title: "Pouvoir d'achat, salaires et fiscalité des ménages", group: "quotidien",
    teaser: "Agir sur les prix ou sur les revenus : deux philosophies qui s'opposent nettement.",
    rows: [
      ["RNI", "Indexation de l'ASD sur l'inflation ; épargne abondée (0,25 DH/DH) pour l'informel ; hausse SMIG/SMAG ; crédit d'impôt 5 000 DH/enfant"],
      ["PAM", "Exonération d'IR sous 15 000 DH bruts ; électricité gratuite sous 100 DH/mois ; pension mini 3 000 DH ; aide sociale plancher 1 000 DH"],
      ["Istiqlal", "Suivi national des marges ; carte familiale ; plan classe moyenne ; hausses progressives SMIG/retraites"],
      ["MP", "Plateforme de suivi des prix et des marges ; compte fiscal social ; trêve à l'exportation"],
      ["PJD", "Contrôle des prix et de la qualité des produits de base ; lutte contre la spéculation ; réforme des marchés de gros"],
      ["PPS", "Pension mini 3 000 DH ; aide sociale mini 1 000 DH/mois"],
      ["USFP", "+20 % salaire moyen, +15 % revenu net des salariés"],
      ["FFD", "+25 % pouvoir d'achat de la classe moyenne ; fiscalité allégée pour salariés et classes moyennes"],
    ],
    lecture: "Deux philosophies s'opposent : <strong>agir sur les prix</strong> (Istiqlal, MP, PJD — peu coûteux, mais risque d'effets pervers si mal calibré) et <strong>agir sur les revenus</strong> (PAM, RNI, PPS, FFD — effet immédiat, mais coût budgétaire élevé et non chiffré). L'indexation de l'ASD sur l'inflation (RNI) est techniquement l'une des mesures les plus solides : elle protège automatiquement 12 millions de personnes.",
  },
  {
    id: 3, title: "Retraites et soutenabilité de la protection sociale", group: "quotidien",
    teaser: "L'axe le plus faible de toute la campagne : le grand évitement collectif.",
    repere: "81 % des retraités CNSS (≈680 000) sous 3 000 DH ; coût de mise à niveau ≈54 MMDH ; 60,3 MMDH de déficits cumulés à la CMR ; réforme reportée au prochain gouvernement.",
    rows: [
      ["PAM", "Pension minimale 3 000 DH (non chiffrée)"],
      ["PPS", "Pension minimale 3 000 DH, minimum social 1 000 DH"],
      ["RNI", "Revalorisation des retraites (non paramétrée)"],
      ["Istiqlal", "Hausses progressives des retraites"],
      ["MP, PJD, USFP, UC, FFD, Alliance", "Pas de position paramétrique publique détaillée"],
    ],
    lecture: "L'axe le plus faible de toute la campagne, tous partis confondus. Personne ne dit comment financer la revalorisation, et personne n'assume le volet impopulaire. <strong>C'est la question numéro un à poser à tout candidat.</strong>",
  },
  {
    id: 4, title: "Santé", group: "quotidien",
    teaser: "Des murs, des bras ou de l'organisation : trois façons de répondre à la même pénurie.",
    repere: "Budget santé de 19,7 MMDH (2021) à 42,4 MMDH (2026) ; ≈11 millions de bénéficiaires AMO Tadamon ; pénurie structurelle de personnel soignant.",
    rows: [
      ["RNI", "Groupements sanitaires territoriaux, médecin de famille, ≈5 000 agents ruraux, 1 600 structures réhabilitées, 200 nouvelles"],
      ["PAM", "4 nouveaux CHU, 1 600 centres de santé et 90 hôpitaux mis à niveau"],
      ["Istiqlal", "Gouvernance hospitalière, médecin référent, agence nationale des urgences"],
      ["USFP", "4,5 prestataires/1 000 habitants, délais d'attente divisés par deux, -20 % de dépenses des ménages"],
      ["PPS", "Doublement du personnel hospitalier, AMO pour 8,5 M d'exclus, -1/3 des dépenses des ménages"],
      ["MP", "Dossier médical numérique dès la naissance, plateforme de rendez-vous, 70 % du budget vers les régions"],
      ["FFD", "Accès gratuit pour les populations vulnérables, médecine scolaire généralisée"],
    ],
    lecture: "Trois approches : <strong>les murs</strong> (PAM), <strong>les personnes</strong> (PPS, RNI) et <strong>l'organisation</strong> (MP, Istiqlal, USFP). Le mur commun : on ne double pas le personnel soignant en cinq ans, faute de formation suffisante et face à l'émigration. Aucun programme ne traite sérieusement ce goulot.",
  },
  {
    id: 5, title: "Éducation, formation et recherche", group: "avenir",
    teaser: "L'axe où l'électeur a le plus vrai choix : continuité, rupture doctrinale, ou massification.",
    rows: [
      ["RNI", "Continuité et extension : préscolaire/pionniers généralisés en 2028, lycées en 2031, 12 → 27 universités"],
      ["PAM", "Le quotidien scolaire : préscolaire à 4 ans, 9h de rentrée, 20 min de lecture/jour, dépistages médicaux, socle garanti jusqu'à 15 ans"],
      ["PJD", "Rupture doctrinale : suppression des pionniers, école unifiée, arabe langue principale, fin du plafond d'âge de 35 ans"],
      ["PPS", "Massification : 18 000 enseignants/an, 30 000 salles en 5 ans, recherche à 1,5 % du PIB"],
      ["USFP", "Qualité mesurable : 30 élèves/classe max, recherche à 2 % du PIB, -40 % de sureffectif, 60 % d'insertion des diplômés"],
      ["Istiqlal", "Service public et langues : préscolaire gratuit, régulation des frais du privé, IA dans l'apprentissage"],
      ["MP", "Accès et statut : gratuité du supérieur, fin du plafond d'âge, chèque-formation, OFPPT régulateur"],
      ["UC", "Contenus et employabilité : refonte des curricula, compétences fondamentales, lien université-entreprise"],
      ["FFD", "Résultats internationaux : préscolaire dès 3 ans, objectif top 50 PISA/TIMSS"],
    ],
    lecture: "L'axe où les différences sont les plus réelles : <strong>continuité</strong> (RNI), <strong>opérationnelle et territoriale</strong> (PAM), <strong>réorientation doctrinale</strong> (PJD), <strong>massification des moyens</strong> (PPS). Deux propositions se distinguent par leur focus sur les apprentissages réels plutôt que la couverture : les 30 élèves/classe de l'USFP et l'objectif PISA/TIMSS du FFD.",
  },
  {
    id: 6, title: "Eau, climat et énergie", group: "ressources",
    teaser: "Consensus total sur produire plus d'eau, quasi-silence sur en consommer moins.",
    repere: "Barrages à 75,86 % en 2026 (contre 23 % en février 2024) ; dessalement de 40 à 350 M m³/an depuis 2021 ; objectif 1,4-1,7 Mrd m³ en 2030.",
    rows: [
      ["RNI", "Barrages, transferts, dessalement, eaux pluviales, irrigation localisée ; autoproduction solaire ; GNL et hydrogène vert"],
      ["PAM", "6 stations de dessalement, 400 petits barrages et retenues collinaires, extension du goutte-à-goutte"],
      ["Istiqlal", "Sécurité hydrique, contenu local énergétique, politique carbone"],
      ["PPS", "-25 % de consommation d'eau agricole, 40-50 % des besoins alimentaires produits localement"],
      ["USFP", "-40 % de pertes des réseaux, 60 % de renouvelables dans l'électricité"],
      ["MP", "Carte nationale des risques climatiques et système d'alerte précoce"],
      ["Alliance", "Transition verte intégrée : renouvelables, eau, souveraineté alimentaire, forêts, économie circulaire"],
    ],
    lecture: "Consensus quasi total sur l'offre (produire plus d'eau), divergence réelle sur la demande (en consommer moins). Le PPS est le seul à fixer un objectif de réduction de la consommation agricole, l'USFP le seul à cibler les fuites de réseau — les deux propositions les plus lourdes de conséquences, et les moins discutées.",
  },
  {
    id: 7, title: "Souveraineté économique, industrie et commerce extérieur", group: "economie",
    teaser: "Le mot le plus consensuel de la campagne — et donc le moins informatif.",
    rows: [
      ["USFP", "Contrats sectoriels (agroalimentaire, médicament, renouvelables), +40 % d'exportations industrielles"],
      ["PPS", "Industrie à 20 % du PIB, révision de certains accords de libre-échange, -1/3 d'informel"],
      ["Istiqlal", "Commande publique favorisant la production marocaine, montée en gamme, souveraineté numérique et minière"],
      ["PJD", "Souveraineté dans les secteurs stratégiques, production nationale, anti-monopoles"],
      ["PAM", "Sécurités stratégiques, 5 000 spécialistes en IA et cybersécurité"],
      ["MP", "Doublement du nombre d'entreprises exportatrices, paix fiscale"],
      ["RNI", "GNL, hydrogène vert, industrialisation dans la continuité"],
    ],
    lecture: "La « souveraineté » est le mot le plus consensuel de 2026 — et donc le moins informatif. La vraie ligne de partage : qui accepte de remettre en cause les accords commerciaux existants ? Le PPS le dit explicitement ; l'Istiqlal l'aborde via la préférence nationale dans la commande publique (plus applicable, moins risqué diplomatiquement).",
  },
  {
    id: 8, title: "Finances publiques et crédibilité budgétaire", group: "economie",
    teaser: "L'axe le plus déterminant de la campagne — et le moins traité.",
    repere: "Déficit ≈3,4 % du PIB en 2026, dette du Trésor ≈65,8 %, charge d'intérêts ≈2,2 % du PIB, croissance retombant à 3 % en 2027 (HCP).",
    rows: [
      ["PAM", "Croissance 5 %, inflation 2 %, déficit 3 % du PIB, dette 62 % en 2031 ; 350 MMDH dont 300 issus de la croissance"],
      ["FFD", "Croissance 5,5-6 % ; financement par taxation des fortunes improductives et superprofits"],
      ["USFP", "+1,5 point de croissance/an"],
      ["PPS", "Objectifs sectoriels sans cadrage budgétaire global"],
      ["RNI, Istiqlal, MP, PJD, UC, Alliance", "Pas de cadrage macro-budgétaire global publié"],
    ],
    lecture: "L'axe le plus déterminant et le moins traité. Le PAM mérite crédit pour un cadrage complet — courageux, et ce qui permet de le critiquer précisément. Le FFD mérite crédit pour avoir nommé une recette. Les autres laissent le financement implicite : à l'abri de la critique, mais privant l'électeur de l'information la plus importante.",
  },
  {
    id: 9, title: "Territoires, ruralité et régionalisation", group: "ressources",
    teaser: "La régionalisation avancée, chantier officiel depuis 2015, reste en deçà des attentes.",
    rows: [
      ["MP", "Pôles multiservices (>5 000 hab.), contrat de stabilité rurale de 5 ans, Fonds de logement rural, 70 % du budget santé aux régions"],
      ["PAM", "Réduction des disparités territoriales, transport scolaire rural généralisé, 6 sociétés régionales de distribution agricole"],
      ["FFD", "Investissement public priorisé dans les territoires défavorisés"],
      ["PPS", "Priorité rurale dans les recrutements et les 30 000 salles de classe"],
      ["RNI", "≈5 000 agents de santé ruraux supplémentaires, 200 structures en zones sous-dotées"],
      ["Istiqlal", "Réduction des écarts entre territoires"],
      ["Alliance", "Régionalisation plus effective"],
    ],
    lecture: "Le MP a l'offre la plus construite, cohérente avec son histoire. Le « contrat de stabilité rurale » attaque la cause du problème (le personnel qualifié ne reste pas en zone rurale), pas son symptôme. Seuls le MP et l'Alliance proposent de donner un contenu budgétaire réel à la régionalisation avancée.",
  },
  {
    id: 10, title: "Gouvernance, corruption et institutions", group: "institutions",
    teaser: "Des outils juridiques précis d'un côté, un changement de régime de l'autre.",
    rows: [
      ["Istiqlal", "Loi sur les conflits d'intérêts, déclarations de patrimoine élargies, Conseil de la concurrence renforcé, IS à 40 % sur les monopoles, « silence vaut accord »"],
      ["Alliance de la gauche", "Réforme constitutionnelle vers une monarchie parlementaire, séparation des pouvoirs, indépendance de la justice"],
      ["FFD", "Moralisation, reddition des comptes, numérisation de l'administration, justice de proximité"],
      ["PJD", "Réglementation anti-monopoles avec fiscalité plus élevée, conditionnalité des aides publiques"],
      ["PPS", "Moralisation de la vie publique, consolidation démocratique"],
      ["RNI, PAM, MP, UC", "Volet moins développé"],
    ],
    lecture: "Deux registres : l'Istiqlal propose des outils juridiques précis et immédiatement applicables par voie législative — l'offre la plus exécutable de cet axe. L'Alliance propose un changement de régime politique — plus profond, mais hors de portée d'une législature ordinaire.",
  },
  {
    id: 11, title: "Numérique et intelligence artificielle", group: "avenir",
    teaser: "Tout le monde en parle, personne n'en fait un projet structurant.",
    rows: [
      ["PAM", "5 000 spécialistes formés en IA et cybersécurité"],
      ["Istiqlal", "Souveraineté numérique, cybersécurité, IA dans l'apprentissage"],
      ["MP", "Dossier médical numérique dès la naissance, plateforme nationale de rendez-vous"],
      ["USFP", "Dix pôles universitaires dont l'IA, numérisation intégrale des services universitaires"],
      ["RNI", "Accompagnement numérique individualisé des élèves"],
      ["UC", "Compétences numériques et IA dans le supérieur"],
      ["FFD", "Numérisation de l'administration"],
    ],
    lecture: "Tout le monde en parle, personne n'en fait un projet structurant. L'IA est traitée comme un ornement de modernité plutôt que comme une politique publique avec un budget, une gouvernance et une cible — un angle mort collectif alors que le sujet touchera l'emploi des jeunes diplômés.",
  },
  {
    id: 12, title: "Mondial 2030 et grands événements", group: "evenements",
    teaser: "Le principal moteur d'investissement public de la législature, presque absent des programmes.",
    rows: [
      ["USFP", "Le Mondial 2030 comme levier explicite de croissance, 500 000 emplois directs et indirects"],
      ["Autres partis", "Mentions générales, sans chiffrage ni doctrine"],
    ],
    lecture: "L'événement sera le principal moteur d'investissement public de la législature, et il est presque absent des programmes comme objet de politique publique. Question posée par personne : combien des emplois créés survivront à 2031 ? Cet arbitrage — infrastructures événementielles contre capacités productives permanentes — définira largement le bilan du prochain gouvernement.",
  },
  {
    id: 13, title: "Marocains résidant à l'étranger (MRE)", group: "evenements",
    teaser: "Un des premiers équilibres de la balance des paiements, traité en second plan.",
    rows: [
      ["Plusieurs formations", "Intègrent la dimension MRE, avec des degrés d'attention très inégaux entre majorité et opposition"],
      ["Proposition notable", "Guichet d'investissement unifié à délais encadrés ; mécanisme « un dirham public pour trois dirhams investis »"],
      ["Alliance de la gauche", "Renforcement de la politique envers les MRE"],
      ["USFP", "Ne mentionne pas expressément la question parmi ses 20 engagements"],
    ],
    lecture: "Les transferts des MRE sont l'un des premiers équilibres de la balance des paiements du pays. Le sujet reste traité de façon secondaire par la plupart des programmes.",
  },
  {
    id: 14, title: "Participation des femmes et des jeunes", group: "institutions",
    teaser: "Un des plus grands freins à la croissance, traité par seulement trois partis.",
    rows: [
      ["FFD", "Quota de 33 % femmes/jeunes dans les programmes d'emploi et postes de décision ; activité féminine à 35 %"],
      ["PPS", "Taux d'activité des femmes à 25 %"],
      ["USFP", "Chômage des femmes sous 15 %"],
      ["MDS", "Priorité aux femmes et aux jeunes dans les candidatures"],
      ["Alliance de la gauche", "Égalité renforcée femmes-hommes"],
      ["Istiqlal, PAM, RNI", "Dispositifs jeunesse transversaux"],
    ],
    lecture: "Le très faible taux d'activité des femmes est l'un des plus importants freins à la croissance marocaine. Seuls trois partis (FFD, PPS, USFP) en font un objectif chiffré — disproportionné par rapport à l'enjeu économique.",
  },
];

const SOURCES = {
  programmes: [
    { party: "RNI", url: "programme.rni.ma" },
    { party: "PAM", url: "pam.ma/programme-electoral/" },
    { party: "USFP", url: "usfp.ma/fr/20engagements/" },
    { party: "PPS", url: "nz3mo.pps.ma" },
    { party: "Mouvement populaire", url: "alharaka.ma/fr/les-elections-legislatives-2026/" },
    { party: "Union constitutionnelle", url: "uc2026.org/programme-electoral" },
    { party: "FFD", url: "pffd.ma/en/programme/" },
    { party: "Alliance de la gauche (PSU + FGD)", url: "barnamaj.yassar.ma" },
    { party: "PJD", url: "pjd.ma (présentation du 7 septembre 2026)" },
    { party: "Istiqlal", url: "Programme « Watani Moustaqbali » (29 août 2026)" },
  ],
  institutionnelles: [
    "Maroc.ma — portail officiel, élections législatives 2026",
    "Elections.ma — ministère de l'Intérieur",
    "Haut-Commissariat au Plan — Budget économique prévisionnel 2026 et exploratoire 2027",
    "Ministère de l'Économie et des Finances — exécution LF 2026, programmation 2027-2029",
    "Bank Al-Maghrib — prévisions macroéconomiques",
    "Agence nationale du soutien social (ANSS) — bilan de l'aide sociale directe",
    "Ministère de l'Équipement et de l'Eau — situation des barrages, feuille de route dessalement",
  ],
  presse: [
    "Le Brief — dossier « Législatives 2026 »",
    "Médias24 — réforme des retraites, finances publiques",
    "LesEco — « Programmes partisans : la bataille des voix… et des chiffres aussi »",
    "EcoActu — analyse des programmes et bilan gouvernemental",
    "Article19 — enjeux des législatives, crédibilité des promesses",
    "Le360, H24info, Belpresse, Yabiladi, Hespress, Le Matin, Maroc Hebdo",
    "Policy Center for the New South — dessalement, barrages, autoroutes de l'eau",
  ],
};

const AVANT_PROPOS = [
  {
    title: "On ne peut pas analyser 27 programmes, parce que 27 programmes n'existent pas.",
    text: "27 partis participent au scrutin, 702 listes déposées. Seule une douzaine de formations a publié un programme suffisamment détaillé pour être analysé : RNI, PAM, Istiqlal, USFP, MP, PPS, PJD, UC, FFD, et l'Alliance de la gauche. Pour les autres, dont le MDS, les documents publics restent au stade des orientations générales.",
  },
  {
    title: "Un beau programme n'est pas une preuve de bonne gouvernance, et un programme vague n'est pas une preuve de mauvaise foi.",
    text: "Ce document évalue la qualité de l'offre écrite, pas la valeur morale des partis ni leur capacité réelle à gouverner. C'est une limite réelle de l'exercice, pas une précaution de style.",
  },
  {
    title: "Au Maroc, les partis ne décident pas de tout.",
    text: "Les grandes orientations stratégiques (protection sociale, eau, énergies renouvelables, Mondial 2030, diplomatie) sont largement fixées au niveau des Orientations royales, puis déclinées par le gouvernement. La vraie compétition programmatique se joue sur la fiscalité, le pouvoir d'achat, l'école, la santé de proximité, l'emploi, la gouvernance et la répartition de l'effort.",
  },
];

const NOTE_FINALE = "Ce document ne dit pas pour qui voter, et c'est délibéré. Il donne une grille de lecture, des chiffres de référence et des questions à poser. La campagne n'est pas finie : ce document est arrêté au 12 septembre 2026. Aucun programme ne sera appliqué tel quel — le prochain gouvernement sera une coalition, et son programme un compromis négocié. Les points de <strong>convergence</strong> entre programmes sont donc au moins aussi prédictifs que leurs points de différenciation.";
