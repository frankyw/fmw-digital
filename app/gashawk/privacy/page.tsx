import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GasHawk Privacy Policy — FMW Digital',
  description: 'What personal information the GasHawk app collects, why, and what you can do about it.',
}

const PRIVACY_EMAIL = 'apps@fmw.digital'

const sections = [
  { id: 'who-we-are', title: 'Who we are' },
  { id: 'what-we-collect', title: 'What we collect' },
  { id: 'how-we-use-it', title: 'How we use it' },
  { id: 'sharing', title: 'Who can see it, and who we share it with' },
  { id: 'location', title: 'Your location' },
  { id: 'your-rights', title: 'Your choices and rights' },
  { id: 'retention', title: 'How long we keep it, and how we protect it' },
  { id: 'children', title: 'Children' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact us' },
]

const collected = [
  {
    info: 'Email address and password (stored only as an Argon2 hash)',
    when: 'When you create an account with email',
    why: 'To sign you in and secure your account',
  },
  {
    info: 'Apple sign-in identifier, and the name and email Apple shares (which may be a private relay address)',
    when: 'When you choose Sign in with Apple',
    why: 'To sign you in. If an account already uses that email, we link the two',
  },
  {
    info: 'Display name',
    when: 'When you create an account. If you give none, we assign one like "Driver12345"',
    why: 'Shown next to your contributions and on the leaderboard',
  },
  {
    info: 'Install identifier: a random ID created when you install the app. It is not your hardware ID or advertising ID',
    when: 'Sent with every request from the app',
    why: 'To let you report prices without an account, limit abuse, and move those reports to your account if you later sign in on the same phone. Reinstalling creates a new one',
  },
  {
    info: 'Your location: your device position and its accuracy, and the area of the map you are viewing',
    when: 'When you search for nearby stations, report a price or confirm one',
    why: 'To find stations and prices near you, and to check you are within 2 km of a station you report on',
  },
  {
    info: 'Prices you report or confirm, votes on prices, reviews (rating, text, tags), suggested station edits and votes on edits',
    when: 'When you submit them',
    why: 'To provide community prices and station information',
  },
  {
    info: 'Points, level, badges, streaks, a trust score and contribution counts',
    when: 'When you contribute',
    why: 'To run points and the leaderboard, and to weigh how reliable reports are',
  },
  {
    info: 'Your region (province) and time-zone offset',
    when: 'With nearby searches',
    why: 'To show local results and regional leaderboards',
  },
  {
    info: 'Crash and error reports',
    when: 'When the app or our servers hit an error',
    why: 'To find and fix bugs. They exclude your location, email and name; they may include your internal account ID',
  },
]

const providers = [
  {
    provider: 'Hosting provider',
    does: 'Runs our servers, database and cache',
    receives: 'Everything we store',
  },
  {
    provider: 'Error-reporting provider',
    does: 'Crash and error reports',
    receives: 'Error details and your internal account ID; no location, name or email',
  },
  {
    provider: 'Sign-in and map providers',
    does: 'Sign-in and in-app maps',
    receives: 'Sign-in requests; the map area you view',
  },
]

const retention = [
  { data: 'Account, contributions and points', how: 'While your account exists' },
  { data: 'Sign-in sessions', how: 'Expire after [30] days without use' },
  {
    data: 'Prices you reported',
    how: 'Kept as community price history; unlinked from you when you delete your account',
  },
  {
    data: 'Reports made without an account',
    how: 'Kept as community price history, tied to the install identifier',
  },
  { data: 'Error reports', how: '[90] days' },
  { data: 'Backups', how: 'Deleted on their normal rotation, within [30] days' },
]

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  const title = sections.find((s) => s.id === id)?.title
  return (
    <section id={id} className="scroll-mt-24 border-t border-ink/10 pt-10">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-6 space-y-5 leading-relaxed text-ink/75">{children}</div>
    </section>
  )
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-ink/20">
            {head.map((h) => (
              <th key={h} scope="col" className="py-3 pr-6 font-semibold text-ink last:pr-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-ink/10 align-top">
              {row.map((cell, j) => (
                <td key={j} className={`py-4 pr-6 last:pr-0 ${j === 0 ? 'font-medium text-ink' : 'text-ink/70'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-brand" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>
}

function Email() {
  return (
    <a href={`mailto:${PRIVACY_EMAIL}`} className="text-slate-brand underline decoration-slate-brand/30 underline-offset-4 hover:decoration-slate-brand">
      {PRIVACY_EMAIL}
    </a>
  )
}

export default function GasHawkPrivacy() {
  return (
    <>
      <header className="border-b border-ink/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="text-2xl tracking-tight" aria-label="FMW Digital home">
            <span className="font-semibold text-slate-brand">fmw</span>
            <span className="text-ink/45">digital</span>
            <span className="text-signal">.</span>
          </a>
          <a href={`mailto:${PRIVACY_EMAIL}`} className="text-sm text-ink/70 transition-colors hover:text-ink">
            Contact privacy officer
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-10 lg:pt-20">
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-brand">
          <span className="h-px w-8 bg-current" />
          GasHawk
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Privacy <span className="font-serif font-normal italic text-slate-brand">Policy</span>
        </h1>
        <p className="mt-4 text-ink/60">
          <time dateTime="2026-10-09">Oct 9, 2026</time>
        </p>

        <div className="mt-14 grid gap-14 lg:grid-cols-[14rem_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">On this page</p>
            <ol className="mt-4 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-ink/70 transition-colors hover:text-slate-brand">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="min-w-0 max-w-3xl space-y-14">
            <Section id="who-we-are">
              <p>
                GasHawk is a community gas-price app for North America. It is operated by FMW Inc.
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what personal information the GasHawk
                mobile app and its servers collect, why, and what you can do about it.
              </p>
              <dl className="grid gap-4 rounded-2xl bg-white p-6 ring-1 ring-ink/5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.15em] text-ink/50">Effective date</dt>
                  <dd className="mt-1 text-ink">[date]</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.15em] text-ink/50">Privacy officer</dt>
                  <dd className="mt-1">
                    <Email />
                  </dd>
                </div>
                <dd className="text-sm text-ink/60 sm:col-span-2">
                  This person is responsible for our compliance and handles your requests.
                </dd>
              </dl>
              <p>
                We follow Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA)
                and, for Québec residents, Québec&apos;s Law 25.
              </p>
              <p className="border-l-2 border-signal pl-5 text-ink">
                We do not sell your personal information, show ads, or track you across other apps or websites.
              </p>
            </Section>

            <Section id="what-we-collect">
              <p>
                You can browse and report prices without an account. An account adds a display name, points
                and the leaderboard.
              </p>
              <Table
                head={['Information', 'When we collect it', 'Why']}
                rows={collected.map((r) => [r.info, r.when, r.why])}
              />
              <p>
                We do not collect photos, contacts, push-notification tokens, or advertising identifiers. Our
                servers do not log your IP address; it is used briefly in memory to rate-limit requests.
              </p>
            </Section>

            <Section id="how-we-use-it">
              <p>We use your information only to run GasHawk:</p>
              <List
                items={[
                  'Show stations, prices and reviews near you.',
                  'Fetch fresh prices from our data sources for the area you are viewing.',
                  'Check that price reports come from someone near the station.',
                  'Award points and badges, and rank the leaderboard.',
                  'Moderate reviews and station edits, and prevent spam and abuse.',
                  'Keep your account secure and fix bugs.',
                ]}
              />
              <p>
                We do not use your information for advertising or profiling, and we do not make automated
                decisions about you with legal or similar effects.
              </p>
            </Section>

            <Section id="sharing">
              <p>
                <Strong>Other GasHawk users</Strong> can see your display name next to prices you report,
                reviews and suggested edits you post, and your points, level and rank on the leaderboard. If
                you report without an account, your reports show a generated nickname instead. Other users
                never see your email or location.
              </p>
              <p>
                <Strong>Our moderators and administrators</Strong> can see account details (including email),
                contributions, trust score and moderation history, to keep the community accurate. Their
                actions are logged.
              </p>
              <p>
                <Strong>Service providers</Strong> process data for us under contract and only on our
                instructions:
              </p>
              <Table
                head={['Provider', 'What it does', 'What it receives']}
                rows={providers.map((r) => [r.provider, r.does, r.receives])}
              />
              <p>
                <Strong>Apps you open.</Strong> If you tap Directions, we open your maps app with the
                station&apos;s address. That app&apos;s privacy policy then applies.
              </p>
              <p>
                <Strong>Legal reasons.</Strong> We may disclose information if the law requires it, or to
                protect the safety of users or the public. If GasHawk is sold or merged, your information may
                transfer to the new operator under this policy.
              </p>
              <p>
                Some providers store data outside your province or Canada. It is then subject to the laws of
                that country.
              </p>
            </Section>

            <Section id="location">
              <p>GasHawk uses your location only while the app is open. It never tracks you in the background.</p>
              <List
                items={[
                  <>
                    <Strong>Nearby search.</Strong> Each search sends us your rounded device position and the
                    map area you are viewing. We use it to find stations and prices near you, and share it with
                    service providers as needed to operate GasHawk. We do not store it.
                  </>,
                  <>
                    <Strong>Reports and confirmations.</Strong> We check your position is within 2 km of the
                    station. We store the price, not where you were.
                  </>,
                  <>
                    <Strong>No location history.</Strong> We do not keep a record of your locations, and we
                    remove coordinates from our server logs and error reports.
                  </>,
                  <>
                    <Strong>Place search.</Strong> Searching for a city or address uses your phone&apos;s
                    built-in geocoder.
                  </>,
                ]}
              />
              <p>
                If you deny location access, GasHawk opens on a default city and you can search anywhere.
                Reporting a price needs location.
              </p>
            </Section>

            <Section id="your-rights">
              <List
                items={[
                  <>
                    <Strong>Access and portability.</Strong> Download a copy of your data in Profile → Settings →
                    Download my data. It includes your profile, stats, badges, prices, votes, reviews, edits and
                    points history.
                  </>,
                  <>
                    <Strong>Deletion.</Strong> Delete your account in Profile → Settings → Delete account. This
                    removes your profile, reviews, suggested edits, votes, points and badges. Prices you reported
                    stay as community data with no link to your account.
                  </>,
                  <>
                    <Strong>Correction.</Strong> Contact us to correct your account information.
                  </>,
                  <>
                    <Strong>Location.</Strong> Turn off location for GasHawk in your phone&apos;s settings at any
                    time.
                  </>,
                  <>
                    <Strong>No account.</Strong> You can use GasHawk without an account. Reports made this way
                    are tied only to the install identifier; delete the app to reset it.
                  </>,
                  <>
                    <Strong>Withdraw consent or complain.</Strong> Contact our privacy officer. If you are not
                    satisfied, you can contact the Office of the Privacy Commissioner of Canada or, in Québec,
                    the Commission d&apos;accès à l&apos;information.
                  </>,
                ]}
              />
              <p>We answer requests within 30 days.</p>
            </Section>

            <Section id="retention">
              <Table head={['Data', 'How long']} rows={retention.map((r) => [r.data, r.how])} />
              <p>
                <Strong>Security.</Strong> Passwords are hashed with Argon2, and we store only hashes of sign-in
                tokens. All connections use HTTPS. Access to production data is limited to authorized staff.
                No system is perfectly secure; if a breach creates a real risk of significant harm, we will
                notify you and the regulator as the law requires.
              </p>
            </Section>

            <Section id="children">
              <p>
                GasHawk is not directed at children under [13], and we do not knowingly collect their
                information. If you believe a child has given us information, contact us and we will delete it.
              </p>
            </Section>

            <Section id="changes">
              <p>
                We will post changes here with a new effective date. For significant changes, we will notify
                you in the app before they take effect.
              </p>
            </Section>

            <Section id="contact">
              <p>
                FMW Inc. — Privacy officer: <Email />
              </p>
            </Section>
          </article>
        </div>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-8 text-sm text-ink/60 sm:flex-row lg:px-10">
          <p>GasHawk is operated by FMW Inc.</p>
          <a href="/" className="hover:text-ink">fmw.digital</a>
        </div>
      </footer>
    </>
  )
}
