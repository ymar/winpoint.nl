import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target, Users } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Does this sound familiar?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              These scenarios happen to every sales team. The question is: what are you doing about it?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10 rounded-2xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors shadow-sm">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">Lost Revenue</h3>
                <p className="text-slate-600 leading-relaxed">
                  A promising deal goes dark after the proposal. You follow up twice, hear nothing, and move it to
                  &lsquo;Closed-Lost&rsquo;.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10 rounded-2xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors shadow-sm">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">Market Share</h3>
                <p className="text-slate-600 leading-relaxed">
                  You lose a deal to a competitor you know has an inferior product, and you can&rsquo;t figure out why.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10 rounded-2xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors shadow-sm">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">Efficiency</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your team makes the same costly mistakes on deals, quarter after quarter, because there&rsquo;s no system
                  for analyzing losses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
