import { DestinationGrid } from "@/components/home/destination-grid";
import { HeroSection } from "@/components/home/hero-section";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.8fr)] lg:items-end">
        <HeroSection />
        <DestinationGrid />
      </div>
    </Container>
  );
}
