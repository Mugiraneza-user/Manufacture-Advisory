import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission
    setTimeout(() => {
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="w-full flex flex-col font-sans">
      {/* 1. DARK BLUE GRID HERO SECTION */}
      <section className="relative bg-[#020e1a] text-white py-16 md:py-20 px-6 diagonal-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020e1a]/40 to-[#020e1a]/95 z-0" />
        
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-start gap-4">
          {/* Breadcrumb Links */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-sans tracking-wide">
            <span className="cursor-pointer hover:text-white" onClick={() => window.location.hash = '#/home'}>Home</span>
            <span>/</span>
            <span className="text-slate-200">Contact</span>
          </div>

          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-accent uppercase mt-2">
            Get In Touch
          </span>
          
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mt-1 text-white max-w-3xl">
            Start with a confidential conversation.
          </h1>
          
          <p className="text-slate-300 text-[14px] md:text-[15px] leading-relaxed max-w-2xl font-light mt-2">
            Tell us what you are evaluating, protecting, or preparing for. Every engagement begins with a direct conversation  no pitch deck, no sales cycle.
          </p>
        </div>
      </section>

      {/* 2. FORM & INFORMATION SECTION */}
      <section className="bg-white py-16 md:py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col items-start">
                <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-blue uppercase">
                  Contact
                </span>
                <div className="w-12 h-[3px] bg-brand-blue mt-2" />
              </div>

              <p className="text-brand-muted text-[13.5px] leading-relaxed font-light mt-2">
                If EVERSTONE can help, we will tell you how. If we are not the right fit, we will tell you that too. All inquiries are handled directly by the firm's founder.
              </p>

              <h4 className="font-sans font-bold text-slate-800 uppercase tracking-wider text-[11px] mt-4">
                Founder & Manufacturing Bankability Advisor
              </h4>

              {/* Bullets */}
              <div className="flex flex-col gap-8 mt-2">
                
                {/* Bullet 1 */}
                <div className="flex flex-col gap-1">
                  <h5 className="text-brand-blue font-bold text-[12px] uppercase tracking-wider">
                    Manufacturing Operational Due Diligence
                  </h5>
                  <p className="text-brand-muted font-light text-[12.5px] leading-relaxed mt-0.5">
                    For investors, buyers, and lenders evaluating a factory before committing capital
                  </p>
                </div>

                {/* Bullet 2 */}
                <div className="flex flex-col gap-1">
                  <h5 className="text-brand-blue font-bold text-[12px] uppercase tracking-wider">
                    Bankability Audits
                  </h5>
                  <p className="text-brand-muted font-light text-[12.5px] leading-relaxed mt-0.5">
                    For manufacturers preparing for financing, acquisition, or customer qualification
                  </p>
                </div>

                {/* Bullet 3 */}
                <div className="flex flex-col gap-1">
                  <h5 className="text-brand-blue font-bold text-[12px] uppercase tracking-wider">
                    Operational Leadership Coaching
                  </h5>
                  <p className="text-brand-muted font-light text-[12.5px] leading-relaxed mt-0.5">
                    For plant managers, quality leaders, and operations executives
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column (Span 7) - Form Container */}
            <div className="lg:col-span-7 bg-white relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4 bg-slate-50 border border-slate-200 p-8 animate-in fade-in duration-300">
                  <span className="font-serif text-2xl font-bold text-brand-navy">Inquiry Sent</span>
                  <p className="text-brand-muted text-[13.5px] max-w-sm font-light mt-1">
                    Thank you. We review all inquiries immediately. The founder will respond to your corporate email within 4 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[12px] font-bold text-brand-blue hover:text-brand-blue-hover cursor-pointer underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Two column Name / Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border border-slate-200 p-3.5 rounded-none focus:outline-none focus:border-brand-blue text-[13.5px] bg-[#fcfdfe] focus:bg-white transition-colors placeholder:text-slate-400 placeholder:font-light"
                        placeholder="Full name"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border border-slate-200 p-3.5 rounded-none focus:outline-none focus:border-brand-blue text-[13.5px] bg-[#fcfdfe] focus:bg-white transition-colors placeholder:text-slate-400 placeholder:font-light"
                        placeholder="your@company.com"
                      />
                    </div>
                  </div>

                  {/* Two column Company / Role */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="border border-slate-200 p-3.5 rounded-none focus:outline-none focus:border-brand-blue text-[13.5px] bg-[#fcfdfe] focus:bg-white transition-colors placeholder:text-slate-400 placeholder:font-light"
                        placeholder="Company or firm name"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="role" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                        Your Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="border border-slate-200 p-3.5 rounded-none focus:outline-none focus:border-brand-blue text-[13.5px] bg-[#fcfdfe] focus:bg-white transition-colors placeholder:text-slate-400 placeholder:font-light"
                        placeholder="e.g. CEO, VP Operations, Partner"
                      />
                    </div>
                  </div>

                  {/* Dropdown service need */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="interest" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                      What do you need?
                    </label>
                    <select
                      id="interest"
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="border border-slate-200 p-3.5 rounded-none focus:outline-none focus:border-brand-blue text-[13.5px] bg-[#fcfdfe] focus:bg-white transition-colors text-slate-700 font-light"
                    >
                      <option value="">Select a service</option>
                      <option value="odd">Manufacturing Operational Due Diligence</option>
                      <option value="audit">Bankability Audits</option>
                      <option value="coaching">Operational Leadership Coaching</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border border-slate-200 p-3.5 rounded-none focus:outline-none focus:border-brand-blue text-[13.5px] bg-[#fcfdfe] focus:bg-white transition-colors resize-none placeholder:text-slate-400 placeholder:font-light"
                      placeholder="Describe what you are evaluating, preparing for, or trying to understand about your factory or acquisition target."
                    />
                  </div>

                  {/* Send Inquiry Button */}
                  <button
                    type="submit"
                    className="bg-[#051b33] hover:bg-black text-white text-[13px] font-bold py-3.5 px-8 rounded-none w-fit transition-all-custom cursor-pointer uppercase tracking-wider shadow-sm mt-2 active:scale-95 text-center"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Confidential Notice */}
          <div className="w-full text-slate-400 text-[11px] leading-relaxed font-light mt-4">
            All inquiries are treated as confidential. No information shared in this form will be used for marketing or disclosed to third parties.
          </div>

        </div>
      </section>
    </div>
  )
}
