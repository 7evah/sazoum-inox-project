"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { MediaItem } from "@/lib/portfolio-data";

function vimeoId(embedSrc: string) {
  return embedSrc.match(/vimeo\.com\/video\/(\d+)/)?.[1] ?? null;
}

function vimeoCover(embedSrc: string) {
  const id = vimeoId(embedSrc);
  return id ? `https://vumbnail.com/${id}.jpg` : null;
}

function mutedSrc(embedSrc: string, autoplay: boolean) {
  const base = embedSrc.replace(/[?&](autoplay|muted)=\d/g, "");
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}muted=1&autoplay=${autoplay ? 1 : 0}`;
}

// ── Video with cover poster ──────────────────────────────────────────────────
function VideoPlayer({
  item,
  title,
  className = "",
}: {
  item: Extract<MediaItem, { type: "video" }>;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const cover = vimeoCover(item.embedSrc);

  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-black ${className}`}>
      {!playing ? (
        <>
          {/* Cover thumbnail */}
          {cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover}
              alt={item.title ?? title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Dark scrim + play button */}
          <div className="absolute inset-0 bg-black/35" />
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center group/play"
            aria-label="Lancer la vidéo"
          >
            <span className="p-5 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 transition-transform duration-200 group-hover/play:scale-110">
              <Play className="h-8 w-8 text-white fill-white" />
            </span>
          </button>
        </>
      ) : (
        <iframe
          src={mutedSrc(item.embedSrc, true)}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full"
          title={item.title ?? title}
        />
      )}
    </div>
  );
}

// ── Main display ─────────────────────────────────────────────────────────────
function MainMedia({ item, title }: { item: MediaItem; title: string }) {
  if (item.type === "video") {
    return <VideoPlayer item={item} title={title} />;
  }
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-black">
      <Image src={item.src} alt={title} fill className="object-contain" priority />
    </div>
  );
}

// ── Thumbnail ────────────────────────────────────────────────────────────────
function Thumbnail({
  item,
  index,
  active,
  onClick,
  title,
}: {
  item: MediaItem;
  index: number;
  active: boolean;
  onClick: () => void;
  title: string;
}) {
  const cover = item.type === "video" ? vimeoCover(item.embedSrc) : null;

  return (
    <button
      onClick={onClick}
      className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
        active ? "border-primary shadow-md scale-[1.02]" : "border-border hover:border-primary/50"
      }`}
    >
      {item.type === "video" ? (
        <div className="absolute inset-0 bg-slate-900">
          {cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="p-2 bg-white/25 rounded-full backdrop-blur-sm">
              <Play className="h-4 w-4 text-white fill-white" />
            </span>
          </div>
        </div>
      ) : (
        <Image src={item.src} alt={`${title} ${index + 1}`} fill className="object-cover" />
      )}
      {active && (
        <div className="absolute inset-0 ring-2 ring-primary ring-inset rounded-xl pointer-events-none" />
      )}
    </button>
  );
}

// ── Gallery ──────────────────────────────────────────────────────────────────
export default function PortfolioGallery({
  media,
  title,
}: {
  media: MediaItem[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mb-10">
      <div className="mb-3">
        <MainMedia item={media[activeIndex]} title={title} />
      </div>

      {media.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {media.map((item, i) => (
            <Thumbnail
              key={i}
              item={item}
              index={i}
              active={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              title={title}
            />
          ))}
        </div>
      )}
    </div>
  );
}
