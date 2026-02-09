import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface AuthSwitchLinkProps {
  question: string;
  href: string;
  linkLabel: string;
  icon?: ReactNode;
}

const DEFAULT_ICON = (
  <MoveRight
    className="transition-transform duration-200 group-hover:translate-x-1"
    height={24}
    width={24}
  />
);

export function AuthSwitchLink({
  question,
  href,
  linkLabel,
  icon = DEFAULT_ICON,
}: AuthSwitchLinkProps) {
  return (
    <p className="text-xl flex flex-col items-center justify-center gap-2">
      {question}
      <Link
        href={href}
        className="flex items-center text-blue-600 gap-4 group text-md"
      >
        {linkLabel}
        {icon}
      </Link>
    </p>
  );
}
