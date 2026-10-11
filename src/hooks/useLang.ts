"use client"

import { useI18nContext } from "@/i18n/i18n-react"
import type { Locales } from "@/i18n/i18n-types"

// Key read by typesafe-i18n's `localStorageDetector`.
const LOCALE_STORAGE_KEY = "lang"

export function useLang() {
  const { locale, setLocale } = useI18nContext()

  const setLang = (next: Locales) => {
    setLocale(next)
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      // storage unavailable: the choice just won't persist
    }
  }

  return { lang: locale, setLang }
}
