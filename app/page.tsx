import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  ArrowRight,
  Star,
  BarChart3,
  RefreshCw,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-semibold text-gray-900 tracking-tight">Winpoint</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                What You Get
              </Link>
              <Link href="/content-library" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Content Library
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Pricing
              </Link>
              <Link href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                FAQ
              </Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700 shadow-sm font-medium">Book Call</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50 font-medium px-4 py-2">
              Most 'Lost' Deals Aren't Actually Lost
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              We'll analyze your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                lost deals
              </span>{" "}
              and show you exactly which ones are worth pursuing
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              —and how to win them back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
              >
                Book a 30-minute diagnostic call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-gray-300 hover:border-gray-400 font-medium bg-transparent"
              >
                View Assessment Details
              </Button>
            </div>

            <div className="mt-16 text-sm text-gray-500">
              <p>Trusted by sales teams at 200+ companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Does this sound familiar?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These scenarios happen to every sales team. The question is: what are you doing about it?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 hover:border-gray-300 transition-colors duration-200 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Lost Revenue</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A promising deal goes dark after the proposal. You follow up twice, hear nothing, and move it to
                    'Closed-Lost'.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:border-gray-300 transition-colors duration-200 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Share</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You lose a deal to a competitor you know has an inferior product, and you can't figure out why.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:border-gray-300 transition-colors duration-200 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Efficiency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your team makes the same costly mistakes on deals, quarter after quarter, because there's no system
                    for analyzing losses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Issue Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                The Real Issue With Lost Deals
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">You're leaving money on the table</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your CRM shows 200 "closed-lost" deals from last year. Reality: 140+ were still winnable when you gave
                  up.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">You're repeating the same mistakes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Without systematic loss analysis, you'll keep losing deals for the same reasons. Month after month.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitors are picking up your scraps</h3>
                <p className="text-gray-600 leading-relaxed">
                  While you chase new leads, they're winning back the deals you abandoned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Our Recovery Analysis Method
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic, data-driven approach to identifying and recovering your most valuable lost opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pattern Recognition</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      We examine your last 50 losses and group them by failure type. Pricing objections cluster
                      differently than timing issues. Budget freezes look different from stakeholder changes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Recovery Probability Scoring</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Not all deals are worth pursuing. We rank each opportunity using 12 factors including time since
                      last contact, stakeholder engagement level, and competitive landscape.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Failure Point Mapping</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      For each recoverable deal, we identify the exact moment it died. Was it after the demo? During
                      contract review? The recovery strategy depends on where it broke.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6 shadow-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Systematic Re-engagement</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Trusted by sales leaders
              </h2>
              <p className="text-xl text-gray-600">
                See how teams are recovering millions in lost revenue with our systematic approach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    "Winpoint helped us recover $2.3M in deals we had written off. Their systematic approach revealed
                    patterns we never saw coming."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">SC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sarah Chen</p>
                      <p className="text-sm text-gray-500">VP Sales, TechFlow</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    "The recovery blueprint was incredibly detailed. We went from 15% recovery rate to 47% in just two
                    quarters. Game-changing."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Marcus Rodriguez</p>
                      <p className="text-sm text-gray-500">Sales Director, CloudScale</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    "Finally, a data-driven approach to deal recovery. No more guessing why deals fail or sending random
                    follow-ups into the void."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">JW</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jennifer Walsh</p>
                      <p className="text-sm text-gray-500">CRO, DataVault</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Stop Writing Off Winnable Deals
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Recovery Assessment is a 4-week strategic deep dive into your lost pipeline. We identify your
                highest-value opportunities and deliver a clear, actionable plan to win them back.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto border-2 border-blue-100 shadow-xl bg-gradient-to-b from-white to-blue-50/30">
              <CardContent className="p-12">
                <div className="text-center mb-10">
                  <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 font-medium px-3 py-1">
                    Recovery Assessment Package
                  </Badge>
                  <div className="text-6xl font-bold text-gray-900 mb-2">€4,500</div>
                  <p className="text-gray-600 text-lg">Complete 4-week Recovery Assessment</p>
                </div>

                <div className="space-y-8 mb-10">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">Recovery Blueprint</h4>
                    <ul className="space-y-3 text-gray-600">
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
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">Implementation Toolkit</h4>
                    <ul className="space-y-3 text-gray-600">
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

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4 shadow-lg hover:shadow-xl transition-all duration-200 font-medium">
                  Book a 30-minute diagnostic call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="text-center mt-6">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-medium px-3 py-1">
                    Only 1 slot available in August
                  </Badge>
                  <p className="text-sm text-gray-500 mt-3">30-minute call • No obligation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Everything you need to know about our 4-week Recovery Assessment</p>
            </div>

            <div className="space-y-6">
              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">How long does the analysis take?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Projects take 4 weeks to complete. Based on how fast you provide access to your lost deals data, we
                    can usually get the analysis done in 4 weeks. If data collection takes longer, we can stretch into
                    the 3rd week.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What data do you need from us?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We need access to your CRM data for the last 12 months of lost deals, plus any available sales
                    notes, competitor information, and deal timelines. The more context you provide, the better our
                    analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">How does scheduling work?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Availability is first come, first serve. If you want to start the process, we'll send you the
                    payment link and the contract — when that is all signed and paid, we send over a Calendly link with
                    open slots on Tuesdays, Wednesdays, and Thursdays.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What if we want ongoing support?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer monthly strategy sessions at €500 per month to help you execute the recovery campaigns.
                    You'll notice it's not very cost-effective to have us work every lost deal. That's by design — we
                    want to help you recover your highest-value opportunities and teach your team the system without
                    becoming a permanent crutch.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Recover Your Lost Revenue?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              We identify your highest-value opportunities and deliver a clear, actionable plan to win them back.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-200 font-medium"
            >
              Book a 30-minute diagnostic call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="mt-8 text-blue-100">
              <p className="text-sm">30-minute call • No obligation • Results guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-2xl font-semibold tracking-tight">Winpoint</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Helping sales teams recover lost deals and maximize revenue potential through systematic analysis and
                strategic re-engagement.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Recovery Assessment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Strategy Sessions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Implementation Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Team Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Winpoint. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Made with ❤️ for sales teams everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
