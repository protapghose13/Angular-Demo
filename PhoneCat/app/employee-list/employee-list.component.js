'use strict';

// Register `employeeList` component, along with its associated controller and template
angular.
  module('employeeList').
  component('employeeList', {
    templateUrl: 'employee-list/employee-list.template.html',
    controller: ['employeeService', '$scope',
      function EmployeeListController(employeeService, $scope) {
        employeeService.getEmployees().then(function (employees) {
          $scope.employees = employees;
        });
        this.orderProp = 'firstName';

        var p = this;
        $scope.clicked = function(employee){
          p.employeeName = employee.firstName;
          window.location = "#!/employees/" + employee.id;
        }
      }
    ]
  });
