var app = angular.module('contactApp', []);

debugger;
app.controller('AppCtrl', function($scope, $http) {

    // send request to the server for data
    $http.get('/contactList').success(function(response) {
        console.log('I got The data I requested');
        // view display the data
        $scope.contactList = response;
    });


});
