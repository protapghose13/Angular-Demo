'use strict';

const btnType = {
  Create : "Create",
  Save : "Save"
}

function isValid(value){
  return (value !== undefined && value !== null);
}

// Register `employeeDetail` component, along with its associated controller and template
angular.
  module('employeeDetail').
  component('employeeDetail', {
    templateUrl: 'employee-detail/employee-detail.template.html',
    controller: ['$routeParams', 'employeeService', '$scope',
      function EmployeeDetailController($routeParams, employeeService, $scope) {
        
        if(isValid($routeParams.employeeId)){
          employeeService.getEmployee($routeParams.employeeId).then(function (employee) {
            if(isValid(employee)){
              $scope.firstName = employee.firstName;
              $scope.lastName = employee.lastName;
              $scope.emailId = employee.emailId;
              $scope.id = employee.id;
              $scope.detailHeader = "Hello " + employee.firstName + ",";
              $scope.submitButtonValue = btnType.Save;
            }
            else{
              $scope.detailHeader = "Add new employee";
              $scope.submitButtonValue = btnType.Create;
              window.location = 'http://localhost:8000/#!/employees';
            }
          });
        }
        else{
          $scope.detailHeader = "Add new employee";
          $scope.submitButtonValue = btnType.Create;
        }

        $scope.saveEmployee = function(){
          if(btnType.Create === $scope.submitButtonValue){
            const employee = {
              firstName: $scope.firstName, 
              lastName: $scope.lastName, 
              emailId: $scope.emailId
            };
            employeeService.createEmployee(employee);
          }
          else{
            const employee = {
              id : $scope.id,
              firstName: $scope.firstName, 
              lastName: $scope.lastName, 
              emailId: $scope.emailId
            };
            employeeService.updateEmployee(employee);
          }
        }

        $scope.deleteEmployee = function(){
          employeeService.deleteEmployee($scope.id);
        }
      }
    ]
  });