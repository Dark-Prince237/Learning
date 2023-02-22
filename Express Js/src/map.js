const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


function initMap() {
    
    var bangalore = {
      lat: -25.344,
      lng: 131.036
    };
   
    var map = new google.maps.Map(
      document.geusertElementById('map'), {
        zoom: 4,
        center: bangalore
      });
   
    var marker = new google.maps.Marker({
      position: bangalore,
      map: map
    });
  }

app.get('/', function (req, res) {
  res.render('map');
})

app.post('/', function (req, res) {
    res.render('map');
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})