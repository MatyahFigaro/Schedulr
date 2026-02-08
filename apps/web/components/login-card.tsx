'use client';
import { Button } from '@workspace/ui/button';
import { Card, CardContent, CardFooter } from '@workspace/ui/card';
import { Input } from '@workspace/ui/input';
import { Label } from '@workspace/ui/label';

export const LoginCard = () => {
  return (
    <Card className="w-full max-w-sm p-8">
      <CardContent className="p-0">
        <form>
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
                required
              />
            </div>
            <Button type="submit" className="w-full text-lg" size="lg">
              Poursuivre
            </Button>
          </div>
        </form>
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
