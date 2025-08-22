"use client"

import { Check, Zap, Database, ArrowRight } from "lucide-react"
import { AnimatedLink } from "@/components/ui/animated-link"
import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"

export default function HomePage() {

  return (
    <div className="min-h-screen font-sans antialiased" style={{backgroundColor: 'rgb(246 244 238)'}}>
      <Navbar />

      {/* Hero Section - Teehan+Lax Style */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Main Story */}
          <div className="mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-sans font-bold text-slate-900 mb-12 leading-[1.1] tracking-tight">
              Architecting the Future of Revenue Performance
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-sans font-normal text-slate-700 mb-8 leading-relaxed">
              We help you uncover gaps, design fixes, and implement systems that reduce wasted effort and make growth more predictable.
            </h2>
            

            <div className="mt-16">
              <AnimatedLink 
                href="https://calendly.com/winpointnl/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl"
              >
                Start Your Transformation <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline-block" />
              </AnimatedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Analysis */}
      <section className="py-20 sm:py-24 lg:py-32 ">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 mb-8 leading-tight">
              The Problem You're Facing
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              Your teams are working hard, but revenue still feels harder than it should. Marketing generates leads that sales won't touch. Sales chases deals that aren't ready to buy. Customer success inherits customers who were oversold. Finance can't predict which investments will pay off.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              Every department has targets. But without alignment, they pull in different directions. That friction costs you more than missed numbers—it wastes time, drains morale, and makes growth unpredictable.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 mb-6">
                  Why It Happens
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-serif">
                  It's not a talent problem. It's a system problem. When Sales, Marketing, Success, and Finance don't share priorities, data, and processes, cracks appear: Leads go cold during handoffs. Churn rises from mismatched expectations. Reporting breaks down. Forecasts lose credibility. Good people end up firefighting instead of moving the business forward.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 mb-6">
                  How Winpoint Helps
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-serif">
                  We bring structure to your revenue operations so every team pulls in the same direction. We help you set strategy, align teams, and design processes that scale. The result: Marketing generates leads sales actually wants. Sales focuses on buyers who are ready to move. Customer success reduces churn with better-fit customers. Finance can finally forecast with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The State of Revenue Operations */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-12 leading-tight">
              The state of Revenue Operations & Revenue Teams today
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              In our experience working with growth-stage companies, we consistently see the same patterns: most marketing teams struggle to generate leads that sales actually wants to pursue, sales teams spend too much time on prospects that aren't ready to buy, and customer success teams inherit deals that were oversold from the start.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              The result is predictable: marketing blames sales for not following up properly, sales blames marketing for poor lead quality, and customer success deals with churn from mismatched expectations. Meanwhile, finance sees inconsistent revenue and can't predict which investments actually drive growth.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-none p-12">
            <h3 className="text-3xl font-sans font-bold text-slate-900 mb-8">The silos holding companies back:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">Marketing vs. Sales:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• CRM shows high lead volume but terrible conversion rates</li>
                  <li>• Sales reps ignore HubSpot lead notifications and work their own lists</li>
                  <li>• Marketing says "warm lead," sales says "cold call" - no shared scoring system</li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">Sales vs. Customer Success:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• High churn rate because sales promised features that don't exist</li>
                  <li>• CS discovers "enterprise deal" is actually small business after onboarding</li>
                  <li>• Salesforce shows "closed won" but zero notes about customer expectations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">Customer Success vs. Finance:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• CS wants budget for retention tools, finance sees massive churned revenue</li>
                  <li>• No budget for account expansion but CEO asks why growth is flat</li>
                  <li>• CS can't prove their impact on preventing churn</li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">C-Suite vs. Functional Teams:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• Marketing hits lead targets, sales hits quota, but total revenue declines</li>
                  <li>• VP Sales optimizes for deal size, Marketing for lead volume, CS for renewal rate</li>
                  <li>• CEO announces "customer-centric strategy" but systems still track by department</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* The Journey - Storytelling */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-12 leading-tight">
              The Journey to Revenue Performance Excellence
            </h2>
          </div>
          
          <div className="prose prose-xl prose-slate mx-auto leading-relaxed">
            <p className="text-xl text-slate-600 mb-12 font-serif">
              Most companies invest heavily in CRM and ABM technology but struggle with fundamental execution challenges. The result? Fragmented data, inconsistent processes, and revenue teams operating in silos rather than as a unified growth engine.
            </p>
            
            <div className="my-16">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-12 text-center">Common Revenue Performance Gaps</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-none ">
                  <h4 className="text-2xl font-sans font-bold text-slate-900 mb-4">System Integration</h4>
                  <p className="text-lg text-slate-600 font-serif leading-relaxed">Disconnected platforms creating data silos and manual processes</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-none ">
                  <h4 className="text-2xl font-sans font-bold text-slate-900 mb-4">Attribution Accuracy</h4>
                  <p className="text-lg text-slate-600 font-serif leading-relaxed">Broken tracking making it impossible to measure true campaign ROI</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-none ">
                  <h4 className="text-2xl font-sans font-bold text-slate-900 mb-4">Process Consistency</h4>
                  <p className="text-lg text-slate-600 font-serif leading-relaxed">Teams working around technology instead of leveraging it effectively</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-none ">
                  <h4 className="text-2xl font-sans font-bold text-slate-900 mb-4">Strategic Alignment</h4>
                  <p className="text-lg text-slate-600 font-serif leading-relaxed">Technology investments without clear business strategy or execution framework</p>
                </div>
              </div>
            </div>
            
            <p className="text-2xl text-slate-900 font-normal font-serif">
              The solution requires strategic transformation, not just technical implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Operations Evolution */}
      <section className="py-20 sm:py-24 lg:py-32 ">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-12 leading-tight">
              How We Fix Revenue Operations
            </h2>
            
            <div className="prose prose-xl prose-slate mx-auto mb-12">
              <p className="text-xl text-slate-600 mb-8 font-serif">
                We follow a proven four-step process to fix your revenue operations. Each step builds on the previous one, so you get lasting results instead of quick fixes.
              </p>
            </div>

          </div>
          
          <div className="space-y-12">
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Audit</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                We analyze your current CRM setup, data quality, team workflows, and business processes. Understanding where you are today is the first step to building a revenue engine that actually works.
              </p>
              <p className="text-lg text-slate-900 font-serif font-semibold mb-4">
                Get a clear picture of what's working and what's broken.
              </p>
              <ul className="space-y-2 text-slate-600 font-serif">
                <li>• CRM data quality and system integration assessment</li>
                <li>• Team workflow and handoff process analysis</li>
                <li>• Revenue performance gaps and bottleneck identification</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Optimize</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                We clean up your data, configure proper workflows, and set up systems that actually work together. Your CRM becomes a reliable foundation for growth instead of a data dumping ground.
              </p>
              <p className="text-lg text-slate-900 font-serif font-semibold mb-4">
                Properly configured systems that teams trust and use effectively.
              </p>
              <ul className="space-y-2 text-slate-600 font-serif">
                <li>• Data cleanup and workflow automation setup</li>
                <li>• System integrations and reporting dashboards</li>
                <li>• Attribution tracking and performance measurement</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Execute</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                We guide your team through implementing new processes and managing organizational change. The technical fixes only work when people actually adopt them and use them consistently.
              </p>
              <p className="text-lg text-slate-900 font-serif font-semibold mb-4">
                Successful implementation with lasting organizational change.
              </p>
              <ul className="space-y-2 text-slate-600 font-serif">
                <li>• Change management and team adoption support</li>
                <li>• New process rollout and training coordination</li>
                <li>• Performance monitoring and continuous improvement</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Scale</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                Build continuous improvement capabilities that keep your revenue engine running smoothly as you scale. When your teams can adapt, optimize, and evolve their approach, growth doesn't stall when market conditions change.
              </p>
              <p className="text-lg text-slate-900 font-serif font-semibold mb-4">
                Continuous optimization so growth doesn't hit a ceiling.
              </p>
              <ul className="space-y-2 text-slate-600 font-serif">
                <li>• Teams proactively identify and solve revenue bottlenecks</li>
                <li>• Process improvements become systematic, not reactive</li>
                <li>• Revenue growth becomes predictable and sustainable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-12 leading-tight">
              Begin Your Revenue Transformation
            </h2>
            
            <div className="prose prose-xl prose-slate mx-auto mb-12">
              <p className="text-xl text-slate-600 font-serif">
                Schedule a strategic consultation to discuss your revenue performance challenges and explore how our methodology can accelerate your growth trajectory.
              </p>
            </div>

            <div className="mb-16">
              <AnimatedLink 
                href="https://calendly.com/winpointnl/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl"
              >
                Schedule Strategic Consultation <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline-block" />
              </AnimatedLink>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className=" py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-2xl font-sans font-bold text-slate-900 tracking-tight">Winpoint</span>
            </div>
            
            <div className="text-slate-500 font-serif">
              © 2025 Winpoint. Revenue Performance Excellence.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}