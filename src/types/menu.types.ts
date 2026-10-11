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
