import { HeroSection } from "@/components/home/hero-section";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section
        id="about"
        className="border-t border-[var(--border)] py-16 sm:py-20"
      >
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
            <p className="font-mono text-sm text-[var(--accent)]">
              What I’m focused on
            </p>

            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Every project teaches me something for the next one.
              </h2>

              <p className="mt-4 leading-7 text-[var(--muted-foreground)]">
                This is where I’ll share the projects I’m building, the decisions behind them, and
                the things I learn when something doesn’t work the first time.
                I’m starting small and adding to the site as I have something worth showing.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
