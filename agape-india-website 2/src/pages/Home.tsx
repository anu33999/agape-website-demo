import { Link } from 'react-router-dom'
import { ArrowUpRight, FileText, HandHeart, Building2, Users, ShieldCheck, Quote, Heart, Home as HomeIcon, Sparkles, School, GraduationCap, HeartHandshake, Stethoscope, Utensils } from 'lucide-react'
import { documents, formatINR, images, org, programs, publishedStats, steps, stories, type Program } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { ContourLines } from '../components/Footer'
import { StoryCard, SourceNote } from '../components/Blocks'
import DonationWidget from '../components/DonationWidget'
import { ButtonLink, CountUp, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading, TextLink, Underlined } from '../components/ui'

export default function Home() {
  useSeo('', 'Agape is a registered NGO, home and school in Hyderabad caring for around 200 children affected by HIV/AIDS — with education, healthcare, nutrition and a family to belong to.')
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <Statement />
      <ProgramsGrid />
      <Causes />
      <FeaturedStory />
      <HowChangeHappens />
      <GetInvolvedTeaser />
      <DonateSection />
      <Transparency />
      <LatestStories />
    </>
  )
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-maroon-900 text-peach">
      {/* Organic sweep + contour lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <path d="M640 900 C 760 640, 820 420, 1040 300 C 1210 205, 1330 120, 1440 40 L 1440 900 Z" fill="var(--color-maroon-800)" />
      </svg>
      <ContourLines className="pointer-events-none absolute -bottom-10 -left-28 w-[620px] opacity-[0.2]" stroke="#d9a27a" />

      <div className="container-x relative grid items-center gap-16 pb-20 pt-32 md:pt-44 lg:min-h-[min(100svh,940px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        <div className="max-w-[640px]">
          <p className="font-script animate-fade-in text-[1.7rem] text-gold">Helping today, healing tomorrow</p>
          <h1 className="display-xl mt-3 text-white">
            Every child deserves a family, <Underlined>a future</Underlined> and the chance to thrive.
          </h1>
          <p className="lede mt-7 max-w-[540px]">
            Agape is home to more than 200 children affected by HIV/AIDS in Hyderabad. We give them safety, healthcare, nutrition, an education — and, above all, a place to belong.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/donate" variant="primary">Donate now</ButtonLink>
            <ButtonLink to="/programs" variant="outline-light" icon="arrow">Explore our work</ButtonLink>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3" aria-hidden>
              {[images.portraitGreen, images.mealGirl, images.heroInset].map((src) => (
                <img key={src} src={src} alt="" className="h-11 w-11 rounded-full object-cover ring-[3px] ring-maroon-900" />
              ))}
            </div>
            <p className="text-sm leading-snug text-peach/80">
              <strong className="block text-white">1,000+ lives transformed</strong>
              since {org.founded}, from cradle to college
            </p>
          </div>
        </div>

        {/* Organic photo composition */}
        <div className="relative mx-auto w-full max-w-[540px] lg:mr-0">
          <div aria-hidden className="blob-morph absolute inset-[4%_0_6%_8%] bg-rust" />
          <div aria-hidden className="blob-a absolute inset-[0_6%_10%_2%] border-2 border-dashed border-gold/50" />
          <SafeImage
            src={images.heroPortrait}
            alt="A smiling young girl in a bright yellow dress at Agape"
            eager
            className="blob-c relative mx-auto aspect-[4/4.6] w-[86%] shadow-[0_40px_70px_-35px_rgb(0_0_0/0.7)]"
          />
          <Spark className="absolute -top-4 right-2 w-14 text-gold" />
          <svg viewBox="0 0 120 60" className="absolute -left-6 top-[18%] hidden w-28 text-gold sm:block" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M6 50 C 30 10, 70 6, 104 22" />
            <path d="M92 10 L 106 22 L 90 30" />
          </svg>
          <div className="float-y absolute -bottom-4 left-0 w-[38%] sm:-left-4">
            <SafeImage
              src={images.heroInset}
              alt="Two young girls in school uniform reading together"
              eager
              className="aspect-square rounded-full! ring-[6px] ring-maroon-900"
            />
          </div>
          <div className="absolute -right-2 bottom-[12%] rotate-[-4deg] rounded-[16px] bg-ivory px-5 py-3 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.6)] sm:-right-6">
            <p className="font-script flex items-center gap-2 text-[1.75rem] text-maroon-800">
              <Heart size={20} className="fill-rust text-rust" aria-hidden /> Small acts,
            </p>
            <p className="font-script -mt-1 pl-7 text-[1.75rem] text-rust">big change</p>
          </div>
        </div>
      </div>
    </section>
  )
}


function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" className={className} aria-hidden>
      <path d="M14 30 L 6 12" />
      <path d="M28 26 L 40 6" />
      <path d="M36 40 L 54 36" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */

function Statement() {
  return (
    <section id="statement" className="container-x scroll-mt-24 pb-24 md:pb-32">
      <Reveal>
        <p className="font-display max-w-[980px] text-[clamp(1.7rem,3.4vw,2.85rem)] leading-[1.22] text-ink">
          Agape is not just an institution — it is a family. <span className="text-maroon-700">Children arrive carrying the loss of parents and the scars of poverty.</span>{' '}
          They stay to heal, to learn, and to grow up with dignity.
        </p>
      </Reveal>
    </section>
  )
}

function Stats() {
  const icons = [HomeIcon, Sparkles, School, GraduationCap]
  return (
    <section aria-labelledby="stats-heading" className="on-dark relative z-10 bg-maroon-950 text-peach">
      <h2 id="stats-heading" className="sr-only">Agape at a glance</h2>
      <div className="container-x grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
        {publishedStats.map((s, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={s.label} delay={i * 80} className={`flex items-center gap-4 px-2 sm:px-6 ${i ? 'lg:border-l lg:border-line-dark' : ''}`}>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-rust/90 text-white">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </span>
              <span>
                <span className="font-display block text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none text-white">
                  <CountUp value={s.value} display={s.display} />
                  <span className="text-gold">{s.suffix}</span>
                </span>
                <span className="mt-1.5 block text-[0.85rem] font-semibold leading-snug text-peach/75">{s.label}</span>
              </span>
            </Reveal>
          )
        })}
      </div>
      <p className="container-x pb-4 text-[0.7rem] text-peach/45">Figures as published on agapeindia.org — to be verified by the Agape team before launch.</p>
    </section>
  )
}


/* ------------------------------------------------------------------ */

function Intro() {
  const pillars = [
    { icon: ShieldCheck, title: 'Dignity first', text: 'Every child protected from stigma and discrimination.' },
    { icon: HeartHandshake, title: 'A real family', text: 'Older children mentor younger ones; milestones are celebrated.' },
    { icon: Stethoscope, title: 'Whole-child care', text: 'Healthcare, nutrition, schooling and counselling together.' },
    { icon: GraduationCap, title: 'Cradle to college', text: 'Support through higher education and beyond.' },
  ]
  return (
    <section className="container-x section-y">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <Eyebrow>About Agape</Eyebrow>
          <h2 className="display-lg mt-4">
            HIV is not the end of the story. <em className="font-display italic text-rust">It’s the beginning of a new one.</em>
          </h2>
          <div className="mt-7 space-y-5 text-[1.05rem] text-muted">
            <p>
              Agape was founded in {org.founded} by {org.founder}, with six children who had lost their parents to AIDS. Today it is a registered NGO and Child Care Institution caring for around 200 children and young people.
            </p>
            <p>
              Many are full orphans; others have no family able to support them. To break the stigma around HIV, Agape opened its own school in 2005 — and now walks with children all the way through college.
            </p>
          </div>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group rounded-[14px] border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-rust/30 hover:shadow-[0_18px_36px_-26px_rgb(76_22_11/0.45)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-rust-soft text-rust transition-colors group-hover:bg-rust group-hover:text-white">
                    <Icon size={18} strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="font-sans text-[0.98rem] font-bold tracking-normal">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <ButtonLink to="/about" variant="secondary" icon="arrow">Discover our story</ButtonLink>
            <p className="text-sm text-muted">— Founded by <strong className="text-ink">{org.founder}</strong></p>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-[540px]">
          <div aria-hidden className="blob-b absolute inset-[6%_-2%_0_6%] bg-gold-soft" />
          <div aria-hidden className="absolute -left-2 top-6 h-5 w-5 rounded-full bg-rust" />
          <div aria-hidden className="absolute right-6 top-0 h-3 w-3 rounded-full bg-maroon-700" />
          <div aria-hidden className="absolute bottom-10 right-0 h-8 w-8 rounded-full border-[3px] border-gold" />
          <SafeImage src={images.campus} alt="Children in festive dress lining the steps of the Agape school building" className="blob-a relative aspect-[1/1.02]" />
          <div className="absolute -bottom-6 left-2 rounded-[16px] bg-white px-5 py-4 shadow-[0_24px_48px_-24px_rgb(76_22_11/0.5)] sm:left-[-1.5rem]">
            <p className="font-display text-4xl leading-none text-maroon-800">{new Date().getFullYear() - org.founded}+</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">Years of care</p>
          </div>
          <p className="font-script absolute -top-8 right-4 rotate-[5deg] text-[1.9rem] text-rust">since {org.founded} ♥</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Causes() {
  const causes = [
    { icon: GraduationCap, title: 'College fees for 2026–27', text: 'Help young people from Agape stay in college and finish their degrees.', image: images.classroomGirl, raised: 640000, goal: 1000000 },
    { icon: Stethoscope, title: 'Nursing & medicines', text: 'Daily nursing rounds, medicines, hospital visits and dental care.', image: images.dental, raised: 410000, goal: 750000 },
    { icon: Utensils, title: 'Meals for every child', text: 'Three balanced meals a day, plus eggs, milk and fruit, all year round.', image: images.diningHall, raised: 1120000, goal: 1500000 },
  ]
  return (
    <section className="relative overflow-hidden section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-script text-[1.7rem] text-rust">Donate to</p>
            <h2 className="display-lg mt-1">Causes that need your support</h2>
            <p className="lede mt-4">Choose a cause and see your kindness turn into meals, medicine and classrooms.</p>
          </div>
          <DemoTag>Sample campaigns &amp; progress</DemoTag>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {causes.map(({ icon: Icon, ...c }, i) => {
            const pct = Math.round((c.raised / c.goal) * 100)
            return (
              <Reveal as="article" key={c.title} delay={i * 90} className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white border border-line shadow-[0_24px_50px_-36px_rgb(76_22_11/0.45)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative">
                  <SafeImage src={c.image} alt="" className="media-zoom aspect-[16/10] rounded-none!" />
                  <span className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-[14px] bg-rust text-white shadow-lg">
                    <Icon size={22} strokeWidth={1.9} aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-10">
                  <h3 className="display-sm">{c.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{c.text}</p>
                  <div className="mt-6">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-maroon-800">{pct}% funded</span>
                      <span className="text-muted">Goal {formatINR(c.goal)}</span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-sand" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${c.title}: ${pct}% funded (sample)`}>
                      <div className="h-full rounded-full bg-gradient-to-r from-gold to-rust" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-muted">{formatINR(c.raised)} raised</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                    <ButtonLink to="/donate" variant="primary" size="sm">Donate</ButtonLink>
                    <TextLink to="/programs">Learn more</TextLink>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}




/* ------------------------------------------------------------------ */

function ProgramsGrid() {
  const [first, ...rest] = programs
  return (
    <section className="bg-peach/55 section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="What we do" title={<>Care for the whole child, <br className="hidden md:block" />from cradle to college.</>} />
          <ButtonLink to="/programs" variant="secondary" icon="arrow" className="self-start md:self-auto">All programs</ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          <Reveal className="md:col-span-2 lg:col-span-7 lg:row-span-2">
            <ProgramTile p={first} feature />
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className={i < 2 ? 'lg:col-span-5' : 'lg:col-span-6'}>
              <ProgramTile p={p} compact={i < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramTile({ p, feature, compact }: { p: Program; feature?: boolean; compact?: boolean }) {
  if (compact) {
    return (
      <article className="group relative grid h-full grid-cols-[38%_1fr] gap-5 rounded-[var(--radius-media)] bg-ivory p-3 pr-5 transition-shadow duration-300 hover:shadow-[0_20px_40px_-28px_rgb(76_22_11/0.45)]">
        <SafeImage src={p.image} alt={p.imageAlt} className="media-zoom h-full min-h-[170px] rounded-[12px]!" />
        <div className="flex flex-col py-2">
          <span className="font-display text-sm text-rust">{p.number}</span>
          <h3 className="display-sm mt-1">
            <Link to={`/programs/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
          </h3>
          <p className="mt-2 line-clamp-3 text-[0.92rem] text-muted">{p.short}</p>
          <span className="link-arrow mt-auto self-start pt-3 text-sm!" aria-hidden>Learn more <ArrowUpRight size={15} /></span>
        </div>
      </article>
    )
  }
  return (
    <article className="group relative flex h-full flex-col">
      <SafeImage src={p.image} alt={p.imageAlt} className={`media-zoom ${feature ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[420px] lg:flex-1' : 'aspect-[16/10]'}`} />
      <div className="mt-5 flex items-start gap-5">
        <span className="font-display pt-1 text-lg text-rust">{p.number}</span>
        <div>
          <h3 className={feature ? 'display-md' : 'display-sm'}>
            <Link to={`/programs/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
          </h3>
          <p className="mt-2 max-w-xl text-muted">{p.short}</p>
          <span className="link-arrow mt-3" aria-hidden>Learn more <ArrowUpRight size={16} /></span>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */

function FeaturedStory() {
  const story = stories[0]
  return (
    <section className="on-dark relative overflow-hidden bg-maroon-950 text-peach">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[640px]">
          <SafeImage src={story.image} alt={story.imageAlt} className="absolute! inset-0 rounded-none!" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-maroon-950/40" />
        </div>
        <div className="relative flex items-center px-5 py-16 sm:px-10 md:px-16 lg:py-24">
          <ContourLines className="pointer-events-none absolute -right-28 bottom-0 w-[460px] opacity-[0.12]" />
          <Reveal className="relative max-w-xl">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>A story of hope</Eyebrow>
              <span className="text-xs font-semibold text-peach/60">Name changed to protect privacy</span>
            </div>
            <Quote size={36} className="mt-8 text-gold" aria-hidden />
            <h2 className="display-lg mt-4 text-white">{story.title}</h2>
            <p className="lede mt-6">
              Suresh arrived at three — HIV-positive, severely malnourished, unable to walk or talk. Doctors weren’t sure how much he would recover. With nutrition, medical care and patient love, every milestone became a victory. Today he is in 3rd class, studying, playing and thriving.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to={`/stories/${story.slug}`} variant="light">Read the full story</ButtonLink>
              <ButtonLink to="/impact" variant="outline-light" icon="arrow">More stories of impact</ButtonLink>
            </div>
            <p className="mt-6 text-xs text-peach/55">Story as published by Agape. The photograph is illustrative and does not depict Suresh.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function HowChangeHappens() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        eyebrow="How change happens"
        title="Four stages, one constant: we never give up on a child."
        lede="Every child’s journey is different, but the path follows a pattern we have refined over two decades."
      />
      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div aria-hidden className="absolute left-0 right-0 top-[27px] hidden h-px bg-[repeating-linear-gradient(90deg,var(--color-line)_0_8px,transparent_8px_14px)] lg:block" />
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 110} className="relative">
            <span className="font-display relative grid h-14 w-14 place-items-center rounded-full border-[1.5px] border-maroon-800 bg-ivory text-xl text-maroon-800">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="display-sm mt-6">{s.title}</h3>
            <p className="mt-3 text-muted">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function GetInvolvedTeaser() {
  const paths = [
    {
      icon: Users,
      title: 'Volunteer your time',
      text: 'Lead a workshop in spoken English, digital literacy, career guidance, dance or art — or lend professional skills.',
      cta: 'Volunteer with us',
      to: '/get-involved#volunteer',
    },
    {
      icon: Building2,
      title: 'Partner through CSR',
      text: 'Fund education, healthcare, nutrition or infrastructure, and bring your teams for meaningful volunteer days.',
      cta: 'Explore partnerships',
      to: '/get-involved#partner',
    },
    {
      icon: HandHeart,
      title: 'Support the mission',
      text: 'Give once, give monthly, or celebrate a special day by sponsoring a meal for every child at Agape.',
      cta: 'Ways to give',
      to: '/donate',
    },
  ]
  return (
    <section className="bg-sand/60 section-y">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Get involved"
            title={<>Raising one child takes a village. <em className="italic text-maroon-700">Raising 200 takes a community.</em></>}
            lede="No contribution is too small. Choose the way that fits you best."
          />
          <SafeImage src={images.handsTogether} alt="Children’s hands stacked together over colourful building blocks" className="blob-c mt-10 aspect-[16/11]" />
        </Reveal>
        <ul className="flex flex-col justify-center divide-y divide-line-dark border-y border-maroon-900/15 [&>li]:border-maroon-900/15">
          {paths.map(({ icon: Icon, ...p }, i) => (
            <Reveal as="li" key={p.title} delay={i * 90} className="group grid gap-5 py-9 sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <span className="grid h-14 w-14 place-items-center rounded-[14px] bg-ivory text-rust transition-colors group-hover:bg-rust group-hover:text-white">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </span>
              <div>
                <h3 className="display-sm">{p.title}</h3>
                <p className="mt-2 max-w-md text-muted">{p.text}</p>
              </div>
              <ButtonLink to={p.to} variant={i === 2 ? 'primary' : 'secondary'} size="sm" icon="arrow" className="justify-self-start">
                {p.cta}
              </ButtonLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function DonateSection() {
  const uses = [
    { label: 'Nutrition & meals', note: 'Three balanced meals a day, plus milk, eggs and fruit' },
    { label: 'Healthcare', note: 'Medicines, nursing, hospital and dental care' },
    { label: 'Education', note: 'Teachers, books, uniforms and college fees' },
    { label: 'Home & caregivers', note: 'Safe housing and round-the-clock care' },
  ]
  return (
    <section id="donate" className="on-dark relative overflow-hidden bg-maroon-900 text-peach">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0 L 620 0 C 520 260, 420 560, 0 760 Z" fill="var(--color-maroon-800)" />
      </svg>
      <div className="container-x section-y relative grid gap-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-20">
        <Reveal>
          <Eyebrow>Give today</Eyebrow>
          <h2 className="display-lg mt-4 text-white">
            Give a child the care <Underlined>to thrive.</Underlined>
          </h2>
          <p className="lede mt-6 max-w-lg">
            Caring for around 200 children takes food, medicine, education and dedicated caregivers every single day. A monthly gift, even a small one, helps Agape plan ahead and care for every child consistently.
          </p>
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {uses.map((u) => (
              <li key={u.label} className="border-t border-line-dark pt-4">
                <p className="font-bold text-white">{u.label}</p>
                <p className="mt-1 text-sm text-peach/70">{u.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-[var(--radius-media)] border border-line-dark p-5">
            <SafeImage src={images.thali} alt="A festive thali with rice, curries, chapati and sweets" className="h-16 w-16 shrink-0 rounded-[12px]!" />
            <div className="min-w-[12rem] flex-1">
              <p className="font-bold text-white">Celebrate with a meal</p>
              <p className="text-sm text-peach/70">Mark a birthday or anniversary by feeding every child at Agape.</p>
            </div>
            <TextLink to="/donate#meals">Sponsor a meal</TextLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-[22px] border border-line-dark bg-maroon-950/50 p-6 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl text-white">Make a gift</h3>
            <DemoTag>Simulated</DemoTag>
          </div>
          <DonationWidget tone="dark" />
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Transparency() {
  return (
    <section className="container-x section-y">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Transparency & accountability"
            title="Trust is earned, every rupee at a time."
            lede="Donors, partners and the children themselves deserve to know how Agape is governed and how funds are used. This space is designed to publish it all, openly."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/transparency" variant="secondary" icon="arrow">Visit the transparency hub</ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="divide-y divide-line border-y border-line">
            {documents.slice(0, 5).map((d) => (
              <li key={d.title}>
                <Link to="/transparency#documents" className="group flex items-center gap-5 py-5 transition-colors hover:bg-peach/40 sm:px-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-peach text-maroon-800">
                    <FileText size={20} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block font-bold text-ink">{d.title}</span>
                    <span className="text-sm text-muted">{d.type}</span>
                  </span>
                  <DemoTag className="hidden sm:inline-flex">Sample</DemoTag>
                  <ArrowUpRight size={18} className="text-maroon-800 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <SourceNote className="mt-3">Placeholder entries for demonstration. Agape’s actual reports and policies would be published here.</SourceNote>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function LatestStories() {
  const picks = [stories[3], stories[4], stories[6]]
  return (
    <section className="border-t border-line bg-white/50 section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Stories & updates" title="News from the Agape family" />
          <TextLink to="/stories">All stories</TextLink>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-8">
          {picks.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <StoryCard story={s} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
