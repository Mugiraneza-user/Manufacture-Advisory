import { ArrowRight,  } from 'lucide-react'
//Activity, ShieldAlert, Award, FileSpreadsheet
interface HomeProps {
  onNavigate: (route: string) => void
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#020e1a] text-white overflow-hidden diagonal-grid py-20 lg:py-28 px-6 ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020e1a]/50 via-[#031527]/70 to-[#020e1a]/95 z-0" />
        
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-start gap-6">
          <span className="text-[12px] md:text-[12px] font-mono font-bold tracking-[0.25em] text-brand-accent uppercase leading-none pt-5">
            Manufacturing Value Assurance
          </span>
          
          <h1 className="text-white text-3xl md:text-5xl lg:text-[54px] font-serif font-bold leading-[1.12] max-w-3xl mt-2 ">
            The factory is  <br />where financial  <br /> risk <br/> hides.
          </h1>
          
          <p className="text-slate-300 font-sans text-base md:text-lg lg:text-[17px] leading-relaxed max-w-2xl mt-2 font-normal">
            EVERSTONE SYSTEMS helps manufacturers, investors, and lenders determine whether a factory is operationally sound, scalable, and bankable before capital is committed and after it is.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold px-6 py-4 rounded-none transition-all-custom cursor-pointer tracking-wider shadow-md active:scale-[0.98]  text-center"
            >
              Request a Bankability Audit
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="border border-white hover:bg-white/10 text-white text-[13px] font-semibold px-6 py-4 rounded-none transition-all-custom cursor-pointer tracking-wider active:scale-[0.98]  text-center"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>
      
      {/* Lighter blue solid transition bar */}
      <div className="w-full h-4 bg-brand-blue" />

      {/* 2. VALUE PROP COLUMNS (Blue Background Banner) */}
      <section className="bg-brand-blue-hover text-white py-14 md:py-18 px-6 border-b border-brand-blue-hover">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-3 lg:pr-8 pt-6 lg:pt-0">
            <span className="text-[11px] font-bold tracking-[0.2em] text-sky-200 uppercase">
              Operational Risk
            </span>
            <h3 className="font-serif text-xl md:text-[22px] font-semibold text-white leading-snug">
              What the P & L doesn't show you
            </h3>
            <p className="text-sky-100/90 text-[14px] leading-relaxed mt-1 font-light">
              Factory systems reveal whether financial results are reliable, repeatable, and defensible information that never reaches the income statement.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-3 lg:px-8 pt-6 lg:pt-0">
            <span className="text-[11px] font-bold tracking-[0.2em] text-sky-200 uppercase">
              EBITDA Opportunity
            </span>
            <h3 className="font-serif text-xl md:text-[22px] font-semibold text-white leading-snug">
              Margin hiding in plain sight
            </h3>
            <p className="text-sky-100/90 text-[14px] leading-relaxed mt-1 font-light">
              Poor OEE, scrap, rework, and downtime are quantifiable EBITDA leakage that EVERSTONE maps to specific factory systems.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-3 lg:pl-8 pt-6 lg:pt-0">
            <span className="text-[11px] font-bold tracking-[0.2em] text-sky-200 uppercase">
              Bankability Evidence
            </span>
            <h3 className="font-serif text-xl md:text-[22px] font-semibold text-white leading-snug">
              The confidence capital requires
            </h3>
            <p className="text-sky-100/90 text-[14px] leading-relaxed mt-1 font-light">
              Lenders and investors read process discipline as a proxy for management maturity. EVERSTONE SYSTEMS builds the evidence package that supports their decision.
            </p>
          </div>

        </div>
      </section>

      {/* 3. THE CORE PROBLEM PART 1 */}
      <section className="bg-white py-16 md:py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side Header and Quote */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-blue uppercase">
                The Core Problem
              </span>
              <div className="w-12 h-[3px] bg-brand-blue mt-2" />
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl lg:text-[34px]  text-brand-navy font-bold leading-tight mt-4">
              "Factories hide financial risk in plain sight  and most capital decisions are made without ever reading the factory."
            </h2>
             <p className="text-brand-muted text-[14px] leading-relaxed mt-3 font-light max-w-md">
              Financial statements show results. Factory systems explain whether those results are reliable, repeatable, scalable, and defensible.
            </p>
             <button 
              onClick={() => onNavigate('method')}
              className="group text-brand-blue hover:text-brand-blue-hover text-[14px] font-bold mt-2 flex items-center gap-2 cursor-pointer"
            >
              See how everstone helps
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side Challenges 01 & 02 */}
          <div className="flex flex-col gap-10">
            {/* Item 01 */}
            <div className="flex gap-6 items-start pb-8 border-b border-slate-100">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                01
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy uppercase tracking-wider">
                  Weak quality systems
                </h4>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  Customer and warranty exposure sitting unreported inside the production process  invisible to financial due diligence.
                </p>
              </div>
            </div>

            {/* Item 02 */}
            <div className="flex gap-6 items-start">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                02
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy uppercase tracking-wider">
                  Inflated capacity assumptions
                </h4>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  Growth projections that don't reflect actual bottlenecks, equipment availability, or maintenance backlogs.
                </p>
              </div>
            </div>
             {/* Item 03 */}
            <div className="flex gap-6 items-start pb-8 border-b border-slate-100">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                03
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy uppercase tracking-wider">
                  OEE, downtime, scrap & rework
                </h4>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  EBITDA leakage disguised as normal operating variance. Each point of lost OEE is trapped revenue.
                </p>
              </div>
            </div>
              {/* Item 04 */}
            <div className="flex gap-6 items-start pb-8 border-b border-slate-100">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                04
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy uppercase tracking-wider">
                  Leadership and execution gaps
                </h4>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  Post-acquisition performance risk that no spreadsheet captures.
                </p>
              </div>
            </div>

            {/* Item 05 */}
            <div className="flex gap-6 items-start">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                05
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy uppercase tracking-wider">
                  Compliance and audit weaknesses
                </h4>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  Lender and customer confidence eroded by management system gaps  not intent, but evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADVISORY SERVICES */}
      <section className="bg-brand-light-bg py-16 md:py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-blue uppercase">
                Advisory Services
              </span>
              <div className="w-12 h-[3px] bg-brand-blue mt-2" />
            </div>

            <h2 className="font-serif text-3xl md:text-[40px] font-bold text-brand-navy leading-[1.15] mt-4 max-w-sm">
              Three disciplines. One standard of evidence.
            </h2>
            
            <p className="text-brand-muted text-[14px] leading-relaxed mt-3 font-light max-w-md">
              Each engagement is structured, factory-specific, and delivered as a clear executive output not a slide deck with no accountability.
            </p>

            <button 
              onClick={() => onNavigate('services')}
              className="group text-brand-blue hover:text-brand-blue-hover text-[14px] font-bold mt-4 flex items-center gap-2 transition-colors cursor-pointer"
            >
              View all services 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            {/* Discipline 01 */}
            <div className="flex gap-6 items-start pb-8 border-b border-slate-200/60">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                01
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-lg text-brand-navy leading-none">
                  Manufacturing Operational Due Diligence
                </h3>
                <span className="text-[10px] md:text-[11px] font-sans font-semibold tracking-wider text-brand-muted uppercase mt-0.5">
                  Investors · Buyers · Lenders · Owners
                </span>
                <p className="text-brand-muted text-[14px] leading-relaxed mt-2 font-light">
                  Independent operational assessments translating shop-floor reality into executive-level risk intelligence before capital is committed.
                </p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="group text-brand-blue hover:text-brand-blue-hover text-[13px] font-semibold mt-2 flex items-center gap-1.5 cursor-pointer text-left w-fit"
                >
                  View full service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Discipline 02 */}
            <div className="flex gap-6 items-start pb-8 border-b border-slate-200/60">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                02
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-lg text-brand-navy leading-none">
                  Bankability Audits
                </h3>
                <span className="text-[10px] md:text-[11px] font-sans font-semibold tracking-wider text-brand-muted uppercase mt-0.5">
                  Manufacturers · Financing Readiness
                </span>
                <p className="text-brand-muted text-[14px] leading-relaxed mt-2 font-light">
                  A structured review of whether a manufacturing business is operationally reliable, credible, and bankable enough to support growth or financing.
                </p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="group text-brand-blue hover:text-brand-blue-hover text-[13px] font-semibold mt-2 flex items-center gap-1.5 cursor-pointer text-left w-fit"
                >
                  View full service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Discipline 03 */}
            <div className="flex gap-6 items-start">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                03
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-lg text-brand-navy leading-none">
                  Operational Leadership Coaching
                </h3>
                <span className="text-[10px] md:text-[11px] font-sans font-semibold tracking-wider text-brand-muted uppercase mt-0.5">
                  Plant Managers · Quality Leaders · Executives
                </span>
                <p className="text-brand-muted text-[14px] leading-relaxed mt-2 font-light">
                  Practical coaching for manufacturing leaders who must translate factory performance into financial outcomes — and defend them to boards.
                </p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="group text-brand-blue hover:text-brand-blue-hover text-[13px] font-semibold mt-2 flex items-center gap-1.5 cursor-pointer text-left w-fit"
                >
                  View full service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEY PERFORMANCE IMPACT CARDS */}
      {/* <section className="bg-brand-light-bg py-16 md:py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
            
            {/* Card 1 */}
            {/* <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-accent uppercase">
                  Poor OEE
                </span>
                <h4 className="font-serif text-lg md:text-xl font-bold text-slate-900 mt-2">
                  Trapped Revenue
                </h4>
                <p className="text-brand-muted text-[13.5px] leading-relaxed mt-3 font-light">
                  Every lost point of availability, speed, or quality is capital that isn't working.
                </p>
              </div>
              <Activity className="text-brand-blue/30 self-end mt-4" size={24} />
            </div> */}

            {/* Card 2 */}
            {/* <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-accent uppercase">
                  Scrap & Rework
                </span>
                <h4 className="font-serif text-lg md:text-xl font-bold text-slate-900 mt-2">
                  Margin Leakage
                </h4>
                <p className="text-brand-muted text-[13.5px] leading-relaxed mt-3 font-light">
                  It absorbs labor, material, and capacity without creating value.
                </p>
              </div>
              <ShieldAlert className="text-brand-blue/30 self-end mt-4" size={24} />
            </div> */}

            {/* Card 3 */}
            {/* <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-accent uppercase">
                  Weak Process Control
                </span>
                <h4 className="font-serif text-lg md:text-xl font-bold text-slate-900 mt-2">
                  Reduced Bankability
                </h4>
                <p className="text-brand-muted text-[13.5px] leading-relaxed mt-3 font-light">
                  Lenders discount businesses with volatile processes because risk cannot be priced.
                </p>
              </div>
              <Award className="text-brand-blue/30 self-end mt-4" size={24} />
            </div> */}

            {/* Card 4 */}
            {/* <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-accent uppercase">
                  Unreliable KPI Data
                </span>
                <h4 className="font-serif text-lg md:text-xl font-bold text-slate-900 mt-2">
                  Investment Risk
                </h4>
                <p className="text-brand-muted text-[13.5px] leading-relaxed mt-3 font-light">
                  If the operational numbers can't be trusted, the financial model is a guess.
                </p>
              </div>
              <FileSpreadsheet className="text-brand-blue/30 self-end mt-4" size={24} />
            </div>

          </div>
        </div>
      </section> */}

      {/* 7. CASE STUDIES */}
      <section className="bg-brand-light-bg py-16 md:py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-blue uppercase">
                Case Studies
              </span>
              <div className="w-12 h-[3px] bg-brand-blue mt-2" />
            </div>

            <h2 className="font-serif text-3xl md:text-[40px] font-bold text-brand-navy leading-[1.15] mt-4 max-w-sm">
              Factory intelligence applied in practice.
            </h2>

            <p className="text-brand-muted text-[14px] leading-relaxed mt-3 font-light max-w-md">
              Each engagement is confidential. These case studies reflect the types of mandates EVERSTONE completes the operational findings, financial translations, and decisions they supported.
            </p>

            <button
              onClick={() => onNavigate('case-studies')}
              className="group text-brand-blue hover:text-brand-blue-hover text-[14px] font-bold mt-4 flex items-center gap-2 transition-colors cursor-pointer"
            >
              View all case studies
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-0 divide-y divide-slate-200">

            {/* Case Study 01 */}
            <div className="flex gap-6 items-start py-8 first:pt-0">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                01
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <span className="inline-block text-[10px] font-bold tracking-[0.18em] text-brand-blue uppercase border border-brand-blue/30 px-2 py-1 w-fit">
                  Operational Due Diligence
                </span>
                <h3 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy leading-snug mt-1">
                  $2.4M EBITDA Risk Identified Before Acquisition Close
                </h3>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  Three critical quality gaps, 18% overstated capacity, and margin absorbed by scrap — all invisible to the financial model.
                </p>
                <div className="flex gap-8 mt-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-serif text-2xl font-bold text-brand-blue">$2.4M</span>
                    <span className="text-[11px] text-brand-muted uppercase tracking-wider font-light">EBITDA risk</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-serif text-2xl font-bold text-brand-blue">18%</span>
                    <span className="text-[11px] text-brand-muted uppercase tracking-wider font-light">Capacity overstated</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-serif text-2xl font-bold text-brand-blue">3</span>
                    <span className="text-[11px] text-brand-muted uppercase tracking-wider font-light">Quality gaps flagged</span>
                  </div>
                </div>
                <span className="text-[11px] text-brand-muted uppercase tracking-wider font-light mt-2">
                  Precision Metal Components · Midwest, USA · PE Acquisition
                </span>
              </div>
            </div>

            {/* Case Study 02 */}
            <div className="flex gap-6 items-start py-8">
              <span className="font-serif text-4xl font-semibold text-brand-blue leading-none">
                02
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <span className="inline-block text-[10px] font-bold tracking-[0.18em] text-brand-blue uppercase border border-brand-blue/30 px-2 py-1 w-fit">
                  Bankability Audit
                </span>
                <h3 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy leading-snug mt-1">
                  Manufacturer Secures $3.8M Credit Line After Bankability Audit
                </h3>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  Lender concern centred on management system maturity. EVERSTONE built the evidence package that directly closed the confidence gap.
                </p>
                <div className="flex gap-8 mt-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-serif text-2xl font-bold text-brand-blue">$3.8M</span>
                    <span className="text-[11px] text-brand-muted uppercase tracking-wider font-light">Credit line secured</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-serif text-2xl font-bold text-brand-blue">6 wks</span>
                    <span className="text-[11px] text-brand-muted uppercase tracking-wider font-light">Audit to approval</span>
                  </div>
                </div>
                <span className="text-[11px] text-brand-muted uppercase tracking-wider font-light mt-2">
                  Injection Molding · Southeast, USA · Growth Financing
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. INSIGHTS */}
      <section className="bg-white py-16 md:py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-blue uppercase">
                Insights
              </span>
              <div className="w-12 h-[3px] bg-brand-blue mt-2" />
            </div>

            <h2 className="font-serif text-3xl md:text-[40px] font-bold text-brand-navy leading-[1.15] mt-4 max-w-sm">
              Manufacturing intelligence for people who decide.
            </h2>

            <p className="text-brand-muted text-[14px] leading-relaxed mt-3 font-light max-w-md">
              Thought leadership at the intersection of factory operations and financial outcomes.
            </p>

            <button
              onClick={() => onNavigate('insights')}
              className="group text-brand-blue hover:text-brand-blue-hover text-[14px] font-bold mt-4 flex items-center gap-2 transition-colors cursor-pointer"
            >
              View all insights
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column (Span 3) */}
          <div className="lg:col-span-3 flex flex-col divide-y divide-slate-200">

            {/* Insight 01 */}
            <div className="flex gap-6 items-start py-8 first:pt-0">
              <span className="font-serif text-[13px] font-bold text-brand-blue uppercase tracking-wider w-12 shrink-0 pt-0.5">
                ODD
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy leading-snug">
                  Why EBITDA Alone Cannot Tell You If a Factory Is Worth Buying
                </h3>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  A factory's income statement reflects past results. It says nothing about whether those results can be sustained, scaled, or repeated after ownership changes.
                </p>
                <button
                  onClick={() => onNavigate('insights')}
                  className="group text-brand-blue hover:text-brand-blue-hover text-[13px] font-semibold mt-1 flex items-center gap-1.5 cursor-pointer w-fit"
                >
                  Read article
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Insight 02 */}
            <div className="flex gap-6 items-start py-8">
              <span className="font-serif text-[13px] font-bold text-brand-blue uppercase tracking-wider w-12 shrink-0 pt-0.5">
                BANK
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy leading-snug">
                  Manufacturing Bankability: The Missing Link Between Operations and Capital
                </h3>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  The operational systems that produce financial data are rarely examined before capital is committed. That gap is bankability.
                </p>
                <button
                  onClick={() => onNavigate('insights')}
                  className="group text-brand-blue hover:text-brand-blue-hover text-[13px] font-semibold mt-1 flex items-center gap-1.5 cursor-pointer w-fit"
                >
                  Read article
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Insight 03 */}
            <div className="flex gap-6 items-start py-8">
              <span className="font-serif text-[13px] font-bold text-brand-blue uppercase tracking-wider w-12 shrink-0 pt-0.5">
                Q & F
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-[16px] md:text-[17px] text-brand-navy leading-snug">
                  Scrap Is Not a Quality Problem. It Is Margin Leakage.
                </h3>
                <p className="text-brand-muted text-[14px] leading-relaxed font-light">
                  Every unit scrapped is labor, material, and capacity that produced nothing shippable. Here is how to quantify it in EBITDA terms.
                </p>
                <button
                  onClick={() => onNavigate('insights')}
                  className="group text-brand-blue hover:text-brand-blue-hover text-[13px] font-semibold mt-1 flex items-center gap-1.5 cursor-pointer w-fit"
                >
                  Read article
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="bg-brand-blue py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <span className="text-[11px] font-bold tracking-[0.25em] text-sky-200 uppercase">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight">
            Is your factory truly <br /> bankable?
          </h2>
          <p className="text-sky-100/90 text-[15px] md:text-[16px] leading-relaxed font-light max-w-xl">
            Request a confidential assessment to identify operational risks, hidden value, and the evidence needed to support growth, financing, or acquisition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-slate-100 text-brand-blue text-[13px] font-semibold px-8 py-4 rounded-none transition-all duration-200 cursor-pointer tracking-wider shadow-md active:scale-[0.98] "
            >
              Request a Confidential Assessment
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border border-white/60 hover:bg-white/10 text-white text-[13px] font-semibold px-8 py-4 rounded-none transition-all duration-200 cursor-pointer tracking-wider active:scale-[0.98] "
            >
              Read Our Insights
            </button>
          </div>
        </div>
      </section>

    

    </div>
  )
}