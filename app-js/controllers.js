//controller for home page 
bookApp.controller('HomeController', ['$scope', function($scope) {

}]);

//controller for searching books
bookApp.controller('BookSearchController', ['$scope','bookObjects', function($scope,bookObjects) {
    
    $scope.searchInput = "";
    
    $scope.submit = function(){
        bookObjects.get({ q: $scope.searchInput }, function (response) {

            $scope.searchResults = response.items;
        });
    }
}]);


//controller for when viewing reviews
bookApp.controller('BookInfoController', ['$scope', function($scope) {

}]);
