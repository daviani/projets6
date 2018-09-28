game.map = {};

/*-CREATE MAP-_________________________________________________________________________________ */
game.map.createMap = function () {

    document.getElementById('map').innerHTML = "";

    var el = document.getElementById("map");

    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        row.setAttribute("class", "row");
        el.appendChild(row)
        for (var j = 0; j < 10; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("class", "cell");
            cell.setAttribute("X", j + 1);
            cell.setAttribute("Y", i + 1);
            cell.setAttribute("type", "");
            cell.setAttribute("weapons", "");
            row.appendChild(cell);
        }
    }
};

/*-CREATE WALL-_________________________________________________________________________________ */
game.map.createWall = function () {
    var nbWall = Math.ceil((Math.random() * 15) + 15);
    console.log("Nombre de mur " + nbWall)
    for (var i = 0; i < nbWall; i++) {
        var xWall = Math.ceil(Math.random() * 10),
            yWall = Math.ceil(Math.random() * 10),
            wallElt = document.querySelector(".cell[X='" + xWall + "'][Y='" + yWall + "']");

        if (wallElt.getAttribute("type") === "") {
            wallElt.setAttribute("type", "wall");
            wallElt.classList.add("wall")
        } else {
            i--
        };
    }
};

/*-WEAPON RACK-_________________________________________________________________________________ */
game.weaponsRack = {
    weapon0: {
        name: "-Stone-",
        damage: 5,
        cssClass: ""
    },
    weapon1: {
        name: "-Bone Knife-",
        damage: 10,
        cssClass: "knife"
    },
    weapon2: {
        name: "-War Axe-",
        damage: 15,
        cssClass: "axe"
    },
    weapon3: {
        name: "-Ulfberth-",
        damage: 20,
        cssClass: "sword"
    },
    weapon4: {
        name: "--Gungnir--",
        damage: 30,
        cssClass: "spear"
    }
};

/*-CREATE WEAPON-_________________________________________________________________________________ */
game.map.createWeapons = function () {
    for (var i = 0; i < 1; i++) {
        var xWeapon = Math.ceil(Math.random() * 10),
            yWeapon = Math.ceil(Math.random() * 10),

            weaponElt = document.querySelector(".cell[X='" + xWeapon + "'][Y='" + yWeapon + "']");

        if (weaponElt.getAttribute("type") === "") {
            weaponElt.setAttribute("type", "weapon");
            weaponElt.setAttribute("weapon", "weapon" + 1);
            weaponElt.classList.add(game.weaponsRack["weapon" + 1].cssClass)
        } else {
            i--
        }

        // TO BE CONTINUED ................................................................
    }
};


/*-CALCUL MOVE-_________________________________________________________________________________ */
game.map.calculMove = function () {
    var heroes = game.heroes.turn,
        xRecover = parseInt(game.heroes[heroes].xHeroes),
        yRecover = parseInt(game.heroes[heroes].yHeroes);

    //right --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + (xRecover + i) + "'][Y='" + yRecover + "']")
        if (elt) {
            if ((elt.getAttribute("type") === "wall") || (elt.getAttribute("type") === "heroes")) {
                break;
            } else if ((elt.getAttribute("type") === "") || (elt.getAttribute("type") === "weapon")) {
                if (elt.getAttribute("type") === "") {
                    elt.setAttribute("type", "move");
                } else if (elt.getAttribute("type") === "weapon") {
                    elt.setAttribute("type", "move + weapon");
                };
                elt.classList.add("move" + heroes);
                elt.addEventListener("click", game.map.clickMove, false);
            };
        };
    };
    // left -------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + (xRecover - i) + "'][Y='" + yRecover + "']");
        if (elt) {
            if ((elt.getAttribute("type") === "wall") || (elt.getAttribute("type") === "heroes")) {
                break;
            } else if ((elt.getAttribute("type") === "") || (elt.getAttribute("type") === "weapon")) {
                if (elt.getAttribute("type") === "") {
                    elt.setAttribute("type", "move");
                } else if (elt.getAttribute("type") === "weapon") {
                    elt.setAttribute("type", "move + weapon");
                };
                elt.classList.add("move" + heroes);
                elt.addEventListener("click", game.map.clickMove, false);
            };
        };
    };

    //up ----------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + xRecover + "'][Y='" + (yRecover + i) + "']");
        if (elt) {
            if ((elt.getAttribute("type") === "wall") || (elt.getAttribute("type") === "heroes")) {
                break;
            } else if ((elt.getAttribute("type") === "") || (elt.getAttribute("type") === "weapon")) {
                if (elt.getAttribute("type") === "") {
                    elt.setAttribute("type", "move");
                } else if (elt.getAttribute("type") === "weapon") {
                    elt.setAttribute("type", "move + weapon");
                };
                elt.classList.add("move" + heroes);
                elt.addEventListener("click", game.map.clickMove, false);
            };
        };
    };

    //down --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + xRecover + "'][Y='" + (yRecover - i) + "']");
        if (elt) {
            if ((elt.getAttribute("type") === "wall") || (elt.getAttribute("type") === "heroes")) {
                break;
            } else if ((elt.getAttribute("type") === "") || (elt.getAttribute("type") === "weapon")) {
                if (elt.getAttribute("type") === "") {
                    elt.setAttribute("type", "move");
                } else if (elt.getAttribute("type") === "weapon") {
                    elt.setAttribute("type", "move + weapon");
                };
                elt.classList.add("move" + heroes);
                elt.addEventListener("click", game.map.clickMove, false);
            };
        };
    };

    //fight ?? ----------------------------------------------------------------------------------
    var elt1 = document.querySelector(".cell[X='" + xRecover + "'][Y='" + (yRecover - 1) + "']"),
        elt2 = document.querySelector(".cell[X='" + xRecover + "'][Y='" + (yRecover + 1) + "']"),
        elt3 = document.querySelector(".cell[X='" + (xRecover - 1) + "'][Y='" + yRecover + "']"),
        elt4 = document.querySelector(".cell[X='" + (xRecover + 1) + "'][Y='" + yRecover + "']");

        // if the case exists -------------------------------------------------------------------
    if (elt1) { 
        if (elt1.getAttribute("type") === "heroes") {
            game.heroes.fight = true;
        };
    };

    if (elt2) {
        if (elt2.getAttribute("type") === "heroes") {
            game.heroes.fight = true;
        };
    };

    if (elt3) {
        if (elt3.getAttribute("type") === "heroes") {
            game.heroes.fight = true;
        };
    };

    if (elt4) {
        if (elt4.getAttribute("type") === "heroes") {
            game.heroes.fight = true;
        };
    };

    var buttonAttack = document.getElementById("attack"),
        buttonDefence = document.getElementById("defence");

        if (game.heroes.fight = true) {
            // TO BE CONTINUED ................................................................
        }
};

/*-CLICK MOVE-_________________________________________________________________________________ */
game.map.clickMove = function (e) {
    game.map.deletMove();
    game.heroes.move(e);
};


/*-DELETE MOVE-_________________________________________________________________________________ */
game.map.deletMove = function () {

};

game.map.createMap();