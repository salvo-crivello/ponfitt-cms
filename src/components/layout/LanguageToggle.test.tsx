import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"

import { LanguageToggle } from "@/components/layout/LanguageToggle"
import { I18nProvider } from "@/components/providers/I18nProvider"

describe("LanguageToggle", () => {
  afterEach(() => window.localStorage.clear())

  it("switches language and persists the choice", async () => {
    window.localStorage.setItem("lang", "it")
    render(
      <I18nProvider>
        <LanguageToggle />
      </I18nProvider>
    )

    expect(screen.getByRole("button", { name: "it" })).toHaveAttribute("aria-pressed", "true")

    await userEvent.click(screen.getByRole("button", { name: "en" }))

    expect(screen.getByRole("button", { name: "en" })).toHaveAttribute("aria-pressed", "true")
    expect(window.localStorage.getItem("lang")).toBe("en")
  })
})
