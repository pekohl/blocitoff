(function () {
	function InactiveCtrl() {

        var ref = new Firebase("https://pk-bloc-it-off.firebaseio.com/");


	}

	angular
		.module('BlocItOff')
		.controller('InactiveCtrl', InactiveCtrl);
})();
