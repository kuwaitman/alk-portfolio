'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { contactInfo } from '@/data/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    // console.log('Form submitted:', formData)
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Get In Touch
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let&apos;s discuss how I can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input w-full"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input w-full resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2 px-8 py-3"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Email</h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-text-secondary hover:text-primary-500 transition-colors duration-200"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Phone</h3>
                      <span className="text-text-secondary">{contactInfo.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Location</h3>
                      <span className="text-text-secondary">{contactInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {contactInfo.social.linkedin && (
                    <a
                      href={contactInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                  {contactInfo.social.github && (
                    <a
                      href={contactInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-600/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  Availability
                </h3>
                <p className="text-text-secondary text-sm">
                  Available for freelance projects, consulting, and full-time opportunities.
                  Based in Kuwait with remote work capabilities.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 