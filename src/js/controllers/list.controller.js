// Dependency Injection Function
function ListController ($http, URL) {

  let vm = this;

  init();

  function init() {
    $http.get(URL).then( (res) => {
      console.log(res);
      vm.allFoods = res.data;
    });
  }

}

ListController.$inject = ['$http', 'URL'];
export { ListController }
