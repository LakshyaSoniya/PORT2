import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Download } from 'lucide-react'
import image from '../assests/lakshya-profile.png'
import resume from '../assests/Lakshya_Jangid_Resume.pdf'
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="pt-20 md:pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium"
              variants={itemVariants}
            >
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
              <span>BTech Student at IIIT Vadodara</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Lakshya Jangid
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Full Stack Developer & BTech Student specializing in modern web technologies. 
              Passionate about creating innovative solutions and contributing to open source.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button 
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
              
                <motion.a 
                    href={resume}
                    download="Lakshya_Jangid_Resume.pdf"
                    className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm md:text-base"
                  >
                    <Download className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Download Resume
                </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700"
              variants={itemVariants}
            >
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">BTech</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">CSE Student</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">IIITV</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">GNR Campus</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Your Image */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-full lg:max-w-lg">
              {/* Background gradient blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl blur-3xl transform rotate-6"></div>
              
              {/* Profile Image */}
              <motion.div 
                className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image} 
                  alt="Lakshya Jangid - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating elements
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">React Developer</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">MERN Stack</span>
                </motion.div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero