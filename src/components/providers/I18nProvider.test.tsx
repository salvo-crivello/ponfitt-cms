import { act, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import { I18nProvider } from "@/components/providers/I18nProvider"
import { useLang } from "@/hooks/useLang"
import { useI18nContext } from "@/i18n/i18n-react"

function Probe() {
  const { LL } = useI18nContext()
  const { setLang } = useLang()

  return (
    <>
      <p>{LL.ui.soldOut()}</p>
      <button type="button" onClick={() => setLang("it")}>
        it
      </button>
    </>
  )
}

function renderProbe() {
  render(
    <I18nProvider>
      <Probe />
    </I18nProvider>
  )
}

describe("I18nProvider", () => {
  afterEach(() => window.localStorage.clear())

  it("falls back to the browser language when nothing is stored", async () => {
    // jsdom reports navigator.language = "en-US"
    renderProbe()

    expect(await screen.findByText("Sold out")).toBeInTheDocument()
    expect(document.documentElement.lang).toBe("en")
  })

  it("prefers the stored language over the browser one", async () => {
    window.localStorage.setItem("lang", "it")
    renderProbe()

    expect(await screen.findByText("Esaurito")).toBeInTheDocument()
    expect(document.documentElement.lang).toBe("it")
  })

  it("persists the choice made with setLang", async () => {
    renderProbe()
    await screen.findByText("Sold out")

    await act(async () => screen.getByRole("button", { name: "it" }).click())

    expect(await screen.findByText("Esaurito")).toBeInTheDocument()
    expect(window.localStorage.getItem("lang")).toBe("it")
  })
})
