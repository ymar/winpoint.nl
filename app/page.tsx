"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

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
          {/* Top Section - Centered Content */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Let&apos;s fix your &ldquo;out of sight, out of mind&rdquo; problem.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Winpoint is a revenue consultancy that has helped 100+ B2B companies build 
              systematic mental availability engines that keep them top of mind throughout 
              long sales cycles.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
              <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Sprint</a>
            </Button>
          </div>

          {/* Bottom Section - Service Details Card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-900 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Service Details */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    The Winpoint Top-of-Mind Sprint
                  </h2>
                  <p className="text-slate-600 mb-6">
                    A focused <strong>4-week engagement</strong> that delivers a complete 
                    strategic blueprint and implementation roadmap you can 
                    execute with your existing team and tech stack.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Top of Mind Strategy Canvas & Implementation Blueprint</p>
                        <p className="text-sm text-slate-600 mt-1">
                          Complete visual strategy map showing your Category Entry 
                          Points plus detailed implementation roadmap with specific CRM 
                          configuration steps, email sequence templates, and workflow 
                          automation rules you can execute internally.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Platform-Specific Setup Guides & Templates</p>
                        <p className="text-sm text-slate-600 mt-1">
                          Ready-to-use configuration guides for HubSpot, Salesforce, 
                          Marketo, and Mailchimp with exact settings, sequence 
                          templates, and integration instructions your team can follow 
                          step-by-step.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Performance Measurement Framework & Self-Optimization Toolkit</p>
                        <p className="text-sm text-slate-600 mt-1">
                          Complete tracking framework with Google Sheets dashboards, 
                          KPI definitions, and monthly optimization checklists so your team 
                          can measure and improve mental availability independently.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Pricing */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Investment in Your Sprint:
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    (includes complete 4-week strategic blueprint + 6 weeks implementation support)
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-sm font-medium text-slate-600">Startup (≤ 50 employees)</p>
                      <p className="text-3xl font-bold text-slate-900">€8,000</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-sm font-medium text-slate-600">Growth (51-250 employees)</p>
                      <p className="text-3xl font-bold text-slate-900">€12,000</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-sm font-medium text-slate-600">Enterprise (250+ employees)</p>
                      <p className="text-3xl font-bold text-slate-900">€18,000</p>
                    </div>
                  </div>
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
              "Prospects seem interested, then go quiet for months",
              "Your deals take forever while competitors stay more visible", 
              "Your CRM and email tools don't work together",
              "You can't tell if prospects are thinking about you",
              "Your team reaches out randomly instead of having a plan"
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
                    Book Your Sprint
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Week 1-2: Find the gaps</h3>
              <p className="text-slate-600 leading-relaxed">
                We look at your current setup. Where are prospects forgetting about you? 
                What are your competitors doing that you&apos;re not?
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Week 3-4: Build your plan</h3>
              <p className="text-slate-600 leading-relaxed">
                You pick the strategy that fits your team. We create the templates, 
                sequences, and setup guides you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">After the sprint: Make it happen</h3>
              <p className="text-slate-600 leading-relaxed">
                Your team builds the system using our blueprints. 
                We help when you get stuck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">
            Why This Works
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Most companies try to get attention when prospects are ready to buy. 
              But prospects research for months before they talk to anyone.
            </p>
            <p>
              You need to stay visible during that research phase. Not with pushy sales calls. 
              With helpful touches that keep you in mind.
            </p>
            <p className="font-semibold text-slate-900">
              That&apos;s what we help you build.
            </p>
          </div>
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

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
            Ready to Stop Losing Deals to Competitors?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Book a call. We&apos;ll look at your situation and tell you if this makes sense for you.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
            <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book Your Sprint</a>
          </Button>
          <p className="text-sm text-slate-500 mt-6">
            Winpoint has helped 100+ B2B companies stay top of mind during long sales cycles.
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
