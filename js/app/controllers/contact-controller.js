angular.module('App').controller('ContactController', ['$scope', 'ContactService', function ($scope, contactService) {

    contactService.get().then(function (data) {
        $scope.contactData = data;
    }, function (error) {
        console.log(error);
    });

}]);
