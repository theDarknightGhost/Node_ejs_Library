require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express() 
const router = require('./routes/myRoots')
const cors = require('cors')
const helmet = require('helmet')
const Connect = require('./db/Connect')
const bodyparser = require('body-parser')
const authorsRouter = require('./routes/authors')
app.use(cors())
app.use(helmet())
app.use(express.json())
app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout' ,'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyparser.urlencoded({urlencoded:true}))

app.use('/',router)
app.use('/authors',authorsRouter)

const port = process.env.PORT || 3000
const start=()=>{
    
    try {
        Connect.connectDb(process.env.dbURL)
        app.listen(port , ()=>{
            console.log('the server is running on port 3000 and connected to db')
        })        
    } catch (error) {
        console.log(error)
    }
}

start()
