import type { Metadata } from "next"

import { InfoPage } from "@/views/info/InfoPage"

export const metadata: Metadata = { title: "Info" }

export default function Page() {
  return <InfoPage />
}
