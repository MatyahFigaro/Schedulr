import { SignInCard } from '@/app/(auth)/_components/signin-card';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

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
          <p className="text-xl flex flex-col items-center justify-center gap-2">
            Vous n&apos;avez pas de compte ?
            <Link
              href="/signup"
              className="flex items-center text-blue-600 gap-4 group text-md"
            >
              S&apos;inscrire gratuitement{' '}
              <MoveRight
                className="transition-transform duration-200 group-hover:translate-x-1"
                height={24}
                width={24}
              />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
