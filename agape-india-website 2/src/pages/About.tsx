import { images, org, publishedStats, values } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading, Underlined } from '../components/ui'

const timeline = [
  { year: '2003', text: `Agape is founded in Hyderabad by ${org.founder} with six children who had lost their parents to AIDS.` },
  { year: '2004', text: 'The Children’s Home is established — a family-like residence where belonging matters as much as daily care.' },
  { year: '2005', text: 'Agape School opens, so no child is turned away from education because of HIV stigma.' },
  { year: 'Today', text: 'Around 200 children in care, a school from LKG to 10th, young people in college, and more than 1,000 lives transformed.' },
]

const leadership = [
  { name: org.founder, role: 'Founder', note: 'Founded Agape in 2003.' },
  { name: 'Name to be confirmed', role: 'Director / Head of Operations', note: 'Placeholder — profile supplied by Agape.' },
  { name: 'Name to be confirmed', role: 'Principal, Agape School', note: 'Placeholder — profile supplied by Agape.' },
  { name: 'Name to be confirmed', role: 'Head of Child Care & Health', note: 'Placeholder — profile supplied by Agape.' },
]

export default function About() {
  useSeo('About us', `Founded in ${org.founded} by ${org.founder}, Agape is a registered NGO and Child Care Institution in Hyderabad caring for children affected by HIV/AIDS.`)
  return (
    <>
      <PageHero
        eyebrow="Namaste — welcome to Agape"
        title={<>Where every smile tells a story of <Underlined>hope.</Underlined></>}
        lede="A registered NGO and Child Care Institution in Hyderabad, giving children affected by HIV/AIDS a loving home, an education, healthcare and a future since 2003."
        image={images.campus}
        imageAlt="Children in festive dress standing on the steps of the Agape school building"
      />

      {/* Story */}
      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="display-lg mt-4">It began with six children, and a refusal to look away.</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-[1.05rem] text-muted">
            <p>
              Agape was founded in {org.founded} in Hyderabad by {org.founder}. What began with six children who had lost their parents to AIDS has grown into a sanctuary for around 200 children — a loving home with education, healthcare and hope for the future.
            </p>
            <p>
              Many of our children are full orphans; others have no family able to support them. To break the stigma surrounding AIDS and ensure every child has access to quality education, Agape established its own school in 2005.
            </p>
            <p>
              Today, Agape supports children at every stage of life — from early childhood through higher education and even marriage — empowering them to become independent and self-sufficient. We provide food, shelter, medical care, education and counselling, so each child can reach their full potential.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line lg:grid-cols-4">
          {publishedStats.map((s) => (
            <div key={s.label} className="bg-ivory p-6 md:p-8">
              <p className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-maroon-800">
                {s.display ?? s.value}
                <span className="text-rust">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <SourceNote className="mt-3">Figures as published on agapeindia.org — to be verified before launch.</SourceNote>
      </section>

      {/* Mission & vision */}
      <section className="bg-peach/55 section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <SafeImage src={images.serving} alt="A caregiver serving a meal to a smiling girl in Agape’s kitchen" className="shape-leaf aspect-[5/4]" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Mission</Eyebrow>
            <p className="font-display mt-4 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-snug text-ink">
              To ensure every child in our care is treated with dignity, protected from discrimination, and given quality education, healthcare, nutrition, and a safe and supportive home.
            </p>
            <hr className="rule my-9" />
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-4 text-[1.05rem] text-muted">
              Because every child deserves a family, a future, and the chance to thrive — we want every Agape child to grow into an informed, confident adult who can protect, educate and support the next generation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-x section-y">
        <SectionHeading eyebrow="What we stand for" title="The values that shape every day at Agape" />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="border-t-2 border-maroon-800 pt-6">
              <span className="font-display text-sm text-rust">0{i + 1}</span>
              <h3 className="display-sm mt-2">{v.title}</h3>
              <p className="mt-3 text-muted">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="on-dark bg-maroon-900 text-peach section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Milestones</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Two decades of showing up.</h2>
            <p className="lede mt-5">From a handful of children to a home, a school and a community of care.</p>
          </div>
          <ol className="relative border-l border-line-dark">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 90} className="relative pb-11 pl-9 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-gold bg-maroon-900" />
                <p className="font-display text-3xl text-gold">{t.year}</p>
                <p className="mt-2 max-w-lg text-peach/85">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title="Not an institution — a family."
              lede="Children often arrive from deeply broken backgrounds. That is why our work goes beyond shelter, healthcare and nutrition to education, emotional healing and restoring hope."
            />
            <ul className="mt-9 space-y-4">
              {[
                'Older children mentor younger ones, so care flows both ways.',
                'Medical care, nutrition and counselling work together, not in silos.',
                'Every milestone — a first step, a first word, an exam passed — is celebrated.',
                'Support continues after 18: through college, careers and beyond.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[1.02rem]">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-rust" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/programs">See our programs</ButtonLink>
              <ButtonLink to="/impact" variant="secondary" icon="arrow">Our impact</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4 self-center">
            <SafeImage src={images.playground} alt="A young girl climbing playground bars" className="aspect-[3/4]" />
            <SafeImage src={images.readingBoys} alt="Two boys reading picture books" className="mt-12 aspect-[3/4]" />
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-sand/55 section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Leadership" title="The people who keep Agape running" />
            <DemoTag>Placeholder profiles</DemoTag>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p, i) => (
              <li key={i} className="rounded-[var(--radius-media)] bg-ivory p-6">
                <div aria-hidden className="grid aspect-square w-20 place-items-center rounded-full bg-peach font-display text-2xl text-maroon-700">
                  {p.name === org.founder ? 'LV' : '—'}
                </div>
                <h3 className="font-display mt-5 text-xl">{p.name}</h3>
                <p className="mt-1 text-sm font-bold text-rust">{p.role}</p>
                <p className="mt-3 text-sm text-muted">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  )
}
