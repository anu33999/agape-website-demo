import { Briefcase, Building2, GraduationCap, HandHeart, Laptop, Mic, Music, Package, Palette, Users } from 'lucide-react'
import { images } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import EnquiryForm from '../components/EnquiryForm'
import { ButtonLink, Eyebrow, Reveal, SafeImage, SectionHeading } from '../components/ui'

const sessions = [
  { icon: Briefcase, label: 'Career guidance & life skills' },
  { icon: Laptop, label: 'MS Office & digital literacy' },
  { icon: Mic, label: 'Spoken English & communication' },
  { icon: Music, label: 'Dance' },
  { icon: Palette, label: 'Arts & crafts' },
  { icon: GraduationCap, label: 'Teacher training & classroom management' },
]

const csrWays = [
  { icon: Users, title: 'Volunteer time & skills', text: 'Workshops, training sessions or mentorship programs for students and staff.' },
  { icon: Building2, title: 'CSR sponsorship', text: 'Fund education, healthcare, nutrition and infrastructure through your CSR program.' },
  { icon: Briefcase, title: 'Professional expertise', text: 'Help with social media, grant writing, financial planning or IT support.' },
  { icon: Package, title: 'In-kind donations', text: 'Educational materials, hygiene kits, food and technology for learning and wellbeing.' },
]

export default function GetInvolved() {
  useSeo('Get involved', 'Volunteer, intern, or partner with Agape through CSR. Share your time, skills and resources with children in Hyderabad.')
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="No contribution is too small."
        lede="Raising one child is a challenge — caring for around 200 takes a community. Share your time, your skills or your organisation’s resources."
        image={images.classroomVolunteers}
        imageAlt="Teenagers and a volunteer gathered around a classroom table"
      >
        <ButtonLink to="#volunteer" variant="primary" icon="arrow">Volunteer</ButtonLink>
        <ButtonLink to="#partner" variant="outline-light" icon="arrow">Partner with us</ButtonLink>
      </PageHero>

      {/* Volunteer */}
      <section id="volunteer" className="container-x section-y scroll-mt-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Volunteer your time"
              title="Teach a skill. Spark a dream."
              lede="Volunteers have led sessions on everything from spoken English to dance. Tell us what you love to do, and we’ll find where it fits."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {sessions.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-[var(--radius-ui)] bg-peach/60 px-4 py-3.5 font-semibold">
                  <Icon size={20} className="shrink-0 text-rust" strokeWidth={1.9} aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">Sessions listed are examples from past volunteers, as shared on agapeindia.org.</p>
          </Reveal>
          <Reveal delay={100} className="relative">
            <SafeImage src={images.csrVolunteer} alt="A volunteer smiling with a group of children" className="shape-arch aspect-[4/5]" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-[var(--radius-media)] bg-maroon-900 p-6 text-peach shadow-xl sm:left-auto sm:max-w-xs">
              <p className="font-display text-xl text-white">Child safety comes first</p>
              <p className="mt-2 text-sm text-peach/80">Visits are arranged with Agape’s team in advance, so children’s safety and routines always come first.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Internships */}
      <section className="bg-sand/55 py-16 md:py-20">
        <div className="container-x grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <span className="grid h-16 w-16 place-items-center rounded-[16px] bg-ivory text-rust">
            <GraduationCap size={30} strokeWidth={1.7} aria-hidden />
          </span>
          <div>
            <h2 className="display-sm">Internships for students</h2>
            <p className="mt-2 max-w-2xl text-muted">
              Social work, education, public health, communications or design student? Spend a placement learning alongside Agape’s team. <span className="font-semibold">Program details to be confirmed by Agape.</span>
            </p>
          </div>
          <ButtonLink to="#partner-form" variant="secondary" icon="arrow" size="sm">Enquire</ButtonLink>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="container-x section-y scroll-mt-20">
        <SectionHeading
          eyebrow="Corporate social responsibility"
          title="How can your organisation make a difference?"
          lede="Partner with Agape through CSR and help children build a brighter future — with funding, expertise and your team’s time."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-media)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {csrWays.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="bg-ivory p-7">
              <Icon size={26} className="text-rust" strokeWidth={1.7} aria-hidden />
              <h3 className="font-display mt-6 text-xl">{title}</h3>
              <p className="mt-3 text-[0.95rem] text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="partner-form" className="on-dark bg-maroon-900 text-peach section-y scroll-mt-20">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="display-lg mt-4 text-white">CSR partnership &amp; volunteer enquiry</h2>
            <p className="lede mt-5">Tell us a little about yourself or your organisation and the Agape team will be in touch.</p>
            <div className="mt-10 flex items-center gap-4 rounded-[var(--radius-media)] border border-line-dark p-5">
              <HandHeart size={28} className="shrink-0 text-gold" aria-hidden />
              <p className="text-sm text-peach/80">Prefer to give financially? You can donate once, monthly, or sponsor a meal.</p>
            </div>
            <div className="mt-5">
              <ButtonLink to="/donate" variant="light" size="sm">Ways to donate</ButtonLink>
            </div>
          </div>
          <div className="rounded-[22px] bg-ivory p-6 text-ink sm:p-9">
            <EnquiryForm
              showOrganisation
              topics={['CSR sponsorship', 'Employee volunteering', 'Individual volunteering', 'Internship', 'Professional expertise', 'In-kind donation']}
              submitLabel="Send enquiry"
              successTitle="Enquiry received"
            />
          </div>
        </div>
      </section>
    </>
  )
}
