"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { appointmentFacts, ctaLinks, siteConfig } from "@/lib/site-data";

type FormState = {
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  petInfo: string;
  consent: boolean;
};

type ValidationErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  salutation: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  petInfo: "",
  consent: false
};

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30"
];

function validate(state: FormState): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!state.salutation) errors.salutation = "Bitte Anrede auswählen.";
  if (!state.firstName.trim()) errors.firstName = "Bitte Vornamen angeben.";
  if (!state.lastName.trim()) errors.lastName = "Bitte Nachnamen angeben.";
  if (!state.phone.trim()) errors.phone = "Bitte Telefonnummer angeben.";
  if (!state.topic) errors.topic = "Bitte Thema auswählen.";
  if (!state.preferredDate) errors.preferredDate = "Bitte Datum angeben.";
  if (!state.preferredTime) errors.preferredTime = "Bitte Uhrzeit auswählen.";

  if (!state.email.trim()) {
    errors.email = "Bitte E-Mail angeben.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
    errors.email = "Bitte gültige E-Mail angeben.";
  }

  if (!state.consent) errors.consent = "Bitte Datenschutz-Hinweis bestätigen.";

  return errors;
}

/* ── Inline SVG icons ─────────────────────────────── */

function IconUser({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconCalendar({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconClock({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconShield({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function IconPhone({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconAlert({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function IconSend({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function IconDog({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  );
}

function IconScissors({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

/* ── Section wrapper ──────────────────────────────── */

function FormSection({
  icon,
  title,
  step,
  children
}: {
  icon: ReactNode;
  title: string;
  step: number;
  children: ReactNode;
}) {
  return (
    <fieldset className="relative border-0 p-0 m-0">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pine/[0.07] text-pine/70">
          {icon}
        </span>
        <div className="flex items-baseline gap-2.5">
          <span className="hero-eyebrow text-[10px] font-bold uppercase tracking-[0.18em]">
            Schritt {step}
          </span>
          <legend className="text-base font-semibold text-pine tracking-tight">
            {title}
          </legend>
        </div>
      </div>
      {children}
    </fieldset>
  );
}

/* ── Main form ────────────────────────────────────── */

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
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
      {/* ── Form column ─────────────────────────────── */}
      <form
        className="fade-in-up rounded-3xl border border-pine/10 bg-white p-5 shadow-soft sm:p-6 md:p-8"
        noValidate
        onSubmit={handleSubmit}
      >
        {/* Header */}
        <div className="mb-7">
          <div className="h-1 w-12 rounded-full bg-clay/60 mb-4" />
          <h2 className="font-display text-2xl text-pine sm:text-3xl">
            Termin anfragen
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-pine/70">
            {appointmentFacts.bookingRule} Bitte möglichst vollständig ausfüllen — so können wir Ihren Termin optimal vorbereiten.
          </p>
        </div>

        <div className="space-y-7">
          {/* ── Step 1: Personal info ─────────────────── */}
          <FormSection icon={<IconUser className="h-4.5 w-4.5" />} title="Persönliche Angaben" step={1}>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <Field label="Anrede" error={errors.salutation} required className="sm:col-span-2 sm:max-w-[14rem]">
                <select
                  name="salutation"
                  value={form.salutation}
                  onChange={(e) => setForm((prev) => ({ ...prev, salutation: e.target.value }))}
                  className="input-base"
                >
                  <option value="">— auswählen —</option>
                  <option value="Frau">Frau</option>
                  <option value="Herr">Herr</option>
                  <option value="Divers">Divers</option>
                </select>
              </Field>

              <Field label="Vorname" error={errors.firstName} required>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
                  className="input-base"
                  autoComplete="given-name"
                />
              </Field>

              <Field label="Nachname" error={errors.lastName} required>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
                  className="input-base"
                  autoComplete="family-name"
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

              <Field label="Telefon" error={errors.phone} required>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                  className="input-base"
                  autoComplete="tel"
                />
              </Field>
            </div>
          </FormSection>

          <div className="border-t border-pine/[0.07]" />

          {/* ── Step 2: Appointment details ───────────── */}
          <FormSection icon={<IconCalendar className="h-4.5 w-4.5" />} title="Terminwunsch" step={2}>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <Field label="Thema / Bereich" error={errors.topic} required className="sm:col-span-2">
                <select
                  name="topic"
                  value={form.topic}
                  onChange={(e) => setForm((prev) => ({ ...prev, topic: e.target.value }))}
                  className="input-base"
                >
                  <option value="">— auswählen —</option>
                  <option value="Komplettpflege">Komplettpflege</option>
                  <option value="Welpen-Service">Welpen-Service</option>
                  <option value="Zahnreinigung">Zahnreinigung</option>
                  <option value="Entfilzen">Entfilzen</option>
                  <option value="Ohren- und Krallenpflege">Ohren- und Krallenpflege</option>
                </select>
              </Field>

              <Field label="Bevorzugtes Datum" error={errors.preferredDate} required>
                <input
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={(e) => setForm((prev) => ({ ...prev, preferredDate: e.target.value }))}
                  className="input-base"
                  type="date"
                  min={minDate}
                />
              </Field>

              <Field label="Bevorzugte Uhrzeit" error={errors.preferredTime} required>
                <select
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={(e) => setForm((prev) => ({ ...prev, preferredTime: e.target.value }))}
                  className="input-base"
                >
                  <option value="">— auswählen —</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </Field>
            </div>
          </FormSection>

          <div className="border-t border-pine/[0.07]" />

          {/* ── Step 3: Additional info ───────────────── */}
          <FormSection icon={<IconDog className="h-4.5 w-4.5" />} title="Zusätzliche Informationen" step={3}>
            <div className="space-y-4">
              <Field label="Informationen">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="input-base min-h-24"
                  placeholder="Besondere Wünsche, Hinweise, bevorzugte Uhrzeiten ..."
                />
              </Field>

              <Field label="Infos zu Hund/Katze">
                <textarea
                  name="petInfo"
                  value={form.petInfo}
                  onChange={(e) => setForm((prev) => ({ ...prev, petInfo: e.target.value }))}
                  className="input-base min-h-24"
                  placeholder="Gibt es spezielle Infos zu Ihrem Hund oder Katze?"
                />
              </Field>
            </div>
          </FormSection>
        </div>

        {/* ── Consent + Submit ────────────────────────── */}
        <div className="mt-7 rounded-2xl border border-pine/[0.08] bg-pine/[0.02] p-4">
          <label className="flex items-start gap-3 text-sm text-pine/80 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
              className="mt-0.5 h-[18px] w-[18px] rounded border-pine/30 accent-clay"
            />
            <span className="leading-relaxed">
              Ich bestätige, dass meine Angaben zur Terminbearbeitung verwendet werden dürfen.
            </span>
          </label>
          {errors.consent ? (
            <p className="mt-2 ml-8 text-xs text-red-700">{errors.consent}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="group mt-5 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-pine px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-clay hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-pine disabled:hover:shadow-none disabled:active:scale-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Wird gesendet...
            </>
          ) : (
            <>
              <IconSend className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              Termin unverbindlich anfragen
            </>
          )}
        </button>

        {/* ── Status feedback ─────────────────────────── */}
        {serverState !== "idle" ? (
          <div
            role="status"
            className={`mt-5 flex items-start gap-3 rounded-2xl px-5 py-4 text-sm ${
              serverState === "success"
                ? "border border-emerald-200 bg-emerald-50/80 text-emerald-900"
                : "border border-red-200 bg-red-50/80 text-red-800"
            }`}
          >
            <span className="mt-0.5 flex-shrink-0">
              {serverState === "success" ? (
                <IconCheck className="h-5 w-5 text-emerald-600" />
              ) : (
                <IconAlert className="h-5 w-5 text-red-600" />
              )}
            </span>
            <div>
              <p className="font-semibold">
                {serverState === "success" ? "Anfrage gesendet" : "Fehler beim Senden"}
              </p>
              <p className="mt-0.5 leading-relaxed opacity-90">{serverMessage}</p>
            </div>
          </div>
        ) : null}
      </form>

      {/* ── Sidebar ───────────────────────────────────── */}
      <aside className="fade-in-up space-y-5 lg:sticky lg:top-28 lg:self-start">
        {/* Hints section */}
        <div className="rounded-3xl border border-pine/10 bg-white p-5 shadow-soft sm:p-6 md:p-7">
          <div className="h-1 w-10 rounded-full bg-moss/50 mb-4" />
          <h2 className="font-display text-2xl text-pine">Gut zu wissen</h2>
          <p className="mt-1.5 text-xs text-pine/55 uppercase font-semibold tracking-[0.14em]">
            Hinweise zum Termin
          </p>

          <div className="mt-5 space-y-3">
            <HintCard
              icon={<IconScissors className="h-4 w-4" />}
              title="Ersttermin"
              body={appointmentFacts.firstVisit}
              accent="clay"
            />
            <HintCard
              icon={<IconClock className="h-4 w-4" />}
              title="Absage"
              body={appointmentFacts.cancellation}
              accent="moss"
            />
            <HintCard
              icon={<IconShield className="h-4 w-4" />}
              title="Verspätung"
              body={appointmentFacts.delay}
              accent="pine"
            />
          </div>
        </div>

        {/* Direct contact */}
        <div className="card-sand rounded-3xl p-5 sm:p-6">
          <p className="hero-eyebrow text-xs font-bold uppercase tracking-[0.16em]">
            Direktkontakt
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-pine/85">
            {siteConfig.openingHoursLabel}
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              className="pill-link justify-start gap-2.5"
              href={ctaLinks.call}
            >
              <IconPhone className="h-4 w-4" />
              Anrufen
            </a>
            <a
              className="pill-link justify-start gap-2.5"
              href={ctaLinks.mail}
            >
              <IconMail className="h-4 w-4" />
              E-Mail
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

/* ── Field component ──────────────────────────────── */

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
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-pine/60">
        {label}
        {required ? <span className="text-clay"> *</span> : ""}
      </span>
      {children}
      {error ? (
        <span className="mt-1.5 flex items-center gap-1 text-xs text-red-700">
          <span className="inline-block h-1 w-1 rounded-full bg-red-500" />
          {error}
        </span>
      ) : null}
    </label>
  );
}

/* ── Hint card ────────────────────────────────────── */

function HintCard({
  icon,
  title,
  body,
  accent
}: {
  icon: ReactNode;
  title: string;
  body: string;
  accent: "clay" | "moss" | "pine";
}) {
  const accentStyles = {
    clay: "border-clay/15 bg-clay/[0.04]",
    moss: "border-moss/20 bg-moss/[0.04]",
    pine: "border-pine/10 bg-pine/[0.03]"
  };

  const iconBg = {
    clay: "bg-clay/10 text-clay",
    moss: "bg-moss/15 text-moss",
    pine: "bg-pine/[0.08] text-pine/70"
  };

  return (
    <article className={`rounded-2xl border p-4 ${accentStyles[accent]}`}>
      <div className="flex items-center gap-2.5">
        <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconBg[accent]}`}>
          {icon}
        </span>
        <h3 className="text-sm font-semibold text-pine">{title}</h3>
      </div>
      <p className="mt-2 pl-[38px] text-[13px] leading-relaxed text-pine/70">{body}</p>
    </article>
  );
}
