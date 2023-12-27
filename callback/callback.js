function add(num1, num2)
{
    console.log("Add",num1,"+",num2,"=",num1+num2)
}

function mul(num1,num2)
{
    console.log("Mul",num1,"*",num2,"=",num1*num2)
}

function calculator(operation,param1,param2)
{
    operation(param1,param2)
}

calculator(add,10,2)
calculator(mul,10,2)