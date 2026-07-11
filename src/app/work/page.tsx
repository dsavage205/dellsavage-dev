import { Container } from "@/components/ui/container";

export default function WorkPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-[var(--accent)]">Work</p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight">
          Products and systems I’m building.
        </h1>

        <p className="mt-6 leading-7 text-[var(--muted-foreground)]">
          This is where I’ll document projects that are ready to share publicly,
          including the problems they solve, the decisions behind them, and what
          I learned while building them.
        </p>
      </div>
    </Container>
  );
}
