
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-vb-green text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-bold text-lg">Visit Bibiani</span>
          <span className="text-xs">&copy; {new Date().getFullYear()} Visit Bibiani. All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-vb-gold">About</Link>
          <Link href="/tourism" className="hover:text-vb-gold">Tourism</Link>
          <Link href="/contact" className="hover:text-vb-gold">Contact</Link>
        </div>
        <div className="flex gap-4">
          <span className="w-8 h-8 bg-vb-gold rounded-full flex items-center justify-center">F</span>
          <span className="w-8 h-8 bg-vb-gold rounded-full flex items-center justify-center">T</span>
          <span className="w-8 h-8 bg-vb-gold rounded-full flex items-center justify-center">I</span>
        </div>
      </div>
    </footer>
  );
} 