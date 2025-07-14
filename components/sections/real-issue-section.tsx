import { BarChart3, RefreshCw, Target } from "lucide-react"

export function RealIssueSection() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4 tracking-tight">
            The Real Issue With Lost Deals
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-50 border border-gray-200 p-8 flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h2 className="text-gray-800 text-xl title-font font-medium tracking-tight">You&apos;re leaving money on the table</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-gray-600">
                  Your CRM shows 200 &ldquo;closed-lost&rdquo; deals from last year. Reality: 140+ were still winnable when you gave
                  up.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-50 border border-gray-200 p-8 flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-gray-800 text-xl title-font font-medium tracking-tight">You&apos;re repeating the same mistakes</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-gray-600">
                  Without systematic loss analysis, you&apos;ll keep losing deals for the same reasons. Month after month.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-50 border border-gray-200 p-8 flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-gray-800 text-xl title-font font-medium tracking-tight">Competitors are picking up your scraps</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-gray-600">
                  While you chase new leads, they&apos;re winning back the deals you abandoned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
