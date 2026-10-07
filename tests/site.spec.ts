import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { sitePages } from "../src/data/pages";

for (const route of sitePages) {
  test(`${route.label} loads its own content and passes accessibility checks`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(route.path);
    await expect(page).toHaveTitle(route.title);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("body")).not.toContainText("Byte Builders");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("learning filters and details preserve keyboard focus", async ({
  page,
}) => {
  await page.goto("/learn/");
  await page.getByRole("button", { name: "Development", exact: true }).click();
  await expect(page.locator(".learning-path-card")).toHaveCount(1);
  const track = page.getByRole("button", {
    name: "Explore Web & software development",
  });
  await track.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText(
    "not a currently scheduled course",
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(track).toBeFocused();
  await page.getByRole("button", { name: "Automation", exact: true }).click();
  await expect(page.locator(".learning-path-card")).toHaveCount(1);
  await expect(page.locator(".learning-path-card")).toContainText(
    "Automation & integrations",
  );
  await page.getByRole("button", { name: "All topics", exact: true }).click();
  await expect(page.locator(".learning-path-card")).toHaveCount(6);
});

test("internship application prepares the right WhatsApp CV introduction", async ({
  page,
}) => {
  await page.goto("/internships/");
  const application = page
    .getByRole("link", { name: "Send your CV on WhatsApp" })
    .first();
  const url = new URL((await application.getAttribute("href"))!);
  expect(url.origin + url.pathname).toBe("https://wa.me/923169390445");
  expect(url.searchParams.get("text")).toContain(
    "free, skill-based internship",
  );
  expect(url.searchParams.get("text")).toContain("CV");
  await expect(application).toHaveAttribute("target", "_blank");
  await page
    .getByRole("button", { name: "Is the internship really free?" })
    .click();
  await page
    .getByRole("button", { name: "Is the internship really free?" })
    .click();
  await expect(
    page.getByRole("region", { name: "Is the internship really free?" }),
  ).toContainText("do not charge");
  await page
    .getByRole("button", { name: "Will I earn money or receive a salary?" })
    .click();
  await expect(
    page.getByRole("region", {
      name: "Will I earn money or receive a salary?",
    }),
  ).toContainText("not a promised salary");
});

test("service enquiries carry their subject into the client contact form", async ({
  page,
}) => {
  await page.goto("/services/");
  await page
    .locator("#ai-agents")
    .getByRole("link", { name: "Let’s explore a solution" })
    .click();
  await expect(page).toHaveURL(/\/contact\/\?audience=client/);
  await expect(
    page.getByRole("button", { name: "I want to build" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator('select[name="interest"]')).toHaveValue(
    "AI solutions & agents",
  );
});

test("validated contact form prepares a draft and offers a reusable fallback", async ({
  page,
}) => {
  await page.addInitScript(() => {
    (window as unknown as { capturedUrl: string }).capturedUrl = "";
    window.open = ((url: string | URL) => {
      (window as unknown as { capturedUrl: string }).capturedUrl = String(url);
      return null;
    }) as typeof window.open;
  });
  await page.goto("/contact/");
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
    .fill("I would like to explore automation and AI.");
  await page.getByRole("radio", { name: "WhatsApp" }).check();
  await page.getByRole("button", { name: "Start a conversation" }).click();
  const value = await page.evaluate(
    () => (window as unknown as { capturedUrl: string }).capturedUrl,
  );
  const url = new URL(value);
  expect(url.origin + url.pathname).toBe("https://wa.me/923169390445");
  expect(url.searchParams.get("text")).toContain("Test Visitor");
  expect(url.searchParams.get("text")).toContain("Free online internships");
  await expect(page.locator(".form-status")).toContainText(
    "Review it and press send there",
  );
  await expect(
    page.getByRole("link", { name: "Open WhatsApp draft" }),
  ).toHaveAttribute("href", value);
  await page
    .getByLabel("Tell us a little about your interests")
    .fill("A revised enquiry");
  await expect(
    page.getByRole("link", { name: "Open WhatsApp draft" }),
  ).toHaveCount(0);
});

test("header navigation opens complete pages on the current viewport", async ({
  page,
}, info) => {
  await page.goto("/");
  if (info.project.name === "mobile") {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Community", exact: true })
      .click();
  } else {
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Community", exact: true })
      .click();
  }
  await expect(page).toHaveURL(/\/community\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Everyone can teach.",
  );
  await page.getByRole("link", { name: "NorthStar Labs home" }).first().click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Guiding talent.",
  );
});

test("privacy dialog retains focus and explains external drafts", async ({
  page,
}) => {
  await page.goto("/");
  const privacy = page.getByRole("button", { name: "Privacy", exact: true });
  await privacy.click();
  await expect(page.getByRole("dialog")).toContainText(
    "Nothing is sent to NorthStar Labs automatically",
  );
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(privacy).toBeFocused();
});

test("deep pages and contact details work without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const path of ["/internships/", "/community/", "/learn/"]) {
    await page.goto(`${baseURL}${path}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "email us", exact: true }),
    ).toBeVisible();
  }
  await page.goto(`${baseURL}/contact/`);
  await expect(page.locator(".contact-form")).toBeHidden();
  await expect(
    page.getByRole("link", { name: "email us", exact: true }),
  ).toBeVisible();
  await context.close();
});
