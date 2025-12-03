"use client"
import { useState } from 'react'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import Button from '@/components/ui/button'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    if (!name || !email || !message) {
      setError('Please fill in all fields.')
      return
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      setError('Please enter a valid email address.')
      return
    }
    // Simulate success; backend wiring will be added later
    setSuccess('Thanks! We will get back to you shortly.')
  }

  return (
    <form className="glass-card p-6" onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mt-4">
        <Textarea rows={5} placeholder="Tell us about your project" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      {success && <p className="mt-3 text-sm text-green-700">{success}</p>}
      <div className="mt-4">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  )
}
