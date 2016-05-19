// Dependency Injection Function
function SingleController ($http, URL, $stateParams, $state) {

  let vm = this;

  vm.deleteItem = deleteItem;

  init()

  function init() {
    $http.get(URL + $stateParams.foodID).then( (res) => {
      vm.singleFood = res.data
    })
  }

  function deleteItem (foodID) {
    $http.delete(URL + foodID).then ( (res) => {
      $state.go('list');
    })
  }



}

SingleController.$inject = ['$http', 'URL', '$stateParams', '$state'];
export { SingleController };
