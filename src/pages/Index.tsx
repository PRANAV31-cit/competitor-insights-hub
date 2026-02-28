import { useState } from "react";
import TopBar from "@/components/TopBar";
import AddCompetitorDialog from "@/components/AddCompetitorDialog";
import FeedCard from "@/components/FeedCard";
import EventCard from "@/components/EventCard";
import CompetitorSidebar from "@/components/CompetitorSidebar";
import StatsBar from "@/components/StatsBar";
import { mockCompetitors, mockFeed, mockEvents } from "@/data/mockData";
import type { CompetitorData } from "@/components/CompetitorSidebar";
import type { FeedItemData } from "@/components/FeedCard";
import type { EventData } from "@/components/EventCard";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [competitors, setCompetitors] = useState<CompetitorData[]>(mockCompetitors);
  const [feed] = useState<FeedItemData[]>(mockFeed);
  const [events] = useState<EventData[]>(mockEvents);

  const handleAddCompetitor = (c: { name: string; website: string; industry: string }) => {
    setCompetitors((prev) => [
      { ...c, lastActivity: "Just now", activityCount: 0 },
      ...prev,
    ]);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar onAddCompetitor={() => setDialogOpen(true)} />
      <AddCompetitorDialog open={dialogOpen} onOpenChange={setDialogOpen} onAdd={handleAddCompetitor} />

      <div className="max-w-7xl mx-auto px-6 py-6">
        <StatsBar feedCount={feed.length} eventCount={events.length} competitorCount={competitors.length} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          {/* Main feed */}
          <div className="space-y-6">
            {/* Events section */}
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Upcoming Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>

            {/* Intelligence Feed */}
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Intelligence Feed
              </h2>
              <div className="space-y-4">
                {feed.map((item) => (
                  <FeedCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-[7.5rem]">
              <CompetitorSidebar competitors={competitors} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
