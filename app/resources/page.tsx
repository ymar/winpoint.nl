'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const bowtieStages = [
  {
    id: 'interest',
    title: 'Interest Stage',
    subtitle: 'They\'re paying attention',
    description: 'Turn awareness into qualified interest',
    useCases: [
      {
        title: 'Qualify Potential Buyers',
        description: 'BANT+ scoring framework and qualification workflows',
        icon: '🎯',
        slug: 'qualify-buyers'
      },
      {
        title: 'Schedule Prospect Outreach', 
        description: 'Meeting booking optimization and follow-up sequences',
        icon: '📅',
        slug: 'prospect-outreach'
      }
    ]
  },
  {
    id: 'consideration',
    title: 'Consideration Stage',
    subtitle: 'They\'re actively evaluating',
    description: 'Keep engaged prospects moving forward',
    useCases: [
      {
        title: 'Track Deal Engagement',
        description: 'Email engagement scoring and behavioral tracking',
        icon: '📊',
        slug: 'track-engagement'
      },
      {
        title: 'Follow-Up Systems',
        description: '7-touch nurture sequences and multi-channel campaigns',
        icon: '🔄',
        slug: 'follow-up-systems'
      }
    ]
  },
  {
    id: 'purchase',
    title: 'Purchase Stage',
    subtitle: 'They\'re ready to decide',
    description: 'Convert consideration into closed deals',
    useCases: [
      {
        title: 'Revive Stalled Conversations',
        description: 'Breakup email sequences and re-engagement campaigns',
        icon: '⚡',
        slug: 'revive-stalled-deals'
      },
      {
        title: 'Identify At-Risk Deals',
        description: 'Deal health scoring and early warning systems',
        icon: '🚨',
        slug: 'at-risk-identification'
      }
    ]
  },
  {
    id: 'retention',
    title: 'Retention Stage',
    subtitle: 'Keeping them successful',
    description: 'Onboard and retain customers effectively',
    useCases: [
      {
        title: 'Customer Onboarding',
        description: 'Systematic onboarding sequences and milestone tracking',
        icon: '🚀',
        slug: 'customer-onboarding'
      },
      {
        title: 'Health Score Monitoring',
        description: 'Early warning systems for churn prevention',
        icon: '💚',
        slug: 'health-monitoring'
      }
    ]
  },
  {
    id: 'expansion',
    title: 'Expansion Stage',
    subtitle: 'Growing the account',
    description: 'Identify and execute upsell opportunities',
    useCases: [
      {
        title: 'Upsell Opportunity Detection',
        description: 'Usage-based triggers and expansion signals',
        icon: '📈',
        slug: 'upsell-detection'
      },
      {
        title: 'Cross-Sell Campaigns',
        description: 'Automated cross-sell sequences and campaigns',
        icon: '🔄',
        slug: 'cross-sell-campaigns'
      }
    ]
  }
]

export default function ResourcesPage() {
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
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
              Deal Progression Resources
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Find exactly what you need based on where your prospects are in their buying journey. 
              Organized by bowtie stage for systematic deal progression.
            </p>
           
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
                Download All Resources
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 px-8 py-3.5 text-lg font-medium hover:border-slate-400 transition-all duration-200">
                Get Custom Strategy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bowtie Stages */}
      <section className="pb-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row - Sales Stages */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Sales Journey</h3>
            <p className="text-slate-600">From initial interest to closed deals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {bowtieStages.slice(0, 3).map((stage) => (
              <Card key={stage.id} className="border border-slate-200 rounded-xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-8 lg:p-10">
                    <div className="mb-6">
                      <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-2 tracking-tight">
                        {stage.title}
                      </h2>
                      <p className="text-slate-500 font-medium mb-4">
                        {stage.subtitle}
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {stage.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                          <span className="text-xl flex-shrink-0">{useCase.icon}</span>
                          <div>
                            <h3 className="font-semibold text-slate-900 text-sm">
                              {useCase.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {useCase.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3">
                      <Link href={`/resources/${stage.id}`}>
                        Explore {stage.title} →
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Row - Customer Success Stages */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Customer Success Journey</h3>
            <p className="text-slate-600">Retention and growth after the sale</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bowtieStages.slice(3, 5).map((stage) => (
              <Card key={stage.id} className="border border-slate-200 rounded-xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-8 lg:p-10">
                    <div className="mb-6">
                      <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-2 tracking-tight">
                        {stage.title}
                      </h2>
                      <p className="text-slate-500 font-medium mb-4">
                        {stage.subtitle}
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {stage.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                          <span className="text-xl flex-shrink-0">{useCase.icon}</span>
                          <div>
                            <h3 className="font-semibold text-slate-900 text-sm">
                              {useCase.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {useCase.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3">
                      <Link href={`/resources/${stage.id}`}>
                        Explore {stage.title} →
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              How to Use This Resource Library
            </h2>
            <p className="text-lg text-slate-600">
              Three simple steps to find the right solution for your deal progression challenge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Identify Your Stage</h3>
              <p className="text-slate-600 leading-relaxed">
                Where are most of your deals getting stuck? Pick the stage that matches your biggest challenge.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Choose Your Use Case</h3>
              <p className="text-slate-600 leading-relaxed">
                Select the specific problem you want to solve. Each use case has targeted solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Implement & Scale</h3>
              <p className="text-slate-600 leading-relaxed">
                Follow the step-by-step setup guides for your CRM platform and start seeing results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Get a personalized deal progression system designed specifically for your 
            sales process, industry, and buyer journey.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
            <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Strategy Session</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-semibold text-slate-900 tracking-tight">Winpoint</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <span className="text-slate-600">© 2024 Winpoint. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}