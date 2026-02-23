import { NextResponse } from "next/server";

const requiredFields = [
  "service",
  "dogName",
  "breed",
  "size",
  "ownerName",
  "phone",
  "email",
  "preferredDate"
] as const;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;

    for (const field of requiredFields) {
      if (!payload[field] || String(payload[field]).trim().length === 0) {
        return NextResponse.json(
          { message: `Pflichtfeld fehlt: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!payload.consent) {
      return NextResponse.json(
        { message: "Datenschutz-Bestätigung ist erforderlich." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message:
          "Danke! Ihre Terminanfrage wurde erfolgreich übermittelt. Lefita meldet sich telefonisch oder per E-Mail."
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Die Anfrage konnte nicht verarbeitet werden." },
      { status: 400 }
    );
  }
}
