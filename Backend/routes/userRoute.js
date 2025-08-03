const express = require("express");
const router = express.Router();
const userData = require("../data/userData");

router.get("/", (req, res) =>{
    res.redirect("/signup");
});
router.get("/signup",(req,res)=>{
    res.render("signup");
})
router.get("/login", (req, res) => res.render("login"));

router.get("/dashboard", (req, res) => {
    const user = req.body
    res.render("dashboard", { user: userData.user })
});

router.get("/leaderboard", (req, res) => res.render("leaderboard", { users: userData.leaderboard }));

module.exports = router;