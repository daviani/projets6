var game = {} //constructor

game.new = function () {

    game.map.addMap();
    game.map.addWall();
    game.map.addWeapon();
    game.heroes.addHeroes();
    //alert(game.heroes[game.heroes.turn].name + " begins the duel without honor ")
    game.update();
}

game.update = function () {
    game.heroes.info();
    game.move.classMove();
}

