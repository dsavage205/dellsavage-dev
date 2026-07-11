import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container className="flex flex-col gap-2 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p>Built one piece at a time by {siteConfig.name}.</p>

        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-[var(--foreground)]"
        >
          GitHub
        </a>
      </Container>
    </footer>
  );
}
