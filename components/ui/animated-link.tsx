import React from 'react'

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
  className?: string
}

export function AnimatedLink({ href, children, target, rel, className = "" }: AnimatedLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`
        inline-flex items-center
        text-lg font-medium font-sans text-slate-900
        relative
        transition-all duration-300 ease-out
        hover:text-blue-600
        group
        ${className}
      `}
    >
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Animated underline */}
      <span 
        className="
          absolute bottom-0 left-0 
          w-0 h-0.5 
          bg-blue-600 
          transition-all duration-300 ease-out
          group-hover:w-full
        "
      />
    </a>
  )
}