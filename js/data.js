/* ===================================================================
   Contenu du site — VERSION FRANÇAISE
   Mise à jour : 14 septembre 2026
   Toutes les constantes portent le suffixe _FR ; leur équivalent arabe
   porte le suffixe _AR dans js/data.ar.js (même ordre, même structure).
   =================================================================== */

const DOC_DATE_FR = "14 septembre 2026";
const ELECTION_DATE_ISO_FR = "2026-09-23";
const CONTACT_EMAIL_FR = "hamzaouhaki@gmail.com";

/* Bandeau « Nouveautés de cette mise à jour » (page d'accueil) */
const UPDATES_FR = {
  title: "Nouveautés de cette mise à jour",
  date: "14 septembre 2026",
  items: [
    {
      party: "PPS",
      title: "Le programme le plus chiffré de la campagne",
      body: "Présenté le 2 septembre à Rabat sous le slogan « Osons ensemble ! » : près de 200 pages, 4 axes, 24 chapitres, 220 engagements, 996 mesures. Et un compte complet : 575 MMDH de dépenses supplémentaires face à 622 MMDH de recettes, soit un excédent cumulé annoncé de 47 MMDH. La note du parti sur le critère « financement » a été relevée en conséquence.",
    },
    {
      party: "MP",
      title: "Le « Contrat haraki 2026 »",
      body: "Présenté sous le slogan « Ja lwaqt » (« Le moment est venu »), il complète le contrat social de mai. Nouveauté : la suppression de l'« indice de ciblage » pour certaines catégories de bénéficiaires des aides publiques.",
    },
    {
      party: "UC",
      title: "Programme présenté le 7 septembre à Casablanca",
      body: "Sous le slogan « Pour un Maroc à une seule vitesse », centré sur le soutien à la famille et à la classe moyenne.",
    },
    {
      party: "Correction",
      title: "UC et MDS reclassés dans la majorité",
      body: "Les deux formations avaient officiellement rejoint la majorité gouvernementale en abandonnant leur position de soutien critique. Elles étaient classées dans l'opposition dans la version précédente.",
    },
  ],
};

const CONTEXT_FR = {
  summary: "La croissance de 2026 est bonne mais essentiellement agricole. Elle retombera à 3 % en 2027. Le pays crée peu d'emplois nets. L'État social coûte de plus en plus cher. La réforme des retraites a été reportée au prochain gouvernement. Voilà le décor dans lequel toutes les promesses devront s'exécuter.",
  scrutin: [
    { label: "Date", value: "Mercredi 23 septembre 2026" },
    { label: "Enjeu", value: "395 sièges (305 locaux, 90 régionaux), mandat de cinq ans" },
    { label: "Inscrits", value: "15 801 162 (au 10 juillet 2026)" },
    { label: "Partis", value: "27, avec 702 listes déposées" },
    { label: "Campagne", value: "Du 10 au 22 septembre à minuit ; radios et télévisions sous régime électoral spécial du 15 août au 22 septembre" },
    { label: "Observation", value: "3 006 observateurs accrédités" },
    { label: "Financement", value: "Plafond de 600 000 DH par liste, aide publique de 400 MDH, comptes examinés par la Cour des comptes" },
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
  jeunesse: "Seulement 12 % des 18-24 ans sont inscrits (474 000 sur 3,89 millions). Les plus de 60 ans représentent 29 % du corps électoral. Les programmes parlent beaucoup de la jeunesse — mais c'est un électorat nettement plus âgé qui les jugera. Cela explique la place prise par les retraites et le pouvoir d'achat.",
  economie: [
    { label: "Croissance 2026", value: "4,8 % (HCP) à 5,3 % (gouvernement) · 5,2 % Bank Al-Maghrib · 4,1 à 4,7 % Banque mondiale" },
    { label: "Croissance 2027", value: "Ralentissement à 3 % selon le HCP" },
    { label: "Inflation", value: "0,5 % sur les 5 premiers mois de 2026, après 0,8 % en 2025 · prévision 1,5 % puis 2 %" },
    { label: "Chômage", value: "13 % au sens large en 2025 · 10,8 % au sens strict au 1er semestre 2026, soit ≈ 1,25 million de personnes" },
    { label: "Déficit budgétaire", value: "≈ 3,4 % du PIB en 2026, 3,2 % en 2027" },
    { label: "Dette du Trésor", value: "≈ 65,8 % du PIB en 2026" },
    { label: "Charge d'intérêts", value: "≈ 2,2 % du PIB — de l'argent qui part avant toute dépense utile" },
  ],
  economieNuances: [
    "La croissance de 2026 est portée par une campagne agricole exceptionnelle, elle-même liée à des pluies exceptionnelles. Ce n'est pas une transformation structurelle. Sur la durée longue, la croissance marocaine est modeste : de 4,7 % en moyenne sur 2000-2011 à 2,8 % sur 2012-2024, avec un pouvoir d'achat qui n'a progressé que de 1,6 % par an sur la seconde période. C'est le vrai problème de fond — et aucun programme ne l'inverse en un mandat.",
  ],
  emploi: {
    intro: "Le gouvernement revendique 193 000 créations nettes en 2025, qui ont ramené le chômage large à 13 %. C'est réel. Mais sur l'ensemble du mandat, le solde net cumulé sur quatre ans est estimé à environ 94 000 emplois : les créations ont été largement annulées par des destructions, notamment agricoles pendant la sécheresse. Par ailleurs, le chômage des 15-24 ans dépasse 37 %, et le nombre de chômeurs approche 1,6 million selon les chiffres repris par le PJD.",
    calloutTitle: "Pourquoi ce chiffre compte",
    central: "Plusieurs partis promettent un million d'emplois. Cela veut dire 200 000 par an. Passer de 94 000 en quatre ans à 200 000 par an, c'est multiplier le rythme par plus de huit. Aucun programme n'explique quelle activité économique produirait ce saut. C'est le point aveugle le plus documenté de cette campagne.",
  },
  social: [
    { label: "Aide sociale directe", value: "≈ 3,9 millions de ménages, plus de 12 millions de personnes (dont 5,5 millions d'enfants et 1,7 million de plus de 60 ans). 500 à 1 350 DH/mois. Budget porté à 29 MMDH à partir de 2026, soit près de 2 % du PIB. Total versé depuis décembre 2023 : ≈ 52 MMDH." },
    { label: "AMO", value: "≈ 11 millions de bénéficiaires enregistrés (AMO Tadamon), plus de 418 000 (AMO Achamil)." },
    { label: "Budget santé", value: "De 19,7 MMDH en 2021 à 42,4 MMDH en 2026 (+115 %)." },
    { label: "Salaires", value: "SMAG relevé de 25 % à 2 533,44 DH nets/mois au 1er avril 2026 · réforme de l'IR à 7,6 MMDH, plus de 400 DH mensuels gagnés par certaines catégories · seuil d'accès à la pension CNSS abaissé de 3 240 à 1 320 jours de cotisation, avec effet rétroactif." },
  ],
  retraites: {
    situation: "La loi-cadre sur la protection sociale fixait l'échéance à fin 2026. Elle ne sera pas tenue. Un projet a été présenté le 12 mai 2026 : âge légal porté de 60 à 63 ans par paliers, revalorisation des pensions de 8 % sur trois ans à partir de 2027, réorganisation en deux pôles (public : CMR + RCAR · privé : CNSS + CIMR). Mais le blocage est autant politique que technique : le gouvernement pousse une réforme paramétrique, les syndicats la refusent et réclament d'abord une revalorisation. Le dossier passe à la prochaine législature.",
    chiffres: [
      "CMR-RPC : 60,3 MMDH de déficits cumulés depuis 2014, dont plus de la moitié sur les cinq dernières années. Réserves tombées à 57,4 MMDH (-7,1 % en un an).",
      "CNSS : 81 % des retraités — ≈ 680 000 personnes — perçoivent moins de 3 000 DH. Les porter tous à 3 000 DH représenterait environ 54 MMDH.",
    ],
    enjeu: "Plusieurs partis promettent cette pension minimale de 3 000 DH. C'est la promesse la plus coûteuse de la campagne — et précisément le dossier que le gouvernement sortant n'a pas réussi à trancher.",
  },
  eau: [
    { label: "Barrages", value: "Remplis à 75,86 % en 2026, contre 23 % en février 2024 — environ 16,3 milliards de m³" },
    { label: "Capacité", value: "156 grands barrages, 20,8 milliards de m³ · 12 grands barrages en travaux · 155 petits ouvrages programmés d'ici 2027" },
    { label: "Dessalement", value: "De 40 millions de m³ en 2021 à 350 millions de m³/an aujourd'hui, 17 stations · objectif 1,4 à 1,7 milliard de m³ en 2030" },
    { label: "Eaux usées réutilisées", value: "52 millions de m³/an fin 2025 · objectif 100 millions en 2027, 350 millions en 2035" },
  ],
  eauNote: "L'amélioration de 2026 est météorologique, pas structurelle. Nappes surexploitées, envasement des barrages, agriculture très consommatrice d'eau : rien de tout cela n'a disparu. Un programme qui promet « plus de barrages » sans parler de la demande agricole passe à côté du sujet.",
  defis: [
    "Créer de l'emploi à un rythme jamais atteint, surtout pour les jeunes et les femmes",
    "Trancher la réforme des retraites — impopulaire, inévitable, reportée depuis douze ans",
    "Financer l'État social déjà promis, dans une année 2027 à 3 % de croissance",
    "Faire progresser la qualité de l'école, pas seulement ses effectifs",
    "Passer du répit hydrique à une vraie gestion de la demande en eau",
    "Transformer les chantiers du Mondial 2030 en emplois durables",
    "Réduire l'informel et les écarts entre territoires",
    "Restaurer la confiance politique : 12 % d'inscription chez les 18-24 ans est un signal d'alerte",
  ],
};

const CRITERIA_FR = [
  { key: "diagnostic", label: "Diagnostic", question: "Le programme part-il d'un constat chiffré et vérifiable ?" },
  { key: "chiffrage", label: "Chiffrage", question: "Les objectifs sont-ils quantifiés — combien, quel taux, quelle date ?" },
  { key: "financement", label: "Financement", question: "Le programme dit-il qui paie et avec quel argent ?" },
  { key: "execution", label: "Exécution", question: "Y a-t-il un mécanisme, une loi, une institution, un calendrier — ou seulement une intention ?" },
  { key: "alignement", label: "Alignement stratégique", question: "Le programme s'articule-t-il aux grands chantiers nationaux en cours ?" },
  { key: "arbitrages", label: "Arbitrages difficiles", question: "Le programme aborde-t-il les sujets qui fâchent — retraites, fiscalité, informel, subventions ?" },
];

const SOLIDITY_READING_NOTE_FR = "Ce tableau ne dit pas quel parti est « le meilleur ». Il dit où chaque offre est solide et où elle est fragile. Un parti fort en exécution mais faible en financement sait comment faire, pas avec quel argent. Un parti fort en arbitrages accepte de dire ce qui sera difficile ou impopulaire.";

const NATIONAL_STRATEGIES_FR = [
  { name: "Nouveau Modèle de Développement", content: "Objectifs 2035 : doubler le PIB par habitant, élargir la classe moyenne, renforcer le capital humain" },
  { name: "Protection sociale (loi-cadre 09-21)", content: "AMO généralisée, allocations familiales, retraite élargie, indemnité pour perte d'emploi. Réforme des retraites échue fin 2026" },
  { name: "Santé", content: "Groupements sanitaires territoriaux, nouveaux CHU, Plan Santé mentale 2030 (4 MMDH, 6,5 millions de personnes concernées)" },
  { name: "Éducation", content: "Feuille de route 2022-2026, écoles pionnières (≈ 80 % du primaire à la rentrée 2026-2027), préscolaire (≈ 80 % de couverture)" },
  { name: "Eau", content: "PNAEPI 2020-2027, feuille de route dessalement (1,4 à 1,7 milliard de m³/an en 2030), autoroutes de l'eau, réutilisation des eaux usées" },
  { name: "Énergie et climat", content: "Plus de 50 % de capacité électrique renouvelable en 2030, Offre Maroc hydrogène vert" },
  { name: "Agriculture", content: "Génération Green 2020-2030" },
  { name: "Numérique", content: "Maroc Digital 2030, souveraineté numérique, IA" },
  { name: "Investissement", content: "Charte de l'investissement 2022, réforme des établissements publics" },
  { name: "Territoires", content: "Régionalisation avancée, déconcentration administrative" },
  { name: "Grands événements", content: "CAN 2025 et Coupe du monde 2030" },
];

const PARTIES_FR = [
  {
    id: "rni", acronym: "RNI", name: "Rassemblement national des indépendants",
    category: "majorite", seats2021: 102, leader: "Mohamed Chaouki (orthographié aussi Chouki)",
    color: "#1D6FB8", colorVerified: true, symbol: "La colombe",
    programDate: "Dévoilé par volets successifs",
    programUrl: "https://programme.rni.ma/",
    summary: "Premier parti sortant. Fait campagne sur la continuité. Programme très opérationnel, très bien articulé à l'administration — mais sans chiffrage financier, et avec un objectif emploi déjà promis en 2021.",
    identity: [
      "102 sièges en 2021, a dirigé le gouvernement sortant",
      "Mohamed Chaouki a succédé à Aziz Akhannouch en février 2026, sans rupture de ligne",
      "Première liste de 89 candidats le 5 juin, avec un renouvellement revendiqué de plus de 36 %",
      "Troisième volet du programme, sur « l'intégration économique », présenté à Marrakech",
    ],
    architecture: "3 priorités, 12 mesures — pouvoir d'achat, services publics, emploi",
    measures: {
      "Pouvoir d'achat": [
        "Indexation automatique des aides sociales directes sur l'inflation",
        "Compte d'épargne simplifié pour les travailleurs de l'informel, avec 0,25 DH versé par l'État pour chaque dirham épargné",
        "Hausse du SMIG et du SMAG, revalorisation des retraites",
        "Crédit d'impôt jusqu'à 5 000 DH par enfant et par an pour les frais de scolarité",
      ],
      "Eau et énergie": [
        "Barrages, transferts, dessalement, récupération des eaux pluviales, irrigation localisée",
        "Autoproduction solaire sans apport initial des ménages",
        "Développement du GNL et de l'hydrogène vert",
      ],
      "École et supérieur": [
        "Préscolaire généralisé d'ici 2028",
        "Écoles et collèges pionniers généralisés d'ici 2028, lycées d'ici 2031",
        "Décrochage réduit d'au moins la moitié",
        "Transport et cantines scolaires renforcés, accompagnement numérique individualisé",
        "De 12 à 27 universités, achèvement des 12 Cités des métiers et des compétences",
      ],
      "Santé": [
        "Groupements sanitaires territoriaux et médecin de famille",
        "≈ 5 000 agents supplémentaires en milieu rural",
        "1 600 structures de soins primaires réhabilitées, 200 nouvelles en zones sous-dotées",
      ],
      "Emploi": [
        "Un million d'emplois, chômage sous 9 %",
        "Allocation de retour à l'emploi jusqu'à douze mois",
        "Insertion des jeunes, protection des saisonniers, indemnisation des chômeurs, encadrement des contrats courts",
      ],
    },
    strengths: "C'est le programme le mieux branché sur l'appareil administratif existant. Les dispositifs cités sont déjà en place ; les généraliser est plus crédible que créer de zéro. Le crédit d'impôt scolarité et l'épargne abondée pour l'informel sont des mécanismes précis, pas des slogans. L'indexation de l'aide sociale sur l'inflation protège automatiquement 12 millions de personnes.",
    weaknesses: [
      "Le million d'emplois avait déjà été promis en 2021, pour un solde net réalisé d'environ 94 000 en quatre ans. Le programme ne dit pas ce qui change. Le président du parti a lui-même appelé à distinguer programmes réalistes et slogans — l'avertissement vaut pour sa propre formation.",
      "Aucun chiffrage global. Passer de 12 à 27 universités, ajouter 5 000 agents de santé, indexer l'aide sociale : le prix n'est pas affiché.",
      "Silence sur le paramétrage des retraites : le parti promet une revalorisation, pas une réforme.",
    ],
    scores: { diagnostic: 2, chiffrage: 3, financement: 1, execution: 3, alignement: 3, arbitrages: 1 },
    structure: "L'État comme machine à généraliser. Profondeur administrative élevée, profondeur doctrinale faible.",
  },
  {
    id: "pam", acronym: "PAM", name: "Parti authenticité et modernité",
    category: "majorite", seats2021: 87, leader: "Direction collégiale : Fatima Ezzahra El Mansouri, Mehdi Bensaïd, Fatima Saadi",
    color: "#1F2E7A", colorVerified: true, symbol: "Le tracteur",
    slogan: "Pour changer de cap",
    programDate: "1er septembre 2026",
    programUrl: "https://pam.ma/programme-electoral/",
    summary: "Le programme le plus détaillé de la campagne, et le seul de la majorité à afficher un coût global. Descend jusqu'au quotidien concret. Mais son financement repose presque entièrement sur une croissance qu'aucune institution ne prévoit.",
    identity: [
      "87 sièges en 2021, deuxième force, membre de la majorité",
      "Direction collégiale depuis 2024",
      "Ralliements médiatisés en précampagne, dont celui de Fouzi Lekjaa",
      "Le parti présente son programme comme un « contrat » moral, simplifié pour être compris de tous, sur lequel il accepte d'être tenu responsable",
    ],
    architecture: "5 pactes, 20 engagements, 350 MMDH sur 2027-2031 (≈ 70 MMDH par an)",
    measures: {
      "Pacte 1 — Pouvoir d'achat (≈ 150 MMDH)": [
        "Réorganisation des circuits de distribution, six sociétés régionales de distribution agricole, marchés de gros modernisés, unités publiques de conservation frigorifique dans plusieurs ports de pêche",
        "Électricité gratuite pour les factures inférieures à 100 DH/mois",
        "Exonération d'impôt sur le revenu pour les salaires bruts inférieurs à 15 000 DH",
        "Pension minimale de 3 000 DH",
        "Plancher de 1 000 DH pour l'aide sociale directe",
      ],
      "Pacte 2 — Insertion des jeunes (≈ 50 MMDH)": [
        "Parcours national pour les jeunes sans emploi, formation ni études",
        "500 000 contrats de première expérience en cinq ans",
        "60 000 jeunes entreprises accompagnées",
        "100 000 solutions de logement pour les jeunes",
      ],
      "Pacte 3 — Citoyenneté (≈ 100 MMDH)": [
        "4 nouveaux CHU, 1 600 centres de santé et 90 hôpitaux mis à niveau",
        "Préscolaire généralisé dès 4 ans, transport scolaire rural",
        "500 000 familles logées décemment",
        "L'école au quotidien : cours à 9h, 20 minutes de lecture par jour, socle d'apprentissages garanti jusqu'à 15 ans, 3h d'EPS par semaine, dépistages auditifs et visuels systématiques",
        "Supérieur en trois ensembles : pôle d'excellence international, pôle technique et professionnel territorial, passerelles entre les deux",
      ],
      "Pacte 4 — Sécurités stratégiques (≈ 50 MMDH)": [
        "6 stations de dessalement, 400 petits barrages et retenues collinaires, extension du goutte-à-goutte",
        "5 000 spécialistes formés en IA et cybersécurité",
      ],
      "Pacte 5 — Croissance et durabilité": [
        "Croissance 5 %, inflation 2 %, déficit 3 % du PIB, dette 62 % du PIB en 2031",
        "Un million d'emplois nets",
        "Financement : 300 des 350 MMDH attendus de l'effet de la croissance",
      ],
    },
    strengths: "Le programme le plus complet et le plus lisible. Il descend au concret (heure de rentrée, dépistage auditif, facture d'électricité), ce qui est rare. Il ose publier un coût global et des cibles macroéconomiques précises. Cette transparence le rend vérifiable — elle mérite d'être saluée.",
    weaknesses: [
      "Le financement est circulaire : 300 des 350 MMDH viennent de « l'effet de la croissance », laquelle est censée être produite en partie par le programme lui-même. Or la Banque mondiale table sur 4,1 à 4,7 % et le HCP sur 3 % en 2027. Si la croissance déçoit, la quasi-totalité du financement disparaît.",
      "La pension minimale à 3 000 DH n'est pas chiffrée dans le programme (≈ 54 MMDH pour la seule CNSS). Est-elle incluse dans les 350 MMDH ? Le programme ne le dit pas.",
      "L'exonération d'IR sous 15 000 DH bruts couvre une très large part des salariés déclarés : une perte de recettes majeure, non chiffrée, au moment même où le parti vise 3 % de déficit et 62 % de dette.",
      "Un million d'emplois nets : même objection que pour le RNI.",
    ],
    scores: { diagnostic: 2, chiffrage: 3, financement: 2, execution: 3, alignement: 3, arbitrages: 2 },
    structure: "L'État gestionnaire du quotidien. Très opérationnel, faible sur la question du pouvoir.",
  },
  {
    id: "istiqlal", acronym: "PI", name: "Parti de l'Istiqlal",
    category: "majorite", seats2021: 81, leader: "Nizar Baraka",
    color: "#A81F5C", colorVerified: true, symbol: "La balance",
    slogan: "Watani Moustaqbali (Ma patrie, mon futur)",
    programDate: "29 août 2026",
    summary: "Le programme le plus solide sur la gouvernance économique — lois, agences, conflits d'intérêts, concurrence. Mais aucun objectif chiffré sur l'emploi, et aucun chiffrage financier.",
    identity: [
      "81 sièges en 2021, membre de la majorité",
      "Ambition assumée de diriger le prochain gouvernement",
    ],
    architecture: "5 engagements + un volet transversal jeunesse",
    measures: {
      "Engagement 1 — Cohésion familiale et valeurs": [
        "École, médias publics, culture et cinéma mobilisés pour un récit national, programmes en arabe et en amazighe",
        "Protection des jeunes face à certains risques des réseaux sociaux",
        "Aide jusqu'à 5 000 DH aux jeunes en instance de mariage",
        "Médiation familiale, crèches sociales, prise en charge des personnes âgées et handicapées",
      ],
      "Engagement 2 — Corruption, rente et conflits d'intérêts": [
        "Loi spécifique sur les conflits d'intérêts, déclarations de patrimoine élargies, lutte contre l'enrichissement illicite",
        "Conseil de la concurrence renforcé",
        "Impôt sur les sociétés à 40 % en situation de monopole",
        "Autorisations remplacées par des cahiers des charges, « le silence de l'administration vaut accord »",
      ],
      "Engagement 3 — Pouvoir d'achat": [
        "Suivi national des marges commerciales",
        "Hausses progressives du salaire minimum et des retraites",
        "Carte familiale contre la pauvreté, plan classe moyenne, accès au premier logement",
      ],
      "Engagement 4 — Services publics": [
        "Préscolaire gratuit, lutte contre le décrochage, formation des enseignants, numérique et IA dans l'apprentissage",
        "Régulation des frais de scolarité du privé",
        "Unités d'accompagnement social pour le lien école-famille",
        "Santé : gouvernance hospitalière, médecin référent, agence nationale des urgences",
      ],
      "Engagement 5 — Souveraineté stratégique": [
        "Sécurité hydrique, contenu local énergétique, politique carbone",
        "Commande publique favorisant la production marocaine",
        "Montée en gamme industrielle, souveraineté numérique, cybersécurité, ressources minières",
      ],
    },
    strengths: "L'offre la plus aboutie en matière de gouvernance. Loi sur les conflits d'intérêts, IS à 40 % sur les monopoles, « silence vaut accord », régulation des frais du privé : ce sont des mesures institutionnelles précises, adoptables par voie législative et vérifiables. Plus faciles à contrôler, en réalité, qu'un objectif chiffré d'emplois.",
    weaknesses: [
      "Aucun objectif d'emploi quantifié, sur le sujet numéro un des Marocains.",
      "Aucun chiffrage global.",
      "Tension non traitée : le parti était au gouvernement, son secrétaire général ministre de l'Équipement et de l'Eau. Faire campagne contre la rente tout en revendiquant le bilan crée une ambiguïté que le programme n'aborde pas.",
      "L'aide de 5 000 DH au mariage est très visible politiquement, mais ponctuelle dans ses effets.",
      "Silence, là aussi, sur le paramétrage des retraites.",
    ],
    scores: { diagnostic: 2, chiffrage: 1, financement: 1, execution: 3, alignement: 3, arbitrages: 2 },
    structure: "L'État régulateur et arbitre. Profondeur institutionnelle élevée, faible sur les résultats quantifiés.",
  },
  {
    id: "uc", acronym: "UC", name: "Union constitutionnelle",
    category: "majorite", seats2021: 18, leader: "Mohamed Joudar (orthographié aussi Goudar)",
    color: "#C87F0A", colorVerified: true, symbol: "Le cheval",
    slogan: "Pour un Maroc à une seule vitesse",
    programDate: "7 septembre 2026, Casablanca",
    programUrl: "https://uc2026.org/programme-electoral",
    summary: "Programme présenté tardivement, centré sur la famille, la classe moyenne et l'employabilité. Peu chiffré. Un glissement doctrinal — d'un libéralisme historique vers l'État social — que le programme n'explique pas.",
    identity: [
      "18 sièges en 2021, parti libéral fondé en 1983",
      "A rejoint la majorité gouvernementale en cours de législature",
    ],
    architecture: "Orientations autour de la famille, la classe moyenne et l'employabilité",
    measures: {
      "Économie et social": [
        "Soutien à la famille et à la classe moyenne comme fil conducteur",
        "L'emploi présenté comme l'axe clé : rendre la croissance davantage créatrice d'emplois, notamment pour les jeunes, renforcer la compétitivité du tissu national",
        "Pouvoir d'achat, lutte contre la vie chère, généralisation de la protection sociale",
        "Réduction des écarts entre territoires, investissement local, soutien à l'agriculture, l'industrie, le tourisme et les services",
      ],
      "École et formation": [
        "Refonte des programmes autour des compétences fondamentales, des langues et du numérique",
        "Éducation à la citoyenneté et à l'initiative",
        "Préscolaire de qualité généralisé, conditions de travail des enseignants, mise à niveau des infrastructures, gouvernance des établissements",
        "Orientation scolaire et professionnelle, adaptation des filières, apprentissage tout au long de la vie",
      ],
      "Supérieur et politique": [
        "Actualisation des formations, recherche, partenariats université-entreprise, innovation, compétences numériques et IA",
        "Renouvellement des élites et intégration des jeunes compétences en politique",
      ],
    },
    strengths: "L'UC parle du contenu de l'école — compétences fondamentales, langues, numérique, citoyenneté — et non seulement de ses moyens, et articule explicitement école, formation professionnelle et marché du travail. L'accent sur la gouvernance des établissements est pertinent.",
    weaknesses: [
      "Quasi-absence de chiffrage : pas de cible d'emploi, de croissance ni de budget.",
      "Un glissement doctrinal non expliqué : le parti revendique historiquement un positionnement libéral, mais sa campagne met surtout en avant les composantes de l'État social. Ce n'est pas illégitime — mais l'électeur aurait besoin de comprendre comment les deux se concilient.",
      "Niveau de détail nettement inférieur à celui du PAM, du RNI, du PPS ou de l'USFP.",
    ],
    scores: { diagnostic: 1, chiffrage: 1, financement: 1, execution: 1, alignement: 2, arbitrages: 1 },
    structure: "Continuité, peu doctrinal, faiblement documenté.",
  },
  {
    id: "mds", acronym: "MDS", name: "Mouvement démocratique et social",
    category: "majorite", seats2021: 5, leader: "Abdessamad Archane",
    color: "#2F7A3D", colorVerified: true, symbol: "Le palmier",
    summary: "Pas de programme public analysable. Le parti a surtout communiqué sur ses candidatures.",
    identity: [
      "5 sièges en 2021, centre droit",
      "A rejoint la majorité gouvernementale en cours de législature",
      "Candidats dans environ 60 % des circonscriptions, priorité affichée aux femmes et aux jeunes",
      "Recrutement de personnalités connues, dont l'ancien champion de kick-boxing Mustapha Lakhsem",
      "Objectif annoncé : un groupe parlementaire d'au moins 20 députés ; 12 sièges seraient déjà un succès",
    ],
    architecture: "Non documenté publiquement",
    measures: {
    },
    strengths: null,
    weaknesses: [
    ],
    notDocumented: "Programme non documenté publiquement à un niveau permettant l'analyse. Nous préférons le dire plutôt que d'inventer son contenu — ce qui serait la pire forme de partialité.",
    scores: null,
    structure: null,
  },
  {
    id: "usfp", acronym: "USFP", name: "Union socialiste des forces populaires",
    category: "opposition", seats2021: 34, leader: "Driss Lachgar",
    color: "#C21F1F", colorVerified: true, symbol: "La rose",
    slogan: "Le développement équitable",
    programDate: "27 août 2026, Rabat",
    programUrl: "https://www.usfp.ma/fr/20engagements/",
    summary: "La meilleure logique économique de la campagne : une chaîne claire entre politique industrielle, emplois et revenus. Des indicateurs de qualité rares et utiles. Mais pas de plan de financement.",
    identity: [
      "34 sièges en 2021, principale force d'opposition",
      "Présenté par le parti comme un contrat évaluable, pas un inventaire de promesses",
    ],
    architecture: "20 engagements",
    measures: {
      "Industrie et souveraineté productive": [
        "Contrats sectoriels sur trois filières prioritaires : agroalimentaire, médicament, énergies renouvelables",
        "250 000 emplois industriels",
        "+40 % d'exportations à contenu technologique élevé",
        "+1,5 point de croissance par an",
      ],
      "Emploi": [
        "Chômage sous 8 %, sous 10 % pour les jeunes, sous 15 % pour les femmes",
        "200 000 insertions par an, 50 000 entreprises accompagnées en cinq ans",
        "Mondial 2030 comme levier : 500 000 emplois directs et indirects",
      ],
      "Classes moyennes et entreprises": [
        "+20 % du salaire moyen, +15 % du revenu net des salariés",
        "-20 % de dépenses de santé des ménages, 250 000 familles aidées à acquérir un logement",
        "30 % des marchés publics réservés aux TPME, 100 000 entreprises soutenues",
        "Création d'un établissement financier public dédié au financement des TPME",
      ],
      "Protection sociale et santé": [
        "Couverture universelle, pauvreté multidimensionnelle réduite de moitié",
        "20 % des bénéficiaires de l'aide sociale insérés dans le marché du travail",
        "4,5 prestataires de soins pour 1 000 habitants, délais d'attente divisés par deux, CHU achevés",
      ],
      "École et recherche": [
        "Maximum 30 élèves par classe, déperdition scolaire -50 %, préscolaire à 100 %",
        "Recherche à 2 % du PIB",
        "-40 % de sureffectif dans les filières à accès ouvert, 60 % d'insertion des diplômés",
        "10 pôles universitaires (IA, renouvelables, biotechnologies), numérisation intégrale des services universitaires",
      ],
      "Eau et énergie": [
        "-40 % de pertes des réseaux",
        "60 % de renouvelables dans la production électrique",
      ],
    },
    strengths: "Le programme relie une cause à un effet : politique industrielle → emplois industriels → croissance → revenus. Les 30 élèves par classe et les 4,5 prestataires pour 1 000 habitants sont des indicateurs de qualité, pas de volume — une différence rare et importante. Les 30 % de marchés publics réservés aux TPME sont un levier réel, déjà éprouvé ailleurs.",
    weaknesses: [
      "+20 % du salaire moyen n'est pas un levier d'État. Le gouvernement fixe le SMIG et les salaires publics, pas le salaire moyen. Le mécanisme manque.",
      "La recherche à 2 % du PIB suppose des chercheurs, des laboratoires et des structures — pas seulement un budget. Le programme ne dit pas comment on absorbe un tel saut en cinq ans.",
      "Pas de chiffrage global ni de plan de financement.",
      "Le pari sur le Mondial 2030 pose la question que personne ne tranche : combien de ces 500 000 emplois survivront à 2031 ?",
    ],
    scores: { diagnostic: 3, chiffrage: 3, financement: 1, execution: 2, alignement: 3, arbitrages: 2 },
    structure: "L'État stratège industriel. Chaîne causale explicite.",
  },
  {
    id: "pps", acronym: "PPS", name: "Parti du progrès et du socialisme",
    category: "opposition", seats2021: 22, leader: "Nabil Benabdallah",
    color: "#0A6FA3", colorVerified: true, symbol: "Le livre",
    slogan: "Osons ensemble !",
    programDate: "2 septembre 2026, Rabat",
    programUrl: "https://nz3mo.pps.ma/",
    updated: true,
    summary: "Le programme le plus chiffré de toute la campagne, et le seul à publier un compte complet dépenses/recettes. C'est aussi le seul à proposer un impôt de solidarité sur la fortune — une première dans le débat politique marocain. Sa fragilité tient à une hypothèse de recettes contestable.",
    identity: [
      "22 sièges en 2021, dans l'opposition",
      "Sous le signe de « l'alternative démocratique et progressiste », pour la mandature 2026-2031",
      "Élaboré depuis novembre avec une quinzaine de structures externes : syndicats, associations féminines, acteurs de la transition écologique, représentants des personnes en situation de handicap, collectifs de Marocains du monde",
    ],
    architecture: "≈ 200 pages, 4 axes, 24 chapitres, 220 engagements, 996 mesures",
    budget: {
      title: "Le compte du programme",
      rows: [
        { label: "Dépenses supplémentaires sur 5 ans", value: "575 MMDH" },
        { label: "Recettes additionnelles sur 5 ans", value: "622 MMDH" },
        { label: "Excédent cumulé annoncé", value: "47 MMDH" },
      ],
      spending: "Santé 47 MMDH · éducation 117 MMDH · solidarité et emploi 124,5 MMDH — à eux seuls, environ la moitié du programme. Au total, 165 MMDH pour la santé et l'éducation, avec 135 000 recrutements dans les deux secteurs.",
      revenue: "Élasticité fiscale de l'économie 300 MMDH · recettes additionnelles d'IS et d'IR 172,2 MMDH · rationalisation des dépenses fiscales 30 MMDH · fiscalisation de la rente ≈ 29 MMDH · impôt sur le patrimoine non productif 22,4 MMDH · lutte contre la fraude fiscale 19,6 MMDH.",
    },
    measures: {
      "Justice fiscale": [
        "Impôt de solidarité sur la fortune, base déclarative, taux progressif de 0,3 % à 0,5 %",
        "Seuil d'exonération de l'IR relevé à 60 000 DH et progressivité renforcée",
        "Rapport annuel d'évaluation de l'impact des dépenses fiscales",
        "Création d'un Conseil consultatif de l'équité et de l'efficacité fiscales",
      ],
      "Social et santé": [
        "Pension minimale de 3 000 DH, plancher de 1 000 DH pour l'aide sociale",
        "+15 % du salaire minimum et indexation des futures hausses sur l'inflation",
        "AMO étendue aux 8,5 millions de personnes encore exclues",
        "15 000 médecins et 33 500 infirmiers recrutés, 9 000 lits supplémentaires",
        "Reste à charge des ménages ramené à 25 %",
      ],
      "Emploi et économie": [
        "Un million d'emplois nets, chômage sous 10 % en 2031 (objectif établi sur l'ancienne méthodologie du HCP, base 13 % fin 2025)",
        "Industrie de 15,3 % à 20 % du PIB, 500 000 emplois industriels nets",
        "Déficit commercial réduit de moitié, à 10 % du PIB",
        "Informel : intégrer 20 % des unités informelles, pour 10 MMDH/an de recettes fiscales et sociales",
        "15 000 TPME créées par an, dont au moins 500 dans chaque région, +50 % de grandes entreprises",
        "Révision de certains accords de libre-échange jugés défavorables",
        "Économie sociale et solidaire portée à 6 % du PIB",
      ],
      "Agriculture et eau": [
        "-25 % de consommation d'eau agricole",
        "40 à 50 % des besoins alimentaires essentiels produits localement",
        "Revenus des petits agriculteurs et pêcheurs doublés",
        "Dessalement porté à 1,7 milliard de m³/an, pertes des réseaux ramenées sous 20 %, 50 % des eaux usées traitées réutilisées",
      ],
      "École": [
        "18 000 enseignants recrutés par an (primaire et collège)",
        "30 000 classes équipées en cinq ans, prioritairement en rural",
        "2 000 enseignants d'amazighe formés par an",
        "Décrochage -50 % d'ici 2031, 15 % des élèves du secondaire orientés vers le professionnel",
        "Une université publique dans le top 500 mondial, recherche à 1,5 % du PIB",
      ],
      "Gouvernance": [
        "Moralisation de la vie publique, transparence des marchés publics, encadrement des conflits d'intérêts, présentés comme la condition première du retour de l'investissement privé",
      ],
    },
    strengths: "C'est le programme le plus cohérent avec lui-même, et désormais le plus transparent financièrement. Il ose nommer des recettes nouvelles et identifiables, ce que presque personne ne fait. L'impôt de solidarité sur la fortune constitue la première prise de position claire sur ce sujet dans le débat politique national. Le volet agricole est le plus abouti de tous les programmes sur le lien eau-agriculture-revenus. Et il est l'un des rares à fixer un objectif chiffré sur l'informel.",
    weaknesses: [
      "Le point faible est dans les recettes, pas dans les dépenses. Sur les 622 MMDH annoncés, 300 MMDH viennent de « l'élasticité fiscale de l'économie » — que le parti définit lui-même comme la hausse normale des recettes liée à la croissance. Or cette hausse n'est pas produite par le programme, et n'est pas une marge disponible : les dépenses existantes augmentent elles aussi mécaniquement. Le problème est celui du scénario de référence.",
      "L'excédent de 47 MMDH n'apparaît qu'en fin de mandature, après deux exercices déficitaires.",
      "Doubler les effectifs hospitaliers reste matériellement très difficile : le pays ne forme pas assez vite, et une partie des soignants émigre. Le programme chiffre les recrutements mais ne traite pas ce goulot.",
      "La révision des accords de libre-échange est annoncée sans préciser lesquels, ni comment renégocier avec l'UE ou les États-Unis, ni quels risques pour les exportations et les investissements étrangers.",
      "Une question politique posée par les observateurs : la capacité d'un parti de cette taille à imposer un impôt sur la fortune une fois entré dans une coalition.",
    ],
    scores: { diagnostic: 3, chiffrage: 3, financement: 3, execution: 2, alignement: 2, arbitrages: 3 },
    scoreNote: "Note « financement » relevée de ● à ●●● après publication du compte complet. Les réserves portent désormais sur la qualité d'une hypothèse de recettes, non sur l'absence de plan.",
    structure: "L'État employeur, producteur de services et redistributeur, avec un compte à l'appui.",
  },
  {
    id: "pjd", acronym: "PJD", name: "Parti de la justice et du développement",
    category: "opposition", seats2021: 13, leader: "Abdelilah Benkirane",
    color: "#1B3A6B", colorVerified: true, symbol: "La lampe (le flambeau)",
    slogan: "La croissance durable pour l'emploi",
    programDate: "7 septembre 2026, Rabat",
    programUrl: "https://www.pjd.ma/",
    summary: "Le programme le plus précis sur un point que presque tous esquivent : conditionner l'argent public à des résultats. Et la rupture doctrinale la plus nette sur l'école. Mais aucun objectif chiffré, aucun chiffrage.",
    identity: [
      "Passé de 125 à 13 sièges en 2021 — plus de 90 % de sa représentation perdue",
      "Le scrutin est un test existentiel pour la formation",
    ],
    architecture: "Projet centré sur l'emploi, la régulation des marchés et la doctrine scolaire",
    measures: {
      "Emploi": [
        "Diagnostic explicite : ≈ 1,6 million de chômeurs en 2025, plus de 37 % chez les 15-24 ans",
        "La création d'emplois érigée en principal critère d'évaluation de l'action économique",
        "Formation et reconversion, en priorité pour les jeunes sans emploi, formation ni études",
        "Insertion, entrepreneuriat, auto-emploi ; numérique et économie verte identifiés comme gisements",
      ],
      "Entreprises et fiscalité": [
        "Accès des PME aux marchés publics et au financement",
        "Conditionnalité des soutiens publics et des avantages fiscaux : création d'emplois, achats locaux, innovation, respect des délais de paiement des fournisseurs",
        "Taux d'imposition réduits pour certaines TPE et petites entreprises",
      ],
      "Concurrence et prix": [
        "Réglementation renforcée contre les monopoles et oligopoles, avec fiscalité plus élevée pour les secteurs concernés",
        "Contrôle des prix et de la qualité des produits de première nécessité",
        "Lutte contre la spéculation, réforme des marchés de gros",
        "Souveraineté dans les secteurs stratégiques",
      ],
      "École": [
        "Suppression de la distinction entre établissements ordinaires et écoles pionnières, retour à une école publique unifiée",
        "Arabe comme langue principale d'enseignement, avec alternance linguistique pour certaines matières scientifiques dans la limite de 30 % du volume",
        "Place renforcée de l'amazighe",
        "Suppression de la limite d'âge de 35 ans aux concours de recrutement des cadres éducatifs",
        "Plan prospectif sur dix ans pour les besoins en personnel enseignant",
        "Programmes de seconde chance, ciblage des filles du milieu rural (transport, internats, soutien social)",
        "Programme national de remise à niveau en lecture, écriture et mathématiques au primaire",
        "Recherche portée progressivement à 1,5 % du PIB",
      ],
    },
    strengths: "Conditionner les avantages fiscaux à la création d'emplois, aux achats locaux et au respect des délais de paiement est un levier réel, applicable par voie législative et vérifiable. Le diagnostic chiffré du chômage est le plus clair de la campagne. Sur l'école, le parti assume une alternative doctrinale plutôt qu'une différence de dosage : cela donne aux électeurs un vrai choix.",
    weaknesses: [
      "Peu d'objectifs de résultat. Le PJD dit comment il agirait, rarement ce qu'il vise. Pas de cible d'emplois, de croissance ni de chômage.",
      "Aucun chiffrage, aucun plan de financement.",
      "Supprimer les écoles pionnières est un pari à haut risque : le dispositif doit couvrir environ 80 % des écoles primaires dès la rentrée 2026-2027. Le programme ne détaille pas ce qui remplace, ni ce qu'on fait des enseignants déjà formés.",
      "Le retour à l'arabe comme langue principale est une position légitime, mais le programme n'aborde pas la continuité avec un enseignement supérieur largement francophone et anglophone dans les filières scientifiques.",
      "Le contrôle des prix peut protéger à court terme et créer des pénuries ou de l'informel s'il est mal calibré. Ce risque n'est pas évoqué.",
    ],
    scores: { diagnostic: 3, chiffrage: 1, financement: 1, execution: 3, alignement: 1, arbitrages: 3 },
    structure: "L'État régulateur des marchés et redresseur de doctrine scolaire. Profondeur normative élevée, faible sur les objectifs mesurables.",
  },
  {
    id: "mp", acronym: "MP", name: "Mouvement populaire",
    category: "opposition", seats2021: 28, leader: "Mohamed Ouzzine",
    color: "#A6790E", colorVerified: true, symbol: "L'épi de blé",
    slogan: "Ja lwaqt (Le moment est venu)",
    programDate: "Contrat social en mai 2026, Contrat haraki début septembre 2026",
    programUrl: "https://alharaka.ma/fr/les-elections-legislatives-2026/",
    updated: true,
    summary: "Les innovations institutionnelles les plus originales de la campagne, particulièrement sur le monde rural et la décentralisation. Mais presque aucun objectif macroéconomique chiffré.",
    identity: [
      "28 sièges en 2021, ancrage historique rural et amazigh, hors majorité sortante",
      "A recruté l'ancien secrétaire général de l'Istiqlal, Hamid Chabat, à Fès",
      "Le MP a été le premier grand parti à publier son programme",
    ],
    architecture: "11 axes et 33 mesures, complétés par le Contrat haraki 2026",
    measures: {
      "Pouvoir d'achat et ciblage social": [
        "Plateforme nationale de suivi des prix et des marges",
        "Suppression de l'« indice de ciblage » pour certaines catégories de bénéficiaires des aides publiques",
        "« Compte fiscal social » permettant de déduire une partie des frais de scolarité",
        "Trêve à l'exportation pour stabiliser les prix des produits de base",
      ],
      "Entreprises et emploi": [
        "Exonération d'impôt pour les TPME jusqu'à 1 MDH de chiffre d'affaires",
        "Chèque-formation pour chaque jeune chômeur",
        "Restructuration de l'OFPPT en régulateur, et non plus en opérateur direct de formation",
        "Doublement du nombre d'entreprises exportatrices, « paix fiscale »",
      ],
      "Santé": [
        "Dossier médical numérique dès la naissance, plateforme nationale de rendez-vous",
        "Transfert de 70 % du budget de la santé vers les structures régionales et locales",
      ],
      "Éducation": [
        "Plan national d'éradication de l'analphabétisme, « Marche de la lumière », mobilisant les étudiants à hauteur de 200 heures par an",
        "Gratuité de l'enseignement supérieur public, revalorisation des bourses",
        "Suppression du plafond d'âge pour les concours d'enseignement",
        "Activités parascolaires obligatoires, au moins 4 heures par semaine",
        "Généralisation de l'amazighe là où la langue est fortement implantée",
      ],
      "Monde rural": [
        "Pôles multiservices dans les communes de plus de 5 000 habitants",
        "« Contrat de stabilité rurale » de cinq ans pour médecins, enseignants et agents administratifs",
        "Fonds de logement rural, aide au logement étendue à l'autoconstruction et à la réhabilitation",
      ],
      "Autres": [
        "75 % des Maisons de jeunes mises à niveau",
        "Carte nationale des risques climatiques reliée à un système d'alerte précoce",
      ],
    },
    strengths: "Le contrat de stabilité rurale attaque un problème réel et documenté — la rotation du personnel de santé et d'éducation en zone rurale — par un mécanisme concret plutôt que par un vœu. Le transfert de 70 % du budget santé au niveau régional donnerait un contenu budgétaire réel à la régionalisation avancée. La refonte de l'OFPPT en régulateur est techniquement sérieuse et rarement proposée. Le parti est cohérent avec son identité : ruralité et amazighe ne sont pas des ajouts cosmétiques.",
    weaknesses: [
      "Presque aucun objectif macroéconomique chiffré : ni emploi, ni croissance, ni chômage. On sait ce que le parti veut faire, pas ce qu'il veut obtenir.",
      "Trois mesures coûteuses non chiffrées : gratuité du supérieur, exonération des TPME, compte fiscal social — les deux dernières réduisant les recettes fiscales sans contrepartie annoncée.",
      "La trêve à l'exportation peut baisser les prix intérieurs mais pénalise les producteurs et les engagements commerciaux du pays. Ce coût n'est pas abordé.",
      "Transférer 70 % du budget santé aux régions suppose des capacités de gestion régionales qui n'existent pas encore partout. Le programme ne dit pas comment on les construit.",
    ],
    scores: { diagnostic: 2, chiffrage: 1, financement: 1, execution: 3, alignement: 2, arbitrages: 2 },
    structure: "L'État service de proximité à décentraliser. Profondeur territoriale élevée, faible sur la macroéconomie.",
  },
  {
    id: "ffd", acronym: "FFD", name: "Front des forces démocratiques",
    category: "opposition", seats2021: 3, leader: "Mustapha Benali",
    color: "#5A6B2E", colorVerified: true, symbol: "Le rameau d'olivier",
    slogan: "Un contrat social fondé sur la dignité, la souveraineté et la justice distributive",
    programDate: "Programme participatif publié en ligne",
    programUrl: "https://pffd.ma/en/programme/",
    summary: "Proportionnellement à sa taille, l'un des programmes les plus chiffrés, et l'un des rares à nommer une ressource nouvelle. Mais des objectifs macroéconomiques supérieurs à toutes les prévisions officielles.",
    identity: [
      "3 sièges en 2021, positionné à gauche",
      "Candidats sur tout le territoire, avec mise en avant de femmes et de jeunes",
      "Ambition : atteindre le seuil du groupe parlementaire",
    ],
    architecture: "Engagements chiffrés pour 2026-2031",
    measures: {
      "Objectifs chiffrés": [
        "Croissance de 5,5 à 6 %, chômage sous 8 %",
        "1,2 million de familles sorties de la précarité",
        "+25 % de pouvoir d'achat pour la classe moyenne",
        "Taux d'activité des femmes à 35 %",
        "Quota de 33 % de femmes et de jeunes dans les programmes d'emploi et les postes de décision",
      ],
      "Fiscalité": [
        "Pression allégée sur les classes moyennes et les salariés",
        "Taxation progressive des fortunes improductives et des superprofits",
      ],
      "Social et territoires": [
        "« Revenu de dignité », présenté comme une composante d'un État social plus ciblé",
        "Investissements publics orientés vers les territoires défavorisés",
        "Santé et éducation gratuites pour les populations vulnérables",
      ],
      "Gouvernance": [
        "Moralisation, reddition des comptes, numérisation de l'administration, justice de proximité",
      ],
      "École": [
        "Préscolaire généralisé dès 3 ans",
        "Alimentation et médecine scolaires généralisées",
        "Objectif d'entrée du Maroc dans le top 50 des classements PISA et TIMSS",
      ],
    },
    strengths: "Le FFD nomme une source de financement identifiable. On peut approuver ou rejeter ce choix, mais c'est une réponse à la question « qui paie ? ». L'objectif PISA/TIMSS est remarquable : il porte sur les apprentissages réels des élèves, mesurés par des évaluations internationales indépendantes, et non sur des taux de scolarisation.",
    weaknesses: [
      "Une croissance de 5,5 à 6 % dépasse toutes les prévisions officielles et internationales, sans mécanisme expliqué.",
      "Le rendement de la taxation des fortunes improductives n'est pas chiffré. Sans ce chiffre, le financement reste une orientation, pas un plan.",
      "Le « revenu de dignité » n'est ni chiffré ni articulé à l'aide sociale directe existante (29 MMDH/an, 3,9 millions de ménages). Or c'est la question décisive : remplacement, complément ou extension ?",
      "Le parti part de 3 sièges : la probabilité de mise en œuvre est faible, ce qui rend l'exercice moins contraignant pour lui que pour les partis de gouvernement.",
    ],
    scores: { diagnostic: 2, chiffrage: 3, financement: 2, execution: 1, alignement: 2, arbitrages: 3 },
    structure: "L'État redistributeur financé par la fiscalité du capital improductif. Cohérence interne forte, poids politique faible.",
  },
  {
    id: "gauche", acronym: "PSU-FGD", name: "Alliance de la gauche (PSU et FGD)",
    category: "gauche", seats2021: 1, leader: "Jamal El Asri (PSU) et Abdessalam El Aziz (FGD)",
    color: "#C79A1E", colorVerified: true, symbol: "La bougie (PSU)",
    slogan: "L'espoir en l'avenir",
    programDate: "Alliance formée en mai 2026",
    programUrl: "https://barnamaj.yassar.ma/",
    summary: "La seule offre qui pose la question institutionnelle de front. Cohérente politiquement, mais très peu opérationnelle sur les politiques sectorielles.",
    identity: [
      "Candidatures et programme communs, listes sur 63 circonscriptions locales et 6 régionales, sur les 92 circonscriptions locales du pays",
      "Têtes de liste présentées à Casablanca fin juillet ; candidatures notables : Nabila Mounib à Casablanca-Anfa, Houssine El Yamani à Mohammedia",
      "Changement notable : en 2021, les composantes de la gauche démocratique concouraient séparément",
    ],
    architecture: "Six familles de politiques : développement humain, justice sociale, droits et libertés, institutions, transition verte, politique étrangère",
    measures: {
      "Institutions — le cœur du projet": [
        "Réforme constitutionnelle vers une monarchie parlementaire",
        "Séparation plus nette des pouvoirs, prérogatives du Parlement renforcées, indépendance du pouvoir judiciaire",
        "Régionalisation plus effective",
        "Lutte contre la corruption, la rente et les conflits d'intérêts, reddition des comptes",
        "Approche politique de la question du Sahara, dans le cadre de la souveraineté nationale",
      ],
      "Économie": [
        "Rupture avec l'économie de rente et les privilèges",
        "Économie mixte : État actif et secteur privé productif",
        "Priorité aux PME créatrices d'emplois, fiscalité ciblée contre la captation de ressources par les rentes",
      ],
      "Social": [
        "Justice sociale, réduction des inégalités, lutte contre la pauvreté, le chômage et l'analphabétisme, en priorité chez les femmes et en milieu rural",
        "Éducation et santé publiques érigées en missions nationales prioritaires, droit à une éducation publique gratuite et de qualité",
        "Égalité renforcée entre femmes et hommes",
      ],
      "Transition verte": [
        "Renouvelables, eau et dessalement, souveraineté alimentaire, forêts, biodiversité, économie circulaire, transports durables",
      ],
      "Politique étrangère": [
        "Souveraineté, multilatéralisme, paix, soutien à la cause palestinienne",
        "Politique renforcée envers les Marocains résidant à l'étranger",
        "Recherche scientifique comme levier de souveraineté, lutte contre la fuite des cerveaux",
      ],
    },
    strengths: "Tous les autres partis promettent d'améliorer l'action publique ; l'Alliance seule affirme que le problème est la répartition du pouvoir et propose de la modifier. C'est cohérent : si l'on pense que les blocages viennent de la structure du système, promettre des politiques publiques sans y toucher est illusoire. L'unité des listes est aussi un progrès stratégique réel par rapport à 2021.",
    weaknesses: [
      "Très peu de chiffrage, pas de financement détaillé. C'est d'abord un projet politique, ensuite un programme de gouvernement.",
      "La réforme constitutionnelle ne dépend pas du Parlement seul : elle suppose une initiative et un référendum. La promettre dans un programme législatif, à partir de deux sièges, relève de l'affirmation d'identité plus que du plan à cinq ans.",
      "Sur la santé, l'école et l'emploi, le niveau de détail reste inférieur à celui du PPS ou de l'USFP, qui partagent une partie de sa famille politique.",
    ],
    scores: { diagnostic: 2, chiffrage: 1, financement: 1, execution: 1, alignement: 2, arbitrages: 3 },
    structure: "L'État à refonder avant d'être réformé. Profondeur institutionnelle maximale, profondeur opérationnelle minimale.",
  },
];

const CATEGORIES_FR = [
  { key: "majorite", label: "Majorité sortante", note: "Le RNI, le PAM et l'Istiqlal forment le cœur de la coalition. L'UC et le MDS l'ont rejointe en cours de législature, abandonnant leur position de soutien critique." },
  { key: "opposition", label: "Opposition parlementaire", note: "" },
  { key: "gauche", label: "Alliance de la gauche", note: "Le PSU et la FGD concourent avec des candidatures et un programme communs." },
];

const OTHER_PARTIES_FR = {
  title: "Les autres formations",
  body: "Sur les 27 partis en lice, une quinzaine n'a pas publié de programme assez détaillé pour figurer dans ce comparateur. Cela ne veut pas dire qu'elles n'ont pas de projet : cela veut dire que ce projet n'est pas accessible publiquement dans un format comparable — ce qui est en soi une information utile. Dans plusieurs circonscriptions, ces partis pèsent réellement, et leurs élus compteront dans les équilibres parlementaires.",
};

const CONSENSUS_FINDINGS_FR = [
  {
    title: "1 — Le chiffrage a beaucoup progressé ; le financement, très peu",
    text: "C'est le vrai changement de 2026 : les programmes sont nettement plus quantifiés qu'en 2021. Le PAM affiche 350 MMDH, le PPS un compte complet dépenses/recettes, l'USFP et le FFD des dizaines de cibles. Mais deux partis seulement — le PPS et le FFD — nomment des ressources nouvelles identifiables. Le PAM s'appuie sur « l'effet de la croissance » à hauteur de 300 des 350 MMDH, ce qui est circulaire. Le PPS s'appuie lui aussi sur 300 MMDH d'élasticité fiscale, ce qui pose le même type de problème. Les autres ne chiffrent pas du tout. Traduit simplement : presque tous répondent à « qu'est-ce qu'on fait ? », très peu à « qui paie ? ».",
  },
  {
    title: "2 — Le « million d'emplois » est devenu une unité de compte, pas une prévision",
    text: "Le RNI, le PAM et le PPS le promettent ; d'autres se limitent à 500 000. Aucun n'explique quelle activité économique produirait ces emplois, ni comment passer de ≈ 94 000 créations nettes en quatre ans à 200 000 par an. Le RNI promettait déjà ce million en 2021. Que le même chiffre revienne cinq ans plus tard sans explication de l'écart est le principal problème de crédibilité de toute la campagne — tous camps confondus.",
  },
  {
    title: "3 — La contradiction arithmétique récurrente : plus de dépenses et moins de déficit",
    text: "Plusieurs programmes promettent en même temps une forte hausse des dépenses sociales, des baisses d'impôts (exonération d'IR sous 15 000 DH au PAM, exonération des TPME au MP, seuil d'IR à 60 000 DH au PPS, taux réduits au PJD) et la maîtrise du déficit et de la dette. Ces trois objectifs ne sont compatibles que si la croissance dépasse durablement 5 %. Or le HCP anticipe 3 % en 2027 et la Banque mondiale 4,1 à 4,7 %. Aucun programme ne résout cette tension.",
  },
  {
    title: "4 — La retraite est le grand évitement collectif",
    text: "Le dossier le plus urgent est celui que personne ne traite sérieusement. Plusieurs partis promettent la revalorisation (3 000 DH minimum au PAM et au PPS, hausses progressives à l'Istiqlal et au RNI). Aucun n'assume publiquement le volet coûteux : recul de l'âge, hausse des cotisations, ou baisse du taux de remplacement. Or une réforme des retraites comporte, par définition, au moins un de ces trois éléments.",
  },
  {
    title: "5 — Sur l'eau, l'énergie et le Mondial, il n'y a presque pas de désaccord",
    text: "Tous soutiennent le dessalement, les barrages, les renouvelables et les chantiers du Mondial 2030 — effet du cadre institutionnel. La différenciation réelle porte sur la demande plutôt que sur l'offre. Le PPS (-25 % de consommation d'eau agricole, pertes des réseaux sous 20 %, 50 % des eaux usées réutilisées) et l'USFP (-40 % de pertes) proposent d'agir sur la consommation. C'est probablement la question hydrique la plus déterminante des cinq prochaines années — et la moins discutée.",
  },
];

const BLIND_SPOTS_FR = [
  {
    title: "Le financement",
    text: "Deux partis seulement nomment des ressources nouvelles identifiables. Les autres reposent sur la croissance, l'implicite ou le silence.",
    axisRef: 8,
  },
  {
    title: "Le paramétrage des retraites",
    text: "Plusieurs promettent la revalorisation ; aucun n'assume l'âge, les cotisations ou le taux de remplacement.",
    axisRef: 3,
  },
  {
    title: "Le goulot des ressources humaines",
    text: "On promet de recruter massivement enseignants et soignants sans dire comment on les forme, ni comment on les retient au Maroc et en zone rurale.",
    axisRef: 4,
  },
  {
    title: "La demande en eau",
    text: "Consensus pour produire plus, quasi-silence pour consommer moins — alors que l'agriculture est le premier usager.",
    axisRef: 6,
  },
  {
    title: "L'après-Mondial 2030",
    text: "Aucune doctrine sur la conversion des emplois de chantier en emplois durables.",
    axisRef: 12,
  },
  {
    title: "Le ralentissement de 2027",
    text: "Les programmes sont calibrés sur la bonne année 2026. Le HCP anticipe 3 % dès 2027. Toutes les promesses seront exécutées dans un contexte moins favorable que celui dans lequel elles ont été écrites.",
    axisRef: 8,
  },
];

const TOOLBOX_QUESTIONS_FR = [
  {
    text: "Vous promettez X emplois. Dans quel secteur précisément, et pourquoi le rythme passerait de 94 000 en quatre ans à 200 000 par an ?",
    axisRef: 1,
  },
  {
    text: "Combien coûte votre programme, et quelle recette nouvelle le finance ?",
    axisRef: 8,
  },
  {
    text: "Sur les retraites : vous augmentez l'âge, les cotisations, ou vous baissez les pensions ? Il faut au moins un des trois.",
    axisRef: 3,
  },
  {
    text: "La pension minimale à 3 000 DH coûte environ 54 MMDH pour la seule CNSS. Cela figure-t-il dans votre chiffrage ?",
    axisRef: 3,
  },
  {
    text: "Vous voulez recruter des milliers d'enseignants et de soignants : où les formez-vous, et comment les gardez-vous en zone rurale ?",
    axisRef: 4,
  },
  {
    text: "Sur l'eau : une mesure qui réduit la consommation, pas seulement la production ?",
    axisRef: 6,
  },
  {
    text: "Après le Mondial 2030, combien des emplois créés existent encore en 2032 ?",
    axisRef: 12,
  },
  {
    text: "Si vous n'obtenez que 15 % des sièges, quelles trois mesures de votre programme sont non négociables dans une coalition ?",
  },
];

const AXIS_GROUPS_FR = [
  { key: "quotidien", label: "Vie quotidienne", blurb: "Ce qui pèse directement sur le budget et le quotidien des ménages." },
  { key: "avenir", label: "Avenir et compétences", blurb: "Ce qui prépare les générations qui arrivent." },
  { key: "ressources", label: "Ressources et territoire", blurb: "Ce que le pays a de rare, et comment il est réparti." },
  { key: "economie", label: "Économie et finances", blurb: "D'où vient l'argent, et où il va." },
  { key: "institutions", label: "Institutions et société", blurb: "Comment le pouvoir est exercé et contrôlé." },
  { key: "evenements", label: "Grands rendez-vous", blurb: "Ce qui engage le pays au-delà d'un mandat." },
];

const AXES_FR = [
  {
    id: 1, title: "Emploi et insertion des jeunes", group: "quotidien",
    teaser: "Le sujet numéro un des Marocains — et le plus flou de la campagne.",
    repere: "≈ 94 000 créations nettes en quatre ans, 193 000 en 2025, chômage des 15-24 ans au-dessus de 37 %.",
    rows: [
      ["RNI", "1 million d'emplois · chômage sous 9 % · allocation de retour à l'emploi jusqu'à 12 mois"],
      ["PAM", "1 million d'emplois nets · 500 000 contrats de première expérience · 60 000 jeunes entreprises"],
      ["PPS", "1 million d'emplois nets · 500 000 emplois industriels · chômage sous 10 % en 2031 · NEET réduits de moitié"],
      ["USFP", "Chômage sous 8 % (jeunes sous 10 %, femmes sous 15 %) · 250 000 emplois industriels · 200 000 insertions/an"],
      ["FFD", "Chômage sous 8 % · activité féminine à 35 % · quota de 33 % femmes/jeunes"],
      ["PJD", "Pas de cible chiffrée · conditionnalité des aides publiques à la création d'emplois"],
      ["MP", "Pas de cible · chèque-formation pour chaque jeune chômeur · OFPPT réformé"],
      ["Istiqlal, UC, Alliance", "Pas de cible chiffrée publique"],
    ],
    lecture: "Les cibles les plus crédibles ne sont pas les plus élevées. L'USFP et le PPS sont les seuls à relier leur objectif à un secteur identifié — l'industrie ; le PJD et le MP proposent des mécanismes plutôt que des chiffres. Le FFD, l'USFP et le PPS sont les seuls à cibler explicitement l'emploi des femmes, alors que le très faible taux d'activité féminine est l'un des principaux gisements de croissance du pays.",
  },
  {
    id: 2, title: "Pouvoir d'achat, salaires et fiscalité des ménages", group: "quotidien",
    teaser: "Agir sur les prix ou sur les revenus : deux philosophies qui s'opposent nettement.",
    repere: null,
    rows: [
      ["RNI", "Aide sociale indexée sur l'inflation · épargne abondée (0,25 DH/DH) pour l'informel · SMIG/SMAG en hausse · crédit d'impôt 5 000 DH/enfant"],
      ["PAM", "IR exonéré sous 15 000 DH bruts · électricité gratuite sous 100 DH/mois · pension mini 3 000 DH · aide sociale plancher 1 000 DH"],
      ["PPS", "Seuil d'IR à 60 000 DH · impôt de solidarité sur la fortune (0,3 à 0,5 %) · SMIG +15 % indexé sur l'inflation · pension mini 3 000 DH · aide sociale mini 1 000 DH"],
      ["Istiqlal", "Suivi national des marges · carte familiale · plan classe moyenne · hausses progressives SMIG/retraites"],
      ["MP", "Plateforme de suivi des prix et des marges · suppression de l'indice de ciblage pour certaines catégories · compte fiscal social · trêve à l'exportation"],
      ["PJD", "Contrôle des prix et de la qualité des produits de base · lutte contre la spéculation · réforme des marchés de gros"],
      ["USFP", "+20 % de salaire moyen · +15 % de revenu net des salariés"],
      ["FFD", "+25 % de pouvoir d'achat pour la classe moyenne · fiscalité allégée pour salariés et classes moyennes"],
      ["UC", "Soutien à la famille et à la classe moyenne · lutte contre la vie chère"],
    ],
    lecture: "Deux philosophies s'opposent nettement. Agir sur les prix (Istiqlal, MP, PJD) : surveiller les marges, casser les monopoles, réformer les marchés de gros — peu coûteux budgétairement, mais avec un risque d'effets pervers si le contrôle est mal calibré. Agir sur les revenus (PAM, RNI, PPS, FFD) : exonérations, aides, pensions — effet immédiat et visible, mais coût budgétaire élevé. Deux mesures se détachent techniquement : l'indexation de l'aide sociale sur l'inflation, qui protège automatiquement 12 millions de personnes sans négociation annuelle, et le compte d'épargne abondé pour les travailleurs de l'informel.",
  },
  {
    id: 3, title: "Retraites et soutenabilité de la protection sociale", group: "quotidien",
    teaser: "L'axe le plus faible de toute la campagne : le grand évitement collectif.",
    repere: "81 % des retraités CNSS (≈ 680 000 personnes) sous 3 000 DH · mise à niveau estimée à ≈ 54 MMDH · 60,3 MMDH de déficits cumulés à la CMR-RPC · réforme reportée au prochain gouvernement.",
    rows: [
      ["PAM", "Pension minimale 3 000 DH (non chiffrée)"],
      ["PPS", "Pension minimale 3 000 DH · minimum social 1 000 DH (dans un programme chiffré)"],
      ["RNI", "Revalorisation des retraites (non paramétrée)"],
      ["Istiqlal", "Hausses progressives des retraites"],
      ["MP, PJD, USFP, UC, FFD, Alliance", "Pas de position paramétrique publique détaillée"],
    ],
    lecture: "C'est le sujet le plus faible de toute la campagne, tous partis confondus. Presque personne ne dit comment financer la revalorisation, et personne n'assume le volet impopulaire. C'est la question numéro un à poser à tout candidat qui sonne à votre porte.",
  },
  {
    id: 4, title: "Santé", group: "quotidien",
    teaser: "Des murs, des bras ou de l'organisation : trois façons de répondre à la même pénurie.",
    repere: "Budget santé de 19,7 MMDH (2021) à 42,4 MMDH (2026) · ≈ 11 millions de bénéficiaires AMO Tadamon · pénurie structurelle de personnel soignant.",
    rows: [
      ["RNI", "Groupements sanitaires territoriaux · médecin de famille · ≈ 5 000 agents en rural · 1 600 structures réhabilitées, 200 nouvelles"],
      ["PAM", "4 nouveaux CHU · 1 600 centres de santé et 90 hôpitaux mis à niveau"],
      ["PPS", "15 000 médecins et 33 500 infirmiers · 9 000 lits · AMO pour 8,5 M d'exclus · reste à charge ramené à 25 % · 47 MMDH dédiés"],
      ["Istiqlal", "Gouvernance hospitalière · médecin référent · agence nationale des urgences"],
      ["USFP", "4,5 prestataires/1 000 habitants · délais d'attente divisés par deux · -20 % de dépenses des ménages · CHU achevés"],
      ["MP", "Dossier médical numérique dès la naissance · plateforme de rendez-vous · 70 % du budget vers les régions"],
      ["FFD", "Accès gratuit pour les populations vulnérables · médecine scolaire généralisée"],
    ],
    lecture: "Trois approches : les murs (PAM : CHU, hôpitaux), les personnes (PPS, RNI : recrutements), l'organisation (MP : numérique et décentralisation ; Istiqlal : gouvernance et urgences ; USFP : indicateurs de qualité). Toutes butent sur le même mur : on ne double pas le personnel soignant en cinq ans, parce que le pays ne le forme pas assez vite et qu'une partie émigre. L'USFP est le seul à raisonner en densité de prestataires, un indicateur qui rend le problème visible.",
  },
  {
    id: 5, title: "Éducation, formation et recherche", group: "avenir",
    teaser: "L'axe où l'électeur a le plus vrai choix : continuité, rupture doctrinale, ou massification.",
    repere: null,
    rows: [
      ["RNI", "Continuité et extension — préscolaire et pionniers généralisés en 2028, lycées en 2031, 12 → 27 universités, décrochage divisé par deux"],
      ["PAM", "Le quotidien scolaire — préscolaire à 4 ans, cours à 9h, 20 min de lecture/jour, 3h d'EPS, dépistages médicaux, socle garanti jusqu'à 15 ans, supérieur en 3 pôles"],
      ["PJD", "Rupture doctrinale — suppression des pionniers, école unifiée, arabe langue principale (alternance 30 %), amazighe renforcé, fin du plafond d'âge, plan RH sur 10 ans, recherche 1,5 % du PIB"],
      ["PPS", "Massification chiffrée — 18 000 enseignants/an, 30 000 classes en 5 ans, 2 000 profs d'amazighe/an, décrochage -50 %, une université dans le top 500, recherche 1,5 % du PIB, 117 MMDH dédiés"],
      ["USFP", "Qualité mesurable — 30 élèves/classe max, préscolaire 100 %, recherche 2 % du PIB, -40 % de sureffectif, 60 % d'insertion des diplômés, 10 pôles universitaires"],
      ["Istiqlal", "Service public et langues — préscolaire gratuit, lien école-famille, arabe et amazighe, régulation des frais du privé, IA dans l'apprentissage"],
      ["MP", "Accès et statut — gratuité du supérieur, fin du plafond d'âge, chèque-formation, OFPPT régulateur, parascolaire obligatoire, amazighe"],
      ["UC", "Contenus et employabilité — refonte des curricula, compétences fondamentales, langues, numérique, lien université-entreprise"],
      ["FFD", "Résultats internationaux — préscolaire dès 3 ans, alimentation et médecine scolaires, top 50 PISA/TIMSS"],
    ],
    lecture: "C'est le sujet où les différences sont les plus réelles et où l'électeur a le plus vrai choix. Quatre visions se dégagent : continuité (RNI), opérationnelle et territoriale (PAM), réorientation doctrinale (PJD), massification des moyens (PPS). Deux propositions méritent une attention particulière parce qu'elles portent sur ce qui manque le plus au débat marocain — la mesure des apprentissages réels : les 30 élèves par classe de l'USFP et l'objectif PISA/TIMSS du FFD. Un enfant scolarisé qui ne sait pas lire correctement en fin de primaire reste le problème central du système.",
  },
  {
    id: 6, title: "Eau, climat et énergie", group: "ressources",
    teaser: "Consensus total sur produire plus d'eau, quasi-silence sur en consommer moins.",
    repere: "Barrages à 75,86 % en 2026 contre 23 % en février 2024 · dessalement de 40 à 350 millions de m³/an depuis 2021 · objectif 1,4-1,7 milliard de m³ en 2030.",
    rows: [
      ["RNI", "Barrages, transferts, dessalement, eaux pluviales, irrigation localisée · autoproduction solaire sans apport initial · GNL et hydrogène vert"],
      ["PAM", "6 stations de dessalement · 400 petits barrages et retenues collinaires · extension du goutte-à-goutte"],
      ["PPS", "-25 % de consommation d'eau agricole · dessalement à 1,7 Md m³/an · pertes des réseaux sous 20 % · 50 % des eaux usées réutilisées · 40-50 % des besoins alimentaires produits localement"],
      ["USFP", "-40 % de pertes des réseaux · 60 % de renouvelables dans l'électricité"],
      ["Istiqlal", "Sécurité hydrique · contenu local énergétique · politique carbone"],
      ["MP", "Carte nationale des risques climatiques et système d'alerte précoce"],
      ["Alliance", "Transition verte intégrée : renouvelables, eau, souveraineté alimentaire, forêts, économie circulaire, transports durables"],
    ],
    lecture: "Consensus quasi total sur l'offre (produire plus d'eau), divergence réelle sur la demande (en consommer moins). L'agriculture est de loin le premier usager. Le PPS est le seul à fixer un objectif de réduction de la consommation agricole, et le seul avec l'USFP à cibler les fuites de réseau. Techniquement, ce sont les deux propositions les plus lourdes de conséquences — et les moins discutées en meeting.",
  },
  {
    id: 7, title: "Souveraineté économique, industrie et commerce extérieur", group: "economie",
    teaser: "Le mot le plus consensuel de la campagne — et donc le moins informatif.",
    repere: null,
    rows: [
      ["PPS", "Industrie de 15,3 % à 20 % du PIB · déficit commercial réduit de moitié à 10 % du PIB · révision de certains accords de libre-échange · informel -20 % des unités intégrées · ESS à 6 % du PIB"],
      ["USFP", "Contrats sectoriels (agroalimentaire, médicament, renouvelables) · +40 % d'exportations à contenu technologique élevé"],
      ["Istiqlal", "Commande publique favorisant la production marocaine · montée en gamme · souveraineté numérique et minière"],
      ["PJD", "Souveraineté dans les secteurs stratégiques · production nationale · anti-monopoles"],
      ["PAM", "Sécurités stratégiques · 5 000 spécialistes en IA et cybersécurité"],
      ["MP", "Doublement du nombre d'entreprises exportatrices · paix fiscale"],
      ["RNI", "GNL, hydrogène vert, industrialisation dans la continuité"],
    ],
    lecture: "La « souveraineté » est le mot le plus consensuel de 2026 — et donc le moins informatif. La vraie ligne de partage est ailleurs : qui accepte de remettre en cause les accords commerciaux existants ? Le PPS le dit explicitement ; l'Istiqlal passe par la préférence nationale dans la commande publique, plus facilement applicable et moins risquée diplomatiquement ; les autres restent dans l'ambition industrielle sans arbitrage commercial.",
  },
  {
    id: 8, title: "Finances publiques et crédibilité budgétaire", group: "economie",
    teaser: "L'axe le plus déterminant de la campagne — et le moins traité.",
    repere: "Déficit ≈ 3,4 % du PIB en 2026 · dette du Trésor ≈ 65,8 % · charge d'intérêts ≈ 2,2 % du PIB · croissance retombant à 3 % en 2027 selon le HCP.",
    rows: [
      ["PPS", "575 MMDH de dépenses / 622 MMDH de recettes / excédent cumulé 47 MMDH · déficit ramené à 4 % du PIB hors financements innovants · dette sous 70 % · solde négatif en 2027 et 2028"],
      ["PAM", "Croissance 5 % · inflation 2 % · déficit 3 % du PIB · dette 62 % en 2031 · 350 MMDH dont 300 issus de la croissance"],
      ["FFD", "Croissance 5,5-6 % · financement par taxation des fortunes improductives et superprofits"],
      ["USFP", "+1,5 point de croissance par an"],
      ["RNI, Istiqlal, MP, PJD, UC, Alliance", "Pas de cadrage macro-budgétaire global publié"],
    ],
    lecture: "Le sujet le plus déterminant, et le moins traité. Le PPS et le PAM méritent crédit pour avoir publié un cadrage complet — c'est courageux, et c'est précisément ce qui permet de les critiquer avec précision. Les autres laissent le financement implicite, ce qui les met à l'abri de la critique mais prive l'électeur de l'information la plus importante. Un point commun préoccupant : les deux seuls programmes entièrement chiffrés reposent chacun sur environ 300 MMDH attendus de la dynamique de croissance. Si elle ne se matérialise pas, les deux édifices se fissurent au même endroit.",
  },
  {
    id: 9, title: "Territoires, ruralité et régionalisation", group: "ressources",
    teaser: "La régionalisation avancée, chantier officiel depuis 2015, reste en deçà des attentes.",
    repere: null,
    rows: [
      ["MP", "Pôles multiservices (communes > 5 000 hab.) · contrat de stabilité rurale de 5 ans · Fonds de logement rural · 70 % du budget santé aux régions"],
      ["PAM", "Disparités territoriales réduites · transport scolaire rural généralisé · 6 sociétés régionales de distribution agricole · alimentation scolaire en zones vulnérables"],
      ["PPS", "Priorité rurale dans les recrutements et les 30 000 classes · 500 TPME créées par région et par an"],
      ["RNI", "≈ 5 000 agents de santé en rural · 200 structures en zones sous-dotées · transport et cantines"],
      ["FFD", "Investissement public priorisé dans les territoires défavorisés"],
      ["Istiqlal, UC", "Réduction des écarts entre territoires"],
      ["Alliance", "Régionalisation plus effective"],
    ],
    lecture: "Le MP a l'offre la plus construite, cohérente avec son histoire. Le contrat de stabilité rurale est la seule proposition qui attaque la cause du problème — le personnel qualifié ne reste pas en zone rurale — plutôt que son symptôme. C'est aussi le sujet où la régionalisation avancée reste le plus en deçà des attentes : seuls le MP et l'Alliance proposent de lui donner un contenu budgétaire réel.",
  },
  {
    id: 10, title: "Gouvernance, corruption et institutions", group: "institutions",
    teaser: "Des outils juridiques précis d'un côté, un changement de régime de l'autre.",
    repere: null,
    rows: [
      ["Istiqlal", "Loi sur les conflits d'intérêts · déclarations de patrimoine élargies · enrichissement illicite · Conseil de la concurrence renforcé · IS à 40 % sur les monopoles · « silence vaut accord »"],
      ["PPS", "Moralisation, transparence des marchés publics et encadrement des conflits d'intérêts posés comme condition première du retour de l'investissement privé · Conseil consultatif de l'équité fiscale · rapport annuel sur les dépenses fiscales"],
      ["Alliance de la gauche", "Réforme constitutionnelle vers une monarchie parlementaire · séparation des pouvoirs · indépendance de la justice · Parlement renforcé"],
      ["FFD", "Moralisation · reddition des comptes · numérisation de l'administration · justice de proximité"],
      ["PJD", "Anti-monopoles avec fiscalité plus élevée · conditionnalité des aides publiques"],
      ["RNI, PAM, MP, UC", "Volet moins développé"],
    ],
    lecture: "Trois registres. L'Istiqlal propose des outils juridiques précis et immédiatement applicables — probablement l'offre la plus exécutable du sujet. Le PPS inverse l'ordre habituel en faisant de la gouvernance la condition de l'économie, et non un chapitre à part. L'Alliance propose un changement de régime politique : plus profond, mais hors de portée d'une législature ordinaire. À noter : la lutte contre la rente est portée avec le plus de force par un parti de la majorité sortante. Cela interroge — mais ne disqualifie pas la pertinence des mesures.",
  },
  {
    id: 11, title: "Numérique et intelligence artificielle", group: "avenir",
    teaser: "Tout le monde en parle, personne n'en fait un projet structurant.",
    repere: null,
    rows: [
      ["PAM", "5 000 spécialistes formés en IA et cybersécurité"],
      ["Istiqlal", "Souveraineté numérique, cybersécurité, IA dans l'apprentissage"],
      ["MP", "Dossier médical numérique dès la naissance, plateforme nationale de rendez-vous"],
      ["USFP", "Dix pôles universitaires dont l'IA, numérisation intégrale des services universitaires"],
      ["RNI", "Accompagnement numérique individualisé des élèves"],
      ["UC", "Compétences numériques et IA dans le supérieur"],
      ["FFD", "Numérisation de l'administration"],
    ],
    lecture: "Tout le monde en parle, personne n'en fait un projet structurant. L'IA est traitée comme un ornement de modernité plutôt que comme une politique publique avec un budget, une gouvernance et une cible. C'est un angle mort collectif, alors que le sujet touchera directement l'emploi des jeunes diplômés entre 2026 et 2031.",
  },
  {
    id: 12, title: "Mondial 2030 et grands événements", group: "evenements",
    teaser: "Le principal moteur d'investissement public de la législature, presque absent des programmes.",
    repere: null,
    rows: [
      ["USFP", "Le Mondial 2030 comme levier explicite : 500 000 emplois directs et indirects"],
      ["Autres partis", "Mentions générales, sans chiffrage ni doctrine"],
    ],
    lecture: "L'événement sera le principal moteur d'investissement public de la législature, et il est presque absent des programmes comme objet de politique publique. La question que personne ne pose : combien des emplois créés existeront encore en 2032 ? Un emploi de chantier n'est pas un emploi durable. Le sujet a déjà débordé sur le terrain électoral, autour du Grand stade de Benslimane et de l'organisation de la finale, avec un rappel du chef du gouvernement sortant : le stade appartient à l'État, son financement relève des finances publiques, l'implantation découle d'une décision royale, et l'attribution de la finale suppose un accord avec l'Espagne et le Portugal. Cela illustre exactement la limite de ce qu'un parti peut promettre.",
  },
  {
    id: 13, title: "Marocains résidant à l'étranger", group: "evenements",
    teaser: "Un des premiers équilibres de la balance des paiements, traité en second plan.",
    repere: null,
    rows: [
      ["Plusieurs formations", "Dimension MRE intégrée, avec des degrés d'attention très inégaux"],
      ["Proposition notable", "Guichet d'investissement unifié avec délais encadrés, et mécanisme « un dirham public pour trois dirhams investis » pour orienter l'épargne de la diaspora vers des investissements productifs dans les régions"],
      ["PPS", "Collectifs de Marocains du monde associés à l'élaboration du programme"],
      ["Alliance de la gauche", "Renforcement de la politique envers les MRE"],
      ["USFP", "La question n'est pas expressément mentionnée dans les 20 engagements, bien que le parti se soit exprimé dessus auparavant"],
    ],
    lecture: "Les transferts des MRE sont l'un des premiers équilibres de la balance des paiements du pays. Le sujet reste traité comme secondaire par la plupart des programmes.",
  },
  {
    id: 14, title: "Participation des femmes et des jeunes", group: "institutions",
    teaser: "Un des plus grands freins à la croissance, traité par seulement trois partis.",
    repere: "Le système électoral a été renforcé pour la représentation des femmes, avec des sièges régionaux réservés et des aides aux jeunes candidates.",
    rows: [
      ["FFD", "Quota de 33 % pour les femmes et les jeunes dans les programmes d'emploi et les postes de décision · activité féminine à 35 %"],
      ["PPS", "Taux d'activité des femmes à 25 % · associations féminines associées à l'élaboration du programme"],
      ["USFP", "Chômage des femmes sous 15 %"],
      ["Alliance de la gauche", "Égalité renforcée femmes-hommes"],
      ["MDS", "Priorité aux femmes et aux jeunes dans les candidatures"],
      ["Istiqlal, PAM, RNI", "Dispositifs jeunesse transversaux"],
    ],
    lecture: "Le très faible taux d'activité des femmes est l'un des principaux freins à la croissance marocaine. Seuls trois partis en font un objectif chiffré. C'est disproportionné par rapport à l'enjeu économique.",
  },
];

const SOURCES_FR = {
  programmes: [
    { party: "RNI", url: "programme.rni.ma" },
    { party: "PAM", url: "pam.ma/programme-electoral" },
    { party: "USFP", url: "usfp.ma/fr/20engagements" },
    { party: "PPS", url: "nz3mo.pps.ma" },
    { party: "Mouvement populaire", url: "alharaka.ma" },
    { party: "Union constitutionnelle", url: "uc2026.org/programme-electoral" },
    { party: "FFD", url: "pffd.ma/en/programme" },
    { party: "Alliance de la gauche (PSU + FGD)", url: "barnamaj.yassar.ma" },
    { party: "PJD", url: "pjd.ma — programme présenté le 7 septembre 2026" },
    { party: "Istiqlal", url: "Programme « Watani Moustaqbali », présenté le 29 août 2026" },
  ],
  institutionnelles: [
    "Maroc.ma — portail officiel, élections législatives 2026",
    "Elections.ma — ministère de l'Intérieur",
    "Haut-Commissariat au Plan — Budget économique prévisionnel 2026, Budget économique exploratoire 2027",
    "Ministère de l'Économie et des Finances — exécution de la loi de finances 2026, programmation budgétaire 2027-2029",
    "Bank Al-Maghrib — prévisions macroéconomiques",
    "Agence nationale du soutien social — bilan de l'aide sociale directe",
    "Ministère de l'Équipement et de l'Eau — situation des barrages, feuille de route dessalement",
    "HACA / CSCA — cadre de la campagne audiovisuelle",
    "CNDH — accréditation des observateurs",
  ],
  presse: [
    "Le Brief",
    "Médias24",
    "Les Inspirations ÉCO",
    "TelQuel",
    "Le Desk",
    "EcoActu",
    "Article19",
    "Le Matin",
    "Le360",
    "Hespress",
    "H24info",
    "Quid",
    "Yabiladi",
    "Libération",
    "Belpresse",
    "Maroc Hebdo",
    "Policy Center for the New South",
  ],
};

const AVANT_PROPOS_FR = [
  {
    title: "Tous les partis n'ont pas de programme comparable",
    text: "Vingt-sept formations concourent et 702 listes ont été déposées. Mais seule une douzaine a publié un programme assez détaillé pour être analysé sérieusement. Ce site le signale à chaque fois, au lieu de combler les trous.",
  },
  {
    title: "Un beau programme n'est pas une garantie",
    text: "Un parti peut publier 200 pages très précises et ne rien exécuter. Un autre peut publier dix pages et bien gouverner. Ce site évalue la qualité de l'offre écrite — pas la valeur morale des partis, ni leur capacité réelle à gouverner une fois au pouvoir.",
  },
  {
    title: "Au Maroc, les partis ne décident pas de tout",
    text: "C'est un fait institutionnel, pas un jugement. Protection sociale, politique de l'eau, énergies renouvelables, Mondial 2030, diplomatie : ces orientations sont fixées au niveau des Orientations royales puis déclinées par le gouvernement. Sur ces sujets, les programmes se ressemblent beaucoup. La vraie compétition se joue sur la fiscalité, le pouvoir d'achat, l'école, la santé de proximité, l'emploi et la gouvernance.",
  },
];

const CLOSING_LIMITS_FR = [
  {
    title: "La campagne n'est pas finie",
    text: "Elle court jusqu'au 22 septembre à minuit. Des programmes peuvent encore être complétés, des chiffres révisés, des positions précisées. Ce site est à jour au 14 septembre 2026.",
  },
  {
    title: "Aucun programme ne sera appliqué tel quel",
    text: "Avec 395 sièges et un scrutin de liste, aucun parti n'obtiendra de majorité absolue. Le prochain gouvernement sera une coalition, et son programme un compromis négocié entre plusieurs des textes présentés ici. Les mesures qui survivront seront celles sur lesquelles plusieurs partis convergent — ce qui, paradoxalement, rend les points de convergence au moins aussi prédictifs que les points de différenciation.",
  },
];

const NOTE_FINALE_FR = "Ce site ne vous dit pas pour qui voter, et c'est délibéré. Il vous donne une grille de lecture, des chiffres de référence et des questions à poser.";

/* ===================================================================
   Textes d'interface (chrome, libellés, titres statiques des pages)
   =================================================================== */
const UI_FR = {
  dir: "ltr",
  htmlLang: "fr",
  nav: {
    index: "Accueil",
    contexte: "Contexte",
    partis: "Partis",
    coherence: "Cohérence",
    axes: "Comparer par thème",
    anglesMorts: "Angles morts",
    boiteAOutils: "Questions à poser",
    sources: "Sources",
  },
  masthead: {
    line1: "Le comparateur des programmes électoraux · Maroc 2026",
    line2: "Législatives du 23 septembre 2026",
  },
  themeToggleTitle: "Changer le thème",
  langToggleLabel: "العربية",
  langToggleTitle: "Afficher le site en arabe",
  backToTop: "↑ Haut de page",
  footerNote: "Boussole ne dit pas pour qui voter. Elle donne de quoi décider soi-même. Toutes les données sont sourcées et vérifiables. À jour au {date}.",
  crumbSep: "›",
  crumbHome: "Accueil",
  siteTitleSuffix: "Boussole",
  siteTagline: "Trouvez votre cap avant le 23 septembre",
  categoryLabels: { majorite: "Majorité sortante", opposition: "Opposition", gauche: "Alliance de la gauche" },
  levelLabels: { 0: "non documenté", 1: "faible", 2: "moyen", 3: "élevé" },
  symbolLabel: "Symbole électoral",
  seatsSuffix: "sièges en 2021",
  notDocumentedCard: "Programme non documenté — voir détail.",
  updatedBadge: "Mis à jour",

  home: {
    eyebrow: "À jour au {date} — {countdown}",
    h1: "Élections législatives du 23 septembre 2026",
    lead: "Que proposent les partis marocains ? Leurs promesses tiennent-elles debout ? Et qui propose quoi sur les sujets qui comptent vraiment pour les cinq prochaines années ? Ce site répond aux trois questions, sans dire pour qui voter.",
    exploreBtn: "Explorer les partis",
    compareBtn: "Comparer par thème",
    updatesHeading: "Nouveautés de cette mise à jour",
    howToReadHeading: "Comment lire ce document",
    howToReadIntro: "Trois avertissements de méthode, importants avant de lire la suite.",
    exploreHeading: "Explorer l'analyse",
    exploreIntro: "Six entrées, selon ce que vous cherchez.",
    stats: [
      { value: "395", label: "sièges en jeu" },
      { value: "27", label: "partis en lice" },
      { value: "15,8 M", label: "électeurs inscrits" },
      { value: "23 sept.", label: "jour du scrutin" },
      { value: "11", label: "programmes analysables" },
    ],
    navCards: [
      { href: "partis.html", emoji: "🧭", title: "Découvrir les partis", text: "11 programmes analysés fiche par fiche : mesures, points forts, points faibles." },
      { href: "axes.html", emoji: "⚖️", title: "Comparer par thème", text: "14 axes stratégiques — emploi, retraites, santé, eau, éducation... — parti par parti." },
      { href: "coherence.html", emoji: "🔎", title: "Vérifier la solidité", text: "Une grille à 6 critères pour juger si un programme tient debout." },
      { href: "angles-morts.html", emoji: "🕳️", title: "Les angles morts", text: "Ce que presque aucun programme ne traite sérieusement." },
      { href: "boite-a-outils.html", emoji: "🗳️", title: "Questions à poser", text: "8 questions à poser à tout candidat qui sonne à votre porte." },
      { href: "contexte.html", emoji: "📊", title: "Le contexte du scrutin", text: "L'économie, l'emploi, le social et l'eau, en chiffres." },
    ],
    navCardGo: "Voir →",
  },

  contexte: {
    h1: "Le cadre : dans quel Maroc ces programmes atterrissent-ils ?",
    lead: "Sans ce cadre, les promesses sont illisibles. Un million d'emplois, ça ne veut rien dire si on ne sait pas combien d'emplois le pays crée réellement aujourd'hui.",
    scrutinHeading: "Le scrutin en bref",
    seatsHeading: "Répartition des sièges — point de départ (2021)",
    economieHeading: "L'économie : une bonne année dans une décennie moyenne",
    emploiHeading: "L'emploi : le chiffre le plus important de la campagne",
    socialHeading: "Le social : un édifice construit, pas encore payé",
    retraitesHeading: "Retraites : le dossier qui attend le prochain gouvernement",
    eauHeading: "L'eau : un répit, pas une solution",
    defisHeading: "Les huit défis des cinq prochaines années",
    voirAxeEmploi: "Voir l'axe emploi et insertion des jeunes →",
    voirAxeRetraites: "Voir l'axe retraites et protection sociale →",
    voirAxeEau: "Voir l'axe eau, climat et énergie →",
  },

  partis: {
    h1: "Programme par programme",
    lead: "Sur 27 partis en lice, 11 ont publié un programme suffisamment détaillé pour être analysé. Cliquez sur un parti pour voir son architecture, ses mesures principales, ses points forts et ses points faibles.",
    filterAll: "Tous les partis",
  },

  parti: {
    switchLabel: "Aller directement à un autre parti :",
    identityHeading: "Repères",
    sloganLabel: "Slogan.",
    programDateLabel: "Programme présenté.",
    programLinkLabel: "Consulter le programme officiel →",
    architectureLabel: "Architecture du programme.",
    pariLabel: "En résumé.",
    budgetHeading: "Le compte du programme",
    budgetSpendingLabel: "Dépenses.",
    budgetRevenueLabel: "Recettes.",
    measuresHeading: "Mesures principales",
    strengthsHeading: "Ce qui est fort",
    weaknessesHeading: "Ce qui est faible",
    evalHeading: "Grille d'évaluation",
    scoreNoteLabel: "Note de lecture.",
    methodNoteBefore: "Voir la",
    methodNoteLink: "méthode complète",
    methodNoteAfter: "et comparer avec les autres partis.",
    notAnalyzableLabel: "Non analysable :",
    prev: "← Précédent",
    next: "Suivant →",
    allParties: "Tous les partis",
  },

  coherence: {
    h1: "Solidité des programmes : tiennent-ils debout ?",
    lead: "Six critères, appliqués de façon identique à tous les partis.",
    tableHeading: "Tableau d'évaluation",
    tableNote: "Il ne dit pas quel parti est « le meilleur ». Il dit où chaque offre est solide et où elle est fragile — cliquez sur un parti pour voir sa fiche complète.",
    tableHeaderParti: "Parti",
    findingsHeading: "Les cinq constats",
    strategiesHeading: "Les grands chantiers nationaux de référence",
    strategiesIntro: "Le critère « alignement stratégique » se juge par rapport à ces chantiers déjà engagés.",
    structureHeading: "Ce que révèle la structure des programmes",
    structureIntro: "Au-delà des mesures, la façon dont un programme est construit dit quelque chose de la conception du pouvoir qu'il porte.",
  },

  axesListe: {
    h1: "Comparaison par axes stratégiques",
    lead: "Les axes retenus le sont en fonction de leur importance pour le Maroc des cinq prochaines années — pas en fonction de la place qu'ils occupent dans les campagnes. Choisissez un thème.",
  },

  axe: {
    switchLabel: "Aller directement à un autre axe :",
    axisOf: (n) => `Axe ${n} / 14`,
    axisBreadcrumb: (n) => `Axe ${n}`,
    pointDeRepereLabel: "Point de repère.",
    lectureLabel: "Lecture.",
    prev: "← Précédent",
    next: "Suivant →",
    allAxes: "Tous les axes",
  },

  anglesMorts: {
    h1: "Les six angles morts communs",
    lead: "Ce que presque aucun programme ne traite sérieusement — tous partis confondus.",
    voirAxe: "Voir l'axe concerné →",
  },

  boiteAOutils: {
    h1: "Boîte à outils du citoyen",
    lead: "Huit questions à poser à n'importe quel candidat, dans n'importe quelle circonscription. Elles fonctionnent parce qu'elles ne demandent pas des intentions, mais des mécanismes. Cochez celles auxquelles vous avez déjà une réponse satisfaisante — c'est gardé en mémoire sur cet appareil.",
    voirAxe: "Voir l'axe concerné →",
  },

  sources: {
    h1: "Sources",
    lead: "Programmes officiels des partis, sources institutionnelles et presse ayant servi à cette analyse.",
    hProgrammes: "Programmes officiels des partis",
    hInstitutionnelles: "Sources institutionnelles",
    hPresse: "Presse et analyses",
    hNoteFinale: "Note finale",
    hLimits: "Deux limites à garder en tête",
    rightOfReplyTitle: "Droit de réponse",
    rightOfReplyBody: "Un parti, un candidat ou un lecteur estime qu'une donnée est inexacte ? Écrivez à hamzaouhaki@gmail.com. Toute erreur avérée est corrigée, et la correction est signalée dans les nouveautés.",
  },
};
