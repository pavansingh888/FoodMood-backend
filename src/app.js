const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fetch = require('cross-fetch');
const {FETCH_RES_URL} = require('./utils/constants')

const app=express();
const port=3000;

app.use(cors(
    {
        origin: "http://localhost:5173", 
        credentials: true, 
      }
))


app.get('/api/restaurants',(req,res)=>{
   res.send('Access Successfull')
})

app.listen(port,()=>console.log(`FoodMood backend listening at port ${port}...`));