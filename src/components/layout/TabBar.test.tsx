import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { TabBar } from "@/components/layout/TabBar"
import { I18nProvider } from "@/components/providers/I18nProvider"

const pathname = vi.hoisted(() => ({ value: "/menu" }))
vi.mock("next/navigation", () => ({ usePathname: () => pathname.value }))

function renderTabBar(path: string) {
  pathname.value = path
  render(
    <I18nProvider>
      <TabBar />
    </I18nProvider>
  )
}

describe("TabBar", () => {
  it("marks the current section as active", () => {
    renderTabBar("/menu")

    expect(screen.getByRole("link", { name: /menu/i })).toHaveAttribute("aria-current", "page")
    expect(screen.getByRole("link", { name: /home/i })).not.toHaveAttribute("aria-current")
  })

  it("exposes a call link", () => {
    renderTabBar("/")

    expect(screen.getByRole("link", { name: /chiama|call/i })).toHaveAttribute(
      "href",
      expect.stringMatching(/^tel:\+?\d+$/)
    )
  })
})
