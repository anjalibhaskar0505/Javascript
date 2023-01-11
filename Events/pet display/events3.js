var item = document.getElementById("imageItem");

var divEle = document.querySelector("#customText");

//to hide an element
function hide()
{
    item.setAttribute("hidden" , "true");
}

//to show the hide element
function reset()
{
    item.removeAttribute("hidden" , "true");
}

//to change the content of the div
function change()
{
    divEle.innerHTML ="<p> Your Item Is Missing </p>";
}

//mouseover
function changeImage()
{
    item.removeAttribute("src" , "./images/pet1.jpg");
    item.setAttribute("src" , "./images/pet2.jpg" );
}

//mouseout
function resetImage()
{
    item.removeAttribute("src" , "./images/pet2.jpg");
    item.setAttribute("src" , "./images/pet1.jpg" );
}