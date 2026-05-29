
import { Target, Users, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <div className="w-full flex flex-col font-sans">
      {/* Page Hero */}
      <section className="relative bg-[#020e1a] text-white py-16 md:py-20 px-6 diagonal-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020e1a]/40 to-[#020e1a]/95 z-0" />
        
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-start gap-4">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-accent uppercase">
            Overview
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mt-2 text-white">
            About EVERSTONE
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl font-light">
            Founded by manufacturing specialists and private equity operating partners, we bridge the gap between technical operations and financial metrics.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-12 text-[15px] leading-relaxed text-brand-muted font-light">
          
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              On-Site Operational Due Diligence (ODD) and Capacity Recovery
            </h2>
            <p>
              Everstone Systems is a boutique manufacturing advisory firm. We work directly with private equity firms, credit underwriters, and asset owners to validate production capability, recover capacity, and protect transaction valuations.
            </p>
            <p>
              Unlike traditional consulting firms that rely on corporate slide decks and remote interviews, our engineers deploy directly to the shop floor. We pull machine controller data, conduct cycle-time studies, audit quality records, and model physical constraints in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="flex flex-col items-start gap-3 p-6 bg-slate-50 border border-slate-200/50">
              <Target className="text-brand-blue" size={24} />
              <h4 className="font-sans font-bold text-slate-800 uppercase tracking-wider text-[12px] mt-1">Our Mission</h4>
              <p className="text-[13px] leading-relaxed">
                Deliver empirical, uncompromised clarity on the operational health of manufacturing facilities.
              </p>
            </div>
            
            <div className="flex flex-col items-start gap-3 p-6 bg-slate-50 border border-slate-200/50">
              <Users className="text-brand-blue" size={24} />
              <h4 className="font-sans font-bold text-slate-800 uppercase tracking-wider text-[12px] mt-1">Our Team</h4>
              <p className="text-[13px] leading-relaxed">
                Professional engineers, operations directors, and CFA/PE analysts with combined decades of shop-floor experience.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 p-6 bg-slate-50 border border-slate-200/50">
              <BookOpen className="text-brand-blue" size={24} />
              <h4 className="font-sans font-bold text-slate-800 uppercase tracking-wider text-[12px] mt-1">Our Standards</h4>
              <p className="text-[13px] leading-relaxed">
                A structured, repeatable methodology built on raw facts, machine capabilities, and process controls.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
