import { useState, useEffect } from 'react'
import { getCaseStudies } from '../utils/storage'
import type { CaseStudy } from '../utils/storage'

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState('All')
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
 

  const filterTabs = [
    { label: 'All Engagements', value: 'All' },
    { label: 'Operational Due Diligence', value: 'OPERATIONAL DUE DILIGENCE' },
    { label: 'Bankability Audits', value: 'BANKABILITY AUDIT' },
    { label: 'Leadership Coaching', value: 'LEADERSHIP COACHING' },
    { label: 'Value Assessment', value: 'VALUE ASSESSMENT' }
  ]

  useEffect(() => {
    getCaseStudies()
      .then(data => setCaseStudies(data))
      .catch(err => console.error('Failed to load case studies:', err))
      
  }, [])

  

  // Find spotlight featured (or fallback to the first one)
  const spotlightFeatured = caseStudies.find(c => c.isFeatured) || caseStudies[0]

  // Find spotlight side cases (up to 2)
  const spotlightSideCases = caseStudies.filter(c => c.isSide).slice(0, 2)
  if (spotlightSideCases.length < 2 && caseStudies.length > 1) {
    const remaining = caseStudies.filter(c => c.id !== spotlightFeatured?.id)
    const needed = 2 - spotlightSideCases.length
    spotlightSideCases.push(...remaining.slice(0, needed))
  }

  // All other cases go to the grid
  const spotlightIds = new Set([
    spotlightFeatured?.id,
    ...spotlightSideCases.map(s => s?.id)
  ].filter(Boolean))
  
  const gridCases = caseStudies.filter(c => !spotlightIds.has(c.id))

  // Map category to styles
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'OPERATIONAL DUE DILIGENCE':
        return 'bg-sky-50 text-sky-700 border-sky-100'
      case 'BANKABILITY AUDIT':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100'
      case 'VALUE ASSESSMENT':
        return 'bg-purple-50 text-purple-700 border-purple-100'
      case 'LEADERSHIP COACHING':
        return 'bg-amber-50 text-amber-700 border-amber-100'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-100'
    }
  }

  // Handle active rendering
  const isAll = activeTab === 'All'

  // Combine all cases to allow filtering when a tab is selected
  const allCasesCombined = [spotlightFeatured, ...spotlightSideCases, ...gridCases]

  const filteredCases = isAll 
    ? gridCases 
    : allCasesCombined.filter(c => c.category === activeTab)


  return (
    <div className="w-full flex flex-col font-sans">
      {/* ── HERO ── */}
      <section className="relative bg-[#020e1a] text-white pt-24 pb-28 px-6 diagonal-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020e1a]/40 to-[#020e1a]/95 z-0" />
        
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-start">
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-400 mb-8 tracking-wide">
            <a href="#/home" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-white">Case Studies</span>
          </nav>
          
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#1579e6] uppercase mb-4">
            CASE STUDIES
          </span>
          
          <h1 className="font-serif text-4xl md:text-[54px] font-bold leading-tight text-white mb-6">
            Factory intelligence applied in practice.
          </h1>
          
          <p className="text-slate-300 text-base md:text-[17px] max-w-3xl font-light leading-relaxed">
            Each engagement is confidential. These case studies reflect the types of mandates EVERSTONE completes the operational findings, financial translations, and decisions they supported.
          </p>
        </div>
      </section>

      {/* ── FILTER TAB BAR ── */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-8 min-w-max h-14 items-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`text-[13px] font-semibold tracking-wider relative h-full flex items-center cursor-pointer transition-colors ${
                  activeTab === tab.value 
                    ? 'text-[#1a5eb8]' 
                    : 'text-slate-500 hover:text-[#1a5eb8]'
                }`}
              >
                {tab.label}
                {activeTab === tab.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a5eb8]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS LISTING ── */}
      <section className="bg-slate-50/50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Spotlight section: Only render when 'All' tab is active and we have a featured case */}
          {isAll && spotlightFeatured && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              {/* Featured Left (Dark Card) */}
              <div className="lg:col-span-7 bg-[#020e1a] text-white p-10 md:p-12 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300 shadow-md">
                <div>
                  <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#4a9eff] uppercase">
                    {spotlightFeatured.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-[32px] font-bold leading-tight text-white mt-5 mb-3">
                    {spotlightFeatured.title}
                  </h3>
                  <span className="text-[12px] text-sky-200/60 block mb-6">
                    {spotlightFeatured.metadata}
                  </span>
                  <p className="text-slate-300 text-[14px] leading-relaxed font-light mb-8">
                    {spotlightFeatured.desc}
                  </p>
                </div>
                
                <div className="mt-auto">
                  {/* Metrics Block */}
                  <div className="grid grid-cols-3 gap-4 border border-white/10 bg-white/5 p-5 mb-8">
                    {spotlightFeatured.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col text-center">
                        <span className="font-serif text-2xl md:text-3xl font-bold text-[#4a9eff]">{metric.value}</span>
                        <span className="text-[10px] text-slate-400 mt-1 leading-tight">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={spotlightFeatured.link}
                    className="text-[13px] font-semibold text-[#4a9eff] hover:text-white transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    Discuss this mandate <span className="text-base">→</span>
                  </a>
                </div>
              </div>

              {/* Side Stack Right (Two White Cards) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {spotlightSideCases.map((sideCard, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200 p-8 md:p-10 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300 shadow-sm"
                  >
                    <div>
                      <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#1a5eb8] uppercase">
                        {sideCard.category}
                      </span>
                      <h4 className="font-serif text-lg md:text-[20px] font-bold leading-snug text-[#020e1a] mt-4 mb-2 hover:text-[#1a5eb8] transition-colors">
                        {sideCard.title}
                      </h4>
                      <span className="text-[11px] text-slate-400 block mb-4">
                        {sideCard.metadata}
                      </span>
                      <p className="text-slate-500 text-[13px] leading-relaxed font-light mb-6">
                        {sideCard.desc}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      {/* Metrics row */}
                      <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-5 mb-6">
                        {sideCard.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex flex-col text-center">
                            <span className="font-serif text-lg md:text-xl font-bold text-[#1a5eb8]">{m.value}</span>
                            <span className="text-[9px] text-slate-400 mt-0.5 leading-tight">{m.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      <a 
                        href={sideCard.link}
                        className="text-[13px] font-semibold text-[#1a5eb8] hover:text-[#0c3c7d] transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
                      >
                        Discuss this mandate <span className="text-base">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grid section: filtered list of other cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300 shadow-sm"
              >
                <div>
                  <span className={`inline-block text-[9px] font-sans font-bold tracking-[0.15em] px-2.5 py-1 uppercase mb-6 border ${getCategoryStyles(card.category)}`}>
                    {card.category}
                  </span>
                  <h4 className="font-serif text-lg md:text-[20px] font-bold leading-snug text-[#020e1a] mb-4 hover:text-[#1a5eb8] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-[13.5px] leading-relaxed font-light mb-6">
                    {card.desc}
                  </p>
                </div>
                
                <div className="mt-auto">
                  {/* Metrics row */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 mb-6">
                    {card.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="font-serif text-xl font-bold text-[#1a5eb8]">{m.value}</span>
                        <span className="text-[10px] text-slate-400 mt-0.5 leading-tight">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={card.link}
                    className="text-[13px] font-semibold text-[#1a5eb8] hover:text-[#0c3c7d] transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    Discuss this mandate <span className="text-base">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Disclaimer notice */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-slate-400 italic text-[11px] leading-relaxed">
              All case studies represent composite or anonymized engagements. Client identities are kept confidential as a matter of standard practice.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#0e5db3] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl md:text-[46px] font-bold leading-tight max-w-3xl text-white">
            Facing a similar situation?
          </h2>
          <p className="text-blue-100 text-base md:text-lg font-light max-w-2xl leading-relaxed mb-6">
            Start with a confidential conversation about what you're evaluating, protecting, or preparing for.
          </p>
          <a
            href="/contact"
            className="bg-white hover:bg-slate-50 text-[#020e1a] text-[13px] font-bold px-8 py-4 rounded-none transition-all duration-200 tracking-wider uppercase inline-block shadow-sm"
          >
            Request ODD
          </a>
        </div>
      </section>
    </div>
  )
}
