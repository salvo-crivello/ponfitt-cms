import type { Metadata } from "next"

import { Header } from "@/components/layout/Header"
import { I18nProvider } from "@/components/providers/I18nProvider"
import { COMMON_CONFIG } from "@/constant/commonConfig"
import { env } from "@/lib/env"
import { getMenu } from "@/lib/menu-client"

import { tackerlen } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: `${COMMON_CONFIG.APP_NAME} — ${COMMON_CONFIG.APP_TAGLINE}`,
  description: "Il menu di Ponfitt: pizze, specials, paninoni e schiacciate.",
  alternates: { canonical: "/" }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const menu = await getMenu()
  const categoryIds = menu.categories.map(({ id }) => id)

  return (
    // `lang` starts as the default and follows the user's choice on the client
    // (see I18nProvider).
    <html lang="it" className={`${tackerlen.variable} antialiased`}>
      <body className="min-h-screen">
        <I18nProvider>
          <Header categoryIds={categoryIds} />
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
