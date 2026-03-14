export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SAZOUM INOX S.A.R.L. Tous droits réservés.
        </p>
        <p className="text-xs mt-1 opacity-70">
          Hassania 2 Bloc A Rcd Mag N° 127 - Mohammedia
        </p>
      </div>
    </footer>
  );
}
