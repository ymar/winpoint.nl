import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToActionSection() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-800 tracking-tight">
            Stop leaving money on the table. Transform your lost deals into revenue
            with our proven playbooks and frameworks.
          </h1>
          <Button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-md text-lg mt-10 sm:mt-0 font-medium">
            Work with Winpoint
          </Button>
        </div>
      </div>
    </section>
  )
}

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/95 to-purple-700/95"></div>
      <div className="relative container px-5 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium title-font mb-8 tracking-tight">
            Ready to Recover Your Lost Revenue?
          </h2>
          <p className="text-xl mb-12 text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            We identify your highest-value opportunities and deliver a clear,
            actionable plan to win them back.
          </p>
          <Button className="text-indigo-600 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-gray-50 rounded-md text-lg font-medium">
            Book a 30-minute diagnostic call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 text-indigo-200">
            <p className="text-sm">
              30-minute call • No obligation • Results guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
