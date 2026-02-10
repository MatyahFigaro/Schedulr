import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import { NavBarActions } from './nav-bar-actions';

export function Navbar() {
  return (
    <nav className="fixed w-full mx-auto h-16 border bg-background">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <NavBarActions />
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
