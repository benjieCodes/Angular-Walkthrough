// Dependency Injection Function
function SingleController ($scope, $http, URL, $stateParams) {
  console.log($stateParams);
}

SingleController.$inject = ['$scope', '$http', 'URL', '$stateParams'];
export { SingleController };
