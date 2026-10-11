import { menu } from "@/content/menu"
import type { TMenu } from "@/types/menu.types"

/**
 * Server-side fetcher, called from Server Components. Today returns the
 * local fixture; swapping to a real backend call (`fetch(url, { next: {
 * revalidate } })`) is a one-file change. Never call it from a Client Component.
 */
export async function getMenu(): Promise<TMenu> {
  return menu
}
