var readline=require("readline");
function star(s)
{
for(var o=0;o<s;o++)
{
var row="";
for(var i=0;i<s;i++) row=row+"*";
console.log(row);
}
}

var ioInterface=readline.createInterface({
input:process.stdin,
output:process.stdout
});
ioInterface.question("Enter a number : ",function(ans){
a=ans;
ioInterface.close();
star(a)
})

