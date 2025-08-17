'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-semibold text-slate-900 tracking-tight">Winpoint</span>
            </Link>
          </div>

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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
              <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Work with Winpoint</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}