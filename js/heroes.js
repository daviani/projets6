game.heroes = {} // constructor 
game.heroes.turn = 0;
game.heroes.fight = false;

//-ADD HEROES-_________________________________________________________________________________
/*
@Board of heroes
@xHeroes === coordonate X Heroes (Board = yPosition)
@yHeroes === coordonate Y Heroes (Board = yPosition)
@EltHeroes1 === define a cell using the values of the variables xHeroes & yHeroes
@testHeroes2 === test variable to check the presence of a hero next to it!
@health1 & health2 === additional information DOM health
@power1 & power2 === additional information DOM weapon damage
@weaponName1 & weaponName2 === additional information DOM weapon name 
*/
game.heroes.addHeroes = function () {
    game.heroes[1] = {
        name: "Freydís Eiríksdóttir",
        health: 100,
        xPosition: 0,
        yPosition: 0,
        weapon: "weapon0",
        posture: "defence",
        cssCLass: "freydis"
    };

    game.heroes[2] = {
        name: "harald sigurdsson",
        health: 100,
        xPosition: 0,
        yPosition: 0,
        weapon: "weapon0",
        posture: "defence",
        cssCLass: "harald"
    };

    for (var i = 1; i < 3; i++) {
        var xHeroes = parseInt(Math.ceil(Math.random() * 10)),
            yHeroes = parseInt(Math.ceil(Math.random() * 10));
        game.heroes[i].xPosition = xHeroes;
        game.heroes[i].yPosition = yHeroes;

        var EltHeroes1 = document.querySelector(".cell[X= '" + xHeroes + "'][Y='" + yHeroes + "']"),
            testHeroes = false;

        for (var j = -1; j < 2; j++) {
            for (var k = -1; k < 2; k++) {
                var eltHeroes2 = document.querySelector(".cell[X ='" + (xHeroes - j) + "'][Y='" + yHeroes + "']");
                if (eltHeroes2) {
                    if (eltHeroes2.getAttribute("type") === "heroes") {
                        testHeroes = true;
                    };
                };
            };
        };

        if ((EltHeroes1.getAttribute("type") !== "") || (EltHeroes1.getAttribute("type") === "weapon")) {
            i--;
        } else if (testHeroes) {
            i--
        } else {
            EltHeroes1.setAttribute("type", "heroes");
            EltHeroes1.classList.add(game.heroes[i].cssCLass)
        };
    };

    game.heroes.turn = Math.round(Math.random() + 1);


    // add DOM main info-------------------------------------------------------------------------
    var currentTurn = document.getElementsByClassName("info" + game.heroes.turn),

        health1 = document.getElementById("health1"),
        power1 = document.getElementById("power1"),
        weaponName1 = document.getElementById("weapon1"),

        health2 = document.getElementById("health2"),
        power2 = document.getElementById("power2"),
        weaponName2 = document.getElementById("weapon2");

    $(currentTurn).css('opacity', 1);
        //TO BZ CONITNUED ..........................................................FUNCTION OPACITY PLAYER

    $('health1').append("-" + game.heroes[1].health + "-")
    //health1.innerHTML = "-" + game.heroes[1].health + "-";
    power1.innerHTML = "-" + game.weaponsBoard[game.heroes[1].weapon].damage + "-";
    weaponName1.innerHTML = "-" + game.weaponsBoard[game.heroes[1].weapon].name + "-";

    health2.innerHTML = "-" + game.heroes[2].health + "-";
    power2.innerHTML = "-" + game.weaponsBoard[game.heroes[2].weapon].damage + "-";
    weaponName2.innerHTML = "-" + game.weaponsBoard[game.heroes[2].weapon].name + "-";
};

//-INFO-_________________________________________________________________________________
game.heroes.info = function () {

    if (game.heroes[1].life <= 0) {
        alert("Freydís Eiríksdóttir is dead");
        document.getElementsByClassName("info1").style.color = "#CA0E0E"
    };

    if (game.heroes[1].life <= 0) {
        alert("Harald Sigurdsson is dead");
        document.getElementsByClassName("info2").style.color = "#CA0E0E"
    };
};

//-CHANGE WEAPON-_________________________________________________________________________________
game.heroes.weapon = function () {


};


//-FIGHT ATTACK-_________________________________________________________________________________
game.heroes.attack = function (away) {
    var turn = game.heroes.turn,
        newTurn = (game.heroes.turn === 1) ? 2 : 1;

    if (away) { // === fuite
        var awayLife = game.heroes[turn].life,
            damage = game.weaponsRack[game.heroes[away].weapon].damage + 99;
        awayLife -= damage;
        game.heroes[turn].life = awayLife;

        //update dom info
        var health = document.getElementById("health" + turn);
        health.innerHTML = "-" + awayLife + "-";
    } else {
        game.heroes[turn].posture = "attack";

        var damage = game.weaponsRack[game.heroes[turn].weapon].damage,
            health = game.hereos[newTurn].life;
        if (game.heroes[newTurn].posture === "defend") {
            damage /= 2;
            health -= damage;
            game.heroes[newTurn].health = health;
            var eltHealth = document.getElementById("health" + newTurn);
            eltHealth.innerHTML = "-" + health + "-";
        } else {
            health -= damage;
            game.heroes[newTurn].health = health;
            var eltHealth = document.getElementById("health" + newTurn);
            eltHealth.innerHTML = "-" + health + "-";
        };
        game.move.deleteMove();
        game.heroes.turn = (game.heroes.turn === 1) ? 2 : 1;
        game.update;
    };
};

//-FIGHT DEFENCE-_________________________________________________________________________________
game.heroes.attack = function () {

};