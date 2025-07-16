'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, MessageSquare } from 'lucide-react'

export function CTA() {
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
    <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Let's discuss how I can help bring your vision to life with my 20+ years of web development experience and expertise in modern technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/contact/"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Get In Touch</span>
            </Link>
            <Link
              href="/projects/"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>View Portfolio</span>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-white/60 text-sm">
            <p>Available for freelance projects, consulting, and full-time opportunities</p>
            <p className="mt-1">📍 Based in Kuwait | 🌐 Remote work available</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 