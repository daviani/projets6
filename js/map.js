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
@nbWall === number of wall
@xWall === coordonate X Wall
@yWall === coordonate Y Wall
@WallElt === selects a cell with xWall & yWall
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
        damage: 5,
        cssClass: ""
    },
    weapon1: {
        name: "Bone Knife",
        damage: 10,
        cssClass: "knife"
    },
    weapon2: {
        name: "War Axe",
        damage: 15,
        cssClass: "axe"
    },
    weapon3: {
        name: "Ulfberth",
        damage: 20,
        cssClass: "sword"
    },
    weapon4: {
        name: "Gungnir",
        damage: 30,
        cssClass: "spear"
    }
};


//-ADD WEAPON-________________________________________________________________________________
game.map.addWeapon = function () {
    /*
    @nbWeapon === defined a number of weapons between 8 & 4
    @rdm === defined a number 1 & 4 for weapons
    @xWeapon === coordonate X Weapon
    @yWeapon === coordonate Y Weapon
    @WeaponElt === define a cell using the values of the variables : xWall & yWeapon
    */

    for (var i = 0; i < 2; i++) {
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

    for (var i = 0; i < 2; i++) {
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
}
/*
var nbWeapon = 4
for (var i = 0; i < nbWeapon; i++) {
    var rdm = Math.round((Math.random * 4) - 1),
        xWeapon = Math.ceil(Math.random() * 10),
        yWeapon = Math.ceil(Math.random() * 10),
        weaponElt = document.querySelector(".cell[X='" + xWeapon + "'][Y='" + yWeapon + "']");
console.log(rdm)
    if (weaponElt.getAttribute("type") === "") {
        weaponElt.setAttribute("type", "weapon");
        weaponElt.setAttribute("weapon", "weapon" +(rdm + 1));
        weaponElt.classList.add(game.weaponsBoard['weapon' + (rdm + 1)].cssClass);
        console.log("- " + game.weaponsBoard['weapon' + random].name + "(" + game.weaponsBoard['weapon' + random].damage + "pts)");
    } else {
        i--
    };
};
}
*/

game.map.addMap();