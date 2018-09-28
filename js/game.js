
var game = {};

game.new = function () {
    console.log("New fight!!!")

game.map.createMap();
game.map.createWall();
game.map.createWeapons();
game.heroes.createHeroes();

game.update();
}

game.update = function () {
    game.heroes.info();
    game.map.calculMove();
}