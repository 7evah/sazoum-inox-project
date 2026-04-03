import Image from "next/image";
import { Compass, Cog, HardHat } from "lucide-react";

const engagements = [
  {
    icon: Compass,
    label: "Étude et CAO",
    desc: "Modélisation 3D avant réalisation.",
  },
  {
    icon: Cog,
    label: "Fabrication sur mesure",
    desc: "Ateliers équipés pour l'acier, inox et aluminium.",
  },
  {
    icon: HardHat,
    label: "Pose professionnelle",
    desc: "Installation sur site par nos équipes.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">

          {/* ── Director photo — LEFT ── */}
          <div className="flex flex-col items-center">
            <div className="inline-block bg-primary-foreground/10 px-4 py-1.5 rounded-full mb-5">
              <span className="text-xs font-bold tracking-widest text-primary-foreground/60 uppercase">
                Le mot du Directeur Général
              </span>
            </div>
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-primary-foreground/15 shadow-2xl shadow-black/40">
              <Image
                src="/profilepictt.png"
                alt="Mostafa SALHO — Directeur Général de Sazoum Inox"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-white font-extrabold text-lg tracking-tight leading-tight">
                  Mustapha ESALHI
                </p>
                <p className="text-white/60 text-xs font-medium tracking-wider uppercase mt-0.5">
                  Directeur Général
                </p>
              </div>
            </div>
          </div>

          {/* ── Letter text — RIGHT ── */}
          <div>
            <div className="inline-block bg-primary-foreground/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm font-bold tracking-wider text-primary-foreground/70 uppercase">
                À Propos De Nous
              </span>
            </div>

            <p className="text-base text-primary-foreground/60 italic mb-6 leading-relaxed">
              Chères clientes, chers clients,
            </p>

            <div className="space-y-4 text-primary-foreground/75 text-sm leading-relaxed">
              <p>
                Depuis près de{" "}
                <strong className="text-primary-foreground font-semibold">20 ans</strong>,{" "}
                <strong className="text-primary-foreground font-semibold">SAZOUM INOX</strong>{" "}
                accompagne le développement de la Région de Casablanca-Mohammedia avec passion.
                Aujourd'hui, notre entreprise est plus que jamais prête à relever tous les défis
                et à vous offrir un service performant répondant à vos attentes.
              </p>
              <p>
                Notre entreprise spécialiste dans tous les travaux de second œuvre a pour vocation
                d'assurer des services essentiels de qualité qui place la satisfaction de nos clients
                et nos partenaires au cœur de nos priorités.
              </p>
              <p>
                Notre vocation se traduit par la mobilisation quotidienne de chacun de nos
                collaborateurs qui sont nos véritables héros du quotidien.
              </p>
            </div>

            <div className="w-full h-px bg-primary-foreground/15 my-6" />

            {/* Services list */}
            <p className="text-primary-foreground font-semibold text-sm mb-3">
              SAZOUM INOX propose des prestations dans l'ensemble des secteurs :
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/65 leading-relaxed mb-6">
              {[
                ["Chaudronnerie & Métallerie", "Structures métalliques, tuyauterie, tôlerie et soudure (TIG / MIG / ARC)."],
                ["Ferronnerie d'Art", "Forge décorative, portails, pergolas et garde-corps sur mesure."],
                ["Décoration Design & Agencement", "Mobilier métallique, verrières atelier, escaliers et aménagements."],
                ["Travaux Divers & Maintenance", "Serrurerie, soudure sur site, dépannage et réparation."],
              ].map(([title, detail]) => (
                <li key={title} className="flex gap-2">
                  <span className="text-primary-foreground/30 mt-0.5 flex-shrink-0">·</span>
                  <span>
                    <strong className="text-primary-foreground/85">{title}</strong>
                    {" — "}{detail}
                  </span>
                </li>
              ))}
            </ul>

            {/* Engagement Qualité — icon row */}
            <div className="bg-primary-foreground/[0.05] border border-primary-foreground/10 rounded-2xl px-5 py-4">
              <p className="text-primary-foreground font-semibold text-sm mb-4 tracking-wide">
                Engagement Qualité
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {engagements.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-primary-foreground/10 rounded-lg flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary-foreground/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-foreground/85 leading-tight">
                        {label}
                      </p>
                      <p className="text-xs text-primary-foreground/50 leading-snug mt-0.5">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
