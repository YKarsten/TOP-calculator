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

displayInput()

const sum = document.getElementById("sum");
sum.addEventListener("click", ()=>{
    // Extract the numerical values 
    let numIn = display.textContent.split(/\W/) 
    // console.table(numIn)

    // Extract the operators
    let operatorsIn = display.textContent.replace(/[0-9]/g, "")
    operatorsIn = operatorsIn.split("")
    // console.table(operatorsIn)
 
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
        if (numIn[1]===0){
            display.textContent = "Never divide by 0"
        }
        display.textContent = zwischenSumme
    }else if(operatorsIn[i-1] =="%"){
        zwischenSumme = add(zwischenSumme, parseInt(numIn[i]))
        display.textContent = zwischenSumme
    }else{
        display.textContent = "Error"
    } 
}
})


const operation = document.querySelectorAll("div.operator");
addEventListenerList(operation, 'click', calc); 

function addEventListenerList(list, event, fn) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener(event, fn);
    }
}

function calc(){
    let numIn = display.textContent.split(/\W/) 
    // numIn =numIn.split("")

    let operatorsIn = display.textContent.replace(/[0-9]/g, "")
    operatorsIn = operatorsIn.split("")

    // for some reason numIn always has an additional empty element, 
    // so we check for "3" number
    if(Object.keys(numIn).length === 3){
        switch(operatorsIn[0]){
            case "+":
                display.textContent = add(parseInt(numIn[0]),parseInt(numIn[1]))
                display.textContent += operatorsIn[1]
                break;
            case "-":
                display.textContent = subtract(parseInt(numIn[0]),parseInt(numIn[1]))
                display.textContent += operatorsIn[1]
                break;
            case "*":
                display.textContent = multiply(parseInt(numIn[0]),parseInt(numIn[1]))
                display.textContent += operatorsIn[1]
                break;
            case "/":
                display.textContent = divide(parseInt(numIn[0]),parseInt(numIn[1]))
                display.textContent += operatorsIn[1]
                break;
        }
    }
}