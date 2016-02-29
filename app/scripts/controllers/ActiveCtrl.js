(function () {
	function ActiveCtrl($scope, $firebaseArray) {

		var rootRef = new Firebase("https://pk-bloc-it-off.firebaseio.com/");

		$scope.tasks = $firebaseArray(rootRef);
        $scope.newTask = {value:'', priority:''};
        $scope.currentTask = null;

//        var getTasks = function() {
//            return tasks;
//        };
//
//        var addTask = function(task) {
//            items.$add(item);
//        };
//
//        var updateTask = function(id){
//            tasks.$save(id);
//        };
//
//        var removeTask = function (id){
//            tasks.remove(id);
//        };

	}

	angular
		.module('BlocItOff')
		.controller('ActiveCtrl', ['$scope', '$firebaseArray', ActiveCtrl]);
})();
