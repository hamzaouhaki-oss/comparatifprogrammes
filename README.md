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

## Structure du projet

```
index.html        → structure de la page (une seule page, plusieurs sections)
css/styles.css     → mise en forme visuelle (couleurs, thème clair/sombre, mise en page)
js/data.js         → tout le contenu (partis, chiffres, axes de comparaison, sources...)
js/app.js          → génère automatiquement les pages à partir de js/data.js
```

## Mettre à jour le contenu

Tout le texte affiché sur le site vient du fichier **`js/data.js`**. Pour corriger un chiffre, ajouter un parti ou modifier une analyse, il suffit de modifier ce fichier (c'est un fichier texte, lisible sans compétence en programmation) puis de recharger la page dans le navigateur — aucune compilation n'est nécessaire.

## Contenu

Le site reprend l'intégralité de l'analyse :
- Le cadre électoral et économique 2026 (partie 1)
- Les 11 partis dont le programme a pu être analysé, fiche par fiche (partie 2)
- La grille de cohérence à 6 critères et les 5 constats transversaux (partie 3)
- La comparaison sur 14 axes stratégiques (partie 4)
- Les 6 angles morts communs à la campagne (partie 5)
- Les 8 questions à poser à un candidat (partie 6)
- Les sources (partie 7)

Document d'analyse arrêté au 12 septembre 2026. Le site ne recommande aucun vote.
