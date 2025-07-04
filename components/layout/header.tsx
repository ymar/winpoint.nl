import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center">
            <li>
              <Link href="/" className="block">
                <span className="sr-only">Home</span>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <span className="text-2xl font-display font-semibold text-slate-900 tracking-tight">Winpoint</span>
                </div>
              </Link>
            </li>
            <li className="ml-12 hidden md:block">
              <Link href="/content-library" className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                Content Library
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#features" className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                Features
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#pricing" className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                Pricing
              </Link>
            </li>
            <li className="ml-auto md:ml-8">
              <Button variant="blue">
                <span>
                  Get started<span className="hidden lg:inline"> today</span>
                </span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
