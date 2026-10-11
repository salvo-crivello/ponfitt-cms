"use client"

import { useI18nContext } from "@/i18n/i18n-react"

export function FamilyNote() {
  const { LL } = useI18nContext()

  return (
    <div className="border-foreground mx-auto flex max-w-4xl flex-col gap-2 border-4 p-6">
      <h2 className="font-display text-terracotta text-left text-5xl tracking-wide uppercase">
        {LL.familyNote.title()}
      </h2>
      <p className="text-left text-xl font-extrabold">{LL.familyNote.content()}</p>
    </div>
  )
}
