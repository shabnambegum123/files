const express = require('express')
let app = express()
const router = require('./routes/routes')
app.use(express.json())
app.use(router)
let PORT = 3456
app.listen(PORT, () => {
    console.log(`server is looking for ${PORT}`)
})
