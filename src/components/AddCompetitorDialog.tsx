import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Plus, Globe, Building2 } from "lucide-react";

interface AddCompetitorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (competitor: { name: string; website: string; industry: string }) => void;
}

const AddCompetitorDialog = ({ open, onOpenChange, onAdd }: AddCompetitorDialogProps) => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name: name.trim(), website: website.trim(), industry: industry.trim() });
    setName("");
    setWebsite("");
    setIndustry("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <Building2 className="h-4 w-4 text-accent-foreground" />
            </div>
            Add Competitor
          </DialogTitle>
          <DialogDescription>
            Enter the competitor details to start tracking their activity.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="comp-name">Company Name</Label>
            <Input
              id="comp-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Acme Corp"
              required
              maxLength={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comp-website">Website</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="comp-website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://acme.com"
                className="pl-9"
                maxLength={255}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comp-industry">Industry / Sector</Label>
            <Input
              id="comp-industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g. Cloud Infrastructure"
              maxLength={100}
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="gap-2 gradient-navy text-primary-foreground hover:opacity-90">
              <Plus className="h-4 w-4" />
              Track Competitor
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCompetitorDialog;
