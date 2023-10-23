const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw button gives bot choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click()
    const isChoices = await driver.findElement(By.id('choices')).isDisplayed()
    expect(isChoices).toBe(true)
  });

  test("add to duo displays correct div", async () => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const divIs = await driver.findElement(By.id('player-duo')).isDisplayed()
    expect(divIs).toBe(true)
  })
});