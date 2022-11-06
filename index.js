//Create functions for the basic math operators
// addition
function add(num1,num2){
    return num1+num2;
}
// subtraction
function subtract(num1, num2){
    return num1-num2;
}
// multiplication
function multiply(num1, num2){
    return num1*num2;
}
// division
function divide(num1, num2){
    return num1/num2;
}
// modulo
function modulo(num1, num2){
    return num1%num2;
}

// Create a function called operator that takes one of the above functions and 2 numbers.
function operate(operator, num1, num2){
    switch(operator){
        case add:
            return add(num1, num2);
        case subtract:
            return subtract(num1, num2);
        case multiply:
            return multiply(num1, num2);
        case divide:
            return divide(num1, num2);
    }
}

//Get the screen div to display inputs
let display= document.getElementById("screen")

// Map the buttons to the screen output
function displayInput(){
const zero = document.getElementById("zero");
zero.addEventListener("click", ()=>{
    display.textContent += "0";
})

const one = document.getElementById("one");
one.addEventListener("click", ()=>{
    display.textContent += "1";
})

const two = document.getElementById("two");
two.addEventListener("click", ()=>{
    display.textContent += "2";
})

const three = document.getElementById("three");
three.addEventListener("click", ()=>{
    display.textContent += "3";
})

const four = document.getElementById("four");
four.addEventListener("click", ()=>{
    display.textContent += "4";
})

const five = document.getElementById("five");
five.addEventListener("click", ()=>{
    display.textContent += "5";
})

const six = document.getElementById("six");
six.addEventListener("click", ()=>{
    display.textContent += "6";
})

const seven = document.getElementById("seven");
seven.addEventListener("click", ()=>{
    display.textContent += "7";
})

const eight = document.getElementById("eight");
eight.addEventListener("click", ()=>{
    display.textContent += "8";
})

const nine = document.getElementById("nine");
nine.addEventListener("click", ()=>{
    display.textContent += "9";
})

const calcDivide = document.getElementById("divide");
calcDivide.addEventListener("click", ()=>{
    display.textContent += "/";
})

const calcMultiply = document.getElementById("multiply");
calcMultiply.addEventListener("click", ()=>{
    display.textContent += "*";
})

const minus = document.getElementById("minus");
minus.addEventListener("click", ()=>{
    display.textContent += "-";
})

const plus = document.getElementById("plus");
plus.addEventListener("click", ()=>{
    display.textContent += "+";
})


const modulo = document.getElementById("modulo");
modulo.addEventListener("click", ()=>{
    display.textContent += "%";
})

const undo = document.getElementById("undo");
undo.addEventListener("click", ()=>{
    display.textContent = display.textContent.slice(0,-1);
})

const clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    display.textContent = "";
})
}

const sum = document.getElementById("sum");
sum.addEventListener("click", ()=>{
    // Extract the numerical values 
    let numIn = display.textContent.split(/\W/) 
    console.table(numIn)

    // Extract the operators
    let operatorsIn = display.textContent.replace(/[0-9]/g, "")
    operatorsIn = operatorsIn.split("")
    console.table(operatorsIn)
 
    let zwischenSumme = parseInt(numIn[0]);

for(let i=1; i<numIn.length; i++){
    if      (operatorsIn[i-1] =="+"){
        zwischenSumme = add(zwischenSumme, parseInt(numIn[i]))
        display.textContent = zwischenSumme
    }else if(operatorsIn[i-1] =="-"){
        zwischenSumme = subtract(zwischenSumme, parseInt(numIn[i]))
        display.textContent = zwischenSumme
    }else if(operatorsIn[i-1] =="*"){
        zwischenSumme = multiply(zwischenSumme, parseInt(numIn[i]))
        display.textContent = zwischenSumme
    }else if(operatorsIn[i-1] =="/"){
        zwischenSumme = divide(zwischenSumme, parseInt(numIn[i]))
        // Catch divison by 0 (results in Infinity)
        if (isFinite(zwischenSumme)){
            display.textContent = zwischenSumme
        }
        display.textContent = "Error"
    }else if(operatorsIn[i-1] =="%"){
        zwischenSumme = add(zwischenSumme, parseInt(numIn[i]))
        display.textContent = zwischenSumme
    }else{
        display.textContent = "Error"
    } 
}
})



displayInput()