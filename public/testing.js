const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
(async function login() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:3000/login');
    await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[1]/input')).sendKeys('fiacregiraneza@gmail.com');
    await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[2]/input')).sendKeys('jumongo1@');
    await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[3]/button')).click();
    await driver.sleep(8000)
    await driver.findElement(By.xpath('/html/body/div/div/div[2]/div[2]/div[1]/div[2]/a')).click();
    await driver.sleep(3000)
    await driver.findElement(By.xpath('/html/body/div/div/div/div[3]/div[2]/div/div/div[2]/div/table/tbody/tr/td[3]/form/select')).click();
    await driver.findElement(By.xpath('/html/body/div/div/div/div[3]/div[2]/div/div/div[2]/div/table/tbody/tr/td[3]/form/select/option[3]')).click();
    await driver.sleep(3000)
    await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[1]/select/option[5]')).click();
    await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[2]/select')).click();
    await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[2]/select/option[3]')).click();
    await driver.findElement(By.xpath('/html/body/div/div/div/div[2]/form/div[3]/button')).click();
    
    await driver.sleep(8000)
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();