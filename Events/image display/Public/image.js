function display(element)
{
    document.getElementById('heading').innerHTML = element.alt;
}

function revert()
{
    document.getElementById('heading').innerHTML = "Hover over a sunsign image to display details.";
}