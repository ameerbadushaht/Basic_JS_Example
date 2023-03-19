

function cal(num) {

    document.getElementById("caldisplay").innerHTML =document.getElementById("caldisplay").innerHTML+num;
}

function cleardisplay() {
document.getElementById("caldisplay").innerHTML ="";

}

function caleq(){
    var text=document.getElementById("caldisplay").innerHTML;
    var result=eval(text);
    document.getElementById("caldisplay").innerHTML=result;
}