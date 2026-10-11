import type { Metadata } from "next"

import { Header } from "@/components/layout/Header"
import { TabBar } from "@/components/layout/TabBar"
import { I18nProvider } from "@/components/providers/I18nProvider"
import { COMMON_CONFIG } from "@/constant/commonConfig"
import { env } from "@/lib/env"

import { tackerlen } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: `${COMMON_CONFIG.APP_NAME} — ${COMMON_CONFIG.APP_TAGLINE}`,
    template: `%s | ${COMMON_CONFIG.APP_NAME}`
  },
  description: "Il menu di Ponfitt: pizze, specials, paninoni e schiacciate."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // `lang` starts as the default and follows the user's choice on the client
    // (see I18nProvider).
    <html lang="it" className={`${tackerlen.variable} antialiased`}>
      <body className="min-h-screen">
        <I18nProvider>
          <Header />
          <div className="pb-24">{children}</div>
          <TabBar />
        </I18nProvider>
      </body>
    </html>
  )
}
