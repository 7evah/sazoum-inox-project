import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BannerStrip() {
  return (
    <section className="relative w-full h-52 md:h-64">
      {/* CSS parallax — browser GPU handles the scroll, no JS needed */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/collage.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-3 drop-shadow-lg">
          Besoin d'un renseignement !
        </h2>
        <p className="text-sm md:text-base text-white/70 max-w-xl mb-6 leading-relaxed">
          N'hésitez plus et remplissez de suite notre formulaire que nous traiterons en un rien de temps !
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-11 text-sm gap-2"
        >
          <a href="#contact">
            Contactez-nous
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
