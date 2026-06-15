import { Search } from 'lucide-react'
import type { InputHTMLAttributes } from 'react'

interface PageSearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  wrapperClassName?: string
}

/** Wider page-level search: full width on mobile, 320–450px on desktop. */
export function PageSearchInput({
  className = '',
  wrapperClassName = '',
  ...props
}: PageSearchInputProps) {
  return (
    <div
      className={`relative w-full sm:min-w-[320px] sm:max-w-[450px] shrink-0 ${wrapperClassName}`}
    >
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-text-secondary pointer-events-none"
        aria-hidden
      />
      <input
        type="search"
        className={`w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 ${className}`}
        {...props}
      />
    </div>
  )
}
