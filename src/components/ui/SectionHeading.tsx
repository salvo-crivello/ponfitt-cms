import { cn } from "@/utils"

type TSectionHeadingProps = {
  children: React.ReactNode
  className?: string
}

/** Display heading underlined by a hairline rule. */
export function SectionHeading({ children, className }: TSectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-display border-eban flex items-center gap-2 border-b pb-2 text-3xl leading-none tracking-wide uppercase",
        className
      )}
    >
      {children}
    </h2>
  )
}
