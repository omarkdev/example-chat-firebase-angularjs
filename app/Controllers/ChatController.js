$app.controller('ChatController', [
    '$scope', 'UserFactory', '$location', '$firebaseArray',
    function($scope, UserFactory, $location, $firebaseArray){
        var userInfo = UserFactory.get();

        if(!userInfo || !userInfo.nick)
            return $location.path('/');

        $scope.user = userInfo;

        var ref = firebase.database().ref().child('messages');

        var messages = $firebaseArray(ref);
        $scope.messages = messages;
    }
]);