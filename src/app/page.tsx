import Link from "next/link";

const features = [
  {
    icon: "compass" as const,
    title: "Onboarding guid?",
    description:
      "Un parcours ?tape par ?tape qui accompagne votre organisation depuis la cr?ation du compte jusqu'? la mise en service.",
  },
  {
    icon: "shield" as const,
    title: "Donn?es s?curis?es",
    description:
      "Une plateforme chiffr?e et conforme aux normes d'accessibilit? pour prot?ger les informations sensibles de vos ?quipes.",
  },
  {
    icon: "leaf" as const,
    title: "Exp?rience inclusive",
    description:
      "Interfaces contrast?es, navigation clavier et contenus en lecture facile pour que chacun se sente accueilli.",
  },
];

type FeatureIconName = (typeof features)[number]["icon"];

function FeatureIcon({ name }: { name: FeatureIconName }) {
  switch (name) {
    case "compass":
      return (
        <svg
          aria-hidden="true"
          focusable="false"
          className="h-6 w-6 text-emerald-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="9" opacity="0.25" fill="currentColor" />
          <path
            d="M9.75 9.75 14.25 9 14 14.25 9.75 14.5 9.75 9.75Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="1.25" fill="currentColor" />
        </svg>
      );
    case "shield":
      return (
        <svg
          aria-hidden="true"
          focusable="false"
          className="h-6 w-6 text-emerald-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 3.75 6 6v6c0 4.28 2.25 6.75 6 8.25 3.75-1.5 6-3.97 6-8.25V6l-6-2.25Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9.75 12.75 11.25 14.25 14.25 10.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "leaf":
      return (
        <svg
          aria-hidden="true"
          focusable="false"
          className="h-6 w-6 text-emerald-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M20.25 3.75c-4.5 0-9 1.5-12.75 5.25s-5.25 8.25-5.25 12.75c4.5 0 9-1.5 12.75-5.25S20.25 8.25 20.25 3.75Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3.75 20.25 9 15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-slate-900">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8rem] top-[-6rem] hidden h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl sm:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6rem] top-1/3 hidden h-72 w-72 rounded-full bg-teal-200/30 blur-3xl md:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4rem] left-1/4 hidden h-64 w-64 rounded-full bg-lime-200/25 blur-3xl lg:block"
      />

      <a
        href="#main-content"
        className="absolute left-4 top-4 -translate-y-full rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white shadow focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
      >
        Passer au contenu principal
      </a>

      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">
            ??
          </div>
          <div>
            <p className="text-base font-semibold text-emerald-900">VerteVoix</p>
            <p className="text-sm text-emerald-900/70">Plateforme inclusive pour vos communaut?s</p>
          </div>
        </div>
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 text-sm font-medium text-emerald-950 md:flex">
          <Link href="#features" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
            Fonctionnalit?s
          </Link>
          <Link href="#engagement" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
            Engagement
          </Link>
          <Link href="/login" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
            Se connecter
          </Link>
        </nav>
      </header>

      <main id="main-content" className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 pb-20 pt-10 sm:px-10 sm:pt-16">
        <section className="max-w-3xl" aria-labelledby="hero-title">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-900 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Plateforme pens?e pour une confiance durable
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-semibold tracking-tight text-emerald-950 sm:text-5xl"
          >
            Construisez une organisation sereine et accessible pour toutes les personnes qui vous rejoignent.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            VerteVoix simplifie la mise en place de votre espace collaboratif. Nous combinons un design nature apaisant, une navigation accessible et des outils fiables pour que chacun puisse contribuer en toute confiance.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/setup"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-base font-semibold text-white shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 transition-colors hover:bg-emerald-800"
            >
              Cr?er mon compte
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-8 py-3 text-base font-semibold text-emerald-900 shadow-sm transition-colors hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Se connecter
            </Link>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <dt className="text-sm text-emerald-900/70">Temps moyen de mise en route</dt>
              <dd className="mt-1 text-2xl font-semibold text-emerald-950">48 heures</dd>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <dt className="text-sm text-emerald-900/70">Satisfaction des membres</dt>
              <dd className="mt-1 text-2xl font-semibold text-emerald-950">96 %</dd>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <dt className="text-sm text-emerald-900/70">Accessibilit? v?rifi?e</dt>
              <dd className="mt-1 text-2xl font-semibold text-emerald-950">WCAG 2.1 AA</dd>
            </div>
          </dl>
        </section>

        <section id="features" aria-labelledby="features-title" className="rounded-3xl bg-white/80 px-6 py-10 shadow-lg backdrop-blur sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Fonctionnalit?s cl?s</p>
              <h2 id="features-title" className="mt-2 text-3xl font-semibold text-emerald-950">
                Des outils pens?s pour l'humain et la nature
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-700">
              Chaque fonctionnalit? est test?e avec des personnes en situation de handicap et s'adapte ? votre organisation, quelle que soit sa taille.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="flex flex-col gap-4 rounded-2xl border border-emerald-200/60 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md focus-within:border-emerald-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-emerald-950">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="engagement" aria-labelledby="engagement-title" className="rounded-3xl bg-emerald-900 px-6 py-12 text-emerald-50 shadow-xl sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[2fr,1fr] lg:items-center">
            <div>
              <h2 id="engagement-title" className="text-3xl font-semibold">Notre engagement accessibilit?</h2>
              <p className="mt-4 text-base leading-relaxed text-emerald-100">
                Nous co-construisons VerteVoix avec des associations expertes en inclusion. Audit r?gulier, contrastes rigoureux, transcriptions syst?matiques : nous ne laissons personne de c?t?.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    ?
                  </span>
                  Tests utilisateurs trimestriels avec lecteurs d'?cran et navigation clavier.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    ?
                  </span>
                  Contenus pr?ts ? l'emploi pour sensibiliser vos ?quipes ? l'accessibilit?.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    ?
                  </span>
                  Support humain disponible par chat, e-mail ou t?l?phone avec r?ponses en langage clair.
                </li>
              </ul>
            </div>
            <aside className="rounded-2xl bg-emerald-800/60 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-wide text-emerald-200">?tude de cas</p>
              <p className="mt-3 text-lg font-semibold text-white">
                ? Gr?ce ? VerteVoix, nous avons accueilli 35 nouveaux b?n?voles en douceur, sans jamais sacrifier l'accessibilit?. ?
              </p>
              <p className="mt-4 text-sm text-emerald-100">
                Am?lie, coordinatrice d'une association environnementale.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-emerald-200/60 bg-white/80 px-6 py-6 text-sm text-slate-600 backdrop-blur sm:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>? {new Date().getFullYear()} VerteVoix. Tous droits r?serv?s.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/accessibilite" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
              D?claration d'accessibilit?
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
              Confidentialit?
            </Link>
            <Link href="/contact" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
