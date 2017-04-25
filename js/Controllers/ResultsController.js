App.controller('ResultsController', function($scope, FlightService, SharedData) {
    //$scope.flightsDB = FlightService.populateFlightsList();
    //SharedData.setFlights($scope.flightsDB);
    $scope.flights = FlightService.populateFlightsList();
    console.log("results loaded");
});