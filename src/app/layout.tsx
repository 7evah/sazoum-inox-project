import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppWidget from '@/components/whatsapp-widget';

export const metadata: Metadata = {
  title: "SAZOUM INOX - Spécialiste de l'inox au Maroc",
  description:
    "SAZOUM INOX, votre expert en chaudronnerie, travaux d'inox, réparation et vente d'accessoires en inox à Mohammedia, Maroc.",
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
