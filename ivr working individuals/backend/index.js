require('dotenv').config()

const express = require ('express')
const cors = require('cors');
const app= express()

const mongoose= require('mongoose')

const allroutes =require('./routes/allroutes')
const bodyParser = require('body-parser');

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use('/api',allroutes)



app.use(cors());
mongoose.connect(process.env.COMP_URI)
    .then(()=>{
        // console.log(process.env.MONGO_URI)
        app.listen(process.env.PORT, ()=>{
            console.log('hey connected to mongo compass db and listening at port',process.env.PORT)
        });
    })
    .catch((error)=>{
        console.log(error);
    })

