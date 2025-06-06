"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-vb-gold/20' 
        : 'bg-white/90 backdrop-blur border-b border-vb-gold/10'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image 
                src="/logo.png" 
                alt="Visit Bibiani Logo" 
                width={40} 
                height={40} 
                className="rounded-full transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 rounded-full bg-vb-gold/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <div>
              <span className="font-bold text-xl text-vb-green tracking-wide group-hover:text-vb-gold transition-colors">
                Visit Bibiani
              </span>
              <div className="text-xs text-gray-500 -mt-1">Gateway to Western North</div>
            </div>
          </Link>
        </div>
        
        <div className="hidden lg:flex gap-8 text-sm font-medium">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/tourism" className="nav-link">Tourism</Link>
          <Link href="/hospitality" className="nav-link">Hospitality</Link>
          <Link href="/business" className="nav-link">Business</Link>
          <Link href="/leadership" className="nav-link">Leadership</Link>
          <Link href="/news" className="nav-link">News</Link>
          <Link href="/gallery" className="nav-link">Gallery</Link>
          <Link href="/shop" className="nav-link">Shop</Link>
          <Link href="/contact" className="btn-outline text-sm py-2 px-4">Contact</Link>
        </div>
        
        <button 
          className="lg:hidden flex flex-col gap-1.5 p-2" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-vb-green transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-vb-green transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-vb-green transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-vb-gold/20 transition-all duration-300 ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4 space-y-3">
          <Link href="/about" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>About</Link>
          <Link href="/tourism" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>Tourism</Link>
          <Link href="/hospitality" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>Hospitality</Link>
          <Link href="/business" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>Business</Link>
          <Link href="/leadership" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>Leadership</Link>
          <Link href="/news" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>News</Link>
          <Link href="/gallery" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/shop" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/contact" className="block py-2 hover:text-vb-gold transition-colors" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
      
      <style jsx>{`
        .nav-link {
          @apply relative py-2 px-1 text-gray-700 hover:text-vb-green transition-colors duration-300;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--vb-gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}