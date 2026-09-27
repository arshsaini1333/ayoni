import { Lato } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Best Gynaecologist in Gurgaon  | 25+ Years Experience | Ayoni Clinic in sec 65 Gurgaon",
  description: "Get expert women’s care from a 3rd generation gynaecologist in Gurgaon. 25+ years experience in pregnancy & PCOS treatment at Ayoni Clinic, Sector 65. Book today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      
      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-W5GMMZ9F"
        strategy="afterInteractive"
      />

      {/* Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17857789550"
        strategy="afterInteractive"
      />

      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17857789550');
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2197564814502699');
          fbq('track', 'PageView');
        `}
      </Script>

      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5GMMZ9F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2197564814502699&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
