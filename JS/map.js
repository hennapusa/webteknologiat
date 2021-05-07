window.onload = function(){

}

function showResult(){
   var mapAdress = document.getElementById("adresstext").value;
   console.log(mapAdress);
   var mapCity = document.getElementById("citytext").value;
   console.log(mapCity);
   document.getElementById("myMap").src='https://www.google.com/maps?q=' + mapAdress + mapCity + '&output=embed';

}

