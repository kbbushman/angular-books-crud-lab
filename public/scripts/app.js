console.log("Client Side is up and running...")

/*******************
 CLIENT-SIDE JS
 *******************/

angular
  .module('angularBooks', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/books-all.html',
      controllerAs: 'BooksAllCtrl',
      controller: 'BooksAllController'
    })
    .when('/books/:id', {
      templateUrl: '/views/templates/books-detail.html',
      controllerAs: 'BooksDetailCtrl',
      controller: 'BooksDetailController'
    })
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
