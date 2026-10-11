"use client"

import { useEffect, useSyncExternalStore } from "react"
import type { LocaleDetector } from "typesafe-i18n/detectors"
import { localStorageDetector, navigatorDetector } from "typesafe-i18n/detectors"

import TypesafeI18n, { useI18nContext } from "@/i18n/i18n-react"
import { baseLocale, detectLocale } from "@/i18n/i18n-util"
import { loadAllLocales } from "@/i18n/i18n-util.sync"

// Both locales are tiny: load them synchronously so the server render and the
// first client render already have the strings.
loadAllLocales()

// Last resort after storage and browser: anything that isn't Italian → English.
const englishFallbackDetector: LocaleDetector = () => ["en"]

// Detection happens once, on the client. React renders the server snapshot
// (base locale) during hydration, then switches to the detected one: same
// markup on server and first client render, no mismatch.
const subscribe = () => () => {}
const getClientLocale = () =>
  detectLocale(localStorageDetector, navigatorDetector, englishFallbackDetector)
const getServerLocale = () => baseLocale

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getClientLocale, getServerLocale)

  return (
    <TypesafeI18n locale={locale}>
      <HtmlLangSync />
      {children}
    </TypesafeI18n>
  )
}

function HtmlLangSync() {
  const { locale } = useI18nContext()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
