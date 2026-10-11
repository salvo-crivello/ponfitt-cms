import { describe, expect, it } from "vitest"

import { lunchMenu } from "@/content/lunch"
import { promos } from "@/content/promos"

describe("lunch content", () => {
  it("covers Monday to Friday exactly once", () => {
    expect(lunchMenu.days.map(({ id }) => id)).toEqual(["mon", "tue", "wed", "thu", "fri"])
  })

  it("has both languages filled in", () => {
    for (const day of lunchMenu.days) {
      expect(day.name.it).not.toBe("")
      expect(day.name.en).not.toBe("")
      expect(day.description.en).not.toBe("")
    }
  })
})

describe("promo content", () => {
  it("has unique slugs and positively priced offers", () => {
    const slugs = promos.map(({ slug }) => slug)

    expect(new Set(slugs).size).toBe(slugs.length)
    for (const promo of promos) {
      expect(promo.offers.length).toBeGreaterThan(0)
      for (const offer of promo.offers) expect(offer.price).toBeGreaterThan(0)
    }
  })
})
