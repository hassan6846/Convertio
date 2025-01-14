require('dotenv').config()
const express = require("express")
const app = express()
//cors
const cors = require("cors")
const helmet = require('helmet')



// middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true

}))
app.use(helmet()) 
app.disable('x-powered-by')
//404
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})
//Eror Handler..
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});


module.exports = app


