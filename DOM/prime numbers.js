function prime()
{
    var a =parseInt(document.getElementById("max").value);
    var result =" ";
    for (let i=1;i<=a;i++)
    {
        let flag=0;

        for (let j=2;j<i;j++)
        {
         if(i %j ==0)
         {
            flag =1;
            break;
         }
        }

        if(i>1 && flag==0)
        {
           result = result + "<p>" + i + "</p>"
            document.getElementById("result").innerHTML=result;
            
            
        }
    }
}