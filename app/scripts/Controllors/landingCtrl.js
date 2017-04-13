(function() {
    function landingCtrl($uibModal, Room) {
        this.rooms = Room.all;
        this.open= function(){
            var modalInstance =  $uibModal.open({
                 templateUrl: 'templates/modal.html',
                 controller: 'ModalCtrl';
            })
       
    }
         };
                                                
    
    angular
        .module('blocChat')
        .controller('landingCtrl', ["$uibModal", "Room", landingCtrl]);
})();
        
        
    