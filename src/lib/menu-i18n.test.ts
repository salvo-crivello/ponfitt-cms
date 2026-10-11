import { describe, expect, it } from "vitest"

import { menu } from "@/content/menu"
import { locales } from "@/i18n/i18n-util"
import { i18nObject } from "@/i18n/i18n-util"
import { loadAllLocales } from "@/i18n/i18n-util.sync"
import { getCategoryName, getItemDescription } from "@/lib/menu-i18n"

loadAllLocales()

describe("menu translations", () => {
  it.each(locales)("cover every category and item in '%s'", (locale) => {
    const LL = i18nObject(locale)

    for (const category of menu.categories) {
      expect(getCategoryName(LL, category.id), category.id).not.toBe(category.id)
      for (const item of category.items) {
        expect(getItemDescription(LL, category.id, item.id), `${category.id}.${item.id}`).not.toBe(
          ""
        )
      }
    }
  })
})
