import { GithubRepository } from "@/lib/github";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";

interface GithubRepoCardProps {
  repo: GithubRepository;
}

export function GithubRepoCard({ repo }: GithubRepoCardProps) {
  return (
    <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold leading-tight line-clamp-1">
            {repo.name}
          </CardTitle>
          <Link
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
          {repo.description || "Pas de description disponible"}
        </p>

        <div className="flex items-center justify-between">
          {repo.primaryLanguage && (
            <div className="flex items-center gap-1.5">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: repo.primaryLanguage.color }}
              />
              <span className="text-xs text-muted-foreground">
                {repo.primaryLanguage.name}
              </span>
            </div>
          )}

          {repo.stargazerCount > 0 && (
            <Badge variant="secondary" className="gap-1">
              <Star className="h-3 w-3 fill-current" />
              {repo.stargazerCount}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
