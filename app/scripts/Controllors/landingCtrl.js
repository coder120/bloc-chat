(function() {
    function landingCtrl(Room) {
        this.rooms = Room.all;
        
        
    }
    
   
    
    angular
        .module('blocChat')
        .controller('landingCtrl', ["Room", landingCtrl]);
})();