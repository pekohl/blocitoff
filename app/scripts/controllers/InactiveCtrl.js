(function() {
     function InactiveCtrl($firebaseArray) {

//app.controller("BlocItOff", function($scope, $firebaseObject) {
         var ref = new Firebase("https://pk-bloc-it-off.firebaseio.com/");
  // download the data into a local object
         var currentMessageRef = ref.child('currentMessage'); //location of database holding latest message
         var allMessagesRef = ref.child('allMessages');
//  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work
});
