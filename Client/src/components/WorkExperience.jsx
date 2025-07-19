import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export default function WorkExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      role: "Software Development Intern",
      company: "P2PExperts",
      location: "Chhatrapati Sambhajinagar (Aurangabad)",
      period: "May 2025 - July 2025",
      certificate : {
        title: "Software Development Internship Certificate",
        link: "https://drive.google.com/file/d/1SZ-tJI9g7-tYPt-UGeEy1gNt5wQhEPJ9/view?usp=drive_link"
      },
      description: "Contributed to the Ariba procurement platform, enhancing enterprise-level cloud modules using C++ and JavaScript. Developed and optimized backend components to improve system performance and maintainability. Integrated dynamic JavaScript UI features with backend APIs, improving user interaction flows.",
      technologies: ["C++", "JavaScript", "Ariba", "Cloud Computing", "Backend Development", "APIs"]
    },
    {
      role: "Personal Projects Developer",
      company: "Independent Work",
      location: "", 
      period: "2023 - Present",
      description: "Developed multiple full-stack web applications using modern technologies. Created responsive, user-friendly interfaces and robust backend systems. Worked on e-commerce platforms, social media dashboards, and management systems. Participated in code reviews, implemented unit tests, and resolved bugs in multi-tier architecture.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "JavaScript", "Git"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
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
      id="work" 
      className="py-20 bg-gray-50 dark:bg-gray-900" 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={slideInFromBottom}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my expertise in software development.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <motion.div 
                  className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: 96 } : { height: 0 }}
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
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 md:ml-12"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    >
                      <Briefcase className="w-6 h-6 text-blue-500 mr-2" />
                      {exp.role}
                    </motion.h3>
                    <motion.div 
                      className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    >
                      {exp.company}
                    </motion.div>
                    <motion.div 
                      className="flex flex-col sm:flex-row sm:space-x-4 text-gray-500 dark:text-gray-400 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    >
                      <div className="flex items-center mb-1 sm:mb-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        {
                            exp.location && <MapPin className="w-4 h-4 mr-1" />
                        }
                        {exp.location}
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <motion.p 
                  className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                >
                  {exp.description}
                </motion.p>
                {exp.certificate && (
                    <motion.a
                        href={exp.certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block underline mb-4 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.75 + index * 0.2 }}
                    >
                        {exp.certificate.title}
                    </motion.a>
                )}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.2 + i * 0.05 }}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}