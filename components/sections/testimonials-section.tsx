import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Trusted by sales leaders
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              See how teams are recovering millions in lost revenue with our systematic approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 text-lg leading-relaxed">
                  &ldquo;Winpoint helped us recover $2.3M in deals we had written off. Their systematic approach revealed
                  patterns we never saw coming.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mr-4 flex items-center justify-center shadow-sm">
                    <span className="text-white font-semibold text-sm">SC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Sarah Chen</p>
                    <p className="text-sm text-slate-500">VP Sales, TechFlow</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 text-lg leading-relaxed">
                  &ldquo;The recovery blueprint was incredibly detailed. We went from 15% recovery rate to 47% in just two
                  quarters. Game-changing.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mr-4 flex items-center justify-center shadow-sm">
                    <span className="text-white font-semibold text-sm">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Marcus Rodriguez</p>
                    <p className="text-sm text-slate-500">Sales Director, CloudScale</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 text-lg leading-relaxed">
                  &ldquo;Finally, a data-driven approach to deal recovery. No more guessing why deals fail or sending random
                  follow-ups into the void.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mr-4 flex items-center justify-center shadow-sm">
                    <span className="text-white font-semibold text-sm">JW</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Jennifer Walsh</p>
                    <p className="text-sm text-slate-500">CRO, DataVault</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
