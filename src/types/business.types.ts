import type { TLocalized } from "@/types/common.types"

export type TSocialId = "instagram" | "facebook"

export type TFeatureId =
  | "dineIn"
  | "takeaway"
  | "delivery"
  | "outdoor"
  | "reservations"
  | "family"
  | "payments"
  | "vegetarian"

export type TDeliveryPartner = {
  id: "glovo" | "justeat"
  name: string
  url: string
}

export type TBusiness = {
  phone: string
  /** WhatsApp number the pizzeria uses for its daily updates. */
  whatsapp: string
  /** One entry per line (street and number, then postcode and city). */
  address: string[]
  mapsUrl: string
  reviewUrl: string
  hours: { days: TLocalized; time: TLocalized }[]
  features: TFeatureId[]
  delivery: TDeliveryPartner[]
  socials: { id: TSocialId; url: string }[]
}
