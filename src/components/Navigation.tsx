'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/skill-tree', label: 'Skill Tree' },
    { path: '/character-sheet', label: 'Character Sheet' },
    { path: '/abilities', label: 'Abilities' },
    { path: '/equipment', label: 'Equipment' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded transition-colors ${
                  pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Image
              src="/256px.png"
              alt="Tree of Life Icon"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
} 