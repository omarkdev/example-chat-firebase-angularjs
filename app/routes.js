$app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/views/welcome.html',
        controller: "WelcomeController"
    });
}]);
