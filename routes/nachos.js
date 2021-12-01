// var express = require('express');
// const nachos_controlers= require('../controllers/nachos'); 
// var router = express.Router();

// router.get('/', nachos_controlers.nachos_view_all_Page ); 

// /* GET detail nachos page */
// router.get('/detail', nachos_controlers.nachos_view_one_Page);

// /* GET create nachos page */
// router.get('/create', nachos_controlers.nachos_create_Page);

// /* GET create update page */
// router.get('/update', nachos_controlers.nachos_update_Page);

// /* GET create nachos page */
// router.get('/delete', nachos_controlers.nachos_delete_Page);

// module.exports = router;
var express = require('express');
const nachos_controlers= require('../controllers/nachos');
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/', nachos_controlers.nachos_view_all_Page );
/* GET detail nachos page */
router.get('/detail', nachos_controlers.nachos_view_one_Page);
/* GET create nachos page */
router.get('/create',secured, nachos_controlers.nachos_create_Page);
/* GET create update page */
router.get('/update', secured,nachos_controlers.nachos_update_Page);
/* GET create nachos page */
router.get('/delete', secured,nachos_controlers.nachos_delete_Page);
module.exports = router;