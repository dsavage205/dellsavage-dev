type GeometricCornerMarkProps = {
  className?: string;
};

export function GeometricCornerMark({
  className = "",
}: GeometricCornerMarkProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none hidden h-14 w-14 text-[var(--muted-foreground)] opacity-40 sm:block",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="absolute right-0 top-0 h-px w-10 bg-current" />
      <span className="absolute right-0 top-0 h-10 w-px bg-current" />
      <span className="absolute right-9 top-0 size-1 rounded-full bg-[var(--accent)]" />
      <span className="absolute right-0 top-9 size-1 rounded-full bg-current" />
    </div>
  );
}
