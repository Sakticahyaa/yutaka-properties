import { useEffect } from 'react';

function WhatsAppRedirect() {
  useEffect(() => {
    window.location.href = 'https://wa.me/628119155850';
  }, []);

  return <div />;
}

export default WhatsAppRedirect;
