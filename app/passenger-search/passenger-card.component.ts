
export const PassengerCardComponent: angular.IComponentOptions = {
    templateUrl: './passenger-card.component.html',
    controllerAs: 'vm',
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    },
    controller: function() {
        this.select = () => {
            this.selectedItem = this.item;
            this.selectedItemChange(this.item);
        }
    }
}