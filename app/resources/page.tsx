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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight max-w-6xl mx-auto">
              Marketing Automation Resources
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Systematic resources to improve deal progression at every stage of your sales funnel.
            </p>
          </div>
        </div>
      </section>

      {/* Bowtie Model Sections */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Complete Customer Journey</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Marketing automation resources for every stage of the bowtie model
            </p>
          </div>

          {/* Pre-Sale Stages */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">Pre-Sale Journey</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {bowtieStages.slice(0, 3).map((stage, index) => (
                <div key={stage.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold mr-4 ${
                      stage.id === 'awareness' ? 'bg-red-500 text-white' :
                      stage.id === 'education' ? 'bg-orange-500 text-white' :
                      stage.id === 'selection' ? 'bg-yellow-500 text-black' : ''
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-slate-600">{stage.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {stage.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-900 mb-2">
                          {useCase.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200" asChild>
                    <Link href={`/resources/${stage.id}`}>
                      View Resources
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Post-Sale Stages */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">Post-Sale Journey</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {bowtieStages.slice(3, 6).map((stage, index) => (
                <div key={stage.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-4 ${
                      stage.id === 'onboarding' ? 'bg-green-500' :
                      stage.id === 'adoption' ? 'bg-blue-500' :
                      stage.id === 'expansion' ? 'bg-purple-500' : ''
                    }`}>
                      {index + 4}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-slate-600">{stage.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {stage.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-900 mb-2">
                          {useCase.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200" asChild>
                    <Link href={`/resources/${stage.id}`}>
                      View Resources
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Need help implementing these systems?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Get a personalized automation strategy designed for your sales process.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105" asChild>
            <a href="https://calendly.com/winpointnl/30min" target="_blank" rel="noopener noreferrer">
              Schedule a Call
            </a>
          </Button>
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