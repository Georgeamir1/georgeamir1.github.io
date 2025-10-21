import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background3D from './components/Background3D'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`${darkMode ? 'dark' : ''}`}
          >
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
              {/* 3D Background */}
              <Background3D />
              
              {/* Custom Cursor */}
              <CustomCursor />
              
              {/* Scroll Progress */}
              <ScrollProgress />
              
              {/* Navigation */}
              <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
              
              {/* Main Content */}
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </main>
              
              {/* Footer */}
              <Footer />
              
              {/* Toast Notifications */}
              <Toaster
                position="bottom-right"
                toastOptions={{
                  className: '',
                  style: {
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: '#fff',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  },
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App