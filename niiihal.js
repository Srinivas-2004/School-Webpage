alert("This Page has been viewed by Robots and Humans");
alert("Please verify yourself as a Human");
let a = prompt("Enter number a");
let b = prompt("Enter number b");

let c = parseInt(a) + parseInt(b);

let d = prompt("Enter sum of a and b");

if(c == d)
{
    //open the html part only if this condition is true
    window.open("index.html");
}
else
{
    alert("You have'nt proved yourself as a Human");
    alert("if you're weak in maths, please reload the page and try again");
}