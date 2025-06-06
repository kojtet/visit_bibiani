"use client";
import Image from "next/image";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-vb-green mb-8">Visit Bibiani Shop</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example product card - you can add more products following this structure */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder-product.jpg"
                alt="Product Name"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-vb-green">Product Name</h3>
              <p className="text-gray-600 mt-2">Product description goes here. This is a sample product card.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-vb-gold">$XX.XX</span>
                <button className="bg-vb-green text-white px-4 py-2 rounded hover:bg-vb-gold transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 