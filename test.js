const express = require('express')
let app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const router = express.Router()
app.use(router)

 const fs = require('fs')
 const path = require('path')

router.post('/test/user', (req, res) => {
    let input = req.body
    console.log(input)

    
let filePath = path.join(__dirname + "/shabnam.js")

console.log(filePath)
let result = JSON.stringify(input)
    fs.writeFile(filePath,result, 'Utf-8', (err) => {
        if (err) console.log(err)
        else console.log("sucess")
    })
    res.send('sended')
    
})
let PORT = 3456;

app.listen(PORT, () => {
    console.log(`server is looking for ${PORT}`)
}
)
