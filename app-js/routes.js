//route for the home page
bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
                         templateUrl: '/pages/home.html',   
                         controller: 'HomeController'
                        });
                        
     $routeProvider.when('/search', {
                         templateUrl: '/pages/book-search.html',   
                         controller: 'BookSearchController'
                        });
                        
     $routeProvider.when('/info', {
                         templateUrl: '/pages/book-info.html',   
                         controller: 'BookInfoController'
                        });
    
    
}]);







