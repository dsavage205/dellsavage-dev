import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageIntro
        eyebrow="About"
        title="I’m Dell Savage."
        description="I’m a computer science and mathematics student interested in building thoughtful software, understanding the systems behind it, and making technology feel easier to approach."
      />
    </Container>
  );
}
