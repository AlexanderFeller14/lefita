import { expect, test } from "@playwright/test";

const pages = [
  "/",
  "/angebot",
  "/termin",
  "/kontakt",
  "/ablauf",
  "/infos",
  "/ueber-uns",
  "/impressum",
  "/datenschutz"
];

test("alle pflichtseiten laden mit exakt einer h1", async ({ page }) => {
  for (const route of pages) {
    await page.goto(route);
    await expect(page).toHaveURL(new RegExp(`${route === "/" ? "\\/$" : route}$`));
    await expect(page.locator("h1")).toHaveCount(1);
  }
});

test("top navigation funktioniert", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Angebot" }).first().click();
  await expect(page).toHaveURL(/\/angebot$/);

  await page.getByRole("link", { name: "Termin" }).first().click();
  await expect(page).toHaveURL(/\/termin$/);

  await page.getByRole("link", { name: "Kontakt" }).first().click();
  await expect(page).toHaveURL(/\/kontakt$/);

  await page.getByRole("link", { name: "Start" }).first().click();
  await expect(page).toHaveURL(/\/$/);
});

test("footer navigation funktioniert", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Ablauf" }).click();
  await expect(page).toHaveURL(/\/ablauf$/);

  await page.getByRole("link", { name: "Wichtige Infos" }).click();
  await expect(page).toHaveURL(/\/infos$/);

  await page.getByRole("link", { name: "Über Lefita" }).click();
  await expect(page).toHaveURL(/\/ueber-uns$/);

  await page.getByRole("link", { name: "Datenschutz" }).click();
  await expect(page).toHaveURL(/\/datenschutz$/);

  await page.getByRole("link", { name: "Impressum" }).click();
  await expect(page).toHaveURL(/\/impressum$/);
});

test("cta links sind aktiv", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Termin buchen" }).first().click();
  await expect(page).toHaveURL(/\/termin$/);

  await page.goto("/kontakt");
  await expect(page.getByRole("link", { name: "Anrufen" }).first()).toHaveAttribute("href", /^tel:/);
  await expect(page.getByRole("link", { name: "E-Mail" }).first()).toHaveAttribute("href", /^mailto:/);
  await expect(page.getByRole("link", { name: "Route planen" })).toHaveAttribute(
    "href",
    /^https:\/\/www\.google\.com\/maps\/dir\//
  );
});

test("seo basis ist vorhanden", async ({ page }) => {
  for (const route of pages) {
    await page.goto(route);

    const title = await page.title();
    expect(title.trim().length).toBeGreaterThan(1);

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);
    await expect(metaDescription).toHaveAttribute("content", /.+/);
  }
});

test("accessibility basis ist vorhanden", async ({ page }) => {
  await page.goto("/termin");

  await expect(page.getByRole("main")).toHaveCount(1);
  expect(await page.getByRole("navigation").count()).toBeGreaterThanOrEqual(1);

  await expect(page.getByLabel("Service *")).toBeVisible();
  await expect(page.getByLabel("Name Hund *")).toBeVisible();
  await expect(page.getByLabel("E-Mail *")).toBeVisible();
  await expect(page.getByRole("button", { name: "Termin unverbindlich anfragen" })).toBeVisible();
});
