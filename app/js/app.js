'use strict';

// Declare app level module which depends on filters, controllers, services and directives
angular.module('PhoneCatApp', ['PhoneCatApp.filters', 'PhoneCatApp.controllers', 'PhoneCatApp.services', 'PhoneCatApp.directives']).
  config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/phones', { template: 'partials/phone-list.html', controller: 'PhoneListCtrl'} );	  
    $routeProvider.when('/phones/:phoneId', { template: 'partials/phone-detail.html', controller: 'PhoneDetailCtrl'});
    $routeProvider.otherwise({ redirectTo: '/phones' });
  }]);
