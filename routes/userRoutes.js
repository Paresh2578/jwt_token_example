const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/checkAuth.js");

const { getUser, signup, login } = require("../controllers/userController");


router.post("/signup", signup);
router.post("/login", login);
console.log("api call befor check auth")
router.use(checkAuth);
console.log("api call after check auth")



router.get("/getUser", getUser);



module.exports = router;
