import Link from "next/link";

const highlights = [
  {
    icon: "🐾",
    title: "Suivi vivant des protégés",
    description:
      "Fiches animal complètes, photos, traitements et humeurs du jour accessibles en un clin d'œil pour toute l'équipe.",
  },
  {
    icon: "💶",
    title: "Frais vétérinaires maîtrisés",
    description:
      "Suivez les dépenses, rattachez-les aux animaux concernés et gardez toujours une longueur d'avance sur votre budget.",
  },
  {
    icon: "🏠",
    title: "Familles d'accueil chouchoutées",
    description:
      "Gérez les disponibilités, envoyez les protocoles d'accueil et rassurez vos familles d'accueil en un message.",
  },
  {
    icon: "📘",
    title: "Registre légal sans stress",
    description:
      "Générez automatiquement votre registre d'entrée / sortie conforme aux obligations administratives.",
  },
  {
    icon: "📣",
    title: "Annonces d'adoption lumineuses",
    description:
      "Publiez des fiches adoption séduisantes, partagez-les en un clic et suivez les candidatures jusqu'à la signature.",
  },
  {
    icon: "📊",
    title: "Compta sereine",
    description:
      "Donations, factures, reçus fiscaux et rapports mensuels : tout est aligné pour vos assemblées générales.",
  },
];

const steps = [
  {
    title: "Créez votre cocon",
    description:
      "Paramétrez votre refuge ou association, définissez vos équipes et importez vos protégés en quelques minutes.",
  },
  {
    title: "Invitez votre tribu",
    description:
      "Attribuez les rôles, automatisez les rappels, partagez les informations essentielles sans stress ni tableur.",
  },
  {
    title: "Suivez, partagez, célébrez",
    description:
      "Pilotez chaque adoption, suivez les soins, envoyez des nouvelles aux donateurs et fêtez les succès ensemble.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-teal-50 via-white to-emerald-100 text-slate-900">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5rem] top-[-6rem] hidden h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl sm:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4rem] top-1/3 hidden h-72 w-72 rounded-full bg-teal-200/40 blur-3xl md:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-3rem] left-1/3 hidden h-64 w-64 rounded-full bg-lime-200/30 blur-3xl lg:block"
      />

      <a
        href="#main-content"
        className="absolute left-4 top-4 -translate-y-full rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Passer au contenu principal
      </a>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-semibold text-white shadow">
            🌿
          </div>
          <div>
            <p className="text-lg font-semibold text-emerald-950">AnimAdmin</p>
            <p className="text-sm text-emerald-950/70">Le copilote rayonnant des refuges et associations</p>
          </div>
        </div>
        <nav aria-label="Navigation principale" className="flex flex-1 flex-wrap items-center justify-end gap-4 text-sm font-medium text-emerald-950 md:gap-6">
          <Link href="#features" className="rounded-full px-3 py-2 transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            Super-pouvoirs
          </Link>
          <Link href="#how-it-works" className="rounded-full px-3 py-2 transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            Comment ça marche
          </Link>
          <Link href="#testimonials" className="rounded-full px-3 py-2 transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            On nous aime
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-5 py-2 text-sm font-semibold text-emerald-900 shadow-sm transition-colors hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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

      <main id="main-content" className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-6 sm:px-10 sm:pt-10">
        <section className="grid gap-10 lg:grid-cols-[1.25fr,1fr]" aria-labelledby="hero-title">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-emerald-900 shadow-sm backdrop-blur">
              <span className="text-lg" aria-hidden="true">
                ✨
              </span>
              L'allié joyeux des associations et refuges
            </p>
            <div className="space-y-4">
              <h1
                id="hero-title"
                className="text-4xl font-bold leading-tight tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl"
              >
                AnimAdmin, le copilote fun et rassurant pour choyer chaque animal.
              </h1>
              <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                Un environnement coloré et ultra-accessible pour suivre vos protégés, vos familles d'accueil, vos dépenses vétérinaires et vos annonces d'adoption sans jamais perdre le sourire.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Créer mon espace gratuit
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-8 py-3 text-base font-semibold text-emerald-900 shadow-sm transition-colors hover:border-emerald-400 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Voir les super-pouvoirs
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-wide text-emerald-600">Adoptions réussies</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-950">4 820+</p>
                <p className="mt-1 text-sm text-slate-600">Chaque adoption suit un parcours clair et apaisant.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-wide text-emerald-600">Temps gagné / semaine</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-950">14 h</p>
                <p className="mt-1 text-sm text-slate-600">Remplacez les tableurs par un cockpit commun.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-wide text-emerald-600">Équipe sereine</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-950">97%</p>
                <p className="mt-1 text-sm text-slate-600">Des bénévoles qui savent toujours quoi faire.</p>
              </div>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-emerald-200/70 bg-white/80 p-8 shadow-xl shadow-emerald-600/10 backdrop-blur">
            <div className="rounded-2xl bg-emerald-600/10 p-4 text-sm text-emerald-900">
              <p className="font-semibold">Carte adoption validée</p>
              <p className="mt-1 text-sm text-slate-700">« Samba part chez Pauline dimanche ! »</p>
              <p className="mt-3 text-xs text-emerald-700">Checklist signée • Vaccins ok • Kit d'arrivée prêt</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-emerald-950">Ce que vous pilotez</h2>
              <ul className="mt-4 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="text-lg">
                    🎯
                  </span>
                  <span>Des suivis animaux qui consolident toutes les infos, notes et frais en direct.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="text-lg">
                    💌
                  </span>
                  <span>Des familles d'accueil entourées par des rappels doux et automatiques.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="text-lg">
                    🌟
                  </span>
                  <span>Des annonces d'adoption qui brillent et mettent vos protégés en valeur.</span>
                </li>
              </ul>
            </div>
            <p className="rounded-2xl bg-emerald-50/90 px-4 py-3 text-sm text-emerald-900">
              Conçu main dans la patte avec des soigneurs, des coordinateurs et des familles d'accueil qui vivent la même aventure que vous.
            </p>
          </aside>
        </section>

        <section id="features" aria-labelledby="features-title" className="rounded-3xl bg-white/80 px-6 py-12 shadow-lg backdrop-blur sm:px-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Super-pouvoirs</p>
            <h2 id="features-title" className="text-3xl font-semibold text-emerald-950">
              Tout ce dont votre refuge rêvait pour s'organiser sans perdre l'humain.
            </h2>
            <p className="text-base text-slate-700">
              Chaque module d'AnimAdmin a été pensé pour vous faire gagner du temps tout en renforçant la confiance avec vos bénévoles, vétérinaires et adoptants.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="flex flex-col gap-3 rounded-2xl border border-emerald-200/70 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md focus-within:-translate-y-1 focus-within:shadow-md"
              >
                <span aria-hidden="true" className="text-2xl">
                  {highlight.icon}
                </span>
                <h3 className="text-lg font-semibold text-emerald-950">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" aria-labelledby="steps-title" className="rounded-3xl border border-emerald-200/70 bg-white/80 px-6 py-12 shadow-lg backdrop-blur sm:px-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Installation express</p>
            <h2 id="steps-title" className="text-3xl font-semibold text-emerald-950">
              Votre équipe embarque en moins d'une semaine.
            </h2>
            <p className="text-base text-slate-700">
              AnimAdmin guide chaque étape avec des checklists prêtes à l'emploi et un accompagnement humain.
            </p>
          </div>
          <ol className="mt-8 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-base font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-emerald-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="testimonials" aria-labelledby="testimonial-title" className="rounded-3xl bg-emerald-900 px-6 py-12 text-emerald-50 shadow-xl sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Paroles de terrain</p>
              <h2 id="testimonial-title" className="text-3xl font-semibold">Ils ont retrouvé le sourire et du temps</h2>
              <p className="text-base text-emerald-100">
                « Nous sommes passés de six tableurs chaotiques à une plateforme qui nous prévient quand un contrôle vétérinaire approche. Les bénévoles se sentent soutenus et les adoptants reçoivent des nouvelles en deux minutes. »
              </p>
              <p className="text-sm text-emerald-200">Claire, coordinatrice du collectif HappyPattes.</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/10 p-6 text-sm text-emerald-100">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wide text-emerald-200">Tableau quotidien</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-700/50 px-3 py-1 text-xs font-medium text-white">
                  <span aria-hidden="true">💚</span> Sérénité : 9/10
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span aria-hidden="true">📌</span>
                  <span>3 visites vétérinaires à confirmer • rappels automatiques envoyés.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true">🧡</span>
                  <span>2 nouvelles familles d'accueil accueillies avec un guide personnalisé.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true">🎉</span>
                  <span>Adoption de Mina validée • kit de départ et contrat générés.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-emerald-900 shadow transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
            >
              Je crée mon espace AnimAdmin
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-base font-semibold text-white transition-colors hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
            >
              J'ai déjà un compte
            </Link>
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
