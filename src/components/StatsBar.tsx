import { TrendingUp, Calendar, Building2, Zap } from "lucide-react";

const StatsBar = ({ feedCount, eventCount, competitorCount }: { feedCount: number; eventCount: number; competitorCount: number }) => {
  const stats = [
    { label: "Intel Items", value: feedCount, icon: <Zap className="h-4 w-4" />, color: "text-secondary" },
    { label: "Upcoming Events", value: eventCount, icon: <Calendar className="h-4 w-4" />, color: "text-secondary" },
    { label: "Competitors Tracked", value: competitorCount, icon: <Building2 className="h-4 w-4" />, color: "text-secondary" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-card border rounded-lg p-4 shadow-card flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <span className={s.color}>{s.icon}</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
