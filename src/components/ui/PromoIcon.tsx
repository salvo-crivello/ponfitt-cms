import { GraduationCap, Tag, TrainFront, type LucideIcon } from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  "menu-ferroviari": TrainFront,
  "menu-studenti": GraduationCap
}

export function PromoIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = ICONS[slug] ?? Tag

  return <Icon className={className} aria-hidden />
}
