// if 
// if-else 
// if-ifelse-else
// switch 
// for 
// do/while 
// while 

var boxes = document.querySelectorAll(".box");

// console.log(boxes);

// if (condition) {

// }

if (boxes.length > 4) {
    console.log("We have more than 4 boxes");
    
}

if (boxe.length <= 4) {
    console.log("We have less than or equal to 4 boxes");

}

// same as above essentially 
if (boxe.length > 4) {
    console.log("We have more than 4 boxes");
} else {
    console.log("We have less than or equal to 4 boxes");
}

// if (boxes.length > 2) {
//     //
// } else if (boxes.length >4) {
//     //
// } else {

// }

switch (boxes.length) {
    case 1: 
        console.log("we have 1box.");
        break;

    case 2: 
        console.log("we have 2boxes.");
        break;

    default:
        console.log("this is default.");
        break; 
}

// // another way of saying the above would be
// if (boxes.length == 1) {
//         console.log("we have 1box."); 
// } else if (boxes.lenght == 2) { 

// }
