// importing and configuring dotenv for accessing env-variables
require('dotenv').config()
// importing express
const express=require('express')
// importing cors
const cors=require('cors')
// importing routes
const router=require('./Routes/routing')
// importing db-connection
require('./DBconnection/dbconn')



// creating express server app
const pFserver=express()



// configuring cors with server app
pFserver.use(cors())
// configuring json Middleware
pFserver.use(express.json())
// consfiguring routing module
pFserver.use(router)

// serving uploaded file
pFserver.use('/upload',express.static('./uploads'))




const PORT=3000
// activating server
pFserver.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
})


pFserver.get('/',(req,res)=>{
    res.status(200).send("<h1>Hello</h1>")
})