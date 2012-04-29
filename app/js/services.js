/* http://docs-next.angularjs.org/api/angular.module.ng */

angular.module('PhoneCatApp.services', ['ngResource']).
factory('Phone', function ($resource) { 
  return $resource('phones/:phoneId.json', { }, {
    'remove': { method: 'DELETE' }, 
    'initialize' : { method: 'GET' }
  });
});