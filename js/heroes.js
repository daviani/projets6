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
@power1 & power2 === additional information DOM weapon power
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
        cssClass: "freydis"
    };

    game.heroes[2] = {
        name: "Harald Sigurdsson",
        health: 100,
        xPosition: 0,
        yPosition: 0,
        weapon: "weapon0",
        posture: "defence",
        cssClass: "harald"
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
            EltHeroes1.classList.add(game.heroes[i].cssClass)
        };
    };

    game.heroes.turn = Math.round(Math.random() + 1);

    // add DOM main info-------------------------------------------------------------------------

    var health1 = document.getElementById("health1"),
        power1 = document.getElementById("power1"),
        weaponName1 = document.getElementById("weapon1"),

        health2 = document.getElementById("health2"),
        power2 = document.getElementById("power2"),
        weaponName2 = document.getElementById("weapon2");


    health1.innerHTML = "-" + game.heroes[1].health + "-";
    power1.innerHTML = "-" + game.weaponsBoard[game.heroes[1].weapon].power + "-";
    weaponName1.innerHTML = "-" + game.weaponsBoard[game.heroes[1].weapon].name + "-";

    health2.innerHTML = "-" + game.heroes[2].health + "-";
    power2.innerHTML = "-" + game.weaponsBoard[game.heroes[2].weapon].power + "-";
    weaponName2.innerHTML = "-" + game.weaponsBoard[game.heroes[2].weapon].name + "-";

};

//-INFO-_________________________________________________________________________________
game.heroes.info = function () {
    /*
    for the elements that are checked and updated on each turn
    */
    if (game.heroes[1].health <= 0) {
        alert("Freydís Eiríksdóttir is dead, click on OK to restart the game");
        game.heroes.fight = false;
        game.new()
    };

    if (game.heroes[2].health <= 0) {
        alert("Harald Sigurdsson is dead, click on OK to restart the game");
        game.heroes.fight = false;
        game.new()
    };

    $(".info1").fadeTo(400, 0.4);
    $(".info2").fadeTo(400, 0.4);
    $(".info" + game.heroes.turn).fadeTo(400, 1)
};

//-CHANGE WEAPON-_________________________________________________________________________________
game.heroes.changeWeapon = function (elt, nb) {
    /*
    @replace === selects the box from where the weapon will be replaced
    @updatePower === brings to light the strength of the heroes 
    @updateName === brings to light the name of the heroes' weapon
    */

    console.log(elt);
    console.log(nb);

    var replace = elt[nb].getAttribute("weapon"),
        updatePower = document.getElementById("power" + game.heroes.turn),
        updateName = document.getElementById("weapon" + game.heroes.turn);

    elt[nb].classList.remove(game.weaponsBoard[elt[nb].getAttribute("weapon")].cssClass);
    elt[nb].classList.add(game.weaponsBoard[game.heroes[game.heroes.turn].weapon].cssClass);

    elt[nb].setAttribute("weapon", game.heroes[game.heroes.turn].weapon);
    elt[nb].setAttribute("type", "weapon");

    game.heroes[game.heroes.turn].weapon = replace;

    updatePower.innerHTML = "-" + game.weaponsBoard[game.heroes[game.heroes.turn].weapon].power + "-";
    updateName.innerHTML = "-" + game.weaponsBoard[game.heroes[game.heroes.turn].weapon].name + "-";
};



//-FIGHT ATTACK-_________________________________________________________________________________
game.heroes.attack = function (escape) {
    /*
@activeTurn === select the heroes whose turn it is
@activeTurn=== select heroes whose turn it is not
@escapeHealth === select the health of the heroes on our side it's our turn
@escapeDamage === calculates the damage in case of escape of the hero
@healthId === select the html tag dedicated to the health of the heroes whose turn it is
@damage === calculates the strength of the hero whose turn it is
@inactiveHealth === finds the health of the hero whose turn it is not
@inactiveHealthId === select the html tag dedicated to the health of heroes whose turn it is not
    */
    var activeTurn = game.heroes.turn,
        inactiveTurn = (game.heroes.turn === 1) ? 2 : 1;
    if (escape) {
        var escapeHealth = game.heroes[activeTurn].health,
            escapeDamage = game.weaponsBoard[game.heroes[escape].weapon].power + 50;

        escapeHealth -= escapeDamage;
        game.heroes[activeTurn].health = escapeHealth;

        //update DOM :
        var healthId = document.getElementById("health" + activeTurn);
        healthId.innerHTML = "- " + escapeHealth + " -";
        alert(game.heroes[activeTurn].name + " runs away, the deceitful " + game.heroes[inactiveTurn].name + " takes advantage of it to hit him in the back!");
    } else {
        game.heroes[activeTurn].posture = "attack";
        var damage = game.weaponsBoard[game.heroes[activeTurn].weapon].power;
        var inactiveHealth = game.heroes[inactiveTurn].health;
        if (game.heroes[inactiveTurn].posture === "defence") {
            damage /= 2;
            inactiveHealth -= damage;
            game.heroes[inactiveTurn].health = inactiveHealth;

            var inactiveHealthId = document.getElementById("health" + inactiveTurn);
            inactiveHealthId.innerHTML = "-" + inactiveHealth + "-";
        } else {
            inactiveHealth -= damage;
            game.heroes[inactiveTurn].health = inactiveHealth;
            var inactiveHealthId = document.getElementById("health" + inactiveTurn);
            inactiveHealthId.innerHTML = "-" + inactiveHealth + "-";
        };
        game.move.deleteMove();
        game.heroes.turn = (game.heroes.turn === 1) ? 2 : 1;
        game.update();
    };
};

//-FIGHT DEFENCE-_________________________________________________________________________________
game.heroes.defence = function () {
    game.heroes[game.heroes.turn].posture = "defence";
    game.move.deleteMove();
    game.heroes.turn = (game.heroes.turn === 1) ? 2 : 1;
    game.update();
};