/* http://docs-next.angularjs.org/guide/dev_guide.mvc.understanding_controller */

angular.module('PhoneCatApp.controllers', ['PhoneCatApp.services']).
  controller('PhoneCatCtrl', ['$scope', function($scope) {
    // nothing really to do here but declare controller
  }]).
  controller('PhoneListCtrl', ['$scope','Phone', function($scope, Phone) {
    $scope.orderProp = 'age';
    $scope.phones = Phone.query({ phoneId: 'phones'} );
  }]).
  controller('PhoneDetailCtrl', ['$scope','$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    var self = this;
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
     $scope.mainImageUrl = imageUrl;
    }; 
  }]);