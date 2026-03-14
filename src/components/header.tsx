"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="transition-transform hover:scale-105 block">
              <Image
                src="/logo.png"
                alt="Sazoum Inox Logo"
                width={866}
                height={757}
                priority
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center flex-shrink-0">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Nous Contacter</a>
            </Button>
          </div>

          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-sm pb-4 border-t">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-4/5 mt-4">
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Nous Contacter</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
