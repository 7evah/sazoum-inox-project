import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Link href="/">
              <Image
               src="/Untitled.png"
               alt="Sazoum Inox Logo"
               width={120}
               height={105}
               className="invert brightness-0 invert" 
              />
              </Link>
            </div>
            <p className="text-sm opacity-80 max-w-sm">
              Votre expert en chaudronnerie, travaux d'inox, réparation et vente
              d'accessoires en inox à Mohammedia, Maroc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contactez-nous</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="opacity-80">
                  Hassania 2 Bloc A Rcd Mag N° 127 - Mohammedia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="opacity-80">
                  06 61 42 55 38 / 05 23 32 13 13
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:sazoum.inox@gmail.com"
                  className="opacity-80 hover:opacity-100 hover:underline"
                >
                  sazoum.inox@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs opacity-70">
          <p>
            &copy; {new Date().getFullYear()} SAZOUM INOX S.A.R.L. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
