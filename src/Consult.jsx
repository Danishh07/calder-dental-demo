import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useShade } from './shade'
import { Btn, Wrap, Reveal, ImgReveal } from './ui'
import entrance from './assets/entrance.webp'

const fld = 'w-full rounded-xl border border-[#4a555c] bg-[#2b3136] px-4 py-3.5 text-[17px] text-white placeholder:text-[#9aa5ab]'
export default function Consult() {
  const { shade } = useShade()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [done, setDone] = useState('')
  return (
    <section id="consult" data-tint="8" className="bg-graphite py-16 text-white md:py-28">
      <Wrap>
        <Reveal><h2 className="text-[clamp(52px,8vw,112px)] leading-none">Plan my smile.</h2></Reveal>
        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="max-w-[40ch] text-[#cbd2d6]">Start with a 45-minute consultation and 3D scan. $150, credited to your treatment.</p>
            <address className="mt-6 space-y-1 not-italic">1020 N Rush Street, Chicago, IL 60611<br />(312) 555-0187<br /><a href="mailto:hello@calder.example" className="underline underline-offset-4">hello@calder.example</a></address>
            <p className="mt-6 text-[15px] text-[#aab4ba]">Monday to Thursday, 8am to 6pm<br />Friday, 8am to 2pm. Saturday and Sunday, closed</p>
            <ImgReveal src={entrance} alt="A stone brownstone entrance with warmly lit windows on a Chicago street at dusk" w={1584} h={672} className="mt-10 aspect-[2.1/1]" />
          </div>
          <form noValidate className="grid content-start gap-5" onSubmit={handleSubmit((d) => { setDone(`Thank you, ${d.name.split(' ')[0]}. This is a demo, so no request was sent.`); reset() })}>
            <label className="grid gap-2 text-[15px]">Name
              <input className={fld} placeholder="Your full name" autoComplete="name" {...register('name', { required: 'Please enter your name.' })} />
              {errors.name && <span role="alert" className="text-[#f2b8a8]">{errors.name.message}</span>}
            </label>
            <label className="grid gap-2 text-[15px]">Email
              <input className={fld} type="email" placeholder="you@example.com" autoComplete="email" {...register('email', { required: 'Please enter your email.', pattern: { value: /^\S+@\S+\.\S+$/, message: 'That email does not look right.' } })} />
              {errors.email && <span role="alert" className="text-[#f2b8a8]">{errors.email.message}</span>}
            </label>
            <label className="grid gap-2 text-[15px]">I'm interested in
              <select className={fld} {...register('interest')}>
                {['Smile design consultation', 'Porcelain veneers', 'Whitening', 'Clear aligners', 'Bonding and contouring'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <div className="flex items-center gap-3"><span className="h-[26px] w-[18px] rounded-t-full rounded-b-[4px]" style={{ background: shade.hex }} />Target shade: {shade.code}</div>
            <Btn p className="w-fit">Request my consult</Btn>
            <p role="status" className="min-h-[1.5em] text-[#bfe3dd]">{done}</p>
            <p className="max-w-[48ch] text-[15px] text-[#aab4ba]">We'll reply within one working day to arrange a time. Sending a request does not book an appointment.</p>
          </form>
        </div>
      </Wrap>
    </section>
  )
}
