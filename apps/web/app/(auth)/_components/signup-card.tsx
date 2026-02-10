'use client';

import { signIn, signUp } from '@workspace/auth/react-client';
import { Button } from '@workspace/ui/button';
import { CardFooter } from '@workspace/ui/card';
import { emailLoginExists } from '../signin/actions';
import { AuthStepsForm } from './auth-form';
import Image from 'next/image';

export function SignupCard() {
  return (
    <AuthStepsForm
      submitLabel="Se connecter"
      onEmailContinue={async (email) => {
        const emailFound = await emailLoginExists(email);
        return emailFound
          ? { ok: false, error: 'Email déjà utilisé' }
          : { ok: true };
      }}
      onSubmit={async (values) => {
        const { error } = await signUp.email({
          email: values.email,
          password: values.password,
          name: values.email,
        });

        if (error) {
          return {
            ok: false,
            error: new Error("Erreur lors de l'inscription"),
          };
        }

        return { ok: true };
      }}
      footer={
        <CardFooter className="flex flex-col gap-2 bg-transparent px-0 pt-6">
          <Button
            type="button"
            className="w-full text-lg items-center gap-4"
            size="lg"
            variant="secondary"
            onClick={async () => {
              await signIn.social({
                provider: 'google',
              });
            }}
          >
            <Image
              src="/logos/google-icon.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
            />
            Poursuivre avec Google
          </Button>
        </CardFooter>
      }
    />
  );
}
