import Link from "next/link";

const focusAreas = [
  {
    icon: "🐾",
    title: "Fiches protégés vivantes",
    description:
      "Suivez soins, caractères, photos et coups de cœur sur une carte qui donne envie de faire un câlin.",
  },
  {
    icon: "💌",
    title: "Familles d'accueil chouchoutées",
    description:
      "Disponibilités, protocoles, rappels doux… chaque famille reçoit les bonnes infos sans stress.",
  },
  {
    icon: "💶",
    title: "Budget vétérinaire tout doux",
    description:
      "Centralisez devis, factures et remboursements pour garder le cap sur vos ressources vitales.",
  },
  {
    icon: "📣",
    title: "Annonces adoption lumineuses",
    description:
      "Créez des fiches colorées, suivez les candidatures et célébrez chaque départ heureux.",
  },
];

const journeySteps = [
  {
    title: "1. Préparez votre nid",
    detail:
      "Importez vos animaux, paramétrez les équipes et activez les modules qui vous ressemblent.",
  },
  {
    title: "2. Invitez la dream team",
    detail:
      "Bénévoles, vétérinaires, familles d'accueil : chacun reçoit son accès sécurisé et ses rappels.",
  },
  {
    title: "3. Pilotez en douceur",
    detail:
      "Tableaux partagés, registres automatiques, suivi budget : tout est synchronisé et rassurant.",
  },
  {
    title: "4. Faites rayonner vos protégés",
    detail:
      "Programmez les annonces, envoyez des nouvelles aux donateurs et partagez les succès en un clic.",
  },
];

const carePillars = [
  {
    icon: "📘",
    title: "Registre légal automatique",
    blurb: "Chaque entrée et sortie d'animal est historisée et prête à être transmise aux autorités.",
  },
  {
    icon: "🛡️",
    title: "Confiance et conformité RGPD",
    blurb: "Hébergement européen, rôles fins et traçabilité des actions sensibles.",
  },
  {
    icon: "🤝",
    title: "Accompagnement humain",
    blurb: "Onboardings, sessions visio et ressources pédagogiques pour rassurer toute l'équipe.",
  },
];

const quickStats = [
  {
    label: "Animaux dorlotés / mois",
    value: "520+",
    description: "Chacun profite d'un suivi complet et à jour.",
  },
  {
    label: "Temps gagné / semaine",
    value: "16 h",
    description: "Moins de tableurs, plus de caresses.",
  },
  {
    label: "Familles sereines",
    value: "98%",
    description: "Elles savent toujours quoi préparer et quand.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-teal-50 text-slate-900">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-6rem] top-[-8rem] h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4rem] top-1/4 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6rem] left-[20%] h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
      />

      <a
        href="#main-content"
        className="absolute left-4 top-4 -translate-y-full rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Passer au contenu principal
      </a>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-8 sm:px-10">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-xl font-semibold text-white shadow">AA</span>
          <span>
            <span className="block text-lg font-semibold text-emerald-900">AnimAdmin</span>
            <span className="block text-sm text-emerald-900/70">La bulle rassurante des refuges</span>
          </span>
        </Link>
        <nav aria-label="Navigation principale" className="flex flex-1 items-center justify-end gap-3 text-sm font-medium text-emerald-950 sm:gap-5">
          <Link href="#focus" className="rounded-full px-4 py-2 transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            Super-pouvoirs
          </Link>
          <Link href="#journey" className="rounded-full px-4 py-2 transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            Parcours serein
          </Link>
          <Link href="#care" className="rounded-full px-4 py-2 transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            Gage de confiance
          </Link>
          <Link
            href="/login"
            className="hidden rounded-full border border-emerald-300 px-5 py-2 text-emerald-900 shadow-sm transition-colors hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:inline-flex"
          >
            Se connecter
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Créer mon espace
          </Link>
        </nav>
      </header>

      <main id="main-content" className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-28 sm:px-10">
        <section className="relative overflow-hidden rounded-[3rem] bg-white/70 px-8 py-14 shadow-xl shadow-emerald-500/10 backdrop-blur md:px-12">
          <div className="pointer-events-none absolute inset-x-20 top-10 h-32 rounded-full bg-gradient-to-r from-emerald-200/40 via-transparent to-amber-200/40 blur-3xl" aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                <span aria-hidden="true">🌟</span>
                Bulle joyeuse & 100% refuge-friendly
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                  Bienvenue dans la bulle AnimAdmin.
                </h1>
                <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                  Gérez vos protégés, vos familles d'accueil, vos frais vétérinaires et vos campagnes d'adoption dans un espace coloré, accessible et pensé pour apaiser toute l'équipe.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Démarrer mon essai guidé
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-8 py-3 text-base font-semibold text-emerald-900 shadow-sm transition-colors hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  J'ai déjà un compte
                </Link>
              </div>
              <dl className="grid gap-4 sm:grid-cols-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm">
                    <dt className="text-xs uppercase tracking-wide text-emerald-600">{stat.label}</dt>
                    <dd className="mt-2 text-2xl font-semibold text-emerald-950">{stat.value}</dd>
                    <p className="mt-1 text-xs text-slate-600">{stat.description}</p>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -top-6 right-10 h-16 w-16 rounded-full bg-rose-300/50 blur-xl" aria-hidden="true" />
              <div className="absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-teal-200/60 blur-xl" aria-hidden="true" />
              <div className="relative w-full max-w-[420px] rounded-3xl border border-emerald-200/70 bg-white p-6 shadow-2xl shadow-emerald-500/20">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
                    <span aria-hidden="true">🐾</span> Journal des protégés
                  </span>
                  <span className="text-xs text-emerald-500">Aujourd'hui</span>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3 rounded-2xl bg-emerald-50/80 px-4 py-3">
                    <span className="mt-1 text-lg" aria-hidden="true">
                      💚
                    </span>
                    <div>
                      <p className="font-semibold text-emerald-900">Mango – départ en famille d'accueil</p>
                      <p className="text-xs text-slate-600">Kit d'arrivée validé • Contrat envoyé à Camille</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 rounded-2xl border border-emerald-100 px-4 py-3">
                    <span className="mt-1 text-lg" aria-hidden="true">
                      🩺
                    </span>
                    <div>
                      <p className="font-semibold text-emerald-900">Rio – suivi vétérinaire</p>
                      <p className="text-xs text-slate-600">Vaccin rappel du 12/04 planifié avec Dr Dubois</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 rounded-2xl border border-emerald-100 px-4 py-3">
                    <span className="mt-1 text-lg" aria-hidden="true">
                      📣
                    </span>
                    <div>
                      <p className="font-semibold text-emerald-900">Nouvelle annonce</p>
                      <p className="text-xs text-slate-600">Plume cherche un foyer calme • 3 candidatures en cours</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-emerald-600/10 px-4 py-3 text-xs text-emerald-900">
                  <span className="font-semibold">Registre d'entrées / sorties</span>
                  <span>À jour ✔</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-semibold text-emerald-950">Ce que vous pilotez au quotidien</h2>
            <p className="text-base text-slate-700">
              AnimAdmin rassemble toutes les missions vitales d'une association de protection animale dans une interface qui respire la bienveillance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <article key={area.title} className="flex flex-col gap-3 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <span aria-hidden="true" className="text-2xl">
                  {area.icon}
                </span>
                <h3 className="text-lg font-semibold text-emerald-950">{area.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="space-y-10 rounded-[2.5rem] bg-white/80 px-6 py-12 shadow-lg backdrop-blur sm:px-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-semibold text-emerald-950">Un parcours d'adoption maîtrisé de A à Z</h2>
            <p className="text-base text-slate-700">
              De l'arrivée d'un animal jusqu'à sa vie dans son nouveau foyer, chaque étape est suivie, anticipée et partagée avec les bons interlocuteurs.
            </p>
          </div>
          <ol className="grid gap-6 lg:grid-cols-2">
            {journeySteps.map((step) => (
              <li key={step.title} className="flex flex-col gap-3 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white p-6 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">{step.title}</span>
                <p className="text-sm leading-relaxed text-slate-700">{step.detail}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-3 rounded-3xl border border-emerald-100 bg-emerald-600/10 px-6 py-5 text-sm text-emerald-900 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold">Besoin d'aide pour migrer vos données ?</p>
            <p>Notre équipe onboarding s'occupe des imports historiques et forme vos bénévoles en visio.</p>
          </div>
        </section>

        <section id="care" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-semibold text-emerald-950">La sérénité comme priorité</h2>
            <p className="text-base text-slate-700">
              AnimAdmin garde vos données en sécurité, vous accompagne au quotidien et vous aide à répondre aux obligations réglementaires.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {carePillars.map((pillar) => (
              <article key={pillar.title} className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                <span aria-hidden="true" className="text-2xl">
                  {pillar.icon}
                </span>
                <h3 className="text-lg font-semibold text-emerald-950">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{pillar.blurb}</p>
              </article>
            ))}
          </div>
          <aside className="rounded-[2rem] bg-emerald-900 px-6 py-8 text-emerald-50 shadow-xl sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Parole de terrain</p>
            <blockquote className="mt-3 space-y-4">
              <p className="text-lg leading-relaxed text-white">
                « Nous avons enfin un cockpit commun : les bénévoles savent qui préparer, les familles d'accueil reçoivent des rappels doux, et le registre est toujours prêt pour les inspections. »
              </p>
              <footer className="text-sm text-emerald-200">Sofia, présidente de l'association Ronrons & Sauvetages</footer>
            </blockquote>
          </aside>
        </section>

        <section className="rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-500 px-8 py-12 text-white shadow-xl sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Prêts à offrir une organisation douce à votre refuge ?</h2>
              <p className="text-base text-emerald-50">
                Réservez une démonstration avec notre équipe, importez vos données en douceur et accompagnez vos bénévoles avec un outil pensé pour eux.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-emerald-700 shadow transition-transform hover:-translate-y-0.5"
                >
                  Créer mon espace maintenant
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Se connecter
                </Link>
              </div>
            </div>
            <div className="rounded-3xl bg-white/15 p-6 text-sm leading-relaxed text-emerald-50">
              <p className="font-semibold">Votre checklist de lancement</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true">✨</span>
                  Paramétrage express accompagné par notre équipe
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true">📚</span>
                  Modèles prêts à l'emploi pour vos registres et contrats
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true">💬</span>
                  Support humain en 24 h ouvrées pour toutes vos questions
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-emerald-200/70 bg-white/80 px-6 py-6 text-sm text-slate-600 backdrop-blur sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AnimAdmin. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/accessibilite" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
              Déclaration d'accessibilité
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
              Confidentialité
            </Link>
            <Link href="/contact" className="transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
