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

Document d'analyse arrêté au 12 septembre 2026. Le site ne recommande aucun vote.
