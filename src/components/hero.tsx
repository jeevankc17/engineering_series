import React from 'react'

export const metadata = {
  title: "Nextra 4",
  description: "Nextra 4 is here.",
};

const disciplines = [
  { name: 'Computer', path: 'license/computer' },
  { name: 'Civil', path: 'license/civil' },
  { name: 'Mechanical', path: 'license/mechanical' },
  { name: 'Electrical', path: 'license/electrical' },
  { name: 'Electronics', path: 'license/electronics' },
  { name: 'Architecture', path: 'license/architecture' },
  { name: 'Agriculture', path: 'license/agriculture' },
  { name: 'Aerospace', path: 'license/aerospace' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
      <main className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-green-400 tracking-tight">
            Engineering Disciplines
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the diverse fields shaping our technological future and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {disciplines.map((discipline) => (
            <a
              key={discipline.path}
              href={discipline.path}
              className="group"
            >
              <div className="p-6 bg-gray-800 rounded-xl border border-green-500/30 
                hover:border-green-500 hover:bg-gray-700 
                transition-all duration-300 ease-in-out 
                transform hover:-translate-y-2 hover:shadow-lg
                flex flex-col h-full"
              >
                <h2 className="text-2xl font-semibold mb-2 text-green-400 
                  group-hover:text-green-300 transition-colors">
                  {discipline.name}
                </h2>
                <p className="text-gray-300 flex-grow">
                  Discover innovations in {discipline.name.toLowerCase()} engineering.
                </p>
                <div className="mt-4 text-green-500 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300">
                  Explore →
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}