'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatedLink } from "@/components/ui/animated-link"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 backdrop-blur-sm font-sans" style={{backgroundColor: 'rgb(246 244 238 / 0.95)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Winpoint</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <AnimatedLink 
              href="https://calendly.com/winpointnl/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Work with Winpoint
            </AnimatedLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 backdrop-blur-sm" style={{backgroundColor: 'rgb(246 244 238 / 0.95)'}}>
            <nav className="py-4 space-y-1">
              <div className="px-4 py-3 text-center">
                <AnimatedLink 
                  href="https://calendly.com/winpointnl/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Work with Winpoint
                </AnimatedLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}