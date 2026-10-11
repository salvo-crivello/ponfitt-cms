"use client"

import { Phone } from "lucide-react"

import { ButtonLink } from "@/components/ui/Button/Button"
import { business } from "@/content/business"
import { lunchMenu } from "@/content/lunch"
import { useLang } from "@/hooks/useLang"
import { useWeekday } from "@/hooks/useWeekday"
import { useI18nContext } from "@/i18n/i18n-react"
import { cn, formatPrice, toTelHref } from "@/utils"

export function LunchContent() {
  const { LL } = useI18nContext()
  const { lang } = useLang()
  const weekday = useWeekday()

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-display border-eban border-b-6 pb-3 text-7xl leading-[0.85] tracking-wide uppercase">
        {LL.lunch.title()}
      </h1>

      <ul className="divide-eban/30 divide-y">
        {lunchMenu.days.map((day) => (
          <li
            key={day.id}
            className={cn("flex flex-col gap-2 py-5", weekday === day.id && "bg-sabbia -mx-4 px-4")}
          >
            <p className="text-terracotta text-xs font-bold tracking-widest uppercase">
              {LL.lunch.days[day.id]()}
              {weekday === day.id && ` · ${LL.home.lunchToday()}`}
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="font-display text-4xl leading-none tracking-wide uppercase">
                {day.name[lang]}
              </h2>
              <span aria-hidden className="border-eban/40 flex-1 border-b border-dotted" />
              <span className="font-display text-terracotta text-4xl leading-none tabular-nums">
                {formatPrice(lunchMenu.price, lang, 0)}
              </span>
            </div>
            <p className="text-sm opacity-70">{day.description[lang]}</p>
            {day.variants && (
              <ul className="text-sm font-medium">
                {day.variants.map((variant) => (
                  <li key={variant.it}>— {variant[lang]}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <section className="border-eban mx-auto flex max-w-4xl flex-col gap-2 border-6 p-3">
        <p className="font-display text-terracotta text-left text-5xl text-[60px] leading-none tracking-wide uppercase">
          {LL.lunch.reserve()}
        </p>
        <p className="text-left text-2xl font-extrabold text-balance">{LL.lunch.tagline()}</p>
        {/* <ButtonLink href={toTelHref(business.phone)} variant="secondary" size="lg" fullWidth>
          <Phone className="size-5" aria-hidden />
          {LL.info.callUs()} · {business.phone}
        </ButtonLink> */}
      </section>
    </div>
  )
}
