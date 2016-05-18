// Dependency Injection Function
function ListController ($scope, $http, URL) {

  init();

  function init() {
    $http.get(URL).then( (res) => {
      console.log(res);
      $scope.allFoods = res.data;
    });
  }

}

ListController.$inject = ['$scope', '$http', 'URL'];
export { ListController }
