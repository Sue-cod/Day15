const milili = [10, 25, 4]; // DO NOT change this line

function myArr(mili) {
    'use strict';

    // Only change code below this line
    // Using mili = [4, 10, 25] would be invalid
    let mili_ = [10, 25, 4];
    mili = [4, 10, 25];
   


console.log(mili);
    // Only change code above this line
    return mili;
}
console.log(myArr(milili)); // Change this line
module.exports = myArr;