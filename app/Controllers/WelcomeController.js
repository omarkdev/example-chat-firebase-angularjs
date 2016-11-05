$app.controller("WelcomeController", [
    '$scope', 'UserFactory',
    function($scope, UserFactory){
        $scope.userLogin = function(){
            var nickUser = $scope.user.nick;

            UserFactory.set({
                nick: nickUser
            });
        }
    }
]);