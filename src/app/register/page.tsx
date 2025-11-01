"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const organisationTypes = [
  "Association de protection animale",
  "Refuge indépendant",
  "SPA locale",
  "Collectif de familles d'accueil",
  "Autre structure solidaire",
];

type Step = "form" | "verify" | "success";

export default function RegisterPage() {
  const [step, setStep] = useState<Step>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [pendingUserId, setPendingUserId] = useState<string | null>(null);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setVerifyError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const password = (formData.get("password") as string | null)?.trim();
    const confirmPassword = (formData.get("confirmPassword") as string | null)?.trim();

    if (!password || password.length < 8) {
      setFormError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Les mots de passe ne correspondent pas.");
      return;
    }

    const payload = {
      firstName: (formData.get("firstName") as string | null)?.trim() ?? "",
      lastName: (formData.get("lastName") as string | null)?.trim() ?? "",
      email: (formData.get("personalEmail") as string | null)?.trim().toLowerCase() ?? "",
      password,
      organizationName: (formData.get("organisationName") as string | null)?.trim() ?? "",
      organizationType: (formData.get("organisationType") as string | null)?.trim() || undefined,
      organizationCity: (formData.get("city") as string | null)?.trim() || undefined,
      organizationEmail:
        (formData.get("organisationEmail") as string | null)?.trim().toLowerCase() || undefined,
      registrationNumber: (formData.get("registrationNumber") as string | null)?.trim() || undefined,
    };

    if (!payload.firstName || !payload.lastName) {
      setFormError("Renseignez votre prénom et votre nom.");
      return;
    }

    if (!payload.email) {
      setFormError("Renseignez une adresse e-mail valide.");
      return;
    }

    if (!payload.organizationName) {
      setFormError("Le nom de l'organisation est obligatoire.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as {
        user?: { id?: string };
        verification?: { required?: boolean };
        error?: string;
      };

      if (!response.ok) {
        setFormError(data?.error ?? "Impossible de créer votre espace pour le moment.");
        return;
      }

      if (!data?.user?.id) {
        setFormError("Réponse inattendue du serveur.");
        return;
      }

      setPendingUserId(data.user.id);
      setPendingEmail(payload.email);
      setStep("verify");
      form.reset();
    } catch (error) {
      console.error(error);
      setFormError("Une erreur est survenue. Merci de réessayer");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerify = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVerifyError(null);

    if (!pendingUserId) {
      setVerifyError("Session d'inscription expirée. Veuillez recommencer.");
      setStep("form");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const code = (formData.get("verificationCode") as string | null)?.trim();

    if (!code || code.length !== 6) {
      setVerifyError("Le code doit contenir 6 chiffres.");
      return;
    }

    setIsVerifying(true);

    try {
      const response = await fetch("/api/register/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: pendingUserId, code }),
      });

      const data = (await response.json().catch(() => ({}))) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        setVerifyError(data?.error ?? "Le code saisi n'est pas valide.");
        return;
      }

      setStep("success");
    } catch (error) {
      console.error(error);
      setVerifyError("Impossible de vérifier le code pour le moment.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-sky-50 px-4 py-12 text-slate-900">
      <main className="w-full max-w-5xl space-y-10 rounded-[2.5rem] border border-orange-100 bg-white/90 p-8 shadow-2xl shadow-orange-200/40 backdrop-blur sm:p-12">
        {step === "form" && (
          <>
            <header className="space-y-4 text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                <span aria-hidden="true">🧡</span>
                Votre refuge mérite un copilote humain
              </p>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Créons ensemble votre espace AnimAdmin
              </h1>
              <p className="mx-auto max-w-2xl text-base text-slate-600">
                Quelques minutes suffisent pour rassembler votre équipe, sécuriser vos données et offrir un parcours d'adoption aux petits soins.
              </p>
            </header>

            <form className="grid gap-10" onSubmit={handleSubmit} noValidate>
              <fieldset className="space-y-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
                <legend className="text-lg font-semibold text-slate-900">Votre refuge</legend>
                <p className="text-sm text-slate-600">
                  Ces informations alimenteront vos registres et vos modèles de documents.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="organisation-name" className="text-sm font-medium text-slate-900">
                      Nom de l'organisation
                    </label>
                    <input
                      id="organisation-name"
                      name="organisationName"
                      type="text"
                      required
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="organisation-type" className="text-sm font-medium text-slate-900">
                      Type d'organisation
                    </label>
                    <select
                      id="organisation-type"
                      name="organisationType"
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                      defaultValue=""
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
                    <label htmlFor="registration-number" className="text-sm font-medium text-slate-900">
                      Numéro RNA / SIRET (optionnel)
                    </label>
                    <input
                      id="registration-number"
                      name="registrationNumber"
                      type="text"
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium text-slate-900">
                      Ville principale
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="organisation-email" className="text-sm font-medium text-slate-900">
                      E-mail de contact officiel (optionnel)
                    </label>
                    <input
                      id="organisation-email"
                      name="organisationEmail"
                      type="email"
                      autoComplete="email"
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-6 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
                <legend className="text-lg font-semibold text-slate-900">Votre compte</legend>
                <p className="text-sm text-slate-600">
                  Vous serez l'administrateur principal. Vous pourrez inviter les bénévoles ensuite.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-slate-900">
                      Prénom
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-slate-900">
                      Nom
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="personal-email" className="text-sm font-medium text-slate-900">
                      Votre e-mail
                    </label>
                    <input
                      id="personal-email"
                      name="personalEmail"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-900">
                      Téléphone (optionnel)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-slate-900">
                      Mot de passe
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirm-password" className="text-sm font-medium text-slate-900">
                      Confirmer le mot de passe
                    </label>
                    <input
                      id="confirm-password"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    />
                  </div>
                </div>
                <div className="space-y-3 rounded-2xl bg-orange-50 px-4 py-3 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">Bon à savoir</p>
                  <p>
                    Nous importons vos données historiques et accompagnons vos bénévoles pour que chacun se sente prêt dès le premier jour.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-700">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-orange-200 text-orange-500 focus:ring-orange-300"
                  />
                  <label htmlFor="terms" className="leading-relaxed">
                    J'accepte la{" "}
                    <Link href="/confidentialite" className="font-semibold text-orange-600 hover:text-orange-500">
                      politique de confidentialité
                    </Link>{" "}
                    et je m'engage à protéger le bien-être animal avec AnimAdmin.
                  </label>
                </div>
              </fieldset>

              {formError && (
                <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {formError}
                </p>
              )}

              <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
                <div className="space-y-1 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Besoin d'un coup de patte ?</p>
                  <p>Notre équipe onboarding vous répond en moins de 24 h.</p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-orange-400"
                >
                  {isSubmitting ? "Envoi en cours..." : "Lancer mon espace"}
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-slate-600">
              Déjà membre ?{" "}
              <Link href="/login" className="font-semibold text-orange-600 hover:text-orange-500">
                Connectez-vous ici
              </Link>
            </p>
          </>
        )}

        {step === "verify" && (
          <section className="space-y-6 text-center">
            <header className="space-y-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                <span aria-hidden="true">📮</span>
                Un code vient de vous être envoyé
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">Confirmez votre adresse e-mail</h2>
              <p className="mx-auto max-w-xl text-base text-slate-600">
                Saisissez le code à 6 chiffres reçu sur {pendingEmail}. Il expire dans 15 minutes.
              </p>
            </header>

            <form className="mx-auto max-w-md space-y-6" onSubmit={handleVerify} noValidate>
              <div className="space-y-2 text-left">
                <label htmlFor="verificationCode" className="text-sm font-medium text-slate-900">
                  Code de vérification
                </label>
                <input
                  id="verificationCode"
                  name="verificationCode"
                  inputMode="numeric"
                  maxLength={6}
                  pattern="[0-9]*"
                  required
                  className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-center text-2xl tracking-[0.5em] text-slate-900 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

              {verifyError && (
                <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {verifyError}
                </p>
              )}

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-sky-400"
              >
                {isVerifying ? "Vérification..." : "Valider mon code"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep("form");
                  setFormError(null);
                  setVerifyError(null);
                }}
                className="text-sm font-medium text-slate-500 hover:text-slate-700"
              >
                Modifier mes informations
              </button>
            </form>
          </section>
        )}

        {step === "success" && (
          <section className="space-y-4 text-center">
            <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl">🐾</p>
            <h2 className="text-3xl font-semibold text-slate-900">Adresse vérifiée, bienvenue !</h2>
            <p className="mx-auto max-w-xl text-base text-slate-600">
              Votre compte est prêt. Connectez-vous pour finaliser la configuration de votre refuge et inviter vos bénévoles.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
              >
                Se connecter
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-7 py-3 text-base font-semibold text-emerald-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              >
                Retour à l'accueil
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
