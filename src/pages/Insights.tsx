import { useState, useEffect } from 'react'
import { getInsights } from '../utils/storage'
import type { Insight } from '../utils/storage'

export default function Insights() {
  const [insights, setInsights] = useState<Insight[] | null>(null)

  useEffect(() => {
    getInsights()
      .then(data => setInsights(data))
      .catch(err => {
        console.error('Failed to load insights:', err)
        setInsights([])
      })
  }, [])

  // loading state
  if (insights === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-slate-400 text-sm animate-pulse">
          Loading insights...
        </div>
      </div>
    )
  }

  // now safe to use
  const topCards = insights.filter(i => i.isTop)
  const bottomCards = insights.filter(i => !i.isTop)

  return (
    <div className="w-full flex flex-col font-sans">

      {/* HERO */}
      <section className="relative bg-[#020e1a] text-white pt-24 pb-28 px-6 diagonal-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020e1a]/40 to-[#020e1a]/95 z-0" />

        <div className="relative max-w-7xl mx-auto z-10 flex flex-col items-start">
          <h1 className="font-serif text-4xl md:text-[54px] font-bold text-white mb-6">
            For people who decide.
          </h1>
        </div>
      </section>

      {/* EMPTY STATE */}
      {insights.length === 0 ? (
        <section className="min-h-140 flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <h2 className="text-slate-700 text-xl font-semibold mb-2">
              No insights available yet
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Insights will be displayed here soon.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* CARDS */}
          <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">

              {topCards.map((card, idx) => (
                <div key={idx}>{card.title}</div>
              ))}

              {bottomCards.map((card, idx) => (
                <div key={idx}>{card.title}</div>
              ))}

            </div>
          </section>
        </>
      )}
    </div>
  )
}