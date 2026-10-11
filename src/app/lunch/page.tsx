import type { Metadata } from "next"

import { LunchPage } from "@/views/lunch/LunchPage"

export const metadata: Metadata = { title: "Menu della settimana" }

export default function Page() {
  return <LunchPage />
}
