import { expect, test } from "@playwright/test";

function tomorrowISO() {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  return now.toISOString().slice(0, 10);
}

test("terminformular validiert pflichtfelder", async ({ page }) => {
  await page.goto("/termin");
  await page.getByRole("button", { name: "Termin unverbindlich anfragen" }).click();

  await expect(page.getByText("Bitte Service auswählen.")).toBeVisible();
  await expect(page.getByText("Bitte Namen des Hundes angeben.")).toBeVisible();
  await expect(page.getByText("Bitte E-Mail angeben.")).toBeVisible();
  await expect(page.getByText("Bitte Datenschutz-Hinweis bestätigen.")).toBeVisible();
});

test("terminformular validiert e-mail format", async ({ page }) => {
  await page.goto("/termin");

  await page.getByLabel("Service *").selectOption("Komplettpflege");
  await page.getByLabel("Name Hund *").fill("Luna");
  await page.getByLabel("Rasse *").fill("Mischling");
  await page.getByLabel("Hundgröße *").selectOption("mittel");
  await page.getByLabel("Wunschdatum *").fill(tomorrowISO());
  await page.getByLabel("Ihr Name *").fill("Max Muster");
  await page.getByLabel("Telefon *").fill("079 000 00 00");
  await page.getByLabel("E-Mail *").fill("ungueltig");
  await page.getByRole("checkbox").check();

  await page.getByRole("button", { name: "Termin unverbindlich anfragen" }).click();
  await expect(page.getByText("Bitte gültige E-Mail angeben.")).toBeVisible();
});

test("terminformular sendet erfolgreich", async ({ page }) => {
  await page.goto("/termin");

  await page.getByLabel("Service *").selectOption("Zahnreinigung");
  await page.getByLabel("Name Hund *").fill("Balu");
  await page.getByLabel("Rasse *").fill("Labrador");
  await page.getByLabel("Hundgröße *").selectOption("gross");
  await page.getByLabel("Wunschdatum *").fill(tomorrowISO());
  await page.getByLabel("Ihr Name *").fill("Anna Beispiel");
  await page.getByLabel("Telefon *").fill("079 123 45 67");
  await page.getByLabel("E-Mail *").fill("anna@example.ch");
  await page.getByRole("checkbox").check();

  await page.getByRole("button", { name: "Termin unverbindlich anfragen" }).click();

  await expect(
    page.getByText("Danke! Ihre Terminanfrage wurde erfolgreich übermittelt. Lefita meldet sich telefonisch oder per E-Mail.")
  ).toBeVisible();
});
