export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Our Recovery Analysis Method
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A systematic, data-driven approach to identifying and recovering your most valuable lost opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6 shadow-lg group-hover:bg-blue-700 transition-colors ring-1 ring-blue-500/20">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 font-display">Pattern Recognition</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We examine your last 50 losses and group them by failure type. Pricing objections cluster
                    differently than timing issues. Budget freezes look different from stakeholder changes.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6 shadow-lg group-hover:bg-blue-700 transition-colors ring-1 ring-blue-500/20">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 font-display">Recovery Probability Scoring</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Not all deals are worth pursuing. We rank each opportunity using 12 factors including time since
                    last contact, stakeholder engagement level, and competitive landscape.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6 shadow-lg group-hover:bg-blue-700 transition-colors ring-1 ring-blue-500/20">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 font-display">Failure Point Mapping</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    For each recoverable deal, we identify the exact moment it died. Was it after the demo? During
                    contract review? The recovery strategy depends on where it broke.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6 shadow-lg group-hover:bg-blue-700 transition-colors ring-1 ring-blue-500/20">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 font-display">Systematic Re-engagement</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We create specific messaging for each failure pattern. Budget timing gets different treatment than
                    stakeholder buy-in issues. Feature gaps need different approaches than pricing concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
