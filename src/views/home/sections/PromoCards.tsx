"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { PromoIcon } from "@/components/ui/PromoIcon"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ROUTES } from "@/constant/routes"
import { promos } from "@/content/promos"
import { useLang } from "@/hooks/useLang"
import { useI18nContext } from "@/i18n/i18n-react"
import { formatPrice, getPromoPrice } from "@/utils"

export function PromoCards() {
  const { LL } = useI18nContext()
  const { lang } = useLang()

  return (
    <section className="flex flex-col gap-4">
      <SectionHeading className="text-4xl">{LL.home.promoTitle()}</SectionHeading>
      <ul className="grid grid-cols-2 gap-3">
        {promos.map((promo) => {
          const { amount, isFrom } = getPromoPrice(promo)

          return (
            <li key={promo.slug}>
              <Link
                href={ROUTES.promo(promo.slug)}
                className="border-eban active:bg-sabbia flex h-full flex-col justify-between gap-2 border-6"
              >
                <div className="flex items-start justify-between gap-2 p-3">
                  <span className="text-terracotta text-xs font-bold tracking-widest uppercase">
                    {LL.home.promoLabel()}
                  </span>
                  <PromoIcon slug={promo.slug} className="size-5" />
                </div>
                <h3 className="font-display px-3 text-4xl leading-none tracking-wide text-balance uppercase">
                  {promo.name[lang]}
                </h3>

                {/* <p className="font-display text-3xl leading-none tabular-nums">
                    {isFrom && (
                      <span className="mr-1 text-xs font-bold tracking-widest uppercase">
                        {LL.home.promoFrom()}
                      </span>
                    )}
                    {formatPrice(amount, lang, 0)}
                  </p> */}
                <span className="border-eban ml-auto flex size-9 shrink-0 items-center justify-center">
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
