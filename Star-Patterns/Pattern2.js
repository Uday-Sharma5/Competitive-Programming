function p(s)
{
var space=2*(s-1);
for(var i=1;i<=s;i++)
{
for(var f=1;f<=i;f++) process.stdout.write(f.toString());
for(var u=1;u<=space;u++) process.stdout.write(" ");
for(var l=i;l>=1;l--) process.stdout.write(l.toString())
console.log();
space=space-2;
}
}
p(4);