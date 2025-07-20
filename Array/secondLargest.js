function secL()
{
var x=[100,50,4120,80,1000];
var largest=x[0];
var secLargest=x[0];
for(var i=1;i<x.length;i++)
{
if(largest<x[i]) largest=x[i];
}
console.log(`largest is : ${largest}`);
for(var i=1;i<x.length;i++)
{
if(secLargest<x[i]&&x[i]!=largest) secLargest=x[i];
}
console.log(`Second Largest is : ${secLargest}`);
}
secL()