import { Check } from 'lucide-react';
import { SignupCard } from '../_components/signup-card';
import { AuthSwitchLink } from '../_components/auht-switch-link';

export default function Signup() {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12 lg:py-48">
      <div className="flex flex-col gap-10 divide-y divide-border lg:flex-row lg:gap-16 lg:divide-y-0 lg:divide-x">
        <div className="space-y-6 lg:flex-1 lg:pr-12 pb-10 lg:pb-0">
          <header className="space-y-3">
            <h1 className="text-4xl leading-tight md:text-5xl">
              Connectez-vous à votre compte
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Aucune carte de crédit requise. Passez à un forfait supérieur à
              tout moment.
            </p>
          </header>

          <div>
            <SignupCard />
            <p className="text-sm text-muted-foreground">
              Continuez avec Google ou Microsoft pour connecter votre calendrier
            </p>
          </div>

          <nav aria-label="Authentification" className="pt-2">
            <AuthSwitchLink
              question="Vous avez déjà un compte ?"
              href="/signin"
              linkLabel="Se connecter"
            />
          </nav>
        </div>

        <div className="space-y-6 lg:flex-1 lg:pl-12">
          <div className="space-y-6 lg:flex-1 lg:pl-12 flex flex-col justify-center">
            <section
              className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow p-8 flex flex-col gap-6 max-w-xl mx-auto"
              aria-labelledby="teams-features-title"
            >
              <button
                type="button"
                className="self-start bg-blue-100 text-blue-700 font-medium px-4 py-1 rounded-full text-sm mb-2"
                aria-label="Essayez le plan Teams gratuitement"
              >
                Essayez le plan Teams gratuitement
              </button>
              <h2
                id="teams-features-title"
                className="text-2xl font-bold leading-snug"
              >
                Explorez les fonctionnalités premium avec votre essai gratuit de
                14 jours du plan Teams
              </h2>
              <ul
                className="space-y-3 text-base text-zinc-700 dark:text-zinc-200"
                role="list"
              >
                <li className="flex items-start gap-2" role="listitem">
                  <Check
                    className="text-blue-600 mt-1"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>Réunions multipersonnes et co-organisées</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <Check
                    className="text-blue-600 mt-1"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>Distribution des réunions Round Robin</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <Check
                    className="text-blue-600 mt-1"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>Rappels de réunion, suivis et notifications</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <Check
                    className="text-blue-600 mt-1"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>
                    Connectez des outils de paiement tels que PayPal ou Stripe
                  </span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <Check
                    className="text-blue-600 mt-1"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>Supprimer la marque Calendly</span>
                </li>
              </ul>
              <footer className="pt-6" aria-label="Clients de confiance">
                <p className="text-xs text-zinc-500 text-center mb-4">
                  Rejoignez des entreprises de premier plan en utilisant l’outil
                  de planification n° 1
                </p>
                {/* Example for logos, add your own images and alt text */}
                <div
                  className="flex flex-wrap justify-center items-center gap-6"
                  aria-hidden="true"
                >
                  {/* <Image src="/logos/dropbox.svg" alt="Dropbox" width={80} height={24} /> */}
                  {/* ...other logos... */}
                </div>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
