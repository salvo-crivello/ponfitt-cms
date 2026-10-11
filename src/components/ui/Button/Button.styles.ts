import { cva } from "class-variance-authority"

// Swiss/print: flat, square (rounded-xs at most), hairline eban border, wide-tracked
// uppercase label. Pressing inverts the colours instead of moving.
export const buttonVariants = cva(
  "border-eban inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xs border font-bold tracking-widest uppercase transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-terracotta text-eban active:bg-eban active:text-alabastro",
        secondary: "text-eban active:bg-eban active:text-alabastro bg-transparent",
        dark: "bg-eban text-alabastro active:bg-alabastro active:text-eban"
      },
      size: {
        sm: "px-3 py-2 text-xs",
        md: "px-5 py-3 text-xs",
        lg: "px-6 py-4 text-sm"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false
    }
  }
)
