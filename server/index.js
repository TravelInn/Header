// require('newrelic');
const React = require('react');
const ReactDOM = require('react-dom');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const db = require("../postgresDB/db.js");

const app = express();

app.use(cors());

app.get("/api/hostels/:id/info", (req, res) => {
    db.getHostel([req.params.id], (err, data) => {
      if (err) console.log('error in GET HostelInfo IN SERVER', err);
      else res.send(data);
    });
  });
  
app.get("/api/locations/hostels/:city", (req, res) => {
    console.log(req.params.city)
    db.getHostelsByLoc([req.params.city], (err, data) => {
    if (err) console.log('error in GET HostelsByLocation IN SERVER', err);
    else res.send(data);
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/hostels", (req, res) => {
  db.addHostel([req.params.hostel_id, req.params.hostel_name, req.params.features, req.params.street_name, req.params.photos, req.params.location_id], (err, data) => {
    if (err) console.log('error in POST Hostels IN SERVER');
    else res.send('Hostel added to the database!');
  });
});

app.post("/api/locations", (req, res) => {
  db.addLocation([req.params.location_id, req.params.city_name, req.params.country_name], (err, res) => {
    if (err) console.log('error in POST Locations IN SERVER');
    else res.send('Location added to the database!');
  });
});

app.put("/api/hostels/:id", (req, res) => {
  db.updateHostelFeatures([req.params.features, req.params.id], (err, res) => {
    if (err) console.log('error in PUT Hostels IN SERVER');
    else res.send('Features updated!');
  });
});

app.delete("/api/hostels/:id", (req, res) => {
  db.deleteHostel([req.params.id], (err, res) => {
    if (err) console.log('error in DELETE Hostels IN SERVER');
    else res.send('Hostel deleted!');
  });
});

app.use(express.static(path.join(__dirname, "../public/")));
app.use("/hostels/:id", express.static(path.join(__dirname, "../public/")));

app.listen(3001, () => console.log('Header listening at 3001'));
