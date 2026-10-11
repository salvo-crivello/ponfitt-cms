export type TMenuItem = {
  id: string
  name: string
  price: number
  available: boolean
}

export type TMenuCategory = {
  id: string
  items: TMenuItem[]
}

export type TMenu = {
  categories: TMenuCategory[]
}

export type TMenuGroupId = "pizze" | "paninoni" | "schiacciate"

export type TMenuGroup = {
  id: TMenuGroupId
  /** Menu categories shown together under this chip. */
  categoryIds: string[]
}
