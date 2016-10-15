(function() {

    function FlightSearchController(flightService, bookingEventService) {

        this.from = 'Hamburg';
        this.to = 'Graz';
        this.selectedFlight = null;
        this.flightService = flightService;
        this.bookingEventService = bookingEventService;

        this.getFlights = function () {
            return this.flightService.flights;
        }

        this.search = function () {

            return this
                .flightService
                .find(this.from, this.to)
                .catch(function (resp) {
                    console.debug(resp);
                });
        }

        this.select = function (f) {
            this.selectedFlight = f;
            this.bookingEventService.publish(f);
        }
    }

    angular
        .module('flight-app')
        .controller('FlightSearchController', FlightSearchController);

})();