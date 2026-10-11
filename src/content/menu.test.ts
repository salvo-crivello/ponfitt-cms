import { describe, expect, it } from "vitest"

import { menu } from "@/content/menu"

describe("menu content", () => {
  it("has unique category ids", () => {
    const ids = menu.categories.map((c) => c.id)

    expect(new Set(ids).size).toBe(ids.length)
  })

  it("has unique item ids within a category and valid prices", () => {
    for (const category of menu.categories) {
      const ids = category.items.map((i) => i.id)

      expect(new Set(ids).size, category.id).toBe(ids.length)
      for (const item of category.items) {
        expect(item.price, item.id).toBeGreaterThan(0)
      }
    }
  })
})
