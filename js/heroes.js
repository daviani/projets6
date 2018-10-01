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
        cssCLass: "freydis"
    };

    game.heroes[2] = {
        name: "Harald Sigurdsson",
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
    var activeTurn = document.getElementsByClassName("info" + game.heroes.turn),
        inactiveTurn = document.getElementById("info" + game.heroes.turn === 1) ? 2 : 1,

        health1 = document.getElementById("health1"),
        power1 = document.getElementById("power1"),
        weaponName1 = document.getElementById("weapon1"),

        health2 = document.getElementById("health2"),
        power2 = document.getElementById("power2"),
        weaponName2 = document.getElementById("weapon2");

    if (activeTurn) {
        $(activeTurn).css('opacity', 1);
    } else if (inactiveTurn) {
        $(inactiveTurn).css('opacity', 0.6)
    }


    health1.innerHTML = "-" + game.heroes[1].health + "-";
    power1.innerHTML = "-" + game.weaponsBoard[game.heroes[1].weapon].power + "-";
    weaponName1.innerHTML = "-" + game.weaponsBoard[game.heroes[1].weapon].name + "-";

    health2.innerHTML = "-" + game.heroes[2].health + "-";
    power2.innerHTML = "-" + game.weaponsBoard[game.heroes[2].weapon].power + "-";
    weaponName2.innerHTML = "-" + game.weaponsBoard[game.heroes[2].weapon].name + "-";
};

//-INFO-_________________________________________________________________________________
game.heroes.info = function () {

    if (game.heroes[1].health <= 0) {
        alert("Freydís Eiríksdóttir is dead, click on OK to restart the game");
        game.new()
    };

    if (game.heroes[2].health <= 0) {
        alert("Harald Sigurdsson is dead, click on OK to restart the game");
        game.new()
    };
};

//-CHANGE WEAPON-_________________________________________________________________________________
game.heroes.changeWeapon = function (elt, nb) {
    console.log(elt);
    console.log(nb);

    var replace = elt[nb].getAttribute("weapon"),
        activeTurn = game.heroes.turn,
        updatePower = document.getElementById("power" + activeTurn),
        updateName = document.getElementById("weapon" + activeTurn);
    if (game.heroes[activeTurn].weapon === "weapon0") {
        elt[nb].classList.remove(game.weaponsBoard[elt[nb].getAttribute("weapon")].cssCLass);
        elt[nb].setAttribute("weapon", "");
        elt[nb].setAttribute("type", "");
        game.heroes[activeTurn].weapon = replace;

        //maj DOM info
        updatePower.innerHTML = "-" + game.weaponsBoard[game.heroes[activeTurn].weapon].power + "-";
        updateName.innerHTML = "-" + game.weaponsBoard[game.heroes[activeTurn].weapon].name + "-";
    } else {
        elt[nb].classList.remove(game.weaponsBoard[elt[nb].getAttribute("weapon" + activeTurn)].cssCLass);
        elt[nb].classList.add(game.weaponsBoard[game.heroes[activeTurn].weapon].cssCLass);

        elt[nb].setAttribute("weapon", game.heroes[activeTurn].weapon);
        elt[nb].setAttribute("type", "weapon");

        game.heroes[activeTurn].weapon = replace;

        updatePower.innerHTML = "-" + game.weaponsBoard[game.heroes[activeTurn].weapon].power + "-";
        updateName.innerHTML = "-" + game.weaponsBoard[game.heroes[activeTurn].weapon].name + "-";
    };
};



/*    var replace = elt[nb].getAttribute("weapon"),
        activeTurn = game.heroes.turn,
        updatePower = document.getElementById("power" + activeTurn),
        updateName = document.getElementById("weapon" + activeTurn);

    if (game.heroes[activeTurn].weapon === "weapon0") {
        elt[nb].classList.remove(game.weaponsBoard[elt[nb].getAttribute("weapon")].cssClass);
        elt[nb].setAttribute("weapon", "");
        elt[nb].setAttribute("type", "");
        game.heroes[activeTurn].weapon = replace;

        updatePower.innerHTML = "-" + game.weaponsBoard[game.heroes[activeTurn].weapon].power + "-";
        updateName.innerHTML = "-" + game.weaponsBoard[game.heroes[activeTurn].weapon].name + "-";
    } else {
        elt[nb].classList.remove(game.weaponsBoard[elt[nb].getAttribute("weapon")].cssClass);
        elt[nb].classList.add(game.weaponsBoard[game.heroes[activeTurn].weapon].cssClass);

        elt[nb].setAttribute("weapon", game.heroes[activeTurn].weapon);
        elt[nb].setAttribute("type", "weapon");

        game.heroes[activeTurn].weapon = replace;

        updatePower.innerHTML = "-" + game.weaponsBoard[game.heroes[activeTurn].weapon].power + "-";
        updateName.innerHTML = "-" + game.weaponsBoard[game.heroes[activeTurn].weapon].name + "-";
    };*/
/*
    var change = elt[nb].getAttribute("weapon"), // Stock pour le changement
        turn = game.heroes.turn,
        updateWPower = document.getElementById("power" + turn),
        updateWName = document.getElementById("weapon" + turn);
    console.log(turn)

    var replace = elt[nb].getAttribute("weapon");
    if (game.heroes[turn].weapon === "weapon0") {
        elt[nb].setAttribute("weapon", "");
        elt[nb].setAttribute("type", "");
        game.heroes[turn].weapon = change;

        var updateWPower = document.getElementById("power" + turn),
            updateWName = document.getElementById("weapon" + turn);

        updateWPower.innerHTML = "-" + game.weaponsBoard[game.heroes[turn].weapon].power + "-";
        updateWName.innerHTML = "-" + game.weaponsBoard[game.heroes[turn].weapon].name + "-";
    } else {
        elt[nb].classList.remove(game.weaponsBoard[elt[nb].getAttribute("weapon")].cssCLass);
        elt[nb].classList.add(game.weaponsBoard[game.heroes[turn].weapon].classList);

        elt[nb].setAttribute("weapon", game.heroes[turn].weapon);
        elt[nb].setAttribute("type", "weapon");

        game.heroes[game.heroes.turn].weapon = replace;

        updateWPower.innerHTML = "-" + game.weaponsBoard[game.heroes[turn].weapon].power + "-";
        updateWName.innerHTML = "-" + game.weaponsBoard[game.heroes[turn].weapon].name + "-";
    };
*/



//-FIGHT ATTACK-_________________________________________________________________________________
game.heroes.attack = function (escape) {
    var activeTurn = game.heroes.turn,
        inactiveTurn = (activeTurn === 1) ? 2 : 1;
    if (escape) {
        var escapeHealth = game.heroes[activeTurn].health,
            escapePower = game.weaponsBoard[game.heroes[escape].weapon].power + 40;

        escapeHealth -= escapePower;
        game.heroes[activeTurn].health = escapeHealth;

        //update DOM :
        var healthId = document.getElementById("health" + activeTurn);
        healthId.innerHTML = "- " + escapeHealth + " -";
        alert(game.heroes[activeTurn].name + " runs away, the deceitful " + game.heroes[inactiveTurn].name + " takes advantage of it to hit him in the back!");
    } else {
        game.heroes[activeTurn].posture = "attack";
        var power = game.weaponsBoard[game.heroes[activeTurn].weapon].power;
        var inactiveHealth = game.heroes[inactiveTurn].health;
        if (game.heroes[inactiveTurn].posture === "defence") {
            power /= 2;
            inactiveHealth -= power;
            game.heroes[inactiveTurn].health = inactiveHealth;

            var inactiveHealthId = document.getElementById("health" + inactiveTurn);
            inactiveHealthId.innerHTML = "-" + inactiveHealth + "-";
        } else {
            inactiveHealth -= power;
            game.heroes[inactiveTurn].health = inactiveHealth;
            inactiveHealthId.innerHTML = "-" + inactiveHealth + "-";
        };
        game.move.deleteMove();
        inactiveTurn = (activeTurn === 1) ? 2 : 1;
        game.update();
    }






    /*
    var activeTurn = game.heroes.turn,
        inactiveTurn = (activeTurn === 1) ? 2 : 1,
        escapeHealth = game.heroes[activeTurn].health,
        power = game.weaponsBoard[game.heroes[escape].weapon].power,
        escapePower = game.weaponsBoard[game.heroes[escape].weapon].power + 40,
        health = document.getElementById("health" + activeTurn),
        eltHealth = document.getElementById("health" + inactiveTurn);

    if (escape) { // si fuite, joeurs fuiyard reçois une punitions
        escapeHealth -= escapePower;
        game.heroes[activeTurn].health = escapeHealth;
    } else {
        game.heroes[activeTurn].posture = "attack";
        power;
        health;
        if (game.heroes[inactiveTurn].posture === "defence") {
            power /=2;
            health -= power;
            game.heroes[inactiveTurn].health = health;
        }
    }
*/
    /*var turn = game.heroes.turn,
        newTurn = (game.heroes.turn === 1) ? 2 : 1;

    if (away) { // === fuite
        var awayHealth = game.heroes[turn].health,
            power = game.weaponsBoard[game.heroes[away].weapon].power + 30;
        awayHealth -= power;
        game.heroes[turn].health = awayHealth;

        //update dom info
        var health = document.getElementById("health" + turn);
        health.innerHTML = "- " + awayHealth + " -";
    } else {
        game.heroes[turn].posture = "attack";

        var power = game.weaponsBoard[game.heroes[espace].weapon].power,
            health = game.hereos[newTurn].health;
        if (game.heroes[newTurn].posture === "defence") {
            power /= 2;
            health -= power;
            game.heroes[newTurn].health = health;
            var eltHealth = document.getElementById("health" + newTurn);
            eltHealth.innerHTML = "-" + health + "-";
        } else {
            health -= power;
            game.heroes[newTurn].health = health;
            var eltHealth = document.getElementById("health" + newTurn);
            eltHealth.innerHTML = "-" + health + "-";
        };
        game.move.deleteMove();
        turn = (turn === 1) ? 2 : 1;
        game.update;
    };*/
};

//-FIGHT DEFENCE-_________________________________________________________________________________
game.heroes.defence = function () {
    game.heroes[game.heroes.turn].posture = "defence";
    game.move.deleteMove();
    game.heroes.turn = (game.heroes.turn === 1) ? 2 : 1;
    game.update();
};