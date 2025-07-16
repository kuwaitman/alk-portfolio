'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'

export function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const featuredProjects = getFeaturedProjects()

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
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Featured Projects
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Highlighting some of my most significant projects that showcase my expertise in web development, government systems, and infrastructure management.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card card-hover group"
              >
                {/* Project Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-bg-tertiary">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center text-text-muted ${
                      project.image ? 'hidden' : 'flex'
                    }`}
                  >
                    <span className="text-sm">{project.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary-600/20 text-primary-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-text-muted/20 text-text-muted rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">Live Website</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>

                  {/* Year */}
                  <div className="text-xs text-text-muted">
                    {project.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/projects/"
              className="btn-primary inline-flex items-center space-x-2 px-8 py-3"
            >
              <span>View All Projects</span>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 