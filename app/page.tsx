"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"
import ContactForm from "@/components/ContactForm"

export default function HomePage() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())
  
  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index)
    } else {
      newCheckedItems.add(index)
    }
    setCheckedItems(newCheckedItems)
  }
  
  const getEmoji = () => {
    const count = checkedItems.size
    if (count === 0) return "💭"
    if (count === 1) return "🤔"
    if (count === 2) return "📊"
    if (count === 3) return "🎯"
    if (count === 4) return "📈"
    return "🚀"
  }
  
  const getMessage = () => {
    const count = checkedItems.size
    if (count === 0) return "Check what applies to see if we can help"
    if (count === 1) return "You have one challenge we often solve"
    if (count === 2) return "Two areas where our sprint would help"
    if (count >= 3) return "Multiple challenges - this is exactly what we solve"
    return "This is exactly the problem we solve"
  }
  
  const getUrgency = () => {
    const count = checkedItems.size
    if (count === 0) return ""
    if (count <= 2) return "Our sprint could help with these specific issues"
    return "You should definitely talk to us"
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-semibold text-slate-900 tracking-tight">Winpoint</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </Link>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
                <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Diagnostic</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight max-w-6xl mx-auto">
              Let&apos;s fix your &ldquo;out of sight, out of mind&rdquo; problem.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Winpoint helps B2B companies stay top of mind throughout long sales cycles 
              by mapping where contacts forget about you—and fixing it.
            </p>
          </div>

          {/* Hero Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl p-12 border-2 border-slate-900 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Column - Service Description */}
                <div>
                  <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    5 Ready-to-Deploy Marketing Automation Campaigns
                  </h1>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    People forget you exist between touchpoints. 
                    <span className="block mt-2">Leads go quiet. Deals stall. Customers don&apos;t think of you for new projects.</span>
                  </p>
                  
                  <p className="text-lg font-semibold text-slate-900 mb-8">
                    You receive five complete campaign blueprints. Each one is ready to implement in your CRM or marketing tool.
                  </p>

                  <h2 className="text-xl font-semibold text-slate-900 mb-6">What&apos;s included (per campaign):</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">Goal & target segment</p>
                        <p className="text-slate-600 text-sm mt-1">
                          Clear objective and exact segmentation logic
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">Trigger & sequence</p>
                        <p className="text-slate-600 text-sm mt-1">
                          Precise trigger rules and step-by-step sequence with timing
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">Copy pack</p>
                        <p className="text-slate-600 text-sm mt-1">
                          Subject lines, email variants, CTAs, and landing page copy
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">Implementation checklist</p>
                        <p className="text-slate-600 text-sm mt-1">
                          Tech requirements, KPIs, and handover tasks for your team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Pricing */}
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    Investment & Timeline:
                  </h3>
                  
                  <div className="mb-8">
                    <div className="border-l-4 border-blue-600 pl-6 mb-6">
                      <p className="text-sm font-medium text-slate-600 mb-1">Total Investment</p>
                      <p className="text-4xl font-bold text-slate-900 mb-2">€3,500</p>
                      <p className="text-slate-600">One-time payment</p>
                      <p className="text-slate-600">5 business days delivery</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Format & delivery:</h4>
                      <ul className="text-slate-600 space-y-2">
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>5 × complete campaign blueprints (4-6 pages each)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>1 × summary PDF with prioritization</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>60-minute stakeholder debrief (remote)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
                    <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Get Your 5 Campaigns</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Problem Qualifier */}
      <section className="pb-20 -mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Do You Have This Problem?
            </h2>
            <p className="text-lg text-slate-600 mb-8">Check what applies to you:</p>
            
            {/* Interactive Feedback */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 mb-12 border border-slate-200">
              <div className="text-6xl mb-4">{getEmoji()}</div>
              <div className="text-xl font-semibold text-slate-900 mb-2">{getMessage()}</div>
              {getUrgency() && (
                <div className="text-lg text-slate-600 font-medium">{getUrgency()}</div>
              )}
            </div>
          </div>

          <div className="space-y-4 mb-12">
            {[
              "Leads engage, then disappear for months",
              "Deals sit in your pipeline without moving", 
              "Existing customers don't call you for new projects",
              "You have no idea when contacts are thinking about solutions",
              "Your team follows up randomly instead of systematically"
            ].map((problem, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                  checkedItems.has(index) 
                    ? 'bg-blue-50 border-blue-300 shadow-md' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
                onClick={() => handleCheckboxChange(index)}
              >
                <div className="flex items-start space-x-4">
                  <input 
                    type="checkbox" 
                    checked={checkedItems.has(index)}
                    onChange={() => handleCheckboxChange(index)}
                    className="mt-1 w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500 focus:ring-2" 
                  />
                  <p className="text-slate-900 font-medium">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-slate-50 rounded-xl p-6">
            <p className="text-slate-700 font-semibold">
              If you checked more than two, we should talk.
            </p>
          </div>

          {/* Progressive CTA */}
          <div className="text-center mt-8">
            {checkedItems.size > 2 && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  You checked {checkedItems.size} items - this is exactly what we solve
                </h3>
                <p className="text-slate-700 mb-4">
                  Our 4-week sprint is designed to address these specific challenges with a clear, actionable plan.
                </p>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" 
                  asChild
                >
                  <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">
                    Book Your Diagnostic
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              How We Build Your 5 Campaigns
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-8">
                  <p className="text-sm font-medium text-blue-600 mb-1">Step 1</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Map Where You&apos;re Losing Prospects
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Audit your current journey and identify the 5 critical gaps where prospects go dark. 
                    This becomes the foundation for determining your campaign triggers and target segments.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Contributes to campaigns:</p>
                    <p className="text-sm text-slate-700">
                      <strong>Goal & target segments</strong> — Exact segmentation logic for each of the 5 campaigns
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-8">
                  <p className="text-sm font-medium text-blue-600 mb-1">Step 2</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Design Campaign Triggers & Timing
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Map the precise behavioral and time-based triggers that will activate each campaign. 
                    Define the sequence timing and escalation rules for maximum engagement.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Contributes to campaigns:</p>
                    <p className="text-sm text-slate-700">
                      <strong>Triggers & sequences</strong> — Precise trigger rules and step-by-step sequences with timing
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-8">
                  <p className="text-sm font-medium text-blue-600 mb-1">Step 3</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Write Campaign Copy & Content
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Create complete copy packs for each campaign including subject lines, email variants, 
                    CTAs, and landing page copy. All optimized for your specific audience and goals.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Contributes to campaigns:</p>
                    <p className="text-sm text-slate-700">
                      <strong>Copy packs</strong> — Subject lines, email variants, CTAs, and landing page copy
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-8">
                  <p className="text-sm font-medium text-blue-600 mb-1">Step 4</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Package Implementation Blueprints
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Compile everything into 5 complete campaign blueprints with KPIs, tech requirements, 
                    and handover checklists so your team can deploy immediately.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Contributes to campaigns:</p>
                    <p className="text-sm text-slate-700">
                      <strong>Implementation checklists</strong> — Tech requirements, KPIs, and handover tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="mt-24 text-center bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <p className="text-xl font-semibold text-slate-900 mb-2">The result?</p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Contacts think of you when they need solutions, instead of forgetting you exist.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
            Ready to Stay Top of Mind?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Most teams know contacts forget about them. 
            Few know exactly where this happens or what to do about it.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 mb-8 border border-blue-200">
            <p className="text-xl font-semibold text-slate-900 mb-4">
              Get clarity in one week.
            </p>
            <p className="text-slate-700 text-lg">
              Know exactly where you disappear from their minds and how to fix it.
            </p>
          </div>
          
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
            <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Diagnostic</a>
          </Button>
        </div>
      </section>

     

      {/* Common Questions */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Common Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What makes this different from regular marketing?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Regular marketing tries to create demand right now. We make sure you&apos;re remembered 
                when prospects are ready to buy later.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Why focus on CRM integration?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Because staying top of mind requires consistent follow-up over months. 
                Your CRM can do this automatically if it&apos;s set up right.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What if our CRM is basic?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Doesn&apos;t matter. We work with any system. Even basic setups can stay top of mind 
                if you have the right process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                How do you measure success?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Simple metrics: Are more prospects mentioning you in calls? Are deals moving faster? 
                Are you losing fewer opportunities to competitors?
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What happens in the 4 weeks?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Six 90-minute calls. We map out when prospects think about your type of solution. 
                Then we build a system to be there at those moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Ready to Stop Losing Deals to Competitors?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Tell us about your situation and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 mb-6">
            Prefer to book a call directly?
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
            <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Diagnostic</a>
          </Button>
          <p className="text-sm text-slate-500 mt-6">
            Winpoint helps B2B companies stay top of mind during long sales cycles.
          </p>
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
