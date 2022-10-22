let express = require('express');
let router = express.Router();
const mainController = require('../controller/mainController');



// Obtenemos main 
router.get('/', mainController.main);


module.exports = router;