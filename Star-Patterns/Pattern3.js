function star(s)
{
    var h=1;
    for(var i=1;i<=5;i++)
    {
        var row="";
        for(var j=1;j<=i;j++)
        {
            row=row+h+" ";
            h++;
        }
    console.log(row);
    }
}
star(5);