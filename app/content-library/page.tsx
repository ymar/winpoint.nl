import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ResourceCard } from "@/components/content/resource-card"
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
import { getAllPlaybooks } from "@/lib/content"

export default function ContentLibraryPage() {
  const playbooks = getAllPlaybooks()

  const featuredResources = [
    {
      icon: BookOpen,
      iconColor: "text-blue-600",
      iconBgColor: "bg-blue-50",
      hoverColor: "group-hover:bg-blue-100",
      badge: { text: "Most Popular", bgColor: "bg-green-100", textColor: "text-green-800" },
      title: "Deal Recovery Playbook",
      description: "A comprehensive 47-page guide to systematically analyzing and recovering lost deals. Includes frameworks, templates, and real examples from successful recoveries.",
      downloadCount: "2,847",
      href: "/content-library/deal-recovery-playbook",
      buttonText: "Read Playbook",
      variant: "default" as const
    },
    {
      icon: FileText,
      iconColor: "text-green-600",
      iconBgColor: "bg-green-50",
      hoverColor: "group-hover:bg-green-100",
      badge: { text: "Template", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      title: "Loss Analysis Template",
      description: "Ready-to-use Excel spreadsheet template for tracking and analyzing your lost deals. Identify patterns and improvement opportunities with built-in formulas.",
      downloadCount: "1,923",
      href: "/content-library/loss-analysis-template",
      buttonText: "View Template"
    },
    {
      icon: Users,
      iconColor: "text-purple-600",
      iconBgColor: "bg-purple-50",
      hoverColor: "group-hover:bg-purple-100",
      badge: { text: "Scripts", bgColor: "bg-purple-100", textColor: "text-purple-800" },
      title: "Re-engagement Scripts",
      description: "Proven email and call scripts for different types of stalled deals. Customize for your specific situations and industry with 12 different scenarios covered.",
      downloadCount: "1,654",
      href: "/content-library/re-engagement-scripts",
      buttonText: "View Scripts"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Sales Recovery Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Proven playbooks, templates, and frameworks to help you recover lost deals and improve your sales process.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Button variant="outline" className="px-6">
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
              {featuredResources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Resources Section */}
      {playbooks.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">All Playbooks</h2>
                <p className="text-xl text-gray-600">
                  Complete collection of sales recovery resources and frameworks.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {playbooks.map((playbook) => (
                  <Card key={playbook.slug} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200 group">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <Badge className="mb-3 bg-blue-100 text-blue-800 text-xs">{playbook.category}</Badge>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{playbook.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{playbook.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{playbook.readTime}</span>
                        <span>{playbook.downloadCount} downloads</span>
                      </div>
                      <Link href={`/content-library/${playbook.slug}`}>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Read More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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

      <Footer />
    </div>
  )
}
