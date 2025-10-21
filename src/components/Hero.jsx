import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import ParallaxTilt from 'react-parallax-tilt'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        damping: 10
      }
    }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Content */}
        <div className="text-center md:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              George Amir
            </span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 mb-6"
          >
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Flutter Developer',
                2000,
                'Mobile App Expert',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-purple-400 font-bold"
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Crafting beautiful, performant mobile applications with Flutter. 
            Passionate about creating seamless user experiences and clean code.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300"
            >
              Download CV
            </motion.button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center md:justify-start"
          >
            {[
              { icon: FaGithub, link: 'https://github.com' },
              { icon: FaLinkedin, link: 'https://linkedin.com' },
              { icon: FaTwitter, link: 'https://twitter.com' },
              { icon: FaEnvelope, link: 'mailto:george@example.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Right Content - 3D Card */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <ParallaxTilt
            className="parallax-effect"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
            gyroscope={true}
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              <div className="w-80 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 mb-6 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">GA</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Flutter Expert</h3>
                <p className="text-gray-300 text-center">Building the future of mobile apps</p>
                <div className="mt-6 flex gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Flutter</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm">Dart</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Firebase</span>
                </div>
              </div>
            </motion.div>
          </ParallaxTilt>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero