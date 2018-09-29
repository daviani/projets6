game.move = {} // constructor


//-ADD CLASS MOVE-________________________________________________________________________________
/*
@currentHeroes === select the heroes whose turn it is 
@xClassMove === coordonate X classMove
@yClassMove === coordonate X classMove
@eltRight === define the cells on the right on which classMove applies
@eltLeft === define the cells on the left on which classMove applies
@eltUp== define the cells on the up on which classMove applies
@eltDown== define the cells on the down on which classMove applies
*/

game.move.classMove = function () {

    var currentHeroes = game.heroes.turn,
        xClassMove = parseInt(game.heroes[currentHeroes].xPosition),
        yClassMove = parseInt(game.heroes[currentHeroes].yPosition);

    //right --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var eltRight = document.querySelector(".cell[X='" + (xClassMove + i) + "'][Y='" + yClassMove + "']")
        if (eltRight) {
            if ((eltRight.getAttribute("type") === "wall") || (eltRight.getAttribute("type") === "heroes")) {
                break;
            } else if ((eltRight.getAttribute("type") === "") || (eltRight.getAttribute("type") === "weapon")) {
                if (eltRight.getAttribute("type") === "") {
                    eltRight.setAttribute("type", "move");
                } else if (eltRight.getAttribute("type") === "weapon") {
                    eltRight.setAttribute("type", "move + weapon");
                };
                eltRight.classList.add("move" + currentHeroes);
                eltRight.addEventListener("click", game.move.clickMove, false);
            };
        };
    };
    // left -------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var eltLeft = document.querySelector(".cell[X='" + (xClassMove - i) + "'][Y='" + yClassMove + "']");
        if (eltLeft) {
            if ((eltLeft.getAttribute("type") === "wall") || (eltLeft.getAttribute("type") === "heroes")) {
                break;
            } else if ((eltLeft.getAttribute("type") === "") || (eltLeft.getAttribute("type") === "weapon")) {
                if (eltLeft.getAttribute("type") === "") {
                    eltLeft.setAttribute("type", "move");
                } else if (eltLeft.getAttribute("type") === "weapon") {
                    eltLeft.setAttribute("type", "move + weapon");
                };
                eltLeft.classList.add("move" + currentHeroes);
                eltLeft.addEventListener("click", game.move.clickMove, false);
            };
        };
    };

    //up ----------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var eltUp = document.querySelector(".cell[X='" + xClassMove + "'][Y='" + (yClassMove + i) + "']");
        if (eltUp) {
            if ((eltUp.getAttribute("type") === "wall") || (eltUp.getAttribute("type") === "heroes")) {
                break;
            } else if ((eltUp.getAttribute("type") === "") || (eltUp.getAttribute("type") === "weapon")) {
                if (eltUp.getAttribute("type") === "") {
                    eltUp.setAttribute("type", "move");
                } else if (eltUp.getAttribute("type") === "weapon") {
                    eltUp.setAttribute("type", "move + weapon");
                };
                eltUp.classList.add("move" + currentHeroes);
                eltUp.addEventListener("click", game.move.clickMove, false);
            };
        };
    };

    //down --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var eltDown = document.querySelector(".cell[X='" + xClassMove + "'][Y='" + (yClassMove - i) + "']");
        if (eltDown) {
            if ((eltDown.getAttribute("type") === "wall") || (eltDown.getAttribute("type") === "heroes")) {
                break;
            } else if ((eltDown.getAttribute("type") === "") || (eltDown.getAttribute("type") === "weapon")) {
                if (eltDown.getAttribute("type") === "") {
                    eltDown.setAttribute("type", "move");
                } else if (eltDown.getAttribute("type") === "weapon") {
                    eltDown.setAttribute("type", "move + weapon");
                };
                eltDown.classList.add("move" + currentHeroes);
                eltDown.addEventListener("click", game.move.clickMove, false);
            };
        };
    };

    //fight ?? ----------------------------------------------------------------------------------
    var elt1 = document.querySelector(".cell[X='" + xClassMove + "'][Y='" + (yClassMove - 1) + "']"),
        elt2 = document.querySelector(".cell[X='" + xClassMove + "'][Y='" + (yClassMove + 1) + "']"),
        elt3 = document.querySelector(".cell[X='" + (xClassMove - 1) + "'][Y='" + yClassMove + "']"),
        elt4 = document.querySelector(".cell[X='" + (xClassMove + 1) + "'][Y='" + yClassMove + "']");

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

    if (game.heroes.fight === true) {
        buttonAttack.disable = false;
        buttonAttack.style.backgroundColor = "#365B61";
        buttonAttack.style.color = "#DDD7C0";
        buttonDefence.disable =false;
        buttonDefence.style.backgroundColor = "#365B61";
        buttonDefence.style.color = "##DDD7C0";
    } else {
        buttonAttack.disable = true;
        buttonDefence.disable = true;
    }
};

//-MOVEMENT -________________________________________________________________________________
game.move.movement = function (e) {

    if (game.heroes.fight === true) {
        var escape = (game.heroes.turn === 1) ? 2 : 1;
        game.heroes.attack(escape);
        game.heroes.fight = false;
    };

    var currentHeroes = game.heroes.turn,

        // initiale coordinate-------------------------------------------------------------------------
        xMove0 = parseInt(game.heroes[currentHeroes].xPosition),
        yMove0 = parseInt(game.heroes[currentHeroes].yPosition),
        eltMove0 = document.querySelector(".cell[X='" + xMove0 + "'][Y='" + yMove0 + "']"),

        //final coordinate --------------------------------------------------------------------------
        xMove1 = parseInt(e.target.getAttribute("X")),
        yMove1 = parseInt(e.target.getAttribute("Y")),
        eltMove1 = document.querySelector(".cell[X= '" + xMove1 + "'][Y = '" + yMove1 + "']"),

        //weapon Test on the road --------------------------------------------------------------------
        xMove = xMove1 - xMove0,
        yMove = yMove1 - yMove0,
        eltXMove = document.querySelectorAll(".cell[X= '" + xMove0 + "']"),
        eltYMove = document.querySelectorAll(".cell[Y= '" + yMove0 + "']");

    if (xMove > 0) {
        for (var i = 0; i < xMove; i++) {
            if (eltYMove[xMove1 - 1 - i].getAttribute("type") === "weapon") {
                game.heroes.changeWeapon(eltYMove, (xMove1 - 1 - i));
            };
        };
    } else if (xMove < 0) {
        for (var i = 0; i < -xMove; i++) {
            if (eltYMove[xMove1 - 1 + i].getAttribute("type") === "weapon") {
                game.heroes.changeWeapon(eltYMove, (xMove - 1 + i));
            };
        };
    } else if (yMove > 0) {
        for (var i = 0; i < yMove; i++) {
            if (eltXMove[yMove1 - 1 - i].getAttribute("type") === "weapon") {
                game.heroes.changeWeapon(eltXMove, (yMove - 1 - i));
            };
        };
    } else if (yMove < 0) {
        for (var i = 0; i < -yMove; i++) {
            if (eltXMove[yMove1 - 1 + i].getAttribute("type") === "weapon") {
                game.heroes.changeWeapon(eltXMove, (xMove - 1 + i))
            };
        };
    };

    // attribute heroes class ---------------------------------------------------------------------------------------------
    if (eltMove0 && eltMove1) {

        if (eltMove1.getAttribute("type") === "weapon") { // if final cell === weapon
            eltMove1.setAttribute("type", "heroes+weapon");
            eltMove1.classList.remove(game.heroes[eltMove1.getAttribute("weapon")].cssCLass);
            eltMove1.classList.add(game.heroes[currentHeroes].cssCLass);
        } else {
            eltMove1.setAttribute("type", "heroes");
            eltMove1.classList.add(game.heroes[currentHeroes].cssCLass);
        };

        if (eltMove0.getAttribute("type") === "heroes+weapon") { // initial cell type === weapon+heroes
            eltMove0.setAttribute("type", "weapon");
            eltMove0.classList.remove(game.heroes[currentHeroes].cssCLass);
            eltMove0.classList.add(game.heroes[eltMove0.getAttribute("weapon")].cssCLass);
        } else {
            eltMove0.setAttribute("type", "");
            eltMove0.classList.remove(game.heroes[currentHeroes].cssCLass)
        };

        game.heroes[currentHeroes].xPosition = xMove1;
        game.heroes[currentHeroes].yPosition = yMove1;
    };

    game.heroes[game.heroes.turn].action = "defence"; //fight === false
    game.heroes.turn = (game.heroes.turn === 1) ? 2 : 1; // turn next
    game.update();
};

//-CLICK MOVE-________________________________________________________________________________
game.move.clickMove = function (e) {
    game.move.deleteMove();
    game.move.movement(e);
};

//-DELETE MOVE-________________________________________________________________________________
game.move.deleteMove = function () {


    var currentHeroes = game.heroes.turn,
        xDelete = parseInt(game.heroes[currentHeroes].xPosition),
        yDelete = parseInt(game.heroes[currentHeroes].yPosition);

    //right --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + (xDelete + i) + "'][Y='" + yDelete + "']");
        if (elt) {
            if (elt.getAttribute("type") === ("move")) {
                elt.setAttribute("type", "");
                elt.classList.remove("move" + currentHeroes);
                elt.removeEventListener("click", game.move.clickMove, false);
            } else if (elt.getAttribute("type") === ("move + weapon")) {
                elt.setAttribute("type", "weapon");
                elt.classList.remove("move" + currentHeroes);
                elt.removeEventListener("click", game.move.clickMove, false);
            };
        };
    };
    //left --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + (xDelete - i) + "'][Y='" + yDelete + "']");
        if (elt) {
            if (elt.getAttribute("type") === ("move")) {
                elt.setAttribute("type", "");
                elt.classList.remove("move" + currentHeroes)
            } else if (elt.getAttribute("type") === ("move + weapon")) {
                elt.setAttribute("type", "weapon");
                elt.classList.remove("move" + currentHeroes);
                elt.removeEventListener("click", game.move.clickMove, false)
            };
        };
    };

    //up --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + xDelete + "'][Y='" + (yDelete + i) + "']");
        if (elt) {
            if (elt.getAttribute("type") === ("move")) {
                elt.setAttribute("type", "");
                elt.classList.remove("move" + currentHeroes)
            } else if (elt.getAttribute("type") === ("move + weapon")) {
                elt.setAttribute("type", "weapon");
                elt.classList.remove("move" + currentHeroes);
                elt.removeEventListener("click", game.move.clickMove, false)
            };
        };
    };

    //down --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + xDelete + "'][Y='" + (yDelete - i) + "']");
        if (elt) {
            if (elt.getAttribute("type") === ("move")) {
                elt.setAttribute("type", "");
                elt.classList.remove("move" + currentHeroes)
            } else if (elt.getAttribute("type") === ("move + weapon")) {
                elt.setAttribute("type", "weapon");
                elt.classList.remove("move" + currentHeroes);
                elt.removeEventListener("click", game.move.clickMove, false)
            };
        };
    };

};