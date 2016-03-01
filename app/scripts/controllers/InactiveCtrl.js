(function () {
	function InactiveCtrl() {

        var rootref = new Firebase("https://pk-bloc-it-off.firebaseio.com/");


	}

	angular
		.module('BlocItOff')
		.controller('InactiveCtrl', InactiveCtrl);
})();
