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
  Clock,
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">All Playbooks</h2>
                <p className="text-xl text-gray-600">
                  Complete collection of sales recovery resources and frameworks.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {playbooks.map((playbook) => (
                  <Link key={playbook.slug} href={`/content-library/${playbook.slug}`} className="group">
                    <Card className="border border-gray-200 bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer h-full">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-1 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-sm">
                            <BookOpen className="h-6 w-6 text-white" />
                          </div>
                          <Badge className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 group-hover:bg-blue-100 transition-colors">{playbook.category}</Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{playbook.title}</h3>
                        
                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{playbook.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{playbook.readTime}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
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
