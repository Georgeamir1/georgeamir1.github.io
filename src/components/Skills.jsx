import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import * as Progress from '@radix-ui/react-progress'
import { 
  SiFlutter, SiDart, SiFirebase, SiGit, SiFigma, 
  SiAndroidstudio, SiVisualstudiocode, SiPostman,
  SiGraphql, SiMongodb, SiNodedotjs, SiReact
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = {
    languages: [
      { name: 'Flutter', level: 95, icon: SiFlutter, color: '#02569B' },
      { name: 'Dart', level: 90, icon: SiDart, color: '#0175C2' },
      { name: 'JavaScript', level: 85, icon: SiReact, color: '#F7DF1E' },
      { name: 'Firebase', level: 88, icon: SiFirebase, color: '#FFCA28' },
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
    additional: [
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'React', icon: SiReact },
    ]
  }

  const stats = [
    { label: 'Projects Completed', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Years Experience', value: 5, suffix: '' },
    { label: 'Code Commits', value: 1000, suffix: '+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern mobile development technologies and tools
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Languages & Frameworks</h3>
            <div className="space-y-4">
              {skills.languages.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : { width: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="text-2xl" style={{ color: skill.color }} />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress.Root
                    className="relative overflow-hidden bg-white/10 rounded-full h-2"
                    value={skill.level}
                  >
                    <Progress.Indicator
                      className="bg-gradient-to-r from-purple-500 to-pink-600 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: inView ? `${skill.level}%` : '0%' }}
                    />
                  </Progress.Root>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Development Tools</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <tool.icon className="text-3xl" style={{ color: tool.color }} />
                  <span className="text-sm text-gray-300">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Also Familiar With</h3>
            <div className="flex flex-wrap gap-3">
              {skills.additional.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <skill.icon className="text-lg" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-semibold mb-3 text-pink-400">Certifications</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Flutter Certified Application Developer</li>
                <li>• Google Firebase Developer</li>
                <li>• Mobile UX Design Certificate</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills