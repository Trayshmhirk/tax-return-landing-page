import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
   customProp?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
   ({ className, ...props }, ref) => {
      return (
         <textarea
            className={cn(
               "flex min-h-28 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
               className
            )}
            ref={ref}
            {...props}
         />
      );
   }
);
Textarea.displayName = "Textarea";

export { Textarea };
