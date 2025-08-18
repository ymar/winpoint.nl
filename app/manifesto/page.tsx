"use client"

import type { Metadata } from "next"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Our Manifesto | Winpoint",
  description: "The B2B Sales Pipeline is Broken - A manifesto for companies selling to companies",
  openGraph: {
    title: "Our Manifesto | Winpoint",
    description: "The B2B Sales Pipeline is Broken - A manifesto for companies selling to companies",
  },
}

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 border-2 border-slate-900 shadow-xl">
            <header className="border-b border-slate-200 pb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
                The B2B Sales Pipeline
                <br />
                is Broken
              </h1>
              <p className="text-xl text-slate-600 italic">
                A manifesto for companies selling to companies
              </p>
            </header>

            <section className="mt-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                The Problem
              </div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Your Buyers Can't Find You When It Matters
              </h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  B2B purchase decisions take 6-18 months. During that time, buying committees 
                  research, compare, and debate. They talk to colleagues. They build business cases. 
                  They get approval from procurement.
                </p>
                <p>But when they're finally ready to buy, who do they call?</p>
                <p>
                  Not the company that went quiet after the first demo. Not the vendor whose sales 
                  rep disappeared for three months. They call whoever stayed visible and helpful 
                  throughout their entire buying journey.
                </p>
                <div className="my-8 rounded-lg bg-slate-50 p-6 text-xl font-medium text-slate-900">
                  Meanwhile, your marketing team counts MQLs while your sales team complains 
                  those leads never convert.
                </div>
                <p>
                  Sound familiar? You're not alone. Most B2B companies lose 79% of qualified leads 
                  because they can't bridge the gap between marketing interest and sales readiness.
                </p>
              </div>
            </section>

            <div className="my-16 rounded-lg bg-blue-50 p-8 text-center border border-blue-200">
              <blockquote className="text-2xl font-medium text-slate-900 italic sm:text-3xl">
                "In B2B, timing isn't about when you're ready to sell.
                <br />
                It's about when they're ready to buy."
              </blockquote>
            </div>

            <section className="mt-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                What We Believe
              </div>
              <h2 className="mb-8 text-3xl font-bold text-slate-900">
                B2B Buying is Different
              </h2>
              
              <div className="space-y-6 rounded-lg bg-blue-50 p-8 border border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-2xl font-bold text-blue-600">→</div>
                  <div>
                    <strong className="text-slate-900">Stay present during long sales cycles.</strong>{' '}
                    <span className="text-slate-700">Your prospects need 6-18 months to decide. Be helpful during that entire journey, 
                    not just at the beginning and end.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-2xl font-bold text-blue-600">→</div>
                  <div>
                    <strong className="text-slate-900">Multiple stakeholders mean multiple messages.</strong>{' '}
                    <span className="text-slate-700">The CFO cares about ROI. The IT director worries about implementation. Your 
                    automation needs to speak to all of them.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-2xl font-bold text-blue-600">→</div>
                  <div>
                    <strong className="text-slate-900">Marketing and sales share the same revenue goal.</strong>{' '}
                    <span className="text-slate-700">When they work together, qualified opportunities get proper attention and deals 
                    close faster.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-2xl font-bold text-blue-600">→</div>
                  <div>
                    <strong className="text-slate-900">Account-based thinking beats lead-based thinking.</strong>{' '}
                    <span className="text-slate-700">Focus on companies that fit your ideal customer profile, not just individual 
                    email addresses.</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                The Solution
              </div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                How Winpoint Fixes Your B2B Pipeline
              </h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  We build marketing automation designed for complex B2B sales cycles. Our systems 
                  keep you visible with buying committees while connecting your marketing and sales 
                  teams around shared revenue goals.
                </p>
                
                <div className="my-6 text-xl font-medium text-slate-900">
                  Here's what that means for your business:
                </div>
                
                <p>
                  <span className="font-bold text-blue-600">Account-based nurturing</span> that 
                  speaks to different stakeholders with relevant messages. No more generic email 
                  blasts to entire contact lists.
                </p>
                
                <p>
                  <span className="font-bold text-blue-600">Lead scoring that actually works</span> because 
                  it tracks buying committee behavior, not just individual actions. Marketing passes 
                  sales-ready opportunities, not just email clicks.
                </p>
                
                <p>
                  <span className="font-bold text-blue-600">Pipeline visibility</span> that shows 
                  which accounts are moving forward and which need attention. Both teams see the 
                  same data and work the same opportunities.
                </p>
                
                <p>
                  <span className="font-bold text-blue-600">Consistent touchpoints</span> that keep 
                  you top-of-mind during long decision cycles. Your prospects hear from you at the 
                  right frequency with valuable content.
                </p>
              </div>
            </section>

            <div className="my-16 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h3 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
                The Business Impact
              </h3>
              <div className="space-y-3 text-center">
                <p className="text-blue-100">
                  Your sales team works qualified accounts instead of chasing individual leads that go nowhere.
                </p>
                <p className="text-blue-100">
                  Your marketing team generates pipeline that actually converts to revenue.
                </p>
                <p className="text-blue-100">
                  Your prospects remember you when procurement opens up the buying process.
                </p>
                <p className="text-xl font-bold">
                  Your revenue grows because you're not losing qualified buyers to better-organized competitors.
                </p>
              </div>
            </div>

            <section className="mt-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Our Commitment
              </div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                What B2B Companies Get with Winpoint
              </h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  We don't promise instant results or magic formulas. B2B sales is complex, and 
                  anyone who tells you otherwise is lying.
                </p>
                
                <p>
                  We promise automation that understands your sales cycle length. We'll align your 
                  teams around account-based goals. We'll track engagement across buying committees, 
                  not just individual contacts.
                </p>
                
                <div className="my-6 text-xl font-medium text-slate-900">
                  Most importantly, we'll help you stay relevant with qualified prospects during 
                  their entire buying journey.
                </div>
                
                <p>
                  Because in B2B, the company that stays helpful during the research phase wins the 
                  deal during the buying phase.
                </p>
              </div>
            </section>

            <div className="mt-16 border-t border-slate-200 pt-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-slate-900">
                Ready to Fix Your B2B Pipeline?
              </h3>
              <p className="mb-2 text-xl text-slate-600">
                Join the companies that refuse to lose qualified buyers to poor follow-up.
              </p>
              <p className="text-xl font-bold text-slate-900 mb-6">
                It's time to win more of the deals you deserve.
              </p>
              <div className="mt-8">
                <a 
                  href="https://calendly.com/winpointnl/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Your Campaign Blueprints
                </a>
              </div>
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