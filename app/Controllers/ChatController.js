$app.controller('ChatController', [
    '$scope', 'UserFactory', '$location',
    function($scope, UserFactory, $location){
        var userInfo = UserFactory.get();

        if(!userInfo || !userInfo.nick){
            return $location.path('/');
        }

        $scope.user = userInfo;
    }
]);