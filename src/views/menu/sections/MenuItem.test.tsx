import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { I18nProvider } from "@/components/providers/I18nProvider"
import { MenuItem } from "@/views/menu/sections/MenuItem"

const props = {
  name: "Margherita",
  description: "pomodoro, mozzarella",
  price: "€5,00"
}

function renderItem(available: boolean) {
  render(
    <I18nProvider>
      <MenuItem {...props} available={available} />
    </I18nProvider>
  )
}

describe("MenuItem", () => {
  it("renders name, description and price", () => {
    renderItem(true)

    expect(screen.getByRole("heading", { name: "Margherita" })).toBeInTheDocument()
    expect(screen.getByText("pomodoro, mozzarella")).toBeInTheDocument()
    expect(screen.getByText("€5,00")).toBeInTheDocument()
  })

  it("shows the sold-out label when unavailable", async () => {
    window.localStorage.setItem("lang", "it")
    renderItem(false)

    expect(await screen.findByText("Esaurito")).toBeInTheDocument()
  })
})
