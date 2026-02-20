import { useEffect } from 'react';

function WhatsAppRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://wa.me/628119155850';
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return <div />;
}

export default WhatsAppRedirect;
