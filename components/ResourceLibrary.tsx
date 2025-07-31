import { useState } from 'react'

const resources = [
  // Follow-up Systems Resources
  {
    title: "7-Touch Follow-Up Email Templates",
    description: "Complete email sequence with subject lines, timing, and psychology-based messaging that increases response rates by 67%.",
    category: "Follow-up Systems",
    type: "Email Templates",
    format: "PDF + Email Copy",
    useCase: "follow-up-prospects",
    downloadUrl: "#",
    featured: true
  },
  {
    title: "Follow-Up Timing Calculator",
    description: "Excel tool to create custom follow-up schedules based on deal size, industry, and buyer persona.",
    category: "Follow-up Systems", 
    type: "Calculator",
    format: "Excel Template",
    useCase: "follow-up-prospects",
    downloadUrl: "#",
    featured: false
  },
  {
    title: "TechCorp Case Study: 40% Close Rate Increase",
    description: "Complete case study showing how systematic follow-up increased close rates from 15% to 21%.",
    category: "Follow-up Systems",
    type: "Case Study", 
    format: "PDF Report",
    useCase: "follow-up-prospects",
    downloadUrl: "#",
    featured: false
  },

  // Deal Tracking Resources
  {
    title: "Deal Engagement Scorecard",
    description: "Interactive Excel calculator that scores prospects across 5 engagement signals and provides action recommendations.",
    category: "Deal Tracking",
    type: "Assessment Tool",
    format: "Excel Calculator", 
    useCase: "track-deal-engagement",
    downloadUrl: "#",
    featured: true
  },
  {
    title: "5 Engagement Signals Tracking Guide",
    description: "Complete guide to monitoring email engagement, meeting participation, content consumption, and more.",
    category: "Deal Tracking",
    type: "Implementation Guide",
    format: "PDF Guide",
    useCase: "track-deal-engagement", 
    downloadUrl: "#",
    featured: false
  },
  {
    title: "CRM Setup Templates for Deal Visibility",
    description: "Salesforce and HubSpot configuration templates with custom fields, workflows, and dashboard setups.",
    category: "Deal Tracking",
    type: "CRM Templates",
    format: "Configuration Files",
    useCase: "track-deal-engagement",
    downloadUrl: "#",
    featured: false
  },

  // Deal Revival Resources  
  {
    title: "15 Cold Prospect Revival Templates",
    description: "Psychology-based email templates for different revival scenarios, including the famous 'breakup email' that gets 23% response rates.",
    category: "Deal Revival",
    type: "Email Templates", 
    format: "PDF + Email Copy",
    useCase: "revive-stalled-conversations",
    downloadUrl: "#",
    featured: true
  },
  {
    title: "Deal Resurrection Psychology Framework",
    description: "Complete methodology explaining the 4 reasons deals go cold and psychology-based revival strategies.",
    category: "Deal Revival",
    type: "Strategy Framework",
    format: "PDF Guide", 
    useCase: "revive-stalled-conversations",
    downloadUrl: "#",
    featured: false
  },
  {
    title: "Breakup Email Sequence Collection",
    description: "10 variations of the counter-intuitive 'breakup email' approach that generates the highest response rates.",
    category: "Deal Revival", 
    type: "Email Templates",
    format: "Email Copy",
    useCase: "revive-stalled-conversations",
    downloadUrl: "#",
    featured: false
  },

  // Qualification Resources
  {
    title: "BANT+ Qualification Scorecard", 
    description: "Interactive Excel tool that scores prospects across 7 qualification dimensions with weighted scoring and priority rankings.",
    category: "Qualification",
    type: "Assessment Tool",
    format: "Excel Calculator",
    useCase: "qualify-potential-buyers", 
    downloadUrl: "#",
    featured: true
  },
  {
    title: "25 Strategic Qualifying Questions",
    description: "Psychology-based questions organized by category that reveal true buying intent without sounding like an interrogation.",
    category: "Qualification",
    type: "Question Bank",
    format: "PDF Guide",
    useCase: "qualify-potential-buyers",
    downloadUrl: "#", 
    featured: false
  },
  {
    title: "Red Flag Identification Checklist",
    description: "Comprehensive guide to recognizing when prospects will never buy, saving time and resources.",
    category: "Qualification",
    type: "Checklist",
    format: "PDF Checklist", 
    useCase: "qualify-potential-buyers",
    downloadUrl: "#",
    featured: false
  }
]

export default function ResourceLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedUseCase, setSelectedUseCase] = useState('all')
  
  const categories = ['All', 'Follow-up Systems', 'Deal Tracking', 'Deal Revival', 'Qualification']
  const useCases = [
    { value: 'all', label: 'All Use Cases' },
    { value: 'follow-up-prospects', label: 'Follow up with prospects' },
    { value: 'track-deal-engagement', label: 'Track deal engagement' }, 
    { value: 'revive-stalled-conversations', label: 'Revive stalled conversations' },
    { value: 'qualify-potential-buyers', label: 'Qualify potential buyers' }
  ]

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'All' || resource.category === selectedCategory
    const useCaseMatch = selectedUseCase === 'all' || resource.useCase === selectedUseCase
    return categoryMatch && useCaseMatch
  })

  const featuredResources = resources.filter(resource => resource.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Spacer */}
      <div className="h-16"></div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Deal Progression Resource Library
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Free tools, templates, and frameworks to stop your deals from going quiet. 
              Everything you need to build systematic deal progression engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Download All Templates
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Get Custom Strategy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Most Popular Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {resource.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {resource.type} • {resource.format}
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              Find Resources for Your Specific Challenge
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Filter by Use Case:</label>
                <select 
                  value={selectedUseCase}
                  onChange={(e) => setSelectedUseCase(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {useCases.map(useCase => (
                    <option key={useCase.value} value={useCase.value}>
                      {useCase.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Filter by Resource Type:</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredResources.length}</span> resources
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {selectedUseCase !== 'all' && ` for ${useCases.find(u => u.value === selectedUseCase)?.label}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                      {resource.type}
                    </span>
                    {resource.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full">
                        ⭐ Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {resource.format}
                    </div>
                    <button className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 group-hover:bg-blue-700">
                      Download Free
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M12 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters to see more resources.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedUseCase('all')
                }}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a personalized deal progression system designed specifically for your sales process, 
            industry, and buyer journey.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Get Your Custom System
          </button>
        </div>
      </section>
    </div>
  )
}