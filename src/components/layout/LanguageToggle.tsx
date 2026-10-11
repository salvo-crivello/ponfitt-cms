"use client"

import { useLang } from "@/hooks/useLang"
import { useI18nContext } from "@/i18n/i18n-react"
import { locales } from "@/i18n/i18n-util"
import { cn } from "@/utils"

// Segmented control: one hairline frame, cells split by a vertical rule.
export function LanguageToggle() {
  const { LL } = useI18nContext()
  const { lang, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label={LL.ui.language()}
      className="border-eban divide-eban flex divide-x rounded-xs border"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={l === lang}
          className={cn(
            "cursor-pointer px-3 py-1.5 text-xs font-bold tracking-widest uppercase",
            l === lang ? "bg-eban text-alabastro" : "active:bg-sabbia"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
