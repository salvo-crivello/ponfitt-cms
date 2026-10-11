"use client"

import { ArrowRight } from "lucide-react"

import { ButtonLink } from "@/components/ui/Button/Button"
import { ROUTES } from "@/constant/routes"
import { useI18nContext } from "@/i18n/i18n-react"

export function PromoBanner() {
  const { LL } = useI18nContext()

  return (
    // The outline is an inset hairline frame, like the border of a printed poster.
    <section className="bg-terracotta text-eban border-eban outline-eban flex flex-col gap-4 border p-8 outline-1 -outline-offset-8">
      <span aria-hidden className="text-xs font-bold tracking-widest uppercase">
        Est. 1990
      </span>
      <h2 className="font-display text-7xl leading-[0.85] tracking-wide uppercase">
        {LL.familyNote.title()}
      </h2>
      <p className="text-lg font-bold">{LL.familyNote.content()}</p>
      <ButtonLink href={ROUTES.MENU} variant="dark">
        {LL.home.promoCta()}
        <ArrowRight className="size-4" aria-hidden />
      </ButtonLink>
    </section>
  )
}
