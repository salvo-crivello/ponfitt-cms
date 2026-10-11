"use client"

import { useI18nContext } from "@/i18n/i18n-react"
import type { TMenuGroupId } from "@/types/menu.types"

export function MenuTitle() {
  const { LL } = useI18nContext()

  return (
    <h1 className="font-display border-eban mt-8 border-b-6 pb-3 text-7xl leading-[0.85] tracking-wide uppercase">
      {LL.menuPage.title()}
    </h1>
  )
}

export function MenuSubtitle({ groupId }: { groupId: TMenuGroupId }) {
  const { LL } = useI18nContext()

  return (
    <p className="text-xs font-bold tracking-widest uppercase">
      {LL.menuPage.subtitles[groupId]()}
    </p>
  )
}
