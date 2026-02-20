import { useEffect } from 'react';

function WhatsAppRedirect() {
  useEffect(() => {
    // Load Google tag
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17951489596';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17951489596');
    `;
    document.head.appendChild(script2);

    // Redirect to WhatsApp
    window.location.href = 'https://wa.me/628119155850';
  }, []);

  return <div />;
}

export default WhatsAppRedirect;
