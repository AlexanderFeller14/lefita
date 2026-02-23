import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  timeout: 40_000,
  expect: {
    timeout: 10_000
  },
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: "http://127.0.0.1:3010",
    trace: "on-first-retry"
  },
  webServer: {
    command: "npm run build && npm run start -- --hostname 127.0.0.1 --port 3010",
    url: "http://127.0.0.1:3010",
    reuseExistingServer: false,
    timeout: 240_000
  },
  projects: [
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] }
    },
    {
      name: "tablet",
      use: { ...devices["iPad Pro 11"] }
    },
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
