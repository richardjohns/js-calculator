//JS Calculator

document.addEventListener('DOMContentLoaded', startGame)

// Add event listeners

var myBtn1 = document.getElementById('myBtn1');
console.log(myBtn1);

function startGame () {
     var box = document.getElementById("display")
     console.log("startGame initiated");

}


function displayCalc (val) {
  var x = "";
  x += val;
  document.getElementById("display").innerHTML += x;
  // or
  // document.getElementById("display").value= x;
  if (val === 'C') {
    x = '';
    document.getElementById("display").innerHTML = x;
  }
}

function equals() {
    var x = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(x);
    // happens all the time - remember to pass something back out of the function.
}
