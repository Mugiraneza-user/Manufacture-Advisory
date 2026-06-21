import { ArrowRight,  } from 'lucide-react'
//Activity, ShieldAlert, Award, FileSpreadsheet
import image from '../assets/1.jpg'
import backgroundImage from '../assets/5.jpg'
import imag1 from '../assets/3.jpg'

import mathorboard from '../assets/6.jpg'

interface HomeProps {
  onNavigate: (route: string) => void
}
type CaseCardProps = { badge: string; badgeColor: string; location: string; title: string; description: string; stats: {  value: string; label: string;}[];
};

function CaseCard({ badge,badgeColor,location,title,description,stats,}: CaseCardProps) {
  return (
    <div className="border border-white/10 p-12 backdrop-blur-sm bg-white/[0.02] ">
      <span
        className={`inline-flex px-4 py-2 text-[11px] tracking-[0.25em] uppercase font-bold ${badgeColor}`} > {badge} </span>
       <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-white/40"> {location} </p>

      <h4 className="mt-4 font-serif text-white text-xl leading-tight font-bold">  {title} </h4>
       <p className="mt-6 text-white/60 text-sm leading-relaxed"> {description} </p>

      <div className="mt-10 border-t border-white/10 pt-8 flex flex-wrap gap-10">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-white text-xl font-bold">
              {stat.value}
            </div>
            <div className="text-white/50 text-sm mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
     <a href="case-studies">
      <button className="mt-10 text-sky-400 font-semibold hover:translate-x-1 transition-transform">
        Read case study →
      </button>

      </a>
    </div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative text-white overflow-hidden diagonal-grid py-20 lg:py-28 px-6 ">
        <div className="absolute inset-0  from-[#020e1a]/50 via-[#031527]/70 to-[#020e1a]/95 z-0" />
        <img src={image} alt="Factory" className="absolute inset-0 w-full h-full object-cover z-0 brightness-10 opacity-90" />
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-start gap-6">
          <span className="flex items-center gap-3 text-[9px] font-mono font-bold tracking-[0.25em] text-[#FFD700] uppercase pt-5">
           <span className="w-5 h-[1px] bg-[#FFD700]" />
            Manufacturing Value Assurance
          </span>
          <h1 className="text-white text-3xl md:text-5xl lg:text-[54px] font-serif font-bold leading-[1.12] max-w-3xl mt-2 ">
            The factory is  <br />where financial  <br /> risk  <br /> <span className="text-[#1688E8]">hides.</span>
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
<section className="bg-[#F3F3F3]">

  {/* Heading */}
  <div className="py-11 px-6">
    <h2 className="font-serif text-[#082847] text-center font-bold leading-[1.05]
                   text-5xl md:text-6xl lg:text-[42px]">
      Three kinds of people
      <br />
      who need to read the factory.
    </h2>
  </div>

  {/* Three Panels */}
  <div className="grid grid-cols-1 lg:grid-cols-3">

    {/* Panel 1 */}
    <div className="relative h-[700px]">
      <img src={image}alt=""className="absolute inset-0 w-full h-full object-cover"/>

      <div className="absolute inset-0 "></div>

      <div className="absolute bottom-0 p-10 lg:p-12 text-white z-10 bg-[#082847]/80">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-[#D7A13B]"></div>
          <span className="text-[#D7A13B] text-xs tracking-[0.25em] font-semibold">
            PRIVATE EQUITY & BUYERS
          </span>
        </div>

        <h3 className="font-serif text-4xl lg:text-[27px] font-bold leading-[1.05] mb-8 text-white">
          You have the model.
          <br />
          You don't have the factory.
        </h3>

        <p className="text-white/75 leading-8 text-[12px]">
          EBITDA tells you what a business has earned. EVERSTONE SYSTEMS tells
          you whether it can earn it again and whether the systems,
          capacity, and leadership exist to support the investment thesis.
        </p>

      </div>
    </div>

    {/* Panel 2 */}
    <div className="relative h-[700px]">
      <img
        src={imag1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 "></div>

      <div className="absolute bottom-0 p-10 lg:p-12 text-white z-10 bg-[#082847]/75">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-[#D7A13B]"></div>
          <span className="text-[#D7A13B] text-xs tracking-[0.25em] font-semibold">
            MANUFACTURERS & OWNERS
          </span>
        </div>

        <h3 className="font-serif text-4xl lg:text-[27px] font-bold leading-[1.05] mb-8 text-white">
          You know it's underperforming.
          <br />
          You don't know exactly where.
        </h3>

        <p className="text-white/75 leading-8 text-[12px]">
          Value is trapped inside your factory in OEE losses, scrap,
          rework, and capacity constraints. EVERSTONE SYSTEMS finds it,
          quantifies it, and builds the roadmap to recover it.
        </p>

      </div>
    </div>

    {/* Panel 3 */}
    <div className="relative h-[700px]">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 "></div>

      <div className="absolute bottom-0 p-10 lg:p-12 text-white z-10 bg-[#082847]/80">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-[#D7A13B]"></div>
          <span className="text-[#D7A13B] text-xs tracking-[0.25em] font-semibold">
            BANKS & LENDERS
          </span>
        </div>

        <h3 className="font-serif text-4xl lg:text-[27px] font-bold leading-[1.05] mb-8 text-white">
          You see the financials.
          <br />
          You haven't seen the factory.
        </h3>

        <p className="text-white/75 leading-8 text-[12px]">
          A factory's ability to service debt depends on operational
          discipline not just reported EBITDA. EVERSTONE SYSTEMS provides
          the independent operational intelligence your credit decision
          requires.
        </p>

      </div>
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

    
          {/* 7. CASE STUDIES */}
      <section className="relative overflow-hidden bg-[#062942] py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: `url(${mathorboard})`, // <-- leave image path here
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021b2d]/90 via-[#021b2d]/85 to-[#021b2d]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-white text-3xl md:text-4xl font-bold leading-[1.12] max-w-3xl mb-20">
          Four mandates.
          <br />
          Four factories that told
          <br />
          a different story.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/10">
          {/* Card 1 */}
          <CaseCard
            badge="Operational Due Diligence"
            badgeColor="bg-blue-500/20 text-blue-400"
            location="PRECISION METAL · MIDWEST, USA · PE ACQUISITION"
            title="$2.4M in EBITDA Risk Found Before Acquisition Close"
            description="Three critical quality gaps, 18% overstated capacity, and margin absorbed by scrap none of it visible in the financial model."
            stats={[
              { value: "$2.4M", label: "EBITDA risk" },
              { value: "18%", label: "Capacity overstated" },
              { value: "3", label: "Quality gaps" },
            ]}
          />

          {/* Card 2 */}
          <CaseCard
            badge="Bankability Audit"
            badgeColor="bg-emerald-500/20 text-emerald-400"
            location="INJECTION MOLDING · SOUTHEAST, USA · GROWTH FINANCING"
            title="$3.8M Credit Line Secured After Bankability Audit"
            description="Strong revenue, but lender confidence was missing. EVERSTONE built the evidence package that directly addressed what the lender needed to see."
            stats={[
              { value: "$3.8M", label: "Credit secured" },
              { value: "6 wks", label: "Audit to approval" },
              { value: "9/10", label: "Bankability score" },
            ]}
          />

          {/* Card 3 */}
          <CaseCard
            badge="Value Assessment"
            badgeColor="bg-purple-500/20 text-purple-400"
            location="CONTRACT MANUFACTURER · STRATEGIC ACQUISITION"
            title="$900K in Recoverable EBITDA Found at Contract Manufacturer"
            description="A 67% gap between reported and actual OEE  accepted at face value by the model."
            stats={[
              { value: "$900K", label: "Recoverable margin" },
              { value: "67%", label: "OEE gap found" },
            ]}
          />

          {/* Card 4 */}
          <CaseCard
            badge="Leadership Coaching"
            badgeColor="bg-amber-500/20 text-amber-400"
            location="AUTOMOTIVE TIER 2 · ONTARIO · PE-BACKED"
            title="Plant Leadership Connects KPIs to EBITDA  Presenting to PE Board"
            description="A 12-week program rebuilt decision-making and delivered +6pt OEE in 90 days."
            stats={[
              { value: "12 wks", label: "Program" },
              { value: "+6pt", label: "OEE in 90 days" },
              { value: "4", label: "Leaders coached" },
            ]}
          />
        </div>
      </div>
    </section>

      {/* 9. CTA SECTION */}
      <section className=" relative py-20 md:py-28 px-6 overflow-hidden">
        <img src={backgroundImage} alt="Factory" className="absolute inset-0 w-full h-full object-cover z-0 brightness-70 opacity-90" />
       <div className="absolute inset-0 bg-blue-900/45 z-10" />
        <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          
          <span className="text-[11px] font-bold tracking-[0.25em] text-white uppercase">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[46px] font-bold text-gray-100">
            Is your factory truly <br /> bankable?
          </h2>
          <p className="text-sky-100/90 text-[15px] md:text-[16px] leading-relaxed font-light max-w-xl">
            Request a confidential assessment to identify operational risks, hidden value, and the evidence needed to support growth, financing, or acquisition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={() => onNavigate('contact')}
              className=" hover:bg-slate-100 text-black text-[13px] font-semibold px-8 py-4 rounded-none transition-all duration-200 cursor-pointer tracking-wider shadow-md active:scale-[0.98] bg-[#c5b142]"
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