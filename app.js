const axios = require('axios')
const express = require('express')
const app = express();
const importedData = require('./data.json')
let port = process.env.PORT || 3300

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/send',(req,res)=>{
    res.send(importedData)
})

app.listen(port,()=>{
    console.log(`This app is running on ${port} port`)
})

const obj = {
  subject: "This is an Example Email to Send",
  heading: "Hi, This is a Test Email",
  description:
    "When you walk through a storm Hold your head up high And don't be afraid of the dark",
  image:
    "https://e0.365dm.com/20/08/768x432/skysports-liverpool-premier-league_5071428.jpg?20200819084933"
};

let htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <body>
        <h1>${obj.heading}</h1>
        <p><b>This text is bold.</b></p>
        <a href="default.asp">
        <img src=${obj.image} alt="HTML tutorial" style="width:200px;height:200px;border:0">
        </a>
        <p>${obj.description}</p>
        </body>
        </html>
`;

const callMethod = () => {
    axios({
    method: "post",
    url: "https://api.sendgrid.com/v3/mail/send",
    headers: {
        Authorization:
            "Bearer <<API KEY REMOVE THE BRACKETS>>"
    },
    data: {
        personalizations: [
            {
                to: [
                    {
                        email: "yarababugari.javeed@iiitg.ac.in",
                        name: "Javeed36"
                    }
                ],
                cc: [
                    {
                        email: "javeedmrfcricket@gmail.com",
                        name:"Javeed91"
                    }
                ],
                bcc: [
                    {
                        email: "javeedyara.bitsian@gmail.com",
                        name: "Javeed45"
                    }
                ],
                subject: `${obj.subject}`
            }
    ],
    from: {
        email: "javeedymd.iiitg@gmail.com",
        name: "Javeed"
    },
    content: [{ type: "text/html", value: htmlTemplate }]
    }
});
};

callMethod();