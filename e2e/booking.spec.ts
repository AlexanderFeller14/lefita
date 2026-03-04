import { expect, test } from "@playwright/test";

function tomorrowISO() {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  return now.toISOString().slice(0, 10);
}

test("terminformular validiert pflichtfelder", async ({ page }) => {
  await page.goto("/termin");
  await page.getByRole("button", { name: "Termin unverbindlich anfragen" }).click();

  await expect(page.getByText("Bitte Anrede auswählen.")).toBeVisible();
  await expect(page.getByText("Bitte Vornamen angeben.")).toBeVisible();
  await expect(page.getByText("Bitte Nachnamen angeben.")).toBeVisible();
  await expect(page.getByText("Bitte E-Mail angeben.")).toBeVisible();
  await expect(page.getByText("Bitte Telefonnummer angeben.")).toBeVisible();
  await expect(page.getByText("Bitte Thema auswählen.")).toBeVisible();
  await expect(page.getByText("Bitte Datum angeben.")).toBeVisible();
  await expect(page.getByText("Bitte Uhrzeit auswählen.")).toBeVisible();
  await expect(page.getByText("Bitte Datenschutz-Hinweis bestätigen.")).toBeVisible();
});

test("terminformular validiert e-mail format", async ({ page }) => {
  await page.goto("/termin");

  await page.getByLabel("Anrede *").selectOption("Frau");
  await page.getByLabel("Vorname *").fill("Anna");
  await page.getByLabel("Nachname *").fill("Beispiel");
  await page.getByLabel("Telefon *").fill("079 000 00 00");
  await page.getByLabel("E-Mail *").fill("ungueltig");
  await page.getByLabel("Thema / Bereich *").selectOption("Komplettpflege");
  await page.getByLabel("Bevorzugtes Datum *").fill(tomorrowISO());
  await page.getByLabel("Bevorzugte Uhrzeit *").selectOption("09:00");
  await page.getByRole("checkbox").check();

  await page.getByRole("button", { name: "Termin unverbindlich anfragen" }).click();
  await expect(page.getByText("Bitte gültige E-Mail angeben.")).toBeVisible();
});

test("terminformular sendet erfolgreich", async ({ page }) => {
  await page.goto("/termin");

  await page.getByLabel("Anrede *").selectOption("Herr");
  await page.getByLabel("Vorname *").fill("Max");
  await page.getByLabel("Nachname *").fill("Muster");
  await page.getByLabel("E-Mail *").fill("max@example.ch");
  await page.getByLabel("Telefon *").fill("079 123 45 67");
  await page.getByLabel("Thema / Bereich *").selectOption("Zahnreinigung");
  await page.getByLabel("Bevorzugtes Datum *").fill(tomorrowISO());
  await page.getByLabel("Bevorzugte Uhrzeit *").selectOption("10:00");
  await page.getByRole("checkbox").check();

  await page.getByRole("button", { name: "Termin unverbindlich anfragen" }).click();

  await expect(
    page.getByText("Danke! Ihre Terminanfrage wurde erfolgreich übermittelt. Lefita meldet sich telefonisch oder per E-Mail.")
  ).toBeVisible();
});
