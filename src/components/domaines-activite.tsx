import { Layers, Zap, DoorOpen, Paintbrush, ChefHat } from "lucide-react";

const activites = [
  {
    icon: Layers,
    title: "Isolation & Cloisonnement",
    description: "Pose de cloisons sèches, isolation thermique et phonique.",
  },
  {
    icon: Zap,
    title: "Installations Techniques",
    description: "Électricité, plomberie, chauffage, ventilation (CVC).",
  },
  {
    icon: DoorOpen,
    title: "Menuiseries",
    description: "Pose de fenêtres, portes intérieures, escaliers.",
  },
  {
    icon: Paintbrush,
    title: "Finitions",
    description: "Revêtements de sols (carrelage, parquet), revêtements muraux, peinture.",
  },
  {
    icon: ChefHat,
    title: "Aménagements",
    description: "Installation de cuisine, salle de bain.",
  },
];

export default function DomainesActivite() {
  return (
    <section className="py-20 md:py-28 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-bold tracking-wider text-primary uppercase">
              Domaines d'activité
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
            Nos Domaines d'Activité
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Notre activité clé repose sur tous les travaux de{" "}
            <strong className="text-foreground font-semibold">seconds œuvres</strong>.
          </p>
        </div>

        {/* 5 activity cards — 3 per row, last 2 centered */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {activites.map((activite, index) => {
            const Icon = activite.icon;
            return (
              <div
                key={index}
                className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center text-center rounded-2xl border border-border bg-card hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Icon zone */}
                <div className="w-full flex flex-col items-center pt-10 pb-8 px-8 bg-primary/[0.04] group-hover:bg-primary/[0.07] transition-colors duration-300">
                  <div className="p-5 bg-primary/10 rounded-2xl mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon
                      className="h-14 w-14 text-primary transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.4}
                    />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary tracking-tight">
                    {activite.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="px-8 py-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {activite.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
