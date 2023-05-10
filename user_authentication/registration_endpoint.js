/*
Creation of a new 'User' object using the provided email and password, and save to the database
If the email already exists, it returns a 409 status code. If there is an internal server error,
it returns a 500 status code. Otherwise it returns a JSON repsonse with a success message.
*/

const User = require('./models/user');

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = new User({ email, password });

  user.save((err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).json({ message: 'Email already exists.' });
      }
      return res.status(500).json({ message: 'Internal server error.' });
    }

    res.json({ message: 'User created successfully.' });
  });
});
