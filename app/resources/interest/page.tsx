'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const marketingAutomationUseCases = [
  {
    title: 'Lead Scoring & Qualification',
    description: 'Automatically score and qualify leads based on demographic data, behavioral signals, and engagement patterns.',
    icon: '🎯',
    automationCapabilities: [
      'Behavioral scoring based on website activity and email engagement',
      'Progressive profiling to gradually collect qualification data',
      'Automatic lead routing to appropriate sales representatives',
      'Lead nurturing workflows for prospects not yet sales-ready'
    ],
    outcome: 'Increase qualified lead conversion by 40% and reduce sales time waste'
  },
  {
    title: 'Meeting Booking Automation',
    description: 'Streamline the scheduling process with automated booking sequences and follow-up reminders.',
    icon: '📅',
    automationCapabilities: [
      'Calendar integration with automatic availability syncing',
      'Meeting confirmation and reminder email sequences',
      'No-show recovery campaigns with alternative scheduling options',
      'Meeting preparation materials sent automatically to attendees'
    ],
    outcome: 'Reduce scheduling friction by 60% and decrease no-show rates by 35%'
  },
  {
    title: 'Lead Capture Optimization',
    description: 'Maximize conversion from visitors to leads using smart forms and progressive disclosure.',
    icon: '📋',
    automationCapabilities: [
      'Smart forms that adapt based on known contact information',
      'Progressive profiling to avoid form abandonment',
      'Thank you page optimization with next-step guidance',
      'Immediate follow-up sequences for new lead captures'
    ],
    outcome: 'Improve form conversion rates by 25% and reduce bounce rates'
  },
  {
    title: 'First-Touch Attribution',
    description: 'Track and optimize the channels and campaigns that generate the highest-quality prospects.',
    icon: '📊',
    automationCapabilities: [
      'Multi-touch attribution tracking across channels',
      'Campaign performance reporting with lead quality metrics',
      'Automatic budget allocation recommendations',
      'Channel-specific nurturing workflows based on lead source'
    ],
    outcome: 'Optimize marketing spend allocation and improve lead quality by 30%'
  },
  {
    title: 'Prospect Research Automation',
    description: 'Automatically gather and surface relevant prospect information to personalize outreach.',
    icon: '🔍',
    automationCapabilities: [
      'Company and contact data enrichment from external sources',
      'Social media activity monitoring and alerts',
      'News and company update notifications',
      'Personalization token population for outreach campaigns'
    ],
    outcome: 'Increase personalized outreach efficiency and response rates by 45%'
  },
  {
    title: 'Interest-Based Segmentation',
    description: 'Automatically segment prospects based on their interests and engagement patterns for targeted messaging.',
    icon: '🎪',
    automationCapabilities: [
      'Content consumption tracking and interest scoring',
      'Dynamic list building based on engagement behaviors',
      'Interest-specific email sequences and content recommendations',
      'Product/service interest identification and routing'
    ],
    outcome: 'Improve email engagement rates by 50% through better targeting'
  }
]

export default function InterestStagePage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              Interest Stage
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
              Turn Awareness Into Qualified Interest
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              "They're paying attention" - Now it's time to separate real prospects from tire-kickers. 
              Here's how to qualify effectively and schedule meaningful conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Stage Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Where Prospects Are Mentally
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Your prospects have moved beyond just being aware of their problem. 
                  They're actively paying attention to potential solutions and evaluating 
                  whether it's worth their time to engage.
                </p>
                <p>
                  This is the critical junction where most sales processes fail - by treating 
                  all leads equally instead of qualifying effectively.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                What Typically Goes Wrong Here
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">Spray and Pray Approach</div>
                    <div className="text-slate-600 text-sm">Treating all leads the same, wasting time on unqualified prospects</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">No Systematic Qualification</div>
                    <div className="text-slate-600 text-sm">Relying on gut feel instead of structured qualification frameworks</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">Meeting Booking Friction</div>
                    <div className="text-slate-600 text-sm">Complicated scheduling processes that lose prospects</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Automation Use Cases */}
      <section className="pb-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Marketing Automation for Interest Stage
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leverage marketing automation to systematically capture, qualify, and nurture prospects 
              who are showing initial interest in your solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingAutomationUseCases.map((useCase, index) => (
              <Card key={index} className="border border-slate-200 rounded-xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{useCase.icon}</span>
                      <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                        {useCase.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                      {useCase.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm">
                        Automation Capabilities:
                      </h4>
                      <div className="space-y-2">
                        {useCase.automationCapabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-start space-x-2">
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></span>
                            <span className="text-slate-700 text-xs leading-relaxed">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">Expected Outcome:</h4>
                      <p className="text-green-600 font-semibold text-xs">{useCase.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stage Transition */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
            Ready to Move to the Next Stage?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Once you've qualified prospects and scheduled initial conversations, 
            it's time to focus on keeping them engaged through the consideration phase.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
              <Link href="/resources/consideration">
                Consideration Stage Resources →
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 px-8 py-3.5 text-lg font-medium hover:border-slate-400 transition-all duration-200" asChild>
              <Link href="/resources">
                ← Back to All Stages
              </Link>
            </Button>
          </div>
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