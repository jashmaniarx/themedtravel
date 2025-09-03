import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-2xl",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-2xl",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-2xl",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-2xl",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Travel Experience Variants
        hero: "button-gradient text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 rounded-3xl font-semibold",
        glass: "glass-button text-foreground hover:bg-white/20 rounded-2xl backdrop-blur-lg border border-white/20",
        cta: "bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-xl hover:shadow-primary/30 hover:scale-105 rounded-2xl font-semibold",
        floating: "glass-card text-foreground hover:glass-button hover:-translate-y-2 rounded-2xl shadow-lg"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-2xl px-4 text-sm",
        lg: "h-14 rounded-3xl px-10 text-lg font-semibold",
        xl: "h-16 rounded-3xl px-12 text-xl font-bold",
        icon: "h-12 w-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
