import React from 'react'

export default function RouteLoader({ active }) {
  if (!active) return null

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/90 px-6 py-5 shadow-xl">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#6b4f3a]/30 border-t-[#6b4f3a]" />
        <span className="text-sm font-semibold text-[#3d2a1d]">Loading...</span>
      </div>
    </div>
  )
}
