import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiGo,
  SiGit,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiRender,
  SiSocketdotio,
  SiNodedotjs,
  SiExpress,
  SiOverleaf
} from 'react-icons/si'
import { MdComputer, MdNetworkWifi, MdSecurity } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-900" 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants}>
          <motion.h2 
            variants={slideInFromBottom}
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div variants={slideInFromLeft}>
              <motion.p 
                className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm Lakshya Jangid, a passionate BTech Computer Science student at IIIT Vadodara (GNR Campus). 
                I specialize in full-stack web development with expertise in modern JavaScript frameworks, 
                database management, and creating innovative digital solutions.
              </motion.p>
              
              <motion.p 
                className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My journey includes developing multiple web applications, working with cutting-edge technologies,
                and continuously learning new skills to stay ahead in the rapidly evolving tech landscape.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Currently pursuing my degree while building practical projects that solve real-world problems 
                and contribute to the open-source community.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={slideInFromRight}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[{
                  title: "Programming Languages",
                  skills: [
                    { name: "C++", icon: SiCplusplus, color: "#00599C" },
                    { name: "Go", icon: SiGo, color: "#00ADD8" },
                    { name: "Python", icon: SiPython, color: "#3776AB" },
                    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
                    { name: "CSS3", icon: SiCss3, color: "#1572B6" }
                  ],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Web Development", 
                  skills: [
                    { name: "React", icon: SiReact, color: "#61DAFB" },
                    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
                    { name: "Clerk", icon: MdSecurity, color: "#6C47FF" },
                    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
                    { name: "Express.js", icon: SiExpress, color: "#000000" }
                  ],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Tools & Platforms",
                  skills: [
                    { name: "Git", icon: SiGit, color: "#F05032" },
                    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
                    { name: "Vercel", icon: SiVercel, color: "#000000" },
                    { name: "Render", icon: SiRender, color: "#46E3B7" },
                    { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
                    { name: "Overleaf", icon: SiOverleaf, color: "#47A141" }
                  ],
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Database & CS Fundamentals",
                  skills: [
                    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
                    { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
                    { name: "DSA", icon: FaDatabase, color: "#FF6B6B" },
                    { name: "OS", icon: MdComputer, color: "#4ECDC4" },
                    { name: "Computer Networks", icon: MdNetworkWifi, color: "#45B7D1" }
                  ],
                  color: "from-orange-500 to-red-500"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={cardVariants}
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${category.color} rounded-full mb-4`} />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                          className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer group"
                          title={skill.name}
                        >
                          <IconComponent 
                            className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200"
                            style={{ color: skill.color }}
                          />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                            {skill.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}