import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Portfolio() {
  const portfolioImages = PlaceHolderImages.filter(p => p.id.startsWith('portfolio'));

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Nos Réalisations</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Découvrez la qualité et la précision de notre travail à travers nos projets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-0 aspect-w-4 aspect-h-3">
                <Image
                  src={item.imageUrl}
                  alt={item.description}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={item.imageHint}
                />
              </CardContent>
              <div className="p-6 flex-grow">
                 <CardDescription>{item.description}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
