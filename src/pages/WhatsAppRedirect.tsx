import { useEffect } from 'react';

function WhatsAppRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://wa.me/628119155850?text=Halo!%20Bisa%20minta%20info%20lebih%20lanjut%20tentang%20ini?%20';
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return <div />;
}

export default WhatsAppRedirect;
