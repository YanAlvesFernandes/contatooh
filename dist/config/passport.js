var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: 'ec517e463de45ef6e5a7',
        clientSecret: 'ba7c9a9582295f19e17b5e290f275c58680b3d96',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate({ "login" : profile.username }, { "nome" : profile.username }, function(erro, usuario) {
            if (erro) {
                console.log(erro);
                return done(erro);
            }
            return done(null, usuario);
        });
    }));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec().then(function(usuario) {
            done(null, usuario);
        });
    });
};
