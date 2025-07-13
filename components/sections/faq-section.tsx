"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How long does the analysis take?",
    answer: "Projects take 4 weeks to complete. Based on how fast you provide access to your lost deals data, we can usually get the analysis done in 4 weeks. If data collection takes longer, we can stretch into the 3rd week."
  },
  {
    id: 2,
    question: "What data do you need from us?",
    answer: "We need access to your CRM data for the last 12 months of lost deals, plus any available sales notes, competitor information, and deal timelines. The more context you provide, the better our analysis."
  },
  {
    id: 3,
    question: "How does scheduling work?",
    answer: "Availability is first come, first serve. If you want to start the process, we'll send you the payment link and the contract — when that is all signed and paid, we send over a Calendly link with open slots on Tuesdays, Wednesdays, and Thursdays."
  },
  {
    id: 4,
    question: "What if we want ongoing support?",
    answer: "We offer monthly strategy sessions at €500 per month to help you execute the recovery campaigns. You'll notice it's not very cost-effective to have us work every lost deal. That's by design — we want to help you recover your highest-value opportunities and teach your team the system without becoming a permanent crutch."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Everything you need to know about our 4-week Recovery Assessment
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-6 text-left transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="font-medium title-font text-gray-900 text-lg">
                  {faq.question}
                </h3>
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0 ml-4" />
                )}
              </button>
              {openItems.includes(faq.id) && (
                <div className="bg-white border border-gray-200 rounded-b-lg p-6 -mt-2">
                  <p className="leading-relaxed text-base text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
