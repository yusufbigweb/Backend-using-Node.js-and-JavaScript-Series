require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.get('/', (req, res) => {
  res.send('Successful deploy! ==> 💻➡️☁️✔️')
})

app.get('/yusuf', (req, res)=>{
    res.send('<h1>yusuf</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

