const puppeteer = require("puppeteer");
const scraperByMovie = async (title) => {
    console.log("hola",title)
    let movieUrl = `https://www.sensacine.com/buscar/?q=${title}`
    let browser = await puppeteer.launch({ headless: true, args : [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]});
    let page = await browser.newPage();
   


    await page.goto(movieUrl)
    // Esto solo para el navegador porque hay cookie, cuando estas en handless true no es necesario.
    //await page.waitForSelector("#didomi-notice-agree-button");
    //await page.click("#didomi-notice-agree-button");
    const links = await page.evaluate(() => {
        const elements = document.querySelectorAll('.rating-holder a')
        let links = [];
        for (let element of elements) {
            links.push(element.href);
        }
        return links;
    })

    const match = links.filter(element => element.includes('criticas-espectadores'));
    enlaces = [],
    busqueda=[]
    for (let enlace of match) {
        await page.goto(enlace);
        //await page.waitFor(3000)
        const dataend = await page.evaluate(() => {
            const tmp = {}
            tmp.titulo = document.querySelector('a.xXx.titlebar-link').text
            tmp.innerUserOfReview = document.querySelectorAll("div.review-card-aside > div > div > div > a")[0].text
            tmp.innerUserOfReview2=document.querySelectorAll("div.review-card-aside > div > div > div > a")[1].text
            tmp.innerTextOfReview = document.querySelectorAll("div.review-card-review-holder > div.content-txt.review-card-content")[0].textContent
            tmp.innerTextOfReview2 = document.querySelectorAll("div.review-card-review-holder > div.content-txt.review-card-content")[1].textContent
            return tmp
        })
        busqueda.push(dataend)
        for (let index = 0; index < busqueda.length; index++) {
            if (busqueda[index].title=title){
                console.log("hola roberto",title);
                enlaces.push(busqueda[index])
            }
       console.log("estos son los enlances",enlaces);
    }
    return enlaces;
    await browser.close();
}
}
//Scraperbymovie();
const ScraperTools = {
    scraperByMovie
  }
   module.exports = ScraperTools