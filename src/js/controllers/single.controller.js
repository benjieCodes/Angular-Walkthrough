// Dependency Injection Function
function SingleController ($scope, $http, URL, $stateParams, $state) {
  console.log($stateParams.foodID);

  init()

  function init() {
    $http.get(URL + $stateParams.foodID).then( (res) => {
      $scope.singleFood = res.data
    })
  }

  $scope.deleteItem = function (foodID) {
    $http.delete(URL + foodID).then ( (res) => {
      $state.go('list');
    })
  }



}

SingleController.$inject = ['$scope', '$http', 'URL', '$stateParams', '$state'];
export { SingleController };
