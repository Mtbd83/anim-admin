import Link from "next/link";

const featureHighlights = [
  {
    icon: "🐈",
    title: "Suivi émotionnel",
    description: "Notes, photos, soins et humeurs partagées en direct avec toute l'équipe.",
  },
  {
    icon: "🐕",
    title: "Familles rassurées",
    description: "Protocoles prêts, rappels doux et conversations centralisées pour les familles d'accueil.",
  },
  {
    icon: "🩺",
    title: "Budget vétérinaire maîtrisé",
    description: "Factures, remboursements et plafonds suivis sans tableur.",
  },
];

const communityVoices = [
  {
    name: "Léa",
    role: "Refuge Les Poilus Heureux",
    quote:
      "On se concentre à nouveau sur les câlins. AnimAdmin nous rappelle les vaccins et partage les nouvelles aux bénévoles automatiquement.",
  },
  {
    name: "Samir",
    role: "Collectif Patte sur le cœur",
    quote:
      "Plus besoin de jongler entre huit conversations. Les familles d'accueil reçoivent leurs consignes et on voit qui est disponible en un clin d'œil.",
  },
  {
    name: "Anaïs",
    role: "Association Chiens du Soleil",
    quote:
      "Les donateurs reçoivent des histoires lumineuses sans effort. On a réduit notre temps administratif de moitié.",
  },
];

const dailyToolkit = [
  {
    icon: "📋",
    title: "Registre express",
    detail: "Entrées et sorties d'animaux générées automatiquement et conformes aux contrôles.",
  },
  {
    icon: "🧾",
    title: "Compta simplifiée",
    detail: "Dépenses, reçus fiscaux, bilans pour l'AG prêts à être envoyés.",
  },
  {
    icon: "📢",
    title: "Annonces vivantes",
    detail: "Présentez vos protégés avec des modèles chaleureux et partageables en un clic.",
  },
  {
    icon: "🤗",
    title: "Accompagnement humain",
    detail: "Onboardings en visio, bibliothèque de ressources et réponses en moins de 24 h.",
  },
];

const adoptionStories = [
  {
    name: "Nougat",
    species: "chaton gaffeur",
    status: "Adopté dimanche",
    note: "Polaroid, contrat et kit de départ envoyés automatiquement à sa nouvelle famille.",
  },
  {
    name: "Mango",
    species: "chiot timide",
    status: "En famille d'accueil",
    note: "Checklist du vétérinaire partagée, rappels de traitement programmés.",
  },
  {
    name: "Lila",
    species: "lapine curieuse",
    status: "Annonce en cours",
    note: "Portrait lumineux publié, 5 candidatures suivies dans AnimAdmin.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff9f3] text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:rounded-full focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Passer au contenu principal
      </a>

      <header className="sticky top-0 z-40 border-b border-orange-100/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:px-10">
          <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-semibold text-white shadow-lg">
              🐾
            </span>
            <span>
              <span className="block text-lg font-semibold text-slate-900">AnimAdmin</span>
              <span className="block text-sm text-slate-500">Le copilote des refuges heureux</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm font-medium text-slate-600 md:flex">
            <Link href="#fonctionnalites" className="rounded-full px-4 py-2 transition-colors hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2">
              Fonctionnalités
            </Link>
            <Link href="#voix" className="rounded-full px-4 py-2 transition-colors hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2">
              Témoignages
            </Link>
            <Link href="#outils" className="rounded-full px-4 py-2 transition-colors hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2">
              Outils du quotidien
            </Link>
          </nav>
          <div className="flex items-center gap-3 text-sm font-semibold">
            <Link
              href="/login"
              className="rounded-full px-4 py-2 text-slate-600 transition-colors hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
            >
              Se connecter
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-white shadow transition-transform hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
            >
              Créer mon espace
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-14 sm:px-10">
        <section className="grid gap-12 overflow-hidden rounded-[2.75rem] border border-orange-100 bg-white/90 px-8 py-14 shadow-xl shadow-orange-200/50 backdrop-blur md:grid-cols-[1.1fr,0.9fr] md:px-12">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              <span aria-hidden="true">✨</span>
              Refuges sereins, animaux choyés
            </p>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Un refuge radieux pour chaque compagnon.
              </h1>
              <p className="text-lg text-slate-600 sm:text-xl">
                AnimAdmin rassemble vos suivis, vos bénévoles et vos familles d'accueil dans une interface douce, pensée pour dégager du temps et offrir plus de présence aux animaux.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-orange-300/50 transition-transform hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
              >
                Démarrer gratuitement
              </Link>
              <Link
                href="#voix"
                className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-8 py-3 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:border-orange-300 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2"
              >
                Découvrir les témoignages
              </Link>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-orange-100 bg-white/90 p-5 shadow-sm">
                <dt className="text-xs uppercase tracking-wide text-orange-500">Protéges accompagnés</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900">520+</dd>
                <p className="mt-1 text-xs text-slate-500">Chaque fiche reste vivante et partagée.</p>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-white/90 p-5 shadow-sm">
                <dt className="text-xs uppercase tracking-wide text-orange-500">Temps gagné / semaine</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900">16 h</dd>
                <p className="mt-1 text-xs text-slate-500">Moins d'administratif, plus de câlins.</p>
              </div>
              <div className="rounded-2xl border border-orange-100 bg-white/90 p-5 shadow-sm">
                <dt className="text-xs uppercase tracking-wide text-orange-500">Familles rassurées</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900">98%</dd>
                <p className="mt-1 text-xs text-slate-500">Des informations claires et des rappels doux.</p>
              </div>
            </dl>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -top-10 right-6 h-28 w-28 rounded-full bg-rose-200/60 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-12 left-6 h-32 w-32 rounded-full bg-sky-200/60 blur-3xl" aria-hidden="true" />
            <div className="relative w-full max-w-[420px] space-y-4 rounded-3xl border border-orange-100 bg-white p-6 shadow-2xl shadow-orange-200/80">
              {adoptionStories.map((story) => (
                <article key={story.name} className="flex items-start gap-4 rounded-2xl border border-orange-100/70 bg-orange-50/60 px-4 py-4 text-sm text-slate-700">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg">
                    {story.name === "Lila" ? "🐇" : story.name === "Mango" ? "🐕" : "🐈"}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {story.name} <span className="text-xs text-slate-500">· {story.species}</span>
                    </p>
                    <p className="text-xs font-medium text-orange-600">{story.status}</p>
                    <p className="mt-1 text-xs leading-relaxed">{story.note}</p>
                  </div>
                </article>
              ))}
              <div className="rounded-2xl bg-slate-900 px-4 py-3 text-xs text-white">
                <p className="font-semibold">Registre conforme</p>
                <p className="text-[11px] text-slate-100/80">Entrées / sorties à jour · Contrôle prêt ✅</p>
              </div>
            </div>
          </div>
        </section>

        <section id="fonctionnalites" className="space-y-10">
          <header className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900">Ce que fait AnimAdmin pour vous</h2>
            <p className="max-w-3xl text-base text-slate-600">
              Des fonctionnalités pensées avec des soigneurs, des coordinateurs et des familles d'accueil pour accompagner chaque instant de vie au refuge.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {featureHighlights.map((item) => (
              <article key={item.title} className="flex h-full flex-col gap-3 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <span aria-hidden="true" className="text-2xl">
                  {item.icon}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="voix" className="space-y-10 rounded-[2.75rem] border border-rose-100 bg-rose-50/60 px-6 py-12 shadow-inner sm:px-10">
          <header className="space-y-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">Voix du terrain</p>
            <h2 className="text-3xl font-semibold text-slate-900">Ils respirent enfin et ça se voit</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {communityVoices.map((voice) => (
              <figure key={voice.name} className="flex h-full flex-col gap-3 rounded-3xl border border-rose-200 bg-white p-6 text-left shadow-sm">
                <p className="text-sm leading-relaxed text-slate-600">“{voice.quote}”</p>
                <figcaption className="mt-auto text-sm">
                  <p className="font-semibold text-slate-900">{voice.name}</p>
                  <p className="text-xs text-slate-500">{voice.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="outils" className="space-y-10">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-slate-900">Votre boîte à outils préférée</h2>
            <p className="max-w-3xl text-base text-slate-600">
              Tout est prêt pour gagner du temps, garder la trace et choyer vos protégés.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {dailyToolkit.map((tool) => (
              <article key={tool.title} className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span aria-hidden="true" className="text-2xl">
                  {tool.icon}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{tool.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{tool.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[2.75rem] border border-sky-100 bg-gradient-to-br from-sky-100 via-white to-purple-100 px-8 py-14 shadow-xl sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr,0.7fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Besoin de souffler ? On s'occupe de l'installation.</h2>
              <p className="text-base text-slate-600">
                Import de vos tableurs, formation de votre équipe et configuration des rappels : tout est guidé par un humain qui connaît la vie en refuge.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-base font-semibold text-white shadow transition-transform hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                >
                  Réserver une démo guidée
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
                >
                  Nous écrire
                </Link>
              </div>
            </div>
            <div className="rounded-3xl bg-white/80 p-6 text-sm text-slate-700 shadow">
              <p className="font-semibold text-slate-900">Votre checklist de démarrage</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">🧭</span>
                  Rendez-vous visio pour comprendre votre fonctionnement.
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">📦</span>
                  Import de vos animaux, familles et budgets existants.
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">🎉</span>
                  Ateliers d'onboarding pour vos bénévoles et familles d'accueil.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-orange-100/70 bg-white/80 px-6 py-8 text-sm text-slate-500 backdrop-blur sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AnimAdmin — un refuge plus humain, un animal plus serein.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/accessibilite" className="hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2">
              Accessibilité
            </Link>
            <Link href="/confidentialite" className="hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2">
              Confidentialité
            </Link>
            <Link href="/contact" className="hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
