'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Mail, Phone } from 'lucide-react'
import { contactInfo } from '@/data/site'

export default function AboutPage() {
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
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              About Me
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Computer Engineer with 20+ years of experience in web development, 
              specializing in modern technologies and infrastructure management.
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="bg-bg-secondary rounded-lg p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AA</span>
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  Abdulrahman Al-Khulaifi
                </h2>
                <p className="text-text-secondary mb-4">
                  Computer Engineer | Web Developer | Open Source Technologist
                </p>
                <div className="flex items-center justify-center space-x-2 text-text-muted mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>{contactInfo.location}</span>
                </div>
                <a
                  href="/AbdulrahmanCV.pdf"
                  download
                  className="btn-primary flex items-center justify-center space-x-2 w-full"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Professional Background
                </h3>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    With over two decades of hands-on experience, I have built, secured, and maintained websites and systems across private sector, government, and open source environments. My journey began in 2001 with simple HTML websites and has evolved to encompass modern web technologies, infrastructure management, and enterprise solutions.
                  </p>
                  <p>
                    My strengths lie in blending frontend development with backend integration, CMS customization, and infrastructure setup using modern DevOps practices. I have worked extensively with government systems, ensuring security and compliance while delivering robust solutions.
                  </p>
                  <p>
                    Based in Kuwait, I have served clients across various industries, from small businesses to government institutions, providing comprehensive web development and consulting services.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Expertise Areas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-bg-secondary p-4 rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-2">Frontend Development</h4>
                    <p className="text-sm text-text-secondary">
                      React, Next.js, Flutter, HTML, CSS, JavaScript
                    </p>
                  </div>
                  <div className="bg-bg-secondary p-4 rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-2">Backend & CMS</h4>
                    <p className="text-sm text-text-secondary">
                      WordPress, Joomla, Drupal, PHP, ASP.NET, C#
                    </p>
                  </div>
                  <div className="bg-bg-secondary p-4 rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-2">E-commerce</h4>
                    <p className="text-sm text-text-secondary">
                      OpenCart, WooCommerce, PrestaShop
                    </p>
                  </div>
                  <div className="bg-bg-secondary p-4 rounded-lg">
                    <h4 className="font-semibold text-text-primary mb-2">Infrastructure</h4>
                    <p className="text-sm text-text-secondary">
                      Docker, Kubernetes, Proxmox, WHMCS, Cloudflare
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-500" />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <span className="text-text-secondary">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary-500" />
                    <span className="text-text-secondary">{contactInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 