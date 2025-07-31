'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const marketingAutomationUseCases = [
  {
    title: 'Deal Closing Automation',
    description: 'Automate the final push to close deals with personalized sequences that address specific objections and create urgency.',
    icon: '🏆',
    automationCapabilities: [
      'Proposal delivery and tracking with automated follow-ups',
      'Contract generation and e-signature workflow automation',
      'Closing sequence emails with urgency and social proof',
      'Price negotiation tracking and approval workflows'
    ],
    outcome: 'Increase close rates by 30% and reduce sales cycle length by 20%'
  },
  {
    title: 'Pipeline Management',
    description: 'Systematically manage deal progression through the final stages with automated updates and alerts.',
    icon: '📊',
    automationCapabilities: [
      'Deal stage progression tracking with automatic updates',
      'Pipeline forecasting with probability adjustments',
      'Revenue prediction models based on historical data',
      'Manager alerts for deals requiring attention'
    ],
    outcome: 'Improve forecast accuracy by 40% and prevent deals from slipping'
  },
  {
    title: 'Contract Automation',
    description: 'Streamline contract creation, review, and approval processes to eliminate delays in the final stages.',
    icon: '📄',
    automationCapabilities: [
      'Dynamic contract generation based on deal parameters',
      'Automated legal review routing and approval workflows',
      'E-signature integration with progress tracking',
      'Contract renewal and amendment automation'
    ],
    outcome: 'Reduce contract processing time by 60% and eliminate bottlenecks'
  },
  {
    title: 'At-Risk Deal Detection',
    description: 'Identify deals that may not close using behavioral patterns and engagement metrics.',
    icon: '🚨',
    automationCapabilities: [
      'Deal health scoring based on engagement and activity patterns',
      'Early warning alerts for declining prospect engagement',
      'Competitor threat detection and response automation',
      'Stakeholder engagement monitoring and alerts'
    ],
    outcome: 'Rescue 40% of at-risk deals through early intervention'
  },
  {
    title: 'Breakup Sequence Automation',
    description: 'Re-engage stalled prospects with psychology-based breakup sequences that often revive dead deals.',
    icon: '⚡',
    automationCapabilities: [
      'Automated stalled deal identification and tagging',
      'Psychology-based breakup email sequences',
      'Re-engagement campaigns with alternative value propositions',
      'Lost deal surveys with feedback collection'
    ],
    outcome: 'Revive 25% of stalled deals and gain insights from lost opportunities'
  },
  {
    title: 'Decision Maker Engagement',
    description: 'Ensure all key stakeholders are engaged and aligned for final purchase decisions.',
    icon: '👥',
    automationCapabilities: [
      'Stakeholder mapping and influence analysis',
      'Multi-threaded communication campaigns',
      'Executive summary and ROI presentation automation',
      'Consensus-building content delivery'
    ],
    outcome: 'Increase deal size by 35% through better stakeholder alignment'
  }
]

export default function PurchaseStagePage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              Purchase Stage
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
              Convert Consideration Into Closed Deals
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              "They're ready to decide" - This is the moment of truth. Here's how to rescue 
              stalled conversations and close at-risk deals in the final stretch.
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
                  Your prospects have evaluated options and are ready to make a decision. 
                  But internal politics, competing priorities, and fear of making the 
                  wrong choice create friction.
                </p>
                <p>
                  This is where deals either close or die. The final stretch requires 
                  different tactics than earlier stages.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
                  <div className="flex items-center">
                    <span className="text-orange-500 text-2xl mr-3">🔥</span>
                    <div>
                      <div className="font-bold text-orange-900">Critical Moment</div>
                      <div className="text-orange-800">Most deals are won or lost in the final stretch</div>
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
                    <div className="font-semibold text-slate-900">Conversations Go Silent</div>
                    <div className="text-slate-600 text-sm">Prospects disappear with no clear next steps or timeline</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">Late Detection of Risk</div>
                    <div className="text-slate-600 text-sm">By the time you realize a deal is at risk, it's too late to save it</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">Wrong Response to Silence</div>
                    <div className="text-slate-600 text-sm">Either being too pushy or giving up too quickly</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Automation Use Cases */}
      <section className="pb-20 -mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Marketing Automation for Purchase Stage
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leverage marketing automation to close deals more effectively, manage pipeline health, 
              and rescue stalled opportunities in the final stretch.
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
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></span>
                            <span className="text-slate-700 text-xs leading-relaxed">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">Expected Outcome:</h4>
                      <p className="text-purple-600 font-semibold text-xs">{useCase.outcome}</p>
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
            Successfully Closed the Deal?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Congratulations! Now focus on retention and expansion to maximize 
            customer lifetime value from your newly closed accounts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
              <Link href="/resources/retention">
                Retention Stage Resources →
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
    </div>
  )
}