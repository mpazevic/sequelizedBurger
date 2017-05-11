const router = require('express').Router();
const burgerController = require('../controllers/burgers_controller');
const db = require("../models");

//Create routes, and use imported controller to manage them
router.get('/index', burgerController.selectAllBurgers);
router.post('/index', burgerController.postBurger);
router.put('/index', burgerController.updateBurger);

//Route to the server for use
module.exports = router;
