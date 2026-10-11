"use client"

import { ArrowRight } from "lucide-react"

import { ButtonLink } from "@/components/ui/Button/Button"
import { ROUTES } from "@/constant/routes"
import { lunchMenu } from "@/content/lunch"
import { useLang } from "@/hooks/useLang"
import { useWeekday } from "@/hooks/useWeekday"
import { useI18nContext } from "@/i18n/i18n-react"
import { formatPrice, getLunchDayId } from "@/utils"

export function LunchCard() {
  const { LL } = useI18nContext()
  const { lang } = useLang()
  const weekday = useWeekday()

  const dayId = weekday ? getLunchDayId(weekday) : null
  const day = lunchMenu.days.find(({ id }) => id === dayId)

  return (
    <section className="bg-terracotta text-eban border-terracotta flex flex-col">
      <p className="p-3 pb-0 text-xs font-bold tracking-widest uppercase">{LL.home.lunchLabel()}</p>
      {day && (
        <div className="flex items-end justify-between gap-4 p-3">
          <h2 className="font-display text-[60px] leading-none tracking-wide text-balance uppercase">
            {day.name[lang]}
          </h2>
          <span className="font-display text-alabastro text-6xl leading-none tabular-nums">
            {formatPrice(lunchMenu.price, lang, 0)}
          </span>
        </div>
      )}
      <ButtonLink href={ROUTES.LUNCH} variant="dark" className="mt-2 ml-auto">
        {LL.home.lunchCta()}
        <ArrowRight className="size-4" aria-hidden />
      </ButtonLink>
    </section>
  )
}
