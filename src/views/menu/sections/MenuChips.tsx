"use client"

import Link from "next/link"

import { MenuGroupIcon } from "@/components/ui/MenuGroupIcon"
import { MENU_GROUPS } from "@/constant/menuGroups"
import { ROUTES } from "@/constant/routes"
import { useI18nContext } from "@/i18n/i18n-react"
import type { TMenuGroupId } from "@/types/menu.types"
import { cn } from "@/utils"

// Segmented control: one hairline frame, cells split by vertical rules.
export function MenuChips({ activeId }: { activeId: TMenuGroupId }) {
  const { LL } = useI18nContext()

  return (
    <nav aria-label={LL.ui.menu()} className="border-eban divide-eban my-4 flex divide-x border">
      {MENU_GROUPS.map(({ id }) => {
        const active = id === activeId

        return (
          <Link
            key={id}
            href={ROUTES.menuGroup(id)}
            scroll={false}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 px-2 py-3 text-xs font-bold tracking-widest uppercase",
              active ? "bg-eban text-alabastro" : "active:bg-sabbia"
            )}
          >
            <MenuGroupIcon id={id} className="size-5" />
            {LL.groups[id]()}
          </Link>
        )
      })}
    </nav>
  )
}
