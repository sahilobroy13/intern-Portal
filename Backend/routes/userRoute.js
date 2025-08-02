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

module.exports = router;