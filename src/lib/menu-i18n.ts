import type { TranslationFunctions } from "@/i18n/i18n-types"

/**
 * Menu category/item ids are data, so their translation keys can't be
 * statically typed. The cast lives here only; `menu-i18n.test.ts` guarantees
 * every id has a translation in every locale.
 */
type TDynamicLL = {
  categories: Record<string, () => string>
  items: Record<string, Record<string, () => string>>
}

export function getCategoryName(LL: TranslationFunctions, categoryId: string): string {
  return (LL as unknown as TDynamicLL).categories[categoryId]?.() ?? categoryId
}

export function getItemDescription(
  LL: TranslationFunctions,
  categoryId: string,
  itemId: string
): string {
  return (LL as unknown as TDynamicLL).items[categoryId]?.[itemId]?.() ?? ""
}
