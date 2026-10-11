import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button, ButtonLink } from "@/components/ui/Button/Button"

describe("Button", () => {
  it("defaults to type=button", () => {
    render(<Button>Click</Button>)

    expect(screen.getByRole("button", { name: "Click" })).toHaveAttribute("type", "button")
  })
})

describe("ButtonLink", () => {
  it("opens http links in a new tab safely", () => {
    render(<ButtonLink href="https://example.com">Out</ButtonLink>)

    const link = screen.getByRole("link", { name: "Out" })
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("keeps tel: links as plain anchors", () => {
    render(<ButtonLink href="tel:+390000000000">Call</ButtonLink>)

    expect(screen.getByRole("link", { name: "Call" })).not.toHaveAttribute("target")
  })
})
