(function() {
     function ActiveCtrl($firebaseArray, Message) {
         this.title = "Active Tasks";
         this.allMessages = Message.key();
         this.Message = Message;

     }


    angular
        .module('blocItOff')
        .controller('ActiveCtrl', ActiveCtrl);
 })();
