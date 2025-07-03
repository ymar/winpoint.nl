import { cn } from "@/lib/utils"

interface MDXComponentsProps {
  [key: string]: any
}

export const MDXComponents: MDXComponentsProps = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "text-4xl font-bold text-gray-900 mb-8 tracking-tight border-b border-gray-200 pb-4",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "text-3xl font-semibold text-gray-900 mb-6 mt-12 tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "text-2xl font-semibold text-gray-900 mb-4 mt-8",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "text-xl font-semibold text-gray-900 mb-3 mt-6",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "text-gray-700 leading-relaxed mb-6 text-lg",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "list-decimal list-inside text-gray-700 space-y-2 mb-6 ml-4",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn(
        "text-gray-700 leading-relaxed",
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "border-l-4 border-blue-500 pl-6 py-2 italic text-gray-600 bg-blue-50 rounded-r-lg mb-6",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn(
        "font-semibold text-gray-900",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table
        className={cn(
          "w-full border-collapse border border-gray-300",
          className
        )}
        {...props}
      />
    </div>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold text-gray-900",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border border-gray-300 px-4 py-2 text-gray-700",
        className
      )}
      {...props}
    />
  ),
}
