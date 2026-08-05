# DZF — Direction des Zones Franches

Refonte du site officiel de la Direction des Zones Franches (DZF), direction technique
déconcentrée du Ministère du Commerce et de l'Industrie d'Haïti.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4

## Démarrage

```bash
npm install
npm run dev
```

Le site est alors disponible sur [http://localhost:3000](http://localhost:3000).

Autres commandes :

```bash
npm run build   # build de production
npm run lint    # vérification ESLint
```

## Structure

```
├── src/
│   ├── app/            # routes (App Router)
│   ├── components/     # composants partagés
│   ├── drafts/         # contenu des pages en attente de développement
│   └── lib/            # navigation et utilitaires
└── public/images/      # armoiries, photographies officielles
```

## Design

L'identité visuelle reprend les couleurs du drapeau haïtien (bleu `#00209F`,
rouge `#D21034`) et les armoiries de la République, dans une mise en page de
portail institutionnel : bandeau d'identification, navigation principale,
tuiles de démarches et pied de page ministériel.

## État d'avancement

- **Accueil** — terminé
- **La DZF, Personnel, Activités, Galerie, Contact** — page « En cours de
  développement ». Le contenu rédigé pour ces sections est conservé dans
  `src/drafts/`.

## Déploiement

L'application se trouve à la racine du dépôt : Vercel détecte Next.js
automatiquement, sans réglage particulier.
