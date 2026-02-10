'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@workspace/ui/button';
import {
  LoginPasswordInput,
  loginPasswordSchema,
} from '@workspace/forms/index';
import { Input } from '@workspace/ui/input';
import { Label } from '@workspace/ui/label';

type Step = 'email' | 'password';

type EmailContinueResult = { ok: boolean; error?: string };
type OnSubmitResult = { ok: boolean; error?: Error };

interface AuthStepsFormProps {
  submitLabel: string;
  onSubmit: (values: LoginPasswordInput) => Promise<OnSubmitResult>;
  onEmailContinue?: (email: string) => Promise<EmailContinueResult>;
  footer?: React.ReactNode;
}

export const AuthStepsForm = ({
  submitLabel,
  onSubmit,
  onEmailContinue,
  footer,
}: AuthStepsFormProps) => {
  const [step, setStep] = useState<Step>('email');

  const form = useForm<LoginPasswordInput>({
    resolver: zodResolver(loginPasswordSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  });

  const handleEmailStep = async () => {
    const isValid = await form.trigger('email');
    if (!isValid) return;

    if (onEmailContinue) {
      const email = form.getValues('email');
      const result = await onEmailContinue(email);
      if (!result.ok) {
        form.setError('email', { message: result.error });
        return;
      }
    }
    setStep('password');
  };

  const handleSubmit = async (values: LoginPasswordInput) => {
    if (step === 'email') return;
    const result = await onSubmit(values);

    if (!result.ok) {
      form.setError('password', { message: result.error?.message });
      return;
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex flex-col gap-6 pb-6">
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
              disabled={step === 'password'}
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
              {submitLabel}
            </Button>
          )}
        </div>
      </form>

      {footer}
    </>
  );
};
