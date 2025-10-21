import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'

const LoadingScreen = () => {
  // For now, we'll use a custom loading animation
  const loadingAnimation = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={loadingAnimation.container}
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white"
        >
          Loading Portfolio...
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-2"
        >
          Preparing an amazing experience
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen