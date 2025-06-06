export default function BusinessPage() {
  // Dummy data for industries
  const industries = [
    {
      id: 1,
      title: "Gold Mining",
      description: "Bibiani hosts one of Ghana's top gold mines, attracting large and small-scale operations.",
      icon: "/mining-icon.svg",
      image: "/placeholder-mining.jpg"
    },
    {
      id: 2,
      title: "Cocoa Production",
      description: "Rich cocoa farming forms the backbone of local agriculture and export economy.",
      icon: "/cocoa-icon.svg",
      image: "/placeholder-cocoa.jpg"
    },
    {
      id: 3,
      title: "Timber & Forestry",
      description: "Sustainable timber processing and export contribute to the region's economic growth.",
      icon: "/timber-icon.svg",
      image: "/placeholder-timber.jpg"
    }
  ];

  // Dummy data for companies
  const companies = [
    {
      id: 1,
      name: "Bibiani Gold Mine",
      sector: "Mining",
      description: "A major gold producer in Ghana with modern facilities and sustainable practices.",
      logo: "/placeholder-company-logo.png"
    },
    {
      id: 2,
      name: "Western North Cocoa Processing Ltd.",
      sector: "Agro-processing",
      description: "Leading cocoa processing facility serving local farmers and international markets.",
      logo: "/placeholder-company-logo.png"
    },
    {
      id: 3,
      name: "Sefwi Timber Company",
      sector: "Forestry",
      description: "Sustainable timber processing and export operations.",
      logo: "/placeholder-company-logo.png"
    },
    {
      id: 4,
      name: "Bibiani Agricultural Co-op",
      sector: "Agriculture",
      description: "Supporting local farmers with resources and market access.",
      logo: "/placeholder-company-logo.png"
    }
  ];

  // Dummy data for investment opportunities
  const opportunities = [
    {
      id: 1,
      title: "Real Estate Development",
      description: "Growing demand for residential and commercial properties in Bibiani's expanding urban center.",
      category: "Infrastructure"
    },
    {
      id: 2,
      title: "Agro-Processing Plants",
      description: "Invest in cocoa and food processing to tap into Bibiani's rich agricultural base.",
      category: "Agriculture"
    },
    {
      id: 3,
      title: "Eco-Tourism Infrastructure",
      description: "Develop sustainable tourism facilities in Bibiani's pristine natural areas.",
      category: "Tourism"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder-industrial.jpg')" }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Business & Industry in Bibiani</h1>
          <p className="text-xl max-w-2xl">
            A Growing Hub for Mining, Agriculture, and Trade
          </p>
        </div>
      </section>

      {/* Economy Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#006400] mb-6">Local Economy Overview</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#B8860B] mb-2">Mining Backbone</h3>
                <p className="text-gray-600">
                  Bibiani's economy is anchored by its rich gold mining industry, attracting both large-scale operations and artisanal miners.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#B8860B] mb-2">Agricultural Heritage</h3>
                <p className="text-gray-600">
                  Cocoa farming and other agricultural activities form a vital part of the local economy, supporting thousands of families.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#B8860B] mb-2">Strategic Location</h3>
                <p className="text-gray-600">
                  Positioned in Western North, Bibiani serves as a crucial trade and transportation hub for the region.
                </p>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-gray-200 rounded-lg"></div>
        </div>
      </section>

      {/* Major Industries Section */}
      <section className="bg-[#006400]/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#006400] mb-8">Key Economic Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#006400] mb-3">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#006400] mb-8">Leading Companies in Bibiani</h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {companies.map((company) => (
            <div key={company.id} className="min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <div className="h-16 w-16 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-[#006400] mb-2">{company.name}</h3>
              <span className="inline-block bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm mb-3">
                {company.sector}
              </span>
              <p className="text-gray-600">{company.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="bg-[#006400]/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#006400] mb-8">Opportunities for Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow-lg p-6">
                <span className="inline-block bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm mb-4">
                  {opportunity.category}
                </span>
                <h3 className="text-xl font-semibold text-[#006400] mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <button className="text-[#006400] font-semibold hover:text-[#004d00] transition-colors">
                  Contact Us →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#006400] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in Bibiani?</h2>
          <p className="text-xl mb-8 text-[#B8860B]">
            We welcome partnerships in infrastructure, industry, and development.
          </p>
          <button className="bg-white text-[#006400] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Our Investment Desk
          </button>
        </div>
      </section>
    </div>
  );
} 