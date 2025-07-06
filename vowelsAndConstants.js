var readline=require("readline");

function vowelsAndConstants(s)
{
var vowels=["a","e","i","o","u"];
console.log(s+" - VOWELS CONTAIN:- ");
for(var y=0;y<s.length;y++)
{
if(vowels.includes(s[y]))
{
console.log(s[y]);
}
}
console.log(s+" - CONSTANTS CONTAIN:- ");
for(var y=0;y<s.length;y++)
{
if(!vowels.includes(s[y]))
{
console.log(s[y]);
}
}
}


var ioInterface=readline.createInterface({
input:process.stdin,
output:process.stdout
})

ioInterface.question("Enter a string to find vowel and constants :- ",function(ans){
_input=ans;
ioInterface.close();
vowelsAndConstants(_input);
})




