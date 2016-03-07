(function () {
    'use strict';

	function ActiveCtrl($scope, $firebaseArray) {

		var rootRef = new Firebase("https://pk-bloc-it-off.firebaseio.com/");


		$scope.tasks = $firebaseArray(rootRef);



        $scope.addTask = function () {
            var now = new Date();
            $scope.tasks.$add({
                text: $scope.newTaskText,
                priority: $scope.newTaskPriority,
                date: now.toUTCString()
            });
        };



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

//        function addTask() {
//			var now = new Date();
//
//			$scope.newTask.ts = now.toUTCString();
//			$scope.newTask.completed = false;
//
//			$scope.tasks.$add($scope.newTask);
//			$scope.newTask = {};
//		}

	}

    angular
		.module('BlocItOff')
		.controller('ActiveCtrl', ['$scope', '$firebaseArray',  '$firebaseObject', ActiveCtrl]);

})();
