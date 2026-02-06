# 🚀 Section Open Source - GitHub Integration

## 📋 Présentation

Cette section affiche automatiquement vos statistiques GitHub en utilisant l'API GraphQL officielle :

- ✅ **Repos épinglés** : Affichage des dépôts que vous avez épinglés sur votre profil
- ✅ **Calendrier de contributions** : Heatmap de vos contributions sur l'année
- ✅ **Design moderne** : Interface "Bento Grid" avec Tailwind CSS
- ✅ **TypeScript strict** : Pas de `any`, types complets
- ✅ **Server-side rendering** : Données fetchées côté serveur pour ne jamais exposer le token

## 🔧 Configuration

### 1. Token GitHub

Créez un Personal Access Token sur GitHub :

1. Allez sur https://github.com/settings/tokens
2. Cliquez sur "Generate new token" → "Generate new token (classic)"
3. Donnez un nom descriptif (ex: "Portfolio API")
4. Sélectionnez les scopes suivants :
   - ✅ `read:user`
   - ✅ `public_repo`
5. Générez le token et copiez-le

### 2. Variable d'environnement

Ajoutez votre token dans `.env.local` :

```env
GITHUB_TOKEN=ghp_votreTokenIci...
```

⚠️ **IMPORTANT** : Ne commitez JAMAIS ce fichier ! Il est déjà dans `.gitignore`.

### 3. Username GitHub

Dans `src/data/resume.tsx`, mettez à jour votre username :

```typescript
export const DATA = {
  // ... autres données
  githubUsername: "VotreUsername",
  // ...
};
```

## 📁 Architecture des fichiers

```
src/
├── lib/
│   └── github.ts                 # Fetcher GraphQL + Types TypeScript
├── components/
│   ├── github-section.tsx        # Composant principal (Server Component)
│   ├── github-repo-card.tsx      # Carte pour un repo
│   ├── github-calendar.tsx       # Calendrier de contributions (Client Component)
│   └── ui/
│       └── skeleton.tsx          # Composant de loading
└── app/
    └── page.tsx                  # Page principale (section ajoutée)
```

## 🎨 Personnalisation

### Modifier le nombre de repos

Dans `src/lib/github.ts`, ligne 59 :

```typescript
pinnedItems(first: 6, types: REPOSITORY) {  // Change 6 par le nombre voulu
```

### Modifier les couleurs du calendrier

Dans `src/lib/github.ts`, fonction `getContributionColor()` :

```typescript
export function getContributionColor(count: number): string {
  if (count === 0) return "bg-muted/30";
  if (count <= 3) return "bg-green-300/60 dark:bg-green-900/40";
  // ... modifiez les couleurs Tailwind ici
}
```

### Modifier le cache

Dans `src/lib/github.ts`, ligne 101 :

```typescript
next: {
  revalidate: 3600, // Cache en secondes (3600 = 1 heure)
},
```

## 🔍 Requête GraphQL utilisée

```graphql
query GetGithubStats($username: String!) {
  user(login: $username) {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          primaryLanguage {
            name
            color
          }
        }
      }
    }
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
    }
  }
}
```

## 🐛 Troubleshooting

### Erreur "GITHUB_TOKEN is not defined"

→ Vérifiez que `.env.local` existe et contient `GITHUB_TOKEN=...`

### Les données ne s'affichent pas

→ Vérifiez que votre username GitHub est correct dans `resume.tsx`
→ Vérifiez que votre token a les bons scopes

### Erreur 401 Unauthorized

→ Votre token est invalide ou expiré, générez-en un nouveau

### Le calendrier est vide

→ Normal si vous n'avez pas de contributions récentes
→ Les contributions privées ne sont pas comptées par défaut

## 📚 Technologies utilisées

- **Next.js 14** : Server Components + App Router
- **TypeScript** : Types stricts pour l'API GraphQL
- **Tailwind CSS** : Styling moderne et responsive
- **Shadcn UI** : Composants UI (Card, Badge, Skeleton)
- **Lucide React** : Icônes (Star, ExternalLink, etc.)

## 🚀 Déploiement

Sur Vercel, ajoutez la variable d'environnement :

1. Allez dans Settings → Environment Variables
2. Ajoutez `GITHUB_TOKEN` avec votre token
3. Redéployez l'application

---

**Créé avec ❤️ par un Senior Frontend Engineer**
