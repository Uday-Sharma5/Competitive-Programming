function star(s)
{
for(var row=1;row<=s;row++)
{
var line="";
for(var spc=1;spc<=s-row;spc++)
{
line=line+" ";
}
for(var star=1;star<=2*row-1;star++)
{
line=line+"*";
}
console.log(line);
}
}
star(10);