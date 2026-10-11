import type { TPromo } from "@/types/promo.types"
import { PromoContent } from "@/views/promo/sections/PromoContent"

export function PromoPage({ promo }: { promo: TPromo }) {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-6">
      <PromoContent promo={promo} />
    </main>
  )
}
