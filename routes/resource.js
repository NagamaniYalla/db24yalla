var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var nachos_controller = require('../controllers/nachos'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// nachos ROUTES /// 
 
// POST request for creating a nachos.  
router.post('/nachos', nachos_controller.nachos_create_post); 
 
// DELETE request to delete nachos. 
router.delete('/nachos/:id', nachos_controller.nachos_delete); 
 
// PUT request to update nachos. 
router.put('/nachos/:id',nachos_controller.nachos_update_put); 
 
// GET request for one nachos. 
router.get('/nachos/:id', nachos_controller.nachos_detail); 
 
// GET request for list of all nachos items. 
router.get('/nachos', nachos_controller.nachos_list); 
 
module.exports = router; 