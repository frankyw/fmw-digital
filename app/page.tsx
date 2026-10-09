const EMAIL = 'hello@fmw.digital'

const services = [
  {
    no: '01',
    title: 'Product Discovery',
    body: 'We work with you and your customers to find the problems worth solving, then test ideas cheaply with Lean Startup and Design Thinking methods before anything gets built.',
    tags: ['Customer research', 'Opportunity mapping', 'Prototyping', 'Experiment design'],
  },
  {
    no: '02',
    title: 'Product Design',
    body: 'Interfaces that are clear and quick to use. We design end-to-end, from information architecture and flows to polished UI and design systems your team can build on.',
    tags: ['UX & flows', 'UI design', 'Design systems', 'Usability testing'],
  },
  {
    no: '03',
    title: 'Product Engineering',
    body: 'Small, senior teams that build web and mobile products in short increments. You get working software early and every few weeks after that.',
    tags: ['Web apps', 'Mobile', 'MVPs', 'Platform & APIs'],
  },
  {
    no: '04',
    title: 'Delivery & Transformation',
    body: 'Agile and Kanban (KCP-certified) coaching that helps your teams work in a product-led way and keep value flowing after we leave.',
    tags: ['Agile coaching', 'Kanban', 'Flow metrics', 'Change strategy'],
  },
]

const process = [
  {
    step: 'Discover',
    body: 'Talk to customers, map the opportunity, agree on the outcome we are aiming for.',
  },
  {
    step: 'Shape',
    body: 'Sketch, prototype and test the riskiest assumptions before committing to a build.',
  },
  {
    step: 'Build',
    body: 'Design and engineer in short cycles, with working software in front of users early.',
  },
  {
    step: 'Grow',
    body: 'Measure, learn and improve, and hand over a team and practices that keep it going.',
  },
]

const principles = [
  {
    title: 'Outcomes over output',
    body: 'We measure success by the change in your customers’ behaviour, not by features shipped.',
  },
  {
    title: 'Small, senior teams',
    body: 'The people you meet in the first conversation are the people doing the work.',
  },
  {
    title: 'Evidence before investment',
    body: 'We test assumptions early so the expensive decisions are made with real data.',
  },
  {
    title: 'Built to hand over',
    body: 'Clean code, documented decisions and a team that is ready to own what we build together.',
  },
]

const marquee = [
  'Product strategy',
  'Discovery',
  'UX research',
  'Interface design',
  'Design systems',
  'Web apps',
  'Mobile',
  'MVPs',
  'Agile & Kanban',
  'Transformation',
]

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="text-2xl tracking-tight" aria-label="FMW Digital">
      <span className={`font-semibold ${light ? 'text-paper' : 'text-slate-brand'}`}>fmw</span>
      <span className={light ? 'text-mist' : 'text-ink/45'}>digital</span>
      <span className="text-signal">.</span>
    </span>
  )
}

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`h-4 w-4 ${className}`}>
      <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] ${light ? 'text-mist' : 'text-slate-brand'}`}>
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  )
}

/* Three stacked frames: a wireframe becoming a design becoming a shipped product. */
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md select-none" aria-hidden="true">
      {/* wireframe */}
      <div className="absolute left-0 top-0 w-[72%] -rotate-6 rounded-2xl border border-dashed border-ink/25 bg-paper p-5">
        <div className="mb-4 h-3 w-1/3 rounded-full bg-ink/10" />
        <div className="mb-3 h-20 rounded-lg border border-dashed border-ink/20" />
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-ink/10" />
          <div className="h-2 w-5/6 rounded-full bg-ink/10" />
          <div className="h-2 w-2/3 rounded-full bg-ink/10" />
        </div>
        <p className="mt-4 font-serif text-sm italic text-ink/40">sketch</p>
      </div>

      {/* design */}
      <div className="absolute left-[14%] top-[22%] w-[72%] rotate-2 rounded-2xl bg-white p-5 shadow-xl shadow-ink/10 ring-1 ring-ink/5">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-3 w-1/4 rounded-full bg-slate-brand" />
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-mist" />
            <span className="h-2.5 w-2.5 rounded-full bg-mist" />
          </div>
        </div>
        <div className="mb-3 h-20 rounded-lg bg-gradient-to-br from-mist/60 to-slate-brand/40" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-md bg-paper" />
          <div className="h-10 rounded-md bg-paper" />
          <div className="h-10 rounded-md bg-signal/80" />
        </div>
        <p className="mt-4 font-serif text-sm italic text-ink/40">design</p>
      </div>

      {/* shipped */}
      <div className="absolute bottom-0 right-0 w-[72%] rotate-[-1deg] rounded-2xl bg-ink p-5 text-paper shadow-2xl shadow-ink/30">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-mist">Live</span>
        </div>
        <div className="mb-1 text-3xl font-semibold tracking-tight">v1.0</div>
        <div className="mb-4 text-xs text-mist">Shipped to customers</div>
        <div className="flex h-16 items-end gap-1.5">
          {[30, 42, 38, 55, 50, 68, 74, 90].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i === 7 ? 'bg-signal' : 'bg-slate-brand'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="mt-4 font-serif text-sm italic text-mist">shipped</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top">
            <Wordmark />
          </a>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#services" className="text-ink/70 transition-colors hover:text-ink">Services</a>
            <a href="#process" className="text-ink/70 transition-colors hover:text-ink">Process</a>
            <a href="#approach" className="text-ink/70 transition-colors hover:text-ink">Approach</a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-slate-brand"
          >
            Start a project
            <Arrow className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.25fr_1fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <Eyebrow>Digital product studio</Eyebrow>
            <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              We help you build{' '}
              <br className="hidden sm:block" />
              the <span className="font-serif font-normal italic text-slate-brand">right</span> product,{' '}
              <br className="hidden sm:block" />
              and build it right.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
              FMW Digital is a small, senior studio for product strategy, design and engineering.
              We work alongside your team to find what customers need, shape it into a product,
              and get it to market fast.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-brand px-6 py-3.5 font-medium text-paper transition-colors hover:bg-ink"
              >
                Tell us what you&apos;re building
                <Arrow className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-ink ring-1 ring-ink/15 transition hover:ring-ink/40"
              >
                What we do
              </a>
            </div>
          </div>
          <HeroVisual />
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-ink/10 bg-ink py-5 text-paper">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {marquee.map((item) => (
                  <li key={item} className="flex items-center whitespace-nowrap px-6 font-serif text-2xl italic">
                    {item}
                    <span className="ml-12 h-1.5 w-1.5 rounded-full bg-signal" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                From first idea to <span className="font-serif font-normal italic">shipped</span> product.
              </h2>
            </div>
            <p className="max-w-xl text-lg text-ink/70 lg:justify-self-end">
              Bring us in for one stage or the whole journey. Every engagement is shaped
              around the outcome you need, not a fixed menu.
            </p>
          </div>

          <div className="mt-16 border-t border-ink/15">
            {services.map((s) => (
              <article
                key={s.no}
                className="group grid gap-6 border-b border-ink/15 py-10 transition-colors md:grid-cols-[5rem_1fr_1.3fr] md:gap-10 lg:py-12"
              >
                <span className="font-serif text-2xl italic text-slate-brand">{s.no}</span>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.title}</h3>
                <div>
                  <p className="leading-relaxed text-ink/70">{s.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-16 bg-slate-deep text-paper">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Short loops. Real customers.{' '}
              <span className="font-serif font-normal italic text-mist">No big reveals.</span>
            </h2>

            <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <li key={p.step} className="flex flex-col bg-slate-deep p-8">
                  <span className="text-sm text-mist">Step {i + 1}</span>
                  <h3 className="mt-10 font-serif text-4xl italic">{p.step}</h3>
                  <p className="mt-4 leading-relaxed text-paper/70">{p.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-10 flex items-center gap-3 text-sm text-mist">
              <span className="inline-block h-2 w-2 rounded-full bg-signal" />
              Then repeat. Each loop gets you closer to product–market fit.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                A studio that works <span className="font-serif font-normal italic">with</span> you,
                not for you.
              </h2>
              <p className="mt-6 max-w-md text-lg text-ink/70">
                We bring a background in product, agile and Kanban delivery, so we care about how
                your organisation works as much as what it ships.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  className={`rounded-2xl p-8 ${i === 0 ? 'bg-slate-brand text-paper' : 'bg-white ring-1 ring-ink/5'}`}
                >
                  <span className={`font-serif text-5xl italic ${i === 0 ? 'text-mist' : 'text-ink/20'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className={`mt-3 leading-relaxed ${i === 0 ? 'text-paper/80' : 'text-ink/65'}`}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-6 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ink px-8 py-20 text-paper sm:px-16 lg:py-28">
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-slate-brand/50 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-signal/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <Eyebrow light>Let&apos;s talk</Eyebrow>
              <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Have a product in mind? <span className="font-serif font-normal italic text-mist">Let&apos;s make it real.</span>
              </h2>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-12 inline-flex items-center gap-4 border-b border-paper/30 pb-2 text-2xl transition-colors hover:border-signal sm:text-3xl"
              >
                {EMAIL}
                <Arrow className="h-6 w-6 text-signal transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-ink/60 sm:flex-row sm:items-center lg:px-10">
        <Wordmark />
        <p>Digital product studio · Strategy, design &amp; engineering</p>
        <p>© {new Date().getFullYear()} FMW Digital</p>
      </footer>
    </>
  )
}
