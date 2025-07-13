import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Sales strategy{' '}
              <span className="text-blue-600">made simple</span>{' '}
              for growing teams.
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Most sales teams struggle with complex processes and scattered tools. We make it simple to win more deals with proven playbooks and strategic frameworks.
            </p>
            <div className="flex justify-center">
              <Button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Work with Winpoint
              </Button>
              <Link href="/content-library">
                <Button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  View Resources
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="w-full h-64 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-2">📈</div>
                <div className="text-xl font-semibold">Deal Recovery</div>
                <div className="text-sm opacity-80">Systematic & Strategic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
