function p(s)
{
for(var i=0;i<s;i++)
{
var start=1;
if(i%2==0) start=1;
else start=0;
var row="";
for(var j=0;j<=i;j++)
{
row=row+start;
start=1-start;
}
console.log(row);
}
}

p(5);
