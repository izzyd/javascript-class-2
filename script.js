// if 
// if-else 
// if-ifelse-else
// switch 
// for 
// do/while 
// while 



// var boxes = document.querySelectorAll(".box");

// console.log(boxes);

// if (condition) {

// }

// if (boxes.length > 4) {
//     console.log("We have more than 4 boxes");
    
// }

// if (boxe.length <= 4) {
//     console.log("We have less than or equal to 4 boxes");

// }

// // same as above essentially 
// if (boxe.length > 4) {
//     console.log("We have more than 4 boxes");
// } else {
//     console.log("We have less than or equal to 4 boxes");
// }

// if (boxes.length > 2) {
//     //
// } else if (boxes.length >4) {
//     //
// } else {

// }

// switch (boxes.length) {
//     case 1: 
//         console.log("we have 1box.");
//         break;

//     case 2: 
//         console.log("we have 2boxes.");
//         break;

//     default:
//         console.log("this is default.");
//         break; 
// }

// // another way of saying the above would be
// if (boxes.length == 1) {
//         console.log("we have 1box."); 
// } else if (boxes.lenght == 2) { 

// }


// new -> example of a 'string' (or bunch of words in quotes ?)
var name = "Izzy Dec"; 

console.log(name.length); 


// example of 'arrays' work (everything needs to end with a comma!)
var fruits = [
    "orange",
    "durian",
    "banana",
    "cantelope",
    "pinapple", 
    "pomogranate",
];

console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[2].length);



var daysInYear = 365.25;

console.log(daysInYear);


if (fruits[2] == "banana") {
    document.body.style.backgroundColor = "yellow";

}


// for (var i = 0; i < 100; i += 1)
// // same as saying...

// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }


function boxClicked() {
    console.log("box clicked");
}

var boxes = document.querySelectorAll(".box");
console.log(boxes.length);

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", boxClicked);
}