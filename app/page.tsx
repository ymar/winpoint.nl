"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 xl:pt-40 xl:pb-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-8 leading-tight max-w-6xl mx-auto px-4">
              Let&apos;s fix your &ldquo;out of sight, out of mind&rdquo; problem.
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
              Winpoint is a marketing automation consultancy that helps B2B companies stay top of mind during long sales cycles and bring their prospects back from the void.
            </p>
          </div>

          {/* Hero Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-slate-900 shadow-xl mx-4 sm:mx-0">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                {/* Left Column - Service Description */}
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                    3 High-Impact Marketing Automation Campaigns
                  </h1>
                  
                  <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                    Your best prospects disappear into the void between touchpoints. 
                    <span className="block mt-2">Qualified leads go dark. Hot opportunities cool off. Decision-makers forget you exist.</span>
                  </p>
                  
                 

                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">What&apos;s included (per campaign):</h2>
                  <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">

                    You'll get three focused campaign blueprints—designed around your biggest pipeline leaks. Each one comes with copy, triggers, and an implementation checklist so your team can launch them in any modern CRM or marketing platform.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm sm:text-base">Goal & target segment</p>
                        <p className="text-slate-600 text-xs sm:text-sm mt-1">
                          Clear objective and exact segmentation logic
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm sm:text-base">Trigger & sequence</p>
                        <p className="text-slate-600 text-xs sm:text-sm mt-1">
                          Precise trigger rules and step-by-step sequence with timing
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm sm:text-base">Copy pack</p>
                        <p className="text-slate-600 text-xs sm:text-sm mt-1">
                          Subject lines, email variants, CTAs, and landing page copy
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm sm:text-base">Implementation checklist</p>
                        <p className="text-slate-600 text-xs sm:text-sm mt-1">
                          Tech requirements, KPIs, and handover tasks for your team
                        </p>
                      </div>
                    </div>
                  </div>
                  
               
                </div>

                {/* Right Column - Pricing */}
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">
                    Investment & Timeline:
                  </h3>
                  
                  <div className="mb-6 sm:mb-8">
                    <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 mb-4 sm:mb-6">
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mb-1">Total Investment</p>
                      <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">€3,500, one-time</p>
                      <p className="text-slate-600 text-sm sm:text-base">Delivered in 2 weeks.</p>
                      <p className="text-slate-600 text-sm sm:text-base">Most teams spend months testing campaigns like these. We package the essentials so you can move fast.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Format & delivery:</h4>
                      <ul className="text-slate-600 space-y-2 text-sm sm:text-base">
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>3 × complete campaign blueprints (4-6 pages each)</span>
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
                  
                  <div className="text-center">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 mb-2" asChild>
                      <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">Book a Blueprint Call</a>
                    </Button>
                    <p className="text-slate-600 text-sm sm:text-base">We'll review your pipeline leaks and show you what 3 campaigns could look like for your team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* The Problem */}
      <section className="pb-12 sm:pb-16 lg:pb-20 -mt-6 sm:-mt-8 lg:-mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3 sm:mb-4 tracking-tight">
              The Problem: Why Your Pipeline Leaks
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-10 text-left">
            <div>
              <p className="text-lg sm:text-xl text-slate-900 leading-relaxed mb-4">
                You've seen it happen:
              </p>
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Marketing captures a lead, but no one follows up quickly.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Sales gets involved too late—or with too little context.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Promising opportunities slip away because the handover isn't clear.
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg sm:text-xl text-slate-900 leading-relaxed mb-4">
                Add to that:
              </p>
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Prospects show interest, then go silent.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Deals get stuck in "maybe later" with no next step.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Follow-ups happen when someone remembers, not when buyers are actually paying attention.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg sm:rounded-xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                On the surface it looks like "slow leads" or "bad timing." In reality, it's a system gap:
              </p>
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Marketing doesn't nurture long enough.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Sales doesn't know the right moment to step in.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Prospects forget you while competitors stay visible.
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg sm:text-xl text-slate-900 leading-relaxed mb-4">
                The cost?
              </p>
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong>Forecasting breaks down.</strong> Deals slip from quarter to quarter.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong>Sales energy is wasted.</strong> Reps chase cold leads instead of warm ones.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong>Revenue leaks.</strong> Not in big losses, but in all the quiet, in-between moments where follow-up falls flat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              How We Build Your 3 Campaigns
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Step 1 */}
              <div className="relative flex flex-col sm:flex-row sm:items-start">
                <div className="flex-shrink-0 relative mb-4 sm:mb-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="sm:ml-8 text-center sm:text-left">
                  <p className="text-sm font-medium text-blue-600 mb-1">Step 1</p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                    Map Where You&apos;re Losing Prospects
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    Audit your current journey and identify the 5 critical gaps where prospects go dark. 
                    This becomes the foundation for determining your campaign triggers and target segments.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-600">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2">Contributes to campaigns:</p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Goal & target segments</strong> — Exact segmentation logic for each of the 3 campaigns
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col sm:flex-row sm:items-start">
                <div className="flex-shrink-0 relative mb-4 sm:mb-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="sm:ml-8 text-center sm:text-left">
                  <p className="text-sm font-medium text-blue-600 mb-1">Step 2</p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                    Design Campaign Triggers & Timing
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    Map the precise behavioral and time-based triggers that will activate each campaign. 
                    Define the sequence timing and escalation rules for maximum engagement.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-600">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2">Contributes to campaigns:</p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Triggers & sequences</strong> — Precise trigger rules and step-by-step sequences with timing
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col sm:flex-row sm:items-start">
                <div className="flex-shrink-0 relative mb-4 sm:mb-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="sm:ml-8 text-center sm:text-left">
                  <p className="text-sm font-medium text-blue-600 mb-1">Step 3</p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                    Write Campaign Copy & Content
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    Create complete copy packs for each campaign including subject lines, email variants, 
                    CTAs, and landing page copy. All optimized for your specific audience and goals.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-600">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2">Contributes to campaigns:</p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Copy packs</strong> — Subject lines, email variants, CTAs, and landing page copy
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col sm:flex-row sm:items-start">
                <div className="flex-shrink-0 relative mb-4 sm:mb-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="sm:ml-8 text-center sm:text-left">
                  <p className="text-sm font-medium text-blue-600 mb-1">Step 4</p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                    Package Implementation Blueprints
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    Compile everything into 3 complete campaign blueprints with KPIs, tech requirements, 
                    and handover checklists so your team can deploy immediately.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-600">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2">Contributes to campaigns:</p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Implementation checklists</strong> — Tech requirements, KPIs, and handover tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <p className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">The result?</p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
              Your team gets structured campaigns that keep you visible between touchpoints—so prospects are more likely to remember you when it counts.
            </p>
          </div>
        </div>
      </section>


     

      {/* Common Questions */}
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3 sm:mb-4 tracking-tight">
              Common Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">
                What makes this different from regular marketing?
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Regular marketing tries to create demand right now. We make sure you&apos;re remembered 
                when prospects are ready to buy later.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">
                Why focus on CRM integration?
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Because staying top of mind requires consistent follow-up over months. 
                Your CRM can do this automatically if it&apos;s set up right.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">
                What if our CRM is basic?
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Doesn&apos;t matter. We work with any system. Even basic setups can stay top of mind 
                if you have the right process.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">
                How do you measure success?
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Simple metrics: Are more prospects mentioning you in calls? Are deals moving faster? 
                Are you losing fewer opportunities to competitors?
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">
                What happens in the 2 weeks?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3 text-sm sm:text-base">
                We analyze your sales process, identify the 3 most critical moments when prospects go dark, 
                and design detailed campaign blueprints for each one. You get the strategy and execution plan—your team handles the technical implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3 sm:mb-4 tracking-tight">
              Ready to Get Your 3 Campaign Blueprints?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Tell us about your &ldquo;out of sight, out of mind&rdquo; challenges and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-50 py-12 sm:py-16">
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
              <span className="text-slate-600 text-sm sm:text-base">© 2024 Winpoint. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
