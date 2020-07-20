// ==============
//  SETUP
// ==============

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.listen(port, () => {
  console.log(`Yelpcamp is live on port ${port}`);
})

// =============
// ROUTES
// =============

app.get('/', (req, res, next) => {
  res.render('landing');
})

app.get('/campgrounds', (req, res, next) => {
  const campgrounds = [
    {
      name: "Camp Talusi",
      image: "http://via.placeholder.com/300"
    },
    {
      name: "Backpackers Island",
      image: "http://via.placeholder.com/300"
    },
    {
      name: "Camp Tent",
      image: "http://via.placeholder.com/300"
    },
    {
      name: "Camp Aninipot",
      image: "http://via.placeholder.com/300"
    },
    {
      name: "Ginto Island Camping",
      image: "http://via.placeholder.com/300"
    },
  ]
  res.render('campgrounds', {campgrounds: campgrounds});
})

app.get('*', (req, res, next) => {
  res.send({
    error: 404,
    message: "The page you have requested cannot be found."
  })
})