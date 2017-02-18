(function() {
    'use strict';

    angular
        .module('hello')
        .controller('TopicController', TopicController);

    TopicController.$inject = ['$http'];

    function TopicController ($http) {
        var vm = this;

       console.log('greeting from topic.controller');
       
       $http.get('/mytopic/').then(function(response) {
			vm.toptop= response.data;
			
       })
        
    }
})();