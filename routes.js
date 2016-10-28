//route for the home page
bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
                         templateUrl: '/pages/home.html',   
                         controller: 'homeController'
                        });
}]);

//route for the page to search a book
bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/info', {
                         templateUrl: '/pages/book-info.html',   
                         controller: 'infoController'
                        });
}]);

//route for a page to view reviews on the certain book
bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/review', {
                         templateUrl: '/pages/book-review.html',   
                         controller: 'reviewController'
                        });
}]);






