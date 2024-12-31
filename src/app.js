const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fetch = require('cross-fetch');

const app=express();
const port = process.env.PORT || 3000;

app.use(cors());

// Fetch Restaurants API
app.get('/api/restaurants', async (req,res)=>{

  const {page_type,lat,lng} = req.query;
  // console.log(page_type,lat,lng);

    fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=${page_type}` , {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
    })
    .then((response)=>{
      if(!response.ok){
        throw new Error("Network reponse was not Ok");
      }
      return response.json();
    })
    .then((data)=>{
      //  console.log(data);
       res.json(data);
       
    })
    .catch((error)=>{
     console.log(error);
     res.status(500).send("An Error Occured");
    })
})


// Fetch Restaurants API
app.get('/api/menu', async (req,res)=>{

  const {'page-type':page_type,'complete-menu':complete_menu,lat,lng,restaurantId} = req.query;
  // console.log(page_type,lat,lng);
    
    fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=${page_type}&complete-menu=${complete_menu}&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}` , {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
    })
    .then((response)=>{
      if(!response.ok){
        throw new Error("Network reponse was not Ok");
      }
      return response.json();
    })
    .then((data)=>{
      //  console.log(data);
       res.json(data);
       
    })
    .catch((error)=>{
     console.log(error);
     res.status(500).send("An Error Occured");
    })
})

app.listen(port,()=>console.log(`FoodMood backend listening at port ${port}...`));