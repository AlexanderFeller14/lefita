# Lefita Website (Next.js 2026 Relaunch)

Professioneller Relaunch der bestehenden Website `https://lefita.ch/` als moderne, conversion-orientierte Unternehmensseite für Hundepflege.

## Tech Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Playwright E2E
- Vercel-ready Struktur

## Übernommene Unternehmensdaten (Quelle: lefita.ch)

- Name: Lefita.ch
- Inhaberin: Eveline Slimen
- Adresse: Dorfstrasse 29, 3127 Mühlethurnen, Schweiz
- Telefon: 079 634 90 06
- E-Mail: lefita@bluewin.ch
- Terminzeiten: Montag bis Freitag, 08:00 - 18:00 Uhr
- Terminlogik: Hunde werden nur auf Termin behandelt (telefonische Terminvereinbarung)
- Leistungen: Baden, Föhnen, Frisieren, Effilieren, Trimmen, Scheren (Aesculap/Heiniger), Entfilzen, Ohren- und Krallenpflege, Welpen-Service, Zahnreinigung
- Zahnreinigung: Fr. 3.- pro Minute, Erstbehandlung Fr. 90.- bis Fr. 180.-

## Seiten

- `/` Start
- `/angebot`
- `/termin`
- `/kontakt`
- `/ablauf`
- `/infos`
- `/ueber-uns`
- `/impressum`
- `/datenschutz`

## Lokal starten

```bash
npm install
npm run dev
```

App unter: [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## E2E Tests (Playwright)

```bash
npm run test:e2e
```

HTML-Report öffnen:

```bash
npx playwright show-report
```

## Autodeploy auf Vercel

1. Projekt nach GitHub pushen.
2. In Vercel auf **New Project** klicken.
3. GitHub-Repository importieren.
4. Framework automatisch als **Next.js** erkennen lassen.
5. Falls benötigt, Environment Variables aus `.env.example` setzen.
6. Auf **Deploy** klicken.
7. Optional: Custom Domain verbinden.

## Hinweise zu Rechtstexten

Impressum und Datenschutzerklärung sind CH/revDSG-konform strukturiert. Stammdaten wurden aus der Quellseite übernommen.
