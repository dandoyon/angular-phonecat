/* http://docs-next.angularjs.org/api/angular.module.ng.$filterProvider */

angular.module('PhoneCatApp.filters', []).
  filter('checkmark', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    }
});
