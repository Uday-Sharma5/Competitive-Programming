var readline=require("readline");

function factorial(n)
{
var y=n-1;
while(y>1)
{
n=n*y;
y--;
}
return n;
}

var ioInput=readline.createInterface({
input:process.stdin,
output:process.stdout
});
ioInput.question("Enter a number to find factorial : ",function(ans){
ioInput.close();
a=ans;
var output=factorial(a);
console.log(output);
});

