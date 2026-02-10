'use client';
import { Card, CardContent, CardFooter } from '@workspace/ui/card';
import { Button } from '@workspace/ui/button';
import { signIn } from '@workspace/auth/react-client';
import Image from 'next/image';
import { emailLoginExists } from '@/app/(auth)/signin/actions';
import { AuthStepsForm } from './auth-form';

export const SignInCard = () => {
  return (
    <Card className="w-full max-w-sm p-6 sm:p-8">
      <CardContent className="p-0">
        <AuthStepsForm
          submitLabel="Se connecter"
          onEmailContinue={async (email) => {
            const emailFound = await emailLoginExists(email);
            return emailFound
              ? { ok: true }
              : { ok: false, error: 'Email non trouvé' };
          }}
          onSubmit={async (values) => {
            const { error } = await signIn.email({
              email: values.email,
              password: values.password,
              callbackURL: '/',
            });

            if (error) {
              return { ok: false, error: new Error('Mot de passe incorrect') };
            }

            return { ok: true };
          }}
          footer={
            <CardFooter className="flex flex-col gap-2 bg-transparent px-0 pt-6 pb-8">
              <Button
                type="button"
                className="w-full text-lg items-center gap-4"
                size="lg"
                variant="secondary"
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
              <Button
                type="button"
                className="w-full text-lg gap-4"
                size="lg"
                variant="secondary"
              >
                <Image
                  src="/logos/microsoft-icon.svg"
                  alt=""
                  aria-hidden="true"
                  width={28}
                  height={28}
                />
                Poursuivre avec Microsoft
              </Button>
            </CardFooter>
          }
        />
      </CardContent>
    </Card>
  );
};
