// Dependency Injection Function
function AddController ($http, URL, $state) {

  let vm = this;

  vm.addFoodItem = addFoodItem;

  function addFoodItem(food) {
    $http.post(URL, food).then( (res) => {
      // Route the user to the list page
      $state.go('list');
    });

  }


}

AddController.$inject = ['$http', 'URL', '$state'];
export { AddController };
