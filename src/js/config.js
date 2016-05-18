function config ($stateProvider, $urlRouterProvider) {
  // If no 'state' is matched, then go to the homepage
  $urlRouterProvider.otherwise('/');

  // Define our app states
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'templates/list.tpl.html',
      controller: 'ListController'
    })
    .state('single', {
      url: '/single/:foodID',
      templateUrl: 'templates/single.tpl.html',
      controller: 'SingleController'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })
  ;

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
