import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900 tracking-tight">Winpoint</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/content-library" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Content Library
            </Link>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700 shadow-sm font-medium">Book Call</Button>
        </div>
      </div>
    </header>
  )
}
