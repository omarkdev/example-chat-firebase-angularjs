$app.factory('UserFactory', function(){
    var user;

    return {
        get: function(){
            return user;
        },
        set: function(newUser){
            user = newUser;
        }
    };
});
