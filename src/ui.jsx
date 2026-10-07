import { motion } from 'framer-motion'
export const EASE = [0.2, 0.7, 0.2, 1]

export const Wrap = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16 ${className}`}>{children}</div>
)
const base = 'inline-flex whitespace-nowrap items-center justify-center rounded-full border px-6 py-3.5 text-base font-medium transition-colors'
export const Btn = ({ p, className = '', ...x }) => (
  <button className={`${base} ${p ? 'border-teal bg-teal text-white hover:bg-[#185a57]' : 'border-graphite hover:bg-graphite hover:text-white'} ${className}`} {...x} />
)
export const BtnLink = ({ p, className = '', ...x }) => (
  <a className={`${base} ${p ? 'border-teal bg-teal text-white hover:bg-[#185a57]' : 'border-graphite hover:bg-graphite hover:text-white'} ${className}`} {...x} />
)
export const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease: EASE }}>{children}</motion.div>
)
export const ImgReveal = ({ src, alt, w, h, className = '' }) => (
  <motion.div className={`overflow-hidden ${className}`} initial={{ clipPath: 'inset(10% 0 0 0)' }}
    whileInView={{ clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1, ease: EASE }}>
    <motion.img src={src} alt={alt} width={w} height={h} loading="lazy" decoding="async" className="size-full object-cover"
      initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1.4, ease: EASE }} />
  </motion.div>
)
export const H2 = ({ children, className = '' }) => (
  <h2 className={`text-[clamp(36px,5vw,68px)] ${className}`}>{children}</h2>
)
