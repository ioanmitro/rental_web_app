app.post('/api/login', passport.authenticate('local'), (req, res)=> {
	res.json({ message: 'Logged in successfully.' });
});

/* 
This endpoint uses the passport.authenticate middleware to verify the user's credentials
and create a session. If the user's credentials are valid, it returns a JSON response with 
a success message.
*/


