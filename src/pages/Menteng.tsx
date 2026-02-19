import { useState } from 'react';
import { Link } from 'react-router-dom';

function Menteng() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  // Intersection Observer for scroll animations
  useState(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    setTimeout(() => {
      const sections = document.querySelectorAll('.reveal-on-scroll');
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => observer.disconnect();
  });

  // Handle ESC key to close lightbox
  useState(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-serif font-bold text-primary-700 hover:text-primary-800 transition-colors">
              Yutaka Property
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('intro')} className="text-gray-700 hover:text-primary-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary-600 transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-primary-600 transition-colors">Amenities</button>
              <button onClick={() => scrollToSection('facilities')} className="text-gray-700 hover:text-primary-600 transition-colors">Facilities</button>
              <button onClick={() => scrollToSection('price')} className="text-gray-700 hover:text-primary-600 transition-colors">Investment</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm px-6 py-2">Contact Us</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600">Home</button>
              <button onClick={() => scrollToSection('intro')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600">About</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600">Gallery</button>
              <button onClick={() => scrollToSection('amenities')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600">Amenities</button>
              <button onClick={() => scrollToSection('facilities')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600">Facilities</button>
              <button onClick={() => scrollToSection('price')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600">Investment</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-primary-600 font-semibold">Contact Us</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/images/gallery-1.jpeg)',
          }}
        ></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6 leading-tight">
            Menteng Park Apartment
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl mb-3 sm:mb-4 font-light tracking-wide">
            Tower Emerald, Floor 37 — Penthouse
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Tinggal di pusat Jakarta, atau punya aset yang terus menghasilkan?
          </p>
          <a
            href="https://wa.me/628119155850"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-transparent border-2 border-gold-400 text-gold-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gold-400 hover:border-gold-500 hover:text-white transition-all duration-300 font-medium text-base sm:text-lg backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="section-padding bg-white reveal-on-scroll">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-primary-900 text-center">
              Kawasan Prestisius di Jantung Jakarta
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong className="text-primary-900">Menteng Park Apartment</strong> berlokasi di Jalan Cikini Raya, Menteng, Jakarta Pusat — kawasan prestisius dengan akses terbaik ke pusat bisnis, perkantoran, dan fasilitas kota.
                </p>
                <p>
                  Unit <strong>2 Bedroom seluas 61 meter persegi</strong>, berada di Tower Emerald, lantai 37 – Penthouse, dengan pemandangan Monas yang ikonik.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Unit ini <strong>fully furnished dan siap huni</strong>, dilengkapi dengan fasilitas modern yang lengkap dan akses private lift yang memberikan privasi dan kenyamanan maksimal.
                </p>
                <p>
                  Satu unit, dua fungsi — <strong className="text-gold-700">hunian eksklusif dan aset investasi bernilai tinggi</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white reveal-on-scroll">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full rounded-lg shadow-2xl"
              style={{ maxHeight: '60vh', width: 'auto', margin: '0 auto', display: 'block' }}
            >
              <source src="/menteng-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-gray-50 reveal-on-scroll">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary-900">
            Gallery
          </h2>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto transition-all duration-500">
            {(showAllGallery ? [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] : [2, 3, 4, 5, 6, 7, 8, 9, 10]).map((num, index) => (
              <div
                key={num}
                onClick={() => setSelectedImage(num)}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn cursor-pointer aspect-[4/3]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={`/images/gallery-${num}.jpeg`}
                  alt={`Menteng Park Apartment ${num}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            {!showAllGallery ? (
              <button
                onClick={() => setShowAllGallery(true)}
                className="btn-primary transition-all duration-300 hover:scale-105 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                Show More Photos
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAllGallery(false);
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="btn-outline transition-all duration-300 hover:scale-105"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Unit Features */}
      <section id="amenities" className="section-padding bg-white reveal-on-scroll">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary-900">
            Unit Amenities
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: '❄️', title: '3 Unit AC', description: 'Air Conditioning' },
              { icon: '📡', title: 'Wi-Fi Cepat', description: 'High-Speed Internet' },
              { icon: '🍳', title: 'Dapur Modern', description: 'Kitchen Set' },
              { icon: '⚡', title: 'Kompor Listrik', description: 'Electric Stove' },
              { icon: '🧊', title: 'Kulkas', description: 'Refrigerator' },
              { icon: '📻', title: 'Microwave', description: 'Microwave Oven' },
              { icon: '💧', title: 'Dispenser Air', description: 'Water Dispenser' },
              { icon: '👕', title: 'Mesin Cuci', description: 'Washing Machine' },
              { icon: '🛁', title: 'Bathtub Mewah', description: 'Luxurious Bathtub' },
              { icon: '🔥', title: 'Pemanas Air', description: 'Water Heater' },
              { icon: '🛗', title: 'Lift Pribadi', description: 'Private Lift Access' },
              { icon: '🏙️', title: 'View Monas', description: 'Iconic City View' },
            ].map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{amenity.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-0.5 text-sm sm:text-base">{amenity.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Facilities */}
      <section id="facilities" className="section-padding bg-gray-50 reveal-on-scroll">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary-900">
            Building Facilities
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center p-3 sm:p-4 md:p-6 bg-primary-50 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Infinity Swimming Pool</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Kolam infinity city view</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-primary-50 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Rooftop Sky Garden</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Taman atap & gathering</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-primary-50 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Fitness Center</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Gym lengkap modern</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-primary-50 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Jogging Track</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Track lari outdoor</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-primary-50 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Luxurious Grand Lobby</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Lobby mewah concierge</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-primary-50 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Retail & F&B</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Food & retail area</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="text-xl sm:text-2xl">🏦</div>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm">ATM Center</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xl sm:text-2xl">🎮</div>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm">Playground Anak</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xl sm:text-2xl">🔒</div>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm">24/7 Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Price Section */}
      <section id="price" className="section-padding bg-gradient-to-br from-primary-900 to-primary-700 text-white reveal-on-scroll">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Aset Investasi Bernilai Tinggi
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              Selain ideal untuk ditinggali sendiri, unit ini juga sangat potensial untuk disewakan.
              Lokasi Jakarta Pusat dengan permintaan sewa tinggi, cocok untuk ekspatriat, profesional, maupun keluarga urban.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif mb-3 sm:mb-4 text-gold-400">
                Rp 2,9 Miliar
              </div>
              <div className="text-base sm:text-lg md:text-xl text-gray-200">
                2 Bedroom • 61 m² • Fully Furnished • Penthouse
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-center gap-2">
                <div className="text-2xl sm:text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Lokasi Premium</h3>
                  <p className="text-xs sm:text-sm text-gray-200">Menteng, jantung Jakarta Pusat</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-2xl sm:text-3xl">💰</div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">ROI Tinggi</h3>
                  <p className="text-xs sm:text-sm text-gray-200">Permintaan sewa sangat tinggi</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-2xl sm:text-3xl">✨</div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Siap Huni</h3>
                  <p className="text-xs sm:text-sm text-gray-200">Fully furnished, tinggal pakai</p>
                </div>
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-serif italic mb-6 sm:mb-8">
              "Kesempatan tidak datang dua kali."
            </p>

            <a
              href="https://wa.me/628119155850"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Jadwalkan Viewing
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="section-padding bg-white reveal-on-scroll">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary-900">
              Hubungi Kami
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10">
              Tertarik untuk melihat unit atau mendapatkan informasi lebih lanjut?
              Hubungi kami untuk jadwalkan viewing atau konsultasi.
            </p>

            <div className="flex justify-center mb-8 sm:mb-10">
              <a
                href="https://wa.me/628119155850"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base font-medium shadow-lg hover:shadow-xl"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-serif mb-6 text-primary-900">Lokasi</h3>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Menteng Park Apartment</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Jalan Cikini Raya, Menteng<br />
                Jakarta Pusat, DKI Jakarta
              </p>

              {/* Google Maps Embed */}
              <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=Menteng+Park+Apartment,+Jalan+Cikini+Raya,+Menteng,+Jakarta+Pusat&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Menteng Park Apartment Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="container-custom text-center">
          <div className="text-2xl font-serif mb-4">Yutaka Property</div>
          <p className="text-gray-300 mb-6">Premium Property Investment in Jakarta</p>
          <div className="flex justify-center gap-8 mb-6">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollToSection('intro')} className="text-gray-300 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('facilities')} className="text-gray-300 hover:text-white transition-colors">Facilities</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2026 Yutaka Property. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
            aria-label="Close"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={`/images/gallery-${selectedImage}.jpeg`}
            alt={`Menteng Park Apartment ${selectedImage}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Menteng;
