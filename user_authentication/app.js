const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
