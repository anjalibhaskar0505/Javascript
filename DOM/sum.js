function sum(){
    var a =document.getElementById("num1").value;
    console.log(a);
    var b =document.getElementById("num2").value;
    console.log(b);
    var c =a + b;
    console.log(c);
    document.getElementById("para").innerHTML=c.value;
}