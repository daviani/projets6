game.move = {} // constructor


//-ADD MOVECLASS-________________________________________________________________________________
/*
@currentHeroes === select the heroes whose turn it is 
@xClassMove === coordonate X classMove
@yClassMove === coordonate X classMove
@eltRight === define the cells on the right on which classMove applies
@eltLeft === define the cells on the left on which classMove applies
@eltUp === define the cells on the up on which classMove applies
@eltDown === define the cells on the down on which classMove applies
*/
game.move.classMove = function () {

    var currentHeroes = game.heroes.turn,
        xClassMove = parseInt(game.heroes[currentHeroes].xPosition),
        yClassMove = parseInt(game.heroes[currentHeroes].yPosition);
    //right --------------------------------------------------------------------------------------
    for (var i = 1; i < 4; i++) {
        var elt = document.querySelector(".cell[X='" + (xClassMove + i) + "'][Y='" + yClassMove + "']")
        if (elt) {
            if ((elt.getAttribute("type") === "wall") || (elt.getAttribute("type") === "heroes")) {
                break;
            } else if ((elt.getAttribute("type") === "") || (elt.getAttribute("type") === "weapon")) {
                if (elt.getAttribute("type") === "") {
                    elt.setAttribute("type", "move");
                } else if (elt.getAttribute("type") === "weapon") {
                    elt.setAttribute("type", "move + weapon");
                };
                elt.classList.add("move" + currentHeroes);
                elt.addEventListener("click", game.move.clickMove, false);
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

    //test fight? --------------------------------------------------------------------------------------
    var eltRightFight = document.querySelector(".cell[X='" + (xClassMove + 1) + "'][Y='" + yClassMove + "']"),
        eltLeftFight = document.querySelector(".cell[X='" + (xClassMove - 1) + "'][Y='" + yClassMove + "']"),
        eltUpFight = document.querySelector(".cell[X='" + xClassMove + "'][Y='" + (yClassMove + 1) + "']"),
        eltDownFight = document.querySelector(".cell[X='" + xClassMove + "'][Y='" + (yClassMove - 1) + "']");

        if (eltRightFight) {
            if(eltRightFight.getAttribute("type") === "heroes") {
                game.heroes.fight = true;
            };
        };
        if (eltLeftFight) {
            if(eltLeftFight.getAttribute("type") === "heroes") {
                game.heroes.fight = true;
            };
        };
        if (eltUpFight) {
            if(eltUpFight.getAttribute("type") === "heroes") {
                game.heroes.fight = true;
            };
        };
        if (eltDownFight) {
            if(eltDownFight.getAttribute("type") === "heroes") {
                game.heroes.fight = true;
            };
        };

        var buttonAttack = document.getElementById("attack"),
        buttonDefence = document.getElementById("defence");
};

//-MOVEMENT -________________________________________________________________________________
/*
@escape === variable that is used to change turns in case of a flight during combat
@currentHeroes === select the heroes whose turn it is

@xMove0 === Original X positions 
@yMove0 === Original Y positions 
@eltMove0 === definitions of the values of the variables xMove0 and yMove0 on the board

@xMove1 === Final X positions
@yMove1 === Final Y positions
@eltMove1 === definitions of the values of the variables xMove1 and yMove1 on the board

@xMove === is equal to the end position minus the original position of the X axis
@yMove === is equal to the end position minus the original position of the Y axis
@eltXMove === selects all cells of the X axis
@eltYMove === selects all cells of the Y axis
*/

game.move.movement = function (e) {


};

//-CLICK MOVE-________________________________________________________________________________
game.move.clickMove = function (e) {
    game.move.deleteMove();
    game.move.movement(e);
};

//-DELETE MOVE-________________________________________________________________________________
game.move.deleteMove = function () {



};