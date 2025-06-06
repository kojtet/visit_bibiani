import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-vb-green text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-vb-gold rounded-full flex items-center justify-center">
                <span className="text-vb-green font-bold text-xl">VB</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Visit Bibiani</h3>
                <p className="text-sm text-green-200">Gateway to Western North</p>
              </div>
            </div>
            <p className="text-green-100 mb-6 max-w-md">
              Discover the beauty, heritage, and opportunities that make Bibiani a unique destination 
              for visitors and investors alike.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-vb-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <span className="text-vb-green font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-vb-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <span className="text-vb-green font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-vb-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <span className="text-vb-green font-bold">i</span>
              </a>
              <a href="#" className="w-10 h-10 bg-vb-gold rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <span className="text-vb-green font-bold">y</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-vb-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-green-100 hover:text-vb-gold transition-colors">About Bibiani</Link></li>
              <li><Link href="/tourism" className="text-green-100 hover:text-vb-gold transition-colors">Tourist Attractions</Link></li>
              <li><Link href="/hospitality" className="text-green-100 hover:text-vb-gold transition-colors">Hotels & Restaurants</Link></li>
              <li><Link href="/business" className="text-green-100 hover:text-vb-gold transition-colors">Business Opportunities</Link></li>
              <li><Link href="/gallery" className="text-green-100 hover:text-vb-gold transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-vb-gold">Contact Info</h4>
            <div className="space-y-3 text-green-100">
              <div className="flex items-start gap-2">
                <span className="text-vb-gold mt-1">📍</span>
                <div>
                  <p>Bibiani Municipal Assembly</p>
                  <p>Western North Region, Ghana</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-vb-gold">📞</span>
                <p>+233 XX XXX XXXX</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-vb-gold">✉️</span>
                <p>info@visitbibiani.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-green-600">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-200 text-sm">
            &copy; {new Date().getFullYear()} Visit Bibiani. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-green-200 hover:text-vb-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-green-200 hover:text-vb-gold transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-green-200 hover:text-vb-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}