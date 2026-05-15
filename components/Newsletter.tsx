'use client'

import { useState } from 'react'
import { ArrowRight, Gift } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blush-50 to-sage-50">
      <div className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush-100 mb-6">
            <Gift size={28} className="text-blush-500" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif text-sage-900 mb-4">
            Get 10% off your<br />
            <span className="italic text-blush-500">first order</span>
          </h2>

          <p className="text-gray-500 mb-8 leading-relaxed">
            Join 50,000+ mothers getting expert baby gear advice, safety updates,
            exclusive deals, and early access to new arrivals.
          </p>

          {submitted ? (
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-fade-in">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-2">You're in!</h3>
              <p className="text-gray-500 text-sm">
                Check your inbox for your 10% discount code. Welcome to the TinyNest family!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent text-sm shadow-sm"
              />
              <button type="submit" className="btn-blush inline-flex items-center justify-center gap-2">
                Claim 10% Off
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          <p className="text-xs text-gray-400 mt-4">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
