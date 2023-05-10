const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Define API endpoints here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


/*
This sets up an Express.js app that listens on port 3000 and uses the cors() middleware to allow cross-origin requests,
and the body-parser middleware to parse incoming JSON data.
*/

// define the API endpoints by adding routes to the Express.js app. We can add a route to handle 
// GET requests to '/apartments'
app.get('/apartments', (req, res) => {
  // retrieve data from a database or some other data source and send the data back to the client
  // as a JSON response 
    const apartmentListings = [
    { id: 1, title: 'Spacious Apartment in the centre of Thessaloniki', price: 1000 },
    { id: 2, title: 'Luxury Apartment in the centre of Thessaloniki', price: 500 },
  ];

  // Send the data back to the client as a JSON response
  res.json(apartmentListings);
})

// Handle POST requests to add new data, PUT requests to update existing data, and DELETE requests to delete data.
app.post('/apartments', (req, res) => {
  // Get the data for the new apartment listing from the request body
  const newApartmentListing = req.body;

  // Save the new apartment listing to the database or some other data source
  // ...

  // Send a response to the client to confirm that the new listing was added successfully
  res.status(201).json({ message: 'Apartment listing added successfully' });
});