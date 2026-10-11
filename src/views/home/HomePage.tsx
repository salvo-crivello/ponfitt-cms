import { MenuShortcuts } from "@/views/home/sections/MenuShortcuts"
import { PromoBanner } from "@/views/home/sections/PromoBanner"
import { ReviewCard } from "@/views/home/sections/ReviewCard"

export function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pt-6">
      <PromoBanner />
      <MenuShortcuts />
      <ReviewCard />
    </main>
  )
}
