const ps = require('prompt-sync');
const prompt =ps()
let studentName;
let noStudents ;
let studentPhoneNo;
let emailAddress;
let nextofKin;
let locationAddress;
// i. Student Name
// ii. Phone Number
// iii. Email Address
// iv. Next of Kin
// v. Address

noStudents = parseInt(prompt("Enter number of students:"));
console.log(`Number of student is ${noStudents}`)

for(let i=0; i<noStudents; i++){
    // console.log(` ${studentName}`)
    // console.log(` ${studentPhoneNo}`)
    // console.log(`${emailAddress}`);
    // console.log(`${nextofKin}`);
    // console.log(`${locationAddress}`)

    studentName =prompt('Enter Student Name: ');
    studentPhoneNo= parseInt(prompt('Enter Student phone number: '));
    emailAddress = prompt('Enter Student email address: ');
    nextofKin = prompt('Enter Student Next of kin: ');
    locationAddress = prompt('Enter Student location address ');


}

// To print out students name

for (let i=0; i<noStudents; i++){
    console.log(`Student ${i+1}  name is ${studentName}`);
    console.log(`Student ${i+1} phone number is ${studentPhoneNo}`);
    console.log(`Student ${i+1} email address is ${emailAddress}`);
    console.log(`Student ${i+1}  next of kin is ${nextofKin}`);
    console.log(`Student ${i+1}  location address is ${locationAddress}`);

    
}

