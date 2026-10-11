import { describe, expect, it } from "vitest"

import { promos } from "@/content/promos"
import { getLunchDayId, getPromoPrice, getWeekdayInRome, toTelHref, toWhatsappHref } from "@/utils"

describe("phone helpers", () => {
  it("builds a tel: href without spaces", () => {
    expect(toTelHref("+39 091 616 8521")).toBe("tel:+390916168521")
  })

  it("builds a wa.me link with digits only", () => {
    expect(toWhatsappHref("+39 329 715 2989")).toBe("https://wa.me/393297152989")
  })
})

describe("promo price", () => {
  it('says "from" only when offers differ in price', () => {
    const [railway, students] = promos

    expect(getPromoPrice(railway)).toEqual({ amount: 5, isFrom: false })
    expect(getPromoPrice(students)).toEqual({ amount: 5, isFrom: true })
  })
})

describe("lunch day", () => {
  it("reads the weekday in Italy, not in the visitor's timezone", () => {
    // 23:30 UTC on Sunday is already Monday in Rome.
    expect(getWeekdayInRome(new Date("2026-10-11T23:30:00Z"))).toBe("mon")
    expect(getWeekdayInRome(new Date("2026-10-14T10:00:00Z"))).toBe("wed")
  })

  it("falls back to Monday over the weekend", () => {
    expect(getLunchDayId("fri")).toBe("fri")
    expect(getLunchDayId("sat")).toBe("mon")
    expect(getLunchDayId("sun")).toBe("mon")
  })
})
