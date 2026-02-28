import { useState } from "react";
import { Search, Plus, Bell, BarChart3, Calendar, Radar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TopBarProps {
  onAddCompetitor: () => void;
}

const TopBar = ({ onAddCompetitor }: TopBarProps) => {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-30 border-b bg-card shadow-card">
      <div className="flex h-16 items-center justify-between px-6 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="h-8 w-8 rounded-lg gradient-navy flex items-center justify-center">
            <Radar className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            IntelScope
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search competitors, events, insights…"
              className="pl-9 bg-muted border-transparent focus:border-ring"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-4.5 w-4.5" />
          </Button>
          <Button onClick={onAddCompetitor} className="gap-2 gradient-navy text-primary-foreground hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" />
            Add Competitor
          </Button>
        </div>
      </div>

      {/* Nav tabs */}
      <div className="flex px-6 gap-1 -mb-px">
        <NavTab icon={<BarChart3 className="h-4 w-4" />} label="Feed" active />
        <NavTab icon={<Calendar className="h-4 w-4" />} label="Events" />
        <NavTab icon={<Radar className="h-4 w-4" />} label="Competitors" />
      </div>
    </header>
  );
};

const NavTab = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <button
    className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
      active
        ? "border-secondary text-secondary"
        : "border-transparent text-muted-foreground hover:text-foreground"
    }`}
  >
    {icon}
    {label}
  </button>
);

export default TopBar;
