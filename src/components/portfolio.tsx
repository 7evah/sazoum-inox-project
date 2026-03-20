import Image from "next/image";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const portfolioItems = [
  {
    id: 'portfolio-1',
    title: 'Cuisine et salles de baine professionnelle en inox',
    description: 'Conception et réalisation sur mesure de cuisines et salles de bain professionnelles en acier inoxydable, alliant hygiène, durabilité et design.',
    imageUrl: '/collage.png',
  },
  {
    id: 'portfolio-2',
    title: 'Aménagement intérieur extérieur',
    description: 'Solutions complètes d\'aménagement pour sublimer vos espaces intérieurs et extérieurs avec des matériaux nobles et une finition parfaite.',
    imageUrl: '/collage-ex-in3-2.png',
  },
  {
    id: 'portfolio-3',
    title: 'Menuiserie tous types',
    description: 'Créations de menuiserie sur mesure pour tous types de bois et matériaux, répondant aux exigences les plus strictes en matière de qualité et d\'esthétique.',
    imageUrl: '/talt.jpg',
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Nos Réalisations</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Découvrez la qualité et la précision de notre travail à travers nos projets.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                <div className="overflow-hidden aspect-[3/2] relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col items-center text-center">
                   <CardTitle className="mb-3 text-xl">{item.title}</CardTitle>
                   <CardDescription className="text-sm">{item.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
