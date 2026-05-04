const express = require('express')
require('dotenv').config()
const app = express() //now app is the very powerful variable
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send("hashimojitotetratsu")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at the chai and code dot com </h1>')
})
app.get('/twitter1',(req,res)=>{
    res.send('<h2>You can view the twitter at the twitter.com</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

//both capital and small 