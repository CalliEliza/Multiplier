
var output = document.getElementById("result");

function solve() {
  
  var input = document.getElementById("NumToBMultiplied").value;
  
  output.innerHTML = "";
  
  for(i=0; i < 20; i++) {
  
    output.innerHTML += i * input + "<br/>";
  
  }
  
}


