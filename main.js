
var output = document.getElementById("result");

function solve() {
  
  var input = document.getElementById("NumToBMultiplied").value;
  
  output.innerHTML = "";
  
  for(i=1; i < 13; i++) {
    for(j=1; j<13; j++) {
        total = i*j;
        total = " " + total;
        if (total <10) { total = " " + total; }
        output.innerHTML += total;
    }
      
    output.innerHTML += total; /*i * input + "<br/>";*/
  
  }
  
}

function reset() {
    output.innerHTML = " ";
}
