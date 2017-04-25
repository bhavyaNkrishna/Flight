App.service('FlightService', function(){
    
    this.flights = [];
    
    this.newFlight = function(departureCity, arrivalCity, departureDate, returnDate, departureTime, arrivalTime, flightNumber, airline, price){
        this.flight = {departureCity: departureCity, arrivalCity: arrivalCity, departureDate: departureDate, returnDate: returnDate, departureTime: departureTime, arrivalTime: arrivalTime, flightNumber: flightNumber, airline: airline, price: price};
        return this.flight;
    }
    
    this.populateFlightsList = function() {
        this.flights.push(this.newFlight("Miami", "Chicago", "4/21/2017", "4/28/2017", "8:00AM", "10:30AM", "26AM113", "American Airlines", 300));
        this.flights.push(this.newFlight("Fort Lauderdale", "Charlotte", "4/21/2017", "4/28/2017", "8:00AM", "10:30AM", "43DT116", "Delta", 300));
        this.flights.push(this.newFlight("New York", "Los Angeles", "4/21/2017", "4/28/2017", "8:00AM", "1:00pM", "56JB344", "Jet Blue", 300));
        return this.flights;
    }
    
    this.searchFlights = function(formData, flightsList) {
        /*this.flightResults = [];
        for (flight in flightsList) {
            if (formData.departureCity == flight.departureCity && formData.arrivalCity == flight.arrivalCity) {
                this.results.push(flight);
            }
        }
        console.log("Inside function");*/
        this.flightResults = [];
        this.flightResults = this.populateFlightsList();
        return this.flightResults;
    }

});