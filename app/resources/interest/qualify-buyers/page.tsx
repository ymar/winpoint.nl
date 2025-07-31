'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const resources = [
  {
    title: "BANT+ Qualification Scorecard",
    description: "Interactive Excel calculator that scores prospects across 7 qualification dimensions with weighted scoring and priority rankings.",
    type: "Excel Calculator",
    format: "Excel Template",
    downloadUrl: "#",
    featured: true,
    preview: "Scores Budget, Authority, Need, Timeline + 3 additional factors"
  },
  {
    title: "25 Strategic Qualifying Questions",
    description: "Psychology-based questions organized by category that reveal true buying intent without sounding like an interrogation.",
    type: "Question Bank",
    format: "PDF Guide",
    downloadUrl: "#",
    featured: false,
    preview: "Questions for Budget, Authority, Need, Timeline, Competition"
  },
  {
    title: "Red Flag Identification Checklist",
    description: "Comprehensive guide to recognizing when prospects will never buy, saving time and resources.",
    type: "Checklist",
    format: "PDF Checklist",
    downloadUrl: "#",
    featured: false,
    preview: "15 warning signs that indicate a prospect won't close"
  }
]

const platforms = [
  {
    name: 'HubSpot',
    description: 'Complete setup guide for HubSpot qualification workflows',
    slug: 'hubspot-setup',
    features: [
      'Lead scoring configuration',
      'Qualification property setup',
      'Automated workflow creation',
      'Dashboard and reporting setup'
    ]
  },
  {
    name: 'Marketo',
    description: 'Step-by-step Marketo qualification automation setup',
    slug: 'marketo-setup', 
    features: [
      'Smart list qualification criteria',
      'Lead scoring model setup',
      'Behavioral tracking configuration',
      'Sales alert automation'
    ]
  }
]

export default function QualifyBuyersPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-semibold text-slate-900 tracking-tight">Winpoint</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/resources" className="text-slate-600 hover:text-slate-900 transition-colors">
                Resources
              </Link>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
                <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Sprint</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              🎯 Qualify Potential Buyers
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
              Systematic Buyer Qualification
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Not all prospects are created equal. Build systematic qualification processes 
              to identify and prioritize the ones worth your time.
            </p>
          </div>
        </div>
      </section>

      {/* Problem/Solution Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-900 mb-4">
                  🚨 The Problem
                </h3>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Sales reps waste 67% of time on unqualified leads</li>
                  <li>• No systematic way to prioritize prospects</li>
                  <li>• Qualification is inconsistent across the team</li>
                  <li>• Real buyers get lost in the noise</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  💡 The Solution
                </h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• BANT+ framework with 7 qualification dimensions</li>
                  <li>• Weighted scoring system for prioritization</li>
                  <li>• Psychology-based qualifying questions</li>
                  <li>• Automated red flag identification</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  📈 The Outcome
                </h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• 3x improvement in qualification efficiency</li>
                  <li>• 40% increase in time spent with real buyers</li>
                  <li>• 25% improvement in close rates</li>
                  <li>• Consistent qualification across team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="pb-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Qualification Resources
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to build a systematic buyer qualification process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className={`border rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                resource.featured ? 'border-blue-200' : 'border-slate-200'
              }`}>
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-lg ${
                        resource.featured ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {resource.type}
                      </span>
                      {resource.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                      {resource.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    {resource.preview && (
                      <div className="bg-slate-50 rounded-lg p-3 mb-6">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Preview:</div>
                        <div className="text-xs text-slate-600">{resource.preview}</div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">
                        {resource.format}
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                        Download Free
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Setup Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Implementation Guides
            </h2>
            <p className="text-lg text-slate-600">
              Step-by-step setup guides for your CRM platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {platform.name} Setup
                  </h3>
                  <p className="text-slate-600">
                    {platform.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/resources/interest/qualify-buyers/${platform.slug}`}
                  className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Get {platform.name} Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Related Use Cases
            </h2>
            <p className="text-slate-600">
              Also check out these related solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              href="/resources/interest/prospect-outreach"
              className="block bg-white rounded-lg p-6 border-2 border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">📅</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600">
                    Schedule Prospect Outreach
                  </h3>
                  <span className="text-xs text-green-600 font-semibold">Interest Stage</span>
                </div>
              </div>
              <p className="text-slate-600">
                Once you've qualified prospects, optimize your meeting booking process and follow-up sequences.
              </p>
            </Link>

            <Link 
              href="/resources/consideration/track-engagement"
              className="block bg-white rounded-lg p-6 border-2 border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">📊</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600">
                    Track Deal Engagement
                  </h3>
                  <span className="text-xs text-blue-600 font-semibold">Consideration Stage</span>
                </div>
              </div>
              <p className="text-slate-600">
                Monitor qualified prospects as they move through your consideration process.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Qualification System?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a personalized qualification framework designed specifically for your 
            industry, deal size, and sales process.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Get Custom Qualification System
          </button>
        </div>
      </section>
    </div>
  )
}