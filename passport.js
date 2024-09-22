import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import dotenv from "dotenv";
dotenv.config();


passport.serializeUser((user, done) => {
	done(null, user);
})
passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	callbackURL: "hosted URL",
	passReqToCallback: true
},
	function (request, accessToken, refreshToken, profile, done) {
		return done(null, profile);
	}
));