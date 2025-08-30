function isArmstrong(n)
{
let temp=n;
let exp=0;
// Count Digitd
while(temp>0) 
{
exp++;
temp=Math.floor(temp/10);
}
temp=n;
let sum=0;
while(temp>0)
{
let digit=temp%10;
let power=1;
for(var i=0;i<exp;i++)
{
power=power*digit;
}
sum=sum+power;
temp=Math.floor(temp/10);
}
return n===sum;
}

console.log(isArmstrong(3711));