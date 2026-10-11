"use client"

import { Star } from "lucide-react"

import { ButtonLink } from "@/components/ui/Button/Button"
import { business } from "@/content/business"
import { useI18nContext } from "@/i18n/i18n-react"

export function ReviewCard() {
  const { LL } = useI18nContext()

  return (
    <section className="border-eban flex flex-col gap-3 border-y-6 py-6">
      <Star className="text-terracotta size-7" aria-hidden />
      <h2 className="font-display text-4xl leading-none tracking-wide uppercase">
        {LL.home.reviewTitle()}
      </h2>
      <p>{LL.home.reviewText()}</p>
      <ButtonLink href={business.reviewUrl}>{LL.home.reviewCta()}</ButtonLink>
    </section>
  )
}
