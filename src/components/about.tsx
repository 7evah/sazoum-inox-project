import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images on Left */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                  <Image 
                    src="/balcony-enhanced.png" 
                    alt="Sazoum Inox Experience" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                  <Image 
                    src="/collage-ex-in3-2.png" 
                    alt="Sazoum Inox Travaux" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                  <Image 
                    src="/talt.jpg" 
                    alt="Sazoum Inox Menuiserie" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                  <Image 
                    src="/collage.png" 
                    alt="Sazoum Inox Cuisine" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
            
            {/* Decoration Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl z-10 hidden md:flex flex-col items-center justify-center h-32 w-32 border-4 border-background">
              <span className="text-4xl font-extrabold text-primary">20+</span>
              <span className="text-[10px] font-bold text-center text-gray-700 mt-0.5 uppercase tracking-widest leading-tight">Ans<br/>D'expertise</span>
            </div>
          </div>

          {/* Text on Right */}
          <div className="lg:pl-6">
            <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">À Propos De Nous</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight">
              Qui Sommes-nous?
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
               <p>
                 <strong className="text-foreground font-semibold">SAZOUM INOX</strong> est une entreprise spécialisée en tout travaux de second-œuvres clés en main ; avec plus de 20 ans d’expertise dans le domaine nous avons su répondre à tous le besoin de nos clients dans les domaines de la chaudronnerie, la ferronnerie, la décoration et le design.
               </p>
               <p>
                 Notre entreprise met à votre service un savoir-faire reconnu et des solutions <strong className="text-foreground font-semibold">100 % sur mesure</strong> et un accompagnement engagé de l’étude de vos projets jusqu’à sa réalisation. Cet accompagnement s'épanouit en passant par la maintenance, la réparation et l’écoute des clients à chaque étape pour garantir qualité, fiabilité et satisfaction.
               </p>
               <p>
                 On a débuté par la conception, la fabrication et pose des ouvrages en aciers, inox et alu (escaliers, garde-corps, verrières, portails) ce qui nous a permis d’allier l’artisanat et le design pour des projets de métallerie du bâtiment en élargissant notre activité à tous les travaux divers.
               </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
               <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12 text-base">
                 <a href="#services">Découvrir nos services</a>
               </Button>
               <Button asChild size="lg" variant="outline" className="font-semibold px-8 h-12 text-base">
                 <a href="#contact">Contactez-nous</a>
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
