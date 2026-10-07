import { useRef, useState } from 'react'
import { useShade } from './shade'

const T = 'M8 46C8 14 28 2 52 2s44 12 44 44l-5 46c-12 8-72 8-84 0Z'
const JIT = [{ r: -4, y: 10, s: 0.96 }, { r: 3, y: -2, s: 1.04 }, { r: -2, y: 14, s: 0.94 }, { r: 4, y: 2, s: 1 }, { r: 3, y: 6, s: 0.97 }, { r: -3, y: 0, s: 1.03 }, { r: 2, y: 12, s: 0.95 }, { r: -4, y: 4, s: 1 }]
const mix = (hex, t) => {
  const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v + (255 - v) * t))
  return `rgb(${c.join(',')})`
}
const Row = ({ colors, jitter }) => (
  <svg viewBox="0 0 1040 150" preserveAspectRatio="xMidYMid meet" className="h-full w-full" aria-hidden="true">
    {colors.map((c, i) => {
      const j = jitter ? JIT[i] : { r: 0, y: 0, s: 1 }
      return <g key={i} transform={`translate(${14 + i * 126} ${j.y + 14}) rotate(${j.r} 52 60) scale(${j.s})`}><path d={T} fill={c} stroke="rgba(70,55,30,.2)" /></g>
    })}
  </svg>
)

export default function BeforeAfter() {
  const { shade } = useShade()
  const box = useRef(null)
  const [p, setP] = useState(50)
  const move = (e) => { const r = box.current.getBoundingClientRect(); setP(Math.min(96, Math.max(4, ((e.clientX - r.left) / r.width) * 100))) }
  const key = (e) => { if (e.key === 'ArrowLeft') setP((v) => Math.max(4, v - 4)); if (e.key === 'ArrowRight') setP((v) => Math.min(96, v + 4)) }
  return (
    <div>
      <div ref={box} className="relative aspect-[4/3] touch-none select-none overflow-hidden bg-[#E9ECEA] md:aspect-[16/6]"
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e) }} onPointerMove={(e) => { if (e.buttons) move(e) }}>
        <div className="absolute inset-0 px-[8%] py-[6%]"><Row jitter colors={['#DBC59A', '#E3D5B7', '#D2C7AE', '#DBC8A2', '#DBC59A', '#E1D2B4', '#D2C7AE', '#DBC8A2']} /></div>
        <div className="absolute inset-0 bg-white px-[8%] py-[6%]" style={{ clipPath: `inset(0 0 0 ${p}%)` }}>
          <Row colors={Array(8).fill(mix(shade.hex, 0.55))} />
        </div>
        <span className="absolute left-5 top-5 text-[15px] text-mute md:left-7 md:top-6">Before</span>
        <span className="absolute right-5 top-5 text-[15px] text-mute md:right-7 md:top-6">{shade.code} preview</span>
        <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-teal" style={{ left: `${p}%` }}>
          <div role="slider" tabIndex={0} aria-label="Compare before and after" aria-valuemin={4} aria-valuemax={96} aria-valuenow={Math.round(p)} onKeyDown={key}
            className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-teal bg-white text-teal shadow-sm">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 2 1.5 7 6 12M16 2l4.500 5L16 12M9.500 2v10M12.500 2v10" /></svg>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[15px] text-mute">Illustration. Real cases use patient photos shared with consent.</p>
    </div>
  )
}
