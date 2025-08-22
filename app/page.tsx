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
                  <li>• Frustration over unqualified leads</li>
                  <li>• Sales ignoring marketing-generated opportunities</li>
                  <li>• Conflicting definitions of "sales-ready" prospects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">Sales vs. Customer Success:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• Misaligned expectations causing churn</li>
                  <li>• Overpromising during sales process</li>
                  <li>• Poor handoff documentation leaving CS blind</li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">Customer Success vs. Finance:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• Cost-cutting limits retention efforts</li>
                  <li>• No budget for customer expansion initiatives</li>
                  <li>• Lack of ROI visibility on CS investments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">C-Suite vs. Functional Teams:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• Disjointed KPIs and missed synergy</li>
                  <li>• Teams optimizing for individual metrics</li>
                  <li>• Strategic initiatives lost in execution gaps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Operations Services */}
      <section className="py-20 sm:py-24 lg:py-32 ">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-6">
              Revenue Operations Services
            </h2>
            <p className="text-xl text-slate-600 font-serif max-w-3xl">
              Comprehensive Revenue Operations support delivered through strategic leadership and tactical execution expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-12 rounded-none ">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-8">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Fractional RevOps Leaders</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                Senior expertise without the full-time cost. We help you set strategy, align teams, and design processes that scale.
              </p>
              <ul className="space-y-3 text-lg text-slate-600 font-serif">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Shorter sales cycles through better lead qualification
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Higher win rates with aligned team priorities
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Predictable forecasting that finance can trust
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Hands-On Support</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                Tactical help configuring CRM, fixing data gaps, and documenting workflows so execution actually sticks.
              </p>
              <ul className="space-y-3 text-lg text-slate-600 font-serif">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  CRM systems that sales teams actually use
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Attribution tracking that shows real ROI
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Handoff processes that prevent deals from stalling
                </li>
              </ul>
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
              The Revenue Operations Evolution
            </h2>
            
            <div className="prose prose-xl prose-slate mx-auto">
              <p className="text-xl text-slate-600 mb-8 font-serif">
                Every high-performing RevOps function matures through four critical stages. We help you move through them in the right order, building sustainable competitive advantages that compound over time.
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Align Teams</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                Break down revenue silos and establish shared accountability across every customer-facing function. When Sales, Marketing, Customer Success, and Finance operate with unified goals, revenue becomes predictable instead of accidental.
              </p>
              <p className="text-lg text-slate-900 font-serif font-semibold mb-4">
                Shared revenue targets and one version of the truth across all teams.
              </p>
              <ul className="space-y-2 text-slate-600 font-serif">
                <li>• Marketing generates leads Sales actually wants to pursue</li>
                <li>• Sales and Success align on customer expectations</li>
                <li>• Finance gets visibility into revenue drivers that matter</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Standardize Processes</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                Eliminate the chaos of ad-hoc workflows and create repeatable systems that scale with your growth. When every handoff, follow-up, and decision follows a proven playbook, your best practices become your competitive advantage.
              </p>
              <p className="text-lg text-slate-900 font-serif font-semibold mb-4">
                Consistent handoffs and playbooks everyone actually follows.
              </p>
              <ul className="space-y-2 text-slate-600 font-serif">
                <li>• Deals move through stages predictably, not randomly</li>
                <li>• New hires ramp faster with clear methodologies</li>
                <li>• Customer experience becomes consistent across touchpoints</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Fix the Tech</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                Transform your technology stack from a collection of disconnected tools into an integrated revenue engine. When your systems work together seamlessly, leaders get the real-time insights they need to make confident decisions.
              </p>
              <p className="text-lg text-slate-900 font-serif font-semibold mb-4">
                Connected systems and reporting that leaders actually trust.
              </p>
              <ul className="space-y-2 text-slate-600 font-serif">
                <li>• Data flows automatically between systems, no manual exports</li>
                <li>• Attribution tracking shows what marketing actually drives revenue</li>
                <li>• Forecasts become reliable indicators, not wishful thinking</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Enable & Scale</h3>
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