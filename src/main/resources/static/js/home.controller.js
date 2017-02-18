(function() {
    'use strict';

    angular
        .module('hello')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];

    function HomeController ($http) {
        var vm = this;

       console.log('greeting from home.controller');
       
       $http.get('/resource/').then(function(response) {
    	   vm.greeting = response.data;
       })
        
    }
})();
