//controller for home page 
bookApp.controller('HomeController', ['$scope', function($scope) {

}]);

//controller for searching books
bookApp.controller('BookSearchController', ['$scope','bookObjects', 'selectService',function($scope,bookObjects,selectService) {
    
    $scope.searchInput = "";
    
    //execute the request for the google books data through the book objects
    $scope.submit = function(){
        bookObjects.get({ q: $scope.searchInput }, function (response) {

            $scope.searchResults = response.items;
        });
    }
    
    //execute the connection of book objects between two controllers through clicking on the link
    $scope.linkToBook = function(obj){
        selectService.setBook(obj);
    };
    
    
}]);


//controller for when viewing reviews
bookApp.controller('BookInfoController', ['$scope','selectService', function($scope, selectService) {
    
    $scope.selectedBook = selectService.getBook();
        
}]);
