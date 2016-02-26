(function() {
	function ActiveCtrl($scope, $firebaseArray) {

		var taskData = new Firebase("https://pk-bloc-it-off.firebaseio.com/");

		$scope.data = $firebaseArray(taskData);

	}

	angular
		.module('BlocItOff')
		.controller('ActiveCtrl', ['$scope', '$firebaseArray', ActiveCtrl]);
})();
