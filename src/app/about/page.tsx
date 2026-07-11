import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-[var(--accent)]">About</p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight">
          I’m Dell Savage.
        </h1>

        <p className="mt-6 leading-7 text-[var(--muted-foreground)]">
          I’m a computer science and mathematics student interested in building
          thoughtful software, understanding the systems behind it, and making
          technology feel easier to approach.
        </p>
      </div>
    </Container>
  );
}
