let btnAdd = document.querySelector("#click");
let input = document.querySelector("input");

btnAdd.addEventListener("click", () =>{
input.value = parseInt(input.value) + 10;
});

//let numberClick = 0;
//function addToNumber() {
//document.getElementById("click").innerHTML
//= "vous avez cliqué : " + ++numberClick + "fois";
//}

//var crement = 0;
//function crementClic(){
//for (var i = 0; i < 10; i++) {
//crement++;
//document.getElementById('inpt').value = crement;
//}
//}
