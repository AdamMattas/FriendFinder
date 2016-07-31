// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var friendArray = [
  {
    name: "Ahmed",
    photo: "afhaque89@gmail.com",
    scores: [ 3, 3, 1, 5, 4, 1, 1, 5, 5, 1 ]
  },
  {
    name: "Ohmed",
    photo: "afhaque89@gmail.com",
    scores: [ 1, 1, 3, 5, 5, 5, 1, 1, 2, 1 ]
  }
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friendArray; 