"use client"

import { ArrowRight, Star } from "lucide-react"

import { ButtonLink } from "@/components/ui/Button/Button"
import { business } from "@/content/business"
import { useI18nContext } from "@/i18n/i18n-react"

export function ReviewCard() {
  const { LL } = useI18nContext()

  return (
    <section className="border-eban mx-auto flex max-w-4xl flex-col gap-2 border-6">
      {/* <Star className="text-terracotta size-7" aria-hidden /> */}
      <h2 className="font-display text-terracotta p-3 pb-0 text-left text-[60px] leading-none tracking-wide text-balance uppercase">
        {LL.home.reviewTitle()}
      </h2>
      <div className="flex items-center justify-between gap-4">
        <p className="px-3 text-left text-2xl font-extrabold text-balance">
          {LL.home.reviewText()}
        </p>
        <ButtonLink
          href={business.reviewUrl}
          className="border-eban mt-auto ml-auto border-6 border-r-0 border-b-0 bg-transparent p-3"
        >
          <ArrowRight className="size-4" aria-hidden />
        </ButtonLink>
      </div>
    </section>
  )
}
