import { Newspaper, BookOpen, Mic, Video, Rocket, FileText, ExternalLink, Clock, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type FeedItemType = "service_launch" | "case_study" | "podcast" | "vlog" | "news" | "press_release";

export interface FeedItemData {
  id: string;
  competitor: string;
  type: FeedItemType;
  title: string;
  summary: string;
  source: string;
  date: string;
  url?: string;
}

const typeConfig: Record<FeedItemType, { icon: React.ReactNode; label: string; badgeClass: string }> = {
  service_launch: { icon: <Rocket className="h-3.5 w-3.5" />, label: "Service Launch", badgeClass: "bg-secondary/15 text-secondary border-secondary/25" },
  case_study: { icon: <BookOpen className="h-3.5 w-3.5" />, label: "Case Study", badgeClass: "bg-accent text-accent-foreground" },
  podcast: { icon: <Mic className="h-3.5 w-3.5" />, label: "Podcast", badgeClass: "bg-accent text-accent-foreground" },
  vlog: { icon: <Video className="h-3.5 w-3.5" />, label: "Vlog", badgeClass: "bg-accent text-accent-foreground" },
  news: { icon: <Newspaper className="h-3.5 w-3.5" />, label: "News", badgeClass: "bg-muted text-muted-foreground" },
  press_release: { icon: <FileText className="h-3.5 w-3.5" />, label: "Press Release", badgeClass: "bg-muted text-muted-foreground" },
};

const FeedCard = ({ item }: { item: FeedItemData }) => {
  const config = typeConfig[item.type];

  return (
    <article className="bg-card border rounded-lg p-5 shadow-card hover:shadow-elevated transition-shadow animate-fade-in">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full gradient-navy flex items-center justify-center shrink-0">
            <Building2 className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{item.competitor}</p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {item.date}
            </div>
          </div>
        </div>
        <Badge variant="outline" className={`shrink-0 gap-1 text-xs font-medium ${config.badgeClass}`}>
          {config.icon}
          {config.label}
        </Badge>
      </div>

      <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">{item.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.summary}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Source: {item.source}</span>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-secondary hover:underline flex items-center gap-1"
          >
            Read more <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </article>
  );
};

export default FeedCard;
