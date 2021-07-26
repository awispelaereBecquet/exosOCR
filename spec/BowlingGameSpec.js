describe("BowlingGame", function() {
    var game;

    beforeEach(function(){
        game = new BowlingGame();
    });

    function rollMany (n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins)
        }
    }

    it("should handle a gutter game", function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });
    
    it("should properly calculate a strike", function () {
        rollMany(20, 12);
		console.log('test rollMany 20, 12 game.score(): ', game.score() )
        expect(game.score()).toEqual(240);
    });
    
    it("should properly calculate a spare", function () {
        rollMany(20, 10);
		console.log('test rollMany 20, 10 game.score(): ', game.score() )
        expect(game.score()).toEqual(200);
    });

});
