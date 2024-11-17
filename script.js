var imgbox = document.querySelector(".img-box");
var imgwrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");


originalImg.style.width = imgbox.offsetWidth+ "px";

var leftspace  = imgbox.offsetLeft;

imgbox.onmousemove = function(e){
    var boxwidth= (e.pageX- leftspace)+"px";
    imgwrap.style.width = boxwidth;
    line.style.left = boxwidth;
}