import { Container } from "@/components/ui/container";

export default function WritingPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-[var(--accent)]">Writing</p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight">
          Notes from building things.
        </h1>

        <p className="mt-6 leading-7 text-[var(--muted-foreground)]">
          I’ll use this space for build notes, architecture decisions, mistakes,
          lessons, and explanations that make my work easier to understand.
        </p>
      </div>
    </Container>
  );
}
