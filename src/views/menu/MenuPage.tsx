import { getMenu } from "@/lib/menu-client"
import { FamilyNote } from "@/views/menu/sections/FamilyNote"
import { MenuList } from "@/views/menu/sections/MenuList"

export async function MenuPage() {
  const menu = await getMenu()

  return (
    <main className="px-4 pb-20">
      <MenuList categories={menu.categories} />
      <FamilyNote />
    </main>
  )
}
