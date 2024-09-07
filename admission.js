var n =document.getElementById("n");
var fn =document.getElementById("fn");
var mn =document.getElementById("mn");
var mno=document.getElementById("mno");
var fmno=document.getElementById("fmno");
var mmno=document.getElementById("mmno");
var ei=document.getElementById("ei");
var add=document.getElementById("add");
var c =document.getElementById("c");
var r1=document.getElementById("a");


function validation()
{
    if(n.value==="")
{
    alert("Please enter valid name");
    return false;
}
for(i=0;i<r1.length;i++)
{
    if(a[i].checked==true)
    return true;
}


if(mno.value==="")
{
    alert("Please enter valid mobile number ");
    return false;
}
if (mno.value < 6999999999 || mno.value > 9999999999) {
    alert("Phone number must be 10 characters long number and first digit should be between 7 and 9");
   
    return false;
}

if(ei==="")
{ alert("Please enter valid email");
return false;
    
}

if(ei.value.indexOf("@") == -1 || ei.value.indexOf(".") == -1)
    {
        alert("Enter valid Email your email should contain @");
        return false;
    }







if(fn.value==="")
{
    alert("Please enter valid name");
    return false;
}



if(fmno.value==="")
{
    alert("Please enter valid mobile number ");
    return false;
}
if (fmno.value < 6999999999 || fmno.value > 9999999999) {
    alert("Phone number must be 10 characters long number and first digit should be between 7 and 9");
   
    return false;
}


if(mn.value==="")
{
    alert("Please enter valid name");
    return false;
}

if(mmno.value==="")
{
    alert("Please enter valid mobile number ");
    return false;
}

if (mmno.value < 6999999999 || mmno.value > 9999999999) {
    alert("Phone number must be 10 characters long number and first digit should be between 7 and 9");
   
    return false;
}



if(add.value==="")
{
    alert("Please enter address");
    return false;
}
if(c.value==="")
{
    alert("Please enter valid city name");
    return false;
}


if(document.getElementById("a").checked)
{
valid=true;
}
else if(document.getElementById("b").checked)
{
valid=true;
}
else if(document.getElementById("c").checked)
{
valid=true;
}
else if(document.getElementById("d").checked)
{
valid=true;
}
else if(document.getElementById("e").checked)
{
valid=true;
}
else if(document.getElementById("f").checked)
{
valid=true;
}
else if(document.getElementById("g").checked)
{
valid=true;
}
else if(document.getElementById("h").checked)
{
valid=true;
}
if(valid==false)
{
    alert("please select atleast one option");
    return false;
}

return true;

}