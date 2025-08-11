'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!consent) {
      alert('Please agree to receive newsletters by checking the consent box.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        alert(`Welcome to the LHA family, ${email}!\n\nYou'll receive our latest updates, school news, and educational insights directly to your inbox.`)
        setEmail('')
        setConsent(false)
      } else {
        alert('Error subscribing to newsletter')
      }
    } catch (error) {
      alert('Error subscribing to newsletter')
    }
    
    setIsSubmitting(false)
  }

  return (
    <section className="section newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h3>Stay Connected with LHA</h3>
          <p>Get the latest news about school events, academic achievements, admission updates, and educational insights delivered to your inbox.</p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email address" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          <div className="newsletter-consent">
            <input 
              type="checkbox" 
              id="newsletterConsent" 
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required 
            />
            <label htmlFor="newsletterConsent">
              I agree to receive newsletters from Loving Hands Academy
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}