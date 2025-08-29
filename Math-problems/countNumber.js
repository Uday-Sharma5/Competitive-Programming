function countNumber(n)
{
var count=0;
while(n>0)
{
count++;
n=Math.floor(n/10);
}
console.log(count);
}

countNumber(255000);