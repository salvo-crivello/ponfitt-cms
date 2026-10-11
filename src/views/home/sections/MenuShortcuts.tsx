"use client"

import Link from "next/link"

import { MenuGroupIcon } from "@/components/ui/MenuGroupIcon"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { MENU_GROUPS } from "@/constant/menuGroups"
import { ROUTES } from "@/constant/routes"
import { useI18nContext } from "@/i18n/i18n-react"

export function MenuShortcuts() {
  const { LL } = useI18nContext()

  return (
    <section className="flex flex-col gap-4">
      <SectionHeading className="text-4xl">{LL.home.shortcutsTitle()}</SectionHeading>
      <ul className="border-eban divide-eban grid grid-cols-3 divide-x border">
        {MENU_GROUPS.map(({ id }, index) => (
          <li key={id}>
            <Link
              href={ROUTES.menuGroup(id)}
              className="active:bg-sabbia flex h-full flex-col items-center gap-3 px-2 pt-2 pb-5 text-center text-xs font-bold tracking-widest uppercase"
            >
              <span aria-hidden className="text-terracotta self-start text-[10px] tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <MenuGroupIcon id={id} className="size-8" />
              {LL.groups[id]()}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
