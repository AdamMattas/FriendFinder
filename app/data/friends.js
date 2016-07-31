// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var friendArray = [
  {
    name: "Ahmed",
    photo: "http://cdn.techgyd.com/funny-profile-face-optical-illusion.jpg",
    scores: [ 1, 1, 1, 1, 1, 1, 1, 1, 5, 5 ]
  },
  {
    name: "Tron",
    photo: "http://vignette4.wikia.nocookie.net/tron/images/0/0a/Tron_Uprising_Ep19_Tron02.5.png/revision/latest?cb=20130128210017",
    scores: [ 3, 3, 3, 3, 3, 3, 3, 3, 5, 5 ]
  },
  {
    name: "Ohmed",
    photo: "http://3.bp.blogspot.com/-t1FSTujdXaY/UXVgmLDfnnI/AAAAAAAAHGo/O2_H-FxvBG8/s1600/923392_445950122152861_1377614217_n.jpg",
    scores: [ 5, 5, 5, 5, 5, 5, 5, 5, 1, 1 ]
  }
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friendArray; 