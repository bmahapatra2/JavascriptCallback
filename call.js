function add(a,b)
{
    
    console.log(a+b);
}

function subtract(a,b)
{
   console.log(a-b);
}

function calculator(number1,number2,calculate)
{
   
    calculate(number1,number2);
   
 }   
calculator(number1,number2,add);
calculator(number1,number2,subtract);