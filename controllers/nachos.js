var nachos = require('../models/nachos'); 
 
// List of all nachoss 
exports.nachos_list =exports.nachos_list = async function(req, res) { 
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

exports.nachos_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Costume(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.flavour = req.body.flavour; 
    document.taste = req.body.taste; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle nachos delete form on DELETE. 
exports.nachos_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: nachos delete DELETE ' + req.params.id); 
}; 
 
// Handle nachos update form on PUT. 
exports.nachos_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: nachos update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.nachos_view_all_Page = async function(req, res) { 
    try{ 
        thenachos = await nachos.find(); 
        res.render('nachos', { title: 'nachos Search Results', results: thenachos }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 