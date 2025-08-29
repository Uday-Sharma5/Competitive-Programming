function reverseNum(n)
{
var ans=0;
var digit;
while(n>0)
{
digit=n%10;
n=Math.floor(n/10);
ans=(ans*10)+digit;
}
console.log(ans);
}
reverseNum(124);