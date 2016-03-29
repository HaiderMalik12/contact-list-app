var app = angular.module('contactApp', []);
var person = {
    name: 'Haider',
    email: 'haidermalik504@gmail.com',
    number: '(112)111-111'
};

var person2 = {
    name: 'Faham',
    email: 'faham@gmail.com',
    number: '(333)333-333'
};
var person3 = {
    name: 'Mohsin',
    email: 'Mohsin@gmail.com',
    number: '3043-2222-211'
}

var contactList = [person, person2, person3];

app.controller('AppCtrl', function($scope) {

    $scope.contactList = contactList;
});
