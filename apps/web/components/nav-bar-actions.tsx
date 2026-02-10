'use client';
import { Button } from '@workspace/ui/button';
import { useRouter } from 'next/navigation';

export function NavBarActions() {
  const router = useRouter();

  return (
    <>
      <Button
        className="hidden rounded-full sm:inline-flex"
        variant="outline"
        onClick={() => router.push('/signin')}
      >
        Sign In
      </Button>
      <Button
        className="rounded-full"
        onClick={() => router.push('/get-started')}
      >
        Get Started
      </Button>
    </>
  );
}
