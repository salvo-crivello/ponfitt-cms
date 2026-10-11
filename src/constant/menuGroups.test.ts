import { describe, expect, it } from "vitest"

import { MENU_GROUPS, parseMenuGroupId } from "@/constant/menuGroups"
import { menu } from "@/content/menu"

describe("menu groups", () => {
  it("cover every menu category exactly once", () => {
    const grouped = MENU_GROUPS.flatMap((group) => group.categoryIds)
    const all = menu.categories.map((category) => category.id)

    expect([...grouped].sort()).toEqual([...all].sort())
  })

  it("falls back to the default group for unknown values", () => {
    expect(parseMenuGroupId("paninoni")).toBe("paninoni")
    expect(parseMenuGroupId("nope")).toBe("pizze")
    expect(parseMenuGroupId(undefined)).toBe("pizze")
  })
})
