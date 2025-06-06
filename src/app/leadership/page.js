export default function LeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-vb-green mb-6">Leadership</h1>

      {/* Regional Minister Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Regional Minister</h2>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
          <div className="w-48 h-48 bg-gray-200 rounded-lg flex-shrink-0"></div>
          <div>
            <h3 className="text-xl font-semibold text-vb-green mb-2">Hon. [Name]</h3>
            <p className="text-gray-600 mb-4">
              Regional Minister of Western North Region
            </p>
            <p className="text-gray-600">
              Brief biography and achievements...
            </p>
          </div>
        </div>
      </section>

      {/* MPs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Members of Parliament</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-vb-green text-white">
              <tr>
                <th className="p-4 text-left">Constituency</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Bibiani-Anhwiaso-Bekwai</td>
                <td className="p-4">Hon. [Name]</td>
                <td className="p-4">[Contact Info]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Traditional Authorities Section */}
      <section>
        <h2 className="text-2xl font-semibold text-vb-gold mb-4">Traditional Authorities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-vb-green mb-3">Omanhene</h3>
            <p className="text-gray-600">
              Brief biography of the paramount chief...
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-vb-green mb-3">Sub-Chiefs</h3>
            <p className="text-gray-600">
              Information about the traditional council...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 