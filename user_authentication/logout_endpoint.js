app.get('/api/logout', (req, res) => {
	req.logout();
	res.json({ message: 'Logged out successfully.' });
});

// req.logout provided from Passport.js is used to destroy user's session and return a JSON response with 
// a success message
