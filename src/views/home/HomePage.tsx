import { LunchCard } from "@/views/home/sections/LunchCard"
import { MenuShortcuts } from "@/views/home/sections/MenuShortcuts"
import { PromoCards } from "@/views/home/sections/PromoCards"
import { ReviewCard } from "@/views/home/sections/ReviewCard"

export function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 pt-6">
      <LunchCard />
      <PromoCards />
      <MenuShortcuts />
      <ReviewCard />
    </main>
  )
}
