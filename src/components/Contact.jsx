import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import * as Form from '@radix-ui/react-form'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 5000,
        icon: '🚀',
        style: {
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          color: '#10B981',
        },
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error('Something went wrong. Please try again.', {
        duration: 5000,
        style: {
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#EF4444',
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'george.amir@example.com',
      link: 'mailto:george.amir@example.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+20 123 456 7890',
      link: 'tel:+201234567890'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Cairo, Egypt',
      link: '#'
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
    <section id="contact" className="py-20 px-4 relative">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300">{info.title}</h4>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 flex items-center gap-3"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <p className="text-green-400">Available for freelance projects</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <Form.Root onSubmit={handleSubmit}>
              <div className="space-y-6">
                <Form.Field name="name">
                  <Form.Control asChild>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 placeholder-gray-400"
                    />
                  </Form.Control>
                  <Form.Message match="valueMissing" className="text-red-400 text-sm mt-1">
                    Please enter your name
                  </Form.Message>
                </Form.Field>

                <Form.Field name="email">
                  <Form.Control asChild>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 placeholder-gray-400"
                    />
                  </Form.Control>
                  <Form.Message match="valueMissing" className="text-red-400 text-sm mt-1">
                    Please enter your email
                  </Form.Message>
                  <Form.Message match="typeMismatch" className="text-red-400 text-sm mt-1">
                    Please enter a valid email
                  </Form.Message>
                </Form.Field>

                <Form.Field name="subject">
                  <Form.Control asChild>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 placeholder-gray-400"
                    />
                  </Form.Control>
                  <Form.Message match="valueMissing" className="text-red-400 text-sm mt-1">
                    Please enter a subject
                  </Form.Message>
                </Form.Field>

                <Form.Field name="message">
                  <Form.Control asChild>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 placeholder-gray-400 resize-none"
                    />
                  </Form.Control>
                  <Form.Message match="valueMissing" className="text-red-400 text-sm mt-1">
                    Please enter your message
                  </Form.Message>
                </Form.Field>

                <Form.Submit asChild>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </Form.Submit>
              </div>
            </Form.Root>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    </section>
  )
}

export default Contact