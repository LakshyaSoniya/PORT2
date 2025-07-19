import React from 'react';
import { motion } from 'framer-motion'
import { AlertTriangle, Home } from 'lucide-react'

const Sorry = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-red-600 dark:text-red-400 mb-6"
        >
          Sorry!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
        >
          This page is currently under construction or temporarily unavailable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12"
        >
          We're working hard to bring you something amazing. Please check back later!
        </motion.p>

        <motion.a
          href="/"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          <span>Go Back Home</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If you believe this is an error, please contact me at{' '}
            <a href="mailto:thelakshya31@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              thelakshya31@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
);
    
export default Sorry;