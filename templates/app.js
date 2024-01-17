const puppeteer = require('puppeteer')
const express = require('express')

const app = express();

    app.post('/',(req,res)=>{
        var temp = req.body.uu; 
        // console.log(temp)
        // var npath = "amazing.png"
        // const screenshot = takeScreenshot(temp,npath);
        (async()=> {
            const browser = await puppeteer.launch({headless:'new'});
            const page = await browser.newPage();
            await page.goto(temp);
        
            page.setViewport({ width: 300, height: 2000 })
            await page.pdf({path: `screenshot${Date.now()}.pdf`, fullPage: true})
        
            await browser.close();
        })();
        
    })


app.listen(4000,()=>{
    console.log("server running");
})
