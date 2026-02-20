import { useEffect } from 'react';

function WhatsAppRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://wa.me/628119155850';
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-primary-900 flex flex-col items-center justify-center text-white">
      <img src="/logo.png" alt="Yutaka Property" className="w-32 mb-8 opacity-90" />
      <div className="flex items-center gap-3 mb-4">
        <svg className="animate-spin w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <span className="text-lg font-medium">Menghubungkan ke WhatsApp...</span>
      </div>
      <p className="text-sm text-gray-400">Anda akan diarahkan dalam sebentar</p>
    </div>
  );
}

export default WhatsAppRedirect;
