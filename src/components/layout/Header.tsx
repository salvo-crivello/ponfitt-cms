"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import logo from "@/assets/logo-ponfitt.png"
import { COMMON_CONFIG } from "@/constant/commonConfig"
import { ROUTES } from "@/constant/routes"
import { useLang } from "@/hooks/useLang"
import { useI18nContext } from "@/i18n/i18n-react"
import { locales } from "@/i18n/i18n-util"
import { getCategoryName } from "@/lib/menu-i18n"
import { cn } from "@/utils"

type THeaderProps = {
  categoryIds: string[]
}

export function Header({ categoryIds }: THeaderProps) {
  const [open, setOpen] = useState(false)
  const { LL } = useI18nContext()
  const { lang, setLang } = useLang()

  return (
    <header className="bg-alabastro border-sabbia sticky top-0 z-50 border-b">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link href={ROUTES.HOME} aria-label={COMMON_CONFIG.APP_NAME}>
          <Image
            src={logo}
            alt={`${COMMON_CONFIG.APP_NAME} — ${COMMON_CONFIG.APP_TAGLINE}`}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <button
          type="button"
          aria-label={LL.ui.menu()}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 cursor-pointer p-2"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </nav>

      {open && (
        <div className="bg-alabastro border-b-sabbia absolute inset-x-0 top-full flex flex-col gap-6 rounded-b-md px-4 pt-4 pb-6 shadow-lg">
          <ul className="flex flex-col">
            {categoryIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="font-display border-b-sabbia block py-3 text-3xl tracking-wide uppercase"
                >
                  {getCategoryName(LL, id)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            {locales.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={l === lang}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-1 text-sm font-medium uppercase",
                  l === lang && "border-terracotta bg-terracotta text-alabastro"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
