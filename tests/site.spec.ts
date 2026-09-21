import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("renders the production page without client errors or horizontal overflow", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  await expect(page).toHaveTitle(/NorthStar Labs/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Guiding talent.",
  );
  await expect(page.locator(".orbit-logo img")).toBeVisible();
  await expect(page.locator(".orbit-logo img")).toHaveJSProperty(
    "naturalWidth",
    512,
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBeTruthy();
  expect(errors).toEqual([]);
});

test("filters learning directions and opens accessible details with restored focus", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Development", exact: true }).click();
  await expect(page.locator("button.track-card")).toHaveCount(1);
  const track = page.getByRole("button", {
    name: /Web & software development/,
  });
  await track.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("not a currently scheduled course");
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(track).toBeFocused();
  await page.getByRole("button", { name: "All topics", exact: true }).click();
  await expect(page.locator("button.track-card")).toHaveCount(5);
});

test("service and student actions select the relevant enquiry form", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .locator(".services-grid")
    .getByRole("button", { name: /AI & agents/ })
    .click();
  await page.getByRole("link", { name: "Discuss your project" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "I want to build" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("link", { name: "Ask about internships" }).click();
  await expect(
    page.getByRole("button", { name: "I want to learn" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator('select[name="interest"] option')).toContainText([
    "Select a starting point",
    "Free online courses",
    "Free online internships",
  ]);
});

test("validates enquiries and hands a correctly addressed draft to WhatsApp", async ({
  page,
}) => {
  await page.addInitScript(() => {
    (window as unknown as { capturedUrl: string }).capturedUrl = "";
    window.open = ((url: string | URL) => {
      (window as unknown as { capturedUrl: string }).capturedUrl = String(url);
      return null;
    }) as typeof window.open;
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Start a conversation" }).click();
  expect(
    await page
      .locator("form")
      .evaluate((form) => (form as HTMLFormElement).checkValidity()),
  ).toBeFalsy();
  await page.getByLabel("Your name").fill("Test Visitor");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("test@example.com");
  await page
    .locator('select[name="interest"]')
    .selectOption("Free online internships");
  await page
    .getByLabel("Tell us a little about your interests")
    .fill("I would like to explore Python & AI.");
  await page.getByRole("radio", { name: "WhatsApp" }).check();
  await page.getByRole("button", { name: "Start a conversation" }).click();
  const value = await page.evaluate(
    () => (window as unknown as { capturedUrl: string }).capturedUrl,
  );
  const url = new URL(value);
  expect(url.origin + url.pathname).toBe("https://wa.me/923169390445");
  expect(url.searchParams.get("text")).toContain("Test Visitor");
  expect(url.searchParams.get("text")).toContain("Free online internships");
  expect(url.searchParams.get("text")).toContain("Python & AI.");
  await expect(page.locator(".form-status")).toContainText(
    "Review it and press send there",
  );
  await expect(
    page.locator('.contact-method a[href^="mailto:"]'),
  ).toHaveAttribute("href", "mailto:northstarlabsai@gmail.com");
});

test("FAQ and privacy dialog expose accurate accessible information", async ({
  page,
}) => {
  await page.goto("/");
  const question = page.getByRole("button", {
    name: "Are courses and internships open now?",
  });
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("region", { name: "Are courses and internships open now?" }),
  ).toContainText("rather than a live course catalog");
  await page.getByRole("button", { name: "Privacy", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText(
    "Nothing is sent to NorthStar Labs automatically",
  );
  await page.getByRole("button", { name: "Close details" }).click();
  await expect(
    page.getByRole("button", { name: "Privacy", exact: true }),
  ).toBeFocused();
});

test("navigation supports the current viewport", async ({ page }, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open navigation" }).click();
    const nav = page.getByRole("navigation", { name: "Mobile navigation" });
    await expect(nav).toBeVisible();
    await nav.getByRole("link", { name: "About us" }).click();
    await expect(nav).toHaveCount(0);
  } else {
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "About us" })
      .click();
  }
  await expect(page).toHaveURL(/#about$/);
});

test("page and detail dialog pass automated WCAG A and AA checks", async ({
  page,
}) => {
  await page.goto("/");
  const pageResult = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(pageResult.violations).toEqual([]);
  await page.getByRole("button", { name: /Python & AI foundations/ }).click();
  const dialogResult = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(dialogResult.violations).toEqual([]);
});

test("built HTML includes useful content and direct contact without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Guiding talent.",
  );
  await expect(
    page.getByRole("link", { name: "email us", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".contact-form")).toBeHidden();
  await context.close();
});
