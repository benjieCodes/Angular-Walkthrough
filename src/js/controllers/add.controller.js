// Dependency Injection Function
function AddController ($scope, $http, URL, $state) {

  $scope.addFoodItem = function(food) {

    $http.post(URL, food).then( (res) => {

      // Route the user to the list page
      $state.go('list');
    });

  }


}

AddController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddController };
