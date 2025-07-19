import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "IIIT Vadodara",
      location: "Gujarat",
      period: "April 2023 - Present",
      status: "Pursuing",
      description: "Currently pursuing Bachelor of Technology in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern web technologies.",
      color: "from-blue-500 to-purple-600"
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science Stream (math + bio)",
      institution: "RBSE (Rajasthan Board of Secondary Education)",
      location: "Rajasthan",
      period: "2022",
      status: "88.80%",
      description: "Completed Higher Secondary Education with Science stream, achieving excellent performance in Physics, Chemistry, Mathematics, and Computer Science.",
      color: "from-green-500 to-emerald-500"
    },
    {
      degree: "Secondary Education (10th)",
      field: "All Subjects",
      institution: "RBSE (Rajasthan Board of Secondary Education)",
      location: "Rajasthan",
      period: "2020",
      status: "89.80%",
      description: "Completed Secondary Education with outstanding performance across all subjects, laying a strong foundation for future academic pursuits.",
      color: "from-orange-500 to-red-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      id="education" 
      className="py-20 bg-white dark:bg-gray-900" 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants}>
          <motion.div variants={slideInFromBottom} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and educational milestones that have shaped my knowledge and expertise in technology.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index !== educationData.length - 1 && (
                  <motion.div 
                    className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 128 } : { height: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  />
                )}
                
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hidden md:block border-4 border-white dark:border-gray-900"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                />
                
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 md:ml-12"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <motion.div 
                        className="flex items-center mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      >
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <div className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                            {edu.field}
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      >
                        <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {edu.institution}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 text-gray-500 dark:text-gray-400 text-sm">
                          <div className="flex items-center mb-1 sm:mb-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div 
                      className="flex items-center lg:ml-6"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    >
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white font-bold text-lg shadow-lg`}>
                        <div className="flex items-center space-x-2">
                          <span>{edu.status}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  >
                    {edu.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </div>
    </motion.section>
  )
}
