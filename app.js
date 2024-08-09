//CREATE- ESTABLISH FUNCTION 
function funcOne(){
    console.log("Hello World!");
}; //END funcOne

funcOne();

let numOne = 7;
let numTwo = 3;

function addTwoNums(){
    console.log(numOne)+(numTwo);
};//END FUNCTION addTwoNums

addTwoNums();

//THIS FUNCTION ACCEPTS TWO ARGUMENTS
function addTwoNumsV2(a,b){
console.log(a+b)
};//END addTwoNumsV2

//ARGUMENTS ARE ENTERED INTO FUNCTION WHEN IT IS CALLED 
addTwoNumsV2(numOne,numTwo);


function greetingByExcitement(name){
    let upperCaseName=name.toUpperCase();
    console.log(upperCaseName);
};//END FUNCTION greetingByExcitement

greetingByExcitement("zach");



function makeSandwich(bread, sauce, ingredient){

    let mySandwich=(`My sandwich is on ${bread} with ${sauce} and ${ingredient}.`)

    return mySandwich;

}



let sandwich; 

let mikeSandwich=makeSandwich()
let saraSandwich=makeSandwich()
