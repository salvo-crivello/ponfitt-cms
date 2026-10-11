import {
  CalendarCheck,
  CreditCard,
  Bike,
  Leaf,
  ShoppingBag,
  Sun,
  Users,
  UtensilsCrossed,
  type LucideIcon
} from "lucide-react"

import type { TFeatureId } from "@/types/business.types"

const ICONS: Record<TFeatureId, LucideIcon> = {
  dineIn: UtensilsCrossed,
  takeaway: ShoppingBag,
  delivery: Bike,
  outdoor: Sun,
  reservations: CalendarCheck,
  family: Users,
  payments: CreditCard,
  vegetarian: Leaf
}

export function FeatureIcon({ id, className }: { id: TFeatureId; className?: string }) {
  const Icon = ICONS[id]

  return <Icon className={className} aria-hidden />
}
