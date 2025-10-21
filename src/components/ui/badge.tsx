import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium transition-all",
        {
          "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200":
            variant === "default",
          "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200":
            variant === "primary",
          "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200":
            variant === "secondary",
          "border border-gray-300 dark:border-gray-600":
            variant === "outline",
        },
        className
      )}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      {...(props as any)}
    />
  )
}

export { Badge }
