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
exports.nachos_detail =  async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await nachos.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
 
// Handle nachos create on POST. 

exports.nachos_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new nachos(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"nachos_type":"goat", "cost":12, "size":"large"} 
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
exports.nachos_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await nachos.findById( req.params.id)
    // Do updates of properties
    if(req.body.nachos_type)
    toUpdate.flavour = req.body.flavour;
    if(req.body.taste) toUpdate.taste = req.body.taste;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
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
// Handle nachos delete on DELETE.
exports.nachos_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await nachos.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.nachos_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await nachos.findById( req.query.id)
    res.render('nachosdetail',
   { title: 'nachos Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
