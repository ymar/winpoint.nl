'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const marketingAutomationUseCases = [
  {
    title: 'Engagement Scoring & Tracking',
    description: 'Monitor prospect engagement across all touchpoints to identify hot opportunities and at-risk deals.',
    icon: '📊',
    automationCapabilities: [
      'Email engagement scoring with opens, clicks, and time spent',
      'Website behavior tracking with content consumption patterns',
      'Proposal and document interaction monitoring',
      'Multi-channel engagement aggregation and scoring'
    ],
    outcome: 'Identify 40% more sales-ready opportunities and prevent deal stalling'
  },
  {
    title: 'Nurture Campaign Sequences',
    description: 'Automated drip campaigns that educate prospects and maintain momentum through the evaluation process.',
    icon: '🔄',
    automationCapabilities: [
      'Multi-touch educational email sequences based on prospect interests',
      'Content recommendations based on engagement history',
      'Automated follow-up scheduling based on engagement levels',
      'Dynamic content personalization for different buyer personas'
    ],
    outcome: 'Increase email engagement by 60% and reduce sales cycle length by 25%'
  },
  {
    title: 'Competitive Intelligence',
    description: 'Automatically surface competitive information and arm sales teams with battle cards.',
    icon: '⚔️',
    automationCapabilities: [
      'Competitor mention detection in prospect communications',
      'Automated competitive battle card delivery to sales team',
      'Competitive content recommendations for prospects',
      'Market positioning message optimization based on competitive landscape'
    ],
    outcome: 'Improve win rates against competitors by 35% through better positioning'
  },
  {
    title: 'Proposal Automation',
    description: 'Streamline proposal creation and delivery with automated templates and tracking.',
    icon: '📄',
    automationCapabilities: [
      'Dynamic proposal generation based on prospect requirements',
      'Automated proposal delivery with engagement tracking',
      'Follow-up sequences for proposal reviews and feedback',
      'ROI calculator integration with personalized value propositions'
    ],
    outcome: 'Reduce proposal creation time by 50% and improve acceptance rates'
  },
  {
    title: 'Stakeholder Mapping',
    description: 'Identify and engage all decision-makers and influencers in the buying process.',
    icon: '👥',
    automationCapabilities: [
      'Automatic stakeholder identification from email signatures and interactions',
      'Role-based content delivery for different stakeholder types',
      'Multi-stakeholder engagement campaigns',
      'Buying committee influence mapping and alerts'
    ],
    outcome: 'Increase deal size by 30% through better stakeholder engagement'
  },
  {
    title: 'Objection Handling Automation',
    description: 'Proactively address common objections with automated content delivery and sales alerts.',
    icon: '🛡️',
    automationCapabilities: [
      'Objection pattern recognition from prospect communications',
      'Automatic delivery of objection-handling content',
      'Sales alert triggers for common objection patterns',
      'Success story and case study recommendations based on objections'
    ],
    outcome: 'Reduce objection-related deal loss by 45% through proactive handling'
  }
]

export default function ConsiderationStagePage() {
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
              Consideration Stage
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
              Keep Engaged Prospects Moving Forward
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              "They're actively evaluating" - This is where 67% of deals stall. Here's how to 
              maintain momentum and track real engagement during the critical consideration phase.
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
                  Your prospects are actively comparing solutions, evaluating options, 
                  and trying to build internal consensus. They're engaged but cautious.
                </p>
                <p>
                  This is the make-or-break stage. Without proper engagement tracking 
                  and systematic follow-up, even hot prospects go cold.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                  <div className="flex items-center">
                    <span className="text-red-500 text-2xl mr-3">⚠️</span>
                    <div>
                      <div className="font-bold text-red-900">Critical Stat</div>
                      <div className="text-red-800">67% of deals stall in consideration phase</div>
                    </div>
                  </div>
                </div>
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
                    <div className="font-semibold text-slate-900">No Engagement Visibility</div>
                    <div className="text-slate-600 text-sm">Can't tell who's genuinely interested vs. going through motions</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">Inconsistent Follow-Up</div>
                    <div className="text-slate-600 text-sm">Ad-hoc communication that lets prospects slip away</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">Wrong Timing</div>
                    <div className="text-slate-600 text-sm">Either too pushy or not persistent enough</div>
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
              Marketing Automation for Consideration Stage
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leverage marketing automation to maintain engagement and momentum 
              during the critical consideration phase when most deals stall.
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
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></span>
                            <span className="text-slate-700 text-xs leading-relaxed">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">Expected Outcome:</h4>
                      <p className="text-blue-600 font-semibold text-xs">{useCase.outcome}</p>
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
            Once you're tracking engagement and have systematic follow-up in place, 
            focus on converting consideration into closed deals in the purchase stage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
              <Link href="/resources/purchase">
                Purchase Stage Resources →
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