require("dotenv").config();
const { Router } = require("express");
const router = Router();


const routeUsers = require("./routeUsers");

router.use("/users", routeUsers);


module.exports = router;
