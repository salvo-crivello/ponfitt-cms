import type { VariantProps } from "class-variance-authority"
import type { ComponentPropsWithoutRef } from "react"

import type { buttonVariants } from "@/components/ui/Button/Button.styles"

export type TButtonVariants = VariantProps<typeof buttonVariants>

export type TButtonProps = ComponentPropsWithoutRef<"button"> & TButtonVariants

export type TButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> &
  TButtonVariants & {
    /** `/…` goes through next/link; `http(s)` opens in a new tab; anything else (e.g. `tel:`) is a plain anchor. */
    href: string
    scroll?: boolean
  }
