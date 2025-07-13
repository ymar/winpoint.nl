import { Target, BarChart3, Users } from "lucide-react"

export function PrimaryFeaturesSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2>Everything you need to win deals</h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Stop losing winnable deals. Our proven frameworks help you analyze losses, re-engage prospects, and close more revenue.
          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <Target className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h3>Deal Recovery</h3>
              <p className="leading-relaxed text-base">
                Systematic approach to re-engage lost prospects and recover stalled deals using proven frameworks and strategic messaging.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <BarChart3 className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h3>Loss Analysis</h3>
              <p className="leading-relaxed text-base">
                Deep dive into your pipeline to identify patterns, understand why deals fail, and develop targeted recovery strategies.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <Users className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h3>Team Training</h3>
              <p className="leading-relaxed text-base">
                Equip your sales team with the tools, templates, and techniques to systematically recover lost opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SecondaryFeaturesSection() {
  return (
    <section
      id="secondary-features"
      aria-labelledby="secondary-features-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="secondary-features-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Simplify your sales process.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because complex sales processes kill deals. We make it simple to identify, 
            engage, and close the right opportunities.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="w-9 rounded-lg bg-blue-600">
              <svg aria-hidden="true" className="h-9 w-9" fill="none">
                <Target className="h-6 w-6 text-white m-1.5" />
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-blue-600">
              Deal Scoring
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900">
              Prioritize your pipeline effectively.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Our scoring system helps you identify which deals are worth pursuing 
              and which ones to let go.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-9 rounded-lg bg-slate-500">
              <svg aria-hidden="true" className="h-9 w-9" fill="none">
                <BarChart3 className="h-6 w-6 text-white m-1.5" />
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-slate-600">
              Pipeline Analytics
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900">
              Track what matters most.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Get insights into your sales performance with metrics that actually 
              help you close more deals.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-9 rounded-lg bg-slate-500">
              <svg aria-hidden="true" className="h-9 w-9" fill="none">
                <Users className="h-6 w-6 text-white m-1.5" />
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-medium text-slate-600">
              Team Collaboration
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900">
              Share knowledge that wins deals.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Build a knowledge base of successful strategies that your entire 
              team can leverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
