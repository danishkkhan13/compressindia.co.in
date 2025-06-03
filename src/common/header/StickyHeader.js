'use client';

import Link from 'next/link';

export default function StickyHeader() {
    return (
        <div
            id="stickyHeader"
            className="hidden fixed top-0 left-0 w-full z-[9999] bg-white shadow-md"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                <div className="font-bold text-lg">Sticky Header</div>
                <nav className="space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </div>
    );
}
