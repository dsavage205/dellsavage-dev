import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-sm text-[var(--accent)]">
            What I’m building
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            I like building software that fits together.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--muted-foreground)]">
            I’m Dell, a computer science and mathematics student. I build projects to
            solve real problems, understand how things work, and make each version a little better than the last.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#about"
              className="rounded-lg bg-[var(--foreground)] px-4 py-2.5 text-sm font-medium text-[var(--background)]"
            >
              See what I’m building
            </a>

            <a
              href="https://github.com/dsavage205"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface)]"
            >
              View GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
