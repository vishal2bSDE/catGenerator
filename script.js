const btn= document.querySelector(".btn-success");
btn.addEventListener("click",generateCat);
var div =document.querySelector(".flex-box-container-2");
var del=document.querySelector(".btn-warning");
del.addEventListener("click",removeCat);

function removeCat(){
    div.removeChild(div.firstChild);
}

function generateCat(){
    var img= document.createElement("img");
    img.src="http://api.thecatapi.com/api/images/get?format=src&type=gif&size"+new Date().getTime();
    div.appendChild(img);
    // img.style.maxWidth = "100%";
}
