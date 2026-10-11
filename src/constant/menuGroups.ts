import type { TMenuGroup, TMenuGroupId } from "@/types/menu.types"

export const MENU_GROUPS: TMenuGroup[] = [
  { id: "pizze", categoryIds: ["pizze", "specials", "vegetariane"] },
  { id: "paninoni", categoryIds: ["paninoni"] },
  { id: "schiacciate", categoryIds: ["schiacciate"] }
]

export const DEFAULT_MENU_GROUP: TMenuGroupId = "pizze"

export function parseMenuGroupId(value: string | undefined): TMenuGroupId {
  return MENU_GROUPS.find((group) => group.id === value)?.id ?? DEFAULT_MENU_GROUP
}
