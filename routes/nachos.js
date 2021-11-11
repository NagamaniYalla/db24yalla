var express = require('express');
const nachos_controlers= require('../controllers/nachos'); 
var router = express.Router();

router.get('/', nachos_controlers.nachos_view_all_Page ); 
module.exports = router;