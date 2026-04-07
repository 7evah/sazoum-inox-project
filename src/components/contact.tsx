import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const contactDetails = [
  {
    icon: Phone,
    label: "Téléphone",
    lines: [
      { display: "06 61 42 55 38", href: "tel:0661425538" },
      { display: "05 23 32 13 13", href: "tel:0523321313" },
      { display: "06 78 59 25 06", href: "tel:0678592506" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [{ display: "sazoum.inox@gmail.com", href: "mailto:sazoum.inox@gmail.com" }],
  },
  {
    icon: MapPin,
    label: "Adresse",
    lines: [
      { display: "Hassania 2 Bloc A Rcd Mag N° 127", href: null },
      { display: "Mohammedia, Maroc", href: null },
    ],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-bold tracking-wider text-primary uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
            Contactez-nous
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une question ou un projet ? Nous sommes à votre écoute et vous répondons rapidement.
          </p>
        </div>

        {/* Main card */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border shadow-xl grid grid-cols-1 md:grid-cols-2">

          {/* Left — contact info */}
          <div className="p-8 md:p-12 bg-primary/5">
            <h3 className="text-xl font-extrabold text-foreground tracking-tight mb-8">
              Informations de Contact
            </h3>
            <div className="space-y-7">
              {contactDetails.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl flex-shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-1.5">
                      {label}
                    </p>
                    <div className="flex flex-col gap-0.5">
                      {lines.map(({ display, href }) =>
                        href ? (
                          <a key={display} href={href} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                            {display}
                          </a>
                        ) : (
                          <span key={display} className="text-sm text-foreground/80">{display}</span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border h-44 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.224401258763!2d-7.391075!3d33.677253199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b700157a1b85%3A0xf4ac76c006057c0d!2sSazoum%20Inox!5e0!3m2!1sen!2sma!4v1775555165395!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 md:p-12 bg-card">
            <h3 className="text-xl font-extrabold text-foreground tracking-tight mb-8">
              Envoyez-nous un Message
            </h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
