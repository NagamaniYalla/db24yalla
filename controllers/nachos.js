var nachos = require('../models/nachos'); 
 
// List of all nachoss 
exports.nachos_list =exports.costume_list = async function(req, res) { 
    try{ 
        thenachos = await nachos.find(); 
        res.send(thenachos); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific nachos. 
exports.nachos_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: nachos detail: ' + req.params.id); 
}; 
 
// Handle nachos create on POST. 
exports.nachos_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: nachos create POST'); 
}; 
 
// Handle nachos delete form on DELETE. 
exports.nachos_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: nachos delete DELETE ' + req.params.id); 
}; 
 
// Handle nachos update form on PUT. 
exports.nachos_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: nachos update PUT' + req.params.id); 
}; 