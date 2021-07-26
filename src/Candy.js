var CandyStore = function() {
    this.store = {
		Chamallows :510,
		fraisesTagada :510,
		CarambarsAuCaramel :0,
		OursonsGuimauve :0,
		TetesBrulees :0,
		Dragibus :4
	}
};

CandyStore.prototype.add = function(item,qt) {
    this.store[item] += qt;
};
CandyStore.prototype.remove = function(item,qt) {
    this.store[item] -= qt;
};
CandyStore.prototype.getItem = function(item) {
    return this.store[item];
};
