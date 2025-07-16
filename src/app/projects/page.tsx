'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Download, FileText } from 'lucide-react'
import { projects, getProjectsByCategory } from '@/data/projects'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'government', label: 'Government' },
    { id: 'cms', label: 'CMS' },
    { id: 'infrastructure', label: 'Infrastructure' },
  ]

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = getProjectsByCategory(selectedCategory as any)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    return filtered.sort((a, b) => b.year - a.year) // Sort by year descending
  }, [selectedCategory, searchTerm])

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
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            My Projects
          </h1>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg">
            A comprehensive showcase of my 20+ years of web development experience, 
            from simple HTML websites to complex government systems and modern web applications.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-bg-secondary border border-border rounded-lg text-text-primary placeholder-text-muted focus:border-primary-500 focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project) => (
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
                  <p className="text-text-secondary text-sm mb-2">
                    {project.description}
                  </p>
                  {project.client && (
                    <p className="text-xs text-text-muted">
                      Client: {project.client}
                    </p>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary-600/20 text-primary-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
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
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-text-muted mb-12"
        >
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.div>

        {/* Website Portfolio Document */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-600/20 rounded-lg p-8"
        >
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                Complete Website Portfolio
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Download my comprehensive website portfolio document that includes detailed information about all my projects, 
                technologies used, client testimonials, and case studies from 2001 to 2024.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/website-portfolio.pdf"
                download
                className="btn-primary flex items-center space-x-2 px-8 py-3"
              >
                <FileText className="h-5 w-5" />
                <span>Download Portfolio PDF</span>
              </a>
              <a
                href="/website-portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-2 px-8 py-3"
              >
                <ExternalLink className="h-5 w-5" />
                <span>View Online</span>
              </a>
            </div>

            <div className="text-sm text-text-muted">
              <p>📄 PDF Document | 📊 Detailed Project Analysis | 🏆 Client Testimonials</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 