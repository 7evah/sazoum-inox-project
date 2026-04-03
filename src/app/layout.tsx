import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppWidget from '@/components/whatsapp-widget';

const BASE_URL = "https://www.sazoum-inox.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "SAZOUM INOX – Chaudronnerie, Ferronnerie & Aménagement au Maroc",
    template: "%s | SAZOUM INOX",
  },
  description:
    "SAZOUM INOX, spécialiste depuis 20 ans en chaudronnerie, ferronnerie d'art, décoration design et aménagement intérieur/extérieur en acier inoxydable à Mohammedia, Casablanca – Maroc.",

  keywords: [
    "sazoum inox",
    "chaudronnerie maroc",
    "ferronnerie art maroc",
    "inox mohammedia",
    "acier inoxydable casablanca",
    "aménagement intérieur extérieur maroc",
    "fabrication métallique maroc",
    "garde-corps inox",
    "escaliers inox maroc",
    "menuiserie métallique",
    "décoration design inox",
    "portail inox maroc",
  ],

  authors: [{ name: "SAZOUM INOX", url: BASE_URL }],
  creator: "SAZOUM INOX",
  publisher: "SAZOUM INOX",

  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: BASE_URL,
    siteName: "SAZOUM INOX",
    title: "SAZOUM INOX – Chaudronnerie, Ferronnerie & Aménagement au Maroc",
    description:
      "Spécialiste depuis 20 ans en chaudronnerie, ferronnerie d'art, décoration design et aménagement en acier inoxydable à Mohammedia – Maroc.",
    images: [
      {
        url: "/balcony-enhanced.png",
        width: 1200,
        height: 630,
        alt: "SAZOUM INOX – Réalisations en acier inoxydable",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SAZOUM INOX – Chaudronnerie & Aménagement Maroc",
    description:
      "Spécialiste depuis 20 ans en chaudronnerie, ferronnerie et aménagement en inox à Mohammedia.",
    images: ["/balcony-enhanced.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <WhatsAppWidget  />
        <Toaster />
      </body>
    </html>
  );
}
