

 
function clear(){
  document.getElementById("para-el").value = " "
}

function display(value){
  document.getElementById("para-el").value += value
}
function equate(){
  let p = document.getElementById("para-el").value
  let q = eval(p)
  document.getElementById("para-el").value = q;
  
}