'use client'

import Link from 'next/link'

const resources = [
  {
    title: "15 Cold Prospect Revival Templates",
    description: "Psychology-based email templates for different revival scenarios, including the famous 'breakup email' that gets strong response rates.",
    type: "Email Templates",
    format: "PDF + Email Copy",
    downloadUrl: "#",
    featured: true,
    preview: "Includes the counter-intuitive breakup email that generates highest responses"
  },
  {
    title: "Deal Resurrection Psychology Framework",
    description: "Complete methodology explaining the 4 reasons deals go cold and psychology-based revival strategies for each scenario.",
    type: "Strategy Framework",
    format: "PDF Guide",
    downloadUrl: "#",
    featured: false,
    preview: "Covers scarcity, urgency, social proof, and commitment psychology"
  },
  {
    title: "Breakup Email Sequence Collection",
    description: "10 variations of the counter-intuitive 'breakup email' approach that generates the highest response rates when deals stall.",
    type: "Email Sequences",
    format: "Email Copy",
    downloadUrl: "#",
    featured: false,
    preview: "Different approaches for different deal sizes and industries"
  }
]

const platforms = [
  {
    name: 'HubSpot',
    description: 'Setup automated stalled deal detection and revival sequences',
    slug: 'hubspot-setup',
    features: [
      'Stalled deal workflow automation',
      'Breakup email sequence setup',
      'Response tracking and follow-up',
      'Deal revival reporting dashboard'
    ]
  },
  {
    name: 'Marketo',
    description: 'Implement systematic deal revival campaigns in Marketo',
    slug: 'marketo-setup',
    features: [
      'Stalled deal smart campaigns',
      'Multi-touch revival sequences',
      'Behavioral trigger setup',
      'Success measurement tracking'
    ]
  }
]

export default function ReviveStalledDealsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Spacer */}
      <div className="h-16"></div>
      
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/resources" className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600">
                  Resources
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link href="/resources/purchase" className="ml-1 text-sm font-medium text-slate-700 hover:text-blue-600 md:ml-2">Purchase</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-slate-500 md:ml-2">Revive Stalled Deals</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-orange-100 text-sm font-medium mb-6">
              ⚡ Primary Use Case
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Revive Stalled Conversations
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              When deals go silent, most salespeople panic or give up. Here's how to use 
              psychology-based revival techniques to bring stalled deals back to life.
            </p>
          </div>
        </div>
      </section>

      {/* The Psychology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              The Psychology of Stalled Deals
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Understanding why deals stall is the key to bringing them back to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">😰</div>
              <h3 className="font-bold text-slate-900 mb-2">Fear of Decision</h3>
              <p className="text-sm text-slate-600">Worried about making the wrong choice</p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="font-bold text-slate-900 mb-2">Competing Priorities</h3>
              <p className="text-sm text-slate-600">Other urgent projects took precedence</p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="font-bold text-slate-900 mb-2">Budget Changes</h3>
              <p className="text-sm text-slate-600">Budget frozen or reallocated</p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold text-slate-900 mb-2">Internal Politics</h3>
              <p className="text-sm text-slate-600">Stakeholder disagreement or changes</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Breakup Email Strategy */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The Counter-Intuitive Breakup Email
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Instead of pushing harder when deals stall, the "breakup email" does the opposite. 
                It removes pressure and triggers a psychological response that gets strong response rates.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <div className="font-semibold text-white mb-1">Acknowledge the Silence</div>
                    <div className="text-slate-400 text-sm">Recognize they've gone quiet without being accusatory</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <div className="font-semibold text-white mb-1">Remove All Pressure</div>
                    <div className="text-slate-400 text-sm">Make it easy for them to say no or postpone</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <div className="font-semibold text-white mb-1">Trigger Loss Aversion</div>
                    <div className="text-slate-400 text-sm">Subtly remind them what they'll miss by not moving forward</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">
                Sample Breakup Email Template
              </h3>
              <div className="bg-slate-800 rounded-lg p-4 text-sm text-slate-300 font-mono leading-relaxed">
                <div className="text-slate-400 mb-2">Subject: Should I close your file?</div>
                <div className="border-l-2 border-slate-600 pl-4">
                  Hi [Name],<br/><br/>
                  
                  I haven't heard back from you in a few weeks, so I'm assuming you've either solved the [specific problem] internally or decided to put this project on hold.<br/><br/>
                  
                  Before I close your file, I wanted to check one last time - should I mark you as "not interested" in our system?<br/><br/>
                  
                  If timing just isn't right, no worries at all. I'll circle back in Q2.<br/><br/>
                  
                  [Your name]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Deal Revival Resources
            </h2>
            <p className="text-lg text-slate-600">
              Complete toolkit for bringing stalled conversations back to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border-2 hover:shadow-lg transition-all duration-200 group ${
                resource.featured ? 'border-orange-200 bg-gradient-to-br from-orange-50 to-red-50' : 'border-slate-100 hover:border-slate-200'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-sm font-medium rounded-lg ${
                    resource.featured ? 'bg-orange-100 text-orange-800' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {resource.type}
                  </span>
                  {resource.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full">
                      🔥 Most Effective
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                {resource.preview && (
                  <div className="bg-slate-50 rounded-lg p-3 mb-4">
                    <div className="text-xs font-semibold text-slate-700 mb-1">Key Feature:</div>
                    <div className="text-xs text-slate-600">{resource.preview}</div>
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">
                    {resource.format}
                  </div>
                  <button className="px-5 py-2 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2">
                    Download Free
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Automated Implementation Guides
            </h2>
            <p className="text-lg text-slate-600">
              Set up systematic stalled deal detection and revival sequences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {platform.name} Automation
                  </h3>
                  <p className="text-slate-600">
                    {platform.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Automation Features:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/resources/purchase/revive-stalled-deals/${platform.slug}`}
                  className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Get {platform.name} Setup Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Expected Results with Systematic Deal Revival
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">Significant</div>
              <div className="font-semibold text-slate-900 mb-2">Revival Rate</div>
              <div className="text-sm text-slate-600">Of truly stalled deals can be successfully revived</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">Strong</div>
              <div className="font-semibold text-slate-900 mb-2">Response Rate</div>
              <div className="text-sm text-slate-600">Average response rate to well-crafted breakup emails</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">Notable</div>
              <div className="font-semibold text-slate-900 mb-2">Overall Lift</div>
              <div className="text-sm text-slate-600">Improvement in total close rate from deal revival</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Revive Your Stalled Deals?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the complete deal revival system with templates, psychology frameworks, 
            and automated implementation guides.
          </p>
          <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors text-lg">
            Download Complete Revival Kit
          </button>
        </div>
      </section>
    </div>
  )
}