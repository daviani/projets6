/*-DOM USER FREYDIS-__________________________________________________________________________________________________________________________________________________________________________*/
/*var healthResultF = document.createElement("p");
healthResultF.setAttribute("class", "healthResultF");
healthResultF.innerHTML = "- 100 -";
document.getElementById("healthResultF").appendChild(healthResultF);

var powerResultF = document.createElement("p");
powerResultF.setAttribute("class", "powerResultF");
powerResultF.innerHTML = "- 5 -";
document.getElementById("powerResultF").appendChild(powerResultF);

var weaponNameF = document.createElement("p");
weaponNameF.setAttribute("class", "weaponNameF");
weaponNameF.innerHTML = "- Stone -";
document.getElementById("weaponNameF").appendChild(weaponNameF);*/


/*-DOM USER HARALD-_________________________________________________________________________________________________________________________________________________________________________*/
/*var healthResultH = document.createElement("p");
healthResultH.setAttribute("class", "healthResultH");
healthResultH.innerHTML = "- 100 -";
document.getElementById("healthResultH").appendChild(healthResultH);

var powerResultH = document.createElement("p");
powerResultH.setAttribute("class", "powerResultH");
powerResultH.innerHTML = "- 5 -";
document.getElementById("powerResultH").appendChild(powerResultH);

var weaponNameH = document.createElement("p");
weaponNameH.setAttribute("class", "weaponNameH");
weaponNameH.innerHTML = " - Stone -";
document.getElementById("weaponNameH").appendChild(weaponNameH);

*/

/*-MODAL-_______________________________________________________________________________________________________________________________________________________________________________________*/

var freydisModal = (function () {
    var modal = document.getElementById('myModalF'),
        btn = document.getElementById("myBtnF"),
        span = document.getElementsByClassName("closeF")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})();



var haraldModal = (function () {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("closeH")[0];
    
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})();