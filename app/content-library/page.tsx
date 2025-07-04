import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  ArrowRight,
  BookOpen,
  Search,
  Filter,
} from "lucide-react"
import Link from "next/link"
import { getAllPlaybooks } from "@/lib/content"

export default function ContentLibraryPage() {
  const playbooks = getAllPlaybooks()

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

      {/* All Playbooks Section - Now the main featured section */}
      {playbooks.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Featured Playbooks</h2>
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
                <Button variant="blue" size="lg" className="font-medium text-lg px-8 py-4">
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
