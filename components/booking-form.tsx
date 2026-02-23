"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { appointmentFacts, ctaLinks, siteConfig } from "@/lib/site-data";

type FormState = {
  service: string;
  dogName: string;
  breed: string;
  size: string;
  age: string;
  coatState: string;
  isFirstVisit: string;
  ownerName: string;
  phone: string;
  email: string;
  preferredDate: string;
  message: string;
  consent: boolean;
};

type ValidationErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  service: "",
  dogName: "",
  breed: "",
  size: "",
  age: "",
  coatState: "",
  isFirstVisit: "ja",
  ownerName: "",
  phone: "",
  email: "",
  preferredDate: "",
  message: "",
  consent: false
};

function validate(state: FormState): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!state.service) errors.service = "Bitte Service auswählen.";
  if (!state.dogName.trim()) errors.dogName = "Bitte Namen des Hundes angeben.";
  if (!state.breed.trim()) errors.breed = "Bitte Rasse angeben.";
  if (!state.size) errors.size = "Bitte Größe auswählen.";
  if (!state.ownerName.trim()) errors.ownerName = "Bitte Ihren Namen angeben.";
  if (!state.phone.trim()) errors.phone = "Bitte Telefonnummer angeben.";

  if (!state.email.trim()) {
    errors.email = "Bitte E-Mail angeben.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
    errors.email = "Bitte gültige E-Mail angeben.";
  }

  if (!state.preferredDate) errors.preferredDate = "Bitte Wunschdatum angeben.";
  if (!state.consent) errors.consent = "Bitte Datenschutz-Hinweis bestätigen.";

  return errors;
}

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverState, setServerState] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const minDate = useMemo(() => {
    const now = new Date();
    now.setDate(now.getDate() + 1);
    return now.toISOString().slice(0, 10);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerState("idle");

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/termin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Übermittlung fehlgeschlagen.");
      }

      setServerState("success");
      setServerMessage(
        payload.message ?? "Danke! Ihre Anfrage ist eingegangen. Lefita meldet sich telefonisch oder per E-Mail."
      );
      setForm(initialState);
      setErrors({});
    } catch (error) {
      setServerState("error");
      setServerMessage(
        error instanceof Error ? error.message : "Es gab ein Problem beim Senden Ihrer Anfrage."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        className="fade-in-up rounded-3xl border border-pine/10 bg-white p-6 shadow-soft md:p-8"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2 className="font-display text-3xl text-pine">Termin anfragen</h2>
        <p className="mt-2 text-sm text-pine/80">
          {appointmentFacts.bookingRule} Bitte möglichst vollständig ausfüllen.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Field label="Service" error={errors.service} required>
            <select
              name="service"
              value={form.service}
              onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
              className="input-base"
            >
              <option value="">Bitte wählen</option>
              <option value="Komplettpflege">Komplettpflege</option>
              <option value="Welpen-Service">Welpen-Service</option>
              <option value="Zahnreinigung">Zahnreinigung</option>
              <option value="Entfilzen">Entfilzen</option>
              <option value="Ohren- und Krallenpflege">Ohren- und Krallenpflege</option>
            </select>
          </Field>

          <Field label="Name Hund" error={errors.dogName} required>
            <input
              name="dogName"
              value={form.dogName}
              onChange={(e) => setForm((prev) => ({ ...prev, dogName: e.target.value }))}
              className="input-base"
              autoComplete="off"
            />
          </Field>

          <Field label="Rasse" error={errors.breed} required>
            <input
              name="breed"
              value={form.breed}
              onChange={(e) => setForm((prev) => ({ ...prev, breed: e.target.value }))}
              className="input-base"
              autoComplete="off"
            />
          </Field>

          <Field label="Hundgröße" error={errors.size} required>
            <select
              name="size"
              value={form.size}
              onChange={(e) => setForm((prev) => ({ ...prev, size: e.target.value }))}
              className="input-base"
            >
              <option value="">Bitte wählen</option>
              <option value="klein">Klein</option>
              <option value="mittel">Mittel</option>
              <option value="gross">Gross</option>
            </select>
          </Field>

          <Field label="Alter Hund">
            <input
              name="age"
              value={form.age}
              onChange={(e) => setForm((prev) => ({ ...prev, age: e.target.value }))}
              className="input-base"
              autoComplete="off"
            />
          </Field>

          <Field label="Fellzustand / Hinweise">
            <input
              name="coatState"
              value={form.coatState}
              onChange={(e) => setForm((prev) => ({ ...prev, coatState: e.target.value }))}
              className="input-base"
              placeholder="z. B. verfilzt, empfindlich, nervös"
            />
          </Field>

          <Field label="Ersttermin?">
            <select
              name="isFirstVisit"
              value={form.isFirstVisit}
              onChange={(e) => setForm((prev) => ({ ...prev, isFirstVisit: e.target.value }))}
              className="input-base"
            >
              <option value="ja">Ja</option>
              <option value="nein">Nein</option>
            </select>
          </Field>

          <Field label="Wunschdatum" error={errors.preferredDate} required>
            <input
              name="preferredDate"
              value={form.preferredDate}
              onChange={(e) => setForm((prev) => ({ ...prev, preferredDate: e.target.value }))}
              className="input-base"
              type="date"
              min={minDate}
            />
          </Field>

          <Field label="Ihr Name" error={errors.ownerName} required>
            <input
              name="ownerName"
              value={form.ownerName}
              onChange={(e) => setForm((prev) => ({ ...prev, ownerName: e.target.value }))}
              className="input-base"
              autoComplete="name"
            />
          </Field>

          <Field label="Telefon" error={errors.phone} required>
            <input
              name="phone"
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              className="input-base"
              autoComplete="tel"
            />
          </Field>

          <Field label="E-Mail" error={errors.email} required>
            <input
              name="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="input-base"
              autoComplete="email"
              type="email"
            />
          </Field>
        </div>

        <Field label="Zusätzliche Nachricht" className="mt-4">
          <textarea
            name="message"
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="input-base min-h-28"
          />
        </Field>

        <label className="mt-4 flex items-start gap-3 text-sm text-pine/80">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
            className="mt-1 h-4 w-4 rounded border-pine/40"
          />
          <span>
            Ich bestätige, dass meine Angaben zur Terminbearbeitung verwendet werden dürfen.
          </span>
        </label>
        {errors.consent ? <p className="mt-2 text-xs text-red-700">{errors.consent}</p> : null}

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-pine px-5 py-3 text-sm font-bold text-white transition hover:bg-clay disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Termin unverbindlich anfragen"}
        </button>

        {serverState !== "idle" ? (
          <p
            role="status"
            className={`mt-4 rounded-xl px-4 py-3 text-sm ${
              serverState === "success"
                ? "bg-emerald-50 text-emerald-900"
                : "bg-red-50 text-red-800"
            }`}
          >
            {serverMessage}
          </p>
        ) : null}
      </form>

      <aside className="fade-in-up space-y-4 rounded-3xl border border-pine/10 bg-white p-6 shadow-soft md:p-8">
        <h2 className="font-display text-3xl text-pine">Hinweise</h2>

        <div className="space-y-4 text-sm text-pine/85">
          <Hint title="Ersttermin" body={appointmentFacts.firstVisit} />
          <Hint title="Absage" body={appointmentFacts.cancellation} />
          <Hint title="Verspätung" body={appointmentFacts.delay} />
        </div>

        <div className="rounded-2xl border border-pine/15 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">Direktkontakt</p>
          <p className="mt-2 text-sm text-pine">{siteConfig.openingHoursLabel}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a className="pill-link" href={ctaLinks.call}>
              Anrufen
            </a>
            <a className="pill-link" href={ctaLinks.mail}>
              E-Mail
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

type FieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
};

function Field({ label, required, error, children, className }: FieldProps) {
  return (
    <label className={className}>
      <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-pine/70">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-700">{error}</span> : null}
    </label>
  );
}

function Hint({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-pine/10 bg-white p-4">
      <h3 className="font-semibold text-pine">{title}</h3>
      <p className="mt-1 leading-relaxed">{body}</p>
    </article>
  );
}
