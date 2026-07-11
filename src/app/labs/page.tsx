import { Container } from "@/components/ui/container";

export default function LabsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-[var(--accent)]">Labs</p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight">
          Experiments, prototypes, and ideas.
        </h1>

        <p className="mt-6 leading-7 text-[var(--muted-foreground)]">
          This section is for experiments with local AI, infrastructure,
          automation, interface ideas, and the projects that help me figure out
          what is worth building next.
        </p>
      </div>
    </Container>
  );
}
