'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '@/data/site'

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
    <section className="py-20 bg-bg-secondary">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              {stats.yearsOfExperience}+
            </div>
            <div className="text-text-secondary">Years of Experience</div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              {stats.projectsCompleted}+
            </div>
            <div className="text-text-secondary">Projects Completed</div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              {stats.technologies}+
            </div>
            <div className="text-text-secondary">Technologies</div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              {stats.clientsServed}+
            </div>
            <div className="text-text-secondary">Clients Served</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 