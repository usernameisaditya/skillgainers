const connectToMongo = require('../db/conn')
connectToMongo();
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const Router = require('../routes/route')

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(Router)
const viewpath = path.join(`${__dirname}`,'views')
// const staticpath = path.join(`${__dirname}`,'..','public')

// app.use(express.static(staticpath))
app.set('view engine','hbs')
app.set('views',viewpath)

app.listen(PORT,()=>{
    console.log(`listening at http://localhost:${PORT}`)
})