function pyramid(s)
{
z=s;
for(var y=1;y<=s;y++)
{
var line="";
for(var i=1;i<=z;i++)
{
line=line+i;
}
console.log(line);
z--;
}
}

pyramid(5);