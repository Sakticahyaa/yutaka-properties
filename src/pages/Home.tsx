import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-0 relative overflow-hidden">
      {/* Animated Wave Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-20 animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#60a5fa" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-20 animate-wave-slow" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b82f6" fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-20 animate-wave-slower" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1e40af" fillOpacity="0.3" d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,213.3C672,213,768,171,864,144C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-4 sm:mb-6">
            Yutaka Property
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
            Premium Property Investment
          </p>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Menteng Card */}
          <Link
            to="/menteng"
            className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
          >
            <div className="aspect-[4/3] relative">
              <img
                src="/images/gallery-1.jpeg"
                alt="Menteng Park Apartment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2 sm:mb-3">
                  Menteng Park Apartment
                </h2>
                <p className="text-base sm:text-lg mb-2 text-gray-200">
                  Jakarta Pusat
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gold-400 mb-3 sm:mb-4">
                  Rp 2,9 Miliar
                </p>
                <div className="flex items-center gap-2 text-gold-400 group-hover:gap-4 transition-all">
                  <span className="font-medium">Lihat Detail</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Jogja Card */}
          <Link
            to="/jogja"
            className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
          >
            <div className="aspect-[4/3] relative">
              <img
                src="/images/jogja/enhanced_enhanced_Gemini_Generated_Image_4nq42n4nq42n4nq4.png"
                alt="Easyhome Jogja"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2 sm:mb-3">
                  Easyhome Jogja
                </h2>
                <p className="text-base sm:text-lg mb-2 text-gray-200">
                  Maguwoharjo, Yogyakarta
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gold-400 mb-3 sm:mb-4">
                  Investasi Premium
                </p>
                <div className="flex items-center gap-2 text-gold-400 group-hover:gap-4 transition-all">
                  <span className="font-medium">Lihat Detail</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-300">
          <p className="text-sm">
            © 2026 Yutaka Property. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
