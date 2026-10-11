import { describe, expect, it } from "vitest"

import { toTelHref, toWhatsappHref } from "@/utils"

describe("phone helpers", () => {
  it("builds a tel: href without spaces", () => {
    expect(toTelHref("+39 091 616 8521")).toBe("tel:+390916168521")
  })

  it("builds a wa.me link with digits only", () => {
    expect(toWhatsappHref("+39 329 715 2989")).toBe("https://wa.me/393297152989")
  })
})
