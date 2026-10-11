import type { TLocalized } from "@/types/common.types"

export type TLunchDayId = "mon" | "tue" | "wed" | "thu" | "fri"

export type TWeekdayId = TLunchDayId | "sat" | "sun"

export type TLunchDay = {
  id: TLunchDayId
  name: TLocalized
  description: TLocalized
  variants?: TLocalized[]
}

export type TLunchMenu = {
  /** One flat price for every dish of the week. */
  price: number
  days: TLunchDay[]
}
