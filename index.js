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

