'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@workspace/ui/button';
import { signIn, useSession } from '@workspace/auth/react-client';
import {
  LoginPasswordInput,
  loginPasswordSchema,
} from '@workspace/forms/index';
import { Card, CardContent, CardFooter } from '@workspace/ui/card';
import { Input } from '@workspace/ui/input';
import { Label } from '@workspace/ui/label';
import { emailLoginExists } from '@/app/login/actions';

type Step = 'email' | 'password';

export const LoginCard = () => {
  const [step, setStep] = useState<Step>('email');
  const { data } = useSession();

  console.log(data);

  const form = useForm<LoginPasswordInput>({
    resolver: zodResolver(loginPasswordSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  });

  const handleEmailStep = async () => {
    const isValid = await form.trigger('email');
    if (!isValid) return;

    const email = form.getValues('email');
    const emailFound = await emailLoginExists(email);

    if (emailFound) {
      setStep('password');
      return;
    }
    form.setError('email', { message: 'Email non trouvé' });
  };

  const onSubmit = async (values: LoginPasswordInput) => {
    if (step === 'email') return;
    await signIn.email({
      email: values.email,
      password: values.password,
    });
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Card className="w-full max-w-sm p-8">
      <CardContent className="p-0">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                className="text-lg placeholder:text-lg h-12"
                id="email"
                type="email"
                placeholder="Entrez votre e-mail"
                aria-invalid={!!form.formState.errors.email}
                readOnly={step === 'password'}
                {...form.register('email')}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            {step === 'password' && (
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-lg">
                  Mot de passe
                </Label>
                <Input
                  className="text-lg placeholder:text-lg h-12"
                  id="password"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  aria-invalid={!!form.formState.errors.password}
                  {...form.register('password')}
                />
                {form.formState.errors.password && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>
            )}

            {step === 'email' ? (
              <Button
                type="button"
                className="w-full text-lg"
                size="lg"
                onClick={handleEmailStep}
                disabled={isSubmitting}
              >
                Poursuivre
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full text-lg"
                size="lg"
                disabled={isSubmitting}
              >
                Se connecter
              </Button>
            )}
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2 bg-transparent px-0 pb-8">
        <Button
          type="button"
          className="w-full text-lg"
          size="lg"
          variant="secondary"
        >
          Poursuivre avec Google
        </Button>
        <Button
          type="button"
          className="w-full text-lg"
          size="lg"
          variant="secondary"
        >
          Poursuivre avec Microsoft
        </Button>
      </CardFooter>
    </Card>
  );
};
