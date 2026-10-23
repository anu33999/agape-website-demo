import { Link } from 'react-router-dom'
import { ArrowUpRight, BookOpen, HeartPulse, Home as HomeIcon, GraduationCap } from 'lucide-react'
import { documents, images, publishedStats, stories } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, CountUp, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading, Underlined } from '../components/ui'

/** Illustrative dashboard figures — placeholders until Agape supplies verified data. */
const demoMetrics = [
  { icon: BookOpen, value: 96, suffix: '%', label: 'School attendance rate', note: 'Illustrative' },
  { icon: HeartPulse, value: 2, suffix: '×', label: 'Nursing rounds every day', note: 'From Agape’s site' },
  { icon: HomeIcon, value: 20, suffix: '+', label: 'Years of continuous care', note: 'Since 2003' },
  { icon: GraduationCap, value: 40, suffix: '', label: 'College students supported', note: 'Initiatives page figure' },
]

const yearBars = [
  { label: '2021–22', value: 62 },
  { label: '2022–23', value: 71 },
  { label: '2023–24', value: 78 },
  { label: '2024–25', value: 84 },
  { label: '2025–26', value: 90 },
]

export default function Impact() {
  const childStories = stories.filter((s) => s.source === 'agape')
  return (
    <>
      <ImpactSeo />
      <PageHero
        eyebrow="Our impact"
        title={<>Agape doesn’t change one life — it <Underlined>transforms generations.</Underlined></>}
        lede="When one child receives education, nutrition, medical care and a safe home, a cycle of illiteracy, poor health and poverty begins to break."
      />

      {/* Narrative */}
      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Change beyond one child</Eyebrow>
            <h2 className="display-lg mt-4">From surviving to thriving — and passing it on.</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-[1.05rem] text-muted">
            <p>
              Many children who come to Agape are born into families where illiteracy, poor healthcare and poverty have continued for generations. Children arrive in fragile conditions — malnutrition, HIV, tuberculosis, speech delays and severe health challenges.
            </p>
            <p>
              With medical care, proper nutrition, therapy and love, children who were once struggling to survive begin to heal, walk, speak, study and thrive.
            </p>
            <p>
              And when they become adults with families of their own, they understand the value of education — and are far more likely to make sure their own children go to school.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-peach/55 section-y" aria-labelledby="dashboard-title">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Impact dashboard</Eyebrow>
              <h2 id="dashboard-title" className="display-lg mt-4">The numbers behind the stories</h2>
            </div>
            <DemoTag>Illustrative layout — replace with verified data</DemoTag>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line lg:grid-cols-4">
            {publishedStats.map((s) => (
              <div key={s.label} className="bg-ivory p-6 md:p-8">
                <p className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-none text-maroon-800">
                  <CountUp value={s.value} display={s.display} />
                  <span className="text-rust">{s.suffix}</span>
                </p>
                <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          <SourceNote className="mt-3">Top row: figures as published on agapeindia.org.</SourceNote>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="grid grid-cols-2 gap-4">
              {demoMetrics.map(({ icon: Icon, ...m }) => (
                <div key={m.label} className="rounded-[var(--radius-media)] bg-ivory p-5">
                  <Icon size={22} className="text-rust" strokeWidth={1.8} aria-hidden />
                  <p className="font-display mt-4 text-4xl leading-none text-ink">
                    {m.value}
                    <span className="text-rust">{m.suffix}</span>
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">{m.label}</p>
                  <p className="mt-1 text-xs text-muted">{m.note}</p>
                </div>
              ))}
            </div>

            <figure className="rounded-[var(--radius-media)] bg-ivory p-6 md:p-8">
              <figcaption className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-bold text-ink">Students meeting grade-level reading benchmarks</span>
                <DemoTag>Sample data</DemoTag>
              </figcaption>
              <div className="mt-8 flex h-56 items-end gap-3 sm:gap-5" role="img" aria-label={`Illustrative bar chart: ${yearBars.map((b) => `${b.label} ${b.value}%`).join(', ')}`}>
                {yearBars.map((b, i) => (
                  <div key={b.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <span className="text-sm font-bold text-maroon-800">{b.value}%</span>
                    <div
                      className={`w-full rounded-t-[8px] ${i === yearBars.length - 1 ? 'bg-rust' : 'bg-maroon-800/80'}`}
                      style={{ height: `${b.value}%` }}
                    />
                    <span className="text-xs font-semibold text-muted">{b.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted">Placeholder values to demonstrate how outcome data could be visualised.</p>
            </figure>
          </div>
        </div>
      </section>

      {/* Child stories */}
      <section className="container-x section-y">
        <SectionHeading
          eyebrow="Living testimonies"
          title="Suresh, Ashwini and Niktha"
          lede="Their stories, shared by Agape with names changed to protect privacy, show what consistent care makes possible."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {childStories.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link to={`/stories/${s.slug}`} className="group flex h-full flex-col rounded-[var(--radius-media)] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-maroon-700/30 hover:shadow-[0_30px_50px_-36px_rgb(76_22_11/0.5)]">
                <span className="font-display text-5xl leading-none text-gold">“</span>
                <h3 className="display-sm mt-2">{s.title}</h3>
                <p className="mt-4 flex-1 text-muted">{s.excerpt}</p>
                <span className="link-arrow mt-6 self-start">
                  Read the story <ArrowUpRight size={16} aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <SourceNote className="mt-4">Stories as published on agapeindia.org. Names changed by Agape to protect privacy.</SourceNote>
      </section>

      {/* Methodology */}
      <section className="on-dark bg-maroon-900 text-peach section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>How we measure</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Honest measurement, so we can keep improving.</h2>
            <p className="lede mt-5">A suggested framework for how Agape could track and report outcomes on this page.</p>
            <SafeImage src={images.classroomGirl} alt="A girl paying close attention in class" className="mt-10 aspect-[16/8]" />
          </div>
          <ol className="space-y-8 self-center">
            {[
              ['Health', 'Weight and nutrition at admission and every six months; hospital visits; treatment adherence.'],
              ['Education', 'Bridge Program progression, attendance, grade-level benchmarks and 10th-standard results.'],
              ['Wellbeing', 'Counsellor check-ins and age-appropriate wellbeing conversations, handled confidentially.'],
              ['Independence', 'College enrolment, vocational placements and alumni follow-up after leaving Agape.'],
            ].map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line-dark pt-6">
                <span className="font-display text-xl text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl text-white">{t}</h3>
                  <p className="mt-2 text-peach/75">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reports */}
      <section className="container-x section-y">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Reports" title="Annual & impact reports" />
          <ButtonLink to="/transparency" variant="secondary" icon="arrow">Transparency hub</ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {documents.slice(0, 2).map((d) => (
            <Link key={d.title} to="/transparency#documents" className="group flex items-center justify-between gap-4 rounded-[var(--radius-media)] bg-sand/60 p-6 transition-colors hover:bg-sand">
              <div>
                <p className="font-display text-xl">{d.title}</p>
                <p className="mt-1 text-sm text-muted">{d.size}</p>
              </div>
              <DemoTag>Sample</DemoTag>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title="Many more children need a second chance at life." />
    </>
  )
}

function ImpactSeo() {
  useSeo('Our impact', 'How Agape helps children affected by HIV/AIDS heal, learn and thrive — and how that change reaches the next generation.')
  return null
}
