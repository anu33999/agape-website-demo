/**
 * Central content for the Agape demo site.
 *
 * Facts marked `source: 'agape'` are taken from agapeindia.org and should be
 * re-confirmed with the Agape team before launch. Anything marked `demo` is
 * illustrative placeholder content written for this concept.
 */

export const org = {
  name: 'Agape',
  fullName: 'Agape Orphanage & School',
  tagline: 'A home, a school, and a family for children affected by HIV/AIDS.',
  founded: 2003,
  founder: 'Lynne Voggu',
  city: 'Hyderabad',
  email: 'guestrelations@agapeindia.org',
  phone: '+91 90107 77734',
  phoneHref: 'tel:+919010777734',
  address: 'SY No. 10, Sanskruthi Township, Infosys Lane, Pocharam, Ghatkesar, Telangana 500088, India',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Agape+Orphanage+Pocharam+Ghatkesar+Telangana',
  taxNote: 'Donations are eligible for a tax benefit under Section 80G of the Income Tax Act.',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/agapeorphans' },
    { label: 'Instagram', href: 'https://www.instagram.com/agape.india' },
    { label: 'X', href: 'https://x.com/india_agape' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agape-india-6a052a286/' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/get-involved' },
]

const img = (name: string) => `/images/${name}`

export const images = {
  heroPortrait: img('hero-portrait.jpg'),
  heroInset: img('reading-girls.jpg'),
  silhouette: img('silhouette-hands.jpg'),
  campus: img('campus-welcome.jpg'),
  slate: img('boy-slate.jpg'),
  readingBoys: img('reading-boys.jpg'),
  nurse: img('nurse-checkup.jpg'),
  dental: img('dental-camp.jpg'),
  dormitory: img('dormitory.jpg'),
  playground: img('playground.jpg'),
  mealGirl: img('meal-girl.jpg'),
  diningHall: img('dining-hall.jpg'),
  serving: img('serving-meal.jpg'),
  classroomVolunteers: img('classroom-volunteers.jpg'),
  csrVolunteer: img('csr-volunteer.jpg'),
  handsTogether: img('hands-together.jpg'),
  handsHolding: img('hands-holding.jpg'),
  classroomGirl: img('classroom-girl.jpg'),
  portraitGreen: img('portrait-green.jpg'),
  toddler: img('toddler-meal.jpg'),
  thali: img('food-thali.jpg'),
  biryani: img('food-biryani.jpg'),
  breakfast: img('food-breakfast.jpg'),
  eggMeal: img('food-egg.jpg'),
  vegMeal: img('food-veg.jpg'),
  lemonRice: img('food-lemonrice.jpg'),
  eggCurry: img('food-eggcurry.jpg'),
  paneer: img('food-paneer.jpg'),
}

/** Figures published on agapeindia.org (About page). Confirm before launch. */
export const publishedStats = [
  { value: 200, suffix: '+', label: 'Children in residential care' },
  { value: 1000, suffix: '+', label: 'Lives transformed since 2003', display: '1K' },
  { value: 148, suffix: '', label: 'Students in Agape School' },
  { value: 50, suffix: '', label: 'Young people in college' },
]

export type Program = {
  slug: string
  number: string
  title: string
  short: string
  summary: string
  image: string
  imageAlt: string
  body: { heading: string; text: string }[]
  highlights: string[]
}

export const programs: Program[] = [
  {
    slug: 'education',
    number: '01',
    title: 'Agape School',
    short: 'English-medium learning from LKG to 10th standard, with a Bridge Program for children who arrive with little or no schooling.',
    summary:
      'For many children, Agape School is their first real chance to learn. Some have never been to school; others arrive unable to write the alphabet despite years in a classroom. We meet every child where they are.',
    image: images.readingBoys,
    imageAlt: 'Two boys in school uniform reading picture books at a classroom table',
    body: [
      {
        heading: 'Established in 2005 to break the stigma',
        text: 'Agape opened its own school so that no child would be turned away or treated differently because of HIV. Today it offers English-medium education from LKG to 10th standard.',
      },
      {
        heading: 'The Bridge Program',
        text: 'Modelled on a government initiative, the Bridge Program helps children move from no formal education to a 5th standard level within two years, so they can join mainstream classes with confidence.',
      },
      {
        heading: 'More than academics',
        text: 'Sports, arts and crafts, and music sit alongside the core curriculum — helping children discover their talents and the confidence that comes with them.',
      },
    ],
    highlights: ['LKG to 10th standard', 'English-medium', 'Two-year Bridge Program', 'Sports, arts & music'],
  },
  {
    slug: 'health-nutrition',
    number: '02',
    title: 'Healthcare & Nutrition',
    short: 'Daily nursing care, a partnership with KIMS Hospital, an on-site dental clinic, and balanced meals that help young bodies heal.',
    summary:
      'Children often arrive malnourished and medically fragile. Consistent medical care and nutrient-rich food strengthen immune systems and support treatment — the foundation for everything else.',
    image: images.mealGirl,
    imageAlt: 'A smiling girl in school uniform with a plate of rice and a boiled egg',
    body: [
      {
        heading: 'Care every single day',
        text: 'Two residential nurses monitor the children’s health and administer medication twice a day as needed.',
      },
      {
        heading: 'Hospital partnership',
        text: 'Agape partners with KIMS Hospital for comprehensive inpatient, outpatient and diagnostic services.',
      },
      {
        heading: 'Our own dental clinic',
        text: 'A fully equipped dental clinic with two chairs and an X-ray machine, where volunteer dentists provide regular check-ups and treatment.',
      },
      {
        heading: 'Food as medicine',
        text: 'Balanced, nutrient-rich meals are served alongside medical care, because proper nutrition is vital for children living with HIV.',
      },
    ],
    highlights: ['2 residential nurses', 'KIMS Hospital partner', 'On-site dental clinic', 'Nutrient-rich meals'],
  },
  {
    slug: 'childrens-home',
    number: '03',
    title: 'Children’s Home',
    short: 'A family-like home for about 205 children — from cradle to college — where belonging and healing matter as much as daily care.',
    summary:
      'Many of our children have lost not only their parents but also the support of extended family, because of stigma and fear. At Agape they find acceptance and a second chance at childhood.',
    image: images.playground,
    imageAlt: 'A young girl in a blue school uniform climbing playground bars',
    body: [
      {
        heading: 'More than a roof',
        text: 'For children who have endured tremendous loss, Agape is a place where hearts heal, friendships form, and unbreakable bonds are created.',
      },
      {
        heading: 'A family that grows together',
        text: 'Older children mentor younger ones, caregivers provide constant encouragement, and every milestone — a first step, a first word, an exam passed — is celebrated.',
      },
    ],
    highlights: ['~205 children', 'Cradle to college', 'Older-sibling mentoring', 'Every milestone celebrated'],
  },
  {
    slug: 'higher-education',
    number: '04',
    title: 'Higher Education & Careers',
    short: 'Career counselling after Class 10, support through college, and vocational pathways that lead to independence.',
    summary:
      'Children who arrived malnourished and unschooled are now finishing high school, attending college, and pursuing graduate studies. Agape stays with them every step of the way.',
    image: images.classroomVolunteers,
    imageAlt: 'Teenagers gathered around a classroom table during a volunteer-led workshop',
    body: [
      {
        heading: 'College, supported',
        text: 'Agape supports young people through college, with an equal number of boys and girls — providing consistent education, emotional support and opportunity.',
      },
      {
        heading: 'Career counselling',
        text: 'After Class 10, every student goes through career counselling to explore their strengths and the options open to them.',
      },
      {
        heading: 'Vocational training',
        text: 'Students who find formal academics difficult are encouraged into vocational training, gaining practical skills for financial independence.',
      },
    ],
    highlights: ['Post-10th counselling', 'College support', 'Vocational training', 'Equal boys & girls'],
  },
  {
    slug: 'healing-belonging',
    number: '05',
    title: 'Healing & Life Skills',
    short: 'Counselling, mentorship and life-skills sessions that help children process loss and grow into confident adults.',
    summary:
      'Children often arrive carrying the trauma of losing parents and the scars of poverty. Emotional healing and restoring hope are as central to our mission as shelter and food.',
    image: images.handsHolding,
    imageAlt: 'Close-up of an adult’s hands gently holding a child’s hands',
    body: [
      {
        heading: 'Counselling and emotional care',
        text: 'Agape provides counselling so children can heal from loss and grow with dignity.',
      },
      {
        heading: 'Skills from our community',
        text: 'Volunteers and partners have led sessions in career guidance, life skills, MS Office and digital literacy, spoken English, dance, and arts and crafts.',
      },
      {
        heading: 'Support beyond 18',
        text: 'Agape supports young people at every stage of life — from early childhood through higher education and even marriage — so they can become independent and self-sufficient.',
      },
    ],
    highlights: ['Counselling', 'Mentorship', 'Digital literacy', 'Spoken English'],
  },
]

export type Story = {
  slug: string
  category: 'Child Stories' | 'Education' | 'Community' | 'Youth'
  date: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  readTime: string
  /** 'agape' = story published by Agape (names changed). 'demo' = sample update written for this concept. */
  source: 'agape' | 'demo'
  body: string[]
}

export const stories: Story[] = [
  {
    slug: 'suresh-first-steps',
    category: 'Child Stories',
    date: '2026-09-12',
    title: 'Suresh took his first steps at four. At five, he said his first words.',
    excerpt:
      'He arrived at three — HIV-positive, severely malnourished, unable to walk or talk. Doctors weren’t sure how much he would recover. Agape refused to give up.',
    image: images.silhouette,
    imageAlt: 'Silhouette of a small child walking hand in hand with two adults beneath trees',
    readTime: '4 min read',
    source: 'agape',
    body: [
      'Suresh was HIV-positive, extremely malnourished, and unable to walk or talk when he arrived at Agape at the age of three. His early days were filled with medical attention, nutritious meals, and emotional support.',
      'Doctors were unsure how much he would recover. With proper nutrition and consistent care, Suresh slowly gained strength. Within a year he took his first steps — an achievement that once seemed impossible. His progress was slow, but every milestone became a victory against the odds.',
      'At four, Suresh visited a speech therapist who warned that he might never speak. Agape remained hopeful, and with dedicated care, he spoke his first words at age five.',
      'Today Suresh is studying in 3rd class, playing, and thriving. His story shows how medical care, nutrition, education and love can give a child a future that once seemed out of reach.',
    ],
  },
  {
    slug: 'ashwini-early-care',
    category: 'Child Stories',
    date: '2026-08-02',
    title: 'Ashwini weighed 2.5 kg when she came to us. Today she is in school.',
    excerpt:
      'She was four and a half months old, fragile and struggling to survive. Early intervention changed the direction of her life.',
    image: images.handsHolding,
    imageAlt: 'An adult’s hands cradling a child’s small hands',
    readTime: '3 min read',
    source: 'agape',
    body: [
      'Ashwini was only four and a half months old when she came into care at Agape. She weighed just 2.5 kg and was severely malnourished, fragile, and struggling to survive.',
      'With medical attention, nutrition, and consistent care, Ashwini began to recover. Within weeks she started gaining strength, and over time she became healthier, active, and full of life.',
      'Today Ashwini is enrolled in school and growing with energy, confidence and hope. Her journey shows how early intervention, proper care and a safe environment can completely change the direction of a child’s life.',
    ],
  },
  {
    slug: 'niktha-strength-and-hope',
    category: 'Child Stories',
    date: '2026-06-18',
    title: 'Niktha’s fight for survival: a story of strength and hope',
    excerpt:
      'She arrived during the pandemic, clinging to her elderly grandfather at the gate. Agape wasn’t taking admissions — but the team knew she needed help.',
    image: images.handsTogether,
    imageAlt: 'Children’s hands stacked together over colourful building blocks',
    readTime: '5 min read',
    source: 'agape',
    body: [
      'When two-and-a-half-year-old Niktha arrived at Agape, the world was in the middle of the COVID-19 pandemic. Agape was not accepting new admissions, but when she stood at the gate — frail, sick, and clinging to her elderly grandfather — the team knew she needed immediate help.',
      'If Niktha had returned to her village, she may not have survived. She was battling severe malnutrition, HIV, active tuberculosis, pneumonia, a respiratory infection, seizures, and a zinc deficiency that caused her skin to break down.',
      'She was hospitalised for 30 days, and a month later needed another two weeks in hospital. Her body was too weak to sit, walk or talk. All she could do was fight to stay alive.',
      'With medical treatment, nutrition and love, Niktha slowly began to recover. She sat up after months of care, took her first steps at Agape, and at five began speaking her first small words. Today she is joyful, active, learning and thriving.',
    ],
  },
  {
    slug: 'bridge-program-two-years',
    category: 'Education',
    date: '2026-10-04',
    title: 'From the alphabet to 5th standard in two years: inside the Bridge Program',
    excerpt:
      'Some children reach Agape having “finished” 6th class without being able to write their name. Here is how the Bridge Program closes that gap.',
    image: images.slate,
    imageAlt: 'A boy writing on a small chalk slate in a classroom',
    readTime: '4 min read',
    source: 'demo',
    body: [
      'Sample update written for this design concept. Replace with an article from the Agape team.',
      'Every year, children join Agape with very different educational histories. Some have never been to school. Others dropped out. Many attended for years but arrive without basic reading and writing.',
      'The Bridge Program, modelled on a government initiative, groups children by ability rather than age and moves them from no formal education to a 5th standard level within two years — so they can join mainstream classes alongside their peers.',
      'Teachers track progress closely, pairing focused literacy and numeracy work with the same sports, arts and music every Agape student enjoys.',
    ],
  },
  {
    slug: 'corporate-volunteer-day',
    category: 'Community',
    date: '2026-09-27',
    title: 'What a day of corporate volunteering looks like at Agape',
    excerpt:
      'Spoken English, MS Office basics, career guidance and a lot of dancing — partner teams share skills that stay with students long after the visit.',
    image: images.csrVolunteer,
    imageAlt: 'A smiling volunteer surrounded by a group of cheerful children',
    readTime: '3 min read',
    source: 'demo',
    body: [
      'Sample update written for this design concept. Replace with an article from the Agape team.',
      'Partner organisations have run sessions at Agape on career guidance and life skills, MS Office and digital literacy, spoken English and communication, dance, arts and crafts, and teacher training.',
      'The best volunteer days are planned with Agape’s staff beforehand, so each session fits what students are learning — and so the children get to teach their visitors something too.',
    ],
  },
  {
    slug: 'celebrate-with-a-meal',
    category: 'Community',
    date: '2026-08-21',
    title: 'Birthdays, anniversaries, memories: celebrating with a meal at Agape',
    excerpt:
      'Sponsoring a breakfast, a biryani or a full day of meals has become one of the most loved ways to mark a special occasion.',
    image: images.diningHall,
    imageAlt: 'Children seated at long tables in Agape’s bright dining hall',
    readTime: '2 min read',
    source: 'demo',
    body: [
      'Sample update written for this design concept. Replace with an article from the Agape team.',
      'Families and friends of Agape often choose to mark birthdays, anniversaries and remembrance days by sponsoring a meal for the children — from a simple breakfast to a full day of meals.',
      'Each sponsorship covers nourishing food for every child at Agape that day, and the children always know whose celebration they are sharing.',
    ],
  },
  {
    slug: 'college-and-beyond',
    category: 'Youth',
    date: '2026-07-09',
    title: 'Cradle to college: how Agape walks with young people after 10th',
    excerpt:
      'Career counselling, college support and vocational pathways help young adults leave Agape ready for independent lives.',
    image: images.classroomGirl,
    imageAlt: 'A girl in a classroom looking thoughtfully towards the front of the room',
    readTime: '3 min read',
    source: 'demo',
    body: [
      'Sample update written for this design concept. Replace with an article from the Agape team.',
      'After Class 10, every Agape student goes through career counselling. Some continue on academic routes into college and graduate study; others choose vocational training that leads more directly to work.',
      'Agape continues to support young people through these years — and, for many, all the way to marriage and independent family life.',
    ],
  },
]

export const steps = [
  {
    title: 'Welcome',
    text: 'Children arrive — often after losing parents to AIDS — and are received with medical assessment, safety and warmth.',
  },
  {
    title: 'Heal',
    text: 'Daily nursing, hospital care, nutritious meals and counselling help fragile bodies and hearts recover.',
  },
  {
    title: 'Learn',
    text: 'The Bridge Program and Agape School give every child the education they were denied — and room to discover their gifts.',
  },
  {
    title: 'Launch',
    text: 'Career counselling, college support and vocational training prepare young adults for independent, self-sufficient lives.',
  },
]

export const documents = [
  { title: 'Annual Report 2025–26', type: 'Annual report', size: 'PDF · sample' },
  { title: 'Impact Report 2025', type: 'Impact report', size: 'PDF · sample' },
  { title: 'Audited Financial Statements FY 2025–26', type: 'Financial statement', size: 'PDF · sample' },
  { title: 'Board & Governance Overview', type: 'Governance', size: 'PDF · sample' },
  { title: 'Child Safeguarding Policy', type: 'Policy', size: 'PDF · sample' },
  { title: 'Privacy & Data Protection Policy', type: 'Policy', size: 'PDF · sample' },
]

/** Amounts mirror the options on Agape's current donation form. */
export const oneTimeAmounts = [500, 1000, 2500, 5000, 10000, 25000]
export const monthlyAmounts = [300, 500, 1000, 2500, 5000, 10000]

/** Illustrative only — the Agape team should replace these with real cost breakdowns. */
export const amountImpact: Record<number, string> = {
  300: 'helps towards school supplies for a child each month',
  500: 'helps towards nutritious meals and daily essentials',
  1000: 'helps towards a child’s monthly medicines and check-ups',
  2500: 'helps towards a term of learning materials for a classroom',
  5000: 'helps towards breakfast for every child at Agape',
  10000: 'helps towards a special thali lunch for the whole family',
  25000: 'helps towards a month of nursing care',
}

/** Meal sponsorships as listed in Agape’s online charity shop. */
export const meals = [
  { name: 'Simple Breakfast', detail: 'Upma, lemon rice or kichidi', price: 3000, image: images.lemonRice },
  { name: 'Breakfast', detail: 'Dosa, vada, idly or Mysore bonda', price: 5000, image: images.breakfast },
  { name: 'Vegetarian Lunch / Dinner', detail: 'Wholesome homestyle meal', price: 7500, image: images.vegMeal },
  { name: 'Egg Lunch / Dinner', detail: 'Egg curry comfort meal', price: 8500, image: images.eggCurry },
  { name: 'Agape Special Thali', detail: 'A festive plate for every child', price: 10000, image: images.thali },
  { name: 'Full-Day Meals (veg)', detail: 'Breakfast, lunch and dinner', price: 16500, image: images.paneer },
  { name: 'Full-Day Meals (non-veg)', detail: 'Breakfast, lunch and dinner', price: 21500, image: images.eggMeal },
  { name: 'Chicken Biryani Feast', detail: 'A celebration favourite', price: 28000, image: images.biryani },
]

export const values = [
  { title: 'Dignity', text: 'Every child is treated with respect and protected from discrimination — HIV is never the end of their story.' },
  { title: 'Belonging', text: 'Agape is not an institution but a family, where older children mentor younger ones and every milestone is celebrated.' },
  { title: 'Wholeness', text: 'Shelter, food and medicine matter, and so do education, emotional healing and hope.' },
  { title: 'Commitment', text: 'We stay with children at every stage of life — from early childhood through college and beyond.' },
]

export const formatINR = (n: number) => '₹' + n.toLocaleString('en-IN')

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
