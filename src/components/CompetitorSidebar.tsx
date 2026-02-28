import { Building2, TrendingUp, Eye } from "lucide-react";

export interface CompetitorData {
  name: string;
  website: string;
  industry: string;
  lastActivity: string;
  activityCount: number;
}

const CompetitorSidebar = ({ competitors }: { competitors: CompetitorData[] }) => {
  return (
    <aside className="space-y-1">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1 mb-3">
        Tracked Competitors
      </h2>
      {competitors.length === 0 && (
        <p className="text-sm text-muted-foreground px-1">No competitors tracked yet.</p>
      )}
      {competitors.map((c) => (
        <div
          key={c.name}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/60 transition-colors cursor-pointer group"
        >
          <div className="h-9 w-9 rounded-full gradient-navy flex items-center justify-center shrink-0">
            <Building2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{c.name}</p>
            <p className="text-xs text-muted-foreground truncate">{c.industry || c.website}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            <Eye className="h-3 w-3" />
            {c.activityCount}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default CompetitorSidebar;
