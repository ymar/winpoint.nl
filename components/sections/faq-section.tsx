import { Card, CardContent } from "@/components/ui/card"

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Everything you need to know about our 4-week Recovery Assessment
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">How long does the analysis take?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Projects take 4 weeks to complete. Based on how fast you provide access to your lost deals data, we
                  can usually get the analysis done in 4 weeks. If data collection takes longer, we can stretch into
                  the 3rd week.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">What data do you need from us?</h3>
                <p className="text-slate-600 leading-relaxed">
                  We need access to your CRM data for the last 12 months of lost deals, plus any available sales
                  notes, competitor information, and deal timelines. The more context you provide, the better our
                  analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">How does scheduling work?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Availability is first come, first serve. If you want to start the process, we&rsquo;ll send you the
                  payment link and the contract — when that is all signed and paid, we send over a Calendly link with
                  open slots on Tuesdays, Wednesdays, and Thursdays.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 font-display">What if we want ongoing support?</h3>
                <p className="text-slate-600 leading-relaxed">
                  We offer monthly strategy sessions at €500 per month to help you execute the recovery campaigns.
                  You&rsquo;ll notice it&rsquo;s not very cost-effective to have us work every lost deal. That&rsquo;s by design — we
                  want to help you recover your highest-value opportunities and teach your team the system without
                  becoming a permanent crutch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
