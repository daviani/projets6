game.map = {} // constructor


//-ADD MAP-_________________________________________________________________________________
/*
@elt === id Map
@row === tr HTML
@cell === td HTML
*/
game.map.addMap = function () {
    document.getElementById("map").innerHTML = ""; // initialize map

    var elt = document.getElementById("map");

    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        row.setAttribute("class", "row");
        elt.appendChild(row)
        for (var j = 0; j < 10; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("class", "cell");
            cell.setAttribute("X", j + 1);
            cell.setAttribute("Y", i + 1);
            cell.setAttribute("type", "");
            cell.setAttribute("weapons", "");
            row.appendChild(cell);
        };
    };
};

//-ADD WALL-_________________________________________________________________________________
/*
@nbWall === nombre de montagne
@xWall === définie la coordonée de Xwall 
@yWall === définie la coordonée de Ywall 
@WallElt === place xWall & yWall dans le tableau
*/

game.map.addWall = function () {
    var nbWall = Math.ceil((Math.random() * 10) + 10);
    console.log("number of wall " + nbWall)
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
    };
};


//-WEAPON BOARD-________________________________________________________________________________
/*
@Board of weapons
*/

game.weaponsBoard = {
    weapon0: {
        name: "Stone",
        power: 10,
        cssClass: "stone"
    },
    weapon1: {
        name: "Bone Knife",
        power: 15,
        cssClass: "knife"
    },
    weapon2: {
        name: "War Axe",
        power: 20,
        cssClass: "axe"
    },
    weapon3: {
        name: "Ulfberth",
        power: 25,
        cssClass: "sword"
    },
    weapon4: {
        name: "Gungnir",
        power: 40,
        cssClass: "spear"
    }
};


//-ADD WEAPON-________________________________________________________________________________
game.map.addWeapon = function () {
    /*
    @nbWeapon === nombre d'arme
    @xWeapon === définie la coordonée de xWeapon 
    @yWeapon === définie la coordonée de yWeapon 
    @WeaponElt === place xWeapon & yWeapon dans le tableau
    */

    for (var i = 0; i < 1; i++) {
        var xWeapon = Math.ceil(Math.random() * 10),
            yWeapon = Math.ceil(Math.random() * 10),

            weaponElt = document.querySelector(".cell[X='" + xWeapon + "'][Y='" + yWeapon + "']");

        if (weaponElt.getAttribute("type") === "") {
            weaponElt.setAttribute("type", "weapon");
            weaponElt.setAttribute("weapon", "weapon" + 1);
            weaponElt.classList.add(game.weaponsBoard["weapon" + 1].cssClass)
        } else {
            i--
        };
    };

    for (var i = 0; i < 1; i++) {
        var xWeapon = Math.ceil(Math.random() * 10),
            yWeapon = Math.ceil(Math.random() * 10),

            weaponElt = document.querySelector(".cell[X='" + xWeapon + "'][Y='" + yWeapon + "']");

        if (weaponElt.getAttribute("type") === "") {
            weaponElt.setAttribute("type", "weapon");
            weaponElt.setAttribute("weapon", "weapon" + 2);
            weaponElt.classList.add(game.weaponsBoard["weapon" + 2].cssClass)
        } else {
            i--
        };
    };

    for (var i = 0; i < 1; i++) {
        var xWeapon = Math.ceil(Math.random() * 10),
            yWeapon = Math.ceil(Math.random() * 10),

            weaponElt = document.querySelector(".cell[X='" + xWeapon + "'][Y='" + yWeapon + "']");

        if (weaponElt.getAttribute("type") === "") {
            weaponElt.setAttribute("type", "weapon");
            weaponElt.setAttribute("weapon", "weapon" + 3);
            weaponElt.classList.add(game.weaponsBoard["weapon" + 3].cssClass)
        } else {
            i--
        };
    };

    for (var i = 0; i < 1; i++) {
        var xWeapon = Math.ceil(Math.random() * 10),
            yWeapon = Math.ceil(Math.random() * 10),

            weaponElt = document.querySelector(".cell[X='" + xWeapon + "'][Y='" + yWeapon + "']");

        if (weaponElt.getAttribute("type") === "") {
            weaponElt.setAttribute("type", "weapon");
            weaponElt.setAttribute("weapon", "weapon" + 4);
            weaponElt.classList.add(game.weaponsBoard["weapon" + 4].cssClass)
        } else {
            i--
        };
    };
};

game.map.addMap();