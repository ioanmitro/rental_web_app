const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;

// Definition of routes for logging in and logging out using passport.authenticate middleware
