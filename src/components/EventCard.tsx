import { Calendar, MapPin, Users, Building2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface EventData {
  id: string;
  name: string;
  date: string;
  location: string;
  attendingOEMs: string[];
  speakers: string[];
  clientsAttending: string[];
  url?: string;
}

const EventCard = ({ event }: { event: EventData }) => {
  return (
    <div className="bg-card border rounded-lg p-5 shadow-card hover:shadow-elevated transition-shadow animate-fade-in">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-base font-semibold text-foreground leading-snug">{event.name}</h3>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {event.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {event.location}
            </span>
          </div>
        </div>
        {event.url && (
          <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:opacity-80">
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      {event.attendingOEMs.length > 0 && (
        <div className="mb-2.5">
          <p className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1">
            <Building2 className="h-3 w-3" /> OEMs Attending
          </p>
          <div className="flex flex-wrap gap-1.5">
            {event.attendingOEMs.map((oem) => (
              <Badge key={oem} variant="outline" className="text-xs bg-accent text-accent-foreground">
                {oem}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {event.speakers.length > 0 && (
        <div className="mb-2.5">
          <p className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1">
            <Users className="h-3 w-3" /> Speakers
          </p>
          <div className="flex flex-wrap gap-1.5">
            {event.speakers.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {event.clientsAttending.length > 0 && (
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1.5">Your Clients Attending</p>
          <div className="flex flex-wrap gap-1.5">
            {event.clientsAttending.map((c) => (
              <Badge key={c} variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary/25">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
