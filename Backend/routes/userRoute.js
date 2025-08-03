const express = require("express");
const router = express.Router();
const { users } = require('../data/userData');
const { leaderboard } = require('../data/userData');

router.get("/", (req, res) =>{
    res.redirect("/signup");
});
router.get("/signup",(req,res)=>{
    res.render("signup");
})
router.get("/login", (req, res) => res.render("login"));

router.get('/dashboard', (req, res) => {
    const username = req.query.user;

    if (!username) {
        return res.redirect('/login');
    }

    
    const user = {
        name: username,
        referralCode: username.toLowerCase() + "2025",
        donationsRaised: Math.floor(Math.random() * 10000) + 1000 
    };

    res.render('dashboard', { user });
});


router.get("/leaderboard", (req, res) => res.render("leaderboard", { users: leaderboard }));

module.exports = router;