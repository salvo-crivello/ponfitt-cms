"use client"

import { useI18nContext } from "@/i18n/i18n-react"
import { cn } from "@/utils"

type TMenuItemProps = {
  name: string
  description: string
  price: string
  available: boolean
}

export function MenuItem({ name, description, price, available }: TMenuItemProps) {
  const { LL } = useI18nContext()

  return (
    <li className={cn("flex flex-col gap-1", !available && "opacity-50")}>
      <div className="flex items-baseline gap-2">
        <h3 className="font-display text-2xl tracking-wide uppercase">{name}</h3>
        <span aria-hidden className="border-eban/40 flex-1 border-b border-dotted" />
        <span className="font-display text-terracotta text-2xl tabular-nums">{price}</span>
      </div>
      <p className="text-sm opacity-70">{description}</p>
      {!available && <span className="text-xs font-medium uppercase">{LL.ui.soldOut()}</span>}
    </li>
  )
}
