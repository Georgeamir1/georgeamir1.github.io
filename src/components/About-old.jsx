import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaMobile, FaRocket, FaPalette } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices'
    },
    {
      icon: FaMobile,
      title: 'Mobile First',
      description: 'Creating responsive applications that work flawlessly on all devices'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing apps for speed and smooth user experience'
    },
    {
      icon: FaPalette,
      title: 'Modern Design',
      description: 'Implementing beautiful, intuitive interfaces with attention to detail'
    }
  ]

  const experience = [
    {
      year: '2023 - Present',
      role: 'Senior Flutter Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading mobile development team, architecting scalable Flutter applications'
    },
    {
      year: '2021 - 2023',
      role: 'Flutter Developer',
      company: 'Digital Agency',
      description: 'Developed 15+ mobile applications for various clients across different industries'
    },
    {
      year: '2019 - 2021',
      role: 'Junior Mobile Developer',
      company: 'StartUp Hub',
      description: 'Started Flutter journey, contributed to 5 successful app launches'
    }
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
    <section id="about" className="py-20 px-4 relative">
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
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate Flutter developer with 5+ years of experience in creating innovative mobile solutions
          </p>
        </motion.div>

        {/* About Content with Tabs */}
        <motion.div variants={itemVariants}>
          <Tabs.Root defaultValue="story" className="w-full">
            <Tabs.List className="flex justify-center mb-12 gap-2 flex-wrap">
              {['story', 'experience', 'philosophy'].map((tab) => (
                <Tabs.Trigger
                  key={tab}
                  value={tab}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:border-transparent capitalize"
                >
                  {tab === 'story' ? 'My Story' : tab}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <Tabs.Content value="story" className="mt-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold mb-6">
                    Turning Ideas into{' '}
                    <span className="text-purple-400">Digital Reality</span>
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      My journey in mobile development began in 2019 when I discovered Flutter. 
                      The ability to create beautiful, performant apps for multiple platforms 
                      with a single codebase captivated me instantly.
                    </p>
                    <p>
                      Since then, I've dedicated myself to mastering Flutter and Dart, creating 
                      over 50 applications ranging from simple utilities to complex enterprise 
                      solutions. Each project has been an opportunity to push boundaries and 
                      deliver exceptional user experiences.
                    </p>
                    <p>
                      Today, I specialize in building scalable, maintainable Flutter applications 
                      with a focus on clean architecture, smooth animations, and intuitive user 
                      interfaces. I believe in writing code that not only works but is also a 
                      joy to maintain and extend.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <feature.icon className="text-3xl text-purple-400 mb-3" />
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="experience" className="mt-8">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-600" />
                  
                  {/* Experience items */}
                  <div className="space-y-12">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -50, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-20"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900" />
                        
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                          <div className="flex flex-wrap items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-purple-400">{exp.role}</h3>
                            <span className="text-sm text-gray-400">{exp.year}</span>
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                          <p className="text-gray-400">{exp.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="philosophy" className="mt-8">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-2xl border border-white/10 p-12"
                >
                  <h3 className="text-3xl font-bold mb-6">My Development Philosophy</h3>
                  <div className="space-y-6 text-lg text-gray-300">
                    <p className="italic">
                      "Code is poetry, and every app is a canvas where functionality meets artistry."
                    </p>
                    <p>
                      I believe in creating applications that not only solve problems but also 
                      delight users. Every animation, every interaction, and every pixel matters 
                      in crafting an experience that users love.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-400 mb-2">User-Centric</h4>
                        <p className="text-sm">Always prioritize user experience and accessibility</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-400 mb-2">Quality-Driven</h4>
                        <p className="text-sm">Never compromise on code quality and performance</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-400 mb-2">Innovation-Focused</h4>
                        <p className="text-sm">Continuously learn and implement latest technologies</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About