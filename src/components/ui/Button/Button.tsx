import Link from "next/link"

import { buttonVariants } from "@/components/ui/Button/Button.styles"
import type { TButtonLinkProps, TButtonProps } from "@/components/ui/Button/Button.types"
import { cn } from "@/utils"

export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = "button",
  ...rest
}: TButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...rest}
    />
  )
}

export function ButtonLink({
  href,
  variant,
  size,
  fullWidth,
  className,
  scroll,
  ...rest
}: TButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className)

  if (href.startsWith("/")) {
    return <Link href={href} scroll={scroll} className={classes} {...rest} />
  }

  const external = href.startsWith("http")

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    />
  )
}
