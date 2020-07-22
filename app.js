// ==============
//  SETUP
// ==============

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.listen(port, () => {
  console.log(`Yelpcamp is live on port ${port}`);
})

// =============
// ROUTES
// =============

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

app.get('/', (req, res, next) => {
  res.render('landing');
})

app.get('/campgrounds', (req, res, next) => {
  res.render('campgrounds', {campgrounds: campgrounds});
})

app.post('/campgrounds', (req, res, next) => {
  // get data from form and add to campgrounds array
  // redirect back to campgrounds page
  const newCampground = 
  {
    name: req.body.name,
    image: req.body.img
  }

  campgrounds.push(newCampground);
  res.redirect('/campgrounds');
})

app.get('/campgrounds/new', (req, res, next) => {
  //  form
  res.render('new');
})

app.get('*', (req, res, next) => {
  res.send({
    error: 404,
    message: "The page you have requested cannot be found."
  })
})