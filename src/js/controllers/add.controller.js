// Dependency Injection Function
function AddController ($scope, $http, URL) {

  $scope.addFoodItem = function(food) {

    $http.post(URL, food).then( (res) => {
      console.log(res);
    })
      $scope.food = {};
  }

  // Clear the form

}

AddController.$inject = ['$scope', '$http', 'URL'];
export { AddController };
