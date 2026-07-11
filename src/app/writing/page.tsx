import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";

export default function WritingPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageIntro
        eyebrow="Writing"
        title="Notes from building things."
        description="I’ll use this space for build notes, architecture decisions, mistakes, lessons, and explanations that make my work easier to understand."
      />
    </Container>
  );
}
