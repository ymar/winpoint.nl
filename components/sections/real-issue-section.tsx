import { BarChart3, RefreshCw, Target } from "lucide-react"

export function RealIssueSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              The Real Issue With Lost Deals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors shadow-sm">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">You&rsquo;re leaving money on the table</h3>
              <p className="text-slate-600 leading-relaxed">
                Your CRM shows 200 &ldquo;closed-lost&rdquo; deals from last year. Reality: 140+ were still winnable when you gave
                up.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors shadow-sm">
                <RefreshCw className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">You&rsquo;re repeating the same mistakes</h3>
              <p className="text-slate-600 leading-relaxed">
                Without systematic loss analysis, you&rsquo;ll keep losing deals for the same reasons. Month after month.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors shadow-sm">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">Competitors are picking up your scraps</h3>
              <p className="text-slate-600 leading-relaxed">
                While you chase new leads, they&rsquo;re winning back the deals you abandoned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
