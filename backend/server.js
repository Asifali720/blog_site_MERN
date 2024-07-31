const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000


app.get('/', (req, res)=> res.send("hello world"))
app.post('/ ', (req, res)=> res.send(`hello ${req.body.name} jani`))


app.listen(PORT, ()=> console.log(`server is started on port ${PORT}`))
