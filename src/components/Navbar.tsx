import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  currentRoute: string
  onNavigate: (route: string) => void
}

export default function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Services', value: 'services' },
    { label: 'Method', value: 'method' },
    { label: 'Who We Serve', value: 'who-we-serve' },
    { label: 'Case Studies', value: 'case-studies' },
    { label: 'Insights', value: 'insights' }
  ]

  const handleNavClick = (route: string) => {
    onNavigate(route)
    setMobileMenuOpen(false)
  }

  return (
    <header className="w-full z-50">
      {/* Top Meta Header Bar */}
      {/* <div className="w-full bg-[#020e1a] text-slate-300 text-xs py-2 px-6 flex justify-end gap-6 border-b border-[#051c33]">
        <button 
          onClick={() => handleNavClick('contact')} 
          className="hover:text-white transition-colors cursor-pointer text-[11px] font-sans tracking-wide"
        >
          Contact
        </button>
        <button 
          onClick={() => handleNavClick('about')} 
          className="hover:text-white transition-colors cursor-pointer text-[11px] font-sans tracking-wide"
        >
          About EVERSTONE
        </button>
      </div> */}

      {/* Main Navigation Bar */}
      <div className=" top-0 w-full bg-white border-b border-slate-100 shadow-sm transition-all duration-300 fixed">
        <div className="max-w-7xl mx-auto px-6 h-17 flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex flex-col items-start cursor-pointer group"
          >
            <span className="font-serif text-xl md:text-2xl font-bold text-brand-navy leading-none tracking-wide group-hover:text-brand-blue transition-colors">
              EVERSTONE
            </span>
            <span className="text-[8px] md:text-[9px] font-sans font-bold tracking-[0.22em] text-slate-500 leading-none mt-1.5 uppercase">
              Manufacturing Advisory
            </span>
          </div>

          {/* Desktop Nav Links & CTA Grouped on Right */}
          <div className="hidden lg:flex items-center gap-10 ">
            <nav className="flex items-center gap-8 ">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`font-sans text-[12px] font-medium transition-colors cursor-pointer relative py-2 ${
                    currentRoute === item.value 
                      ? 'text-brand-blue font-semibold' 
                      : 'text-slate-600 hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                  {currentRoute === item.value && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full" />
                  )}
                </button>
              ))}
            </nav>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white text-[12px] font-semibold px-5 py-2.5 rounded-none transition-all-custom cursor-pointer tracking-wider shadow-sm active:scale-95 "
            >
              Request ODD
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-brand-navy p-2 hover:bg-slate-50 transition-colors rounded cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 bg-white border-b border-slate-200 z-40 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-left font-sans text-base font-semibold py-2.5 border-b border-slate-50 cursor-pointer ${
                  currentRoute === item.value ? 'text-brand-blue' : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('about')}
              className="text-left font-sans text-base font-semibold py-2.5 border-b border-slate-50 text-slate-700 cursor-pointer"
            >
              About EVERSTONE
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white text-[14px] font-semibold py-3 mt-2 rounded-none transition-all-custom cursor-pointer text-center tracking-wider uppercase"
            >
              Request ODD / Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
