import {
  Flame,
  Hammer,
  Sofa,
  HardHat,
  Laptop,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const CustomFlameIcon = ({ className }: { className?: string }) => (
  <div className={className} style={{ position: 'relative' }}>
    <Image src="/backrev.png" alt="Chaudronnerie & Métallerie" fill className="object-contain" />
  </div>
);

const services = [
  {
    icon: CustomFlameIcon,
    number: "01",
    title: "Chaudronnerie & Métallerie",
    description:
      "Fabrication industrielle de haute précision : structures, équipements et assemblages en acier inoxydable.",
    items: [
      "Fabrication de structures métalliques",
      "Tuyauterie industrielle",
      "Tôlerie et soudure (TIG / MIG / ARC)",
    ],
  },
  {
    icon: Hammer,
    number: "02",
    title: "Ferronnerie d'Art",
    description:
      "Création artisanale d'éléments forgés mêlant savoir-faire traditionnel et esthétique contemporaine.",
    items: [
      "Création et forge décorative",
      "Portails sur mesure",
      "Pergolas et garde-corps",
    ],
  },
  {
    icon: Sofa,
    number: "03",
    title: "Décoration Design & Agencement",
    description:
      "Mobilier et aménagements métalliques contemporains qui transforment vos espaces intérieurs et extérieurs.",
    items: [
      "Mobilier métallique design",
      "Verrières atelier",
      "Escaliers et aménagements sur mesure",
    ],
  },
  {
    icon: HardHat,
    number: "04",
    title: "Travaux Divers & Maintenance",
    description:
      "Interventions rapides et fiables pour la serrurerie, la soudure sur site et toute réparation.",
    items: [
      "Serrurerie",
      "Soudure sur site",
      "Dépannage et réparation",
    ],
  },
  {
    icon: Laptop,
    number: "05",
    title: "Étude & Conception",
    description:
      "Accompagnement complet de votre projet, de l'analyse des besoins jusqu'à la modélisation finale.",
    items: [
      "Analyse des besoins",
      "Étude technique approfondie",
      "Mise en plan 2D & Modélisation 3D",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — mirrors About section style but inverted */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-primary-foreground/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-bold tracking-wider text-primary-foreground/70 uppercase">
              Ce que nous faisons
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight leading-tight mb-5">
            Nos Prestations Clés en Main
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Des solutions complètes et professionnelles pour tous vos projets en inox,
            de la conception à la réalisation.
          </p>
        </div>

        {/* 3-per-row grid, last row centered */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col rounded-2xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/[0.04] hover:bg-primary-foreground/[0.08] hover:border-primary-foreground/25 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
              >
                {/* ── Metallic steel icon zone (inox aesthetic) ── */}
                <div className="relative px-8 py-10 flex items-center justify-between overflow-hidden bg-gradient-to-br from-slate-300 via-slate-100 to-slate-400">
                  {/* Brushed-metal sheen lines */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "repeating-linear-gradient(105deg, transparent, transparent 4px, rgba(255,255,255,0.6) 4px, rgba(255,255,255,0.6) 5px)",
                    }}
                  />
                  {/* Frosted icon box */}
                  <div className="relative z-10 p-4 bg-primary/10 border border-primary/20 rounded-xl backdrop-blur-sm inline-flex transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
                  </div>
                  {/* Watermark number */}
                  <span className="relative z-10 text-6xl font-black text-primary/15 select-none leading-none">
                    {service.number}
                  </span>
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-col flex-grow px-7 py-7">
                  {/* Number badge */}
                  <span className="self-start text-[10px] font-bold tracking-[0.2em] uppercase border border-primary-foreground/20 text-primary-foreground/50 px-2.5 py-0.5 rounded-full mb-4">
                    {service.number}
                  </span>

                  <h3 className="text-xl font-bold text-primary-foreground leading-snug mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-primary-foreground/55 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="w-10 h-[2px] bg-primary-foreground/20 mb-5" />

                  {/* Items */}
                  <ul className="space-y-2.5 flex-grow">
                    {service.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start text-sm text-primary-foreground/65"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground/40 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
