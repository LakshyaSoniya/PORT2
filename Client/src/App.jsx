import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Sorry from './components/Sorry'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Main portfolio page component
  const MainPage = () => (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Education />
          <WorkExperience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )

  return (
    <Router>
      <Routes>
        <Route path="/sorry" element={<Sorry />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App