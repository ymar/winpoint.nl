import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToActionSection() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700"></div>
      <div
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-400 to-purple-400 opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Stop leaving money on the table. Transform your lost deals into 
            revenue with our proven playbooks and frameworks.
          </p>
          <Button variant="white" size="lg" className="mt-10">
            Get 30 days free
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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">Ready to Recover Your Lost Revenue?</h2>
          <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We identify your highest-value opportunities and deliver a clear, actionable plan to win them back.
          </p>
          <Button
            variant="white"
            size="lg"
          >
            Book a 30-minute diagnostic call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 text-slate-400">
            <p className="text-sm">30-minute call • No obligation • Results guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
