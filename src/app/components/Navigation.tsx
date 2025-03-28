'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/')}`}
            >
              Home
            </Link>
            <Link
              href="/character-sheet"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/character-sheet')}`}
            >
              Character Sheet
            </Link>
            <Link
              href="/skill-tree"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/skill-tree')}`}
            >
              Skill Tree
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 