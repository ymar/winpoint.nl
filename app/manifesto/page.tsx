import type { Metadata } from "next"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl bg-white shadow-xl">
          <div className="px-8 py-12 sm:px-12 sm:py-16">
            <header className="border-b border-gray-200 pb-12 text-center">
              <div className="mb-6 text-2xl font-bold tracking-wider text-indigo-600">
                WINPOINT
              </div>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                The B2B Sales Pipeline
                <br />
                is Broken
              </h1>
              <p className="text-xl text-gray-600 italic">
                A manifesto for companies selling to companies
              </p>
            </header>

            <section className="mt-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                The Problem
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Your Buyers Can't Find You When It Matters
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
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
                <div className="my-8 rounded-lg bg-gray-50 p-6 text-xl font-medium text-gray-900">
                  Meanwhile, your marketing team counts MQLs while your sales team complains 
                  those leads never convert.
                </div>
                <p>
                  Sound familiar? You're not alone. Most B2B companies lose 79% of qualified leads 
                  because they can't bridge the gap between marketing interest and sales readiness.
                </p>
              </div>
            </section>

            <div className="my-16 rounded-lg bg-indigo-50 p-8 text-center">
              <blockquote className="text-2xl font-medium text-gray-900 italic sm:text-3xl">
                "In B2B, timing isn't about when you're ready to sell.
                <br />
                It's about when they're ready to buy."
              </blockquote>
            </div>

            <section className="mt-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                What We Believe
              </div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900">
                B2B Buying is Different
              </h2>
              
              <div className="space-y-6 rounded-lg bg-blue-50 p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">→</div>
                  <div>
                    <strong className="text-gray-900">Stay present during long sales cycles.</strong>{' '}
                    Your prospects need 6-18 months to decide. Be helpful during that entire journey, 
                    not just at the beginning and end.
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">→</div>
                  <div>
                    <strong className="text-gray-900">Multiple stakeholders mean multiple messages.</strong>{' '}
                    The CFO cares about ROI. The IT director worries about implementation. Your 
                    automation needs to speak to all of them.
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">→</div>
                  <div>
                    <strong className="text-gray-900">Marketing and sales share the same revenue goal.</strong>{' '}
                    When they work together, qualified opportunities get proper attention and deals 
                    close faster.
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">→</div>
                  <div>
                    <strong className="text-gray-900">Account-based thinking beats lead-based thinking.</strong>{' '}
                    Focus on companies that fit your ideal customer profile, not just individual 
                    email addresses.
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                The Solution
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                How Winpoint Fixes Your B2B Pipeline
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  We build marketing automation designed for complex B2B sales cycles. Our systems 
                  keep you visible with buying committees while connecting your marketing and sales 
                  teams around shared revenue goals.
                </p>
                
                <div className="my-6 text-xl font-medium text-gray-900">
                  Here's what that means for your business:
                </div>
                
                <p>
                  <span className="font-bold text-indigo-600">Account-based nurturing</span> that 
                  speaks to different stakeholders with relevant messages. No more generic email 
                  blasts to entire contact lists.
                </p>
                
                <p>
                  <span className="font-bold text-indigo-600">Lead scoring that actually works</span> because 
                  it tracks buying committee behavior, not just individual actions. Marketing passes 
                  sales-ready opportunities, not just email clicks.
                </p>
                
                <p>
                  <span className="font-bold text-indigo-600">Pipeline visibility</span> that shows 
                  which accounts are moving forward and which need attention. Both teams see the 
                  same data and work the same opportunities.
                </p>
                
                <p>
                  <span className="font-bold text-indigo-600">Consistent touchpoints</span> that keep 
                  you top-of-mind during long decision cycles. Your prospects hear from you at the 
                  right frequency with valuable content.
                </p>
              </div>
            </section>

            <div className="my-16 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <h3 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
                The Business Impact
              </h3>
              <div className="space-y-3 text-center">
                <p className="text-indigo-100">
                  Your sales team works qualified accounts instead of chasing individual leads that go nowhere.
                </p>
                <p className="text-indigo-100">
                  Your marketing team generates pipeline that actually converts to revenue.
                </p>
                <p className="text-indigo-100">
                  Your prospects remember you when procurement opens up the buying process.
                </p>
                <p className="text-xl font-bold">
                  Your revenue grows because you're not losing qualified buyers to better-organized competitors.
                </p>
              </div>
            </div>

            <section className="mt-12">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Our Commitment
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                What B2B Companies Get with Winpoint
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  We don't promise instant results or magic formulas. B2B sales is complex, and 
                  anyone who tells you otherwise is lying.
                </p>
                
                <p>
                  We promise automation that understands your sales cycle length. We'll align your 
                  teams around account-based goals. We'll track engagement across buying committees, 
                  not just individual contacts.
                </p>
                
                <div className="my-6 text-xl font-medium text-gray-900">
                  Most importantly, we'll help you stay relevant with qualified prospects during 
                  their entire buying journey.
                </div>
                
                <p>
                  Because in B2B, the company that stays helpful during the research phase wins the 
                  deal during the buying phase.
                </p>
              </div>
            </section>

            <div className="mt-16 border-t border-gray-200 pt-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                Ready to Fix Your B2B Pipeline?
              </h3>
              <p className="mb-2 text-xl text-gray-600">
                Join the companies that refuse to lose qualified buyers to poor follow-up.
              </p>
              <p className="text-xl font-bold text-gray-900">
                It's time to win more of the deals you deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}