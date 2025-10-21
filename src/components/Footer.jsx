import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GA</span>
              </div>
              <span className="text-xl font-bold">George Amir</span>
            </div>
            <p className="text-gray-400">
              Flutter Developer crafting beautiful mobile experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-purple-400">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} George Amir. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            using React & Framer Motion
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
    </footer>
  )
}

export default Footer