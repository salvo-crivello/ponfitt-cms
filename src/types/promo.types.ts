import type { TLocalized } from "@/types/common.types"

export type TPromoOffer = {
  id: string
  /** Proper name of the offer (same in every language). */
  name: string
  description: TLocalized
  price: number
}

export type TPromo = {
  slug: string
  name: TLocalized
  tagline: TLocalized
  offers: TPromoOffer[]
}
