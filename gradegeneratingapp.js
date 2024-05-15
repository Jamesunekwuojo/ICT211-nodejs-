// 0- 39 F
// 40 - 44 E
// 45 - 49 D
// 50 -59 C
//60 -69 B
// 70 -100 A

var score = 89;
if(score<=39){
    console.log("Student grade is  F");
} else if(score<=44){
    console.log("Student grade is  E");

} else if(score<=49){
    console.log("Student grade is  D");
} else if(score<=59){
    console.log("Student grade is  C");
} else if(score<=69){
    console.log("Student grade is  B");
} else if(score<=100){
    console.log("Student grade is  A");
} else{
    console.log("Invalid score grade range is between 0 - 100");
}
// Write a simple program to mimick ATM machine such that the program always request for a pin if matches the dashboard should be dislayed in the following order

// 1- for transfer
// 2 - top up/ purchase airtime
// 3 - for acc balance
// 4- for subscription
// 5 - for withdraw
