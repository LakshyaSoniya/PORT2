import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Edemy from '../assests/Edemy.png'
import Jigyasa from '../assests/Jigyasa.png'
export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      "title": "Jigyasa Online Survey Platform",
      "description": "Developed a full-stack web application for creating, managing, and analyzing online surveys. Features include organization-specific surveys, dynamic data visualization with interactive charts, and comprehensive response analytics with export capabilities.",
      "technologies": ["React", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS", "JWT Authentication"],
      "keyFeatures": [
        "User authentication and role-based access control",
        "Organization-specific survey management",
        "Dynamic survey creation with multiple question types",
        "Real-time data visualization with interactive charts",
        "Response analytics and data export functionality"
      ],
      link: "https://jigyasa-online-survey-mangement.vercel.app",
      github: "https://github.com/Lakshya-jangid-08/Jigyasa_Online-survey-mangement",
      gradient: "from-blue-500 to-purple-600",
      demoImg : { src: Jigyasa, alt: "Jigyasa Project Screenshot" }
    },
    {
      title: "PyroShield Firestation Dashboard",
      description: "Built a real-time dashboard to monitor incident reports, track fire vehicles, and manage inventory. Designed clean UI and efficient backend APIs for timely emergency responses.",
      technologies: ["React", "Node.js", "SQL", "Tailwind CSS"],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/PyroShield",
      gradient: "from-red-500 to-orange-500",
      demoImg : { src: Edemy, alt: "Edemy Project Screenshot"}
    },
    {
      title: "Edemy Learning Management System (LMS)",
      description: "Engineered a secure LMS with user authentication using Clerk and real-time notifications via Svix webhooks. Supported multi-role access and seamless content management.",
      technologies: ["MERN", "Clerk", "Svix", "Tailwind CSS"],
      link: "https://lmsfrontend-two.vercel.app/",
      github: "https://github.com/Lakshya-jangid-08/LMS_Website",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Chat Web App Group Messaging",
      description: "Created a real-time chat platform with persistent storage, group messaging, and user authentication. Leveraged Socket.io for low-latency communication.",
      technologies: ["EJS", "Express.js", "Node.js", "MongoDB", "Socket.io"],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/CHAT.WEB.APP",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Uber Clone Ride-Hailing App",
      description: "Built a ride-matching app with live driver tracking, real-time updates, and trip management. Used sockets for instant driver-rider synchronization.",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/Uber-Clone-Application",
      gradient: "from-cyan-500 to-blue-500"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
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

  return (
    <motion.section 
      id="projects" 
      className="py-20" 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={slideInFromBottom}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>


        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial={{ 
                opacity: 0, 
                y: 100,
                x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                x: 0
              } : { 
                opacity: 0, 
                y: 100,
                x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50
              }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group"
            >
              {project.demoImg == undefined ? (
                <motion.div 
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Eye className="text-white w-12 h-12 z-10" />
                  <motion.div 
                    className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </motion.div>

              ) : 
                (
                  <motion.div 
                    className="h-48 bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.demoImg.src}
                      alt={project.demoImg.alt}
                      className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <motion.div 
                      className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                )
              }
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold mb-3 text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {project.description}
                </motion.p>
                
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.55 + index * 0.1 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      {project.keyFeatures.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + i * 0.05 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + i * 0.05 }}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )

}
