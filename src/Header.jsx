import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BtnLink, EASE } from './ui'
import { links } from './data'

const Tooth = () => (
  <svg width="24" height="30" viewBox="0 0 24 30" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
    <path d="M7.5 3C4 3 2 5.600 2 9c0 3.400 1.800 5.200 2.400 9 .5 3.200 1 9 3.200 9 1.800 0 1.800-5 4.400-5s2.600 5 4.400 5c2.200 0 2.700-5.800 3.200-9 .6-3.800 2.400-5.600 2.400-9 0-3.400-2-6-5.500-6-2.300 0-2.800 1.200-4.500 1.200S9.800 3 7.500 3Z" />
  </svg>
)

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-porcelain/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-5 md:h-[84px] md:px-10 lg:px-16">
        <a href="#top" className="flex items-center gap-2.5 text-[26px] font-medium tracking-[-0.03em]" onClick={() => setOpen(false)}>
          <Tooth />Calder<span className="hidden max-w-[5ch] text-[15px] font-normal leading-[1.1] text-mute md:block">Dental studio</span>
        </a>
        <nav aria-label="Main" className="hidden gap-9 md:flex">
          {links.map(([h, l]) => <a key={h} href={h} className="text-base hover:text-teal">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <BtnLink p href="#consult" className="!px-5 !py-2.5 md:!px-6 md:!py-3.5"><span className="md:hidden">Book</span><span className="hidden md:inline">Book a consult</span></BtnLink>
          <button className="px-1 py-2 text-base md:hidden" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="drawer" aria-label="Mobile" className="fixed inset-x-0 bottom-0 top-[72px] z-20 flex flex-col justify-between bg-porcelain px-5 pb-10 pt-8 md:hidden"
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, ease: EASE }}>
            <ul className="flex flex-col">
              {links.map(([h, l], i) => (
                <motion.li key={h} className="border-b border-line" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: EASE }}>
                  <a href={h} onClick={() => setOpen(false)} className="block py-4 text-[34px] tracking-[-0.03em]">{l}</a>
                </motion.li>
              ))}
            </ul>
            <BtnLink p href="#consult" onClick={() => setOpen(false)} className="w-full">Book a consult</BtnLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
