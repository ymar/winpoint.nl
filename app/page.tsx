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
      question: "Do you implement the system for us or do we implement it ourselves?",
      answer: "You implement it with your existing team using our detailed blueprint. We provide comprehensive step-by-step guides, platform-specific templates, and 6 weeks of implementation support to ensure successful execution."
    },
    {
      question: "What if our team lacks technical expertise to implement the automation?",
      answer: "Our implementation guides are designed for marketing teams, not developers. Most configurations require basic CRM admin access. We provide platform-specific instructions with screenshots and offer troubleshooting support during implementation."
    },
    {
      question: "How detailed are the implementation guides you provide?",
      answer: "Extremely detailed. You'll get exact CRM field configurations, email sequence templates, automation trigger conditions, and platform-specific setup instructions. Think of it as an IKEA manual but for your mental availability system."
    },
    {
      question: "What happens if we get stuck during implementation?",
      answer: "You get 6 weeks of implementation support including email/Slack access for troubleshooting, monthly check-in calls, and platform-specific guidance to resolve any technical issues your team encounters."
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200 backdrop-blur-sm">
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
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium transition-colors duration-200" asChild>
                <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Sprint</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
         
            <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let&apos;s fix your &quot;out of sight, out of mind&quot; problem.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Winpoint is a revenue consultancy that has helped 100+ B2B companies build systematic mental availability engines that keep them top of mind throughout long sales cycles.
            </p>
           
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-colors duration-200" asChild>
                <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Sprint</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Card */}
      <section className="pb-16 -mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-900 rounded-lg">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Service Description */}
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    The Winpoint Top-of-Mind Sprint
                  </h2>
                  <p className="text-gray-600 mb-6 text-base">
                    A focused <strong>4-week engagement</strong> that delivers a complete strategic blueprint and implementation roadmap you can execute with your existing team and tech stack.
                  </p>
                  
              

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Top of Mind Strategy Canvas & Implementation Blueprint</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Complete visual strategy map showing your Category Entry Points plus detailed implementation roadmap with specific CRM configuration steps, email sequence templates, and workflow automation rules you can execute internally.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Platform-Specific Setup Guides & Templates</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Ready-to-use configuration guides for HubSpot, Salesforce, Marketo, and Mailchimp with exact settings, sequence templates, and integration instructions your team can follow step-by-step.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Performance Measurement Framework & Self-Optimization Toolkit</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Complete tracking framework with Google Sheets dashboards, KPI definitions, and monthly optimization checklists so your team can measure and improve mental availability independently.
                        </p>
                      </div>
                    </div>

                   
                  </div>
                </div>

                {/* Right Side - Pricing */}
                <div className="bg-gray-50 p-8 lg:p-10 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Investment in Your Sprint:
                    <span className="block text-sm font-normal text-gray-600 mt-1">
                      (includes complete 4-week strategic blueprint + 6 weeks implementation support)
                    </span>
                  </h3>
                  
                  <div className="space-y-4 flex-1">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Startup (≤ 50 employees)</p>
                      <p className="text-3xl font-bold text-gray-900">€8,000</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-400 pl-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Growth (51-250 employees)</p>
                      <p className="text-3xl font-bold text-gray-900">€12,000</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-400 pl-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Enterprise (250+ employees)</p>
                      <p className="text-3xl font-bold text-gray-900">€18,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mental Availability Problem Checker */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Do you have a mental availability problem?
            </h2>
            <p className="text-lg text-gray-600 mb-8">(Check all that apply)</p>
          </div>

          <div className="space-y-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <p className="text-gray-900">Prospects show strong initial interest but then go quiet for months.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <p className="text-gray-900">Your deals stall in long sales cycles while competitors stay more visible.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <p className="text-gray-900">Your CRM and marketing automation aren&apos;t coordinated to maintain consistent touchpoints.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <p className="text-gray-900">You can&apos;t track whether prospects are thinking about you during their decision process.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <p className="text-gray-900">Your team reaches out randomly instead of systematically staying top of mind.</p>
              </div>
            </div>

          </div>

          
        </div>
      </section>

      {/* Three Stage Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get your complete mental availability blueprint in 4 weeks, then implement it with your existing team.
            </h2>
          </div>

          <div className="space-y-20">
            {/* Stage 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">Stage 1</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  We design your strategic blueprint and implementation roadmap.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Winpoint creates a complete strategic framework showing exactly how to configure your CRM and marketing automation to maintain mental availability, with step-by-step implementation guides your team can follow.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200 shadow-sm">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-blue-200 rounded w-5/6"></div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-16 bg-green-100 rounded border border-green-200"></div>
                      <div className="h-16 bg-yellow-100 rounded border border-yellow-200"></div>
                      <div className="h-16 bg-red-100 rounded border border-red-200"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">Strategic Blueprint & Implementation Roadmap</p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">Stage 2</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  You get the complete implementation blueprint with detailed execution guides.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  After mapping your Category Entry Points, you&apos;ll receive detailed configuration guides, email templates, and automation workflows that your team can implement directly in your existing systems.
                </p>
              </div>
              <div className="lg:order-1 bg-white p-8 rounded-lg border-2 border-gray-200 shadow-sm">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-8 bg-blue-200 rounded text-xs flex items-center justify-center">Email</div>
                      <div className="h-8 bg-green-200 rounded text-xs flex items-center justify-center">CRM</div>
                      <div className="h-8 bg-purple-200 rounded text-xs flex items-center justify-center">Social</div>
                      <div className="h-8 bg-orange-200 rounded text-xs flex items-center justify-center">Content</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-600 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-600 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-purple-600 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">Platform Configuration Guides & Templates</p>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">Stage 3</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Your team implements the system with our implementation support.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Using your detailed blueprint, your team implements the mental availability system while we provide guidance and troubleshooting support to ensure successful execution and performance tracking.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200 shadow-sm">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-xs text-gray-600">Mental Availability Score</div>
                        <div className="text-2xl font-bold text-green-600">87%</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs text-gray-600">Touchpoint Engagement</div>
                        <div className="text-2xl font-bold text-blue-600">+42%</div>
                      </div>
                    </div>
                    <div className="h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded flex items-end justify-between p-2">
                      <div className="w-2 h-8 bg-blue-400 rounded"></div>
                      <div className="w-2 h-12 bg-blue-500 rounded"></div>
                      <div className="w-2 h-6 bg-green-400 rounded"></div>
                      <div className="w-2 h-14 bg-green-500 rounded"></div>
                      <div className="w-2 h-10 bg-blue-400 rounded"></div>
                      <div className="w-2 h-16 bg-green-600 rounded"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">Self-Implementation Tracking Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Problem Section */}
            <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about getting your strategic blueprint
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What exactly is mental availability and why does it matter?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mental availability is how likely your brand comes to mind when prospects think about their problem. Most B2B buyers research solutions without contacting vendors - they need to already know you exist when they start looking. We build systematic touchpoint strategies that make you top of mind at these critical moments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How is this different from traditional demand generation?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional demand gen focuses on capturing existing demand. Mental availability creates future demand by ensuring you&apos;re considered when prospects aren&apos;t actively buying yet. We map Category Entry Points - the specific moments when prospects start thinking about solutions - then build presence around those triggers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why do you focus specifically on CRM and marketing automation integration?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mental availability requires consistent, systematic touchpoints over time. Most companies already have the infrastructure (CRM, marketing automation) but lack the strategic framework to use it effectively. We integrate mental availability principles directly into your existing tech stack for sustainable execution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What can I expect during the 4-week sprint?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Six focused 90-minute workshops across four weeks. Weeks 1-2: Map your Category Entry Points and audit existing brand assets. Weeks 2-3: Design distinctive brand assets. Weeks 3-4: Build your campaign engine and implementation roadmap. You&apos;ll get a complete Top of Mind Canvas, CRM Playbook, and Campaign Implementation Guide ready to execute.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you measure success with mental availability?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We track brand recall in target segments, touchpoint engagement rates, and pipeline velocity improvements. Most importantly, we measure consideration rates - how often prospects mention you during their research process, even when they discovered you months earlier.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if our current CRM setup is basic or inconsistent?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work with any CRM system and focus on building processes that improve over time. The sprint includes specific recommendations for data structure and automation workflows that match your current capabilities while setting foundation for growth.
              </p>
            </div>
          </div>
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
