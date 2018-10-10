var game = {} //constructor

game.new = function () {

    game.map.addMap();
    game.map.addWall();
    game.map.addWeapon();
    game.heroes.addHeroes();
    game.update();
}

game.update = function () {


    game.heroes.info();
    game.move.classMove();
}

