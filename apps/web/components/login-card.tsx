'use client';
import { emailLoginExists } from '@/app/login/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  LoginEmailInput,
  loginEmailSchema,
  LoginPasswordInput,
  loginPasswordSchema,
} from '@workspace/forms/index';
import { Button } from '@workspace/ui/button';
import { Card, CardContent, CardFooter } from '@workspace/ui/card';
import { Input } from '@workspace/ui/input';
import { Label } from '@workspace/ui/label';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface LoginCardProps {
  // onFormSubmit: (values: LoginPasswordInput) => Promise<void>;
}

export const LoginCard = ({}: LoginCardProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const emailForm = useForm<LoginEmailInput>({
    resolver: zodResolver(loginEmailSchema),
    defaultValues: { email: '' },
    mode: 'onSubmit',
  });

  const passwordForm = useForm<LoginPasswordInput>({
    resolver: zodResolver(loginPasswordSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  });

  const handleEmailSubmission = async (values: LoginEmailInput) => {
    const emailFound = await emailLoginExists(values.email);
    console.log('email found', emailFound);
    if (emailFound) {
      setShowPassword(true);
      passwordForm.setValue('email', values.email);
    } else {
      emailForm.setError('email', { message: 'Email non trouvé' });
    }
  };

  const handleLoginSubmit = async (values: LoginPasswordInput) => {
    // onFormSubmit(values);
    console.log(values);
  };

  return (
    <Card className="w-full max-w-sm p-8">
      <CardContent className="p-0">
        {!showPassword ? (
          <form onSubmit={emailForm.handleSubmit(handleEmailSubmission)}>
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
                  aria-invalid={!!emailForm.formState.errors.email}
                  {...emailForm.register('email')}
                />
                {emailForm.formState.errors.email && (
                  <p className="text-sm text-red-500">
                    {emailForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full text-lg" size="lg">
                Poursuivre
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={passwordForm.handleSubmit(handleLoginSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-lg">
                  Email
                </Label>
                <Input
                  className="text-lg placeholder:text-lg h-12"
                  id="email"
                  type="email"
                  disabled
                  {...passwordForm.register('email')}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-lg">
                  Mot de passe
                </Label>
                <Input
                  className="text-lg placeholder:text-lg h-12"
                  id="password"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  aria-invalid={!!passwordForm.formState.errors.password}
                  {...passwordForm.register('password')}
                />
                {passwordForm.formState.errors.password && (
                  <p className="text-sm text-red-500">
                    {passwordForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full text-lg" size="lg">
                Se connecter
              </Button>
            </div>
          </form>
        )}
      </CardContent>

      <CardFooter className="flex-col gap-2 bg-transparent px-0 pb-8">
        <Button
          type="submit"
          className="w-full text-lg"
          size="lg"
          variant="secondary"
        >
          Poursuivre avec Google
        </Button>
        <Button
          type="submit"
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
