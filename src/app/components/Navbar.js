"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#B8860B] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Visit Bibiani Logo" width={32} height={32} className="rounded-full" />
            <span className="font-bold text-lg text-[#006400] tracking-wide">Visit Bibiani</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-[#B8860B]">About</Link>
          <Link href="/tourism" className="hover:text-[#B8860B]">Tourism</Link>
          <Link href="/hospitality" className="hover:text-[#B8860B]">Hospitality</Link>
          <Link href="/business" className="hover:text-[#B8860B]">Business</Link>
          <Link href="/gallery" className="hover:text-[#B8860B]">Gallery</Link>
          <Link href="/news" className="hover:text-[#B8860B]">News</Link>
          <Link href="/contact" className="hover:text-[#B8860B]">Contact</Link>
        </div>
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#006400] transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#006400] transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#006400] transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-[#B8860B] px-4 py-2 flex flex-col gap-3">
          <Link href="/about" className="hover:text-[#B8860B]" onClick={() => setOpen(false)}>About</Link>
          <Link href="/tourism" className="hover:text-[#B8860B]" onClick={() => setOpen(false)}>Tourism</Link>
          <Link href="/hospitality" className="hover:text-[#B8860B]" onClick={() => setOpen(false)}>Hospitality</Link>
          <Link href="/business" className="hover:text-[#B8860B]" onClick={() => setOpen(false)}>Business</Link>
          <Link href="/gallery" className="hover:text-[#B8860B]" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/news" className="hover:text-[#B8860B]" onClick={() => setOpen(false)}>News</Link>
          <Link href="/contact" className="hover:text-[#B8860B]" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
} 