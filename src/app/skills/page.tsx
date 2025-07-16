'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills, getSkillsByCategory, getSkillCategories } from '@/data/skills'
import { 
  Code, 
  Database, 
  Globe, 
  Shield, 
  Search, 
  Brain, 
  Languages,
  Server,
  Cloud,
  ShoppingCart,
  Monitor,
  Settings
} from 'lucide-react'

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const categories = getSkillCategories()

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Monitor className="w-5 h-5" />
      case 'backend':
        return <Server className="w-5 h-5" />
      case 'database':
        return <Database className="w-5 h-5" />
      case 'cms':
        return <Settings className="w-5 h-5" />
      case 'ecommerce':
        return <ShoppingCart className="w-5 h-5" />
      case 'infrastructure':
        return <Cloud className="w-5 h-5" />
      case 'devops':
        return <Settings className="w-5 h-5" />
      case 'ai':
        return <Brain className="w-5 h-5" />
      case 'security':
        return <Shield className="w-5 h-5" />
      case 'crawling':
        return <Search className="w-5 h-5" />
      case 'localization':
        return <Languages className="w-5 h-5" />
      default:
        return <Code className="w-5 h-5" />
    }
  }

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : getSkillsByCategory(selectedCategory as any)

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
              Skills & Technologies
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains, 
              from frontend development to AI-powered automation, security implementation, 
              and scalable infrastructure management.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
              }`}
            >
              <Code className="w-5 h-5" />
              All Skills
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                }`}
              >
                {getCategoryIcon(category)}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-bg-secondary border border-border rounded-lg p-6 hover:border-primary-500 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-primary-500">
                    {skill.level >= 90 ? 'Expert' : 
                     skill.level >= 85 ? 'Advanced' : 
                     skill.level >= 70 ? 'Intermediate' : 'Entry'}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-bg-tertiary rounded-full h-2 mb-4">
                  <motion.div
                    className="h-2 rounded-full bg-primary-500"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>

                {/* Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(skill.category)}
                    <span className="text-xs text-text-muted capitalize">
                      {skill.category}
                    </span>
                  </div>
                  {skill.color && (
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Level Legend */}
          <motion.div variants={itemVariants} className="bg-bg-secondary border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Experience Level Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium text-text-primary">Entry Level</div>
                  <div className="text-xs text-text-secondary">6-12 months</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium text-text-primary">Intermediate</div>
                  <div className="text-xs text-text-secondary">1-3 years</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium text-text-primary">Advanced</div>
                  <div className="text-xs text-text-secondary">3-5 years</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium text-text-primary">Expert</div>
                  <div className="text-xs text-text-secondary">5+ years</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-lg p-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-text-primary">
                Skills Summary
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">
                    {skills.length}
                  </div>
                  <div className="text-sm text-text-secondary">Total Skills</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">
                    {categories.length}
                  </div>
                  <div className="text-sm text-text-secondary">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">
                    {skills.filter(skill => skill.level >= 90).length}
                  </div>
                  <div className="text-sm text-text-secondary">Expert Level</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">
                    {skills.filter(skill => skill.level >= 85 && skill.level < 90).length}
                  </div>
                  <div className="text-sm text-text-secondary">Advanced Level</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">
                    {skills.filter(skill => skill.level >= 70 && skill.level < 85).length}
                  </div>
                  <div className="text-sm text-text-secondary">Intermediate Level</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 