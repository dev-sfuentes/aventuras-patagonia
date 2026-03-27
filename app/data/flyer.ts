export type FlyerSection = {
  title: string;
  body: string[];
};

export type FlyerHighlight = {
  icon: string;
  title: string;
  body: string;
};

export type FlyerFooterCard = {
  icon: string;
  title: string;
  lines: string[];
};

export type FlyerContent = {
  languageSwitchLabel: string;
  downloadLabel: string;
  logoKicker: string;
  logoName: string;
  logoTagline: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: FlyerSection[];
  contactEyebrow: string;
  contactTitle: string;
  footerCards: FlyerFooterCard[];
  qrValue: string;
  qrLabel: string;
  qrCaption: string;
};

export const flyerContent: Record<"en" | "es", FlyerContent> = {
  en: {
    languageSwitchLabel: "Ver en espanol",
    downloadLabel: "Download flyer",
    logoKicker: "Your",
    logoName: "Logo",
    logoTagline: "Lorem ipsum",
    eyebrow: "Lorem ipsum",
    heroTitle: "FLYER",
    heroSubtitle: "Business template",
    sections: [
      {
        title: "Lorem ipsum",
        body: [
          "Proin et ipsum id elit consectetur volutpat non ac mi. Vestibulum quis quam augue. Duis in urna massa. Praesent posuere arcu vitae enim maximus, nec imperdiet dolor porta. Proin tristique turpis quam, vitae fermentum lacus suscipit placerat.",
        ],
      },
      {
        title: "Lorem ipsum",
        body: [
          "Proin et ipsum id elit consectetur volutpat non ac mi. Vestibulum quis quam augue. Duis in urna massa. Praesent posuere arcu vitae enim maximus, nec imperdiet dolor porta. Proin tristique turpis quam, vitae fermentum lacus suscipit placerat.",
        ],
      },
    ],
    contactEyebrow: "Plan your visit",
    contactTitle: "Contact Us",
    footerCards: [
      {
        icon: "lucide:smartphone",
        title: "Mobile",
        lines: [
          "English speakers: +569 8689 0981",
          "Spanish speakers: +569 7783 5039",
        ],
      },
      {
        icon: "lucide:mail",
        title: "Email",
        lines: [
          "contact@aventuraspatagonia.cl",
          "contacto@aventuraspatagonia.cl",
        ],
      },
      {
        icon: "lucide:instagram",
        title: "Instagram",
        lines: ["aventuras_en_la_patagonia"],
      },
      {
        icon: "lucide:facebook",
        title: "Facebook",
        lines: ["cabalgataspuq"],
      },
    ],
    qrValue: "https://aventuraspatagonia.cl",
    qrLabel: "QR code for aventuraspatagonia.cl",
    qrCaption: "Scan to visit",
  },
  es: {
    languageSwitchLabel: "View in English",
    downloadLabel: "Descargar volante",
    logoKicker: "Tu",
    logoName: "Logo",
    logoTagline: "Lorem ipsum",
    eyebrow: "Lorem ipsum",
    heroTitle: "VOLANTE",
    heroSubtitle: "Plantilla comercial",
    sections: [
      {
        title: "Acerca de Nosotros",
        body: [
          "Somos una PyME de Punta Arenas dedicada a ofrecer diversos servicios para que nuestros visitantes disfruten de la magia rural magallanica a traves del turismo, la culinaria y el hospedaje. ",
          "Nos caracterizamos por nuestra flexibilidad, cordialidad y cercania con cada turista, siempre con el objetivo de crear recuerdos inolvidables por medio de la calidez de nuestra cultura chilena.",
          "Para más detalles, visitanos en https://aventuraspatagonia.cl",
        ],
      },
      {
        title: "Lorem ipsum",
        body: [
          "Proin et ipsum id elit consectetur volutpat non ac mi. Vestibulum quis quam augue. Duis in urna massa. Praesent posuere arcu vitae enim maximus, nec imperdiet dolor porta. Proin tristique turpis quam, vitae fermentum lacus suscipit placerat.",
        ],
      },
    ],
    contactEyebrow: "Planifica tu visita",
    contactTitle: "Contacto",
    footerCards: [
      {
        icon: "lucide:smartphone",
        title: "Movil",
        lines: ["EN speakers: +569 8689 0981", "ES speakers: +569 7783 5039"],
      },
      {
        icon: "lucide:mail",
        title: "Email",
        lines: [
          "contact@aventuraspatagonia.cl",
          "contacto@aventuraspatagonia.cl",
        ],
      },
      {
        icon: "lucide:instagram",
        title: "Instagram",
        lines: ["aventuras_en_la_patagonia"],
      },
      {
        icon: "lucide:facebook",
        title: "Facebook",
        lines: ["cabalgataspuq"],
      },
    ],
    qrValue: "https://aventuraspatagonia.cl",
    qrLabel: "Codigo QR para aventuraspatagonia.cl",
    qrCaption: "Escanea para visitar",
  },
};
