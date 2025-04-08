const express = require("express");
const cors = require('cors');
const fetch = require('cross-fetch');

const app = express();
app.use(cors());

// Fetch Restaurants API
app.get('/api/restaurants', async (req, res) => {
  try {
    const { page_type, lat, lng } = req.query;
    
    const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=${page_type}`, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!response.ok) throw new Error("Network response was not OK");

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An Error Occurred");
  }
});

// Fetch Menu API
app.get('/api/menu', async (req, res) => {
  try {
    const { 'page-type': page_type, 'complete-menu': complete_menu, lat, lng, restaurantId } = req.query;
    
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=${page_type}&complete-menu=${complete_menu}&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!response.ok) throw new Error("Network response was not OK");

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An Error Occurred");
  }
});

module.exports = app; // Required for Vercel
