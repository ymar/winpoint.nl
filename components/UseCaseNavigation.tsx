import Link from 'next/link'

const useCases = [
  {
    title: "Follow Up with Prospects",
    description: "7-touch email templates and timing calculators",
    icon: "📧",
    color: "blue"
  },
  {
    title: "Track Deal Engagement", 
    description: "Scoring tools and CRM setup guides",
    icon: "📊",
    color: "green"
  },
  {
    title: "Revive Stalled Conversations",
    description: "Psychology-based revival templates",
    icon: "⚡",
    color: "purple"
  },
  {
    title: "Qualify Potential Buyers",
    description: "BANT+ scorecards and question frameworks",
    icon: "🎯", 
    color: "red"
  }
]

export default function UseCaseNavigation() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stop Your Deals From Going Quiet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get proven tools and templates for your biggest sales challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-center">
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/resources">
            <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Browse All Resources
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}