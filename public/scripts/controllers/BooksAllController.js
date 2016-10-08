/************************
 BOOKS ALL CONTROLLER JS
*************************/

angular
  .module('angularBooks')
  .controller('BooksAllController', BooksAllController);

// Get all books and send them to the books view
BooksAllController.$inject = ['$http', '$routeParams'];
function BooksAllController (  $http,   $routeParams  ) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    console.log(response.data.books);
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}; // End BooksAllController
