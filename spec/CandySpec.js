describe("CandySpec", function() {
    
	var store;

    beforeEach(function(){
        store = new CandyStore();
    });

    it("if I subtract 20 from 510 that leaves 490", function() {
		store.remove('fraisesTagada',20)
		expect(store.getItem('fraisesTagada')).toEqual(490)
        
    });
    
    it("if I add 600 from 4 that leaves 604", function () {
        store.add('Dragibus',600)
		expect(store.getItem('Dragibus')).toEqual(604)
    });
    
    it("if I add something in items, other items not move", function () {
        store.add('Dragibus',600)
		expect(store.getItem('fraisesTagada')).toEqual(510)
    });

});
