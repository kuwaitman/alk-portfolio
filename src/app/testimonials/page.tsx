'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import { Phone, Linkedin, ExternalLink, User } from 'lucide-react'

export default function TestimonialsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container-custom py-12">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Page Header */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                Client Testimonials
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Hear from our valued clients about their experience working with us 
                and the successful projects we've delivered together.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-bg-secondary border border-border rounded-lg p-8 hover:border-primary-500 transition-colors duration-200"
                >
                  {/* Client Info */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {testimonial.name}
                      </h3>
                      {testimonial.position && (
                        <p className="text-text-secondary text-sm mb-1">
                          {testimonial.position}
                        </p>
                      )}
                      {testimonial.company && (
                        <p className="text-primary-600 font-medium text-sm">
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {testimonial.testimonial && (
                    <blockquote className="text-text-secondary italic mb-6 border-l-4 border-primary-500 pl-4">
                      "{testimonial.testimonial}"
                    </blockquote>
                  )}

                  {/* Projects */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">
                      Projects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.projects.map((project) => (
                        <a
                          key={project}
                          href={`/projects/#${project.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full hover:bg-primary-200 transition-colors duration-200 cursor-pointer"
                        >
                          {project}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-text-secondary" />
                      <a
                        href={`tel:${testimonial.phone}`}
                        className="text-text-primary hover:text-primary-600 transition-colors duration-200"
                      >
                        {testimonial.phone}
                      </a>
                    </div>
                    
                    {testimonial.linkedin && (
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-4 h-4 text-text-secondary" />
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-primary-600 transition-colors duration-200 flex items-center gap-1"
                        >
                          LinkedIn Profile
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-600/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life. 
                Contact us today to get started on your next successful project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Get In Touch
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              Client Testimonials
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Hear from our valued clients about their experience working with us 
              and the successful projects we've delivered together.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-bg-secondary border border-border rounded-lg p-8 hover:border-primary-500 transition-colors duration-200"
              >
                {/* Client Info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {testimonial.name}
                    </h3>
                    {testimonial.position && (
                      <p className="text-text-secondary text-sm mb-1">
                        {testimonial.position}
                      </p>
                    )}
                    {testimonial.company && (
                      <p className="text-primary-600 font-medium text-sm">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Testimonial */}
                {testimonial.testimonial && (
                  <blockquote className="text-text-secondary italic mb-6 border-l-4 border-primary-500 pl-4">
                    "{testimonial.testimonial}"
                  </blockquote>
                )}

                                  {/* Projects */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">
                      Projects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.projects.map((project) => (
                        <a
                          key={project}
                          href={`/projects/#${project.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full hover:bg-primary-200 transition-colors duration-200 cursor-pointer"
                        >
                          {project}
                        </a>
                      ))}
                    </div>
                  </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-text-secondary" />
                    <a
                      href={`tel:${testimonial.phone}`}
                      className="text-text-primary hover:text-primary-600 transition-colors duration-200"
                    >
                      {testimonial.phone}
                    </a>
                  </div>
                  
                  {testimonial.linkedin && (
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-text-secondary" />
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary hover:text-primary-600 transition-colors duration-200 flex items-center gap-1"
                      >
                        LinkedIn Profile
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-600/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life. 
              Contact us today to get started on your next successful project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 