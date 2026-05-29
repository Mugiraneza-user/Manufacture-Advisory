
export default function WhoWeServe() {

  const audienceCards = [
    {
      label: 'Manufacturers',
      headline: 'Know where you stand before someone else tells you',
      desc: 'Become operationally credible, bankable, and attractive to lenders, investors, and customers before they come knocking.',
    },
    {
      label: 'Investors & Buyers',
      headline: 'Read the factory before you read the model',
      desc: 'Understand the operational truth behind EBITDA before committing capital to acquire, finance, or expand a manufacturing business.',
    },
    {
      label: 'Banks & Lenders',
      headline: 'Operational intelligence for credit decisions',
      desc: 'Evaluate whether a factory has the discipline to support growth, debt service, and long-term performance with independent operational evidence.',
    },
  ]

  const manufacturers = {
    title: 'Manufacturers',
    tags: 'OWNERS · CEOS · COOS · PLANT MANAGERS · QUALITY LEADERS',
    paras: [
      'Most manufacturers know their factory has room to improve. Fewer know exactly where the financial exposure sits or how a lender, investor, or sophisticated customer would read their operation.',
      'EVERSTONE helps manufacturing businesses understand their operational standing before external parties define it for them.',
    ],
    cta: 'Start a Conversation',
    items: [
      { n: '01', title: 'Prepare for financing or growth capital', desc: 'Understand exactly where your factory stands against lender and investor expectations before they tell you.' },
      { n: '02', title: 'Strengthen for customer audits or ISO certification', desc: 'Build the management system discipline and evidence package that qualifies you for new programs and customers.' },
      { n: '03', title: 'Position the business for acquisition or exit', desc: 'Know what a buyer or their lender will find in your factory and close the gaps before the process starts.' },
      { n: '04', title: 'Close EBITDA gaps hiding in operations', desc: 'Scrap, rework, OEE losses, and downtime translated into financial impact and a roadmap to recover it.' },
    ],
    bg: 'bg-white',
  }

  const investors = {
    title: 'Investors & Buyers',
    tags: 'PRIVATE EQUITY · STRATEGIC BUYERS · M&A ADVISORS · FAMILY OFFICES',
    paras: [
      'Financial due diligence tells you what a manufacturing business has earned. Operational due diligence tells you whether it can earn it again and whether the systems, capacity, and leadership exist to support the investment thesis.',
      'EVERSTONE provides the operational intelligence layer that financial models and accounting reviews cannot deliver.',
    ],
    cta: 'Discuss a Mandate',
    items: [
      { n: '01', title: 'EBITDA reliability assessment', desc: 'Are the reported numbers real, repeatable, and sustainable — or supported by systems that will degrade under pressure?' },
      { n: '02', title: 'Scalability validation', desc: 'Can this factory actually produce the volumes in the model? What are the real bottlenecks and what will it cost to remove them?' },
      { n: '03', title: 'Leadership and execution risk', desc: 'Is the management team capable of performing at the required level post-acquisition or is the business dependent on one or two individuals?' },
      { n: '04', title: 'Hidden EBITDA opportunities', desc: 'OEE losses, scrap, rework, and downtime representing recoverable margin quantified, prioritized, and mapped to specific systems.' },
    ],
    bg: 'bg-slate-50',
  }

  const lenders = {
    title: 'Banks & Lenders',
    tags: 'COMMERCIAL BANKS · ASSET-BASED LENDERS · CREDIT COMMITTEES · SBICS',
    paras: [
      "A manufacturing business's ability to service debt and maintain covenants is not purely a function of its financial statements. It is a function of the factory systems and management disciplines that produce those statements.",
      'EVERSTONE provides lenders with an independent operational perspective that strengthens, challenges, or validates the credit thesis.',
    ],
    cta: 'Discuss a Mandate',
    items: [
      { n: '01', title: 'Independent operational intelligence', desc: 'A view of the factory that financial statements, management projections, and audit reports cannot provide.' },
      { n: '02', title: 'Management system maturity', desc: 'Is this a business with documented disciplines and reproducible results or one where performance depends on tribal knowledge and individual heroics?' },
      { n: '03', title: 'Capacity and growth risk', desc: 'Whether the factory can actually support the revenue and volume assumptions underlying the repayment model.' },
      { n: '04', title: 'Operational risk in plain language', desc: 'A structured report designed for credit committee discussion risk-rated, financially expressed, and actionable.' },
    ],
    bg: 'bg-white',
  }

  const segments = [manufacturers, investors, lenders]

  return (
    <div className="w-full flex flex-col font-sans">

      {/* ── HERO ── */}
      <section className="relative bg-[#020e1a] text-white pt-24 pb-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020e1a]/30 via-transparent to-[#020e1a]" />

        <div className="relative max-w-7xl mx-auto z-10">
          <nav className="text-[12px] text-slate-400 mb-8 tracking-wide">
            <span>Home</span>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-white font-medium">Who We Serve</span>
          </nav>

          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl mb-6 text-white">
            Built for the people<br />capital depends on.
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            EVERSTONE works across the manufacturing capital stack with owners, operators,
            acquirers, and lenders who need factory intelligence that holds up under scrutiny.
          </p>
        </div>
      </section>

      {/* ── THREE-COLUMN AUDIENCE CARDS ── */}
      <section className="bg-[#1a5eb8] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {audienceCards.map((card) => (
            <div key={card.label} className="px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0 flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue-200 uppercase">
                {card.label}
              </span>
              <h2 className="font-serif text-2xl md:text-[26px] font-bold leading-snug text-white">
                {card.headline}
              </h2>
              <p className="text-blue-100 text-[14px] leading-relaxed font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEGMENT SECTIONS ── */}
      {segments.map((seg) => (
        <section key={seg.title} className={`${seg.bg} py-20 px-6`}>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:w-[420px] shrink-0 flex flex-col gap-5">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#020e1a] leading-tight">
                {seg.title}
              </h2>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#1a5eb8] uppercase">
                {seg.tags}
              </p>
              {seg.paras.map((p, j) => (
                <p key={j} className="text-slate-500 text-[15px] leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="mt-2">
                <button className="bg-[#020e1a] hover:bg-[#0d2035] text-white text-[13px] font-semibold px-6 py-4 transition-colors tracking-wide">
                  {seg.cta}
                </button>
              </div>
            </div>

            {/* Right: numbered list */}
            <div className="flex-1 flex flex-col divide-y divide-slate-200">
              {seg.items.map((item) => (
                <div key={item.n} className="flex gap-8 py-6 first:pt-0 last:pb-0">
                  <span className="font-serif text-3xl font-bold text-[#1a5eb8] leading-none pt-1 w-10 shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-semibold text-[15px] text-[#020e1a] mb-2">{item.title}</p>
                    <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1a5eb8] text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[46px] font-bold  leading-tight text-white">
            Tell us about your<br />situation.
          </h2>
          <p className="text-blue-100 text-base md:text-lg font-light max-w-lg leading-relaxed ">
            Whether you're a manufacturer, investor, or lender every engagement
            starts with a direct, confidential conversation.
          </p>
          <button className="bg-white text-[#1a5eb8] hover:bg-blue-50 font-semibold px-10 py-4 text-[14px] tracking-wide transition-colors mt-2">
            Request ODD
          </button>
        </div>
      </section>

    </div>
  )
}