import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

const contactDetails = [
  
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
  {
    icon: MapPin,
    label: "Adresse",
    value: "Hassania 2 Bloc A Rcd Mag N° 127 - Mohammedia",
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
                    <div className="w-full">
                      <h4 className="font-semibold text-lg">{detail.label}</h4>
                      {detail.label === "Téléphone" ? (
                        <div className="flex flex-col gap-1 text-muted-foreground">
                          <a href="tel:0661425538" className="hover:underline">
                            06 61 42 55 38
                          </a>
                          <a href="tel:0523332113" className="hover:underline">
                            05 23 32 13 13
                          </a>
                          <a href="tel:0678592506" className="hover:underline">
                            06 78 59 25 06
                          </a>
                        </div>
                      ) : detail.label === "Email" ? (
                        <a
                          href="mailto:sazoum.inox@gmail.com"
                          className="text-muted-foreground hover:underline"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{detail.value}</p>
                      )}
                      {detail.label === "Adresse" && (
                        <div className="mt-3 rounded-lg overflow-hidden h-40 w-full">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220358571!2d-7.369839324536994!3d33.70558273744669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b6d3c5e3c3c3%3A0x3c3c3c3c3c3c3c3c!2sMJG5%2BWH3%20Building%2C%20Mohammedia%2C%20Morocco!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      )}
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
