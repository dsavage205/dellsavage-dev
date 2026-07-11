import { DestinationGrid } from "@/components/home/destination-grid";
import { HeroSection } from "@/components/home/hero-section";
import { Container } from "@/components/ui/container";
import { GeometricCornerMark } from "@/components/ui/geometric-corner-mark";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_at_48%_45%,black_0%,black_24%,transparent_72%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <span className="absolute left-[8%] top-[28%] hidden size-1 rounded-full bg-[var(--accent)] opacity-70 sm:block" />
        <span className="absolute left-[8%] top-[28%] hidden h-px w-8 bg-[var(--accent)] opacity-35 sm:block" />
        <span className="absolute left-[8%] top-[28%] hidden h-8 w-px bg-[var(--accent)] opacity-35 sm:block" />

        <span className="absolute right-[24%] top-[22%] hidden size-1 rounded-full bg-[var(--accent)] opacity-60 lg:block" />
        <span className="absolute right-[24%] top-[22%] hidden h-px w-6 bg-[var(--accent)] opacity-30 lg:block" />
        <span className="absolute right-[24%] top-[22%] hidden h-6 w-px bg-[var(--accent)] opacity-30 lg:block" />
      </div>

      <GeometricCornerMark className="absolute right-5 top-8 sm:right-8 lg:right-10" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.8fr)] lg:items-end">
          <HeroSection />
          <DestinationGrid />
        </div>
      </Container>
    </div>
  );
}
