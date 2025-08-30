"use client"

import { Check, Zap, Database, ArrowRight } from "lucide-react"
import { AnimatedLink } from "@/components/ui/animated-link"
import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"

export default function HomePage() {

  return (
    <div className="min-h-screen font-serif antialiased" style={{backgroundColor: 'rgb(246 244 238)'}}>
      <Navbar />

      {/* Hero Section - Teehan+Lax Style */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Main Story */}
          <div className="mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl !font-sans font-bold text-slate-900 mb-12 leading-[1.1] tracking-tight">
              Your Revenue Forecasts Are Costing You Millions
            </h1>
            
            <h2 className="text-2xl sm:text-3xl !font-sans font-normal text-slate-700 mb-8 leading-relaxed">
              Growth-stage CEOs come to us because they're making critical business decisions based on revenue predictions that are really just educated guesses.
            </h2>
            

            <div className="mt-16">
              <AnimatedLink 
                href="https://calendly.com/winpointnl/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl"
              >
                Schedule Revenue Prediction Audit <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline-block" />
              </AnimatedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Analysis */}
      <section className="py-20 sm:py-24 lg:py-32 ">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl !font-sans font-bold text-slate-900 mb-8 leading-tight">
              The Forecasting Problem
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              Your sales team says Q4 will hit target. Marketing projects qualified leads. Customer Success forecasts retention rates. Finance builds the hiring plan around these numbers.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              Then reality hits: Sales misses target. Marketing delivers leads but they don't convert. Major clients churn unexpectedly. The hiring plan gets scrapped.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              This happens because most growth-stage companies are making million-dollar decisions based on revenue forecasts that amount to educated guesses.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl sm:text-3xl !font-sans font-bold text-slate-900 mb-6">
                  When You Realized This Was a Problem
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-serif mb-6">
                  The board meeting where you had to explain why you missed projections by a significant margin. The investor conversation when VCs asked detailed questions about unit economics you couldn't answer confidently.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed font-serif">
                  Building expansion plans based on pipeline data, then having to pause everything when deals didn't close. Revenue came in well below forecast and you had to cut team bonuses.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl !font-sans font-bold text-slate-900 mb-6">
                  What This Creates Daily
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-serif mb-6">
                  Pipeline shows substantial opportunities, but you know many won't close and others will take much longer. Every department reports different numbers for the same metrics.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed font-serif">
                  You delay hiring, product investments, and market expansion because you can't predict revenue reliability. Board meetings become explanations for missed forecasts.
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
            <h2 className="text-4xl sm:text-5xl !font-sans font-bold text-slate-900 mb-12 leading-tight">
              The Real Issue
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              Your current revenue processes got you from startup to your current size. But they're not just inadequate for larger scale—they're working against you.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              Every month you delay fixing this prediction gap, you're making hiring decisions based on uncertain revenue, missing market opportunities because you can't invest confidently, and watching competitors who predict and plan better.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-serif">
              Companies that break through don't get lucky. They build predictable revenue before their growth hits operational limits.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-none p-12">
            <h3 className="text-3xl !font-sans font-bold text-slate-900 mb-8">Who We Work With:</h3>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 !font-sans">
              Growth-stage CEOs and Revenue Leaders at companies doing multiple millions in ARR who have outgrown basic CRM setups but haven't built true revenue predictability. Leaders who are tired of explaining forecast misses to investors and need confidence in their numbers to make growth investments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="!font-sans font-bold text-slate-900 mb-4">SaaS Companies:</h4>
                <ul className="space-y-2 text-slate-600 !font-sans">
                  <li>• Scaling beyond founder-led sales</li>
                  <li>• Complex sales cycles with multiple stakeholders</li>
                  <li>• Need predictable recurring revenue forecasting</li>
                </ul>
              </div>
              <div>
                <h4 className="!font-sans font-bold text-slate-900 mb-4">Professional Services:</h4>
                <ul className="space-y-2 text-slate-600 !font-sans">
                  <li>• Moving from project-based to recurring revenue</li>
                  <li>• Building predictable revenue streams</li>
                  <li>• Scaling delivery with reliable forecasting</li>
                </ul>
              </div>
              <div>
                <h4 className="!font-sans font-bold text-slate-900 mb-4">Technology Companies:</h4>
                <ul className="space-y-2 text-slate-600 !font-sans">
                  <li>• Complex sales cycles with long timeframes</li>
                  <li>• Multiple decision-makers and stakeholders</li>
                  <li>• Need engineering-level revenue predictability</li>
                </ul>
              </div>
              <div>
                <h4 className="!font-sans font-bold text-slate-900 mb-4">B2B Companies:</h4>
                <ul className="space-y-2 text-slate-600 !font-sans">
                  <li>• Deals involve multiple stakeholders</li>
                  <li>• Longer sales timeframes and complex processes</li>
                  <li>• High-value deals requiring accurate forecasting</li>
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
            <h2 className="text-4xl sm:text-5xl !font-sans font-bold text-slate-900 mb-12 leading-tight">
              Why This Happens to Growing Companies
            </h2>
          </div>
          
          <div className="prose prose-xl prose-slate mx-auto leading-relaxed">
            <p className="text-xl text-slate-600 mb-12 font-serif">
              Growth-stage companies hit a predictable scale wall. What got you here stops you there: Founder intuition can't scale across growing teams. Simple CRM tracking can't handle complex sales cycles. Department silos create data inconsistencies.
            </p>
            
            <p className="text-xl text-slate-600 mb-12 font-serif">
              Unlike mature enterprises with dedicated RevOps teams or early startups that can improvise, growth-stage companies face complexity without infrastructure.
            </p>
            
            <div className="my-16">
              <h3 className="text-3xl !font-sans font-bold text-slate-900 mb-12 text-center">What You Need vs. What Stops You</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-none ">
                  <h4 className="text-2xl !font-sans font-bold text-slate-900 mb-4">What You Need</h4>
                  <p className="text-lg text-slate-600 !font-sans leading-relaxed mb-4">Predict revenue with enough accuracy for confident investment decisions. Align your revenue engine so Marketing, Sales, and Customer Success work from the same foundation.</p>
                  <p className="text-lg text-slate-600 !font-sans leading-relaxed">Build scalable processes that work at larger scale. Create reliable reporting that investors trust.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-none ">
                  <h4 className="text-2xl !font-sans font-bold text-slate-900 mb-4">What Stops You</h4>
                  <p className="text-lg text-slate-600 !font-sans leading-relaxed mb-4">Data chaos: Every system has different customer records, pipeline stages, and metrics. Process gaps: Leads get lost between Marketing handoffs and Sales follow-ups.</p>
                  <p className="text-lg text-slate-600 !font-sans leading-relaxed">Technology limitations: Your CRM tracks but doesn't predict or optimize. Time constraints: You're focused on hitting current quarter numbers.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-none ">
                  <h4 className="text-2xl !font-sans font-bold text-slate-900 mb-4">What You've Tried</h4>
                  <p className="text-lg text-slate-600 !font-sans leading-relaxed mb-4">Hoping better training or more marketing spend will solve the prediction problem. Adding more CRM fields, stages, and reports without fixing underlying processes.</p>
                  <p className="text-lg text-slate-600 !font-sans leading-relaxed">Hiring VP of Sales or Marketing Director expecting them to fix revenue predictability. Working with consultants who focus on tactics instead of systematic revenue predictability.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-none ">
                  <h4 className="text-2xl !font-sans font-bold text-slate-900 mb-4">What You Get</h4>
                  <p className="text-lg text-slate-600 !font-sans leading-relaxed mb-4">Board meetings become strategic discussions instead of excuse sessions. Investment decisions get easier because you know revenue will support them.</p>
                  <p className="text-lg text-slate-600 !font-sans leading-relaxed">Your team stops firefighting and starts building systematically. Competitors can't keep up because they're guessing while you're engineering growth.</p>
                </div>
              </div>
            </div>
            
            <p className="text-2xl text-slate-900 font-normal font-serif">
              Revenue forecasting isn't a reporting exercise—it's an operational capability. The prediction gap separates companies that scale from companies that stall.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Operations Evolution */}
      <section className="py-20 sm:py-24 lg:py-32 ">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl !font-sans font-bold text-slate-900 mb-12 leading-tight">
              How We Work
            </h2>
            
            <div className="prose prose-xl prose-slate mx-auto mb-12">
              <p className="text-xl text-slate-600 mb-8 font-serif">
                We build predictable revenue engines for growth-stage companies. Not just CRM cleanup or marketing optimization, but complete operational foundation that makes revenue forecastable.
              </p>
            </div>

          </div>
          
          <div className="space-y-12">
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl !font-sans font-bold text-slate-900 mb-6">Month 1: Revenue Reality Check</h3>
              <p className="text-lg text-slate-600 leading-relaxed !font-sans mb-6">
                We audit your current forecasting accuracy, identify the biggest prediction gaps, and show you where revenue leaks happen.
              </p>
              <p className="text-lg text-slate-900 !font-sans font-semibold mb-4">
                Get a clear picture of your forecasting accuracy and prediction gaps.
              </p>
              <ul className="space-y-2 text-slate-600 !font-sans">
                <li>• Current forecasting accuracy analysis</li>
                <li>• Revenue leak identification and quantification</li>
                <li>• Prediction gap assessment across departments</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl !font-sans font-bold text-slate-900 mb-6">Months 2-3: Foundation Build</h3>
              <p className="text-lg text-slate-600 leading-relaxed !font-sans mb-6">
                We design and implement operational infrastructure that makes revenue predictable—aligned processes, clean data, reliable tracking.
              </p>
              <p className="text-lg text-slate-900 !font-sans font-semibold mb-4">
                Operational infrastructure that creates revenue predictability.
              </p>
              <ul className="space-y-2 text-slate-600 !font-sans">
                <li>• Aligned processes across Marketing, Sales, and Customer Success</li>
                <li>• Clean data architecture and reliable tracking systems</li>
                <li>• Operational infrastructure for predictable revenue</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl !font-sans font-bold text-slate-900 mb-6">Months 4-5: Prediction Engine</h3>
              <p className="text-lg text-slate-600 leading-relaxed !font-sans mb-6">
                We build your forecasting system so you can predict revenue accurately and make investment decisions confidently.
              </p>
              <p className="text-lg text-slate-900 !font-sans font-semibold mb-4">
                Revenue forecasting system that enables confident investment decisions.
              </p>
              <ul className="space-y-2 text-slate-600 !font-sans">
                <li>• Accurate revenue prediction capabilities</li>
                <li>• Investment decision support systems</li>
                <li>• Confident forecasting for strategic planning</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none ">
              <h3 className="text-3xl !font-sans font-bold text-slate-900 mb-6">Month 6+: Scale Preparation</h3>
              <p className="text-lg text-slate-600 leading-relaxed !font-sans mb-6">
                We stress-test your systems for growth so you're ready to scale without hitting operational walls.
              </p>
              <p className="text-lg text-slate-900 !font-sans font-semibold mb-4">
                Systems stress-tested and ready for scale without operational limits.
              </p>
              <ul className="space-y-2 text-slate-600 !font-sans">
                <li>• Growth-ready systems that won't break at scale</li>
                <li>• Operational foundation for systematic expansion</li>
                <li>• Predictable revenue growth that supports aggressive scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl !font-sans font-bold text-slate-900 mb-12 leading-tight">
              Ready to Stop Guessing About Your Revenue?
            </h2>
            
            <div className="prose prose-xl prose-slate mx-auto mb-12">
              <p className="text-xl text-slate-600 font-serif mb-6">
                Book a Revenue Prediction Audit. We'll analyze your current forecasting accuracy, identify your biggest prediction gaps, and show you how to build operational foundation for predictable growth.
              </p>
              <p className="text-xl text-slate-600 font-serif">
                Most growth-stage companies make million-dollar decisions based on educated guesses. We help you make them based on engineered certainty.
              </p>
            </div>

            <div className="mb-16">
              <AnimatedLink 
                href="https://calendly.com/winpointnl/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl"
              >
                Schedule Revenue Prediction Audit <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline-block" />
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
              <span className="text-2xl !font-sans font-bold text-slate-900 tracking-tight">Winpoint</span>
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