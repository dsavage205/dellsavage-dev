import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/ui/destination-card";

export function DestinationGrid() {
  return (
    <section aria-label="Primary site destinations">
      <div className="grid gap-4 sm:grid-cols-2">
        {destinations.map((destination) => (
          <DestinationCard key={destination.href} destination={destination} />
        ))}
      </div>
    </section>
  );
}
