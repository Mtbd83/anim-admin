import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-50 via-white to-emerald-100 px-4 py-12 text-slate-900">
      <main className="grid w-full max-w-5xl gap-12 rounded-3xl border border-emerald-200/70 bg-white/80 p-8 shadow-xl backdrop-blur lg:grid-cols-[1.1fr,0.9fr] lg:p-12">
        <section className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            <span aria-hidden="true">💡</span>
            Bienvenue parmi les protecteurs
          </p>
          <h1 className="text-3xl font-semibold text-emerald-950 sm:text-4xl">Heureux de vous revoir !</h1>
          <p className="text-base leading-relaxed text-slate-700">
            Connectez-vous pour retrouver vos suivis, valider les adoptions du jour et envoyer des nouvelles fraîches à vos familles d'accueil.
          </p>
          <div className="space-y-4 rounded-2xl bg-emerald-600/10 p-5 text-sm text-emerald-900">
            <p className="font-semibold">Nouvelle fonctionnalité</p>
            <p>Un fil activités vous attend pour ne rien manquer : départ en famille d'accueil, rappels de vaccins, promeneurs disponibles...</p>
          </div>
          <p className="text-sm text-slate-600">
            Besoin d'un compte ?{" "}
            <Link href="/register" className="font-semibold text-emerald-700 hover:text-emerald-600">
              Créez votre organisation en quelques minutes
            </Link>
          </p>
        </section>

        <section aria-labelledby="login-title" className="rounded-3xl border border-emerald-200/70 bg-white p-6 shadow-lg sm:p-8">
          <h2 id="login-title" className="text-2xl font-semibold text-emerald-950">
            Connexion AnimAdmin
          </h2>
          <p className="mt-2 text-sm text-slate-600">Heureux de vous compter parmi les gardiens du bien-être animal.</p>
          <form className="mt-6 space-y-6" action="#" method="post">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-emerald-900">
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="password" className="font-medium text-emerald-900">
                  Mot de passe
                </label>
                <Link href="/reset-password" className="text-emerald-700 hover:text-emerald-600">
                  Mot de passe oublié ?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="remember" className="text-sm text-slate-700">
                Se souvenir de moi sur cet appareil
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Se connecter
            </button>
          </form>
          <div className="mt-6 rounded-2xl bg-emerald-50/80 px-4 py-3 text-xs leading-relaxed text-emerald-700">
            <p className="font-semibold">Astuce tranquillité</p>
            <p>Pensez à inviter vos vétérinaires partenaires : ils peuvent sécuriser les dossiers médicaux directement dans AnimAdmin.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
