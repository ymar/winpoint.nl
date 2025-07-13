import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export function PricingSection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Stop Writing Off Winnable Deals
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Our Recovery Assessment is a 4-week strategic deep dive into your lost pipeline. We identify your highest-value opportunities and deliver a clear, actionable plan to win them back.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/2 md:w-1/2 w-full mx-auto">
            <div className="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
              <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                ASSESSMENT
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                RECOVERY ASSESSMENT PACKAGE
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>€4,500</span>
              </h1>
              <p className="text-gray-600 text-base mb-6">Complete 4-week Recovery Assessment</p>
              
              <div className="mb-6">
                <h3 className="text-gray-900 text-lg title-font font-medium mb-3">Recovery Blueprint</h3>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  12 deals ranked by recovery probability with scoring methodology
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Loss pattern analysis explaining why each deal failed
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Priority ranking: which deals to pursue first and in what order
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Key messages for each deal type based on failure analysis
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-900 text-lg title-font font-medium mb-3">Implementation Toolkit</h3>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Email framework showing structure and approach
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Conversation guide with key talking points for each deal type
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                  Recovery tracking template to measure progress
                </p>
              </div>

              <Button className="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
                Book a 30-minute diagnostic call
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Only 1 slot available in August
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
