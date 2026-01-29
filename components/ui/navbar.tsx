'use client';

import Link from 'next/link';

const navItems = [
    { name: 'Main', href: '/' },
    { name: 'Philosophy', href: '/philosophy' },
    { name: 'Recruit', href: '/recruit' },
    { name: 'Project', href: '/project' },
    { name: 'Archive', href: '/archive' },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 bg-transparent backdrop-blur-sm mix-blend-difference text-white">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
                CREAI+IT
            </Link>
            <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className="text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-widest opacity-80 hover:opacity-100"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
