import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";

export default function LabsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageIntro
        eyebrow="Labs"
        title="Experiments, prototypes, and ideas."
        description="This section is for experiments with local AI, infrastructure, automation, interface ideas, and the projects that help me figure out what is worth building next."
      />
    </Container>
  );
}
