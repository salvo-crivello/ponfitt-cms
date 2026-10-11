"use client"

import { Phone } from "lucide-react"

import { ButtonLink } from "@/components/ui/Button/Button"
import { PromoIcon } from "@/components/ui/PromoIcon"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { business } from "@/content/business"
import { useLang } from "@/hooks/useLang"
import { useI18nContext } from "@/i18n/i18n-react"
import type { TPromo } from "@/types/promo.types"
import { formatPrice, toTelHref } from "@/utils"

export function PromoContent({ promo }: { promo: TPromo }) {
  const { LL } = useI18nContext()
  const { lang } = useLang()

  return (
    <div className="flex flex-col gap-10">
      <header className="border-eban flex flex-col gap-3 border-b-6 pb-3">
        <p className="text-terracotta flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
          <PromoIcon slug={promo.slug} className="size-5" />
          {promo.name[lang]}
        </p>
        <h1 className="font-display text-7xl leading-none tracking-wide text-balance uppercase">
          {promo.tagline[lang]}
        </h1>
      </header>

      <ul className="divide-eban/30 divide-y">
        {promo.offers.map((offer) => (
          <li key={offer.id} className="flex flex-col gap-1 py-6">
            <div className="flex items-baseline gap-2">
              <h2 className="font-display text-4xl leading-none tracking-wide uppercase">
                {offer.name}
              </h2>
              <span aria-hidden className="border-eban/40 flex-1 border-b border-dotted" />
              <span className="font-display text-terracotta text-4xl leading-none tabular-nums">
                {formatPrice(offer.price, lang, 0)}
              </span>
            </div>
            <p className="text-sm opacity-70">{offer.description[lang]}</p>
          </li>
        ))}
      </ul>

      <ButtonLink
        href={toTelHref(business.phone)}
        variant="secondary"
        size="lg"
        fullWidth
        className="justify-between"
      >
        <span className="flex items-center gap-2">
          <Phone className="size-5" aria-hidden />
          {LL.info.callUs()}
        </span>
        <span className="font-medium tracking-normal normal-case tabular-nums">
          {business.phone}
        </span>
      </ButtonLink>
    </div>
  )
}
