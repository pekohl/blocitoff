(function () {
	function ActiveCtrl($scope, $firebaseArray) {

		var ref = new Firebase("https://pk-bloc-it-off.firebaseio.com/");

		$scope.task = $firebaseArray(ref);

	}

	angular
		.module('BlocItOff')
		.controller('ActiveCtrl', ['$scope', '$firebaseArray', ActiveCtrl]);
})();
