function quotes()
{
    var quotes =["Life is what happens when you're busy making other plans" ,"The greatest glory in living lies not in never falling, but in rising every time we fall" ,"The way to get started is to quit talking and begin doing"];
    var randomNumber =Math.floor(Math.random() * (quotes.length));
    document.getElementById("quotesdisplay").innerHTML =quotes[randomNumber];
}