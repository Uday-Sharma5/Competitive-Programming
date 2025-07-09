const readline=require("readline");
function star(s)
{
for(var i=1;i<s+1;i++)
{
var row="";
for(var y=0;y<i;y++) row=row+"*";
console.log(row);
}
}

var ioInterface=readline.createInterface({
input:process.stdin,
output:process.stdout
});
ioInterface.question("Enter a number : ",function(ans){
ioInterface.close();
var a=parseInt(ans);
star(a);
})


