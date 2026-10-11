import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/logo-ponfitt.png"
import { LanguageToggle } from "@/components/layout/LanguageToggle"
import { COMMON_CONFIG } from "@/constant/commonConfig"
import { ROUTES } from "@/constant/routes"

export function Header() {
  return (
    <header className="bg-alabastro border-eban sticky top-0 z-40 border-b">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link href={ROUTES.HOME} aria-label={COMMON_CONFIG.APP_NAME}>
          <Image
            src={logo}
            alt={`${COMMON_CONFIG.APP_NAME} — ${COMMON_CONFIG.APP_TAGLINE}`}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <LanguageToggle />
      </div>
    </header>
  )
}
