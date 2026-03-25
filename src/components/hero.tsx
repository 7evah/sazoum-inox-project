"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// We will duplicate the hero image to demonstrate the slider. In a real app, these would be distinct images.
const heroImages = [
  { id: 1, src: '/balcony-enhanced.png', alt: 'Sazoum Inox Hero 1' },
  { id: 2, src: '/slides1.png', alt: 'Sazoum Inox Hero 2' },
  { id: 3, src: '/slides5vest.png', alt: 'Sazoum Inox Hero 3' },
];

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="hero" className="relative h-[85vh] min-h-[600px] w-full bg-black overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={image.id} className="relative h-[85vh] min-h-[600px] w-full pl-0 overflow-hidden">
              <div 
                className="absolute w-full h-[120%] -top-[10%]"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-between z-20 pointer-events-none px-4 md:px-12">
          <CarouselPrevious className="pointer-events-auto relative left-0 translate-y-0 h-10 w-10 md:h-12 md:w-12 bg-black/30 text-white border-white/20 hover:bg-black/50 hover:text-white transition-all backdrop-blur-sm" />
          <CarouselNext className="pointer-events-auto relative right-0 translate-y-0 h-10 w-10 md:h-12 md:w-12 bg-black/30 text-white border-white/20 hover:bg-black/50 hover:text-white transition-all backdrop-blur-sm" />
        </div>

        {/* Text Overlay - keeping it static over the slides */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white pointer-events-none">
          <div className="p-4 max-w-4xl mx-auto pointer-events-auto">
            <h1 className="flex flex-col items-center justify-center gap-1 md:gap-3 mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <span className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                SAZOUM INOX
              </span>
              <span className="text-xl md:text-4xl font-light tracking-widest text-white/90 drop-shadow-md uppercase mt-2">
                L'Excellence de l'Inox au <strong className="font-bold text-white">Maroc</strong>
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-300 drop-shadow-md animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-both leading-relaxed">
              Votre partenaire de confiance pour la <strong className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">chaudronnerie</strong>, la <strong className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">construction</strong>, et tous vos besoins en <strong className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">acier inoxydable</strong> à Mohammedia.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground border-accent transition-transform hover:scale-105 w-full sm:w-auto">
                <a href="#services">Découvrir nos services</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary transition-transform hover:scale-105 w-full sm:w-auto">
                <a href="#contact">Demander un devis</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                current === index ? "bg-white w-8" : "bg-white/50 w-2.5 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
