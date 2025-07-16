'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { stats } from '@/data/site'

export function HeroSection() {
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
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Abdulrahman</span>
              <br />
              <span className="text-text-primary">Al-Khulaifi</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
              Computer Engineer | Web Developer | Open Source Technologist
            </p>
          </motion.div>

          {/* Location & Experience */}
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-6 text-text-muted">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Kuwait</span>
            </div>
            <div className="w-1 h-1 bg-text-muted rounded-full"></div>
            <span>{stats.yearsOfExperience}+ Years Experience</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">
                {stats.yearsOfExperience}+
              </div>
              <div className="text-sm text-text-muted">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">
                {stats.projectsCompleted}+
              </div>
              <div className="text-sm text-text-muted">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">
                {stats.technologies}+
              </div>
              <div className="text-sm text-text-muted">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-500">
                {stats.clientsServed}+
              </div>
              <div className="text-sm text-text-muted">Clients</div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            With over two decades of hands-on experience, I have built, secured, and maintained websites and systems across private sector, government, and open source environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/projects/"
              className="btn-primary flex items-center space-x-2 px-8 py-3"
            >
              <span>View Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="/AbdulrahmanCV.pdf"
              download
              className="btn-secondary flex items-center space-x-2 px-8 py-3"
            >
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center mx-auto"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-text-muted rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 