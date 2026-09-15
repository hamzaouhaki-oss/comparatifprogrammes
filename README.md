# Comparatif des programmes électoraux — Maroc 2026

Site web statique (HTML/CSS/JS, sans installation ni build) qui présente l'analyse des programmes électoraux des partis marocains pour les législatives du 23 septembre 2026 : leur contenu, leur niveau de cohérence, et leur comparaison sur les axes stratégiques.

## Voir le site

Aucune installation n'est nécessaire.

**Option 1 — le plus simple** : ouvrez le fichier `index.html` directement dans votre navigateur (double-clic dessus).

**Option 2 — via un petit serveur local** (utile si votre navigateur bloque certains fichiers en ouverture directe) :

```bash
python3 -m http.server 8000
```

puis ouvrez `http://localhost:8000` dans votre navigateur.

## Mettre le site en ligne gratuitement (GitHub Pages)

1. Dans les paramètres du dépôt GitHub (`Settings` → `Pages`).
2. Choisissez la branche à publier (ex. `main`) et le dossier racine `/`.
3. GitHub vous donne une adresse en `https://<votre-compte>.github.io/<nom-du-dépôt>/` — le site est en ligne.

## Structure du site (plusieurs pages, pas une seule page qui défile)

Chaque grande section a sa propre page, avec fil d'Ariane et liens de navigation :

```
index.html            → Accueil : chiffres-clés + accès aux 6 sections
contexte.html          → Le cadre économique et social du scrutin
partis.html            → Liste des 11 partis analysés (filtrable)
parti.html?id=...       → Fiche détaillée d'un parti (une page par parti, ex. parti.html?id=rni)
coherence.html         → Grille d'évaluation à 6 critères + constats transversaux
axes.html              → Liste des 14 axes stratégiques, groupés par thème
axe.html?id=...         → Détail d'un axe (une page par axe, ex. axe.html?id=3)
angles-morts.html      → Les 6 angles morts communs à la campagne
boite-a-outils.html    → Les 8 questions à poser à un candidat (avec cases à cocher)
sources.html           → Sources primaires, institutionnelles et presse
```

`parti.html` et `axe.html` sont des pages « modèles » : une seule affiche 11 fiches de partis différentes (ou 14 axes) selon le `?id=` dans l'adresse — donc chaque parti et chaque axe a bien sa propre adresse, partageable et consultable au clavier avec Précédent/Suivant, sans dupliquer 25 fichiers presque identiques.

Fichiers techniques communs à toutes les pages :

```
css/styles.css   → mise en forme visuelle (couleurs, thème clair/sombre, RTL, mise en page)
js/data.js       → tout le contenu en français (partis, chiffres, axes, sources, textes d'interface)
js/data.ar.js    → la traduction arabe complète, même structure, suffixe _AR
js/i18n.js       → choisit FR ou AR selon la préférence enregistrée, applique le sens de lecture
js/common.js     → en-tête, menu, pied de page (identiques sur toutes les pages)
js/app.js        → génère le contenu de chaque page à partir des données dans la langue active
```

## Mettre à jour le contenu

Tout le texte affiché sur le site vient des fichiers **`js/data.js`** (français) et **`js/data.ar.js`** (arabe). Pour corriger un chiffre, ajouter un parti ou modifier une analyse, modifiez l'entrée correspondante dans les deux fichiers (ce sont des fichiers texte, lisibles sans compétence en programmation) puis rechargez la page — aucune compilation n'est nécessaire. Les pages qui listent les partis ou les axes (`partis.html`, `axes.html`, les tableaux de `coherence.html`...) se mettent à jour automatiquement.

## Site bilingue (français / عربي)

Un bouton en haut de chaque page (à côté du sélecteur de thème) bascule tout le site — contenu, navigation et sens de lecture — entre le français et l'arabe. Le choix est mémorisé sur l'appareil (comme le thème clair/sombre) et s'applique immédiatement à la page suivante consultée.

- **Traduction complète et professionnelle**, pas une traduction automatique mot à mot : les 11 fiches de partis, les 14 axes, le contexte, les constats, les angles morts, la boîte à outils et tous les libellés de l'interface existent intégralement dans `js/data.ar.js`, avec une terminologie politique et économique appropriée à l'arabe standard moderne.
- **Mise en page adaptée (RTL)** : en arabe, toute la page s'inverse (navigation, fil d'Ariane, précédent/suivant, barres de score, listes) — ce n'est pas seulement le texte qui change de langue, c'est le sens de lecture de l'interface entière. Les acronymes latins des partis (RNI, PJD...) restent volontairement en écriture occidentale au milieu du texte arabe, comme c'est l'usage dans la presse marocaine.
- **Police adaptée** : l'arabe utilise la police Cairo (Google Fonts), pensée pour rester lisible à l'écran ; le français garde Public Sans.
- **Pour ajouter ou corriger une traduction** : chaque entrée de `js/data.ar.js` porte le même nom que son équivalent français avec le suffixe `_AR` (ex. `PARTIES_FR` / `PARTIES_AR`), dans le même ordre et la même structure — il suffit de comparer les deux fichiers côte à côte. Les textes d'interface (boutons, titres de section, libellés) sont regroupés dans `UI_FR` / `UI_AR` à la fin de chaque fichier.

## Contenu

Le site reprend l'intégralité de l'analyse :
- Le cadre électoral et économique 2026 (partie 1) → `contexte.html`
- Les 11 partis dont le programme a pu être analysé, fiche par fiche (partie 2) → `partis.html` + `parti.html`
- La grille de cohérence à 6 critères et les 5 constats transversaux (partie 3) → `coherence.html`
- La comparaison sur 14 axes stratégiques, groupés par thème (partie 4) → `axes.html` + `axe.html`
- Les 6 angles morts communs à la campagne (partie 5) → `angles-morts.html`
- Les 8 questions à poser à un candidat (partie 6) → `boite-a-outils.html`
- Les sources (partie 7) → `sources.html`

Les pages se renvoient les unes aux autres à chaque fois que c'est pertinent : un nom de parti dans un tableau d'axe renvoie à sa fiche, un angle mort renvoie à l'axe concerné, une question de la boîte à outils renvoie à l'axe qu'elle interroge.

## Charte graphique

Inspirée d'interfaces éditoriales sobres (fond blanc et fond noir tous deux volontairement neutres, typographie **Public Sans**, grille aérée) plutôt que d'un style « site politique » classique.

- **Un bandeau à deux niveaux en haut de chaque page** : une fine ligne institutionnelle (« Analyse indépendante · Royaume du Maroc »), puis la navigation principale avec l'emblème du site et les 8 sections. Cet en-tête et le pied de page (qui reprend les mêmes liens) restent identiques sur tout le site, y compris sur les pages de parti, pour ne jamais perdre le repère de navigation.
- **Rouge et vert du drapeau marocain, toujours utilisés ensemble** sur les éléments de marque (bandeau sous l'en-tête, cartes de la page d'accueil, encadrés « point de repère »/« lecture ») plutôt que l'un sans l'autre sur un même élément — un rappel discret du drapeau plutôt qu'un aplat d'une seule couleur. Le vert sert aussi d'identité à la section « comparer par thème », et les deux couleurs structurent la grille d'évaluation (rouge = faible, or = moyen, vert = élevé).
- **Une troisième teinte (bleu encre)** est réservée aux chiffres-clés de la page d'accueil, justement pour qu'ils ne soient pas noyés dans le rouge/vert de marque.
- **Page d'un parti** (`parti.html?id=...`) : reprend la couleur propre à ce parti (bandeau de tête, titres, badges). Là encore, l'en-tête et le pied de page restent neutres.
- **Emblème du site** : un mark original (carré rouge, étoile verte à 5 branches) qui évoque le drapeau sans reproduire un sceau officiel — ce n'est pas un logo gouvernemental.

### Emblèmes des partis — un point important à lire

Vous m'avez demandé de chercher les vrais logos sur les sites des partis, la presse ou les réseaux sociaux. **Je ne peux pas le faire depuis cet environnement** : j'ai testé l'accès (sites des partis, Wikipédia, Google) et tout est bloqué par la politique réseau de la session — ce n'est pas négociable ni contournable de mon côté, et mes outils de lecture web ne peuvent de toute façon renvoyer que du texte, jamais un fichier image.

À la place, j'ai vérifié — par recherche textuelle, donc factuel et sourcé — le **symbole électoral réel** de chaque parti (le pictogramme attribué à chaque parti sur les bulletins de vote marocains, historiquement pour les électeurs non-alphabétisés), et j'ai redessiné chacun en vectoriel :

| Parti | Symbole électoral réel |
|---|---|
| RNI | La colombe |
| PAM | Le tracteur |
| Istiqlal | La balance |
| USFP | La rose |
| MP | L'épi de blé |
| PPS | Le livre |
| PJD | La lampe (le flambeau) |
| UC | Le cheval |
| FFD | Le rameau d'olivier |
| Alliance de la gauche | La bougie (symbole du PSU) |
| MDS | Le palmier |

Aucun de ces dessins n'est le fichier logo officiel du parti — ce sont mes propres illustrations de leur symbole réel, pas une reproduction de leur charte graphique. Si vous obtenez un jour de vrais fichiers de logo dont vous avez les droits d'usage, déposez-les dans `assets/logos/` sous le nom `<id>.svg` (ou `.png`) — le site les affichera automatiquement à la place, sans toucher au code. Identifiants : `rni`, `pam`, `istiqlal`, `usfp`, `mp`, `pps`, `pjd`, `uc`, `ffd`, `gauche`, `mds`.

### Couleurs des partis

Les couleurs de RNI, PAM, Istiqlal, USFP et MP reprennent la couleur officielle indiquée par leur fiche Wikipédia/Wikidata. Pour PJD et UC, la couleur retenue reprend celle des visuels de logo transmis par l'utilisateur (bleu marine + flamme orange pour le PJD, cheval brun-roux pour l'UC). Pour FFD, l'Alliance de la gauche et le MDS (aucune source publique fiable sur leur couleur officielle), la couleur retenue est reprise de leur symbole électoral ci-dessus. Modifiable dans `js/data.js`, propriété `color` de chaque parti.

## Mise à jour du 14 septembre 2026

Le contenu a été entièrement révisé à partir d'une nouvelle version de l'analyse. Ce qui a changé :

- **Correction de classement** : l'UC et le MDS sont désormais rattachés à la **majorité** (les deux formations avaient rejoint la majorité gouvernementale en cours de législature ; elles étaient classées dans l'opposition).
- **Trois programmes nouvellement documentés** : le PPS (2 septembre, le seul programme entièrement chiffré de la campagne), l'UC (7 septembre) et le « Contrat haraki » du MP.
- **Notes révisées** : le PPS passe de ● à ●●● en « financement » après publication de son compte complet dépenses/recettes.
- **Nouveaux éléments sur chaque fiche de parti** : slogan, date de présentation du programme, lien vers le programme officiel, résumé éditorial, repères factuels en puces, et — pour le PPS — le détail de son compte (575 MMDH de dépenses / 622 MMDH de recettes).
- **Nouvelles sections** : bandeau « Nouveautés » sur l'accueil, les 11 grands chantiers nationaux de référence sur la page cohérence, les formations sans programme comparable sur la page partis, et un droit de réponse sur la page sources.

Tout cela existe en français **et** en arabe : `js/data.js` et `js/data.ar.js` ont exactement la même structure (voir plus haut).

Document d'analyse à jour au 14 septembre 2026. Le site ne recommande aucun vote.
