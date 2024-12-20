import Image from 'next/image'
import Link from 'next/link'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'ChatChief - Professional Remote Work Solutions',
//   description: 'Find the perfect remote work solution with ChatChief. Professional customer service and support solutions for your business.',
//   openGraph: {
//     title: 'ChatChief - Professional Remote Work Solutions',
//     description: 'Find the perfect remote work solution with ChatChief. Professional customer service and support solutions for your business.',
//     images: ['/og-image.jpg'],
//   },
// }

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="ChatChief"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link>
              <Link href="#cases" className="text-gray-600 hover:text-gray-900">Cases</Link>
              <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <select className="bg-transparent text-sm text-gray-600">
                <option value="en">English</option>
                <option value="nl">Nederlands</option>
                <option value="fr">Français</option>
              </select>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#8B1D1D] hover:bg-[#7A1919] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B1D1D]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-white py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Ben jij op zoek naar thuiswerk?
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                Wij zijn elk uur van de dag bereikbaar voor onze klanten. Daarom zijn wij op zoek naar parttime krachten die vanuit huis willen werken.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8B1D1D] hover:bg-[#7A1919]">
                  Solliciteer nu
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Meer info
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Over ChatChiefs</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Al jarenlang helpen wij de klantenservice of helpdesk van verschillende ondernemingen.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/feature-1.jpg"
                  alt="Feature 1"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#8B1D1D] text-white p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Prettige sfeer & moderne werkomgeving</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/feature-2.jpg"
                  alt="Feature 2"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#8B1D1D] text-white p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Flexibele werktijden</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/feature-3.jpg"
                  alt="Feature 3"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#8B1D1D] text-white p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Werk vanuit huis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Wat bieden wij jou?
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {[
                {
                  number: '01',
                  title: 'Flexibele uren',
                  description: 'Bepaal zelf wanneer je wilt werken'
                },
                {
                  number: '02',
                  title: 'Goede verdiensten',
                  description: 'Aantrekkelijk salaris met bonussen'
                },
                {
                  number: '03',
                  title: 'Thuiswerken',
                  description: 'Werk vanuit je eigen omgeving'
                }
              ].map((step) => (
                <div key={step.number} className="text-center">
                  <div className="text-5xl font-bold text-[#8B1D1D] mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Veel gestelde vragen
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  question: 'Wat zijn de werktijden?',
                  answer: 'Je kunt zelf bepalen wanneer je wilt werken, met een minimum van 12 uur per week.'
                },
                {
                  question: 'Wat zijn de verdiensten?',
                  answer: 'We bieden een competitief basissalaris met aantrekkelijke bonussen.'
                },
                {
                  question: 'Welke apparatuur wordt er aangeleverd?',
                  answer: 'Alle benodigde software en hardware wordt door ons verzorgd.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-[#8B1D1D] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Begin vandaag nog met geld verdienen
            </h2>
            <Link
              href="/apply"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#8B1D1D] bg-white hover:bg-gray-50"
            >
              Solliciteer direct
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="#" className="hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ChatChief. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </>
  )
}




