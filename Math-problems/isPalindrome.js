function ifPalindrome(n)
{
var value=n;
var revN=0;
while(n>0)
{
var lastDigit=n%10;
n=Math.floor(n/10);
revN=(revN*10)+lastDigit;
}
if(value==revN)
{
console.log("IT IS PALINDROME");
}
else console.log("NOT PALINDROME")
}
ifPalindrome(1211);