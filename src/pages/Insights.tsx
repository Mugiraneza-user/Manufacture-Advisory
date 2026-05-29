

export default function Insights() {
  const topCards = [
    {
      category: 'OPERATIONAL DUE DILIGENCE',
      title: 'Why EBITDA Alone Cannot Tell You If a Factory Is Worth Buying',
      desc: "A factory's income statement reflects past results. It says nothing about whether those results can be sustained, scaled, or repeated after ownership changes. The answer lives inside the factory's systems not its financial statements.",
      link: '#/contact'
    },
    {
      category: 'BANKABILITY',
      title: 'Manufacturing Bankability: The Missing Link Between Operations and Capital',
      desc: 'Lenders and Investors make capital allocation decisions based on financial data. But the operational systems that produce that data are rarely examined before capital is committed. That gap is bankability.',
      link: '#/contact'
    }
  ]

  const bottomCards = [
    {
      category: 'QUALITY & FINANCE',
      title: 'Scrap Is Not a Quality Problem. It Is Margin Leakage.',
      desc: 'Every unit scrapped is labor, material, and capacity that produced nothing shippable. Here is how to quantify it and why it belongs in the EBITDA conversation.',
      link: '#/contact'
    },
    {
      category: 'LENDERS',
      title: 'Before You Finance a Factory, Study the System That Produces the Numbers',
      desc: 'The financial statements a lender reviews are outputs of a system  and that system may be unreliable, undisciplined, or about to break down under the pressure of growth.',
      link: '#/contact'
    },
    {
      category: 'OPERATIONS',
      title: 'Poor OEE Is Trapped Revenue. Here Is How to Quantify It.',
      desc: "OEE is the most underused financial metric in manufacturing. If you're not converting OEE losses to dollars, you're leaving a powerful conversation tool on the floor.",
      link: '#/contact'
    }
  ]

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
            <span className="text-white">Insights</span>
          </nav>
          
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#1579e6] uppercase mb-4">
            MANUFACTURING INTELLIGENCE
          </span>
          
          <h1 className="font-serif text-4xl md:text-[54px] font-bold leading-tight text-white mb-6">
            For people who decide.
          </h1>
          
          <p className="text-slate-300 text-base md:text-[17px] max-w-3xl font-light leading-relaxed">
            Thought leadership at the intersection of factory operations and financial outcomes  written for investors, lenders, and manufacturing executives who need clear thinking, not jargon.
          </p>
        </div>
      </section>

      {/* ── CARDS SECTION ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Row: Two Dark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {topCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-[#020e1a] text-white p-10 md:p-12 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300 shadow-lg"
              >
                <div>
                  <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#4a9eff] uppercase">
                    {card.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-[28px] font-bold leading-snug text-white mt-5 mb-5">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-[14px] leading-relaxed font-light mb-8">
                    {card.desc}
                  </p>
                </div>
                <a 
                  href={card.link}
                  className="text-[13px] font-semibold text-[#4a9eff] hover:text-white transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
                >
                  Read article <span className="text-base">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Row: Three White Cards with vertical dividers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-slate-200">
            {bottomCards.map((card, idx) => (
              <div 
                key={idx} 
                className={`py-12 px-8 flex flex-col justify-between ${
                  idx !== bottomCards.length - 1 ? 'lg:border-r border-slate-200' : ''
                } ${
                  idx !== 0 ? 'border-t lg:border-t-0 border-slate-200' : ''
                }`}
              >
                <div>
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#1a5eb8] uppercase">
                    {card.category}
                  </span>
                  <h4 className="font-serif text-xl md:text-[22px] font-bold leading-snug text-[#020e1a] mt-5 mb-5 hover:text-[#1a5eb8] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-[13.5px] leading-relaxed font-light mb-8">
                    {card.desc}
                  </p>
                </div>
                <a 
                  href={card.link}
                  className="text-[13px] font-semibold text-[#1a5eb8] hover:text-[#0c3c7d] transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider mt-auto"
                >
                  Read article <span className="text-base">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#0e5db3] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl md:text-[46px] font-bold leading-tight max-w-3xl">
            Ready to apply these ideas to your factory?
          </h2>
          <p className="text-blue-100 text-base md:text-lg font-light max-w-2xl leading-relaxed mb-6">
            Every engagement starts with a direct conversation no pitch deck, no sales cycle.
          </p>
          <a
            href="#/contact"
            className="bg-white hover:bg-slate-50 text-[#020e1a] text-[13px] font-bold px-8 py-4 rounded-none transition-all duration-200 tracking-wider uppercase inline-block shadow-sm"
          >
            Request ODD
          </a>
        </div>
      </section>
    </div>
  )
}

