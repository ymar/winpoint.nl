"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Choose Your Level of Support
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Whether you need a quick diagnostic, a complete system build, or ongoing management, 
              we have a solution that fits your timeline and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Diagnostic */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  5 Ready-to-Deploy Campaigns
                </h3>
                <p className="text-slate-600 mb-4">
                  Complete diagnostic + 5 marketing automation campaigns
                </p>
                <div className="text-4xl font-bold text-slate-900 mb-2">€3,500</div>
                <p className="text-sm text-slate-500">One-time payment • 5 business days</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">5 × complete campaign blueprints (4-6 pages each)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Summary PDF with prioritization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Copy packs with subject lines & CTAs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">60-minute stakeholder debrief (remote)</span>
                </li>
              </ul>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200" asChild>
                <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">
                  Get Your Campaigns
                </a>
              </Button>
              
              <p className="text-sm text-slate-500 text-center mt-4">
                Perfect for: Teams that need ready-to-deploy campaigns
              </p>
            </div>

            {/* Sprint */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Implementation Sprint
                </h3>
                <p className="text-slate-600 mb-4">
                  5 campaigns + complete technical implementation
                </p>
                <div className="text-4xl font-bold text-slate-900 mb-2">€8k-€18k</div>
                <p className="text-sm text-slate-500">Based on company size • 4 weeks + 6 weeks support</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Everything in 5 Campaigns +</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Complete technical implementation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Platform-specific setup & integrations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">6 weeks hands-on implementation support</span>
                </li>
              </ul>
              
              <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-200" asChild>
                <a href="https://calendly.com/winpointnl/sprint" target="_blank" rel="noopener noreferrer">
                  Book Sprint
                </a>
              </Button>
              
              <p className="text-sm text-slate-500 text-center mt-4">
                Perfect for: Teams ready to implement now
              </p>
            </div>

            {/* Managed Service */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Managed Service
                </h3>
                <p className="text-slate-600 mb-4">
                  We run your top-of-mind system for you
                </p>
                <div className="text-4xl font-bold text-slate-900 mb-2">€3,500</div>
                <p className="text-sm text-slate-500">Per month • 6 month minimum</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Complete system management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Monthly content creation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Automated sequence management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Performance optimization</span>
                </li>
              </ul>
              
              <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-200" asChild>
                <a href="https://calendly.com/winpointnl/managed" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
              
              <p className="text-sm text-slate-500 text-center mt-4">
                Perfect for: Teams without bandwidth to manage
              </p>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 mb-6">
              Not sure which option is right for you?
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200" asChild>
              <a href="https://calendly.com/winpointnl/consultation" target="_blank" rel="noopener noreferrer">
                Book a Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Our Services Work</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Clear processes designed to get you results quickly and efficiently
            </p>
          </div>
          
          {/* Campaign Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">How We Build Your 5 Campaigns</h3>
              <p className="text-slate-600">Complete diagnostic plus 5 ready-to-deploy marketing automation campaigns</p>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 relative z-10">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-lg">1</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Map Where You're Losing Prospects</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Audit your current journey and identify the 5 critical gaps where prospects go dark
                    </p>
                    <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Goal & target segments
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-lg">2</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Design Campaign Triggers</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Map precise behavioral and time-based triggers that will activate each campaign
                    </p>
                    <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Triggers & sequences
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-lg">3</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Write Campaign Copy</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Create complete copy packs including subject lines, email variants, and CTAs
                    </p>
                    <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Copy packs
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-lg">4</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Package Implementation Blueprints</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Compile into 5 complete campaign blueprints with KPIs and tech requirements
                    </p>
                    <div className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Implementation checklists
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <div className="inline-flex items-center text-sm text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Delivered in 5 business days
              </div>
            </div>
          </div>

          {/* Sprint Process */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-4">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Implementation Sprint Process</h3>
              <p className="text-slate-600">Take your 5 campaigns from blueprints to live implementation with full technical setup and support</p>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 relative z-10">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-lg">1</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Week 1</h4>
                    <h5 className="text-sm font-medium text-blue-600 mb-3">Strategy & Design</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Complete diagnostic plus detailed strategy design with technical requirements and system architecture
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-lg">2</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Week 2</h4>
                    <h5 className="text-sm font-medium text-blue-600 mb-3">Content Creation</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Build all email sequences, templates, and automation workflows tailored to your specific buying journey
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-lg">3</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Week 3</h4>
                    <h5 className="text-sm font-medium text-blue-600 mb-3">Platform Setup</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Complete platform configuration, integrations, and testing to ensure everything works perfectly before launch
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4 text-lg font-bold shadow-lg">4</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Week 4+</h4>
                    <h5 className="text-sm font-medium text-blue-600 mb-3">Launch & Support</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Your team implements with our hands-on support, troubleshooting, and optimization for 6 weeks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <div className="inline-flex items-center text-sm text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                4-week build + 6 weeks support
              </div>
            </div>
          </div>

          {/* Success Guarantee */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Our Implementation Guarantee</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              If your system isn't working as designed within 90 days, we'll fix it for free. 
              We're committed to your success, not just delivery.
            </p>
            <div className="inline-flex items-center text-sm text-blue-100 bg-blue-800/50 px-4 py-2 rounded-full">
              <Check className="w-4 h-4 mr-2" />
              90-day success guarantee included
            </div>
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