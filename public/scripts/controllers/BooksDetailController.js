/***************************
 BOOKS DETAIL CONTROLLER JS
****************************/

angular
  .module('angularBooks')
  .controller('BooksDetailController', BooksDetailController);

// Get one book by id and send it to the books detail view
BooksDetailController.$inject = ['$http', '$routeParams', '$location'];
function BooksDetailController (  $http,   $routeParams, $location  ) {
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

  // Edit book info by id then redirect to books all view
  vm.editBook = function(bookToEdit) {
    console.log('updating book: ', bookToEdit);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
      data: {
        title: bookToEdit.title,
        author: bookToEdit.author,
        image: bookToEdit.image,
        releaseDate: bookToEdit.releaseDate
      }
    }).then(editBookSuccess, editBookError);

    function editBookSuccess(response){
      console.log('here\'s the UPDATED data for book', $routeParams.id, ':', response.data);
      vm.book = response.data;
      $location.path('/');
    }

    function editBookError(response){
      console.log('There was an error updating book id: ', $routeParams.id);
    }
  };

  vm.deleteBook = function(book) {
    console.log('deleting book: ', book.title);
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
    }).then(deleteBookSuccess, deleteBookError);

    function deleteBookSuccess(response){
      console.log('book delete response data:', response.data);
      $location.path('/');
    }
    function deleteBookError(response){
      console.log('There was an error updating book id: ', $routeParams.id);
    }
  };


} // End BooksDetailController
