var computer = Math.round(Math.random()*100);
console.log(computer);
function getRandomnumber(computer)
{
    var input_number =document.getElementById("number").value;
console.log(input_number);
    if(computer == input_number)
    {
        console.log("You picked correct number");
    }
    else{
        console.log("You picked wrong number");
    }

}
