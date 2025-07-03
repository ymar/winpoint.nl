import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-semibold tracking-tight">Winpoint</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Helping sales teams recover lost deals and maximize revenue potential through systematic analysis and
              strategic re-engagement.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/content-library" className="hover:text-white transition-colors">
                  Content Library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Playbooks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Recovery Assessment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Strategy Sessions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Implementation Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Winpoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
