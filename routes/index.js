var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/',
    function (req, res) {
        res.render('index', {user: req.user});
    });

router.get('/login',
    function (req, res) {
        res.render('login');
    });

router.post('/login',
    passport.authenticate('local', {failureRedirect: '/failure'}),
    function (req, res) {
        res.redirect('/');
    });

router.get('/logout',
    function (req, res) {
        req.logout();
        res.redirect('/');
    });

router.get('/user-profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
        res.render('user-profile', {user: req.user});
    });

router.get('/failure',
    function (req, res) {
        res.render('failure');
    });

module.exports = router;
