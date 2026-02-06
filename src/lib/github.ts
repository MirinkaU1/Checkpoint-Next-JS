/**
 * Types pour l'API GraphQL de GitHub
 */
export interface GithubLanguage {
  name: string;
  color: string;
}

export interface GithubRepository {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  primaryLanguage: GithubLanguage | null;
}

export interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface GithubStats {
  pinnedRepos: GithubRepository[];
  contributionCalendar: ContributionCalendar;
}

interface GraphQLResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: GithubRepository[];
      };
      contributionsCollection: {
        contributionCalendar: ContributionCalendar;
      };
    };
  };
  errors?: Array<{ message: string }>;
}

/**
 * Requête GraphQL pour récupérer les stats GitHub
 */
const GITHUB_STATS_QUERY = `
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
`;

/**
 * Fetcher pour l'API GraphQL de GitHub
 * ⚠️ Cette fonction doit être appelée côté serveur uniquement
 */
export async function fetchGithubStats(username: string): Promise<GithubStats> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error(
      "GITHUB_TOKEN is not defined in environment variables. Please add it to .env.local",
    );
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GITHUB_STATS_QUERY,
        variables: { username },
      }),
      next: {
        revalidate: 3600, // Cache pour 1 heure
      },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API returned ${response.status}: ${response.statusText}`,
      );
    }

    const json: GraphQLResponse = await response.json();

    if (json.errors) {
      throw new Error(
        `GraphQL Error: ${json.errors.map((e) => e.message).join(", ")}`,
      );
    }

    return {
      pinnedRepos: json.data.user.pinnedItems.nodes,
      contributionCalendar:
        json.data.user.contributionsCollection.contributionCalendar,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    throw error;
  }
}

/**
 * Mapper les couleurs de GitHub vers Tailwind
 */
export function getContributionColor(count: number): string {
  if (count === 0) return "bg-muted/30";
  if (count <= 3) return "bg-green-300/60 dark:bg-green-900/40";
  if (count <= 6) return "bg-green-400/70 dark:bg-green-800/60";
  if (count <= 9) return "bg-green-500/80 dark:bg-green-700/80";
  return "bg-green-600 dark:bg-green-600";
}
