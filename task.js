
// Use callback functions and complete remaining arithmetic operations 
// (Multiplication remainders,division,etc--)


function Operation(n1,n2,Calculations){
    Calculations(n1,n2)
}
function Addition(n1,n2){
    console.log(n1+n2)
}
function Substraction(n1,n2){
    console.log(n1-n2)
}
function Multiplication(n1,n2){
    console.log(n1*n2)
}
function Division(n1,n2){
    console.log(n1/n2)
}
function Exponential(n1,n2){
    console.log(n1**n2)
}
Operation(7,7,Exponential)
Operation(7,7,Division)
Operation(7,7,Multiplication)
Operation(7,7,Substraction)
Operation(7,7,Addition)