import { Button } from '@workspace/ui/button';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';

export function Navbar() {
  return (
    <nav className="fixed w-full mx-auto h-16 border bg-background">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            className="hidden rounded-full sm:inline-flex"
            variant="outline"
          >
            Sign In
          </Button>
          <Button className="rounded-full">Get Started</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
