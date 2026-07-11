import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";

export default function WorkPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageIntro
        eyebrow="Work"
        title="Products and systems I’m building."
        description="This is where I’ll document projects that are ready to share publicly, including the problems they solve, the decisions behind them, and what I learned while building them."
      />
    </Container>
  );
}
