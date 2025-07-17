"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronDown, ChevronUp, Eye, Shield, Lock } from "lucide-react"
import { useState } from "react"

function FAQ() {
  const [openItems, setOpenItems] = useState<boolean[]>(new Array(4).fill(false))

  const toggleFAQ = (index: number) => {
    const newOpenItems = [...openItems]
    newOpenItems[index] = !newOpenItems[index]
    setOpenItems(newOpenItems)
  }

  const faqItems = [
    {
      question: "What if deals still don't close after using the framework?",
      answer: "The framework focuses on getting deals unstuck and moving forward. If you&apos;re not satisfied with the quality and completeness of the framework, we'll refine it or provide a full refund within 30 days."
    },
    {
      question: "Do you help execute the recovery strategies?",
      answer: "The sprint delivers everything your team needs to execute. We can provide additional coaching or connect you with specialists if you want hands-on help implementing it."
    },
    {
      question: "How is this different from sales training?",
      answer: "Sales training teaches general skills. This gives you a specific framework designed around your actual stalled deals and the real reasons they&apos;re stuck."
    },
    {
      question: "What if our deals stall for different reasons than other companies?",
      answer: "That&apos;s exactly why we audit your pipeline first. The framework is built specifically for your deal types, sales cycle, and common stall patterns."
    }
  ]

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <button
              className="w-full text-left px-6 py-2 flex items-center justify-between transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-bold text-gray-900 pr-4">
                {item.question}
              </h3>
              {openItems[index] ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            {openItems[index] && (
              <div className="px-6 py-6">
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Winpoint</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium transition-colors duration-200">Book an Intro Call</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
         
            <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Your Deals From Going Quiet
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Most deals don&apos;t die from competition - they die from poor follow-up. We create systematic deal progression engines that turn &quot;maybe later&quot; into &quot;yes.&quot;
            </p>
           
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-colors duration-200">
                Book an Intro Call
              </Button>
             
            </div>
          </div>
        </div>
      </section>

      
      {/* Service Card */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-900 rounded-lg">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Service Description */}
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Revenue Recovery System Build
                  </h2>
                  <p className="text-gray-600 mb-6 text-base">
                    A focused <strong>30-day systematic implementation</strong> to build your internal deal recovery engine. Typical clients recover 3-5x program cost within 12 months.
                  </p>
                  
              

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Revenue Recovery Assessment & Win/Loss Framework</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Complete audit of your dormant pipeline with systematic categorization of recoverable vs. truly lost deals, plus ROI projections and recovery prioritization.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">CRM Integration & Automation System</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Custom workflows, automated flagging, performance dashboards, and documented sales-marketing handoff protocols integrated into your existing tech stack.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Performance Measurement & Optimization</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Recovery rate tracking, cost-per-recovered-dollar metrics, and quarterly optimization reviews with continuous improvement protocols.
                        </p>
                      </div>
                    </div>

                   
                  </div>
                </div>

                {/* Right Side - Pricing */}
                <div className="bg-gray-50 p-8 lg:p-10 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Pricing tiers based on your size:
                    <span className="block text-sm font-normal text-gray-600 mt-1">
                      (and the resulting complexity & impact)
                    </span>
                  </h3>
                  
                  <div className="space-y-4 flex-1">
                    <div className="border-l-4 border-orange-400 pl-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Early Stage, less than $1m ARR</p>
                      <p className="text-3xl font-bold text-gray-900">$7,500</p>
                    </div>
                    
                    <div className="border-l-4 border-orange-400 pl-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Growth Stage, $1m - $5m ARR</p>
                      <p className="text-3xl font-bold text-gray-900">$10,000</p>
                    </div>
                    
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Scale Up, $5m - $15m ARR</p>
                      <p className="text-3xl font-bold text-gray-900">$15,000</p>
                    </div>
                    
                    <div className="border-l-4 border-purple-400 pl-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Mature, $15m + ARR</p>
                      <p className="text-3xl font-bold text-gray-900">$20,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-6">
              Revenue Analysis
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Is revenue leaking from your business development process?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your CRM shows deals as &quot;closed-lost&quot;</h3>
              <p className="text-gray-600 leading-relaxed">
                But you don&apos;t know if they actually chose competitors or just went quiet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No systematic re-engagement process</h3>
              <p className="text-gray-600 leading-relaxed">
                Sales reps don&apos;t have clear protocols for following up on stalled opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Missing sales-marketing handoffs</h3>
              <p className="text-gray-600 leading-relaxed">
                No clear process for transferring dormant high-value deals to marketing for ABM nurturing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">You can&apos;t measure recovery ROI</h3>
              <p className="text-gray-600 leading-relaxed">
                No tracking system to know which re-engagement efforts are working or failing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 md:col-span-2 xl:col-span-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stalled deals sit without follow-up</h3>
              <p className="text-gray-600 leading-relaxed">
                Your pipeline contains millions in dormant opportunities with no systematic recovery process.
              </p>
            </div>
          </div>

          <div className="text-center bg-blue-50 p-8 rounded-lg border border-blue-100">
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">The Hidden Cost</h4>
              <p className="text-gray-700">
                Without systematic deal recovery, you&apos;re leaving <span className="font-semibold text-blue-600">15-25% of potential revenue</span> on the table every quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              We research & build your systematic recovery engine
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your revenue leaks into systematic recovery wins with our proven three-pillar approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Systematic opportunity identification</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Clear criteria to distinguish truly lost deals from recoverable stalled opportunities. Integration with your CRM to automatically flag and categorize dormant prospects.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-blue-600 font-medium">
                  Key Outcome: Clear visibility into recoverable revenue
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Integrated re-engagement protocols</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Structured handoff processes between sales and marketing. ABM sequences for high-value stalled deals and systematic follow-up protocols for different stall scenarios.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-blue-600 font-medium">
                  Key Outcome: Predictable re-engagement at scale
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Performance measurement and optimization</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                ROI tracking for recovery efforts. Regular performance reviews and continuous improvement protocols to optimize your recovery rates over time.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-blue-600 font-medium">
                  Key Outcome: Measurable recovery ROI
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </section>

     

      
      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ&apos;s</h2>
          </div>

          <FAQ />
        </div>
      </section>

    
      

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Winpoint</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <span className="text-gray-600">© 2024 Winpoint. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
