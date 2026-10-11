"use client"

import {
  Clock,
  ConciergeBell,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
  Star
} from "lucide-react"

import { ButtonLink } from "@/components/ui/Button/Button"
import { FeatureIcon } from "@/components/ui/FeatureIcon"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { SocialIcon } from "@/components/ui/brand/SocialIcon"
import { business } from "@/content/business"
import { useLang } from "@/hooks/useLang"
import { useI18nContext } from "@/i18n/i18n-react"
import { cn, toTelHref, toWhatsappHref } from "@/utils"

export function InfoContent() {
  const { LL } = useI18nContext()
  const { lang } = useLang()

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-display border-eban border-b-6 pb-3 text-7xl leading-[0.85] tracking-wide uppercase">
        {LL.info.title()}
      </h1>

      {/* The tab bar already has a prominent Call button: here contacts are a list of secondary buttons. */}
      <div className="flex flex-col gap-3">
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
        <ButtonLink
          href={toWhatsappHref(business.whatsapp)}
          variant="secondary"
          size="lg"
          fullWidth
          className="justify-between"
        >
          <span className="flex items-center gap-2">
            <MessageCircle className="size-5" aria-hidden />
            {LL.info.whatsapp()}
          </span>
          <span className="font-medium tracking-normal normal-case tabular-nums">
            {business.whatsapp}
          </span>
        </ButtonLink>
        <ButtonLink
          href={business.mapsUrl}
          variant="secondary"
          size="lg"
          fullWidth
          className="justify-between"
        >
          <span className="flex items-center gap-2">
            <MapPin className="size-5" aria-hidden />
            {LL.info.reachUs()}
          </span>
          <span className="max-w-[60%] text-right font-medium tracking-normal normal-case">
            {business.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </ButtonLink>
      </div>

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <Clock className="text-terracotta size-6" aria-hidden />
          {LL.info.hours()}
        </SectionHeading>
        <ul className="divide-eban/30 divide-y">
          {business.hours.map(({ days, time }) => (
            <li key={days.it} className="flex justify-between gap-4 py-2 font-medium">
              <span>{days[lang]}</span>
              <span className="tabular-nums">{time[lang]}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <ConciergeBell className="text-terracotta size-6" aria-hidden />
          {LL.info.services()}
        </SectionHeading>
        <ul className="grid auto-rows-fr grid-cols-2 gap-x-4">
          {business.features.map((id, index) => {
            const lastRow = Math.floor(index / 2) === Math.ceil(business.features.length / 2) - 1

            return (
              <li
                key={id}
                className={cn(
                  "border-eban/30 grid grid-cols-[auto_1fr] items-center gap-2 py-3 text-sm font-medium",
                  !lastRow && "border-b"
                )}
              >
                <FeatureIcon id={id} className="text-terracotta size-5" />
                {/* Right padding forces longer labels onto two lines. */}
                <span className="pr-6 text-balance">{LL.info.features[id]()}</span>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <Smartphone className="text-terracotta size-6" aria-hidden />
          {LL.info.delivery()}
        </SectionHeading>
        <div className="flex flex-wrap gap-3">
          {business.delivery.map(({ id, name, url }) => (
            <ButtonLink key={id} href={url} variant="dark">
              {name}
            </ButtonLink>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <Heart className="text-terracotta size-6" aria-hidden />
          {LL.info.follow()}
        </SectionHeading>
        <div className="flex flex-wrap items-center gap-3">
          <ul className="flex gap-3">
            {business.socials.map(({ id, url }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={id}
                  className="border-eban text-eban active:bg-eban active:text-alabastro flex size-11 items-center justify-center rounded-xs border"
                >
                  <SocialIcon id={id} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={business.reviewUrl} variant="secondary" size="sm" className="h-11">
            <Star className="size-4" aria-hidden />
            {LL.info.review()}
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
