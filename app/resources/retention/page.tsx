'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const marketingAutomationUseCases = [
  {
    title: 'Customer Onboarding Automation',
    description: 'Systematically guide new customers through setup and early success milestones to ensure strong adoption.',
    icon: '🚀',
    automationCapabilities: [
      'Multi-step onboarding workflows with milestone tracking',
      'Progress-based content delivery and guidance',
      'Automated check-ins and success manager assignment',
      'Training resource delivery based on customer segment'
    ],
    outcome: 'Reduce time-to-value by 50% and increase product adoption rates'
  },
  {
    title: 'Health Score Monitoring',
    description: 'Track customer health indicators and automatically flag at-risk accounts before they churn.',
    icon: '💚',
    automationCapabilities: [
      'Product usage tracking and engagement scoring',
      'Support ticket volume and sentiment analysis',
      'Login frequency and feature adoption monitoring',
      'Early warning alerts for declining health scores'
    ],
    outcome: 'Reduce churn by 35% through proactive intervention'
  },
  {
    title: 'Customer Success Workflows',
    description: 'Automate success manager tasks and ensure consistent customer experiences across the entire journey.',
    icon: '✅',
    automationCapabilities: [
      'Automatic task creation for success managers based on customer milestones',
      'Renewal reminder sequences with personalized messaging',
      'Success milestone celebration and recognition automation',
      'Customer feedback collection and analysis workflows'
    ],
    outcome: 'Increase customer satisfaction scores by 40% and improve renewal rates'
  },
  {
    title: 'Support Ticket Automation',
    description: 'Streamline support processes and ensure faster resolution times for customer issues.',
    icon: '🎫',
    automationCapabilities: [
      'Automatic ticket routing based on issue type and customer tier',
      'Priority escalation workflows for high-value accounts',
      'Knowledge base suggestion automation',
      'Follow-up surveys and satisfaction tracking'
    ],
    outcome: 'Reduce support response time by 60% and improve customer satisfaction'
  },
  {
    title: 'Product Adoption Campaigns',
    description: 'Drive deeper product usage and feature adoption through targeted educational campaigns.',
    icon: '📚',
    automationCapabilities: [
      'Feature usage tracking and adoption gap identification',
      'Personalized tutorial and training content delivery',
      'In-app messaging campaigns for unused features',
      'Success story sharing based on similar customer profiles'
    ],
    outcome: 'Increase feature adoption by 45% and reduce support inquiries'
  },
  {
    title: 'Renewal Management',
    description: 'Systematically manage contract renewals with early engagement and value demonstration.',
    icon: '🔄',
    automationCapabilities: [
      'Renewal timeline tracking with automated milestone alerts',
      'Value realization reporting and ROI calculation',
      'Renewal conversation scheduling and preparation automation',
      'Contract negotiation workflow management'
    ],
    outcome: 'Improve renewal rates by 30% and increase contract values'
  }
]

export default function RetentionStagePage() {
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
              Retention Stage
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
              Keep Customers Successful and Engaged
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              "Keeping them successful" - The most cost-effective way to grow is by retaining 
              and expanding existing customers. Here's how to ensure long-term success.
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
                Where Customers Are Mentally
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Your customers have made the investment and are now trying to 
                  realize value from your solution. They're evaluating whether 
                  their decision was correct and if you'll help them succeed.
                </p>
                <p>
                  This is the foundation stage for long-term relationships. 
                  Get it right, and customers become advocates. Get it wrong, 
                  and they churn at renewal time.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <div className="flex items-center">
                    <span className="text-green-500 text-2xl mr-3">💡</span>
                    <div>
                      <div className="font-bold text-green-900">Key Insight</div>
                      <div className="text-green-800">It costs 5x more to acquire new customers than retain existing ones</div>
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
                    <div className="font-semibold text-slate-900">Poor Onboarding</div>
                    <div className="text-slate-600 text-sm">Customers struggle to get value and lose confidence early</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">Reactive Support</div>
                    <div className="text-slate-600 text-sm">Only engaging when customers complain or have problems</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3 mr-4"></span>
                  <div>
                    <div className="font-semibold text-slate-900">No Health Monitoring</div>
                    <div className="text-slate-600 text-sm">Churn risk identified too late when intervention is impossible</div>
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
              Marketing Automation for Retention Stage
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leverage marketing automation to ensure customer success, monitor health indicators, 
              and proactively prevent churn through systematic engagement.
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
            Ready to Drive Growth?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Once you've mastered customer retention and built strong relationships, 
            focus on identifying and executing expansion opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
              <Link href="/resources/expansion">
                Expansion Stage Resources →
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