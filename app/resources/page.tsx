'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

import { stageData } from './data/stages'

const bowtieStages = [
  {
    id: 'awareness',
    title: 'Awareness',
    subtitle: 'Getting on their radar',
    description: 'Generate initial brand awareness and recognition',
    useCases: stageData.awareness.useCases.slice(0, 2).map(useCase => ({
      title: useCase.title,
      description: useCase.description,
      icon: '📝',
      slug: useCase.title.toLowerCase().replace(/\s+/g, '-')
    }))
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Building understanding',
    description: 'Help prospects understand their problem and potential solutions',
    useCases: stageData.education.useCases.slice(0, 2).map(useCase => ({
      title: useCase.title,
      description: useCase.description,
      icon: '🎓',
      slug: useCase.title.toLowerCase().replace(/\s+/g, '-')
    }))
  },
  {
    id: 'selection',
    title: 'Selection',
    subtitle: 'Evaluating options',
    description: 'Guide prospects through solution evaluation and comparison',
    useCases: stageData.selection.useCases.slice(0, 2).map(useCase => ({
      title: useCase.title,
      description: useCase.description,
      icon: '⚖️',
      slug: useCase.title.toLowerCase().replace(/\s+/g, '-')
    }))
  },
  {
    id: 'onboarding',
    title: 'Onboarding',
    subtitle: 'Getting started',
    description: 'Ensure successful customer onboarding and early wins',
    useCases: stageData.onboarding.useCases.slice(0, 2).map(useCase => ({
      title: useCase.title,
      description: useCase.description,
      icon: '🚀',
      slug: useCase.title.toLowerCase().replace(/\s+/g, '-')
    }))
  },
  {
    id: 'adoption',
    title: 'Adoption',
    subtitle: 'Driving usage',
    description: 'Increase product adoption and customer success',
    useCases: stageData.adoption.useCases.slice(0, 2).map(useCase => ({
      title: useCase.title,
      description: useCase.description,
      icon: '📊',
      slug: useCase.title.toLowerCase().replace(/\s+/g, '-')
    }))
  },
  {
    id: 'expansion',
    title: 'Expansion',
    subtitle: 'Growing the account',
    description: 'Identify and execute upsell and cross-sell opportunities',
    useCases: stageData.expansion.useCases.slice(0, 2).map(useCase => ({
      title: useCase.title,
      description: useCase.description,
      icon: '📈',
      slug: useCase.title.toLowerCase().replace(/\s+/g, '-')
    }))
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Marketing Automation Resources
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Systematic resources to improve deal progression at every stage of your sales funnel.
            </p>
          </div>
        </div>
      </section>

      {/* Bowtie Model Sections */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">The Complete Customer Journey</h2>
            <p className="text-slate-600">Marketing automation resources for every stage of the bowtie model</p>
          </div>

          {/* Pre-Sale Stages */}
          <div className="mb-16">
            <h3 className="text-lg font-medium text-slate-700 mb-6">Pre-Sale Journey</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {bowtieStages.slice(0, 3).map((stage, index) => (
                <Card key={stage.id} className="bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-medium mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {stage.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {stage.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="p-3 bg-slate-50 rounded-lg">
                          <h4 className="font-medium text-slate-900 text-sm mb-1">
                            {useCase.title}
                          </h4>
                          <p className="text-xs text-slate-600">
                            {useCase.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900">
                      <Link href={`/resources/${stage.id}`}>
                        View resources
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Post-Sale Stages */}
          <div>
            <h3 className="text-lg font-medium text-slate-700 mb-6">Post-Sale Journey</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {bowtieStages.slice(3, 6).map((stage, index) => (
                <Card key={stage.id} className="bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center text-sm font-medium mr-3">
                        {index + 4}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {stage.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {stage.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="p-3 bg-slate-50 rounded-lg">
                          <h4 className="font-medium text-slate-900 text-sm mb-1">
                            {useCase.title}
                          </h4>
                          <p className="text-xs text-slate-600">
                            {useCase.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900">
                      <Link href={`/resources/${stage.id}`}>
                        View resources
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Need help implementing these systems?
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Get a personalized automation strategy designed for your sales process.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">
              Schedule a call
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}