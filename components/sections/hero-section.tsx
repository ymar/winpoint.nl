import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-800 tracking-tight">
              Sales strategy{' '}
              <span className="text-indigo-600">made simple</span>{' '}
              for growing teams.
            </h1>
            <p className="mb-8 leading-relaxed text-xl text-gray-500">
              Most sales teams struggle with complex processes and scattered tools. We make it simple to win more deals with proven playbooks and strategic frameworks.
            </p>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <Button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-md text-lg font-medium">
                Work with Winpoint
              </Button>
              <Link href="/content-library">
                <Button className="inline-flex text-gray-700 bg-white border border-gray-300 py-3 px-8 focus:outline-none hover:bg-gray-50 rounded-md text-lg font-medium">
                  View Resources
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="w-full h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-4">📈</div>
                <div className="text-2xl font-semibold mb-2">Deal Recovery</div>
                <div className="text-lg opacity-90">Systematic & Strategic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
