export default function Service() {
  return (
    <div className="w-full flex flex-col font-sans bg-slate-50/30">
      {/* ── HERO ── */}
      <section className="relative bg-[#020e1a] text-white pt-24 pb-28 px-6 diagonal-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020e1a]/40 to-[#020e1a]/95 z-0" />
        
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-start">
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-400 mb-8 tracking-wide">
            <a href="#/home" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-white">Services</span>
          </nav>
          
          <h1 className="font-serif text-4xl md:text-[50px] font-bold leading-tight text-white mb-6">
            Three disciplines.<br />One standard of evidence.
          </h1>
          
          <p className="text-slate-300 text-base md:text-[17px] max-w-3xl font-light leading-relaxed">
            Each engagement is structured, evidence-based, and delivered as a clear executive output  not a slide deck of recommendations with no accountability.
          </p>
        </div>
      </section>

      {/* ── SERVICE 1: ODD ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="font-serif text-4xl md:text-[48px] font-bold text-[#020e1a] leading-[1.1] mb-2">
              Manufacturing Operational Due Diligence
            </h2>
            <p className="text-slate-500  md:text-[14.5px] leading-relaxed font-light">
              Independent operational assessments for investors, lenders, buyers, and owners who need to understand factory risk before capital is committed.
            </p>
            <p className="text-slate-500 text-[14.5px] leading-relaxed font-light">
              We translate shop-floor reality into executive-level risk intelligence the information that financial statements cannot provide.
            </p>
            <div className="mt-4">
              <a
                href="#/contact"
                className="bg-[#031f3b] hover:bg-[#0d2035] text-white text-[13px] font-semibold px-5 py-4 rounded-none transition-colors tracking-wider  inline-block shadow-sm"
              >
                Request This Assessment
              </a>
            </div>
          </div>

          {/* Right Column (Card Box) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 shadow-lg relative flex flex-col justify-between">
            {/* Top accent bar (blue) */}
            <div className="absolute top-0 inset-x-0 h-1 bg-[#1a5eb8]" />
            
            <div className="p-8 md:p-10 flex flex-col gap-8">
              {/* Section 1 */}
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#1a5eb8] uppercase block mb-4">
                  WHAT WE REVIEW
                </span>
                <ul className="flex flex-col gap-3.5 text-slate-600 text-[13.5px]">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Operational risk review systems, processes, and controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Quality system maturity against ISO 9001-based criteria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Capacity and bottleneck analysis with financial translation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Leadership capability and execution risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Maintenance maturity and equipment reliability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Supplier and customer concentration risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Compliance and audit readiness posture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>EBITDA improvement opportunities quantified to factory systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Scalability risk can the factory support the growth thesis?</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="border-t border-slate-100 pt-6">
                <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#1a5eb8] uppercase block mb-3">
                  OUTCOME
                </span>
                <p className="text-slate-600 text-[13.5px] leading-relaxed font-light">
                  A clear, evidence-based picture of what you are actually buying, financing, or investing in — operationally.
                </p>
              </div>
            </div>

            {/* Section 3 (Dark Bottom Box) */}
            <div className="bg-[#020e1a] text-white p-8 md:px-10">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#4a9eff] uppercase block mb-3">
                WHO IT'S FOR
              </span>
              <p className="text-slate-300 text-[13px] leading-relaxed font-light">
                Private equity firms, strategic acquirers, commercial lenders, and M&A advisors who need independent operational intelligence before a transaction closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE FEATURES ROW ── */}
      <section className="bg-white border-y border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {/* Col 1 */}
          <div className="flex flex-col gap-3 pt-6 md:pt-0 first:pt-0 lg:pl-0 lg:first:pl-0 lg:pl-6">
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#1a5eb8] uppercase">
              RISK IDENTIFIED
            </span>
            <h4 className="font-serif text-xl font-bold text-[#020e1a]">
              Before Capital Moves
            </h4>
            <p className="text-slate-500 text-[13px] leading-relaxed font-light">
              Operational risk findings delivered in time to influence deal structure, pricing, or terms.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3 pt-6 md:pt-0 lg:pl-8">
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#1a5eb8] uppercase">
              EBITDA TRANSLATED
            </span>
            <h4 className="font-serif text-xl font-bold text-[#020e1a]">
              From Factory to Finance
            </h4>
            <p className="text-slate-500 text-[13px] leading-relaxed font-light">
              Every operational finding expressed in financial language  margin, risk, potential, and exposure.
            </p>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3 pt-6 md:pt-0 lg:pl-8">
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#1a5eb8] uppercase">
              INDEPENDENT VIEW
            </span>
            <h4 className="font-serif text-xl font-bold text-[#020e1a]">
              No Conflicts
            </h4>
            <p className="text-slate-500 text-[13px] leading-relaxed font-light">
              EVERSTONE has no stake in the transaction  only in delivering an accurate operational assessment.
            </p>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-3 pt-6 md:pt-0 lg:pl-8">
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#1a5eb8] uppercase">
              EXECUTIVE OUTPUT
            </span>
            <h4 className="font-serif text-xl font-bold text-[#020e1a]">
              Board-Ready Report
            </h4>
            <p className="text-slate-500 text-[13px] leading-relaxed font-light">
              Structured, prioritized, and written for investment committee or credit committee use.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE 2: BANKABILITY AUDITS ── */}
      <section className="py-20 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:order-1">
            <h2 className="font-serif text-4xl md:text-[48px] font-bold text-[#020e1a] leading-[1.1] mb-2">
              Bankability Audits
            </h2>
            <p className="text-slate-500 text-base md:text-[17px] leading-relaxed font-light">
              A structured review of whether a manufacturing business is operationally reliable, scalable, and credible enough to support financing, investment, growth, or customer confidence.
            </p>
            <div className="mt-4">
              <a
                href="#/contact"
                className="bg-[#041c35] hover:bg-[#0d2035] text-white text-[13px] font-semibold px-5 py-4 rounded-none transition-colors tracking-wider uppercase inline-block shadow-sm"
              >
                Request This Audit
              </a>
            </div>
          </div>

          {/* Right Column (Card Box) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 shadow-lg relative flex flex-col justify-between lg:order-2">
            {/* Top accent bar (green) */}
            <div className="absolute top-0 inset-x-0 h-1 bg-[#10b981]" />
            
            <div className="p-8 md:p-10 flex flex-col gap-8">
              {/* Section 1 */}
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#10b981] uppercase block mb-4">
                  WHAT WE ASSESS
                </span>
                <ul className="flex flex-col gap-3.5 text-slate-600 text-[13.5px]">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Lender and investor operational readiness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Management system strength and documented discipline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Process control maturity and consistency of outputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>KPI discipline — reliability, integrity, and use of data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Factory evidence package — what exists and what's missing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Bankability readiness rating with scored gaps and priorities</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="border-t border-slate-100 pt-6">
                <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#10b981] uppercase block mb-3">
                  OUTCOME
                </span>
                <p className="text-slate-600 text-[13.5px] leading-relaxed font-light">
                  An evidence-based readiness profile with a bankability score, gap analysis, and prioritized improvement roadmap.
                </p>
              </div>
            </div>

            {/* Section 3 (Dark Bottom Box) */}
            <div className="bg-[#020e1a] text-white p-8 md:px-10">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#10b981] uppercase block mb-3">
                WHO IT'S FOR
              </span>
              <p className="text-slate-300 text-[13px] leading-relaxed font-light">
                Manufacturing owners preparing for growth financing, acquisition interest, or customer qualification — before they are asked to demonstrate it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 3: LEADERSHIP COACHING ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="font-serif text-4xl md:text-[48px] font-bold text-[#020e1a] leading-[1.1] mb-2">
              Operational Leadership Coaching
            </h2>
            <p className="text-slate-500 text-base md:text-[17px] leading-relaxed font-light">
              Practical coaching for plant managers, quality leaders, and operations executives who must translate factory performance into financial outcomes.
            </p>
            <p className="text-slate-500 text-[14.5px] leading-relaxed font-light">
              Most manufacturing leaders are highly capable operators. Fewer have been taught to connect what happens on the floor to what appears on the income statement. EVERSTONE closes that gap.
            </p>
            <div className="mt-4">
              <a
                href="#/contact"
                className="bg-[#020e1a] hover:bg-[#0d2035] text-white text-[13px] font-semibold px-8 py-4 rounded-none transition-colors tracking-wider uppercase inline-block shadow-sm"
              >
                Request This Program
              </a>
            </div>
          </div>

          {/* Right Column (Card Box) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 shadow-lg relative flex flex-col justify-between">
            {/* Top accent bar (gold/orange) */}
            <div className="absolute top-0 inset-x-0 h-1 bg-[#d97706]" />
            
            <div className="p-8 md:p-10 flex flex-col gap-8">
              {/* Section 1 */}
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#d97706] uppercase block mb-4">
                  WHAT WE COVER
                </span>
                <ul className="flex flex-col gap-3.5 text-slate-600 text-[13.5px]">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Factory finance for operations leaders OEE, scrap, rework, margin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>KPI discipline and data literacy for decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Problem-solving routines structured, repeatable, evidence-based</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Execution accountability from plan to result</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Quality leadership from reactive inspection to risk-based thinking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Lean and continuous improvement connected to financial outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>Risk-based decision-making at the operations level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-300 font-light mt-0">—</span>
                    <span>How to present operational performance to boards and investors</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="border-t border-slate-100 pt-6">
                <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#d97706] uppercase block mb-3">
                  OUTCOME
                </span>
                <p className="text-slate-600 text-[13.5px] leading-relaxed font-light">
                  Leaders who connect shop-floor decisions to financial outcomes and lead with evidence, data, and financial literacy. Coaching engagements typically run 8–16 weeks.
                </p>
              </div>
            </div>

            {/* Section 3 (Dark Bottom Box) */}
            <div className="bg-[#020e1a] text-white p-8 md:px-10">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#d97706] uppercase block mb-3">
                WHO IT'S FOR
              </span>
              <p className="text-slate-300 text-[13px] leading-relaxed font-light">
                Plant managers, quality managers, COOs, and leadership teams at PE-backed industrial businesses who need to bridge the operational-financial divide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
