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