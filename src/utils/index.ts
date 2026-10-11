import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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
export function formatPrice(amount: number, lang: string) {
  return new Intl.NumberFormat(lang, { style: "currency", currency: "EUR" }).format(amount)
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
