(function () {
    'use strict';

	function ActiveCtrl($scope, $firebaseArray) {

		var taskRef = new Firebase("https://pk-bloc-it-off.firebaseio.com/");


		$scope.tasks = $firebaseArray(taskRef);


        $scope.addTask = function () {
            $scope.tasks.$add({
                text: $scope.newTaskText,
                priority: $scope.newTaskPriority,
                created: Firebase.ServerValue.TIMESTAMP,
                status: 'active',
                completed: 'false'
            });
        };

        $scope.elapsedTime = function(currentTask) {
            var daysLeft = (7 - (Date.now() - currentTask.created)/86400000).toPrecision(2);
            if (daysLeft > 0) {
                return daysLeft;
            } else {
                taskRef.child(currentTask.$id).update({status: 'expired'});
                taskRef.child(currentTask.$id).update({expired: true});
                return 0
            };
        };

        $scope.completeTask = function(task) {
            if (task.status) {
                taskRef.child(task.$id).update({status: 'complete'});
            };
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
