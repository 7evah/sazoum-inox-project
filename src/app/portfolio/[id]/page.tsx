import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { portfolioItems } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PortfolioGallery from "@/components/portfolio-gallery";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ id: item.id }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = portfolioItems.find((p) => p.id === id);
  if (!item) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero banner */}
        <div className="relative h-72 md:h-96 w-full overflow-hidden bg-primary">
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm font-medium mb-4 transition-colors w-fit"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux réalisations
            </Link>
            <span className="text-xs font-bold tracking-widest uppercase text-primary-foreground/50 mb-2">
              {item.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight leading-tight">
              {item.title}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

            {/* Left — gallery + description */}
            <div>
              <PortfolioGallery media={item.media} title={item.title} />

              {/* Description */}
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-5">
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  À propos du projet
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {item.details}
              </p>
            </div>

            {/* Right — specs card + CTA */}
            <div className="flex flex-col gap-6">

              {/* Specs */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-5">
                  Fiche technique
                </h2>
                <ul className="space-y-4">
                  {item.specs.map((spec) => (
                    <li key={spec.label} className="flex flex-col gap-0.5 border-b border-border pb-4 last:border-0 last:pb-0">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-2xl bg-primary p-6 flex flex-col gap-4">
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Un projet similaire ? Contactez-nous pour un devis gratuit et personnalisé.
                </p>
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
                >
                  <Link href="/#contact">Demander un devis</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
