bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
                         templateUrl: 'book-info.html',   
                         controller: 'infoController'
                        });
}]);


