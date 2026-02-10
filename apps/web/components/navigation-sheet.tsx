import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@workspace/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@workspace/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';

export function NavigationSheet() {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button className="rounded-full" size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <Logo />
        <NavMenu className="mt-6 [&>div]:h-full" orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
}
