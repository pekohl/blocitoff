app.controller("BlocItOff", function($scope, $firebaseObject) {
  var ref = new Firebase("https://pk-bloc-it-off.firebaseio.com/");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work
});
