import React from 'react'

interface FooterProps {
  onNavigate: (route: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, route: string) => {
    e.preventDefault()
    onNavigate(route)
  }

  return (
    <footer className="bg-[#020e1a] text-slate-400 font-sans border-t border-[#09223a]">
      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Brand column (Span 6) */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4">
          <div 
            className="flex flex-col items-start cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <span className="font-serif text-2xl font-bold text-white leading-none tracking-wide group-hover:text-brand-accent transition-colors">
              EVERSTONE
            </span>
            <span className="text-[9px] font-sans font-bold tracking-[0.22em] text-slate-400 leading-none mt-1.5 uppercase">
              Manufacturing Advisory
            </span>
          </div>
          <p className="text-slate-400 text-[13.5px] leading-relaxed max-w-md mt-2 font-light">
            Connecting manufacturing operations, quality systems, leadership discipline, and financial outcomes for manufacturers, investors, and lenders who need factory intelligence that holds up under scrutiny.
          </p>
        </div>

        {/* Column 2: Services (Span 3) */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-sans text-[11px] font-bold uppercase tracking-wider mb-5">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-[13.5px]">
            <li>
              <a href="#/services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors font-light">
                Manufacturing Operational Due Diligence
              </a>
            </li>
            <li>
              <a href="#/services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors font-light">
                Bankability Audits
              </a>
            </li>
            <li>
              <a href="#/services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors font-light">
                Operational Leadership Coaching
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Navigate (Span 3) */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-sans text-[11px] font-bold uppercase tracking-wider mb-5">
            Navigate
          </h4>
          <ul className="flex flex-col gap-3 text-[13.5px]">
            <li>
              <a href="#/method" onClick={(e) => handleNavClick(e, 'method')} className="hover:text-white transition-colors font-light">
                Method
              </a>
            </li>
            <li>
              <a href="#/who-we-serve" onClick={(e) => handleNavClick(e, 'who-we-serve')} className="hover:text-white transition-colors font-light">
                Who We Serve
              </a>
            </li>
            <li>
              <a href="#/case-studies" onClick={(e) => handleNavClick(e, 'case-studies')} className="hover:text-white transition-colors font-light">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#/insights" onClick={(e) => handleNavClick(e, 'insights')} className="hover:text-white transition-colors font-light">
                Insights
              </a>
            </li>
            <li>
              <a href="#/contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors font-light">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="bg-[#010912] py-6 border-t border-[#041628]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 EVERSTONE Manufacturing Advisory. All rights reserved.</p>
          <div className="flex gap-2 text-[11px] text-slate-600 font-light flex-wrap md:justify-end text-center">
            <span>Manufacturing Operational Due Diligence</span>
            <span>·</span>
            <span>Bankability Audits</span>
            <span>·</span>
            <span>Operational Leadership Coaching</span>
          </div>
        </div>
      </div>
    </footer>

  //     {/* 10. FOOTER */}
  //     <footer className="bg-[#020e1a] text-white py-16 px-6">
  //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

  //         {/* Brand Column */}
  //         <div className="flex flex-col gap-4 md:max-w-xs">
  //           <div>
  //             <p className="font-serif text-xl font-bold tracking-widest uppercase text-white">
  //               EVERSTONE
  //             </p>
  //             <p className="text-[10px] font-bold tracking-[0.25em] text-brand-accent uppercase mt-0.5">
  //               Manufacturing Advisory
  //             </p>
  //           </div>
  //           <p className="text-slate-400 text-[13px] leading-relaxed font-light mt-2">
  //             Connecting manufacturing operations, quality systems, leadership discipline, and financial outcomes for manufacturers, investors, and lenders who need factory intelligence that holds up under scrutiny.
  //           </p>
  //         </div>

  //         {/* Services Column */}
  //         <div className="flex flex-col gap-4">
  //           <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">
  //             Services
  //           </span>
  //           <nav className="flex flex-col gap-3">
  //             <button
  //               onClick={() => onNavigate('services')}
  //               className="text-slate-300 hover:text-white text-[13px] font-light text-left transition-colors cursor-pointer w-fit"
  //             >
  //               Manufacturing Operational Due Diligence
  //             </button>
  //             <button
  //               onClick={() => onNavigate('services')}
  //               className="text-slate-300 hover:text-white text-[13px] font-light text-left transition-colors cursor-pointer w-fit"
  //             >
  //               Bankability Audits
  //             </button>
  //             <button
  //               onClick={() => onNavigate('services')}
  //               className="text-slate-300 hover:text-white text-[13px] font-light text-left transition-colors cursor-pointer w-fit"
  //             >
  //               Operational Leadership Coaching
  //             </button>
  //           </nav>
  //         </div>

  //         {/* Navigate Column */}
  //         <div className="flex flex-col gap-4">
  //           <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">
  //             Navigate
  //           </span>
  //           <nav className="flex flex-col gap-3">
  //             {['method', 'who-we-serve', 'case-studies', 'insights'].map((route) => (
  //               <button
  //                 key={route}
  //                 onClick={() => onNavigate(route)}
  //                 className="text-slate-300 hover:text-white text-[13px] font-light text-left transition-colors cursor-pointer w-fit capitalize"
  //               >
  //                 {route.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
  //               </button>
  //             ))}
  //           </nav>
  //         </div>

  //       </div>

  //       {/* Footer Bottom Bar */}
  //       <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
  //         <p className="text-slate-600 text-[12px] font-light">
  //           © {new Date().getFullYear()} EVERSTONE Manufacturing Advisory. All rights reserved.
  //         </p>
  //         <div className="flex gap-6">
  //           <button
  //             onClick={() => onNavigate('contact')}
  //             className="text-slate-500 hover:text-slate-300 text-[12px] font-light transition-colors cursor-pointer"
  //           >
  //             Contact
  //           </button>
  //           <button
  //             onClick={() => onNavigate('about')}
  //             className="text-slate-500 hover:text-slate-300 text-[12px] font-light transition-colors cursor-pointer"
  //           >
  //             About EVERSTONE
  //           </button>
  //         </div>
  //       </div>
  //     </footer>
   )
}
