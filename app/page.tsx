"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, Target, Zap } from "lucide-react"
import { useState } from "react"

function ProblemCheckboxes() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(5).fill(false))

  const toggleCheckbox = (index: number) => {
    const newCheckedItems = [...checkedItems]
    newCheckedItems[index] = !newCheckedItems[index]
    setCheckedItems(newCheckedItems)
  }

  const problems = [
    "You have deals that have been \"90% done\" for months but never seem to close.",
    "Prospects go dark after showing strong interest and you don't know why.",
    "Decision makers keep asking for \"more time to think about it\" without giving you a clear timeline.",
    "Your sales team doesn't know how to re-engage stalled prospects without seeming pushy.",
    "You're constantly forecasting deals that slip quarter after quarter."
  ]

  return (
    <div className="space-y-4">
      {problems.map((problem, index) => (
        <div 
          key={index}
          className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-blue-300 transition-colors"
          onClick={() => toggleCheckbox(index)}
        >
          <div className={`w-5 h-5 border-2 rounded mt-0.5 flex-shrink-0 transition-colors ${
            checkedItems[index] 
              ? 'bg-blue-600 border-blue-600' 
              : 'border-gray-300'
          }`}>
            {checkedItems[index] && (
              <Check className="w-3 h-3 text-white m-0.5" />
            )}
          </div>
          <p className="text-gray-700 text-lg">
            {problem}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Winpoint</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">Get the Deal Recovery Framework</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get the Deal Recovery Framework
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Turn your stalled pipeline into closed revenue with our proven 30-day sprint. We help B2B sales teams identify exactly why deals get stuck and give you the framework to get them moving again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Your Deal Recovery Framework
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 bg-transparent">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      
      {/* Service Card */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-900">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Service Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The Deal Recovery Framework Sprint</h2>
                  <p className="text-gray-600 mb-6">
                    A complete <strong>30-day</strong> process that turns your stalled deals into a systematic revenue recovery machine.
                  </p>
                </div>

                {/* What you get */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What you get:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Complete pipeline audit</p>
                        <p className="text-sm text-gray-600 mt-1">
                          We analyze every stalled deal in your pipeline and identify the specific blockers stopping them from closing.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">The Deal Recovery Framework</p>
                        <p className="text-sm text-gray-600 mt-1">
                          A step-by-step playbook with scripts, email templates, and decision trees for every type of stalled deal scenario.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Ready-to-use recovery toolkit</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Templates for re-engaging prospects, handling objections, and creating urgency that your team can use immediately.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Implementation roadmap</p>
                        <p className="text-sm text-gray-600 mt-1">
                          A clear 90-day plan showing exactly which deals to tackle first and how to measure progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment:</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <p className="text-2xl font-bold text-gray-900 mb-1">$12,500</p>
                      <p className="text-sm text-gray-600">
                        Delivered in exactly 30 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Is your pipeline stuck in limbo?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              (Check all that apply)
            </p>
          </div>

          <ProblemCheckboxes />

        
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why most sales teams lose millions in their pipeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              20-40% of B2B pipelines are stuck in limbo. That&apos;s millions sitting there doing nothing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Find the real blockers</h3>
              <p className="text-gray-600">
                Most teams guess why deals stall. We dig into procurement issues, internal politics, and budget constraints to find the actual problems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get deals unstuck fast</h3>
              <p className="text-gray-600">
                Our framework gives you proven strategies to re-engage decision makers and create urgency around your solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Turn pipeline into revenue</h3>
              <p className="text-gray-600">
                Stop hoping stalled deals will close. Start systematically recovering them with a repeatable process.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      
      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions about the framework</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our Deal Recovery Framework.</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What if deals still don&apos;t close after using the framework?</h3>
                <p className="text-gray-600">
                  The framework focuses on getting deals unstuck and moving forward. If you&apos;re not satisfied with the quality and completeness of the framework, we&apos;ll refine it or provide a full refund within 30 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you help execute the recovery strategies?</h3>
                <p className="text-gray-600">
                  The sprint delivers everything your team needs to execute. We can provide additional coaching or connect you with specialists if you want hands-on help implementing it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How is this different from sales training?</h3>
                <p className="text-gray-600">
                  Sales training teaches general skills. This gives you a specific framework designed around your actual stalled deals and the real reasons they&apos;re stuck.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What if our deals stall for different reasons than other companies?
                </h3>
                <p className="text-gray-600">
                  That&apos;s exactly why we audit your pipeline first. The framework is built specifically for your deal types, sales cycle, and common stall patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Winpoint</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <span className="text-gray-600">© 2024 Winpoint. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
