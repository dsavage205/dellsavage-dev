import Link from "next/link";

import type { Destination } from "@/data/destinations";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={destination.href}
      className="group rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_45%,transparent)] p-5 transition-colors hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] motion-safe:hover:-translate-y-0.5 motion-safe:hover:transition-transform"
    >
      <div className="flex min-h-32 flex-col justify-between gap-8">
        <div>
          <p className="font-mono text-sm text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--accent)]">
            {destination.number}
          </p>

          <h2 className="mt-4 text-xl font-semibold tracking-tight transition-transform motion-safe:group-hover:translate-x-0.5">
            {destination.title}
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted-foreground)]">
            {destination.description}
          </p>
        </div>

        <span
          aria-hidden="true"
          className="self-end text-lg text-[var(--accent)] transition-transform motion-safe:group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  );
}
