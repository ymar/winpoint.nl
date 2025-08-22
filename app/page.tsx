"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap, Database, ArrowRight } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
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
              Winpoint is a Revenue Operations Agency helping growth-stage to enterprise companies scale smarter by aligning strategy with execution – powered by data, guided by insights, and executed by experts.
            </h2>
            

            <div className="mt-16">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium font-sans transition-all duration-200" asChild>
                <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">
                  Start Your Transformation <ArrowRight className="ml-3 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Analysis */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 mb-8 leading-tight">
              The Hidden Revenue Killers
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              Fragmented teams, conflicting goals, and disconnected systems quietly erode your revenue. They create inconsistency, friction, and confusion over who actually owns the big decisions. Left unchecked, these issues don't just stall growth they drain resources and morale. The bigger risk is that they become "normal" and go unnoticed until results collapse.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 mb-6">
                  The Root Cause
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-serif">
                  The misalignment between Sales, Marketing, Success, and Finance usually isn't about talent it's about priorities and silos. Each team works hard but pulls in a slightly different direction, which adds up to wasted effort. Processes stay disconnected, and nobody has a full picture of the customer journey. In the end, good people spend energy fighting symptoms instead of fixing the system.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 mb-6">
                  How We Fix It
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-serif">
                  Winpoint brings order to the chaos by unifying your revenue operations. We close the gap between strategy and execution, align every team around one roadmap, and make growth repeatable instead of accidental. Our work removes the daily friction that slows deals and frustrates teams. More importantly, it builds a foundation for revenue that keeps scaling without breaking.
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
          
          <div className="bg-white rounded-none p-12 border-l-4 border-slate-900">
            <h3 className="text-3xl font-sans font-bold text-slate-900 mb-8">The silos holding companies back:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">Marketing vs. Sales:</h4>
                <p className="text-slate-600 font-serif">Frustration over unqualified leads.</p>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">Sales vs. Customer Success:</h4>
                <p className="text-slate-600 font-serif">Misaligned expectations causing churn.</p>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">Customer Success vs. Finance:</h4>
                <p className="text-slate-600 font-serif">Cost-cutting limits retention efforts.</p>
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 mb-4">C-Suite vs. Functional Teams:</h4>
                <p className="text-slate-600 font-serif">Disjointed KPIs and missed synergy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Operations Services */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-6">
              Revenue Operations Services
            </h2>
            <p className="text-xl text-slate-600 font-serif max-w-3xl">
              Comprehensive Revenue Operations support delivered through strategic leadership and tactical execution expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-8">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Fractional RevOps Leaders</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                Senior-level Revenue Operations expertise without the full-time commitment. Strategic leadership that integrates directly with your team to drive initiatives and accelerate long-term revenue growth.
              </p>
              <ul className="space-y-3 text-lg text-slate-600 font-serif">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Strategic revenue planning and forecasting
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Cross-functional team alignment and governance
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Technology stack optimization and integration
                </li>
              </ul>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Tactical Support</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                Hands-on implementation support to execute Revenue Operations initiatives effectively. From system configuration to process optimization, ensuring successful execution at every level.
              </p>
              <ul className="space-y-3 text-lg text-slate-600 font-serif">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  CRM and marketing automation setup
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Data architecture and reporting frameworks
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                  Process documentation and training programs
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
            
            <div className="bg-slate-50 rounded-none p-12 my-16 border-l-4 border-slate-900">
              <h3 className="text-3xl font-sans font-bold text-slate-900 mb-8">Common Revenue Performance Gaps</h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-lg">
                <div>
                  <h4 className="font-sans font-bold text-slate-900 mb-4">System Integration</h4>
                  <p className="text-slate-600 font-serif">Disconnected platforms creating data silos and manual processes</p>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 mb-4">Attribution Accuracy</h4>
                  <p className="text-slate-600 font-serif">Broken tracking making it impossible to measure true campaign ROI</p>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 mb-4">Process Consistency</h4>
                  <p className="text-slate-600 font-serif">Teams working around technology instead of leveraging it effectively</p>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 mb-4">Strategic Alignment</h4>
                  <p className="text-slate-600 font-serif">Technology investments without clear business strategy or execution framework</p>
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
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-12 leading-tight">
              The Revenue Operations Evolution
            </h2>
            
            <div className="prose prose-xl prose-slate mx-auto">
              <p className="text-xl text-slate-600 mb-8 font-serif">
                Every high-performing Revenue Operations function follows a proven evolution path. We guide companies through this strategic progression, ensuring each stage builds sustainable competitive advantages.
              </p>
            </div>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-sans font-bold text-slate-900 mb-4">101</div>
                <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Align Teams</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-serif">
                  Establish unified goals and shared accountability across Sales, Marketing, Customer Success, and Finance. Create the foundation for collaborative revenue growth.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-none border-l-4 border-slate-900">
                <h4 className="font-sans font-bold text-slate-900 mb-4">Key Outcomes:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• Shared revenue targets and KPIs</li>
                  <li>• Cross-functional communication protocols</li>
                  <li>• Unified customer journey mapping</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="text-6xl font-sans font-bold text-slate-900 mb-4">202</div>
                <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Standardize Processes</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-serif">
                  Implement consistent workflows and methodologies that eliminate friction and ensure predictable execution across all revenue-generating activities.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-none border-l-4 border-slate-900 md:order-1">
                <h4 className="font-sans font-bold text-slate-900 mb-4">Key Outcomes:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• Documented revenue processes</li>
                  <li>• Standardized handoff protocols</li>
                  <li>• Quality assurance frameworks</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-sans font-bold text-slate-900 mb-4">303</div>
                <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Optimize Technology</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-serif">
                  Integrate and optimize your technology stack to create seamless data flow, eliminate manual work, and provide real-time visibility into revenue performance.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-none border-l-4 border-slate-900">
                <h4 className="font-sans font-bold text-slate-900 mb-4">Key Outcomes:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• Unified data architecture</li>
                  <li>• Automated workflow optimization</li>
                  <li>• Real-time performance dashboards</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="text-6xl font-sans font-bold text-slate-900 mb-4">404</div>
                <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Focus on Enablement</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-serif">
                  Build continuous improvement capabilities that enable teams to adapt, optimize, and scale revenue operations as your business evolves.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-none border-l-4 border-slate-900 md:order-1">
                <h4 className="font-sans font-bold text-slate-900 mb-4">Key Outcomes:</h4>
                <ul className="space-y-2 text-slate-600 font-serif">
                  <li>• Strategic revenue planning capabilities</li>
                  <li>• Continuous optimization frameworks</li>
                  <li>• Scalable growth methodologies</li>
                </ul>
              </div>
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium font-sans transition-all duration-200" asChild>
                <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Strategic Consultation <ArrowRight className="ml-3 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-white font-light text-lg">W</span>
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