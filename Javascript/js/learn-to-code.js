//var name = "Jack";
//var age = 23;
//var shootingScore = 45.6;
//
// var message = "Hi, my name is " + name + " and I am " + age + " years old!";



//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
//var loginWelcomeMessage = "Welcome," + firstName + ". Happy " + age + "rd birthday!" ;
//
// console.log(loginWelcomeMessage);

//var age = 23;
//
//var sum = 10 + 15;
//console.log(sum);


//var myAccountBalance = 300;
//var nikeSBShoes = 779.23;
//var coupon = 500;
//
//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes!");
//    console.log("Account Balance: " + myAccountBalance);
//} else if (nikeSBShoes - coupon <= myAccountBalance) {
//    console.log("We just bought some dope shoes with the coupon!");
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("Account Balance: " + myAccountBalance);
//} else {
//    console.log("You too broke fo shoes bra!");
//}


var students = ["Timmy", "Janessa", "Arun"];

var noughtyList = [];

noughtyList.push(students[0]);


var index = noughtyList.indexOf("Timmy");

console.log(noughtyList);
if(index > -1) {
 noughtyList.splice(index, 1);
}



console.log(noughtyList);







