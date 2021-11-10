// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
    customerName ="BOB";
    //return customerName;
}

//notice that there is no return statement
  //if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable!

//console.log(upperCaseCustomerName()); npm test breaks if this line is ran.


function setBestCustomer() {
    bestCustomer = 'not bob'
}

//console.log(setBestCustomer()) -> undefined

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

//console.log(overwriteBestCustomer()) // -> undefined


const leastFavoriteCustomer = 'jafar'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'aladdin';
}

//console.log(changeLeastFavoriteCustomer()); -> "TypeError: Assignment to constant variable"
