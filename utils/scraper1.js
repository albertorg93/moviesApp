const puppeteer = require("puppeteer");


const scraperByMovie = async (title) => {

    let movieUrl = `https://www.sensacine.com/buscar/?q=${title}`
    
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    await page.goto(movieUrl)
    await page.screenshot({ path: 'amazon1.jpg' })
    // Esto solo para el navegador porque hay cookie
    //await page.waitForSelector("#didomi-notice-agree-button");
    //await page.click("#didomi-notice-agree-button");

    //await page.keyboard.press('Enter')
    //await page.click('.navbar-toggle search-menu btn-ac')
    const links = await page.evaluate(() => {
        const elements = document.querySelectorAll('.rating-holder a')

        let links = [];
        for (let element of elements) {
            links.push(element.href);
        }
        return links;
    })
    console.log("Estos son los enlaces", links);


    const match = links.filter(element => element.includes('criticas-espectadores'));

    // console.log("Resultado de match: ", match);
    // const linkscritica = await page.evaluate(() => {


    //     let linkscritica = [];
    //     for (let element of match) {
    //         linkscritica.push(element);
    //     }
    //     return linkscritica;
    // })
    console.log("Estos son los enlaces", match);
    enlaces = []
    for (let enlace of match) {
        await page.goto(enlace);
        //await page.waitFor(3000)
        const dataend = await page.evaluate(() => {
            const tmp = {}
            tmp.titulo = document.querySelector('a.xXx.titlebar-link').text
            tmp.innerUserOfReview = document.querySelector('div.review-card-aside > div > div > div > a.xXx').text;
            tmp.innerTextOfReview = document.querySelector("div.review-card-review-holder > div.content-txt.review-card-content").textContent
            return tmp
        })
        enlaces.push(dataend)
        
    }
    console.log(enlaces);
    return enlaces;
    //await page.goto(match);
    //await page.waitForSelector('.dropdown-custom-holder');
    await browser.close();
    //await page.screenshot({ path: 'amazon4.jpg' })

}


//Scraperbymovie();
const ScraperTools = {
    scraperByMovie
    
 
  }
   module.exports = ScraperTools

//sacamos el primer comentario de las reviews de usuarios (username + comentario)
    // let texto1 = await page.$eval('a.xXx.titlebar-link', el => el.innerText)
    // let innerUserOfReview = await page.$eval('div.review-card-aside > div > div > div > a.xXx', el => el.innerText)
    // let innerTextOfReview = await page.$eval('div.review-card-review-holder > div.content-txt.review-card-content', el => el.innerText)


    //console.log(texto1);


    //"#content-layout > div.titlebar.titlebar-page > div.titlebar-title.titlebar-title-lg > a").text


    //#content-layout > div.titlebar.titlebar-page > div.titlebar-title.titlebar-title-lg > a
    //console.log(texto1);
    // texto1=[]

    // // let titulo=await page.$eval("content-layout > div > div > a", el=>el-innerText)
    // // console.log(titulo);
    //  await page.evaluate(() => {
    // let texto= document.getElementsByClassName("xXx titlebar-link")[0].text

    //  texto1.push(texto)
    //  })
    //console.log(texto1);
    //  if(innerUserOfReview == "Un visitante"){
    //  innerUserOfReview = "Un visitante de Sensacine"
    //  }

    // console.log("innerTextOfReview: ", innerTextOfReview);
    // console.log("innerUserOfReview: ", innerUserOfReview);
    // console.log("innerUserOfReview: ", texto1);



    //await browser.close();

    //await browser.close();
    //console.log(scrapedata);