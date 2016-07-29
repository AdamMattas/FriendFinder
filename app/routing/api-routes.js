// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var friendData = require('../data/friends.js');
var path = require('path');
//console.log(friendData);
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

  // HTML GET Requests
  // Below code handles when users "visit" a page. 
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get('/api/friends', function(req, res){
    console.log("working!!!");
    // res.sendFile(path.join(__dirname + '/../data/friends.js'));
    res.json(friendData);
  });

  app.post('/api/friends', function(req, res){

    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table 
    //if(friendData.length < 5 ){
      friendData.push(req.body);
      res.json(true); // KEY LINE
    //}

    // Or false if they don't have a table
    //else{
     // waitListData.push(req.body);
      //res.json(false); // KEY LINE
    //}

  });

}