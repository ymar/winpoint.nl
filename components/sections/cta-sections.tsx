import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToActionSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            Stop leaving money on the table. Transform your lost deals into revenue
            with our proven playbooks and frameworks.
          </h1>
          <Button className="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">
            Work with Winpoint
          </Button>
        </div>
      </div>
    </section>
  )
}

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">
            Ready to Recover Your Lost Revenue?
          </h2>
          <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We identify your highest-value opportunities and deliver a clear,
            actionable plan to win them back.
          </p>
          <Button variant="blue" size="lg">
            Book a 30-minute diagnostic call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 text-slate-400">
            <p className="text-sm">
              30-minute call • No obligation • Results guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
