var  degree = prompt("enter degree")
if( degree == null ||degree == "" || degree > 100 || degree <= 0 ){
    alert("enter 100 >number > 0")
}
else if (degree <= 100 && degree >= 90 ) {
     alert("A")
}         
else if (degree < 90 && degree >= 80 ) {
     alert("B")
}         
else if (degree < 80 && degree >= 70 ) {
     alert("C")
}         
else if (degree < 70) {
     alert("F")
}      














