import { useEffect, useState } from "react"
import { getInsights } from "../utils/storage"
import type { Insight } from "../utils/storage"

export default function InsightDetails() {

  const [insight, setInsight] = useState<Insight | null>(null)

  useEffect(() => {

    const id =  Number(window.location.pathname.split("/")[2])

    getInsights()
      .then(data => {

        const selected = data.find(
          item => item.id === id
        )

        setInsight(selected || null)

      })

  }, [])





  return (
    <div className="min-h-screen bg-white">

      <section className="bg-[#020e1a] text-white py-24 px-6">

        <div className="max-w-4xl mx-auto">

          <span className="text-[#4a9eff] text-xs font-bold tracking-widest">
            {insight?.category}
          </span>


          <h1 className="font-serif text-4xl  text-amber-50 md:text-5xl font-bold mt-6">
            {insight?.title}
          </h1>


          <p className="text-slate-400 mt-6">
            Published { insight?.created_at ? new Date(insight.created_at).toDateString(): ""}
          </p>

        </div>

      </section>


      <article className="max-w-4xl mx-auto px-6 py-16">

        <p className="text-lg leading-relaxed text-slate-700">
          {insight?.desc}
        </p>


        {/* Later you can add full article content here */}

      </article>

          <section className="bg-[#0e5db3] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl md:text-[46px] font-bold leading-tight max-w-3xl text-white">
            Ready to apply these ideas to your factory?
          </h2>
          <p className="text-blue-100 text-base md:text-lg font-light max-w-2xl leading-relaxed mb-6">
            Every engagement starts with a direct conversation no pitch deck, no sales cycle.
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