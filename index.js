var studentName ;
let studentAge ;
let studentGrade ;
let studentAttendance;

studentName = "Carol";
studentAge = "16";
studentGrade = "85%"
studentAttendance = "Absent"


console.log("Student Name: " + studentName);
console.log("Age: " + studentAge);
console.log("Grade: " + studentGrade);
console.log("Attendance: " + studentAttendance);


// ------------------------------------------------------------------------------

/// EXPLORING JAVASCRIPT OPERATORS
// --------------------------------------------------------------------------------

let a;
let b;

a = -320;
b = 80;

console.log("Sum:" , (a+b))
console.log("Subtracted:", (a-b))
console.log("Multiplied:", (a*b))
console.log("Divided:", (a/b))

a += 5;
b += 10;

console.log("Updated num1:", a)
console.log("Updated num2:", b)

console.log("Is number one equal to number two?", (a==b))
console.log("Is number one greater than number two?", (a>b))
console.log("Is number one not equal to number two?", (a!==b))

let isPositive = (a > 0 && b > 0);
let isEven = (a % 2== 0 || b % 2 === 0);

console.log("Are both numbers positive?", isPositive)
console.log("Is at least one number even?", isEven)