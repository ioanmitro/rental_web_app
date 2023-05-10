// Require authentication for all routes below this middleware
app.use('/api', passport.authenticate('jwt', { session: false }));

// Endpoint for saving a favorite apartment listing
app.post('/api/favorites', (req, res) => {
  const { apartmentId } = req.body;
  const userId = req.user.id;

  // Check if the user has already saved the listing
  User.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error.' });
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (user.favorites.includes(apartmentId)) {
      return res.status(400).json({ message: 'Apartment already saved.' });
    }

    // Save the apartment to the user's favorites
    user.favorites.push(apartmentId);
    user.save((err) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error.' });
      }
      res.json({ message: 'Apartment saved successfully.' });
    });
  });
});

/*
we first use the passport.authenticate middleware with the 'jwt' strategy
to ensure that the user is authenticated and has a valid JWT token. This middleware 
will be applied to all the routes below it.
Then, in the post route for saving a favorite apartment listing, we use the req.user
object provided by Passport.js to get the authenticated user's ID. We can then use this ID
to look up the user in our database and check if they have already saved the apartment. If they
have, we return a 400 status code indicating that the apartment is already saved. If not, we add
the apartment to the user's list of favorites and save the user to the database.
By using middleware to require authentication and checking the user's credentials in each endpoint 
that requires authorization, we can ensure that only authenticated and authorized users can access
those resources.
*/