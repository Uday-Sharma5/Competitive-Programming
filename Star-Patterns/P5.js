function star(s)
{
 var z=s;
	for(var i=1;i<=s;i++)
	{
	 var line="";
		for(var y=1;y<=z;y++)
		{
		 line=line+"*";
		}
	console.log(line);
	z--;
        }
}

star(10);