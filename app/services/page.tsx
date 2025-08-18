"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Check, MessageSquare, Calendar, Settings } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight max-w-6xl mx-auto">
              Partner with
              <span className="block">Winpoint</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We work as an extension of your team with clear packages, transparent communication, 
              and proven collaboration practices.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Packages</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fixed-scope packages with predictable timelines and outcomes
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Campaign Blueprints */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Campaign Blueprints
                </h3>
                <p className="text-slate-600 mb-6">
                  Three ready-to-deploy marketing automation campaign blueprints
                </p>
                <div className="text-4xl font-bold text-slate-900 mb-2">€3,500</div>
                <p className="text-sm text-slate-500">Fixed price • 2-week blueprint sprint</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-6">What you get:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">3 complete campaign blueprints (4-6 pages each)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Prioritization guide and implementation roadmap</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Complete copy packs with variants and CTAs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Tech requirements and platform recommendations</span>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 mb-4" asChild>
                <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">
                  Get Your Blueprints
                </a>
              </Button>
              
              <p className="text-sm text-slate-500 text-center">
                Perfect for teams with internal marketing resources
              </p>
            </div>

            {/* Done-for-You Implementation */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Done-for-You Implementation
                </h3>
                <p className="text-slate-600 mb-6">
                  Complete campaign build + technical setup
                </p>
                <div className="text-4xl font-bold text-slate-900 mb-2">€12k-€18k</div>
                <p className="text-sm text-slate-500">Based on complexity • 4-6 weeks</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-4">Everything above, plus:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Complete platform setup and configuration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">All integrations and technical implementation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Testing, QA, and performance optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Team training and handover documentation</span>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 mb-4" asChild>
                <a href="https://calendly.com/winpointnl/implementation" target="_blank" rel="noopener noreferrer">
                  Start Implementation
                </a>
              </Button>
              
              <p className="text-sm text-slate-500 text-center">
                Perfect for teams who want it done right, the first time
              </p>
            </div>

            {/* Ongoing Partnership */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ongoing Partnership
                </h3>
                <p className="text-slate-600 mb-6">
                  Your dedicated B2B marketing team
                </p>
                <div className="text-4xl font-bold text-slate-900 mb-2">€4,500</div>
                <p className="text-sm text-slate-500">Per month • 6 month minimum</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-4">Monthly includes:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Campaign management and optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">New content creation and A/B testing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Performance reporting and strategic insights</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Dedicated Slack channel and weekly calls</span>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 mb-4" asChild>
                <a href="https://calendly.com/winpointnl/partnership" target="_blank" rel="noopener noreferrer">
                  Become Partners
                </a>
              </Button>
              
              <p className="text-sm text-slate-500 text-center">
                Perfect for scaling companies who need ongoing expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work Together</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven agency practices that keep projects on track, communication clear, and results measurable
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Communication & Collaboration */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-900 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <MessageSquare className="w-6 h-6 text-blue-600 mr-3" />
                Communication & Collaboration
              </h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Dedicated Slack Channel</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Direct access to your project team for quick questions, updates, and real-time collaboration. 
                    No more email chains or delayed responses.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Shared Project Dashboard</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Notion workspace with project timeline, deliverables, and progress tracking. 
                    Full transparency into what's being worked on and when.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Collaborative Review Process</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Structured feedback loops using Figma for designs and Google Docs for copy. 
                    Your team stays involved in every decision.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Meeting Cadence */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-900 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                Meeting Cadence
              </h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Kickoff Workshop (Week 1)</h4>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    2-hour strategy session to align on goals, review your current setup, and finalize project scope.
                  </p>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">In-person or remote</span>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Weekly Check-ins</h4>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    30-minute progress reviews every Tuesday. Demo completed work, discuss blockers, 
                    and plan the upcoming week.
                  </p>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Video call</span>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Milestone Reviews</h4>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    1-hour deep-dive sessions at 25%, 50%, 75% completion. Present work, 
                    gather feedback, and adjust direction if needed.
                  </p>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Video call + recording</span>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Final Handover (Last Week)</h4>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    2-hour training session covering system operation, optimization tips, 
                    and ongoing maintenance best practices.
                  </p>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Screen share + documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Framework */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Success Framework</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              How we ensure your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg text-center">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Clear Scope</h3>
              <p className="text-slate-600 leading-relaxed">
                Fixed deliverables, timelines, and pricing. No scope creep, no surprise costs.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg text-center">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Open Communication</h3>
              <p className="text-slate-600 leading-relaxed">
                Daily Slack access, weekly calls, and shared project dashboards keep everyone aligned.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg text-center">
              <Check className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Proven Results</h3>
              <p className="text-slate-600 leading-relaxed">
                90-day success guarantee. If your system isn't performing, we fix it for free.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-12 text-center border-2 border-slate-900 shadow-xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a 30-minute strategy call to discuss your goals and determine the best package for your needs.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
              <a href="https://calendly.com/winpointnl/strategy" target="_blank" rel="noopener noreferrer">
                Book Strategy Call
              </a>
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
              <span className="text-slate-600">© 2024 Winpoint. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}