import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)]">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} homepage`}
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg border border-[var(--border)] font-mono text-sm font-semibold"
          >
            DS
          </span>

          <span className="leading-tight">
            <span className="block text-sm font-semibold">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-[var(--muted-foreground)] sm:block">
              Building one piece at a time.
            </span>
          </span>
        </Link>

        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
        >
          GitHub
        </a>
      </Container>
    </header>
  );
}
