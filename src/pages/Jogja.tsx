import { useState } from 'react';
import { Link } from 'react-router-dom';

function Jogja() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  // Get list of Jogja images
  const jogjaImages = [
    '1f8quc1f8quc1f8q',
    '3bty573bty573bty',
    '4nq42n4nq42n4nq4',
    '7idw3o7idw3o7idw (1)',
    '8sha708sha708sha',
    'a5lijha5lijha5li',
    'bucnkfbucnkfbucn',
    'ebq6w6ebq6w6ebq6',
    'i2l97yi2l97yi2l9',
    'j23s89j23s89j23s',
    'l7e581l7e581l7e5',
    'mln543mln543mln5',
    'n29j1an29j1an29j',
    'nhq2xinhq2xinhq2',
    'ojd7seojd7seojd7',
    'v1usdnv1usdnv1us',
    'w65mi9w65mi9w65m',
    'xz284uxz284uxz28',
  ];

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
              <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-primary-600 transition-colors">Features</button>
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
              <button onClick={() => scrollToSection('amenities')} className="block w-full text-left py-2 text-gray-700 hover:text-primary-600">Features</button>
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/images/jogja/enhanced_enhanced_Gemini_Generated_Image_4nq42n4nq42n4nq4.png)`,
          }}
        ></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6 leading-tight">
            Easyhome Jogja
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl mb-3 sm:mb-4 font-light tracking-wide">
            Maguwoharjo, Yogyakarta
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Hunian Mewah 3 Lantai untuk Dijual - Potensi Pendapatan Homestay hingga Rp 432 Juta/Tahun
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
              Hunian Mewah Modern Tropis
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Easy Home Jogja</strong> di <strong>Maguwoharjo, Yogyakarta</strong> — hunian mewah 3 lantai dengan desain modern tropis. Fasad roster putih, bata ekspos, dan beton industrial dengan tanaman Lee Kuan Yew. Pintu pivot kayu dengan smart door lock digital.
              </p>
              <p>
                Interior lapang dengan lantai granit marmer putih dan lampu industrial. Fitur unggulan: <strong>inner courtyard terbuka</strong> di tengah bangunan dengan taman, kolam ikan, air terjun mini, dan panel laser-cut artistik.
              </p>
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
              <source src="/jogja-video.mp4" type="video/mp4" />
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
            {(showAllGallery ? jogjaImages : jogjaImages.slice(0, 9)).map((img, index) => (
              <div
                key={img}
                onClick={() => setSelectedImage(img)}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn cursor-pointer aspect-[4/3]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={`/images/jogja/Gemini_Generated_Image_${img}.png`}
                  alt={`Easyhome Jogja ${index + 1}`}
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

      {/* Amenities Section */}
      <section id="amenities" className="section-padding bg-white reveal-on-scroll">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary-900">
            Spesifikasi Premium
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🛏️', title: '5 Kamar Tidur', description: 'Super Luas & Nyaman' },
              { icon: '🚿', title: '4 Kamar Mandi', description: 'Pemanas Air & Marmer' },
              { icon: '🏠', title: 'Ruang Keluarga', description: 'Spacious Living Room' },
              { icon: '🍳', title: 'Dapur Modern', description: 'Kitchen Bar & Sink' },
              { icon: '🌅', title: 'Rooftop', description: 'Kanopi Transparan' },
              { icon: '🌳', title: 'Taman Belakang', description: 'Kolam Ikan & Air Terjun' },
              { icon: '🔒', title: 'Smart Door Lock', description: 'Keamanan Digital' },
              { icon: '🚗', title: 'Carport Motif', description: 'Lahan Parkir Luas' },
              { icon: '💎', title: 'Lantai Granit', description: 'Motif Marmer Putih' },
              { icon: '💡', title: 'Lampu Industrial', description: 'Pencahayaan Modern' },
              { icon: '🌿', title: 'Inner Courtyard', description: 'Void Terbuka & Asri' },
              { icon: '🪟', title: 'Roster Ventilasi', description: 'Sirkulasi Udara Maksimal' },
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

      {/* Location Section */}
      <section className="section-padding bg-gray-50 reveal-on-scroll">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-primary-900 text-center">
              Lokasi Strategis Premium
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Hanya <strong className="text-gold-700">1 menit</strong> dari Jogja Waterboom di kawasan <strong>Maguwoharjo, Yogyakarta</strong>. Dikelilingi fasilitas lengkap.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-xl mb-3 text-primary-900">🏊 Wisata & Rekreasi</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Jogja Waterboom / Jogja Bay (1 menit)</li>
                    <li>• Stadion Maguwoharjo</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-xl mb-3 text-primary-900">🎓 Pendidikan</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Kampus Sanata Dharma Paingan</li>
                    <li>• Sekolah Al Abidin</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-xl mb-3 text-primary-900">🏥 Kesehatan</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Rumah Sakit Setempat</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-xl mb-3 text-primary-900">✨ Keunggulan</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dekat pusat keramaian</li>
                    <li>• Akses mudah ke mana-mana</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6">
                Lokasi strategis dengan <strong className="text-gold-700">daya tarik tinggi untuk wisatawan dan mahasiswa</strong>. Ideal untuk hunian keluarga atau investasi homestay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="section-padding bg-white reveal-on-scroll">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary-900">
            Desain & Fasilitas Unggulan
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Pintu Utama Megah</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Pivot kayu smart lock</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Fasad Modern Tropis</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Roster & bata ekspos</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Inner Courtyard</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Void taman & air terjun</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Dapur Elegan</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Bar hitam & bak ganda</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Tangga Modern</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Stainless & kaca tempered</p>
            </div>

            <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-sm sm:text-base md:text-xl font-serif mb-1 sm:mb-2 md:mb-3 text-primary-900">Kamar Mandi Mewah</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Marmer & water heater</p>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="section-padding bg-gradient-to-br from-primary-900 to-primary-700 text-white reveal-on-scroll">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-center">
              Properti Dijual - Mesin Investasi
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              <strong className="text-gold-400">"Satu Pilihan, Dua Manfaat"</strong> — Beli properti ini untuk hunian pribadi, atau jadikan homestay dengan potensi pendapatan hingga Rp 432 Juta/tahun
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-12 mb-8 sm:mb-12">
              <div className="text-center mb-6 sm:mb-8">
                <div className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">
                  Potensi Pendapatan Homestay
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2 text-gold-400">
                  Estimasi Tarif Sewa
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
                  Rp 1,5 Juta<span className="text-xl sm:text-2xl text-gray-300">/malam</span>
                </div>
                <p className="text-sm sm:text-base text-gray-200">Kapasitas besar untuk rombongan keluarga</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-gray-400">
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-serif mb-2">Konservatif</h3>
                    <p className="text-xs sm:text-sm text-gray-300">Okupansi 50%</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Per Bulan:</span>
                      <span className="font-semibold">15 hari</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Pendapatan/Bulan:</span>
                      <span className="font-semibold text-gold-400">Rp 22,5 Juta</span>
                    </div>
                    <div className="border-t border-gray-400 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Pendapatan/Tahun:</span>
                        <span className="font-bold text-xl text-gold-400">Rp 270 Juta</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-gold-400 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-400 text-primary-900 px-3 sm:px-4 py-1 rounded-full text-xs font-bold">
                    REKOMENDASI
                  </div>
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-serif mb-2">Moderat</h3>
                    <p className="text-xs sm:text-sm text-gray-300">Okupansi 67%</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Per Bulan:</span>
                      <span className="font-semibold">20 hari</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Pendapatan/Bulan:</span>
                      <span className="font-semibold text-gold-400">Rp 30 Juta</span>
                    </div>
                    <div className="border-t border-gray-400 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Pendapatan/Tahun:</span>
                        <span className="font-bold text-xl text-gold-400">Rp 360 Juta</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-2 border-gray-400">
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-serif mb-2">Optimis</h3>
                    <p className="text-xs sm:text-sm text-gray-300">Okupansi 80%</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Per Bulan:</span>
                      <span className="font-semibold">24 hari</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Pendapatan/Bulan:</span>
                      <span className="font-semibold text-gold-400">Rp 36 Juta</span>
                    </div>
                    <div className="border-t border-gray-400 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Pendapatan/Tahun:</span>
                        <span className="font-bold text-xl text-gold-400">Rp 432 Juta</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-serif italic mb-8 text-gray-200">
                "Aset yang bekerja keras menghasilkan uang, bahkan saat Anda tidur"
              </p>
              <a
                href="https://wa.me/628119155850"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xl px-12 py-5 inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hubungi Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-white reveal-on-scroll">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary-900">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Tertarik untuk membeli properti ini atau mendapatkan informasi lebih lanjut?
            </p>
            <div className="flex justify-center mb-12">
              <a
                href="https://wa.me/628119155850"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base font-medium shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="container-custom text-center">
          <Link to="/" className="text-2xl font-serif mb-4 inline-block hover:text-gold-400 transition-colors">
            Yutaka Property
          </Link>
          <p className="text-gray-300 mb-6">Premium Property Investment in Indonesia</p>
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
            src={`/images/jogja/Gemini_Generated_Image_${selectedImage}.png`}
            alt={`Easyhome Jogja`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Jogja;
