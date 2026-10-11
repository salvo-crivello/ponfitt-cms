import type { Metadata } from "next"

import { parseMenuGroupId } from "@/constant/menuGroups"
import { MenuPage } from "@/views/menu/MenuPage"

export const metadata: Metadata = { title: "Menu" }

export default async function Page({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams

  return <MenuPage groupId={parseMenuGroupId(cat)} />
}
