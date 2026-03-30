export type PortfolioItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string;
  coverImage: string;
  images: string[];
  specs: { label: string; value: string }[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "cuisine-salles-de-bain",
    category: "Chaudronnerie & Inox",
    title: "Cuisine & Salles de Bain Professionnelles",
    description:
      "Conception et réalisation sur mesure de cuisines et salles de bain professionnelles en acier inoxydable, alliant hygiène, durabilité et design.",
    details:
      "Ce projet illustre notre savoir-faire en matière de fabrication d'équipements professionnels en acier inoxydable. Chaque pièce est conçue sur mesure pour répondre aux normes d'hygiène les plus strictes tout en offrant une esthétique contemporaine. Nos équipes ont assuré la conception, la fabrication en atelier et la pose complète sur site.",
    coverImage: "/cuisinety.jpeg",
    images: ["/cuisinety.jpeg","/toiletcos.jpeg", "/enahnced-ketchen.png",  "/enhanced-toillet.png"],
    specs: [
      { label: "Matériaux", value: "Acier inoxydable 304 / 316L" },
      { label: "Finition", value: "Brossé satinée" },
      { label: "Secteur", value: "Professionnel / CHR" },
      { label: "Prestation", value: "Conception, fabrication & pose" },
    ],
  },
  {
    id: "amenagement-interieur-exterieur",
    category: "Aménagement",
    title: "Aménagement Intérieur & Extérieur",
    description:
      "Solutions complètes d'aménagement pour sublimer vos espaces intérieurs et extérieurs avec des matériaux nobles et une finition parfaite.",
    details:
      "Un projet d'envergure combinant aménagements intérieurs et extérieurs entièrement réalisés en inox et acier. Verrières atelier, garde-corps, mobilier sur mesure et structures extérieures ont été conçus en cohérence esthétique totale. Chaque détail a été pensé pour garantir durabilité et élégance.",
    coverImage: "/collage-ex-in3-2.png",
    images: [
      "/amenage2.jpeg",
      "/outsidework-enhanced-garden.png",
      "/exterieur-aminag3.jpeg",
      "/inside-work-enhanced-stairs.png",
    ],
    specs: [
      { label: "Matériaux", value: "Inox, acier laqué, verre trempé" },
      { label: "Finition", value: "Thermolaqué / Poli miroir" },
      { label: "Secteur", value: "Résidentiel / Tertiaire" },
      { label: "Prestation", value: "Étude, fabrication & installation" },
    ],
  },
  {
    id: "menuiserie-metallique",
    category: "Ferronnerie & Menuiserie",
    title: "Menuiserie Métallique Tous Types",
    description:
      "Créations de menuiserie sur mesure en acier et inox pour tous types de projets, répondant aux exigences les plus strictes en matière de qualité.",
    details:
      "Nos réalisations en menuiserie métallique couvrent une large gamme : escaliers hélicoïdaux, garde-corps design, balcons et structures de balustrades. Chaque ouvrage est fabriqué dans nos ateliers avec des équipements de précision avant d'être installé par nos équipes sur site.",
    coverImage: "/talt.jpg",
    images: ["/talt.jpg", "/balcony-enhanced.png", "/balcony.jpeg", "/slides5vest.png"],
    specs: [
      { label: "Matériaux", value: "Acier, inox, aluminium" },
      { label: "Finition", value: "Galvanisé / Thermolaqué / Brossé" },
      { label: "Secteur", value: "Bâtiment / Résidentiel" },
      { label: "Prestation", value: "Fabrication sur mesure & pose" },
    ],
  },
];
