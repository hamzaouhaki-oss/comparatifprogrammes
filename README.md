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
css/styles.css   → mise en forme visuelle (couleurs, thème clair/sombre, mise en page)
js/data.js       → tout le contenu (partis, chiffres, axes de comparaison, sources...)
js/common.js     → en-tête, menu, pied de page (identiques sur toutes les pages)
js/app.js        → génère le contenu de chaque page à partir de js/data.js
```

## Mettre à jour le contenu

Tout le texte affiché sur le site vient du fichier **`js/data.js`**. Pour corriger un chiffre, ajouter un parti ou modifier une analyse, il suffit de modifier ce fichier (c'est un fichier texte, lisible sans compétence en programmation) puis de recharger la page dans le navigateur — aucune compilation n'est nécessaire. Les pages qui listent les partis ou les axes (`partis.html`, `axes.html`, les tableaux de `coherence.html`...) se mettent à jour automatiquement.

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

Les couleurs de RNI, PAM, Istiqlal, USFP, MP, PPS, PJD et UC reprennent la couleur officielle indiquée par leur fiche Wikipédia/Wikidata. Pour FFD, l'Alliance de la gauche et le MDS (aucune source publique fiable sur leur couleur officielle), la couleur retenue est reprise de leur symbole électoral ci-dessus. Modifiable dans `js/data.js`, propriété `color` de chaque parti.

Document d'analyse arrêté au 12 septembre 2026. Le site ne recommande aucun vote.
