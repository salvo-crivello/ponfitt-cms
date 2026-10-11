import { MENU_GROUPS } from "@/constant/menuGroups"
import { getMenu } from "@/lib/menu-client"
import type { TMenuGroupId } from "@/types/menu.types"
import { FamilyNote } from "@/views/menu/sections/FamilyNote"
import { MenuChips } from "@/views/menu/sections/MenuChips"
import { MenuSubtitle, MenuTitle } from "@/views/menu/sections/MenuHeader"
import { MenuList } from "@/views/menu/sections/MenuList"

export async function MenuPage({ groupId }: { groupId: TMenuGroupId }) {
  const menu = await getMenu()
  const group = MENU_GROUPS.find(({ id }) => id === groupId)
  const categories = menu.categories.filter(({ id }) => group?.categoryIds.includes(id))

  return (
    <main className="mx-auto max-w-4xl px-4">
      <MenuTitle />
      <MenuChips activeId={groupId} />
      <MenuSubtitle groupId={groupId} />
      <MenuList categories={categories} />
      {groupId === "pizze" && <FamilyNote />}
    </main>
  )
}
