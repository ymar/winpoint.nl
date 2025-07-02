import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Target,
  Users,
  ArrowRight,
  Download,
  BookOpen,
  FileText,
  Video,
  Search,
  Filter,
} from "lucide-react"
import Link from "next/link"

export default function ContentLibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-semibold text-gray-900 tracking-tight">Winpoint</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                What You Get
              </Link>
              <Link href="/content-library" className="text-blue-600 font-medium">
                Content Library
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/#faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                FAQ
              </Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700 shadow-sm font-medium">Book Call</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50 font-medium px-4 py-2">
              Free Resources
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Content{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Library
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Free playbooks, templates, and resources to help you improve your deal recovery and sales processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button variant="outline" className="bg-transparent border-gray-300">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Featured Resources</h2>
              <p className="text-xl text-gray-600">
                Our most popular and effective tools for deal recovery and sales improvement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="mb-4 bg-green-100 text-green-800 text-xs">Most Popular</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Deal Recovery Playbook</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A comprehensive 47-page guide to systematically analyzing and recovering lost deals. Includes
                    frameworks, templates, and real examples from successful recoveries.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Download className="h-4 w-4 mr-2" />
                    <span>2,847 downloads</span>
                  </div>
                  <Link href="/content-library/deal-recovery-playbook">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 font-medium">
                      Read Playbook
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge className="mb-4 bg-blue-100 text-blue-800 text-xs">Template</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Loss Analysis Template</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Ready-to-use Excel spreadsheet template for tracking and analyzing your lost deals. Identify
                    patterns and improvement opportunities with built-in formulas.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Download className="h-4 w-4 mr-2" />
                    <span>1,923 downloads</span>
                  </div>
                  <Link href="/content-library/loss-analysis-template">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-green-50 transition-colors bg-transparent"
                    >
                      View Template
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge className="mb-4 bg-purple-100 text-purple-800 text-xs">Scripts</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Re-engagement Scripts</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Proven email and call scripts for different types of stalled deals. Customize for your specific
                    situations and industry with 12 different scenarios covered.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Download className="h-4 w-4 mr-2" />
                    <span>1,654 downloads</span>
                  </div>
                  <Link href="/content-library/re-engagement-scripts">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-purple-50 transition-colors bg-transparent"
                    >
                      View Scripts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">All Resources</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  All
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Playbooks
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Templates
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Scripts
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Case Studies
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Videos
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Additional Resources */}
              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Competitor Analysis Framework</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Systematic approach to understanding why you're losing to competitors and how to counter their
                    advantages.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Deal Recovery Masterclass</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    45-minute video training on the psychology of deal recovery and timing your re-engagement perfectly.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Watch Free
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stakeholder Mapping Template</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Visual template for mapping decision makers and influencers in complex B2B sales processes.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Budget Objection Responses</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    15 proven responses to common budget objections, with context for when to use each approach.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Timing Recovery Strategies</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    How to handle "not the right time" objections and create urgency without being pushy.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-5 w-5 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Study: $2.3M Recovery</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Detailed breakdown of how TechFlow recovered $2.3M in lost deals using systematic analysis.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Want More Advanced Resources?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get access to our complete library of advanced sales playbooks, detailed case studies, and proprietary
                  frameworks when you book a diagnostic call.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-medium text-lg px-8 py-4">
                  Book Diagnostic Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500 mt-4">30-minute call • No obligation • Immediate value</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-2xl font-semibold tracking-tight">Winpoint</span>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Helping sales teams recover lost deals and maximize revenue potential through systematic analysis and
                strategic re-engagement.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/content-library" className="hover:text-white transition-colors">
                    Content Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Playbooks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/#pricing" className="hover:text-white transition-colors">
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
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Winpoint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
