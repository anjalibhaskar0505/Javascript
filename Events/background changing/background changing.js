function bg_color()
{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgcolor = "rgb(" + x + "," + y +"," + z +")";

    document.getElementById("body").style.background =bgcolor;

}

      