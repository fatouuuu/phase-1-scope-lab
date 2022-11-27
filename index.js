// Write your solution in this file!
var customerName="bob";

function upperCaseCustomerName(){
    customerName= customerName.toUpperCase()
}

function setBestCustomer(){
    globalThis.bestCustomer="not bob"
}

function overwriteBestCustomer(){
    globalThis.bestCustomer="maybe bob";
} 

const leastFavoriteCustomer="gael"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="bob"
}