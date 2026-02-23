export const siteConfig = {
  brand: "Lefita",
  legalBrand: "Lefita.ch",
  owner: "Eveline Slimen",
  slogan: "Schnitt für Schnitt zur Wunschfrisur",
  description:
    "Hundefriseur in Mühlethurnen mit ruhiger, stressfreier Pflege, Welpen-Service, Entfilzen, Ohren- und Krallenpflege sowie narkosefreier Ultraschall-Zahnreinigung.",
  url: "https://lefita.ch",
  phoneDisplay: "079 634 90 06",
  phoneHref: "+41796349006",
  email: "lefita@bluewin.ch",
  street: "Dorfstrasse 29",
  postalCode: "3127",
  city: "Mühlethurnen",
  country: "CH",
  openingHoursLabel: "Montag bis Freitag, 08:00 - 18:00 Uhr",
  openingHoursSpecification: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    }
  ]
} as const;

export const topNavigation = [
  { href: "/", label: "Start" },
  { href: "/angebot", label: "Angebot" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/termin", label: "Termin" },
  { href: "/kontakt", label: "Kontakt" }
] as const;

export const footerNavigation = [
  { href: "/ablauf", label: "Ablauf" },
  { href: "/infos", label: "Wichtige Infos" },
  { href: "/ueber-uns", label: "Über Lefita" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" }
] as const;

export const coreServices = [
  "Baden",
  "Föhnen",
  "Frisieren",
  "Effilieren",
  "Trimmen",
  "Scheren (Aesculap/Heiniger)",
  "Entfilzen",
  "Ohren- und Krallenpflege",
  "Zahnreinigung: Entfernung von Zahnbelag & Zahnstein",
  "Welpen-Service: erster, kurzer Besuch im Salon zum Kennenlernen"
] as const;

export const salonHighlights = [
  "Stressfreie Pflege in entspannter Atmosphäre",
  "Alle Hunderassen sind willkommen",
  "Grosse Hunde sind ebenfalls willkommen",
  "Hunde ohne Salonerfahrung werden mit Einfühlvermögen an die Ambiance gewöhnt"
] as const;

export const dentalFacts = {
  heading: "Narkosefreie Ultraschall Zahnreinigung",
  intro:
    "Das Goldhammer Ultraschall-Set wurde speziell für Hunde entwickelt und beseitigt Zahnstein, Beläge und Verfärbungen schonend.",
  benefits: [
    "sanft & stressfrei",
    "sofort sichtbares Ergebnis",
    "keine Narkose",
    "ohne Chemie"
  ],
  minutePrice: "Fr. 3.- pro Minute",
  firstTreatmentRange: "Fr. 90.- bis Fr. 180.-"
} as const;

export const appointmentFacts = {
  bookingRule: "Hunde werden nur auf Termin behandelt.",
  bookingChannel: "Telefonische Terminvereinbarung",
  firstVisit:
    "Beim Ersttermin wird Ihr Hund in Ruhe an Umgebung und Geräte gewöhnt. Der Zeitaufwand kann dadurch variieren.",
  cancellation:
    "Bitte Terminänderungen frühzeitig mitteilen, damit freie Zeitfenster wieder vergeben werden können.",
  delay:
    "Bei Verspätung kurz telefonisch melden. Je nach Tagesplanung kann der Termin angepasst werden."
} as const;

export const importantInfoBlocks = [
  {
    title: "Verfilzung",
    body:
      "Stark verfilztes Fell erhöht den Zeitaufwand deutlich. Die Behandlung erfolgt so schonend wie möglich und wird nach Fellzustand geplant."
  },
  {
    title: "Parasiten",
    body:
      "Bei akuten Parasiten bitte vor dem Termin kurz Kontakt aufnehmen, damit Schutz- und Hygienemassnahmen vorbereitet werden können."
  },
  {
    title: "Läufigkeit",
    body:
      "Läufige Hündinnen können behandelt werden. Bitte die Situation bei der Terminvereinbarung direkt erwähnen."
  },
  {
    title: "Absagen",
    body:
      "Absagen möglichst frühzeitig telefonisch melden. So können andere Kundinnen und Kunden nachrücken."
  },
  {
    title: "Verhalten",
    body:
      "Nervöse Hunde werden mit Ruhe und Einfühlvermögen begleitet. Hunde ohne Salonerfahrung werden Schritt für Schritt an die Pflege gewöhnt."
  }
] as const;

export const preparationChecklist = [
  "Leine und Halsband/Geschirr mitbringen",
  "Falls vorhanden: kurze Hinweise zu Allergien, empfindlichen Stellen oder Verhalten",
  "Welpen dürfen zuerst kurz den Salon kennenlernen",
  "Nervöse Hunde bitte bereits bei der Buchung angeben",
  "Grosse Hunde sind willkommen und werden passend eingeplant"
] as const;

export const homeFlow = [
  {
    title: "1. Termin anfragen",
    body: "Buchung telefonisch oder über das Online-Formular mit den wichtigsten Hundedaten."
  },
  {
    title: "2. Kurzbesprechung",
    body: "Ziel, Fellzustand und Zeitaufwand werden vor Ort gemeinsam abgestimmt."
  },
  {
    title: "3. Ruhige Pflege",
    body: "Ihr Hund wird stressfrei und professionell in entspannter Atmosphäre gepflegt."
  },
  {
    title: "4. Abholung & Hinweise",
    body: "Sie erhalten eine kurze Rückmeldung und Empfehlungen für die nächste Pflegeeinheit."
  }
] as const;

export const offerCards = [
  {
    title: "Pflegepaket Komplett",
    body: "Baden, Föhnen, Frisieren, Effilieren, Trimmen/Scheren, Entfilzen, Ohren- und Krallenpflege."
  },
  {
    title: "Welpen-Service",
    body: "Erster kurzer Besuch im Salon, damit sich Welpen an Geräusche, Geräte und Umgebung gewöhnen können."
  },
  {
    title: "Zahnreinigung",
    body: "Narkosefreie Ultraschall-Zahnreinigung zur Entfernung von Zahnbelag, Zahnstein und Verfärbungen."
  }
] as const;

export const sizePricing = [
  {
    size: "Kleine Hunde",
    range: "Preis nach Aufwand",
    note: "Abhängig von Fellzustand, Pflegeziel und Verhalten."
  },
  {
    size: "Mittlere Hunde",
    range: "Preis nach Aufwand",
    note: "Zeitaufwand wird beim Termin individuell eingeplant."
  },
  {
    size: "Grosse Hunde",
    range: "Preis nach Aufwand",
    note: "Grosse Hunde sind ausdrücklich willkommen; der Aufwand wird transparent besprochen."
  }
] as const;

export const ctaLinks = {
  booking: "/termin",
  call: `tel:${siteConfig.phoneHref}`,
  mail: `mailto:${siteConfig.email}`,
  route: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${siteConfig.street}, ${siteConfig.postalCode} ${siteConfig.city}, Schweiz`
  )}`
} as const;

export const realWebsiteImages = [
  {
    src: "/lefita-original-1.jpg",
    alt: "Originalbild von lefita.ch - Hundepflege Impression 1"
  },
  {
    src: "/lefita-original-2.jpg",
    alt: "Originalbild von lefita.ch - Hundepflege Impression 2"
  },
  {
    src: "/lefita-original-3.jpg",
    alt: "Originalbild von lefita.ch - Hundepflege Impression 3"
  },
  {
    src: "/lefita-original-4.jpg",
    alt: "Originalbild von lefita.ch - Hundepflege Impression 4"
  },
  {
    src: "/lefita-original-5.jpg",
    alt: "Originalbild von lefita.ch - Hundepflege Impression 5"
  },
  {
    src: "/lefita-original-6.jpg",
    alt: "Originalbild von lefita.ch - Hundepflege Impression 6"
  },
  {
    src: "/lefita-original-7.jpg",
    alt: "Originalbild von lefita.ch - Hundepflege Impression 7"
  },
  {
    src: "/lefita-original-8.jpg",
    alt: "Originalbild von lefita.ch - Hundepflege Impression 8"
  }
] as const;
