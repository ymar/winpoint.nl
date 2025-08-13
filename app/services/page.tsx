"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-semibold text-slate-900 tracking-tight">Winpoint</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-slate-900 font-medium">
                Services
              </Link>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
                <a href="https://calendly.com/winpointnl/diagnostic" target="_blank" rel="noopener noreferrer">Book Diagnostic</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

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
                  Top-of-Mind Diagnostic
                </h3>
                <p className="text-slate-600 mb-4">
                  Get clarity on what's broken and how to fix it
                </p>
                <div className="text-4xl font-bold text-slate-900 mb-2">€2,000</div>
                <p className="text-sm text-slate-500">One-time payment • 5 business days</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Visual map where prospects go dark</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Priority-ranked buying moments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">3-point action plan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">CRM setup instructions</span>
                </li>
              </ul>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200" asChild>
                <a href="https://calendly.com/winpointnl/diagnostic" target="_blank" rel="noopener noreferrer">
                  Book Diagnostic
                </a>
              </Button>
              
              <p className="text-sm text-slate-500 text-center mt-4">
                Perfect for: Teams that need a clear roadmap
              </p>
            </div>

            {/* Sprint */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Implementation Sprint
                </h3>
                <p className="text-slate-600 mb-4">
                  Build your complete mental availability system
                </p>
                <div className="text-4xl font-bold text-slate-900 mb-2">€8k-€18k</div>
                <p className="text-sm text-slate-500">Based on company size • 4 weeks + 6 weeks support</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Everything in Diagnostic +</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Complete system build</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Platform-specific setup guides</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">6 weeks implementation support</span>
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
                  Managed Mental Availability
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Our Services Work</h2>
          
          {/* Diagnostic Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Diagnostic Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h4 className="font-semibold text-slate-900 mb-2">Analysis</h4>
                <p className="text-sm text-slate-600">We audit your prospect journey and identify drop-off points</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h4 className="font-semibold text-slate-900 mb-2">Mapping</h4>
                <p className="text-sm text-slate-600">Visual gaps map and priority-ranked buying moments</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h4 className="font-semibold text-slate-900 mb-2">Action Plan</h4>
                <p className="text-sm text-slate-600">3 specific changes with CRM setup instructions</p>
              </div>
            </div>
          </div>

          {/* Sprint Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Sprint Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h4 className="font-semibold text-slate-900 mb-2">Week 1</h4>
                <p className="text-sm text-slate-600">Complete diagnostic + strategy design</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h4 className="font-semibold text-slate-900 mb-2">Week 2</h4>
                <p className="text-sm text-slate-600">Build sequences and templates</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h4 className="font-semibold text-slate-900 mb-2">Week 3</h4>
                <p className="text-sm text-slate-600">Platform setup and integration</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                <h4 className="font-semibold text-slate-900 mb-2">Week 4+</h4>
                <p className="text-sm text-slate-600">Your team implements with our support</p>
              </div>
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