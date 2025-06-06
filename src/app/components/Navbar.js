"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-vb-gold shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Visit Bibiani Logo" width={32} height={32} className="rounded-full" />
            <span className="font-bold text-lg text-vb-green tracking-wide">Visit Bibiani</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-vb-gold">About</Link>
          <Link href="/tourism" className="hover:text-vb-gold">Tourism</Link>
          <Link href="/hospitality" className="hover:text-vb-gold">Hospitality</Link>
          <Link href="/business" className="hover:text-vb-gold">Business</Link>
          <Link href="/leadership" className="hover:text-vb-gold">Leadership</Link>
          <Link href="/news" className="hover:text-vb-gold">News</Link>
          <Link href="/gallery" className="hover:text-vb-gold">Gallery</Link>
          <Link href="/shop" className="hover:text-vb-gold">Shop</Link>
          <Link href="/contact" className="hover:text-vb-gold">Contact</Link>
        </div>
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="w-6 h-0.5 bg-vb-green" />
          <span className="w-6 h-0.5 bg-vb-green" />
          <span className="w-6 h-0.5 bg-vb-green" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-vb-gold px-4 py-2 flex flex-col gap-3">
          <Link href="/about" className="hover:text-vb-gold" onClick={() => setOpen(false)}>About</Link>
          <Link href="/tourism" className="hover:text-vb-gold" onClick={() => setOpen(false)}>Tourism</Link>
          <Link href="/hospitality" className="hover:text-vb-gold" onClick={() => setOpen(false)}>Hospitality</Link>
          <Link href="/business" className="hover:text-vb-gold" onClick={() => setOpen(false)}>Business</Link>
          <Link href="/leadership" className="hover:text-vb-gold" onClick={() => setOpen(false)}>Leadership</Link>
          <Link href="/news" className="hover:text-vb-gold" onClick={() => setOpen(false)}>News</Link>
          <Link href="/gallery" className="hover:text-vb-gold" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/shop" className="hover:text-vb-gold" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/contact" className="hover:text-vb-gold" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
} 