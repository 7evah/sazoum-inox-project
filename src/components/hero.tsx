import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          SAZOUM INOX: L'Excellence de l'Inox au Maroc
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Votre partenaire de confiance pour la chaudronnerie, la construction, et tous vos besoins en acier inoxydable à Mohammedia.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary transition-transform hover:scale-105 w-full sm:w-auto">
            <a href="#services">Découvrir nos services</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary transition-transform hover:scale-105 w-full sm:w-auto">
            <a href="#contact">Demander un devis</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
