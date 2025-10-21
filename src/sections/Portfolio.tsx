import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

type ProjectCategory = 'all' | 'product' | 'ai' | 'social'

interface Project {
  id: number
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  image: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Chatbot with Gemini API',
    description: 'Enhanced customer support with intelligent conversational AI',
    category: 'ai',
    tags: ['AI', 'Chatbot', 'NLP'],
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop',
    link: 'https://huggingface.co/spaces/kendrickfff/ask-me-anything',
  },
  {
    id: 2,
    title: 'AI-Powered Learning Platform',
    description: 'Personalized education with adaptive recommendations',
    category: 'product',
    tags: ['EdTech', 'Analytics', 'Personalization'],
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2370&auto=format&fit=crop',
    link: 'https://drive.google.com/file/d/1d9MiTxY9TAMr3w9qBmhvU8CZ_6gukLR3/view?usp=sharing',
  },
  {
    id: 3,
    title: 'GrabFood Promo System',
    description: 'Optimized promo experience increasing conversions',
    category: 'product',
    tags: ['E-commerce', 'UX', 'Food Delivery'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Bank Referral System',
    description: 'Increased user acquisition by 30% through referrals',
    category: 'product',
    tags: ['Banking', 'Growth', 'Referrals'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2370&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Nat Nat Cashew Kingdom',
    description: 'Achieved 923% increase in profile visits',
    category: 'social',
    tags: ['Branding', 'Social Media', 'Content'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2370&auto=format&fit=crop',
    link: 'https://drive.google.com/file/d/1d9MiTxY9TAMr3w9qBmhvU8CZ_6gukLR3/view?usp=sharing',
  },
  {
    id: 6,
    title: 'Social Education Initiative',
    description: 'Community-driven education programs',
    category: 'social',
    tags: ['Community', 'Education', 'Sustainability'],
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2369&auto=format&fit=crop',
  },
]

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'product', label: 'Product Management' },
  { value: 'ai', label: 'AI Solutions' },
  { value: 'social', label: 'Social Impact' },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of product design and development projects.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as ProjectCategory)}
              variant={activeFilter === filter.value ? 'gradient' : 'outline'}
              size="sm"
              className={activeFilter === filter.value ? '' : 'text-gray-700 dark:text-gray-300'}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="group relative h-80 overflow-hidden cursor-pointer border-none shadow-lg">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-200 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      {project.description}
                    </p>

                    {project.link && (
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
