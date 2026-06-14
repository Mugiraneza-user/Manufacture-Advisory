import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Service from './pages/Service'
import Method from './pages/Method'
import WhoWeServe from './pages/WhoWeServe'
import CaseStudies from './pages/CaseStudies'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import About from './pages/About'
import Admin from './pages/Admin'

function App() {
  // Get current route from URL path
  const getRouteFromPath = () => {
    const path = window.location.pathname
    return path === '/' ? 'home' : path.replace('/', '')
  }

  const [route, setRoute] = useState(getRouteFromPath)

  // Handle browser navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRouteFromPath())
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Set default route on first load
  useEffect(() => {
    if (window.location.pathname === '/') {
      window.history.replaceState({}, '', '/home')
      setRoute('home')
    }
  }, [])

  // Navigation function (NO # anymore)
  const navigate = (to: string) => {
    window.history.pushState({}, '', `/${to}`)
    setRoute(to)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }

  // Render pages
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
      case 'admin':
        return <Admin />
      default:
        return <Home onNavigate={navigate} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <Navbar currentRoute={route} onNavigate={navigate} />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App