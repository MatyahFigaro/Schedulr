import { SignInCard } from '@/app/(auth)/_components/signin-card';
import { AuthSwitchLink } from '../_components/auht-switch-link';

export default function Login() {
  return (
    <section className="container min-h-svh flex items-center justify-center px-4 mx-auto">
      <div className="flex flex-col items-center gap-6 w-full max-w-249">
        <div className="flex items-center justify-center flex-col w-108 max-w-249 bg-transparent">
          <h1 className="text-5xl leading-tight text-center">
            Connectez-vous à votre compte
          </h1>
        </div>
        <SignInCard />
        <div className="flex items-center justify-center py-4 w-108 max-w-249 text-center">
          <AuthSwitchLink
            question="Vous n'avez pas de compte ?"
            href="/signup"
            linkLabel="S'inscrire gratuitement"
          />
        </div>
      </div>
    </section>
  );
}
