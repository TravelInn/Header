const { Client, Pool } = require('pg');

const pool = new Pool({
  host: '54.67.42.192',
  database: 'travelinn-header',
  port: 5432,
  username: 'power_user',
  password: 'travelinn-power',
});

// const client = new Client({
//   host: 'localhost',
//   database: 'travelinn',
//   port: 5432,
// });

pool.connect();
console.log('postgres connected!');

// const hostelQuery = `SELECT hostel_name, features, street_name, photos, hostels.location_id, city_name, country_name FROM hostels FULL OUTER JOIN locations ON hostels.location_id = locations.location_id WHERE hostel_id = $1;`;
const hostelQuery = `SELECT hostel_name, features, street_name, photos, location_id, city_name, country_name FROM hostel_query WHERE hostel_id = $1`;

const getHostel = (hostelId, callback) => {
  pool.query(hostelQuery, hostelId, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
}

const hostelsByLocQuery = `SELECT COUNT(hostel_id) FROM hostels INNER JOIN locations ON hostels.location_id = locations.location_id AND locations.city_name = $1;`;

const getHostelsByLoc = (cityName, callback) => {
  pool.query(hostelsByLocQuery, cityName, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
}

const addHostelQuery = `INSERT INTO hostels (hostel_id, hostel_name, features, street_name, photos, location_id) VALUES ($1, $2, $3, $4, $5, $6);`;

const addHostel = (newHostel, callback) => {
  pool.query(addHostelQuery, newHostel, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
}

const addLocationQuery = `INSERT INTO locations (location_id, city_name, country_name) VALUES ($1, $2, $3);`;

const addLocation = (newLocation, callback) => {
  pool.query(addLocationQuery, newLocation, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
}

const updateFeaturesQuery = `UPDATE hostels SET (features) = ($1) WHERE hostel_id = $2;`;

const updateHostelFeatures = (updateFeaturesQuery, callback) => {
  pool.query(updateFeaturesQuery, newFeatures, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
}

const deleteHostelQuery = `DELETE FROM hostels * WHERE hostel_id = $1;`;

const deleteHostel = (deleteHostelQuery, callback) => {
  pool.query(deleteHostelQuery, hostelId, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
}

module.exports = {
  getHostel,
  getHostelsByLoc,
  addHostel,
  addLocation,
  updateHostelFeatures,
  deleteHostel,
}
