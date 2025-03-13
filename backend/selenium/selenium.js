import { Builder, By, Key } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

async function runTest() {
  let options = new chrome.Options(); // Crea una configuración para Chrome
  options.setChromeBinaryPath(
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
  );
  options.headless = false; // False, para que se muestre

  // Inicias selenium con new Builder()
  let driver = await new Builder() // Maneja Chrome
    .forBrowser("chrome") // Usamos Chrome
    .setChromeOptions(options) // Opcion, aplica lo que configuramos antes
    .build(); // Construye y abre navegador

  try {
    console.log("Abriendo Wikipedia...");
    // Abre Wikipedia y busca creatividad
    await driver.get("https://www.wikipedia.org/");

    // Realiza la búsqueda que le hemos pedido
    let searchBox = await driver.findElement(By.id("searchInput"));
    await searchBox.sendKeys("Creatividad", Key.RETURN);

    // Espera diez segundos y se cierra
    await driver.sleep(10000);

    // Obtiene el título de la pág
    let title = await driver.getTitle();
  } catch (error) {
  } finally {
    await driver.quit();
  }
}

runTest();

/// Solo puedo ver que funcia con PowerShell
/// Tengo que abrir PowerShell e introdcucir este comando: $env:DEBUG="selenium-webdriver"; node test.js
