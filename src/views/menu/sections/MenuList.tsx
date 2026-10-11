"use client"

import { useLang } from "@/hooks/useLang"
import { useI18nContext } from "@/i18n/i18n-react"
import { getCategoryName, getItemDescription } from "@/lib/menu-i18n"
import type { TMenuCategory } from "@/types/menu.types"
import { formatPrice } from "@/utils"
import { MenuItem } from "@/views/menu/sections/MenuItem"

type TMenuListProps = {
  categories: TMenuCategory[]
}

export function MenuList({ categories }: TMenuListProps) {
  const { LL } = useI18nContext()
  const { lang } = useLang()

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 py-8">
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="flex scroll-mt-20 flex-col gap-4">
          <h2 className="font-display border-sabbia border-b-4 pb-2 text-4xl tracking-wide uppercase">
            {getCategoryName(LL, category.id)}
          </h2>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
            {category.items.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={getItemDescription(LL, category.id, item.id)}
                price={formatPrice(item.price, lang)}
                available={item.available}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
