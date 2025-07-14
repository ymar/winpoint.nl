import { Search, Target, MapPin, RefreshCw } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4 tracking-tight">
            Our Recovery Analysis Method
          </h2>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A systematic, data-driven approach to identifying and recovering your most valuable lost opportunities.
          </p>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full inline-flex items-center justify-center">
                <Search className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h3 className="font-medium title-font text-gray-800 mb-2 text-xl tracking-tight">Pattern Recognition</h3>
                <p className="leading-relaxed text-gray-600">We examine your last 50 losses and group them by failure type. Pricing objections cluster differently than timing issues. Budget freezes look different from stakeholder changes.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full inline-flex items-center justify-center">
                <Target className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h3 className="font-medium title-font text-gray-800 mb-2 text-xl tracking-tight">Recovery Probability Scoring</h3>
                <p className="leading-relaxed text-gray-600">Not all deals are worth pursuing. We rank each opportunity using 12 factors including time since last contact, stakeholder engagement level, and competitive landscape.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full inline-flex items-center justify-center">
                <MapPin className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h3 className="font-medium title-font text-gray-800 mb-2 text-xl tracking-tight">Failure Point Mapping</h3>
                <p className="leading-relaxed text-gray-600">For each recoverable deal, we identify the exact moment it died. Was it after the demo? During contract review? The recovery strategy depends on where it broke.</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full inline-flex items-center justify-center">
                <RefreshCw className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h3 className="font-medium title-font text-gray-800 mb-2 text-xl tracking-tight">Systematic Re-engagement</h3>
                <p className="leading-relaxed text-gray-600">We create specific messaging for each failure pattern. Budget timing gets different treatment than stakeholder buy-in issues. Feature gaps need different approaches than pricing concerns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
