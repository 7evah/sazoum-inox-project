import { HardHat, Package, Wrench } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Réparation d'Inox",
    description: "Nous offrons un service complet de réparation pour tous types de pièces et structures en inox, restaurant leur fonctionnalité et leur apparence.",
  },
  {
    icon: HardHat,
    title: "Travaux sur Mesure",
    description: "De la conception à la réalisation, nous menons des travaux de chaudronnerie et de construction en inox pour les secteurs industriel et commercial.",
  },
  {
    icon: Package,
    title: "Vente d'Accessoires",
    description: "Trouvez une large gamme d'accessoires et de tubes en inox de haute qualité pour tous vos projets de construction et de maintenance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Des solutions complètes et professionnelles pour tous vos projets en inox.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                   <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-8 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
