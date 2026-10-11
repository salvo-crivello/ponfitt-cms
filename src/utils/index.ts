import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { TLunchDayId, TWeekdayId } from "@/types/lunch.types"
import type { TPromo } from "@/types/promo.types"

/**
 * Merges conditional Tailwind CSS classes and resolves conflicting utilities.
 *
 * @param inputs - Class names or conditional class values to merge.
 * @returns A merged className string with conflicting Tailwind utilities resolved.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a euro amount with the locale of the given language.
 */
export function formatPrice(amount: number, lang: string, fractionDigits = 2) {
  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }).format(amount)
}

/**
 * Builds a `tel:` href from a human-readable phone number.
 */
export function toTelHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`
}

/**
 * Builds a WhatsApp chat link (`wa.me` wants digits only, with country code).
 */
export function toWhatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`
}

/**
 * Cheapest price of a promo, and whether the offers differ in price
 * (so the UI can say "from 5 €" instead of "5 €").
 */
export function getPromoPrice({ offers }: TPromo) {
  const prices = offers.map((offer) => offer.price)
  const amount = Math.min(...prices)

  return { amount, isFrom: prices.some((price) => price !== amount) }
}

const WEEKDAYS: TWeekdayId[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

/**
 * Day of the week in Italy, whatever the visitor's own timezone is.
 */
export function getWeekdayInRome(date: Date = new Date()): TWeekdayId {
  const short = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "Europe/Rome"
  }).format(date)

  return WEEKDAYS.find((id) => id === short.slice(0, 3).toLowerCase()) ?? "mon"
}

/**
 * The lunch dish to highlight: today's on weekdays, Monday's over the weekend.
 */
export function getLunchDayId(weekday: TWeekdayId): TLunchDayId {
  return weekday === "sat" || weekday === "sun" ? "mon" : weekday
}
