import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Stop Writing Off Winnable Deals
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our Recovery Assessment is a 4-week strategic deep dive into your lost pipeline. We identify your
              highest-value opportunities and deliver a clear, actionable plan to win them back.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-blue-100 shadow-2xl shadow-blue-900/10 bg-gradient-to-b from-white to-blue-50/30 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            <CardContent className="p-12">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 font-medium px-3 py-1 rounded-full shadow-sm">
                  Recovery Assessment Package
                </Badge>
                <div className="text-6xl font-bold text-slate-900 mb-2 font-display">€4,500</div>
                <p className="text-slate-600 text-lg">Complete 4-week Recovery Assessment</p>
              </div>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg font-display">Recovery Blueprint</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>12 deals ranked by recovery probability with scoring methodology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Loss pattern analysis explaining why each deal failed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Priority ranking: which deals to pursue first and in what order</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Key messages for each deal type based on failure analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Competitive gaps that killed your deals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Stakeholder mapping for each opportunity</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 text-lg font-display">Implementation Toolkit</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Email framework showing structure and approach (not copy-paste templates)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Conversation guide with key talking points for each deal type</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Recovery tracking template to measure progress</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Deal loss analysis form for continuous improvement</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button variant="default" size="lg" className="w-full">
                Book a 30-minute diagnostic call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="text-center mt-6">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-medium px-3 py-1 rounded-full shadow-sm">
                  Only 1 slot available in August
                </Badge>
                <p className="text-sm text-slate-500 mt-3">30-minute call • No obligation</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
