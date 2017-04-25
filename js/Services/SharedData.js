App.service('SharedData', function(){
    
    this.flights = [];
    this.form = [];
    
    this.setFlights = function(flights) {
        this.flights = flights;
    }
    
    this.getFlights = function() {
        return this.flights;
    }
    
    this.setForm = function(formData) {
        this.form = formData;
    }
    
    this.getForm = function() {
        return this.formData;
    }
});