menuListArray = ["Pizza Vegetariana", "pizza de frango", "pizza portuguesa", "pizza quatro queijos", "Pizza calabresa", "pizza extravaganza"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+menuListArray[i]+"<br>";
}
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
function addItem(){
var htmldata;
var imgtags="<img id='im1' src='pizzaImg.png'";
var item=document.getElementById("addItem").value;
//Completar o código
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+menuListArray[i]+"<br>";
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
//Completar o código
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}