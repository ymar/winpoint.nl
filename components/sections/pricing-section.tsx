import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export function PricingSection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-800 tracking-tight">
            Stop Writing Off Winnable Deals
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-500">
            Our Recovery Assessment is a 4-week strategic deep dive into your lost pipeline. We identify your highest-value opportunities and deliver a clear, actionable plan to win them back.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/2 md:w-1/2 w-full mx-auto">
            <div className="h-full p-8 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-white">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl font-medium">
                STRATEGIC ASSESSMENT
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-gray-500">
                DEAL RECOVERY ASSESSMENT
              </h2>
              <h1 className="text-5xl text-gray-800 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 font-medium">
                <span>€4,500</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">4-Week Strategic Revenue Recovery Program</p>
              
              <div className="mb-8">
                <h3 className="text-gray-800 text-xl title-font font-medium mb-4 tracking-tight">Detailed Recovery Analysis</h3>
                <p className="flex items-center text-gray-600 mb-3">
                  <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  12 lost deals scored and ranked by winback probability using our proven methodology
                </p>
                <p className="flex items-center text-gray-600 mb-3">
                  <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Root cause analysis revealing exactly why each opportunity was lost
                </p>
                <p className="flex items-center text-gray-600 mb-3">
                  <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Strategic priority roadmap: which deals to approach first for maximum ROI
                </p>
                <p className="flex items-center text-gray-600 mb-8">
                  <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Custom messaging strategies tailored to each deal&apos;s specific failure pattern
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-gray-800 text-xl title-font font-medium mb-4 tracking-tight">Ready-to-Use Recovery Tools</h3>
                <p className="flex items-center text-gray-600 mb-3">
                  <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Proven email templates with structure and messaging that converts
                </p>
                <p className="flex items-center text-gray-600 mb-3">
                  <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Call scripts with key talking points customized for each deal scenario
                </p>
                <p className="flex items-center text-gray-600 mb-8">
                  <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Progress tracking dashboard to monitor recovery success and ROI
                </p>
              </div>

              <Button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-3 px-6 w-full focus:outline-none hover:bg-indigo-600 rounded-md font-medium">
                Schedule Your Strategy Call
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Button>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Limited availability - Only 1 assessment slot remaining this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
