import { fetchGithubStats } from "@/lib/github";
import { GithubRepoCard } from "@/components/github-repo-card";
import { GithubCalendar } from "@/components/github-calendar";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface GithubStatsProps {
  username: string;
}

/**
 * Composant Server pour afficher les stats GitHub
 * ⚠️ Ce composant fetch les données côté serveur pour ne jamais exposer le token
 */
async function GithubStatsContent({ username }: GithubStatsProps) {
  try {
    const stats = await fetchGithubStats(username);

    return (
      <div className="space-y-8">
        {/* Repos épinglés */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Projets épinglés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.pinnedRepos.map((repo) => (
              <GithubRepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </div>

        {/* Calendrier de contributions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Activité GitHub</h3>
          <GithubCalendar calendar={stats.contributionCalendar} />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center">
        <p className="text-sm text-destructive">
          Impossible de charger les statistiques GitHub.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          {error instanceof Error ? error.message : "Erreur inconnue"}
        </p>
      </div>
    );
  }
}

/**
 * Skeleton loading pour les stats GitHub
 */
function GithubStatsLoading() {
  return (
    <div className="space-y-8">
      {/* Repos skeleton */}
      <div>
        <Skeleton className="h-7 w-48 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border rounded-lg p-4 space-y-3">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar skeleton */}
      <div>
        <Skeleton className="h-7 w-56 mb-4" />
        <div className="border rounded-lg p-6">
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </div>
  );
}

/**
 * Composant principal avec Suspense boundary
 */
export function GithubSection({ username }: GithubStatsProps) {
  return (
    <section id="opensource" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Contributions GitHub
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed">
          Mes projets et contributions open source
        </p>
      </div>

      <Suspense fallback={<GithubStatsLoading />}>
        <GithubStatsContent username={username} />
      </Suspense>
    </section>
  );
}
