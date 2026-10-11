import { Pizza, Sandwich, Wheat, type LucideIcon } from "lucide-react"

import type { TMenuGroupId } from "@/types/menu.types"

const ICONS: Record<TMenuGroupId, LucideIcon> = {
  pizze: Pizza,
  paninoni: Sandwich,
  schiacciate: Wheat
}

export function MenuGroupIcon({ id, className }: { id: TMenuGroupId; className?: string }) {
  const Icon = ICONS[id]

  return <Icon className={className} aria-hidden />
}
