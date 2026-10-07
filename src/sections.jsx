import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SHADES, useShade } from './shade'
import { BtnLink, EASE, H2, ImgReveal, Reveal, Wrap } from './ui'
import { treatments, steps, cost, faq } from './data'
import BeforeAfter from './BeforeAfter'
import clinic from './assets/clinic.webp'
import scanner from './assets/scanner.webp'
import ceramist from './assets/ceramist.webp'
import doctor from './assets/doctor.webp'

export function Hero() {
  const { pick, shade, choose, hover } = useShade()
  return (
    <section id="top" data-tint="hero" className="pb-12 pt-10 md:pb-20 md:pt-16">
      <Wrap>
        <h1 className="max-w-[18ch] text-[clamp(52px,7.4vw,108px)] leading-[.98] tracking-[-0.035em]">
          {['Smiles designed to', 'look like yours.'].map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.1 + i * 0.12, ease: EASE }}>{l}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: EASE }}>
          <p className="max-w-[36ch] text-[19px] text-mute">Cosmetic dentistry in Chicago's Gold Coast. We plan every smile with a digital preview before we touch a tooth.</p>
          <div className="flex flex-wrap gap-3"><BtnLink p href="#consult">Plan my smile</BtnLink><BtnLink href="#preview">See the preview</BtnLink></div>
        </motion.div>
        <div role="group" aria-label="Choose a shade" className="-mx-5 mt-12 flex scroll-pl-5 snap-x gap-2.5 overflow-x-auto px-5 pb-2 pt-6 md:mx-0 md:mt-16 md:gap-3 md:overflow-visible md:px-0">
          {SHADES.map((s, i) => (
            <motion.button key={s.code} aria-pressed={pick === i} aria-label={`Shade ${s.code}`} onClick={() => choose(i)} onMouseEnter={() => hover(i)} onMouseLeave={() => hover(null)}
              className="w-[66px] shrink-0 snap-start text-center md:w-auto md:flex-1" initial={{ y: 56, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.85, delay: 0.5 + i * 0.05, ease: EASE }}>
              <motion.span className="relative block h-[104px] rounded-b-[10px] rounded-t-[48px] md:h-[118px]"
                style={{ background: `linear-gradient(180deg, color-mix(in srgb, ${s.hex} 50%, #fff), ${s.hex} 60%)`, boxShadow: pick === i ? '0 0 0 1px #1F6F6B' : 'inset 0 -8px 14px rgba(80,60,20,.06)' }}
                animate={{ y: pick === i ? -12 : 0 }} whileHover={{ y: -14 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                {pick === i && <span className="absolute bottom-3 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-teal" />}
              </motion.span>
              <span className={`mt-3 block text-[15px] ${pick === i ? 'text-teal' : 'text-mute'}`}>{s.code}</span>
            </motion.button>
          ))}
        </div>
        <p aria-live="polite" className="mt-5 min-h-[3.2em] text-[17px] text-mute md:min-h-0">{shade.code} — {shade.note} A starting point, not a prescription.</p>
      </Wrap>
      <Wrap className="!px-0 md:!px-0 lg:!px-0 mt-10 md:mt-14">
        <ImgReveal src={clinic} alt="A bright, minimalist clinic reception with a timber desk, tall windows and soft grey armchairs" w={1584} h={672} className="aspect-[5/3] md:aspect-[2.4/1]" />
        <p className="mt-5 px-5 text-[15px] text-mute md:px-10 lg:px-16">A quiet place to make a considered decision. Gold Coast, Chicago.</p>
      </Wrap>
    </section>
  )
}

export function Treatments() {
  return (
    <section id="treatments" data-tint="1" className="py-16 md:py-28"><Wrap>
      <Reveal><H2 className="max-w-[14ch]">Four ways we change a smile.</H2></Reveal>
      <div className="mt-10 border-t border-line md:mt-14">
        {treatments.map(([n, d, v, p], i) => (
          <Reveal key={n} delay={i * 0.05}>
            <div className="grid gap-3 border-b border-line py-7 md:grid-cols-[1fr_1.1fr_.6fr] md:items-baseline md:gap-10 md:py-8">
              <h3 className="text-[clamp(26px,2.6vw,34px)]">{n}</h3>
              <p className="max-w-[44ch] text-mute">{d}</p>
              <p>{v}<span className="mt-1 block text-[15px] text-mute">{p}</span></p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap></section>
  )
}

export function Preview() {
  return (
    <section id="preview" data-tint="2" className="pb-16 md:pb-28"><Wrap>
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <Reveal><H2 className="max-w-[10ch]">See it before you decide.</H2></Reveal>
        <Reveal delay={0.1}><p className="max-w-[42ch] text-mute md:ml-auto">We test shape, proportion and shade on your scan. You review the design before treatment begins.</p></Reveal>
      </div>
      <Reveal className="mt-10 md:mt-14"><BeforeAfter /></Reveal>
    </Wrap></section>
  )
}

export function Process() {
  const { shade } = useShade()
  return (
    <section id="process" data-tint="4" className="bg-white py-16 md:py-28"><Wrap>
      <Reveal><H2 className="max-w-[14ch]">What a veneer case looks like.</H2></Reveal>
      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-4 md:gap-8">
        {steps(shade.code).map(([t, h, b], i) => (
          <Reveal key={h} delay={i * 0.08} className="border-t border-line pt-5">
            <p className="text-[15px] text-teal">{t}</p><h3 className="mt-3 text-[28px]">{h}</h3><p className="mt-3 text-mute">{b}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2">
        <figure><ImgReveal src={scanner} alt="Gloved hands holding an intraoral 3D scanner beside a window" w={1584} h={672} className="aspect-[16/10] md:aspect-[2.2/1]" /><figcaption className="mt-4 text-[15px] text-mute">The scan records every surface, without impressions.</figcaption></figure>
        <figure><ImgReveal src={ceramist} alt="A ceramist's hands layering porcelain onto a veneer at a lab bench" w={1584} h={672} className="aspect-[16/10] md:aspect-[2.2/1]" /><figcaption className="mt-4 text-[15px] text-mute">Porcelain is layered by hand to match the agreed design.</figcaption></figure>
      </div>
    </Wrap></section>
  )
}

export function Doctor() {
  return (
    <section id="doctor" data-tint="3" className="py-16 md:py-28"><Wrap>
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_.85fr] md:gap-20">
        <div>
          <Reveal><H2 className="max-w-[12ch]">One dentist designs every case.</H2></Reveal>
          <Reveal delay={0.1}><blockquote className="mt-10 max-w-[26ch] text-[clamp(26px,2.8vw,38px)] leading-[1.18] tracking-[-0.02em]">“I would rather talk you out of a veneer than put one on a tooth that did not need it.”</blockquote></Reveal>
          <Reveal delay={0.15} className="mt-10 max-w-[44ch] border-t border-line pt-5">
            <p>Dr. Elise Calder, DDS</p><p className="text-mute">14 years in cosmetic dentistry</p>
            <p className="mt-2 text-mute">From the first scan to final placement, your plan stays with the same dentist.</p>
          </Reveal>
        </div>
        <ImgReveal src={doctor} alt="Dr. Elise Calder in a white coat, seated in a bright treatment room" w={928} h={1152} className="aspect-[4/5]" />
      </div>
    </Wrap></section>
  )
}

export function Cost() {
  return (
    <section id="cost" data-tint="5" className="py-16 md:py-24"><Wrap>
      <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-20">
        <Reveal>
          <H2>Cost, in writing.</H2>
          <p className="mt-8 max-w-[44ch] text-mute">After your scan, you receive a written estimate with every tooth, visit and fee listed. Nothing begins until you approve it.</p>
          <p className="max-w-[44ch] text-mute">Monthly plans are available through an independent financing partner, subject to approval. We explain the term, APR and total cost before you decide.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="border-t border-line">
            {cost.map(([n, s, p]) => (
              <div key={n} className="flex items-baseline justify-between gap-6 border-b border-line py-5"><dt>{n}<span className="mt-1 block text-[15px] text-mute">{s}</span></dt><dd>{p}</dd></div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Wrap></section>
  )
}

export function Faq() {
  const { shade } = useShade()
  const [open, setOpen] = useState(0)
  return (
    <section data-tint="6" className="py-16 md:py-24"><Wrap>
      <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
        <Reveal><H2 className="max-w-[10ch]">A few things you may be asking.</H2></Reveal>
        <div className="border-t border-line">
          {faq(shade.code).map(([q, a], i) => (
            <div key={q} className="border-b border-line">
              <button className="flex w-full items-center justify-between gap-6 py-6 text-left text-[22px] tracking-[-0.02em]" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {q}<motion.span className="text-teal" animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3 }}>+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="overflow-hidden">
                    <p className="max-w-[56ch] pb-6 text-mute">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Wrap></section>
  )
}

export const Footer = () => (
  <footer className="py-8 text-[15px] text-mute"><Wrap>© 2026 Calder Dental Studio. A dental website concept. All names, prices and clinic details are fictional.</Wrap></footer>
)
