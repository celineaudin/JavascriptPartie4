var language = ["PHP", "Javascript", "HTML", "CSS", "JAVA", "Bootstrap"];
//document.getElementById("demo").innerHTML = language;
function addLanguage() {
    var input = document.getElementById("input").value;
    var addTable = (language.unshift(input));
    alert (input + " ajouté au tableau");
}

function displayLanguages() {
    alert (language);
  //document.getElementById("demo").innerHTML = language;
}
