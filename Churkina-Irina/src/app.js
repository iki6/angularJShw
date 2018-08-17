
var btnsApp = angular.module('angularHW', []);

var mainCtrlFunc = function(){
	this.shownPet;
};

mainCtrlFunc.prototype.showDog = function() {
	this.shownPet = 'Dog';
};

mainCtrlFunc.prototype.showCat = function() {
	this.shownPet = 'Cat';
};

btnsApp.directive('petType', function(){
	return {
		controller: mainCtrlFunc,
		controllerAs: 'ctrl',
		template: '<span>This is a {{ctrl.shownPet}} :)</span>'
	}
})

btnsApp.controller('mainCtrl', mainCtrlFunc);

btnsApp.controller('dogCtrl', function($scope){
	this.petType = 'Dog';
	this.says = 'woof woof';
})

btnsApp.controller('catCtrl', function($scope){
	this.petType = 'Cat';
	this.says = 'meow meow meow';
})