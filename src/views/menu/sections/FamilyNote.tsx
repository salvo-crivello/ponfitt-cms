"use client"

import { useI18nContext } from "@/i18n/i18n-react"

export function FamilyNote() {
  const { LL } = useI18nContext()

  return (
    <div className="border-eban mx-auto flex max-w-4xl flex-col gap-2 border-6 p-3">
      <h2 className="font-display text-terracotta text-left text-5xl text-[60px] leading-none tracking-wide uppercase">
        {LL.familyNote.title()}
      </h2>
      <p className="text-left text-2xl font-extrabold text-balance">{LL.familyNote.content()}</p>
    </div>
  )
}
