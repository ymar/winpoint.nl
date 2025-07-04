import { Button } from "@/components/ui/button"
import { Target, BarChart3, Users } from "lucide-react"

export function PrimaryFeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent"></div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-400 to-purple-400 opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="features-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Everything you need to win deals.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Stop losing winnable deals. Our proven frameworks help you analyze losses, 
            re-engage prospects, and close more revenue.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
              <div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600">
                <h3>
                  <span className="font-display text-lg text-blue-600 lg:text-white">
                    Deal Recovery
                  </span>
                </h3>
                <p className="mt-2 hidden text-sm lg:block text-white">
                  Systematic approach to re-engage lost prospects and recover stalled deals.
                </p>
              </div>
              
              <div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600">
                <h3>
                  <span className="font-display text-lg text-blue-100 hover:text-white lg:text-white">
                    Loss Analysis
                  </span>
                </h3>
                <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                  Deep dive analysis to understand why deals are lost and how to prevent it.
                </p>
              </div>
              
              <div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600">
                <h3>
                  <span className="font-display text-lg text-blue-100 hover:text-white lg:text-white">
                    Sales Playbooks
                  </span>
                </h3>
                <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                  Proven scripts and frameworks for common sales scenarios.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-2xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem] ring-1 ring-white/10">
              <div className="p-8 bg-white rounded-xl">
                <div className="space-y-4">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-4 bg-blue-200 rounded w-2/3"></div>
                  <div className="h-32 bg-slate-100 rounded"></div>
                </div>
              </div>
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
