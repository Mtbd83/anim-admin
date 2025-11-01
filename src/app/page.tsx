import Link from "next/link";

const features = [
  {
    icon: "paw" as const,
    title: "Suivi des animaux recueillis",
    description:
      "Centralisez les fiches d'accueil, les soins v\u00E9t\u00E9rinaires et les d\u00E9marches d'adoption pour chaque prot\u00E9g\u00E9.",
  },
  {
    icon: "shield" as const,
    title: "Protection des donn\u00E9es",
    description:
      "Des autorisations fines et un h\u00E9bergement s\u00E9curis\u00E9 en Europe pour respecter les adh\u00E9rents et les adoptants.",
  },
  {
    icon: "compass" as const,
    title: "Organisation des b\u00E9n\u00E9voles",
    description:
      "Planifiez les tourn\u00E9es de sauvetage, les permanences de refuge et les \u00E9v\u00E9nements de sensibilisation en quelques clics.",
  },
];

type FeatureIconName = (typeof features)[number]["icon"];

function FeatureIcon({ name }: { name: FeatureIconName }) {
  switch (name) {
    case "paw":
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
          <circle cx="8.25" cy="9" r="2.1" fill="currentColor" opacity="0.9" />
          <circle cx="15.75" cy="9" r="2.1" fill="currentColor" opacity="0.9" />
          <circle cx="6.75" cy="6" r="1.45" fill="currentColor" opacity="0.75" />
          <circle cx="17.25" cy="6" r="1.45" fill="currentColor" opacity="0.75" />
          <path
            d="M12 11.75c-2.9 0-5.25 2.15-5.25 5.25 1.65 1.15 3.45 1.75 5.25 1.75s3.6-.6 5.25-1.75c0-3.1-2.35-5.25-5.25-5.25Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      );
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
            AA
          </div>
          <div>
            <p className="text-base font-semibold text-emerald-900">AnimAdmin</p>
            <p className="text-sm text-emerald-900/70">Pilotage des associations de protection animale</p>
          </div>
        </div>
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 text-sm font-medium text-emerald-950 md:flex">
          <Link href="#solutions" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
            Fonctionnalit\u00E9s
          </Link>
          <Link href="#impact" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
            Impact
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
            Pens\u00E9 avec des refuges et sanctuaires partenaires
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl"
          >
            Administrez votre association de protection animale en toute s\u00E9r\u00E9nit\u00E9.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            AnimAdmin centralise vos sauvetages, vos familles d'accueil et vos campagnes de dons. Une interface accessible qui lib\u00E8re du temps pour ce qui compte : le bien-\u00EAtre des animaux et l'accompagnement des b\u00E9n\u00E9voles.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Demander une d\u00E9mo
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
              <dt className="text-sm text-emerald-900/70">Animaux suivis / mois</dt>
              <dd className="mt-1 text-2xl font-semibold text-emerald-950">320+</dd>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <dt className="text-sm text-emerald-900/70">B\u00E9n\u00E9voles coordonn\u00E9s</dt>
              <dd className="mt-1 text-2xl font-semibold text-emerald-950">150+</dd>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur">
              <dt className="text-sm text-emerald-900/70">Temps gagn\u00E9 / semaine</dt>
              <dd className="mt-1 text-2xl font-semibold text-emerald-950">12 h</dd>
            </div>
          </dl>
        </section>

        <section id="solutions" aria-labelledby="features-title" className="rounded-3xl bg-white/80 px-6 py-10 shadow-lg backdrop-blur sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Fonctionnalit\u00E9s cl\u00E9s</p>
              <h2 id="features-title" className="mt-2 text-3xl font-semibold text-emerald-950">
                Des outils pens\u00E9s pour vos prot\u00E9g\u00E9s et vos \u00E9quipes
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-700">
              AnimAdmin r\u00E9unit le suivi des animaux, la gestion des b\u00E9n\u00E9voles et la collecte de dons pour faire grandir votre association sans perdre en rigueur.
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

        <section id="impact" aria-labelledby="engagement-title" className="rounded-3xl bg-emerald-900 px-6 py-12 text-emerald-50 shadow-xl sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[2fr,1fr] lg:items-center">
            <div>
              <h2 id="engagement-title" className="text-3xl font-semibold">Notre engagement bien-\u00EAtre animal</h2>
              <p className="mt-4 text-base leading-relaxed text-emerald-100">
                AnimAdmin est co-construit avec des refuges partenaires. Nous privil\u00E9gions la transparence, la tra\u00E7abilit\u00E9 des soins et l'accessibilit\u00E9 num\u00E9rique pour soutenir chaque membre de votre association.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    1
                  </span>
                  Tableaux de bord d\u00E9di\u00E9s aux soins, adoptions, suivis v\u00E9t\u00E9rinaires et contrats de familles d'accueil.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    2
                  </span>
                  Parcours d'entr\u00E9e pour vos b\u00E9n\u00E9voles avec rappels automatis\u00E9s de formation et de planning.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    3
                  </span>
                  Support humain en 24 h et base de connaissances d\u00E9di\u00E9e aux obligations l\u00E9gales des associations animales.
                </li>
              </ul>
            </div>
            <aside className="rounded-2xl bg-emerald-800/60 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-wide text-emerald-200">\u00C9tude de cas</p>
              <p className="mt-3 text-lg font-semibold text-white">
                \u00AB Gr\u00E2ce \u00E0 AnimAdmin, nous suivons 280 animaux en simultan\u00E9 et chaque adoption reste transparente pour nos donateurs. \u00BB
              </p>
              <p className="mt-4 text-sm text-emerald-100">
                L\u00E9a, pr\u00E9sidente de l'association Sauvetage F\u00E9lins Bretagne.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-emerald-200/60 bg-white/80 px-6 py-6 text-sm text-slate-600 backdrop-blur sm:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{"\u00A9"} {new Date().getFullYear()} AnimAdmin. Tous droits r\u00E9serv\u00E9s.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/accessibilite" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
              D\u00E9claration d'accessibilit\u00E9
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2">
              Confidentialit\u00E9
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
