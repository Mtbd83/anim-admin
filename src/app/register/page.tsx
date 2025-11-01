import Link from "next/link";

const organisationTypes = [
  "Association de protection animale",
  "Refuge indépendant",
  "SPA locale",
  "Collectif de familles d'accueil",
  "Autre structure solidaire",
];

export default function RegisterPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-100 px-4 py-12 text-slate-900">
      <main className="w-full max-w-5xl space-y-10 rounded-3xl border border-emerald-200/70 bg-white/80 p-8 shadow-2xl backdrop-blur sm:p-12">
        <header className="space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            <span aria-hidden="true">🌈</span>
            L'aventure AnimAdmin commence ici
          </p>
          <h1 className="text-3xl font-semibold text-emerald-950 sm:text-4xl">
            Créons un havre de sérénité pour votre organisation
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700">
            Centralisez vos suivis d'animaux, vos dépenses vétérinaires, vos familles d'accueil et vos annonces d'adoption dans un tableau de bord qui respire la bienveillance.
          </p>
        </header>

        <form className="grid gap-10" action="#" method="post">
          <fieldset className="space-y-6 rounded-3xl border border-emerald-200/70 bg-white p-6 shadow-sm sm:p-8">
            <legend className="text-lg font-semibold text-emerald-950">Informations sur l'organisation</legend>
            <p className="text-sm text-slate-600">
              Ces informations alimentent vos registres légaux, vos reçus fiscaux et vos fiches d'adoption.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="organisation-name" className="text-sm font-medium text-emerald-900">
                  Nom de l'organisation
                </label>
                <input
                  id="organisation-name"
                  name="organisationName"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="organisation-type" className="text-sm font-medium text-emerald-900">
                  Type d'organisation
                </label>
                <select
                  id="organisation-type"
                  name="organisationType"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Sélectionnez une option</option>
                  {organisationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="registration-number" className="text-sm font-medium text-emerald-900">
                  Numéro RNA / SIRET
                </label>
                <input
                  id="registration-number"
                  name="registrationNumber"
                  type="text"
                  placeholder="Facultatif, mais utile pour vos reçus fiscaux"
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-emerald-900">
                  Ville principale
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="organisation-email" className="text-sm font-medium text-emerald-900">
                  E-mail de contact officiel
                </label>
                <input
                  id="organisation-email"
                  name="organisationEmail"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-6 rounded-3xl border border-emerald-200/70 bg-white p-6 shadow-sm sm:p-8">
            <legend className="text-lg font-semibold text-emerald-950">Votre compte AnimAdmin</legend>
            <p className="text-sm text-slate-600">
              Vous serez l'administrateur principal. Vous pourrez inviter vos bénévoles et vétérinaires ensuite.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-emerald-900">
                  Prénom
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-emerald-900">
                  Nom
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="personal-email" className="text-sm font-medium text-emerald-900">
                  Votre e-mail
                </label>
                <input
                  id="personal-email"
                  name="personalEmail"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-emerald-900">
                  Téléphone (facultatif)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-emerald-900">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium text-emerald-900">
                  Confirmer le mot de passe
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
            <div className="space-y-3 rounded-2xl bg-emerald-50/90 px-4 py-3 text-sm text-emerald-900">
              <p className="font-semibold">Bon à savoir</p>
              <p>Vous pourrez connecter votre comptabilité et générer automatiquement les registres d'entrée / sortie après validation de votre compte.</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-700">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="terms" className="leading-relaxed">
                J'accepte la{" "}
                <Link href="/confidentialite" className="font-semibold text-emerald-700 hover:text-emerald-600">
                  politique de confidentialité
                </Link>{" "}
                et je m'engage à respecter le bien-être animal en utilisant AnimAdmin.
              </label>
            </div>
          </fieldset>

          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-emerald-200/70 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
            <div className="space-y-1 text-sm text-slate-600">
              <p className="font-semibold text-emerald-900">Besoin d'aide ?</p>
              <p>Notre équipe vous accompagne pour importer vos données existantes et former vos bénévoles.</p>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Lancer mon espace AnimAdmin
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-slate-600">
          Déjà membre ?{" "}
          <Link href="/login" className="font-semibold text-emerald-700 hover:text-emerald-600">
            Connectez-vous ici
          </Link>
        </p>
      </main>
    </div>
  );
}
