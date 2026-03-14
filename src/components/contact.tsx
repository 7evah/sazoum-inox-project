import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

const contactDetails = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Hassania 2 Bloc A Rcd Mag N° 127 - Mohammedia",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 61 42 55 38 / 05 23 32 13 13 / 06 78 59 25 06",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sazoum.inox@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Une question ou un projet ? Nous sommes à votre écoute.
          </p>
        </div>
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary/5">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <detail.icon
                        className="h-6 w-6 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{detail.label}</h4>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Envoyez-nous un Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
