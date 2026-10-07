import { createContext, useContext, useEffect, useRef, useState } from 'react'

export const SHADES = [
  { code: 'B1', hex: '#F1ECDD', note: 'a bright, soft ivory.' },
  { code: 'A1', hex: '#EBE3CF', note: 'a soft ivory with a gentle warmth.' },
  { code: 'B2', hex: '#E7DDC4', note: 'a slightly deeper ivory with a golden note.' },
  { code: 'D2', hex: '#DFD7CB', note: 'a cooler, greyer white that suits fair skin.' },
  { code: 'A2', hex: '#E3D5B7', note: 'balanced and warm, close to healthy natural enamel.' },
  { code: 'C1', hex: '#DBD2BE', note: 'a muted, neutral white.' },
  { code: 'D3', hex: '#D6CBB8', note: 'a soft taupe with a cool edge.' },
  { code: 'C2', hex: '#D2C7AE', note: 'a greyish, lived-in natural tone.' },
  { code: 'A3', hex: '#DBC8A2', note: 'a warmer, richer tone, close to many natural smiles.' },
  { code: 'B3', hex: '#DBC59A', note: 'golden and bright, the warmest on the strip.' },
]

const Ctx = createContext(null)
export const useShade = () => useContext(Ctx)

export function ShadeProvider({ children }) {
  const [pick, setPick] = useState(0)
  const [tint, setTint] = useState(0)
  const pickRef = useRef(0)
  useEffect(() => { document.documentElement.style.setProperty('--tint', SHADES[tint].hex) }, [tint])
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { const d = e.target.dataset.tint; setTint(d === 'hero' ? pickRef.current : +d) }
      }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    document.querySelectorAll('[data-tint]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])
  const choose = (i) => { pickRef.current = i; setPick(i); setTint(i) }
  const hover = (i) => setTint(i == null ? pickRef.current : i)
  return <Ctx.Provider value={{ pick, shade: SHADES[pick], tintShade: SHADES[tint], choose, hover }}>{children}</Ctx.Provider>
}
