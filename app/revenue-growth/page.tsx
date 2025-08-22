"use client"

import { Check, ArrowRight, Target, TrendingUp, Users } from "lucide-react"
import { AnimatedLink } from "@/components/ui/animated-link"
import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"

export default function RevenueGrowthPage() {
  return (
    <div className="min-h-screen font-sans antialiased" style={{backgroundColor: 'rgb(246 244 238)'}}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-sans font-bold text-slate-900 mb-12 leading-[1.1] tracking-tight">
              Revenue Growth Operating System
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-sans font-normal text-slate-700 mb-8 leading-relaxed">
              Transform your CRM into a revenue-generating machine that keeps you top of mind with prospects. Get more from your existing investment with optimized processes and proven strategies.
            </h2>

            <div className="mt-16">
              <AnimatedLink 
                href="https://calendly.com/winpointnl/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl"
              >
                Optimize Your CRM Investment <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline-block" />
              </AnimatedLink>
            </div>
          </div>
        </div>
      </section>


      {/* Our Approach */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-12 leading-tight">
              From CRM Investment to Revenue Engine: A Systematic Approach
            </h2>
            
            <p className="text-xl text-slate-600 mb-12 font-serif">
              We optimize your existing CRM platform—whether it's Salesforce, HubSpot, Pipedrive, or others—and build marketing and sales processes that keep you top of mind throughout long sales cycles. No more guessing. No more random results.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-slate-50 p-12 rounded-none">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Audit Your Current Setup</h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                    We conduct a comprehensive analysis of your revenue operations foundation:
                  </p>
                  <ul className="text-lg text-slate-600 font-serif mb-6 space-y-2">
                    <li>• CRM data quality and field structure review</li>
                    <li>• Team workflows and handoff process mapping</li>
                    <li>• System integrations and data flow analysis</li>
                    <li>• Lead qualification criteria and scoring assessment</li>
                    <li>• Sales process gaps and bottleneck identification</li>
                    <li>• Reporting accuracy and dashboard effectiveness</li>
                  </ul>
                  <div className="bg-slate-100 p-6 rounded-none border-l-4 border-slate-900">
                    <h4 className="text-lg font-sans font-bold text-slate-900 mb-3">What You Get:</h4>
                    <p className="text-lg text-slate-900 font-serif">
                      CRM Health Report + Process Gap Analysis + Prioritized Action Plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Optimize and Configure</h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                    We implement the action plan with hands-on configuration and optimization:
                  </p>
                  <ul className="text-lg text-slate-600 font-serif mb-6 space-y-2">
                    <li>• Data cleanup, standardization, and deduplication</li>
                    <li>• Custom fields, properties, and object configuration</li>
                    <li>• Automated workflows and nurture sequence setup</li>
                    <li>• Revenue attribution and reporting dashboard creation</li>
                    <li>• System integrations and data sync configuration</li>
                    <li>• User permissions and access control optimization</li>
                  </ul>
                  <div className="bg-slate-100 p-6 rounded-none border-l-4 border-slate-900">
                    <h4 className="text-lg font-sans font-bold text-slate-900 mb-3">What You Get:</h4>
                    <p className="text-lg text-slate-900 font-serif">
                      Fully Configured CRM + Training Videos + Process Documentation + User Guides
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-none">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-sans font-bold text-slate-900 mb-6">Execute and Optimize</h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-serif mb-6">
                    We guide implementation of new processes and manage organizational change to ensure sustained performance:
                  </p>
                  <ul className="text-lg text-slate-600 font-serif mb-6 space-y-2">
                    <li>• Change management and team adoption support</li>
                    <li>• New process implementation and rollout planning</li>
                    <li>• Monthly performance reports and KPI tracking</li>
                    <li>• Campaign effectiveness and conversion analysis</li>
                    <li>• System performance monitoring and issue resolution</li>
                    <li>• Strategic recommendations based on data insights</li>
                  </ul>
                  <div className="bg-slate-100 p-6 rounded-none border-l-4 border-slate-900">
                    <h4 className="text-lg font-sans font-bold text-slate-900 mb-3">What You Get:</h4>
                    <p className="text-lg text-slate-900 font-serif">
                      Monthly Performance Reports + Quarterly Strategy Sessions + Ongoing System Optimizations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Tier Services */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-slate-900 mb-12 leading-tight">
              Choose Your Growth Path
            </h2>
            <p className="text-xl text-slate-600 font-serif">
              Three ways to build your growth system, depending on your team and timeline.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Do It Yourself */}
            <div className="bg-slate-50 p-12 rounded-none">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div>
                  <h3 className="text-3xl font-sans font-bold text-slate-900 mb-4">Do It Yourself</h3>
                  <p className="text-lg text-slate-600 font-serif mb-6">
                    For B2B companies that want to keep control and build internal capability.
                  </p>
                  <div className="text-3xl font-sans font-bold text-slate-900">
                    From €450/month
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-sans font-bold text-slate-900 mb-4">What you get:</h4>
                  <ul className="space-y-3 text-lg text-slate-600 font-serif mb-6">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Complete growth playbook with your ideal customer profile
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Content templates and campaign frameworks
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Analytics dashboard showing what works
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Quarterly strategy sessions to optimize results
                    </li>
                  </ul>
                  <p className="text-slate-600 font-serif">
                    <strong>Best for:</strong> Companies with internal marketing resources who want clear direction and proven frameworks.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Do It With Us */}
            <div className="p-12 rounded-none" style={{backgroundColor: 'white'}}>
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div>
                  <h3 className="text-3xl font-sans font-bold text-slate-900 mb-4">Do It With Us</h3>
                  <p className="text-lg text-slate-600 font-serif mb-6">
                    For B2B companies that want to focus on their business while we handle growth execution.
                  </p>
                  <div className="text-3xl font-sans font-bold text-slate-900">
                    €3,250/month
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-sans font-bold text-slate-900 mb-4">What you get:</h4>
                  <ul className="space-y-3 text-lg text-slate-600 font-serif mb-6">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Everything in "Do It Yourself" plus execution
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Dedicated team managing your campaigns
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Content creation and distribution
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Lead nurturing and sales support
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Monthly performance reviews and optimization
                    </li>
                  </ul>
                  <p className="text-slate-600 font-serif">
                    <strong>Best for:</strong> Growing companies that want predictable results without building internal marketing teams.
                  </p>
                </div>
              </div>
            </div>
            
            {/* We Do It For You */}
            <div className="bg-slate-50 p-12 rounded-none">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div>
                  <h3 className="text-3xl font-sans font-bold text-slate-900 mb-4">We Do It For You</h3>
                  <p className="text-lg text-slate-600 font-serif mb-6">
                    For B2B companies that want to scale faster with complete marketing and sales support.
                  </p>
                  <div className="text-3xl font-sans font-bold text-slate-900">
                    Price on request
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-sans font-bold text-slate-900 mb-4">What you get:</h4>
                  <ul className="space-y-3 text-lg text-slate-600 font-serif mb-6">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Complete marketing and sales strategy
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Full creative team for content and campaigns
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Lead generation and qualification
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Sales process optimization and training
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0" />
                      Weekly performance calls and quarterly planning
                    </li>
                  </ul>
                  <p className="text-slate-600 font-serif">
                    <strong>Best for:</strong> Established companies ready to scale aggressively with full marketing and sales support.
                  </p>
                </div>
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
              Ready to Build Your Growth Engine?
            </h2>
            
            <div className="prose prose-xl prose-slate mx-auto mb-12">
              <p className="text-xl text-slate-600 font-serif">
                Book a call to discuss your current growth challenges and explore which approach fits your company best.
              </p>
            </div>

            <div className="mb-16">
              <AnimatedLink 
                href="https://calendly.com/winpointnl/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl"
              >
                Schedule Growth Strategy Call <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline-block" />
              </AnimatedLink>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20">
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