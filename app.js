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



console.log("-------------------------------------------")
console.log("BEGIN FUNTION PRACTICE ASSIGNEMENT")
console.log("-------------------------------------------")

function consoleHeader(title){
    console.log("-------------------------------------------")
    console.log(title)
    console.log("-------------------------------------------")
}//END CONSOLE HEADER FUNCTION

//! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.
 consoleHeader("GRADE AVERAGE");
//TODO Define an Array: Define an array containing a list of grades.
let grade_arr=[95,85,0,80,100]; 
let averageGrade=calGradeAve(grade_arr);
let gradeLetter=giveLetterGrade(averageGrade);

//TODO Create a Function: Create a function to calculate the average of the grades.
function calGradeAve(grades){

    let gradeSum=0;
    for (let i=0; i<grades.length; i++ ){
        gradeSum+=grades[i];
    }//END FOR LOOP 

    let average= gradeSum/grades.length;
    console.log(average);

    return average; 
}//END calGradeAve

//TODO Create Another Function: Create another function to determine the letter grade based on the average.
//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.
//* Output Results: Use console.log to display the average grade and the corresponding letter grade.
function giveLetterGrade(gradeNum){
    let letterGrade;
    if(gradeNum>89){
        letterGrade="A"
    }else if (gradeNum>79){
        letterGrade="B"
    }else if (gradeNum>69){
        letterGrade="C"
    }else if (gradeNum>59){
        letterGrade="D"
    }else if (gradeNum<60){
        letterGrade="F"
    }//END if/else tree

    console.log(letterGrade)
    return(letterGrade)
}//END giveLetterGrade FUNCTION

 
 
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 consoleHeader("Bank Account Manager")
//TODO Define Variables: Start with a balance variable.
let balance=0;

makeDeposit(500);
makeWithdrawal(100);
checkBalance();
makeWithdrawal(600);

//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.

function makeDeposit(depositAmount){
    console.log(`MAKE DEPOSIT---current balance: $${balance}`)
    
    balance+=depositAmount;
    balance.toFixed(2)
    checkBalance();
    
}//END makeDeposit

//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
//* Output Results: Use console.log to display the updated balance after each operation.
function makeWithdrawal(withdrawAmount){

    console.log(`MAKE WITHDRAWAL--current balance: $${balance}`)
    console.log(`Withdrawal request: $${withdrawAmount}`)
    balance.toFixed(2)

    if(balance<withdrawAmount){
        console.log("Error: Insufficient Funds. Withdrawal Failed")
        console.log(`Max withdrawal available is: $${balance}`);
        withdrawAmount=0;
    }else{
        balance-= withdrawAmount
    }
    console.log(`withdrawal amount: $${withdrawAmount}`)
    balance.toFixed(2)
    checkBalance();

}//END makeWithdrawal

function checkBalance(){
    balance.toFixed(2)
    console.log(`CHECK BALANCE--- available balance: $${balance}`)
    return balance
}//END checkBalance


 
 
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.
consoleHeader("Simple To-Do List")
//TODO Define an Array: Define an array to store the tasks.
let task_arr=[];
addTask("Take Out Trash");
addTask("Clean out car");
removeTask("Take Out Trash");
removeTask("clean out car");
addTask("make grocery list");

//TODO Create Functions: Create functions to add a task and display the to-do list.
//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.
//* Output Results: Use console.log to display the to-do list after each operation.

function addTask(taskName){
    task_arr.push(taskName); 
    displayTask(task_arr);


}//END addTask FUNCTION

function displayTask(list){

    console.log("Items on list:")
    for(let i=0; i<list.length; i++){
        console.log(list[i])

    }//END FOR

    console.log(list);

}//END displayTask


 
//! BONUS: Be able to remove a task o.o
function removeTask(taskName){
    
    for (let i=0; i<task_arr.length; i++){

        if (taskName.toUpperCase==task_arr[i].toUpperCase){
            task_arr.splice(task_arr[i],1);
            console.log(`${taskName} has been removed from list`)
        }else{
            console.log("Error: task not found on list");
        }//end if/else
        
    }//END FOR LOOP 

    displayTask(task_arr);

 

}//END removeTask
 
 
 
//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.
 consoleHeader("Temperature Converter")
//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
let tempNum=0;
let tempType= "c"

tempConverter(tempNum,tempType)

//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature
//* KelvinToCelsius conversion:
//* kelvinNum - 273.15
 
//* celsiusToKelvin:
//* celsiusNum + 273.15
 
//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9
 
//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32
 
 
//TODO  Use if-else Statements: Use if-else statements to determine which conversion to perform based on the user's input.
//* Output Results: Use console.log to display the converted temperature.

function tempConverter(tempValue, tempUnit){
   
   console.log(`Temperature entered: ${tempValue} degrees ${tempUnit}`)

    let tempUnitCap=tempUnit.toUpperCase();   
    let celsiusTemp;
    let kelvinTemp;
    let farenheitTemp;

    if (tempUnitCap=="F" || tempUnitCap=="FAHRENHEIT"){
        farenheitTemp=tempValue;
        celsiusTemp= fahToCel(farenheitTemp);
        kelvinTemp= celToKel(celsiusTemp);
       

    }else if(tempUnitCap=="C" || tempUnitCap=="CELSIUS"){
        celsiusTemp=tempValue;
        kelvinTemp=celToKel(celsiusTemp);
        farenheitTemp=celToFah(celsiusTemp);

    }else if(tempUnitCap=="K" || tempUnitCap=="KELVIN"){
        kelvinTemp=tempValue;
        celsiusTemp= kelToCel(kelvinTemp)
        farenheitTemp=celToFah(celsiusTemp)
        
    }else{
        console.log("Error: Temperature Unit not recognized")
    }//END ELSE IF TREE

    
}//END FUNCTION tempConverter

function fahToCel(fahTemp){
   let celsiusTemp=(fahTemp-32) * 5/9;
    console.log(`Temp in Celsius: ${celsiusTemp}`);
    return celsiusTemp
    
}//END fahToCel

function celToKel(celTemp){
    let kelvinTemp= celTemp + 273.15;
    console.log(`Temp in Kelvin: ${kelvinTemp}`);
    return kelvinTemp
}//End celToKel

function celToFah(celTemp){
    let fahTemp=(celTemp * 9/5) + 32;
    console.log(`Temp in Farenheit: ${fahTemp}`);
    return fahTemp;
}//END celToFah

function kelToCel(kelTemp){
    let celTemp= kelTemp-273.15;
    console.log(`Temp in Celsius: ${celTemp}`);
    return celTemp;

}//END kelToCel


consoleHeader("Music Playlist Manager"); 
//! Music Playlist Manager
//? Create a program that allows the user to manage a playlist of songs.
//TODO Define an Array: Define an array to store the song titles.

let playlist_Arr=[];
//TODO Create Functions: Create functions to add a song, remove a song, and display the playlist.

addSong("songOne");
addSong("SONGtWO");
addSong("songthree");
removeSong("SONGONE")


function addSong(userInput){
    console.log(`Request addition of: "${userInput}" `)

    playlist_Arr.push(userInput);
    displayPlaylist();

}//END FUNCTION addSong

function removeSong(userInput){
 
    console.log(`Request for removal of: "${userInput}" `)

    for(let i=0; i<playlist_Arr.length; i++){

        if(userInput.toUpperCase()==playlist_Arr[i].toUpperCase()){

            playlist_Arr.splice(playlist_Arr[i],1);
            console.log(`${userInput} has been removed from the list. `)
        }//end if 
        

    }//END FOR LOOP 

    displayPlaylist();
}//END FUNCTION removeSong

function displayPlaylist(){
    console.log("Songs on Playlist:")
    for(let i=0; i<playlist_Arr.length; i++){
        console.log(playlist_Arr[i]);
    }//END FOR LOOP

    console.log(playlist_Arr);

}//END FUNCTION displayPlaylist

//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the operations.
//* Output Results: Use console.log to display the playlist after each operation.
 
 
//! Daily Temperatures
//? Create a program that processes daily temperature readings, calculates the average temperature, and identifies the highest and lowest temperatures.
 
//TODO Predefine an Array of Temperatures: Start with an array of numbers representing daily temperatures.
let temperatures = [90, 75, 79, 72, 78, 85, 84];
//TODO Calculate the Average Temperature: Write a function to calculate the average of the temperatures.
//TODO Find the Highest Temperature: Write a function to find the highest temperature in the array.
//TODO Find the Lowest Temperature: Write a function to find the lowest temperature in the array.

let tempAverage=findAverage(temperatures); 
let highestTemp= findMax(temperatures);
let lowestTemp= findMin(temperatures);

console.log(`Temp Average ${tempAverage}`);
console.log(`Highest Temp ${highestTemp}`);
console.log(`Lowest Temp ${lowestTemp}`); 


function findAverage(nums){
    let numSum=0;

    for(let i=0; i<nums.length; i++){
       numSum +=nums[i]; 
    }//END FOR LOOP 
    let average=numSum/temperatures.length; 
    return average; 

}//END calcTemp FUNCTION

function findMax(nums){
    let maxNum=0; 

    for(let i=0; i<nums.length; i++){
        if(nums[i]>maxNum){
            maxNum=nums[i];
        }//END IF
       
    }//END FOR LOOP 

    return maxNum;
}//END FUNCTION findMax

function findMin(nums){

    let minNum=findMax(nums);

    for(let i=0; i<nums.length; i++){
        if(nums[i]<minNum){
            minNum=nums[i];
        }//END IF
       
    }//END FOR LOOP 

   return minNum;
}//END FUNCTION findMax



 
