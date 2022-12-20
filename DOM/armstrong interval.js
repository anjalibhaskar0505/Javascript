function armstrong()
{
    const lowNumber =parseInt(document.getElementById("low").value);
    const highNumber =parseInt(document.getElementById("high").value);
    var result=" "
    for(let i=lowNumber;i<=highNumber;i++)
    {
        let numberofdigits =i.toString().length;
        let sum=0;
        let temp=i;

        while(temp>0)
        {
            let remainder=temp%10;
            sum += remainder** numberofdigits;
            temp=Math.floor(temp/10);
        }

        if(sum==i)
        result =result + "<p>" + i + "</p>";
        document.getElementById("result").innerHTML=result;
    
    }
}