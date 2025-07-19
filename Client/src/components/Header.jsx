import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <motion.p 
                className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                I'm a passionate full stack developer with a keen eye for design and a love for creating 
                digital experiences that make a difference. With expertise in modern JavaScript frameworks 
                and a strong foundation in both frontend and backend technologies.
              </motion.p>
              
              <motion.p 
                className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                My approach combines technical excellence with creative problem-solving to deliver 
                solutions that are not only functional but also beautiful and user-friendly.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[{
                  title: "Frontend",
                  skills: [
                    { name: "HTML5", icon: "🌐", color: "#E34F26" },
                    { name: "CSS3", icon: "🎨", color: "#1572B6" },
                    { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
                    { name: "React", icon: "⚛️", color: "#61DAFB" },
                    { name: "Next.js", icon: "🔺", color: "#000000" },
                    { name: "Tailwind", icon: "💨", color: "#06B6D4" }
                  ],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Backend", 
                  skills: [
                    { name: "Node.js", icon: "🟢", color: "#339933" },
                    { name: "Express", icon: "🚀", color: "#000000" },
                    { name: "MongoDB", icon: "🍃", color: "#47A248" },
                    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
                    { name: "MySQL", icon: "🐬", color: "#4479A1" },
                    { name: "GraphQL", icon: "🔷", color: "#E10098" }
                  ],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Tools & Others",
                  skills: [
                    { name: "Git", icon: "📦", color: "#F05032" },
                    { name: "Docker", icon: "🐳", color: "#2496ED" },
                    { name: "VS Code", icon: "💻", color: "#007ACC" },
                    { name: "Figma", icon: "🎯", color: "#F24E1E" },
                    { name: "AWS", icon: "☁️", color: "#FF9900" },
                    { name: "Vercel", icon: "▲", color: "#000000" }
                  ],
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Mobile & Design",
                  skills: [
                    { name: "React Native", icon: "📱", color: "#61DAFB" },
                    { name: "Flutter", icon: "🦋", color: "#02569B" },
                    { name: "TypeScript", icon: "📘", color: "#3178C6" },
                    { name: "Python", icon: "🐍", color: "#3776AB" },
                    { name: "Photoshop", icon: "🎭", color: "#31A8FF" },
                    { name: "Blender", icon: "🔮", color: "#F5792A" }
                  ],
                  color: "from-orange-500 to-red-500"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${category.color} rounded-full mb-4`} />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ 
                          scale: 1.1,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer group"
                        title={skill.name}
                      >
                        <div 
                          className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200"
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}