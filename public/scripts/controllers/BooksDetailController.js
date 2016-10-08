angular
  .module('angularBooks')
  .controller('BooksDetailController', BooksDetailController);

BooksDetailController.$inject = ['$http', '$routeParams'];
function BooksDetailController (  $http,   $routeParams  ) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function successCallback(response) {
    console.log(response.data);
    vm.book = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

} // End BooksDetailController
