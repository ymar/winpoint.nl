'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        const errorData = await response.json()
        console.error('Form submission error:', errorData)
        throw new Error(errorData.error || 'Failed to send message')
      }
    } catch (err) {
      setError('Failed to send message. Please try again or email us directly at mail@ymar.nl')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-none p-12  text-center">
        <div className="text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
        <p className="text-slate-600 mb-6">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-slate-300 text-slate-700 hover:border-slate-400"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-none p-12 bg-white">
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-500 mb-3 font-sans uppercase tracking-wide">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-slate-300 px-0 py-3 text-lg text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-0 outline-none transition-colors font-serif"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-500 mb-3 font-sans uppercase tracking-wide">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-slate-300 px-0 py-3 text-lg text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-0 outline-none transition-colors font-serif"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-500 mb-3 font-sans uppercase tracking-wide">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b-2 border-slate-300 px-0 py-3 text-lg text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-0 outline-none transition-colors font-serif"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-500 mb-3 font-sans uppercase tracking-wide">
            Tell us about your situation *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b-2 border-slate-300 px-0 py-3 text-lg text-slate-900 placeholder-slate-500 focus:border-slate-900 focus:ring-0 outline-none transition-colors resize-none font-serif"
            placeholder="What challenges are you facing with staying top of mind during long sales cycles?"
          />
        </div>

        {error && (
          <div className="border border-red-200 rounded-none p-4">
            <p className="text-red-800 text-sm font-serif">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center text-xl font-medium font-sans text-slate-900 relative transition-all duration-300 ease-out hover:text-blue-600 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline-block" />
          </span>
          
          {/* Animated underline */}
          <span 
            className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"
          />
        </button>
      </div>
    </form>
  )
}