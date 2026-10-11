"use client"

import { BookOpen, House, Info, Phone, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { ROUTES } from "@/constant/routes"
import { business } from "@/content/business"
import { useI18nContext } from "@/i18n/i18n-react"
import { cn, toTelHref } from "@/utils"

type TTab = {
  href: string
  icon: LucideIcon
  label: "home" | "menu" | "info"
}

const TABS: TTab[] = [
  { href: ROUTES.HOME, icon: House, label: "home" },
  { href: ROUTES.MENU, icon: BookOpen, label: "menu" },
  { href: ROUTES.INFO, icon: Info, label: "info" }
]

const CELL =
  "flex h-16 flex-col items-center justify-center gap-1 text-[11px] font-bold tracking-wider uppercase"

export function TabBar() {
  const { LL } = useI18nContext()
  const pathname = usePathname()

  const renderTab = ({ href, icon: Icon, label }: TTab) => {
    const active = href === ROUTES.HOME ? pathname === href : pathname.startsWith(href)

    return (
      <li key={href}>
        <Link
          href={href}
          aria-current={active ? "page" : undefined}
          className={cn(CELL, active ? "bg-sabbia text-eban" : "text-eban/60")}
        >
          <Icon className="size-5" aria-hidden />
          {LL.ui[label]()}
        </Link>
      </li>
    )
  }

  return (
    <nav
      aria-label="Main"
      className="bg-alabastro border-eban fixed inset-x-0 bottom-0 z-50 border-t pb-[env(safe-area-inset-bottom)]"
    >
      {/* Call is a square block, 5rem wide and tall: it rises above the bar. */}
      <ul className="mx-auto grid max-w-md grid-cols-[1fr_1fr_1fr_5rem] items-end">
        {TABS.map(renderTab)}
        <li>
          <a
            href={toTelHref(business.phone)}
            className="bg-terracotta text-eban border-eban -mt-4 flex size-20 flex-col items-center justify-center gap-1 border text-xs font-bold tracking-wider uppercase"
          >
            <Phone className="size-6" aria-hidden />
            {LL.ui.call()}
          </a>
        </li>
      </ul>
    </nav>
  )
}
