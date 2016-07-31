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
    res.json(friendData);
  });

  app.post('/api/friends', function(req, res){

    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table 
    //if(friendData.length < 5 ){
      var tempArray = [];
      console.log(req.body);
      for(var i = 0; i < req.body.scores.length; i++){
               
        tempArray.push(parseInt(req.body.scores[i]));

      }

      req.body.scores = tempArray;
      //friendData.push(req.body); uncomment and possibly move once working
      var match;
      for(var i = 0; i < friendData.length; i++){
        console.log(friendData[i].scores);

        //var array1 = [1,2,3,4];
        var checkArray = friendData[i].scores;

        var sum = tempArray.map(function (num, idx) {
          return Math.abs(num - checkArray[idx]);
        }); // [6,8,10,12]
        console.log(friendData[i].name);
        console.log(sum);
        // var arr = friendData[i].scores;

        // var result=[];
        // for (var i=0,l=arr.length;i<l;i++) result.push(+arr[i]); // or parseInt(arr[i]) or Number(arr[i])
        // // result[3] // 71
        // // typeof(result[3]) // "number"

        var absoluteSum = sum.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }

        console.log(absoluteSum); // 6

      }
      res.json(true); // KEY LINE
    //}

    // Or false if they don't have a table
    //else{
     // waitListData.push(req.body);
      //res.json(false); // KEY LINE
    //}

  });

}