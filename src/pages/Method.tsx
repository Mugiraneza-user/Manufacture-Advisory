import { Search, FileText, TrendingUp } from 'lucide-react'

export default function Method() {
  const steps = [
    {
      step: '01',
      title: 'Assess',
      icon: Search,
      desc: 'Review factory systems, leadership routines, KPIs, quality controls, capacity, compliance, and risk. We look at what the data says — and what it doesn\'t say.',
      details: 'We review the factory as a system looking for how operational disciplines connect to financial outcomes and where they break down. We read the factory for risk, opportunity, and evidence of management maturity.',
      bullets: 'Production controls · Quality system maturity · OEE and downtime data · Capacity utilization · Maintenance programs · Leadership routines · KPI integrity · Supplier risk · Compliance posture'
    },
    {
      step: '02',
      title: 'Quantify',
      icon: TrendingUp,
      desc: 'Convert operational findings into financial language: risk exposure, margin leakage, EBITDA potential, scalability constraints, and bankability gaps.',
      details: 'Operational findings are translated into financial terms converting factory observations into risk, margin impact, EBITDA potential, or bankability gaps. Factory performance becomes a number decision-makers can act on.',
      bullets: null,
      grid: [
        { title: 'OEE Losses', sub: 'Translated to trapped revenue per shift, per month' },
        { title: 'Scrap & Rework', sub: 'Converted to margin leakage and hidden cost impact' },
        { title: 'Capacity Gaps', sub: 'Mapped to growth thesis limitations and scalability risk' },
        { title: 'System Gaps', sub: 'Scored against bankability and investor-readiness criteria' },
      ]
    },
    {
      step: '03',
      title: 'Advise',
      icon: FileText,
      desc: 'Deliver a clear executive report with prioritized findings, financial impact, decision support, and a practical action roadmap grounded in factory evidence.',
      details: 'A structured executive report with clear findings, financial impact, and a prioritized action roadmap. Every recommendation is grounded in factory evidence  not best-practice generalizations. Deliverables are calibrated to the specific decision being made.',
      bullets: null
    }
  ]

  const principles = [
    {
      title: 'Factory-specific, not generic',
      desc: 'No boilerplate frameworks applied regardless of context. Every assessment reads the actual factory.'
    },
    {
      title: 'Financial language, always',
      desc: 'Operational findings that can\'t be expressed in financial terms don\'t make it into the report.'
    },
    {
      title: 'Evidence, not opinion',
      desc: 'Every finding is supported by observable factory data, system documentation, or leadership behaviour.'
    },
    {
      title: 'Prioritized, not exhaustive',
      desc: 'Reports are structured by financial impact and decision relevance not by every observation made.'
    },
    {
      title: 'Independent, always',
      desc: 'EVERSTONE has no stake in any transaction. Our only commitment is to an accurate assessment.'
    }
  ]

  return (
    <div className="w-full flex flex-col font-sans">

      {/* ── HERO ── */}
      <section className="relative bg-[#020e1a] text-white pt-24 pb-32 px-6 overflow-hidden">
        {/* subtle grid overlay */}
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
            <span className="text-white font-medium">Method</span>
          </nav>

          <h1 className="font-serif text-2xl md:text-6xl font-bold leading-[1.05] max-w-3xl mb-6 text-white">
            From factory evidence<br />to executive decisions.
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Every engagement follows a structured three-step process. No generalities. No generic
            frameworks applied wholesale. Each step is grounded in factory evidence and
            expressed in financial language.
          </p>
        </div>
      </section>

      {/* ── THREE STEPS OVERVIEW ── */}
      <section className="bg-[#0a1a2e] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 text-white">
            Three steps. One standard.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {steps.map((item) => (
              <div key={item.step} className="bg-[#0d2035] p-8 md:p-10 flex flex-col gap-5">
                <span className="font-serif text-5xl font-bold text-white/20 leading-none">
                  {item.step}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-300 text-[14px] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP-BY-STEP DETAIL + PRINCIPLES SIDEBAR ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: step detail */}
          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#1a5eb8] uppercase">
              Step-by-Step Detail
            </span>
            <div className="w-10 h-[3px] bg-[#1a5eb8] mt-3 mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#020e1a] mb-4 leading-tight">
              What happens inside<br />each step.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-14 max-w-xl">
              Each phase has a distinct purpose and produces specific outputs
              that feed directly into the next. Nothing is left as an observation
              without a financial translation.
            </p>

            {steps.map((item, i) => (
              <div key={item.step} className={`flex gap-8 ${i < steps.length - 1 ? 'pb-12 mb-12 border-b border-slate-100' : ''}`}>
                <span className="font-serif text-4xl font-bold text-[#1a5eb8] leading-none pt-1 shrink-0 w-10">
                  {item.step}
                </span>
                <div className="flex-1">
                  <h4 className="font-serif text-xl font-bold text-[#020e1a] mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed mb-4">{item.details}</p>
                  {item.bullets && (
                    <p className="text-slate-400 text-[13px] leading-relaxed">{item.bullets}</p>
                  )}
                  {item.grid && (
                    <div className="grid grid-cols-2 gap-px bg-slate-200 mt-6 border border-slate-200">
                      {item.grid.map((g) => (
                        <div key={g.title} className="bg-slate-50 p-4 border-l-2 border-[#1a5eb8]">
                          <p className="font-semibold text-[13px] text-[#020e1a] mb-1">{g.title}</p>
                          <p className="text-slate-500 text-[12px] leading-snug">{g.sub}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Principles sidebar */}
          <div className="lg:w-[380px] shrink-0">
            <div className="bg-[#020e1a] text-white p-8 sticky top-8">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#4a9eff] uppercase">
                Everstone Principles
              </span>
              <div className="mt-6 flex flex-col divide-y divide-white/10">
                {principles.map((p) => (
                  <div key={p.title} className="py-5">
                    <p className="font-semibold text-[14px] text-white mb-2">{p.title}</p>
                    <p className="text-slate-400 text-[13px] leading-relaxed font-light">{p.desc}</p>
                  </div>
                ))}
              </div>
              <a href="/contact">
                <button className="mt-6 w-full bg-[#1a5eb8] hover:bg-[#1650a0] text-white text-[13px] font-semibold py-4 transition-colors tracking-wide">
                  Start a Conversation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1a5eb8] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-white">
            Ready to apply this<br />method to your factory?
          </h2>
          <p className="text-blue-100 text-[15px] md:text-[16px] font-light max-w-lg leading-relaxed">
            Every engagement begins with a direct, confidential conversation about
            what you need to know  and by when.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a href="/contact">
              <button className="bg-white text-[#1a5eb8] hover:bg-blue-50 font-semibold px-8 py-4 text-[14px] tracking-wide transition-colors">
                Request ODD
              </button>
            </a>

            <a href="/services">
              <button className="border border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-[14px] tracking-wide transition-colors">
                View Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}