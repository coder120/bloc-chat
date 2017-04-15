(function() {
    function ModalCtrl($uibModalInstance){
       this.text = "";

        this.submit = function(){
            $uibModalInstance.close(text);
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl])
})();