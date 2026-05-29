import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Import Pages
import Home from './pages/Home'
import Service from './pages/Service'
import Method from './pages/Method'
import WhoWeServe from './pages/WhoWeServe'
import CaseStudies from './pages/CaseStudies'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  // Custom hash routing state
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash
    return hash ? hash.replace('#/', '') : 'home'
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const targetRoute = hash ? hash.replace('#/', '') : 'home'
      setRoute(targetRoute)
      // Smooth scroll to top on page transition
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }

    window.addEventListener('hashchange', handleHashChange)
    
    // Set initial hash if empty
    if (!window.location.hash) {
      window.location.hash = '#/home'
    }

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (to: string) => {
    window.location.hash = `#/${to}`
  }

  // Render active route
  const renderContent = () => {
    switch (route) {
      case 'home':
        return <Home onNavigate={navigate} />
      case 'services':
        return <Service />
      case 'method':
        return <Method />
      case 'who-we-serve':
        return <WhoWeServe />
      case 'case-studies':
        return <CaseStudies />
      case 'insights':
        return <Insights />
      case 'contact':
        return <Contact />
      case 'about':
        return <About />
      default:
        return <Home onNavigate={navigate} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation Header */}
      <Navbar currentRoute={route} onNavigate={navigate} />

      {/* Main Page Area */}
      <main className="flex-grow w-full">
        {renderContent()}
      </main>

      {/* Footer Area */}
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
