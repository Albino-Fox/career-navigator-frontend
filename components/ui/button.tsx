import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-c5 hover:bg-c3 rounded-[30px] text-white small-btn-text",
        bigdefault: "bg-c5 hover:bg-c3 rounded-[30px] text-white big-btn-text ",
        defaultdark:
          "bg-c1 hover:bg-c2 rounded-[30px] text-black small-btn-text",
        bigdefaultdark:
          "bg-c1 hover:bg-c2 rounded-[30px] text-black big-btn-text ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent border-[3px] border-c5 text-black hover:text-c3 hover:border-c3 rounded-[30px] big-btn-text",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-c4 underline-offset-4 underline hover:text-c3",
        icon: "rounded-[50%] bg-c2",
      },
      size: {
        default: "h-[60px] px-[50px]",
        bigfill: "h-[74px] w-[100%]",
        fill: "h-[60px] w-[100%]",
        fix: "h-[60px] w-[142px]",
        text: "",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
