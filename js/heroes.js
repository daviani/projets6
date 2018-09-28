game.heroes = {};
game.heroes.turn = 0;
game.heroes.fight = false;

/*-CREATE HEROES-_________________________________________________________________________________ */
game.heroes.createHeroes = function () {
    game.heroes[1] = {
        name: "Freydís Eiríksdóttir",
        health: 100,
        xHeroes: 0,
        yHeroes: 0,
        weapon: "weapon0",
        posture: "defence",
        cssCLass: "freydis"
    };

    game.heroes[2] = {
        name: "harald sigurdsson",
        health: 100,
        xHeroes: 0,
        yHeroes: 0,
        weapon: "weapon0",
        posture: "defence",
        cssCLass: "harald"
    };


    for (var i = 1; i < 3; i++) {
        console.log("heroes")
        var xPos = parseInt(Math.ceil(Math.random() * 10)),
            yPos = parseInt(Math.ceil(Math.random() * 10));
        game.heroes[i].xHeroes = xPos;
        game.heroes[i].yHeroes = yPos;

        var elt1 = document.querySelector(".cell[X= '" + xPos + "'][Y='" + yPos + "']"),
            test = false;

        for (var j = -1; j < 2; j++) {
            for (var k = -1; k < 2; k++) {
                var elt2 = document.querySelector(".cell[X ='" + (xPos - j) + "'][Y='" + yPos + "']");
                if (elt2) {
                    if (elt2.getAttribute("type") === "heroes") {
                        test = true;
                    };
                };
            };
        };

        if ((elt1.getAttribute("type") !== "") || (elt1.getAttribute("type") === "weapon")) {
            i--;
        } else if (test) { // si il y a un joueur sur une cell adajacante , on relance itération
            i--
        } else {
            elt1.setAttribute("type", "heroes");
            elt1.classList.add(game.heroes[i].cssCLass)
        };
    };

    game.heroes.turn = Math.ceil(Math.random() + 1);

    // TO BE CONTINUED ...........................................................................

}

/*-MOVE-_______________________________________________________________________________________ */
game.heroes.move = function (e) {

};

/*-INFO-__________________________________________________________________________________________ */
game.heroes.info = function () {

};

/*-CHANGE WEAPON-_________________________________________________________________________________ */
game.heroes.changeWeapon = function () {

};

/*-ATTACK-_________________________________________________________________________________ */
game.heroes.attack = function () {

};

/*-DEFENCE-_________________________________________________________________________________ */
game.heroes.defence = function () {

};