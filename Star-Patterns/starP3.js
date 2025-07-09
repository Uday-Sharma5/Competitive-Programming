function star(s)
{
for(var i=1;i<s+1;i++)
{
var row="";
for(var j=1;j<=i;j++)
{
row=row+j;
}
console.log(row);
}
}

star(20);