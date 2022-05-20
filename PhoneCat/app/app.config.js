'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/phonelisttable', {
          template: '<phone-list-table></phone-list-table>'
        }).
        when('/employees', {
          template: '<employee-list></employee-list>'
        }).
        when('/employees/:employeeId', {
          template: '<employee-list></employee-list>'
        }).
        otherwise('/phones');
    }
  ]);
