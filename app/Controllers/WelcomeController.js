$app.controller("WelcomeController", [
    '$scope', 'UserFactory', '$location',
    function($scope, UserFactory, $location){
        $scope.userLogin = function(){
            var nickUser = $scope.user.nick;

            UserFactory.set({
                nick: nickUser
            });

            return $location.path('/chat');
        }
    }
]);