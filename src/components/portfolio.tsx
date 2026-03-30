import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/lib/portfolio-data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-bold tracking-wider text-primary uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
            Nos Réalisations
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez la qualité et la précision de notre travail à travers nos projets réalisés.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/25 hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
            >
              {/* Cover image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-black/50 text-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg font-extrabold text-foreground leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-5">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-primary/20 mb-5" />

                {/* CTA */}
                <Link
                  href={`/portfolio/${item.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 group/link"
                >
                  Voir le projet
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
