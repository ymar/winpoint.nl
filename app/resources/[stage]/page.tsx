'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { notFound } from 'next/navigation'
import { stageData } from '../data/stages'

interface PageProps {
  params: Promise<{
    stage: string
  }>
}

export default async function StagePage({ params }: PageProps) {
  const { stage } = await params
  const stageInfo = stageData[stage]
  
  if (!stageInfo) {
    notFound()
  }

  const {
    title,
    subtitle,
    description,
    overview,
    problems,
    useCases,
    navigation
  } = stageInfo

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/resources" className="text-slate-500 hover:text-slate-700">
              Resources
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900">{title}</span>
          </nav>

          <h1 className="text-3xl font-semibold text-slate-900 mb-4">
            {overview.headline}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {overview.description}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="h-full flex flex-col">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Where Prospects Are Mentally
              </h2>
              <div className="prose prose-slate flex-grow">
                <p className="text-slate-600 leading-relaxed mb-4">
                  {overview.mentalState}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {overview.challenge}
                </p>
              </div>
              
              {overview.callout && (
                <div className={`border rounded-lg p-4 mt-6 ${overview.callout.type === 'warning' ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'}`}>
                  <div className="flex items-center mb-2">
                    <overview.callout.icon className={`w-4 h-4 mr-2 ${overview.callout.type === 'warning' ? 'text-red-600' : 'text-blue-600'}`} />
                    <span className={`text-sm font-medium ${overview.callout.type === 'warning' ? 'text-red-900' : 'text-blue-900'}`}>
                      {overview.callout.title}
                    </span>
                  </div>
                  <p className={`text-sm ${overview.callout.type === 'warning' ? 'text-red-800' : 'text-blue-800'}`}>
                    {overview.callout.description}
                  </p>
                </div>
              )}
            </div>
            
            <div className="h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Common Problems
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <problem.icon className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{problem.title}</div>
                      <div className="text-xs text-slate-600 mt-1">{problem.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Systems */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              {title} Systems
            </h2>
            <p className="text-slate-600">
              {subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <Card key={index} className="bg-white border border-slate-200 hover:border-slate-300 transition-colors h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4 flex-grow">
                      {useCase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 text-xs">
                          <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-auto">
                      <div className="text-xs font-medium text-green-900 mb-1">Expected Outcome</div>
                      <div className="text-xs text-green-800">{useCase.outcome}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-slate-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {navigation.prev ? (
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/resources/${navigation.prev.slug}`} className="flex items-center text-slate-600">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {navigation.prev.title}
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
            
            <Button variant="ghost" size="sm" asChild>
              <Link href="/resources" className="text-slate-600">
                All Resources
              </Link>
            </Button>
            
            {navigation.next ? (
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/resources/${navigation.next.slug}`} className="flex items-center text-slate-600">
                  {navigation.next.title}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}