import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, Briefcase, Settings, Check } from 'lucide-react'

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
    transition: { duration: 0.5 },
  },
}

export function About() {
  const skills = [
    'Product Strategy',
    'User Research',
    'Agile Development',
    'Data Analysis',
    'Roadmapping',
    'Prototyping',
    'Stakeholder Mgmt',
    'A/B Testing',
    'AI Development',
    'Project Management',
  ]

  const tools = ['Figma', 'Jira', 'Amplitude', 'SQL', 'Tableau', 'Miro', 'Notion', 'Slack']

  const philosophyItems = [
    'Empathy-Driven Design',
    'Purposeful Impact',
    'Agile & Lifelong Growth',
  ]

  const whatIDo = [
    { icon: '♟️', title: 'Strategy' },
    { icon: '🔍', title: 'Research' },
    { icon: '📈', title: 'Analysis' },
    { icon: '👥', title: 'Leadership' },
  ]

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating impactful products that enhance user engagement, I
            thrive at the intersection of technology and social impact.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Philosophy Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary-600 dark:text-primary-300" />
                  </div>
                </div>
                <CardTitle>My Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  Creating meaningful solutions that blend technology, social impact, and
                  continuous learning.
                </CardDescription>
                <div className="space-y-4">
                  {philosophyItems.map((item) => (
                    <div key={item} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-600 dark:text-primary-300" />
                        </div>
                      </div>
                      <p className="ml-3 text-gray-600 dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* What I Do Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 border-none shadow-lg text-white">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white">What I Do</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-100 mb-6">
                  I lead product teams to build compelling digital experiences. From vision
                  to execution.
                </CardDescription>
                <div className="grid grid-cols-2 gap-4">
                  {whatIDo.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Tools Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
                  </div>
                </div>
                <CardTitle>Skills & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant={index % 2 === 0 ? 'primary' : 'secondary'}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <Badge key={tool} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
