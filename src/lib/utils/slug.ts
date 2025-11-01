export function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateCandidateSlug(name: string, fallback: string = "organization") {
  const base = slugify(name);
  return base.length > 0 ? base : fallback;
}
