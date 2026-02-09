import { MoveRight } from 'lucide-react';
import { SignupCard } from '../_components/signup-card';
import Link from 'next/link';
import { AuthSwitchLink } from '../_components/auht-switch-link';

export default function Signup() {
  return (
    <main className="min-h-svh">
      <section className="container mx-auto px-4 py-10 sm:py-12 lg:py-20">
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
                Continuez avec Google ou Microsoft pour connecter votre
                calendrier
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
                Continuez avec Google ou Microsoft pour connecter votre
                calendrier
              </p>
            </div>

            <nav aria-label="Authentification" className="pt-2">
              <p className="text-base md:text-lg">
                Vous avez déjà un compte ?{' '}
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center gap-2 text-blue-600 group"
                >
                  Se connecter
                  <MoveRight
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    height={20}
                    width={20}
                    aria-hidden="true"
                  />
                </Link>
              </p>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
