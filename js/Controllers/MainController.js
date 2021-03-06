'use strict';
App.controller('MainController',['$rootScope','$window', '$scope','$location','FlightService','SharedData','AuthService','SessionService',  function($rootScope,$window, $scope,$location, 
		FlightService, SharedData,AuthService,SessionService) {
   //$scope.flightsDB = FlightService.populateFlightsList();
   
   //12.We are using the currentUser globals value, stored in authservice, when user is succesfully logged in.
   //we use this to shuffle between login and logout.
   if(!SessionService.getCookieData()) {
	   $scope.loginbutton = true;
	   $scope.logoutbutton = false;
   } else {
	   $scope.loginbutton = false;
	   $scope.logoutbutton = true;
   }
   
   
    $scope.search = function() {
        $scope.flights = FlightService.searchFlights($scope.form, $scope.flightsDB);
        SharedData.setFlights($scope.flights);
        console.log("Inside search function");
    };
    
}]);