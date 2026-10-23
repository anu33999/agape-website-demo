import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Building, CheckCircle2, FileCheck2, Landmark, Minus, Plus, ShieldCheck, Utensils } from 'lucide-react'
import { formatINR, images, meals, org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero, SourceNote } from '../components/Blocks'
import Dialog from '../components/Dialog'
import DonationWidget from '../components/DonationWidget'
import { Button, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading } from '../components/ui'

const faqs = [
  { q: 'Is my donation tax-deductible?', a: `${org.taxNote} Agape issues the receipt after your gift is processed.` },
  { q: 'Can I choose where my money goes?', a: 'Yes. Choose a program in the donation form, or leave it as “where it’s needed most” so Agape can direct it to the most urgent needs.' },
  { q: 'How do monthly gifts work?', a: 'A monthly gift is charged automatically each month until you change or cancel it. It helps Agape plan care consistently across the year.' },
  { q: 'Can I donate rice, toiletries or supplies?', a: 'Yes — in-kind gifts like groceries, hygiene kits and school supplies are welcome. Please contact the team first so they can tell you what’s needed most.' },
]

export default function Donate() {
  useSeo('Donate', 'Give once, give monthly, or sponsor a meal for every child at Agape. Donations are eligible for 80G tax benefits.')
  const [params] = useSearchParams()
  const purpose = params.get('purpose') ?? undefined
  const frequency = params.get('frequency') === 'monthly' ? 'monthly' : 'one-time'

  return (
    <>
      <PageHero
        eyebrow="Donate to Agape"
        title="Give a child the care to thrive."
        lede="Every donation helps provide food, medicine, education and dedicated caretakers. Thank you for helping every child belong and grow."
      />

      <section id="donation-form" className="container-x scroll-mt-24 pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-20">
          <div className="relative z-10 -mt-16 self-start rounded-[22px] border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgb(76_22_11/0.55)] sm:p-9 md:-mt-24">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2 className="font-display text-[1.75rem] text-maroon-900">Make your gift</h2>
              <DemoTag>Simulated</DemoTag>
            </div>
            <DonationWidget initialPurpose={purpose} initialFrequency={frequency} />
          </div>

          <div className="pt-4 lg:pt-14">
            <Eyebrow>Where your gift goes</Eyebrow>
            <h2 className="display-md mt-4">Raising one child is a challenge. Caring for 200 takes a community.</h2>
            <p className="mt-5 text-[1.05rem] text-muted">
              Whether you give rice, toiletries or financial support, your generosity ensures these children receive the care and opportunities they deserve.
            </p>
            <ul className="mt-9 space-y-5">
              {[
                ['Nutrition', 'Balanced meals that strengthen immune systems and support treatment.'],
                ['Healthcare', 'Residential nurses, hospital care through KIMS, and an on-site dental clinic.'],
                ['Education', 'Agape School, the Bridge Program, and support through college.'],
                ['A safe home', 'Caregivers, housing, counselling and a family to belong to.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-rust" aria-hidden />
                  <div>
                    <p className="font-bold">{t}</p>
                    <p className="text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-[var(--radius-media)] bg-peach/60 p-5">
                <FileCheck2 size={22} className="shrink-0 text-maroon-800" aria-hidden />
                <p className="text-sm"><strong className="block text-ink">80G tax benefit</strong><span className="text-muted">Receipts issued by Agape.</span></p>
              </div>
              <div className="flex gap-3 rounded-[var(--radius-media)] bg-peach/60 p-5">
                <ShieldCheck size={22} className="shrink-0 text-maroon-800" aria-hidden />
                <p className="text-sm"><strong className="block text-ink">Secure checkout</strong><span className="text-muted">Handled by a payment provider on the live site.</span></p>
              </div>
            </div>
            <SafeImage src={images.toddler} alt="A young child eating a piece of bread" className="mt-10 hidden aspect-[16/10] md:block" />
          </div>
        </div>
      </section>

      <MealSponsorship />

      {/* Other ways */}
      <section className="container-x section-y">
        <SectionHeading eyebrow="Other ways to give" title="Cheque, bank transfer & in-kind gifts" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <Building size={26} className="text-rust" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">By cheque</h3>
            <p className="mt-2 text-muted">Make cheques payable to <strong className="text-ink">AGAPE</strong> and post them to the address below.</p>
            <p className="mt-4 text-sm text-muted">{org.address}</p>
          </div>
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <Landmark size={26} className="text-rust" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">Bank transfer</h3>
            <p className="mt-2 text-muted">Account name, number and IFSC would appear here once confirmed by Agape’s finance team.</p>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-muted">Account</dt><dd className="font-mono">XXXX XXXX XXXX</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted">IFSC</dt><dd className="font-mono">XXXX0000000</dd></div>
            </dl>
          </div>
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <Utensils size={26} className="text-rust" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">Groceries & supplies</h3>
            <p className="mt-2 text-muted">Rice, toiletries, books and school supplies are always welcome. Call {org.phone} to arrange a drop-off.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand/55 section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Giving, answered" />
          <div className="divide-y divide-maroon-900/15 border-y border-maroon-900/15">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md font-display text-xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-maroon-900/20 text-maroon-800 transition-transform group-open:rotate-45">
                    <Plus size={18} aria-hidden />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */

function MealSponsorship() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const [open, setOpen] = useState(false)
  const [occasion, setOccasion] = useState('')
  const total = meals.reduce((sum, m) => sum + (cart[m.name] ?? 0) * m.price, 0)
  const count = Object.values(cart).reduce((a, b) => a + b, 0)

  const change = (name: string, d: number) =>
    setCart((c) => {
      const n = Math.max(0, Math.min(10, (c[name] ?? 0) + d))
      const next = { ...c, [name]: n }
      if (!n) delete next[name]
      return next
    })

  return (
    <section id="meals" className="on-dark scroll-mt-20 bg-maroon-900 text-peach section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Sponsor a meal</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Turn your special day into a celebration for 200 children.</h2>
            <p className="lede mt-5">Birthdays, anniversaries, remembrance days — sponsor nourishing food for every child at Agape.</p>
          </div>
          <DemoTag>Prices as listed on Agape’s charity shop</DemoTag>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {meals.map((m, i) => {
            const qty = cart[m.name] ?? 0
            return (
              <Reveal as="li" key={m.name} delay={(i % 4) * 60} className={`flex flex-col overflow-hidden rounded-[var(--radius-media)] bg-maroon-950/50 ring-1 transition-shadow ${qty ? 'ring-gold' : 'ring-line-dark'}`}>
                <SafeImage src={m.image} alt="" className="aspect-[4/3] rounded-none!" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl text-white">{m.name}</h3>
                  <p className="mt-1 text-sm text-peach/70">{m.detail}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <p className="text-lg font-bold text-gold">{formatINR(m.price)}</p>
                    {qty ? (
                      <div className="flex items-center gap-1" role="group" aria-label={`Quantity of ${m.name}`}>
                        <button type="button" onClick={() => change(m.name, -1)} className="grid h-9 w-9 place-items-center rounded-[8px] border border-peach/30 hover:bg-white/10" aria-label={`Remove one ${m.name}`}>
                          <Minus size={16} aria-hidden />
                        </button>
                        <span className="w-7 text-center font-bold text-white" aria-live="polite">{qty}</span>
                        <button type="button" onClick={() => change(m.name, 1)} className="grid h-9 w-9 place-items-center rounded-[8px] border border-peach/30 hover:bg-white/10" aria-label={`Add one more ${m.name}`}>
                          <Plus size={16} aria-hidden />
                        </button>
                      </div>
                    ) : (
                      <button type="button" onClick={() => change(m.name, 1)} className="btn btn-outline-light btn-sm min-h-[38px]! px-3.5!">
                        <Plus size={15} aria-hidden /> Add <span className="sr-only">{m.name}</span>
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>

        {/* Sticky summary */}
        <div className="sticky bottom-4 z-20 mt-10">
          <div className={`flex flex-col gap-4 rounded-[18px] bg-ivory p-4 text-ink shadow-[0_20px_50px_-20px_rgb(0_0_0/0.6)] transition-all sm:flex-row sm:items-center sm:justify-between sm:p-5 ${count ? 'opacity-100' : 'opacity-95'}`}>
            <p aria-live="polite" className="px-1">
              {count ? (
                <>
                  <strong>{count}</strong> meal sponsorship{count > 1 ? 's' : ''} · <strong className="font-display text-xl text-maroon-900">{formatINR(total)}</strong>
                </>
              ) : (
                <span className="text-muted">Add a meal above to sponsor it.</span>
              )}
            </p>
            <Button variant="primary" disabled={!count} onClick={() => setOpen(true)}>
              Sponsor {count ? formatINR(total) : 'a meal'}
            </Button>
          </div>
        </div>
        <SourceNote className="mt-4 text-peach/55!">Menu and prices from agapeindia.org’s charity shop — confirm with Agape before launch.</SourceNote>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} title="Your meal sponsorship">
        <ul className="divide-y divide-line">
          {meals.filter((m) => cart[m.name]).map((m) => (
            <li key={m.name} className="flex justify-between gap-4 py-3">
              <span>{m.name} × {cart[m.name]}</span>
              <strong>{formatINR(m.price * (cart[m.name] ?? 0))}</strong>
            </li>
          ))}
        </ul>
        <p className="mt-3 flex justify-between border-t-2 border-maroon-900 pt-3 font-display text-2xl text-maroon-900">
          <span>Total</span> <span>{formatINR(total)}</span>
        </p>
        <label htmlFor="occasion" className="field-label mt-6">Occasion (optional)</label>
        <input id="occasion" className="field" placeholder="e.g. Anaya’s 8th birthday" value={occasion} onChange={(e) => setOccasion(e.target.value)} />
        <p className="mt-6 rounded-[var(--radius-ui)] border border-dashed border-gold/70 bg-gold-soft/40 p-4 text-sm text-[#6b4a0d]">
          <strong>Demonstration only.</strong> On the live site, this would continue to secure checkout and let the team schedule your meal date.
        </p>
        <Button variant="primary" block className="mt-5" onClick={() => { setOpen(false); setCart({}); setOccasion('') }}>
          Finish demo
        </Button>
      </Dialog>
    </section>
  )
}
