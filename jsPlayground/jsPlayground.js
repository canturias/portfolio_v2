let firstName = "Toffee";
let age = 19;
let student = false;

console.log("Name:", firstName);
console.log("Age:", age);

if (student = true) {
  console.log("Enrolled:", "Yes");
}
else if (student = false) {
  console.log("Enrolled:", "No");
}

document.getElementById("p1").innerHTML = "Name: " + firstName;
document.getElementById("p2").innerHTML = "Age: " + age;

if (student == true) {
  document.getElementById("p3").innerHTML = "Enrolled: " + "Yes";
}
else if (student == false) {
  document.getElementById("p3").innerHTML = "Enrolled: " + "No";
}

