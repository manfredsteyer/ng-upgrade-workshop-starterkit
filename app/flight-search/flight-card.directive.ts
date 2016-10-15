import {Flight} from '../shared/flight';

import * as angular from 'angular';

class FlightCardController {
    item: Flight;
    selectedItem: Flight;

    select() {
        this.selectedItem = this.item;
    }
}

export function createFlightCardDirective(): angular.IDirective {
    return {
        controller: FlightCardController,
        templateUrl: './flight-card.directive.html',
        transclude: true,
        bindToController: true,
        controllerAs: '$ctrl',
        scope: {
            item: '=',
            selectedItem: '='
        }

    }
}