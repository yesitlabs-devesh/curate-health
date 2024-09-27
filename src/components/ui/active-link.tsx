'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Link from 'next/link';

interface ActiveLink {
  children: ReactNode | string;
  href: string;
}

export default function ActiveLink({ children, href }: any) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? 'font-semibold text-black' : 'text-zinc-600'}
    >
      {children}
    </Link>
  );
}
