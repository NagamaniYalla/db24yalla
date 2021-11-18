var express = require('express');
const nachos_controlers= require('../controllers/nachos'); 
var router = express.Router();

router.get('/', nachos_controlers.nachos_view_all_Page ); 

/* GET detail nachos page */
router.get('/detail', nachos_controlers.nachos_view_one_Page);

module.exports = router;