'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-semibold text-slate-900 tracking-tight">Winpoint</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services" 
              className={`transition-colors ${
                isActive('/services') 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/resources" 
              className={`transition-colors ${
                isActive('/resources') 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Resources
            </Link>
            <Link 
              href="/manifesto" 
              className={`transition-colors ${
                isActive('/manifesto') 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Manifesto
            </Link>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
              <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Work with Winpoint</a>
            </Button>
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
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm">
            <nav className="py-4 space-y-1">
              <Link 
                href="/services" 
                className={`block px-4 py-3 text-base font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link 
                href="/resources" 
                className={`block px-4 py-3 text-base font-medium transition-colors ${
                  isActive('/resources') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
              <Link 
                href="/manifesto" 
                className={`block px-4 py-3 text-base font-medium transition-colors ${
                  isActive('/manifesto') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={closeMobileMenu}
              >
                Manifesto
              </Link>
              <div className="px-4 py-3">
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" 
                  asChild
                  onClick={closeMobileMenu}
                >
                  <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">
                    Work with Winpoint
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}